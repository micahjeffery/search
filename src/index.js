var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/index.js
var sites = [
  // Github link
  {
    aliases: ["bang", "bangs", "search", "home", "repo"],
    home: "https://github.com/micahjeffery/search"
  },
  {
    aliases: ["edit"],
    home: "https://github.com/micahjeffery/search/edit/main/src/index.js"
  },
  // Google
  {
    aliases: ["g", "goog", "google"],
    home: "https://www.google.com/",
    search: "https://www.google.com/search?q={q}"
  },
  {
    aliases: ["gi", "gimg", "gimage", "gimages"],
    home: "https://images.google.com/",
    search: "https://www.google.com/search?tbm=isch&q={q}"
  },
  {
    aliases: ["gv", "gvideo", "gvideos"],
    home: "https://www.google.com/search?tbm=vid",
    search: "https://www.google.com/search?tbm=vid&q={q}"
  },
  {
    aliases: ["gs", "gshop", "shopping"],
    home: "https://shopping.google.com/",
    search: "https://www.google.com/search?tbm=shop&q={q}"
  },
  {
    aliases: ["gn", "gnews", "news"],
    home: "https://news.google.com/",
    search: "https://www.google.com/search?tbm=nws&q={q}"
  },
  {
    aliases: ["m", "gm", "gmap", "gmaps", "maps"],
    home: "https://www.google.com/maps",
    search: "https://www.google.com/maps/search/{q}"
  },
  {
    aliases: ["go", "gma", "gmail", "mail"],
    home: "https://mail.google.com/",
    search: "https://mail.google.com/mail/u/0/#search/{q}"
  },
  {
    aliases: ["scholar", "gscholar"],
    home: "https://scholar.google.com/",
    search: "https://scholar.google.com/scholar?q={q}"
  },
  // DuckDuckGo
  {
    aliases: ["d", "duck", "ddg"],
    home: "https://duckduckgo.com/",
    search: "https://duckduckgo.com/?q={q}"
  },
  {
    aliases: ["di", "dimg", "dimage", "dimages"],
    home: "https://duckduckgo.com/?iax=images&ia=images",
    search: "https://duckduckgo.com/?q={q}&iax=images&ia=images"
  },
  {
    aliases: ["dv", "dvideo", "dvideos"],
    home: "https://duckduckgo.com/?iax=videos&ia=videos",
    search: "https://duckduckgo.com/?q={q}&iax=videos&ia=videos"
  },
  {
    aliases: ["dn", "dnews"],
    home: "https://duckduckgo.com/?iar=news&ia=news",
    search: "https://duckduckgo.com/?q={q}&iar=news&ia=news"
  },
  {
    aliases: ["dm", "dmaps"],
    home: "https://duckduckgo.com/?iaxm=maps",
    search: "https://duckduckgo.com/?q={q}&iaxm=maps"
  },
  {
    aliases: ["noai", "noaiddg", "naiddg"],
    home: "https://noai.duckduckgo.com/",
    search: "https://noai.duckduckgo.com/?q={q}"
  },
  {
    aliases: ["ai", "duckai", "duck"],
    home: "https://duck.ai/"
  },
  // Brave
  {
    aliases: ["b", "brave"],
    home: "https://search.brave.com/",
    search: "https://search.brave.com/search?q={q}"
  },
  {
    aliases: ["bi", "bimg", "bimage", "bimages"],
    home: "https://search.brave.com/images",
    search: "https://search.brave.com/images?q={q}"
  },
  {
    aliases: ["bn", "bnews"],
    home: "https://search.brave.com/news",
    search: "https://search.brave.com/news?q={q}"
  },
  {
    aliases: ["bv", "bvideo", "bvideos"],
    home: "https://search.brave.com/videos",
    search: "https://search.brave.com/videos?q={q}"
  },
  // Shopping / reference
  {
    aliases: ["e", "ebay"],
    home: "https://www.ebay.com/",
    search: "https://www.ebay.com/sch/i.html?_nkw={q}"
  },
  {
    aliases: ["a", "amz", "amazon"],
    home: "https://www.amazon.com/",
    search: "https://www.amazon.com/s?k={q}"
  },
  {
    aliases: ["ccc", "camel", "camelcamelcamel"],
    home: "https://camelcamelcamel.com/",
    search: "https://camelcamelcamel.com/search?sq={q}"
  },
  {
    aliases: ["wiki", "w", "wikipedia"],
    home: "https://www.wikipedia.org/",
    search: "https://en.wikipedia.org/wiki/Special:Search?search={q}"
  },
  {
    aliases: ["u", "ud", "urban", "urbandictionary"],
    home: "https://www.urbandictionary.com/",
    search: "https://www.urbandictionary.com/define.php?term={q}"
  },
  {
    aliases: ["scrabble", "scrab", "words", "wordfinder", "bg", "bananagram"],
    home: "https://scrabble.merriam.com/word-lists",
    search: "https://scrabble.merriam.com/finder/{q}"
  }, 
  {
    aliases: ["gh", "github"],
    home: "https://github.com/",
    search: "https://github.com/search?q={q}"
  },
  {
    aliases: ["hltr", "howlongtoread", "readtime"],
    home: "https://howlongtoread.com/",
    search: "https://howlongtoread.com/results/{q}"
  },
  {
    aliases: ["pubmed", "pub"],
    home: "https://pubmed.ncbi.nlm.nih.gov/",
    search: "https://pubmed.ncbi.nlm.nih.gov/?term={q}"
  },
  {
    aliases: ["hibp", "pwned", "haveibeenpwned"],
    home: "https://haveibeenpwned.com/",
    search: "https://haveibeenpwned.com/account/{q}"
  },
  {
    aliases: ["car", "carcare", "carcarekiosk"],
    home: "https://www.carcarekiosk.com/",
    search: "https://www.carcarekiosk.com/search?q={q}"
  },
  {
    aliases: ["app", "appliance", "applianceparts", "appliancepartspros"],
    home: "https://www.appliancepartspros.com/"
  },
  {
    aliases: ["texture", "textures", "texturelabs"],
    home: "https://texturelabs.org/",
    search: "https://texturelabs.org/?search_type=texture&s={q}"
  },
  // Media / social
  {
    aliases: ["yt", "youtube"],
    home: "https://www.youtube.com/",
    search: "https://www.youtube.com/results?search_query={q}"
  },
  {
    aliases: ["s", "spotify"],
    home: "https://open.spotify.com/",
    search: "https://open.spotify.com/search/{q}"
  },
  {
    aliases: ["imdb"],
    home: "https://www.imdb.com/",
    search: "https://www.imdb.com/find/?q={q}"
  },
  {
    aliases: ["lb", "letterboxd"],
    home: "https://letterboxd.com/",
    search: "https://letterboxd.com/search/{q}/"
  },
  {
    aliases: ["jw", "justwatch"],
    home: "https://www.justwatch.com/",
    search: "https://www.justwatch.com/us/search?q={q}"
  },
  {
    aliases: ["l", "li", "linkedin"],
    home: "https://www.linkedin.com/",
    search: "https://www.linkedin.com/search/results/all/?keywords={q}"
  },

    // Bible
  {
    aliases: ["blb", "bible", "blbesv", "esv"],
    home: "https://www.blueletterbible.org/esv/jhn/1/1/",
    search: "https://www.blb.org/search/preSearch.cfm?plugin=yes&Criteria={q}&t=ESV"
  },
  {
    aliases: ["lsb", "blblsb"],
    home: "https://www.blueletterbible.org/lsb/jhn/1/1/",
    search: "https://www.blb.org/search/preSearch.cfm?plugin=yes&Criteria={q}&t=LSB"
  },
  {
    aliases: ["niv", "blbniv"],
    home: "https://www.blueletterbible.org/niv/jhn/1/1/",
    search: "https://www.blb.org/search/preSearch.cfm?plugin=yes&Criteria={q}&t=NIV"
  },
  {
    aliases: ["kjv", "blbkjv"],
    home: "https://www.blueletterbible.org/kjv/jhn/1/1/",
    search: "https://www.blb.org/search/preSearch.cfm?plugin=yes&Criteria={q}&t=KJV"
  },
  
  // PC / games / deals
  {
    aliases: ["hlb", "hltb", "howlongtobeat"],
    home: "https://howlongtobeat.com/",
    search: "https://howlongtobeat.com/?q={q}"
  },
  {
    aliases: ["itad", "isthereanydeal"],
    home: "https://isthereanydeal.com/",
    search: "https://isthereanydeal.com/search/?q={q}"
  },
  {
    aliases: ["eneba"],
    home: "https://www.eneba.com/us/",
    search: "https://www.eneba.com/us/store/all?text={q}"
  },
  {
    aliases: ["beforeiplay", "bip"],
    home: "https://beforeiplay.com/",
    search: "https://beforeiplay.com/index.php?search={q}&title=Special%3ASearch&go=Go"
  },
  {
    aliases: ["ptn", "protondb"],
    home: "https://www.protondb.com/",
    search: "https://www.protondb.com/search?q={q}"
  },
  {
    aliases: ["ste", "steam"],
    home: "https://store.steampowered.com/",
    search: "https://store.steampowered.com/search/?term={q}"
  },
  {
    aliases: ["steamdb", "sdb"],
    home: "https://steamdb.info/",
    search: "https://steamdb.info/search/?a=app&q={q}"
  },
  {
    aliases: ["pcpp", "pcpartpicker", "partpicker"],
    home: "https://pcpartpicker.com/",
    search: "https://pcpartpicker.com/search/?q={q}"
  },
  // 3D printing
  {
    aliases: ["printables", "prusa", "prusaprinters"],
    home: "https://www.printables.com/",
    search: "https://www.printables.com/search/models?q={q}"
  },
  {
    aliases: ["mw", "maker", "makerworld"],
    home: "https://makerworld.com/en",
    search: "https://makerworld.com/en/search/models?keyword={q}"
  },
  {
    aliases: ["thing", "thingiverse"],
    home: "https://www.thingiverse.com/",
    search: "https://www.thingiverse.com/search?q={q}&type=things"
  },
  {
    aliases: ["cults", "cults3d"],
    home: "https://cults3d.com/en",
    search: "https://cults3d.com/en/search?q={q}"
  },
  // Finance / tax / government
  {
    aliases: ["death", "estate"],
    home: "https://www.irs.gov/businesses/small-businesses-self-employed/estate-tax"
  },
  {
    aliases: ["fed", "rate", "fedfunds"],
    home: "https://fred.stlouisfed.org/series/fedfunds"
  },
  {
    aliases: ["inflation"],
    home: "https://fred.stlouisfed.org/graph/?g=1wmdD"
  },
  {
    aliases: ["ira"],
    home: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-ira-contribution-limits"
  },
  {
    aliases: ["ltcg", "capitalgains"],
    home: "https://www.nerdwallet.com/taxes/learn/capital-gains-tax-rates#:~:text=Taxes%20on%20stocks-,Capital%20gains%20tax%20rate%202026,-The%20following%20rates"
  },
  {
    aliases: ["standard", "std", "deduction"],
    home: "https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2026-including-amendments-from-the-one-big-beautiful-bill#:~:text=standard%20deduction%20is%20%2423%2C625"
  },
  {
    aliases: ["tariff", "tarrif", "tarif", "tarriff"],
    home: "https://bipartisanpolicy.org/explainer/tariff-tracker/"
  },
  {
    aliases: ["tax", "brackets", "taxbrackets"],
    home: "https://www.forbes.com/advisor/taxes/taxes-federal-income-tax-bracket/#:~:text=maintains%20the%20previous%20tax%20brackets%3A"
  },
  {
    aliases: ["vbil", "bil", "sgov"],
    home: "https://www.youtube.com/watch?v=DSwBc-d9Ukc"
  },
  {
    aliases: ["sec", "edgar"],
    home: "https://www.sec.gov/edgar/search/",
    search: "https://www.sec.gov/edgar/search/#/q={q}&filter_forms=10-K"
  },
  {
    aliases: ["rh", "robinhood", "hood"],
    home: "https://robinhood.com/",
    search: "https://robinhood.com/stocks/{q}"
  },
  {
    aliases: ["fred", "stlouisfed"],
    home: "https://fred.stlouisfed.org/",
    search: "https://fred.stlouisfed.org/searchresults?st={q}"
  },
  // Translation
  {
    aliases: ["gt", "translate", "gtranslate"],
    home: "https://translate.google.com/",
    search: "https://translate.google.com/?sl=auto&tl=en&text={q}&op=translate"
  },
  {
    aliases: ["deepl", "dl"],
    home: "https://www.deepl.com/translator",
    search: "https://www.deepl.com/translator#xx/en/{q}"
  },
  {
    aliases: ["enes"],
    home: "https://www.deepl.com/translator#en/es",
    search: "https://www.deepl.com/translator#en/es/{q}"
  },
  {
    aliases: ["esen"],
    home: "https://www.deepl.com/translator#es/en",
    search: "https://www.deepl.com/translator#es/en/{q}"
  },
  {
    aliases: ["enfr"],
    home: "https://www.deepl.com/translator#en/fr",
    search: "https://www.deepl.com/translator#en/fr/{q}"
  },
  {
    aliases: ["fren"],
    home: "https://www.deepl.com/translator#fr/en",
    search: "https://www.deepl.com/translator#fr/en/{q}"
  },
  {
    aliases: ["esfr"],
    home: "https://www.deepl.com/translator#es/fr",
    search: "https://www.deepl.com/translator#es/fr/{q}"
  },
  {
    aliases: ["fres"],
    home: "https://www.deepl.com/translator#fr/es",
    search: "https://www.deepl.com/translator#fr/es/{q}"
  },
  {
    aliases: ["ende"],
    home: "https://www.deepl.com/translator#en/de",
    search: "https://www.deepl.com/translator#en/de/{q}"
  },
  {
    aliases: ["deen"],
    home: "https://www.deepl.com/translator#de/en",
    search: "https://www.deepl.com/translator#de/en/{q}"
  },
  {
    aliases: ["enit"],
    home: "https://www.deepl.com/translator#en/it",
    search: "https://www.deepl.com/translator#en/it/{q}"
  },
  {
    aliases: ["iten"],
    home: "https://www.deepl.com/translator#it/en",
    search: "https://www.deepl.com/translator#it/en/{q}"
  },
  {
    aliases: ["enpt"],
    home: "https://www.deepl.com/translator#en/pt",
    search: "https://www.deepl.com/translator#en/pt/{q}"
  },
  {
    aliases: ["pten"],
    home: "https://www.deepl.com/translator#pt/en",
    search: "https://www.deepl.com/translator#pt/en/{q}"
  },
  {
    aliases: ["enja"],
    home: "https://www.deepl.com/translator#en/ja",
    search: "https://www.deepl.com/translator#en/ja/{q}"
  },
  {
    aliases: ["jaen"],
    home: "https://www.deepl.com/translator#ja/en",
    search: "https://www.deepl.com/translator#ja/en/{q}"
  },
  {
    aliases: ["enzh"],
    home: "https://www.deepl.com/translator#en/zh",
    search: "https://www.deepl.com/translator#en/zh/{q}"
  },
  {
    aliases: ["zhen"],
    home: "https://www.deepl.com/translator#zh/en",
    search: "https://www.deepl.com/translator#zh/en/{q}"
  },
  {
    aliases: ["enko"],
    home: "https://www.deepl.com/translator#en/ko",
    search: "https://www.deepl.com/translator#en/ko/{q}"
  },
  {
    aliases: ["koen"],
    home: "https://www.deepl.com/translator#ko/en",
    search: "https://www.deepl.com/translator#ko/en/{q}"
  },
  // Tools
  {
    aliases: ["caption", "cap"],
    home: "https://caption.ninja/"
  },
  {
    aliases: ["case"],
    home: "https://it-tools.tech/case-converter"
  },
  {
    aliases: ["color", "coolors"],
    home: "https://coolors.co/?home"
  },
  {
    aliases: ["cursor", "cursors"],
    home: "https://github.com/wrinkdater/Posys-Cursors-Improved-by-wrinkdater"
  },
  {
    aliases: ["download", "cobalt"],
    home: "https://cobalt.tools/"
  },
  {
    aliases: ["draw", "excalidraw"],
    home: "https://excalidraw.com/"
  },
  {
    aliases: ["emoji"],
    home: "https://it-tools.tech/emoji-picker"
  },
  {
    aliases: ["file", "worm", "transfer", "wormhole"],
    home: "https://wormhole.app/"
  },
  {
    aliases: ["font", "whatfont"],
    home: "https://www.whatfontis.com/"
  },
  {
    aliases: ["vdo", "obs"],
    home: "https://vdo.ninja/"
  },
  {
    aliases: ["ocr"],
    home: "https://www.onlineocr.net/"
  },
  {
    aliases: ["pdf"],
    home: "https://tinywow.com/tools/pdf"
  },
  {
  aliases: ["qr", "qrcode"],
  home: "https://quickchart.io/qr-code-api/#:~:text=Build%20your%20own%20QR%20code",
  search: "https://quickchart.io/qr?text={q}"
  }, 
  {
  aliases: ["qrdecode", "qrd"],
  home: "http://zxing.org/w/decode?u={{qe}}",
  search: "https://zxing.org/w/decode.jspx"
  },  
  {
    aliases: ["sms"],
    home: "https://receive-sms.cc/"
  },
  {
    aliases: ["spam", "temp", "tempmail"],
    home: "https://temp-mail.org/"
  },
  {
    aliases: ["test", "speed", "fast"],
    home: "https://fast.com/"
  },
  {
    aliases: ["text"],
    home: "https://it-tools.tech/text-statistics"
  },
  {
    aliases: ["upscale"],
    home: "https://www.upscale.media/upload"
  },
  {
    aliases: ["virus", "vt", "virustotal"],
    home: "https://www.virustotal.com/gui/home/url",
    search: "https://www.virustotal.com/gui/search/{q}"
  },
  {
    aliases: ["wallpaper", "wall", "wallhaven"],
    home: "https://wallhaven.cc/",
    search: "https://wallhaven.cc/search?q={q}"
  },
  // Proton
  {
    aliases: ["pm", "protonmail"],
    home: "https://mail.proton.me/",
    search: "https://mail.proton.me/u/0/almost-all-mail#keyword={q}"
  },
  {
    aliases: ["pd", "protondrive"],
    home: "https://drive.proton.me/",
    search: "https://drive.proton.me/u/0/search#q={q}"
  },
  {
    aliases: ["p", "proton"],
    home: "https://micahjeffery.com/proton/"
  },
  // Google productivity
  {
    aliases: ["drive", "gdrive"],
    home: "https://drive.google.com/drive/my-drive",
    search: "https://drive.google.com/drive/search?q={q}"
  },
  {
    aliases: ["docs", "gdoc", "gdocs"],
    home: "https://docs.google.com/document/u/0/",
    search: "https://docs.google.com/document/u/0/?q={q}"
  },
  {
    aliases: ["voice", "gvoice", "gvmail"],
    home: "https://voice.google.com/u/1/",
    search: "https://voice.google.com/u/1/search?from=%5B%5D&q=%5B%22{q}%22%5D"
  },
  // Domains
  {
    aliases: ["tosdr", "tos"],
    home: "https://tosdr.org/en",
    search: "https://tosdr.org/en/search/{q}"
  },
  {
    aliases: ["icann", "whois", "lookup"],
    home: "https://lookup.icann.org/en",
    search: "https://lookup.icann.org/whois/en/index.layout.privacynotification:ackprivacy?q={q}"
  },
  {
    aliases: ["domain", "dom", "domains", "cfd", "cloudflaredomains"],
    home: "https://domains.cloudflare.com/",
    search: "https://domains.cloudflare.com/?domain={q}"
  }
];
var defaultEngines = {
  // DuckDuckGo — default if no path is specified
  ddg: {
    home: "https://duckduckgo.com/",
    search: "https://duckduckgo.com/?q={q}"
  },
  duckduckgo: {
    home: "https://duckduckgo.com/",
    search: "https://duckduckgo.com/?q={q}"
  },
  d: {
    home: "https://duckduckgo.com/",
    search: "https://duckduckgo.com/?q={q}"
  },
  // DuckDuckGo No AI
  noai: {
    home: "https://noai.duckduckgo.com/",
    search: "https://noai.duckduckgo.com/?q={q}"
  },
  noaiddg: {
    home: "https://noai.duckduckgo.com/",
    search: "https://noai.duckduckgo.com/?q={q}"
  },
  // Google
  google: {
    home: "https://www.google.com/",
    search: "https://www.google.com/search?q={q}"
  },
  g: {
    home: "https://www.google.com/",
    search: "https://www.google.com/search?q={q}"
  },
  // Startpage
  startpage: {
    home: "https://www.startpage.com/",
    search: "https://www.startpage.com/sp/search?query={q}"
  },
  sp: {
    home: "https://www.startpage.com/",
    search: "https://www.startpage.com/sp/search?query={q}"
  },
  // Brave
  brave: {
    home: "https://search.brave.com/",
    search: "https://search.brave.com/search?q={q}"
  },
  b: {
    home: "https://search.brave.com/",
    search: "https://search.brave.com/search?q={q}"
  },
  // Bing
  bing: {
    home: "https://www.bing.com/",
    search: "https://www.bing.com/search?q={q}"
  },
  // Ecosia
  ecosia: {
    home: "https://www.ecosia.org/",
    search: "https://www.ecosia.org/search?q={q}"
  },
  eco: {
    home: "https://www.ecosia.org/",
    search: "https://www.ecosia.org/search?q={q}"
  },
  // Yahoo
  yahoo: {
    home: "https://search.yahoo.com/",
    search: "https://search.yahoo.com/search?p={q}"
  },
  y: {
    home: "https://search.yahoo.com/",
    search: "https://search.yahoo.com/search?p={q}"
  }
};
var bangs = Object.fromEntries(
  sites.flatMap(
    (site) => site.aliases.map((alias) => [
      alias.toLowerCase(),
      {
        home: site.home,
        search: site.search || null
      }
    ])
  )
);
function redirectTo(template, query = "") {
  return Response.redirect(
    template.replaceAll("{q}", encodeURIComponent(query.trim())),
    302
  );
}
__name(redirectTo, "redirectTo");
function getDefaultEngineFromPath(pathname) {
  const key = pathname.replace(/^\/+|\/+$/g, "").toLowerCase();
  return defaultEngines[key] || defaultEngines.ddg;
}
__name(getDefaultEngineFromPath, "getDefaultEngineFromPath");
function findShortcut(raw) {
  const symbols = "[!;:.]";
  const name = "[a-zA-Z0-9_-]+";
  const patterns = [
    // ;yt or ;yt cats
    new RegExp(`^(${symbols})(${name})(?:\\s+(.+))?$`),
    // yt; or yt; cats
    new RegExp(`^(${name})(${symbols})(?:\\s+(.+))?$`),
    // cats ;yt
    new RegExp(`^(.+?)\\s+(${symbols})(${name})$`),
    // cats yt;
    new RegExp(`^(.+?)\\s+(${name})(${symbols})$`)
  ];
  for (let i = 0; i < patterns.length; i++) {
    const match = raw.match(patterns[i]);
    if (!match) continue;
    if (i === 0) {
      return {
        bang: match[2].toLowerCase(),
        query: match[3] || ""
      };
    }
    if (i === 1) {
      return {
        bang: match[1].toLowerCase(),
        query: match[3] || ""
      };
    }
    if (i === 2) {
      return {
        bang: match[3].toLowerCase(),
        query: match[1] || ""
      };
    }
    if (i === 3) {
      return {
        bang: match[2].toLowerCase(),
        query: match[1] || ""
      };
    }
  }
  return null;
}
__name(findShortcut, "findShortcut");
var index_default = {
  async fetch(request) {
    const url = new URL(request.url);
    const raw = (url.searchParams.get("q") || "").trim();
    const defaultEngine = getDefaultEngineFromPath(url.pathname);
    if (!raw) {
      return redirectTo(defaultEngine.home);
    }
    const shortcut = findShortcut(raw);
    if (shortcut && bangs[shortcut.bang]) {
      const site = bangs[shortcut.bang];
      if (shortcut.query && site.search) {
        return redirectTo(site.search, shortcut.query);
      }
      return redirectTo(site.home);
    }
    return redirectTo(defaultEngine.search, raw);
  }
};
export {
  index_default as default
};
//# sourceMappingURL=index.js.map
