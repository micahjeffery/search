const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');

const source = fs.readFileSync(path.join(__dirname, '../src/index.js'), 'utf8');

function loadWorker(overrides = {}) {
  const timers = new Map();
  let timerId = 0;
  const context = vm.createContext({
    URL, Request, Response, AbortController, TextDecoder, crypto: require('node:crypto').webcrypto,
    setTimeout(callback) { timers.set(++timerId, callback); return timerId; },
    clearTimeout(id) { timers.delete(id); },
    fetch() { throw new Error('Unexpected network request in test'); },
    ...overrides,
  });
  vm.runInContext(source.replace('export default {', 'globalThis.worker = {'), context);
  return { context, timers, expire() {
    for (const [id, callback] of [...timers]) { timers.delete(id); callback(); }
  } };
}

// Extract the functions from the rendered script, so template escaping is exercised too.
function declaration(script, prefix, terminator) {
  const start = script.indexOf(prefix);
  assert.ok(start >= 0, `Missing declaration ${prefix}`);
  for (let end = script.indexOf(terminator, start); end >= 0; end = script.indexOf(terminator, end + 1)) {
    const candidate = script.slice(start, end + 1);
    try { new vm.Script(candidate); return candidate; } catch {}
  }
  throw new Error(`Invalid declaration ${prefix}`);
}

async function loadBrowser() {
  const { context: worker } = loadWorker();
  const html = await (await worker.worker.fetch(new Request('https://search.test/'))).text();
  const script = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)].at(-1)[1];
  const storage = new Map();
  const htmlSinks = [];
  const context = vm.createContext({
    URL, crypto: require('node:crypto').webcrypto,
    localStorage: {
      getItem: key => storage.get(key) ?? null,
      setItem: (key, value) => storage.set(key, value),
      removeItem: key => storage.delete(key),
      key: index => [...storage.keys()][index],
      get length() { return storage.size; },
    },
    document: { createElement() { return {
      dataset: {}, setAttribute() {}, append() {},
      set innerHTML(value) { htmlSinks.push(value); },
    }; } },
    settingsImportMode: { value: 'replace' },
    settingsIncludeHistory: { checked: false },
    sourceCardByKey: new Map(), favorites: [], localBangs: [], historyDisabled: false,
    FORMULA_TYPE_ICON_SVG: '<svg></svg>', LOCAL_BANG_LIMIT: 100,
    LOCAL_BANGS_STORAGE_KEY: 'search-local-bangs-v1',
    MULTISEARCH_STORAGE_PREFIX: 'search-multisearch-selected:', RECENT_SEARCH_LIMIT: 20,
  });
  for (const name of ['STORAGE', 'HOME_ENGINE_PATHS', 'BANG_BUILDER_ALIAS_OWNERS', 'FORMULA_DATA', 'FORMULA_FUNCTIONS']) {
    vm.runInContext(declaration(script, `const ${name} = `, ';'), context);
  }
  for (const name of [
    'readStorage', 'writeStorage', 'normalizeBuilderHttpUrl', 'normalizeBuilderSearchUrl',
    'normalizeStoredFormulaParams', 'normalizeFormulaOutput', 'trustedFormulaIconSvg',
    'normalizeFormulaParam', 'formulaParamKey', 'formulaParamDisplayName',
    'tokenizeFormulaExpression', 'inspectFormulaDefinition', 'validateFormulaDefinition',
    'makeLocalBangId', 'normalizeLocalBang', 'buildLocalBangCard', 'clearImportableSettings',
    'prepareImportedLocalBangs', 'importSettingsPayload', 'readLocalBangs',
    'collectMultisearchSettings', 'buildSettingsExport', 'readThemeLock', 'readLayoutLock', 'readHiddenBangs',
  ]) {
    vm.runInContext(declaration(script, `function ${name}(`, '}'), context);
  }
  return { context, storage, htmlSinks };
}

const formula = (id, alias, extras = {}) => ({
  id, kind: 'formula', aliases: [alias], name: alias,
  params: ['x'], expression: 'x', output: '{number}', ...extras,
});
const bang = (id, alias) => ({ id, aliases: [alias], home: 'https://example.com/' });

test('imports and reloads discard active formula markup before HTML insertion', async () => {
  const { context, storage, htmlSinks } = await loadBrowser();
  const payloads = [
    '<svg onload="window.__AUDIT_MARKER__=1"></svg>',
    '<img src=x onerror="window.__AUDIT_MARKER__=1">',
    '</span><iframe srcdoc="active markup"></iframe>',
  ];
  for (const iconSvg of payloads) {
    context.importSettingsPayload({ version: 1, settings: {
      localBangs: [formula('unsafe', 'auditproof', { iconSvg })],
    } });
    assert.equal(JSON.parse(storage.get('search-local-bangs-v1'))[0].iconSvg, '');
    const reloaded = context.readLocalBangs();
    context.buildLocalBangCard(reloaded[0]);
    // Also exercise legacy localStorage records that predate safe imports.
    storage.set('search-local-bangs-v1', JSON.stringify([formula('old', 'auditproof', { iconSvg })]));
    assert.equal(context.readLocalBangs()[0].iconSvg, '');
    context.buildLocalBangCard(formula('direct', 'auditproof', { iconSvg }));
    assert.ok(htmlSinks.every(value => !value.includes(iconSvg)));
  }
});

test('trusted built-in formula icons survive backup import and rendering', async () => {
  const { context, htmlSinks } = await loadBrowser();
  const iconSvg = vm.runInContext('FORMULA_DATA.find(formula => formula.iconSvg).iconSvg', context);
  const normalized = context.normalizeLocalBang(formula('safe', 'auditproof', { iconSvg }));
  assert.equal(normalized.iconSvg, iconSvg);
  context.buildLocalBangCard(normalized);
  assert.ok(htmlSinks.some(value => value.includes(iconSvg)));
});

test('export and replace import preserve independent formula and bang namespaces', async () => {
  const { context } = await loadBrowser();
  context.localBangs = [formula('google-formula', 'g'), formula('local-formula', 'myalias'), bang('local-bang', 'myalias')]
    .map(item => context.normalizeLocalBang(item));
  const backup = context.buildSettingsExport();
  context.importSettingsPayload(JSON.parse(JSON.stringify(backup)));
  assert.equal(context.readLocalBangs().length, 3);
  assert.deepEqual(Array.from(context.localBangs, item => item.id), ['google-formula', 'local-formula', 'local-bang']);
});

test('merge import permits the other namespace and validates same-ID changes', async () => {
  const { context } = await loadBrowser();
  context.settingsImportMode.value = 'merge';
  context.localBangs = [context.normalizeLocalBang(bang('existing', 'mine'))];
  context.importSettingsPayload({ version: 1, settings: { localBangs: [formula('formula', 'mine')] } });
  assert.equal(context.localBangs.length, 2);
  context.importSettingsPayload({ version: 1, settings: { localBangs: [formula('existing', 'changed')] } });
  assert.equal(context.localBangs.length, 2);
  assert.equal(context.localBangs.find(item => item.id === 'existing').kind, 'formula');
});

test('invalid or conflicting imports preserve existing stored settings', async () => {
  const { context, storage } = await loadBrowser();
  storage.set('search-help-theme', 'dark');
  storage.set('search-local-bangs-v1', JSON.stringify([bang('original', 'mine')]));
  const before = [...storage];
  for (const localBangs of [
    [bang('collision', 'g')], [formula('collision', 'npv')], [null], 'invalid',
    [formula('one', 'duplicate'), formula('two', 'duplicate')],
    Array.from({ length: 101 }, (_, i) => formula(String(i), 'formula' + i)),
  ]) {
    assert.throws(() => context.importSettingsPayload({ version: 1, settings: { theme: 'light', localBangs } }));
    assert.deepEqual([...storage], before);
  }
});

test('private, mapped, multicast and special-use IPs are blocked before fetching', async () => {
  const { context } = loadWorker();
  for (const host of [
    '127.0.0.1', '2130706433', '10.0.0.1', '192.168.1.1',
    '[::ffff:127.0.0.1]', '[::ffff:7f00:1]', '[0:0:0:0:0:ffff:a00:1]',
    '[::ffff:192.168.1.1]', '[::1]', '[::]', '[fc00::1]', '[fd00::1]',
    '[fe80::1]', '[ff02::1]', '[2001:db8::1]', '[3fff::1]', '[2002:7f00:1::1]',
  ]) {
    await assert.rejects(context.fetchDiscoveryResource('http://' + host + '/'), /not allowed/, host);
  }
  for (const host of ['[2606:4700:4700::1111]', '[2001:4860:4860::8888]', '[::ffff:8.8.8.8]', 'example.com']) {
    assert.doesNotThrow(() => context.normalizeDiscoveryUrl('https://' + host));
  }
});

test('redirects are revalidated before the next fetch', async () => {
  let calls = 0;
  const { context, timers } = loadWorker({ fetch: async () => {
    calls++;
    return new Response(null, { status: 302, headers: { location: 'http://[::ffff:127.0.0.1]/' } });
  } });
  await assert.rejects(context.fetchDiscoveryResource('https://example.com'), /not allowed/);
  assert.equal(calls, 1);
  assert.equal(timers.size, 0);
});

test('stalled response bodies are cancelled after headers have arrived', async () => {
  let cancelled = false;
  const body = new ReadableStream({ cancel() { cancelled = true; } });
  const { context, timers, expire } = loadWorker({ fetch: async () => new Response(body) });
  const { response } = await context.fetchDiscoveryResource('https://example.com');
  const reading = context.readTextLimited(response, 1024);
  assert.equal(timers.size, 1);
  expire();
  await assert.rejects(reading, /timed out/);
  assert.equal(cancelled, true);
  assert.equal(timers.size, 0);
  assert.equal(response.body.locked, false);
});

test('completed reads and oversized declared bodies release timers and streams', async () => {
  const { context, timers } = loadWorker();
  assert.equal(await context.readTextLimited(new Response('hello'), 5), 'hello');
  assert.equal(timers.size, 0);
  let cancelled = false;
  const response = new Response(new ReadableStream({ cancel() { cancelled = true; } }), {
    headers: { 'content-length': '2000' },
  });
  await assert.rejects(context.readTextLimited(response, 100), /too large/);
  assert.equal(cancelled, true);
  assert.equal(timers.size, 0);
});

function inspectionBody(bytes) {
  const base = JSON.stringify({ url: 'https://example.com/', padding: '' });
  return JSON.stringify({ url: 'https://example.com/', padding: 'x'.repeat(bytes - Buffer.byteLength(base)) });
}

test('inspection counts actual request bytes at and beyond the limit', async () => {
  for (const [bytes, headers, expected] of [
    [16384, {}, 200], [16385, {}, 413], [20047, {}, 413], [20047, { 'content-length': '1' }, 413],
  ]) {
    let fetches = 0;
    const { context, timers } = loadWorker({ fetch: async () => { fetches++; return new Response(null, { status: 404 }); } });
    const request = new Request('https://search.test/api/site-inspect', { method: 'POST', headers, body: inspectionBody(bytes) });
    const response = await context.worker.fetch(request);
    assert.equal(response.status, expected);
    if (expected === 413) assert.equal(fetches, 0);
    assert.equal(timers.size, 0);
  }
});

test('oversized chunked request bodies are cancelled without fetching', async () => {
  let cancelled = false;
  const body = new ReadableStream({
    pull(controller) { controller.enqueue(new Uint8Array(9000)); },
    cancel() { cancelled = true; },
  });
  const { context, timers } = loadWorker();
  const request = new Request('https://search.test/api/site-inspect', { method: 'POST', body, duplex: 'half' });
  const response = await context.worker.fetch(request);
  assert.equal(response.status, 413);
  assert.equal(cancelled, true);
  assert.equal(timers.size, 0);
});

test('ordinary redirects and all built-in bang routes still work', async () => {
  const { context } = loadWorker();
  const ordinary = await context.worker.fetch(new Request('https://search.test/google/?q=a%26b'));
  assert.equal(ordinary.headers.get('location'), 'https://www.google.com/search?q=a%26b');
  for (const alias of vm.runInContext('[...BANGS.keys()]', context)) {
    for (const suffix of ['', ' a&b / # ? ü']) {
      const response = await context.worker.fetch(new Request('https://search.test/?q=' + encodeURIComponent('!' + alias + suffix)));
      assert.ok(response.status < 400, alias);
    }
  }
});

test('generated homepage, local resolver and multisearch scripts remain valid', async () => {
  const { context } = loadWorker();
  const routes = ['/', '/help', '/?q=%3D5%2B5', '/?q=%21unknown%20%3C%2Fscript%3E',
    ...vm.runInContext('MULTI_SEARCHES.map(multi => "/multi/" + multi.id + "?q=test")', context)];
  for (const route of routes) {
    const response = await context.worker.fetch(new Request('https://search.test' + route));
    assert.equal(response.status, 200);
    const html = await response.text();
    const scripts = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)];
    assert.ok(scripts.length > 0);
    scripts.forEach(match => assert.doesNotThrow(() => new vm.Script(match[1]), route));
  }
});
