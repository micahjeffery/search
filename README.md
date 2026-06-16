# Search

```text
https://search.micahjeffery.com/?q=%s
```

Personal Cloudflare Worker for custom search shortcuts.

It lets one browser search engine URL handle normal searches, custom bangs, and alternate default search engines.

## Browser Settings

Open your browser’s search engine settings:

- Chrome: `chrome://settings/searchEngines`
- Brave: `brave://settings/searchEngines`
- Edge: `edge://settings/searchEngines`
- Firefox: `about:preferences#search`

## Features

* Normal searches default to DuckDuckGo
* Optional default engines by path, like `/google/`, `/brave/`, `/startpage/`
* Custom shortcuts using `!`, `;`, `:`, or `.`
* Aliases for the same shortcut, like `g`, `goog`, and `google`
* Homepage redirects when no query is provided
* Search redirects when a query is provided

## Usage

```text
coffee grinder
;g coffee grinder
.g coffee grinder
coffee grinder ;yt
;virus google.com
;sec apple
```

## Default Engine URLs

DuckDuckGo
```text
https://search.micahjeffery.com/?q=%s
```
```text
https://search.micahjeffery.com/ddg/?q=%s
```
DuckDuckGo No AI
```text
https://search.mydomain.com/noai/?q=%s
```


Google
```text
https://search.micahjeffery.com/google/?q=%s
```

Startpage
```text
https://search.micahjeffery.com/startpage/?q=%s
```

Brave
```text
https://search.micahjeffery.com/brave/?q=%s
```

Bing
```text
https://search.micahjeffery.com/bing/?q=%s
```

Ecosia
```text
https://search.micahjeffery.com/ecosia/?q=%s
```

Yahoo
```text
https://search.micahjeffery.com/yahoo/?q=%s
```

## Add a Shortcut

Edit `src/index.js` and add an entry to `sites`:

```js
{
  aliases: ["alias1", "alias2"],
  home: "https://www.domain.com/",
  search: "https://www.domain.com/find/?q={q}"
},
```

Use `{q}` where the search query should go. Omit the `search` line for bookmark-only shortcuts.

## Notes

Leading `/` shortcuts are avoided because browsers treat `/g` as a local file path. Use `.g`, `;g`, `:g`, or `!g` instead.
