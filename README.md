# Search

**Micah Search** is a Cloudflare Worker that turns a single browser search-engine URL into a customizable start page, a multi-engine search front end, and a directory of custom bang shortcuts that makes your search bar work more like a command line.

**Site:** https://search.micahjeffery.com

Use it as a browser search engine, or open the site directly to browse and filter shortcuts.

## What it does

* Sends ordinary searches to your selected default search engine.
* Supports DuckDuckGo, No AI DuckDuckGo, Google, Brave Search, Startpage, Bing, Ecosia, and Yahoo as defaults.
* Supports bangs for various sites.
* Accepts `!`, `;`, `:`, and `.` bang syntax.
* Opens a site when a bang has no search term, or searches that site when the bang supports searching.
* Keeps preferences locally in the browser: theme, density, favorites, default search engine, and search history.

## Use it as your browser search engine

Add this URL in your browser’s custom-search-engine settings and set as default:

```text
https://search.micahjeffery.com/?q=%s
```

Common settings pages:

* Chrome: `chrome://settings/searchEngines`
* Brave: `brave://settings/searchEngines`
* Edge: `edge://settings/searchEngines`
* Firefox: `about:preferences#search`

## Search-engine defaults

Choose one of these URLs when adding a custom browser search engine:

| Engine           | URL                                               |
| ---------------- | ------------------------------------------------- |
| DuckDuckGo       | `https://search.micahjeffery.com/ddg/?q=%s`       |
| No AI DuckDuckGo | `https://search.micahjeffery.com/noai/?q=%s`      |
| Google           | `https://search.micahjeffery.com/google/?q=%s`    |
| Brave Search     | `https://search.micahjeffery.com/brave/?q=%s`     |
| Startpage        | `https://search.micahjeffery.com/startpage/?q=%s` |
| Bing             | `https://search.micahjeffery.com/bing/?q=%s`      |
| Ecosia           | `https://search.micahjeffery.com/ecosia/?q=%s`    |
| Yahoo            | `https://search.micahjeffery.com/yahoo/?q=%s`     |

The homepage selector changes only searches made from the homepage. Browser address-bar searches use the route configured in your browser.

## Bang syntax

A bang without a query opens its home page:

```text
!github
;mail
wm.
```

A bang without a query searches the site with the query:

```text
;g cat videos
.g cat videos
cat videos :yt
cat videos yt!
```



## Homepage features

* ❗**Bang preview:** shows what a recognized bang will do before you submit it.
* ⭐ **Favorites:** star a shortcut to place it in the Favorites section.
* 🕐 **Recent searches:** stores up to 20 recent searches only in the current browser. You can clear or permanently disable history.
* 🌙 **Theme:** Auto follows the browser/OS preference. Light, Dark, and Black are other options.
* 📏 **Density:** Comfortable, Compact, and Minimalist. Minimalist centers the search box and has a return-to-Compact button.
* 🔍 **Shortcut types:** the magnifying-glass icon marks searchable shortcuts; the home icon marks direct-link shortcuts.
* ⌨️ **Keyboard help:** use the keyboard button in the top-right corner to view all available shortcuts.

## Keyboard shortcuts

| Key       | Action                          |
| --------- | ------------------------------- |
| `/`       | Focus and select the search box |
| `Esc`     | Clear the current search        |
| `[`       | Collapse all categories         |
| `]`       | Expand all categories           |
| `↑` / `↓` | Move through filtered shortcuts |
| `Enter`   | Use the selected shortcut       |


## Add or edit a shortcut

All configuration lives in `src/index.js`, inside `SITE_GROUPS`.

A searchable shortcut looks like this:

```js
{
  name: "Example Search",
  description: "Optional short explanation shown on the homepage.",
  aliases: ["example", "ex"],
  home: "https://example.com/",
  search: "https://example.com/search?q={q}"
}
```

A direct-link shortcut omits `search`:

```js
{
  name: "Example Home",
  aliases: ["examplehome"],
  home: "https://example.com/"
}
```

Use `{q}` where the search query should go. Keep aliases unique, lowercase, and limited to letters, numbers, underscores, and hyphens.


## Privacy

The Worker redirects search requests; it does not maintain a server-side account or save homepage settings. Homepage preferences, favorites, and optional recent-search history are stored in the browser’s local site data for `search.micahjeffery.com`.

For greater privacy and control, you can create a private fork of this repository and deploy your own Worker using Cloudflare’s free plan. A custom domain is optional; you can use the URL Cloudflare provides.


## Notes

* `/` is intentionally excluded as a bang symbol because browsers interpret it as a local-file path.
