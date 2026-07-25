# Search

**Micah Search** is a Cloudflare Worker that turns one browser search URL into a customizable start page, multisearch launcher, and directory of bang shortcuts.

**Site:** https://search.micahjeffery.com

## Features

- Routes ordinary searches to DuckDuckGo, No AI DuckDuckGo, Google, Brave, Startpage, Bing, Ecosia, or Yahoo.
- Supports `!`, `;`, `:`, and `.` bang syntax.
- Opens a site when a bang has no query, or searches it when a search URL is configured.
- Math expressions like `5-(45^4)` can be solved locally and copied.
- Includes multisearches for selected sites.
- Includes favorites, recent searches, favicon previews, themes, and Comfortable/Compact/Minimalist layouts.
- Stores preferences and optional history only in the browser.
- Supports local bangs and local multisearches stored in the browser.


## Use it as your browser search engine

Add this URL as a custom search engine and make it the default:

```text
https://search.micahjeffery.com/?q=%s
```

Common settings pages:

- Chrome: `chrome://settings/searchEngines`
- Brave: `brave://settings/searchEngines`
- Edge: `edge://settings/searchEngines`
- Firefox: `about:preferences#search`

### Search-engine defaults

| Engine | URL |
| --- | --- |
| DuckDuckGo | `https://search.micahjeffery.com/ddg/?q=%s` |
| No AI DuckDuckGo | `https://search.micahjeffery.com/noai/?q=%s` |
| Google | `https://search.micahjeffery.com/google/?q=%s` |
| Brave Search | `https://search.micahjeffery.com/brave/?q=%s` |
| Startpage | `https://search.micahjeffery.com/startpage/?q=%s` |
| Bing | `https://search.micahjeffery.com/bing/?q=%s` |
| Ecosia | `https://search.micahjeffery.com/ecosia/?q=%s` |
| Yahoo | `https://search.micahjeffery.com/yahoo/?q=%s` |

The homepage selector affects only searches made from the homepage. Address-bar searches use the route configured in your browser.

## Bang syntax

A bang without a query opens its home page:

```text
!github
;mail
wm.
```

A bang with a query searches the site:

```text
;g cat videos
.g cat videos
cat videos :yt
cat videos yt!
```

## Multisearches

A multisearch opens a page where targets can be selected before opening them. Selections are remembered separately for each group.

| Bang | Group |
| --- | --- |
| `;x` | Web search |
| `;xv` | Video |
| `;xi` | Images |
| `;xn` | News |
| `;xg` | Games |
| `;xs` | Shopping |
| `;x3d` | 3D models |
| `;xai` | AI tools |
| `;xeng` or `;xtrans` | English translation |
| `;xmap` | Maps |
| `;xb` or `;books` | Online bookstores |

Example:

```text
;x3d phone stand
```

Browsers may require popups to be allowed before **Search all selected** can open several tabs.

## Homepage

- ❗ **Bang preview:** shows what a bang will do.
- ⭐ **Favorites:** moves starred shortcuts into a Favorites section.
- 🕐 **Recent searches:** keeps up to 20 entries and can be cleared or disabled.
- 🌙 **Themes:** Auto, Light, Dark, and Black.
- 📏 **Layouts:** Comfortable, Compact, and Minimalist.
- 🔍 **Directory filtering:** searches names, aliases, descriptions, categories, and multisearch targets.
- 🛠️ **Bang Builder:** inspects a site, finds favicons, checks for existing bangs, and generates copyable `SITE_GROUPS` code.

## Keyboard shortcuts

| Key | Action |
| --- | --- |
| `/` | Focus or select the search box |
| `?` | Open keyboard shortcuts |
| `+` | Open Bang Builder |
| `Esc` | Clear the search box; blur it when empty |
| `1` / `2` / `3` | Comfortable / Compact / Minimalist |
| `[` / `]` | Collapse / expand all categories |
| `↑` / `↓` | Move through filtered shortcuts |
| `Enter` | Use the selected shortcut |
| `,` | Open Settings |

Typing `+` into an empty search box and pressing Enter also opens Bang Builder.

## Add or edit a bang

Use the **Bang Builder** on the homepage, or edit `SITE_GROUPS` in `src/index.js` directly.

```js
{
  name: "Example",
  description: "Optional short description.",
  aliases: ["example", "ex"],
  home: "https://example.com/",
  search: "https://example.com/search?q={q}",
  icon: "https://example.com/favicon.svg",
  iconBackground: "light"
},
```

- Omit `search` for a direct-link bang.
- Omit `icon` to derive `/favicon.ico` from `home`.
- Use `{q}` where the encoded query belongs.
- Keep aliases unique, lowercase, and limited to letters, numbers, underscores, and hyphens.

## Development

```bash
npm install
npm run deploy
```

All application code, configuration, HTML, CSS, and browser JavaScript live in `src/index.js`.

## Privacy

The Worker redirects searches and does not maintain user accounts. Settings, favorites, hidden bangs, local bangs, multisearch selections, Bang Builder drafts, and optional recent-search history are stored locally in the browser.

A private fork can be deployed through Cloudflare Workers. A custom domain is optional.

## Notes

- `/` is excluded as a bang symbol because browsers interpret it as a local-file path.
- Simple un-banged math expressions can be evaluated locally and copied; `!math` and `!calc` use Wolfram|Alpha.
