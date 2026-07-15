const PROJECT = {
  name: "Search",
  repository: "https://github.com/micahjeffery/search",
  editMain: "https://github.com/micahjeffery/search/edit/main/src/index.js",
  editTest: "https://github.com/micahjeffery/search/edit/test/src/index.js",
  support: "https://www.micahjeffery.com/financial/referrals" 
};
// -----------------------------------------------------------------------------
// 1. DEFAULT SEARCH ENGINES 
// -----------------------------------------------------------------------------
const DEFAULT_ENGINES = [
  {
    name: "DuckDuckGo",
    paths: ["", "d", "ddg", "duckduckgo"], 
    home: "https://duckduckgo.com/",
    search: "https://duckduckgo.com/?q={q}"
  },
  {
    name: "NOAI DDG",
    paths: ["noai", "noaiddg"],
    home: "https://noai.duckduckgo.com/",
    search: "https://noai.duckduckgo.com/?q={q}"
  },
  {
    name: "Google",
    paths: ["g", "google"],
    home: "https://www.google.com/",
    search: "https://www.google.com/search?q={q}"
  },
  {
    name: "Brave Search",
    paths: ["brave", "b"],
    home: "https://search.brave.com/",
    search: "https://search.brave.com/search?q={q}",
    icon: "https://cdn.search.brave.com/serp/v3/_app/immutable/assets/brave-logo-small.Bdzj7Bzm.svg"
  },
  {
    name: "Startpage",
    paths: ["startpage", "sp"],
    home: "https://www.startpage.com/",
    search: "https://www.startpage.com/sp/search?query={q}"
  },
  {
    name: "Bing",
    paths: ["bing"],
    home: "https://www.bing.com/",
    search: "https://www.bing.com/search?q={q}"
  },
  {
    name: "Ecosia",
    paths: ["ecosia", "eco"],
    home: "https://www.ecosia.org/",
    search: "https://www.ecosia.org/search?q={q}"
  },
  {
    name: "Yahoo",
    paths: ["yahoo","y"],
    home: "https://search.yahoo.com/",
    search: "https://search.yahoo.com/search?p={q}"
  }
];
// -----------------------------------------------------------------------------
// 2. BANGS, ORGANIZED BY CATEGORY
// -----------------------------------------------------------------------------
// Every site uses the same format:
//   name:        Display name used on the help page.
//   description: Optional descrition of the site.
//   aliases:     Bang words.
//   home:        Destination for a bang with no query.
//   search:      Optional destination for a bang with a query.
//   icon:        Optional favicon override. Otherwise /favicon.ico is derived from home.
//   handler:     Optional special behavior.
const SITE_GROUPS = [
  {
    category: "Project & Developer",
    sites: [
      {
        name: "Home Page",
        description: "Open this start page and the full directory of bang shortcuts.",
        aliases: ["search", "bangs", "home"],
        home: "https://search.micahjeffery.com/"
      },
      {
        name: "Random Bang",
        description: "Open a random shortcut, or send a query to a random searchable shortcut.",
        aliases: ["random", "rand"],
        home: "https://search.micahjeffery.com/?q=%21random",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" stroke-width="2"/><circle cx="8" cy="8" r="1.4" fill="currentColor"/><circle cx="16" cy="8" r="1.4" fill="currentColor"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/><circle cx="8" cy="16" r="1.4" fill="currentColor"/><circle cx="16" cy="16" r="1.4" fill="currentColor"/></svg>`,
        handler: "random"
      },
      {
        name: "Search Project",
        description: "Open the GitHub repository for this Cloudflare Worker.",
        aliases: ["repo", "project"],
        home: PROJECT.repository
      },
      {
        name: "Edit Search Source",
        aliases: ["edit"],
        home: PROJECT.editMain
      },
      {
        name: "Edit Test Branch",
        aliases: ["edittest"],
        home: PROJECT.editTest
      },
      {
        name: "GitHub",
        aliases: ["gh", "github"],
        home: "https://github.com/",
        search: "https://github.com/search?q={q}"
      }
    ]
  },
  {
    category: "Search Engines",
    sites: [
      {
        name: "Google",
        aliases: ["g", "goog", "google"],
        home: "https://www.google.com/",
        search: "https://www.google.com/search?q={q}"
      },
      {
        name: "Google Images",
        aliases: ["gi", "gimg", "gimage", "gimages"],
        home: "https://images.google.com/",
        search: "https://www.google.com/search?tbm=isch&q={q}"
      },
      {
        name: "Google Videos",
        aliases: ["gv", "gvideo", "gvideos"],
        home: "https://www.google.com/search?tbm=vid",
        search: "https://www.google.com/search?tbm=vid&q={q}"
      },
      {
        name: "Google Shopping",
        aliases: ["gs","gshop","shopping"],
        home: "https://shopping.google.com/",
        search: "https://www.google.com/search?tbm=shop&q={q}",
        icon: "https://www.gstatic.com/shopping/shoppingpage/casa/android/1x/home_60dp.png"
      },
      {
        name: "Google News",
        aliases: ["gn", "gnews", "news"],
        home: "https://news.google.com/",
        search: "https://www.google.com/search?tbm=nws&q={q}",
        icon: "https://upload.wikimedia.org/wikipedia/commons/d/da/Google_News_icon.svg"
      },
      {
        name: "Google Maps",
        aliases: ["m", "gm", "gmap", "gmaps", "maps"],
        home: "https://www.google.com/maps",
        search: "https://www.google.com/maps/search/{q}",
        icon: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Google_Maps_icon_%282026%29.svg"
      },
      {
        name: "DuckDuckGo",
        aliases: ["d", "duck", "ddg"],
        home: "https://duckduckgo.com/",
        search: "https://duckduckgo.com/?q={q}"
      },
      {
        name: "DuckDuckGo Images",
        aliases: ["di", "dimg", "dimage", "dimages"],
        home: "https://duckduckgo.com/?iax=images&ia=images",
        search: "https://duckduckgo.com/?q={q}&iax=images&ia=images"
      },
      {
        name: "DuckDuckGo Videos",
        aliases: ["dv", "dvideo", "dvideos"],
        home: "https://duckduckgo.com/?iax=videos&ia=videos",
        search: "https://duckduckgo.com/?q={q}&iax=videos&ia=videos"
      },
      {
        name: "DuckDuckGo News",
        aliases: ["dn", "dnews"],
        home: "https://duckduckgo.com/?iar=news&ia=news",
        search: "https://duckduckgo.com/?q={q}&iar=news&ia=news"
      },
      {
        name: "DuckDuckGo Maps",
        aliases: ["dm", "dmaps"],
        home: "https://duckduckgo.com/?iaxm=maps",
        search: "https://duckduckgo.com/?q={q}&iaxm=maps"
      },
      {
        name: "OpenStreetMap",
        aliases: ["osm", "openstreetmap"],
        home: "https://www.openstreetmap.org/",
        search: "https://www.openstreetmap.org/search?query={q}"
      },
      {
        name: "Apple Maps",
        aliases: ["amaps", "applemaps"],
        home: "https://maps.apple.com/",
        search: "https://maps.apple.com/?q={q}"
      },
      {
        name: "DuckDuckGo No AI",
        aliases: ["noai", "noaiddg", "naiddg"],
        home: "https://noai.duckduckgo.com/",
        search: "https://noai.duckduckgo.com/?q={q}"
      },
      {
        name: "DuckDuckGo bangs",
        description: "Browse DuckDuckGo’s built-in !bang shortcuts.",
        aliases: ["db", "ddgb", "ddgbangs"],
        home: "https://duckduckgo.com/bangs",
        search: "https://duckduckgo.com/bangs?q={q}"
      },
      {
        name: "Brave Search",
        aliases: ["b", "brave", "brv"],
        home: "https://search.brave.com/",
        search: "https://search.brave.com/search?q={q}",
        icon: "https://cdn.search.brave.com/serp/v3/_app/immutable/assets/brave-logo-small.Bdzj7Bzm.svg"

      },
      {
        name: "Brave Images",
        aliases: ["bi", "bimg", "bimage", "bimages"],
        home: "https://search.brave.com/images",
        search: "https://search.brave.com/images?q={q}",
        icon: "https://cdn.search.brave.com/serp/v3/_app/immutable/assets/brave-logo-small.Bdzj7Bzm.svg"
      },
      {
        name: "Brave News",
        aliases: ["bn", "bnews"],
        home: "https://search.brave.com/news",
        search: "https://search.brave.com/news?q={q}",
        icon: "https://cdn.search.brave.com/serp/v3/_app/immutable/assets/brave-logo-small.Bdzj7Bzm.svg"
      },
      {
        name: "Brave Videos",
        aliases: ["bv", "bvideo", "bvideos"],
        home: "https://search.brave.com/videos",
        search: "https://search.brave.com/videos?q={q}",
        icon: "https://cdn.search.brave.com/serp/v3/_app/immutable/assets/brave-logo-small.Bdzj7Bzm.svg"
      },
      {
        name: "Startpage",
        aliases: ["sp", "startpage"],
        home: "https://www.startpage.com/",
        search: "https://www.startpage.com/sp/search?query={q}"
      },
      {
        name: "Startpage Images",
        aliases: ["spi", "spimg", "spimages"],
        home: "https://www.startpage.com/?cat=images",
        search: "https://www.startpage.com/sp/search?query={q}&cat=images"
      },
      {
        name: "Startpage Videos",
        aliases: ["spv", "spvideo", "spvideos"],
        home: "https://www.startpage.com/?cat=video",
        search: "https://www.startpage.com/sp/search?query={q}&cat=video"
      },
      {
        name: "Startpage News",
        aliases: ["spn", "spnews"],
        home: "https://www.startpage.com/?cat=news",
        search: "https://www.startpage.com/sp/search?query={q}&cat=news"
      },
      {
        name: "Bing",
        aliases: ["bing"],
        home: "https://www.bing.com/",
        search: "https://www.bing.com/search?q={q}"
      },
      {
        name: "Ecosia",
        aliases: ["eco", "ecosia"],
        home: "https://www.ecosia.org/",
        search: "https://www.ecosia.org/search?q={q}"
      },
      {
        name: "Yahoo",
        aliases: ["y", "yahoo"],
        home: "https://search.yahoo.com/",
        search: "https://search.yahoo.com/search?p={q}"
      },
      {
        name: "Yahoo Images",
        aliases: ["yi", "yimg", "yimage", "yimages"],
        home: "https://images.search.yahoo.com/",
        search: "https://images.search.yahoo.com/search/images?p={q}"
      },
      {
        name: "Yahoo Videos",
        aliases: ["yv", "yvideo", "yvideos"],
        home: "https://video.search.yahoo.com/",
        search: "https://video.search.yahoo.com/search/video?p={q}"
      },
      {
        name: "Yahoo News",
        aliases: ["yn", "ynews"],
        home: "https://news.search.yahoo.com/",
        search: "https://news.search.yahoo.com/search?p={q}"
      },
      {
        name: "Yahoo Shopping",
        aliases: ["ys", "yshop", "yshopping"],
        home: "https://shopping.yahoo.com/",
        search: "https://shopping.yahoo.com/search?p={q}"
      }
    ]
  },
  {
    category: "AI",
    sites: [
      {
        name: "Duck.ai",
        description: "Open DuckDuckGo’s private AI chat.",
        aliases: ["ai", "dai", "duckai"],
        home: "https://duck.ai/"
      },
      {
        name: "Lumo AI",
        description: "Open Proton’s privacy-first AI assistant.",
        aliases: ["lumo", "lumoai"],
        home: "https://lumo.proton.me/",
        icon: "https://i.logos-download.com/114204/30925-s1280-a85ed5fa7ad1cb185c800527723f847f.avif/Lumo_Logo_2025_Mascot-s1280.avif"
      },
      {
        name: "ChatGPT",
        description: "Open ChatGPT.",
        aliases: ["chatgpt", "gpt", "openai"],
        home: "https://chatgpt.com/"
      },
      {
        name: "Claude",
        description: "Open Anthropic Claude.",
        aliases: ["claude", "anthropic"],
        home: "https://claude.com/"
      },
      {
        name: "Gemini",
        description: "Open Google Gemini.",
        aliases: ["gemini", "bard"],
        home: "https://gemini.google.com/",
        icon: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Google_Gemini_icon_2025.svg"
      },
      {
        name: "Perplexity",
        description: "Open Perplexity answer engine.",
        aliases: ["perplexity", "pplx"],
        home: "https://www.perplexity.ai/",
        icon: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Perplexity_AI_Turquoise_on_White.png"
      },
      {
        name: "Poe",
        description: "Open Poe’s multi-model AI chat platform.",
        aliases: ["poe"],
        home: "https://poe.com/"
      },
      {
        name: "Mistral Vibe",
        description: "Open Mistral’s AI chat and agent product, formerly Le Chat.",
        aliases: ["mistral","vibe","lechat"],
        home: "https://chat.mistral.ai/",
        icon: "https://icons.duckduckgo.com/ip3/chat.mistral.ai.ico"
      },
      {
        name: "Microsoft Copilot",
        description: "Open Microsoft Copilot.",
        aliases: ["copilot", "mscopilot"],
        home: "https://copilot.microsoft.com/"
      },
      {
        name: "HuggingChat",
        description: "Open Hugging Face’s open AI chat.",
        aliases: ["huggingchat", "hfchat"],
        home: "https://huggingface.co/chat/"
      },
      {
        name: "DeepSeek",
        description: "Open DeepSeek chat.",
        aliases: ["deepseek", "ds"],
        home: "https://chat.deepseek.com/",
        icon: "https://fe-static.deepseek.com/chat/favicon.svg"
      }
    ]
  },
  {
    category: "Reference, Research & Words",
    sites: [
      {
        name: "Wikipedia",
        aliases: ["wiki", "w", "wikipedia"],
        home: "https://en.wikipedia.org/wiki/Main_Page?vectornightmode=1",
        search: "https://en.wikipedia.org/wiki/Special:Search?search={q}"
      },
      {
        name: "Wikimedia",
        description: "Open the Wikimedia project directory.",
        aliases: ["wm", "wikimedia"],
        home: "https://commons.wikimedia.org/wiki/Main_Page?vectornightmode=1",
        search: "https://commons.wikimedia.org/w/index.php?search={q}&title=Special%3AMediaSearch&type=image"
      },
      {
        name: "Wikidata",
        description: "Search Wikimedia’s structured knowledge base.",
        aliases: ["wd", "wikidata"],
        home: "https://www.wikidata.org/wiki/Wikidata:Main_Page",
        search: "https://www.wikidata.org/w/index.php?search={q}"
      },
      {
        name: "Google Scholar",
        aliases: ["gsch", "sch", "scholar", "gscholar"],
        home: "https://scholar.google.com/",
        search: "https://scholar.google.com/scholar?q={q}"
      },
      {
        name: "PubMed",
        description: "Search biomedical research and article abstracts.",
        aliases: ["pubmed", "pub", "med"],
        home: "https://pubmed.ncbi.nlm.nih.gov/",
        search: "https://pubmed.ncbi.nlm.nih.gov/?term={q}"
      },
      {
        name: "OneLook",
        description: "Search dictionaries, thesauruses, and word references together.",
        aliases: ["o", "onelook", "1", "1l", "1look"],
        home: "https://www.onelook.com/",
        search: "https://www.onelook.com/?w={q}"
      },
      {
        name: "Merriam-Webster dictionary",
        description: "Look up definitions, pronunciation, and usage.",
        aliases: ["def", "word", "mw", "definition", "webster", "dict", "dic", "dictionary"],
        home: "https://www.merriam-webster.com/dictionary",
        search: "https://www.merriam-webster.com/dictionary/{q}"
      },
      {
        name: "Merriam-Webster Thesaurus",
        description: "Find synonyms and related words.",
        aliases: ["thesaurus", "thes", "syn", "synonym"],
        home: "https://www.merriam-webster.com/thesaurus",
        search: "https://www.merriam-webster.com/thesaurus/{q}"
      },
      {
        name: "Merriam-Webster Scrabble Finder",
        description: "Check playable words for Scrabble-style games.",
        aliases: ["scrabble", "scrab", "words", "wordfinder", "bg", "bananagram"],
        home: "https://scrabble.merriam.com/word-lists",
        search: "https://scrabble.merriam.com/finder/{q}"
      },
      {
        name: "Urban Dictionary",
        description: "Look up slang and crowd-sourced definitions.",
        aliases: ["u", "ud", "urban", "urbandictionary"],
        home: "https://www.urbandictionary.com/",
        search: "https://www.urbandictionary.com/define.php?term={q}"
      },
      {
        name: "How Long to Read",
        description: "Estimate reading time for books and articles.",
        aliases: ["hltr", "howlongtoread", "readtime"],
        home: "https://howlongtoread.com/",
        search: "https://howlongtoread.com/results/{q}",
        icon: "https://howlongtoread.com/img/hltr-logo.png"
      },
      {
        name: "ToS;DR",
        description: "Read plain-language summaries and grades for terms of service.",
        aliases: ["tosdr", "tos"],
        home: "https://tosdr.org/en",
        search: "https://tosdr.org/en/search/{q}",
        icon: "https://assets.tosdr.org/branding/tosdr-icon-32.svg"
      },
      {
        name: "23andMe Surname Discovery tool",
        description: "Explore public surname-distribution results.",
        aliases: ["23","surname","sur","dna"],
        home: "https://discover.23andme.com/",
        search: "https://discover.23andme.com/last-name/{q}",
        icon: "https://icons.duckduckgo.com/ip3/23andme.org.ico"
      }
    ]
  },
  {
    category: "Shopping & Deals",
    sites: [
      {
        name: "Amazon",
        aliases: ["a", "amz", "amazon"],
        home: "https://www.amazon.com/",
        search: "https://www.amazon.com/s?k={q}"
      },
      {
        name: "eBay",
        aliases: ["e", "ebay"],
        home: "https://www.ebay.com/",
        search: "https://www.ebay.com/sch/i.html?_nkw={q}"
      },
      {
        name: "Costco",
        aliases: ["costco", "co", "cost"],
        home: "https://www.costco.com/",
        search: "https://www.costco.com/CatalogSearch?keyword={q}"
      },
      {
        name: "Walmart",
        aliases: ["walmart", "wal", "wmt"],
        home: "https://www.walmart.com/",
        search: "https://www.walmart.com/search?q={q}"
      },
      {
        name: "Facebook Marketplace",
        description: "Browse and search local Facebook Marketplace listings.",
        aliases: ["fbm", "fbmarket", "marketplace", "facebookmarketplace"],
        home: "https://www.facebook.com/marketplace/",
        search: "https://www.facebook.com/marketplace/search/?query={q}"
      },
      {
        name: "CamelCamelCamel",
        description: "Check Amazon price history and price-drop tracking.",
        aliases: ["c", "ccc", "camel", "camelcamelcamel"],
        home: "https://camelcamelcamel.com/",
        search: "https://camelcamelcamel.com/search?sq={q}"
      },
      {
        name: "Eneba",
        description: "Buy discounted digital game keys.",
        aliases: ["eneba"],
        home: "https://www.eneba.com/us/",
        search: "https://www.eneba.com/us/store/all?text={q}"
      }
    ]
  },
  {
    category: "Home, Auto & Property",
    sites: [
      {
        name: "Home Depot",
        aliases: ["h", "hd", "homedepot", "depot"],
        home: "https://www.homedepot.com/",
        search: "https://www.homedepot.com/s/{q}"
      },
      {
        name: "Zillow",
        description: "Home value estimates",
        aliases: ["z", "zillow"],
        home: "https://www.zillow.com/",
        search: "https://www.zillow.com/homes/{q}_rb/"
      },
      {
        name: "CarCareKiosk",
        description: "Find vehicle maintenance guides and repair walkthroughs.",
        aliases: ["car", "carcare", "carcarekiosk"],
        home: "https://www.carcarekiosk.com/",
        search: "https://www.carcarekiosk.com/search?q={q}"
      },
      {
        name: "AppliancePartsPros",
        description: "Browse appliance parts and repair resources.",
        aliases: ["app", "appliance", "applianceparts", "appliancepartspros"],
        home: "https://www.appliancepartspros.com/"
      }
    ]
  },
  {
    category: "Finance & Markets",
    sites: [
      {
        name: "Google Finance",
        aliases: ["gf", "gfinance", "googlefinance"],
        home: "https://www.google.com/finance/",
        icon: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Google_Finance_icon_%282020%29.svg"
      },
      {
        name: "Yahoo Finance",
        aliases: ["yf", "yfinance", "yahoofinance"],
        home: "https://finance.yahoo.com/",
        search: "https://finance.yahoo.com/quote/{q}"
      },
      {
        name: "Robinhood",
        aliases: ["rh", "robinhood", "hood"],
        home: "https://robinhood.com/",
        search: "https://robinhood.com/stocks/{q}"
      },
      {
        name: "FRED",
        description: "Search Federal Reserve economic data series and charts.",
        aliases: ["fred", "stlouisfed"],
        home: "https://fred.stlouisfed.org/",
        search: "https://fred.stlouisfed.org/searchresults?st={q}"
      },
      {
        name: "Federal Funds Rate",
        description: "Open the FRED effective federal funds rate series.",
        aliases: ["fed", "ffr", "rate", "fedfunds"],
        home: "https://fred.stlouisfed.org/series/fedfunds"
      },
      {
        name: "Inflation Chart",
        description: "Open the saved FRED inflation chart.",
        aliases: ["inflation", "in"],
        home: "https://fred.stlouisfed.org/graph/?g=1wmdD"
      },
      {
        name: "Investopedia",
        description: "Search finance and investing explainers.",
        aliases: ["investopedia", "invest"],
        home: "https://www.investopedia.com/",
        search: "https://www.investopedia.com/search?q={q}"
      },
      {
        name: "Monument Metals",
        description: "Shop bullion and precious-metals products.",
        aliases: ["monument","monumentmetals","mm"],
        home: "https://monumentmetals.com/",
        search: "https://monumentmetals.com/search.html?query={q}",
        icon: "https://monumentmetals.com/static-assets/icons/favicon.png"
      },
      {
        name: "APMEX & Spot Prices",
        description: "View gold and silver spot-price charts or search APMEX.",
        aliases: ["apmex", "spot", "metals", "pmspot"],
        home: "https://www.apmex.com/gold-and-silver-price-charts",
        search: "https://www.apmex.com/search?q={q}"
      },
      {
        name: "Gold Price",
        description: "Open APMEX’s gold price page.",
        aliases: ["gld", "gold", "apmexgold"],
        home: "https://www.apmex.com/gold-price"
      },
      {
        name: "Silver Price",
        description: "Open APMEX’s silver price page.",
        aliases: ["slv", "silver", "apmexsilver"],
        home: "https://www.apmex.com/silver-price"
      },
      {
        name: "Treasury Bills / SGOV",
        description: "Open the saved explainer video for T-bills and SGOV.",
        aliases: ["vbil", "bil", "sgov"],
        home: "https://www.youtube.com/watch?v=DSwBc-d9Ukc"
      }
    ]
  },
  {
    category: "Tax, Government & Filings",
    sites: [
      {
        name: "SEC EDGAR 10-K Search",
        description: "Search SEC EDGAR filings, filtered by 10-K forms.",
        aliases: ["sec", "edgar", "10k", "10-k"],
        home: "https://www.sec.gov/edgar/search/",
        search: "https://www.sec.gov/edgar/search/#/q={q}&filter_forms=10-K"
      },
      {
        name: "Estate Tax",
        description: "Open the IRS estate-tax overview.",
        aliases: ["death", "estate", "estatetax"],
        home: "https://www.irs.gov/businesses/small-businesses-self-employed/estate-tax"
      },
      {
        name: "IRA Contribution Limits",
        description: "Open the IRS IRA contribution-limits page.",
        aliases: ["ira", "contribution"],
        home: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-ira-contribution-limits"
      },
      {
        name: "Capital Gains Tax",
        description: "Open the saved capital-gains tax-rate explainer.",
        aliases: ["ltcg", "capitalgains"],
        home: "https://www.nerdwallet.com/taxes/learn/capital-gains-tax-rates#:~:text=Taxes%20on%20stocks-,Capital%20gains%20tax%20rate%202026,-The%20following%20rates"
      },
      {
        name: "Standard Deduction",
        description: "Open the saved IRS standard-deduction announcement.",
        aliases: ["standard", "std", "deduction"],
        home: "https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2026-including-amendments-from-the-one-big-beautiful-bill#:~:text=standard%20deduction%20is%20%2423%2C625"
      },
      {
        name: "Tariff Tracker",
        description: "Open the Bipartisan Policy Center tariff tracker.",
        aliases: ["tariff", "tariffs", "tarrif", "tarif", "tarriff"],
        home: "https://bipartisanpolicy.org/explainer/tariff-tracker/"
      },
      {
        name: "Federal Tax Brackets",
        description: "Open the saved federal income-tax brackets explainer.",
        aliases: ["tax", "brackets", "taxbrackets"],
        home: "https://www.forbes.com/advisor/taxes/taxes-federal-income-tax-bracket/#:~:text=maintains%20the%20previous%20tax%20brackets%3A"
      }
    ]
  },
  {
    category: "Media & Entertainment",
    sites: [
      {
        name: "YouTube",
        aliases: ["yt", "youtube"],
        home: "https://www.youtube.com/",
        search: "https://www.youtube.com/results?search_query={q}"
      },
      {
        name: "YouTube Studio",
        description: "Open YouTube Studio or search YouTube’s official blog.",
        aliases: ["yts","studio","youtubestudio"],
        home: "https://studio.youtube.com/",
        search: "https://blog.youtube/search/?domain=youtube&query={q}&order=relevance",
        icon: "https://static.wikia.nocookie.net/logopedia/images/b/b3/YouTube_Studio_gradient.svg/revision/latest?cb=20241015005737"
      },
      {
        name: "Spotify",
        aliases: ["s", "sptfy", "spfy", "spotify"],
        home: "https://open.spotify.com/",
        search: "https://open.spotify.com/search/{q}"
      },
      {
        name: "Genius Lyrics",
        description: "Search song lyrics and song annotations on Genius.",
        aliases: ["lyr", "lyrics", "lyric", "genius"],
        home: "https://genius.com/",
        search: "https://genius.com/search?q={q}"
      },
      {
        name: "AZLyrics",
        description: "Open the AZLyrics home page.",
        aliases: ["azlyrics", "azl"],
        home: "https://www.azlyrics.com/"
      },
      {
        name: "IMDb",
        aliases: ["imdb", "mov", "movie"],
        home: "https://www.imdb.com/",
        search: "https://www.imdb.com/find/?q={q}"
      },
      {
        name: "Letterboxd",
        description: "Search films and film lists on Letterboxd.",
        aliases: ["lb", "letterboxd"],
        home: "https://letterboxd.com/",
        search: "https://letterboxd.com/search/{q}/"
      },
      {
        name: "JustWatch",
        description: "Find where films and shows are currently streaming.",
        aliases: ["jw", "justwatch"],
        home: "https://www.justwatch.com/",
        search: "https://www.justwatch.com/us/search?q={q}"
      },
      {
        name: "TubiTV",
        description: "Browse or search free streaming titles on Tubi.",
        aliases: ["tubi", "tubitv"],
        home: "https://tubitv.com/movies",
        search: "https://tubitv.com/search/{q}"
      }
    ]
  },
  {
    category: "Social & Communities",
    sites: [
      {
        name: "LinkedIn",
        aliases: ["l","li","linkedin"],
        home: "https://www.linkedin.com/",
        search: "https://www.linkedin.com/search/results/all/?keywords={q}",
        icon: "https://icons.duckduckgo.com/ip3/linkedin.com.ico"
      },
      {
        name: "X",
        aliases: ["twitter", "tw", "xcom"],
        home: "https://x.com/",
        search: "https://x.com/search?q={q}"
      },
      {
        name: "Instagram",
        aliases: ["ig","insta","instagram"],
        home: "https://www.instagram.com/",
        search: "https://www.instagram.com/explore/search/keyword/?q={q}",
        icon: "https://static.cdninstagram.com/rsrc.php/y4/r/QaBlI0OZiks.ico"
      },
      {
        name: "Facebook",
        aliases: ["fb", "facebook"],
        home: "https://www.facebook.com/",
        search: "https://www.facebook.com/search/top?q={q}"
      },
      {
        name: "Pinterest",
        aliases: ["pin","pinterest"],
        home: "https://www.pinterest.com/",
        search: "https://www.pinterest.com/search/pins/?q={q}",
        icon: "https://s.pinimg.com/webapp/logo_transparent_144x144-3da7a67b.png"
      },
      {
        name: "Reddit",
        aliases: ["r", "red", "reddit"],
        home: "https://www.reddit.com/",
        search: "https://www.reddit.com/search/?q={q}"
      },
      {
        name: "TikTok",
        aliases: ["tt", "tiktok", "braindamage"],
        home: "https://www.tiktok.com/",
        search: "https://www.tiktok.com/search?q={q}"
      },
      {
        name: "Discord",
        description: "Messaging and encrypted VoIP platform.",
        aliases: ["dc","disc","discord"],
        home: "https://discord.com/channels/@me",
        icon: "https://icons.duckduckgo.com/ip3/discord.com.ico"
      }
    ]
  },
  {
    category: "Gaming & PC",
    sites: [
      {
        name: "HowLongToBeat",
        description: "Look up completion-time estimates for games.",
        aliases: ["hlb", "beat", "hltb", "howlongtobeat"],
        home: "https://howlongtobeat.com/",
        search: "https://howlongtobeat.com/?q={q}"
      },
      {
        name: "IsThereAnyDeal",
        description: "Compare PC-game store prices and track sale history.",
        aliases: ["itad", "isthereanydeal", "deal"],
        home: "https://isthereanydeal.com/",
        search: "https://isthereanydeal.com/search/?q={q}",
        icon: "https://isthereanydeal.com/public/icons/favicon-b6ae0302.svg"
      },
      {
        name: "Before I Play",
        description: "Check game content notes before playing.",
        aliases: ["beforeiplay", "bip"],
        home: "https://beforeiplay.com/",
        search: "https://beforeiplay.com/index.php?search={q}&title=Special%3ASearch&go=Go"
      },
      {
        name: "ProtonDB",
        description: "Check how games run on Linux and Steam Deck.",
        aliases: ["ptn", "protondb"],
        home: "https://www.protondb.com/",
        search: "https://www.protondb.com/search?q={q}"
      },
      {
        name: "Steam",
        aliases: ["ste", "steam"],
        home: "https://store.steampowered.com/",
        search: "https://store.steampowered.com/search/?term={q}"
      },
      {
        name: "SteamDB",
        description: "Search Steam app records, prices, and metadata.",
        aliases: ["steamdb", "sdb"],
        home: "https://steamdb.info/",
        search: "https://steamdb.info/search/?a=app&q={q}"
      },
      {
        name: "GOG",
        aliases: ["gog"],
        home: "https://www.gog.com/",
        search: "https://www.gog.com/en/games?query={q}"
      },
      {
        name: "NameMC",
        description: "Search Minecraft usernames, skins, and profiles.",
        aliases: ["namemc", "mcname", "mcskin"],
        home: "https://namemc.com/",
        search: "https://namemc.com/search?q={q}"
      },
      {
        name: "PCPartPicker",
        description: "Plan and compare PC parts and builds.",
        aliases: ["pcpp", "pcpartpicker", "partpicker"],
        home: "https://pcpartpicker.com/",
        search: "https://pcpartpicker.com/search/?q={q}"
      }
    ]
  },
  {
    category: "3D Printing & Maker",
    sites: [
      {
        name: "Printables",
        description: "Search printable 3D models on Prusa's Printables.",
        aliases: ["printables", "print", "prusa", "prusaprinters"],
        home: "https://www.printables.com/",
        search: "https://www.printables.com/search/models?q={q}"
      },
      {
        name: "MakerWorld",
        description: "Search printable 3D models on Bamboo Lab's MakerWorld.",
        aliases: ["maker", "makerworld"],
        home: "https://makerworld.com/en",
        search: "https://makerworld.com/en/search/models?keyword={q}"
      },
      {
        name: "Thingiverse",
        description: "Search printable models on Thingiverse.",
        aliases: ["thing", "thingiverse"],
        home: "https://www.thingiverse.com/",
        search: "https://www.thingiverse.com/search?q={q}&type=things"
      },
      {
        name: "Cults3D",
        description: "Search printable 3D models on Cults3D.",
        aliases: ["cults", "cults3d"],
        home: "https://cults3d.com/en",
        search: "https://cults3d.com/en/search?q={q}"
      },
      {
        name: "Thangs",
        description: "Search printable 3D models on Thangs.",
        aliases: ["thangs", "thang"],
        home: "https://thangs.com/",
        search: "https://thangs.com/search/{q}?scope=thangs&view=list"
      },
      {
        name: "Yeggi",
        description: "Search indexed printable 3D models across model sites.",
        aliases: ["yeggi", "yg"],
        home: "https://www.yeggi.com/",
        search: "https://www.yeggi.com/q/{q}/"
      },
      {
        name: "BumpMesh",
        description: "Apply textures to 3D objects.",
        aliases: ["bump","bumpmesh","3dtexture"],
        home: "https://bumpmesh.com/",
        icon: "https://bumpmesh.com/logo.png"
      },
      {
        name: "Texturelabs",
        description: "Find texture and design assets.",
        aliases: ["texture", "textures", "texturelabs"],
        home: "https://texturelabs.org/",
        search: "https://texturelabs.org/?search_type=texture&s={q}"
      }
    ]
  },
  {
    category: "Health & Fitness",
    sites: [
      {
        name: "StrengthLevel",
        description: "Compare lifting performance against strength standards.",
        aliases: ["strengthlevel", "sl", "strength"],
        home: "https://strengthlevel.com/",
        search: "https://strengthlevel.com/strength-standards/{q}"
      },
      {
        name: "Symmetric Strength",
        description: "Explore strength standards and balanced lifting metrics.",
        aliases: ["symmetric", "sym"],
        home: "https://symmetricstrength.com/"
      },
      {
        name: "Stronger by Science",
        description: "Search evidence-based training and nutrition articles.",
        aliases: ["strongerbyscience", "sbs"],
        home: "https://www.strongerbyscience.com/",
        search: "https://www.strongerbyscience.com/?s={q}"
      }
    ]
  },
  {
    category: "Bible",
    sites: [
      {
        name: "Blue Letter Bible — ESV",
        description: "Search Blue Letter Bible using the English Standard Version.",
        aliases: ["blb","bible","blbesv","esv"],
        home: "https://www.blueletterbible.org/esv/jhn/1/1/",
        search: "https://www.blb.org/search/preSearch.cfm?plugin=yes&Criteria={q}&t=ESV",
        icon: "https://www.blueletterbible.org/assets/images/favicon/apple-touch-icon-114x114.png"
      },
      {
        name: "Blue Letter Bible — LSB",
        description: "Search Blue Letter Bible using the Legacy Standard Bible.",
        aliases: ["lsb", "blblsb"],
        home: "https://www.blueletterbible.org/lsb/jhn/1/1/",
        search: "https://www.blb.org/search/preSearch.cfm?plugin=yes&Criteria={q}&t=LSB",
        icon: "https://www.blueletterbible.org/assets/images/favicon/apple-touch-icon-114x114.png"
      },
      {
        name: "Blue Letter Bible — NIV",
        description: "Search Blue Letter Bible using the New International Version.",
        aliases: ["niv", "blbniv"],
        home: "https://www.blueletterbible.org/niv/jhn/1/1/",
        search: "https://www.blb.org/search/preSearch.cfm?plugin=yes&Criteria={q}&t=NIV",
        icon: "https://www.blueletterbible.org/assets/images/favicon/apple-touch-icon-114x114.png"
      },
      {
        name: "Blue Letter Bible — KJV",
        description: "Search Blue Letter Bible using the King James Version.",
        aliases: ["kjv", "blbkjv"],
        home: "https://www.blueletterbible.org/kjv/jhn/1/1/",
        search: "https://www.blb.org/search/preSearch.cfm?plugin=yes&Criteria={q}&t=KJV",
        icon: "https://www.blueletterbible.org/assets/images/favicon/apple-touch-icon-114x114.png"
      }
    ]
  },
  {
    category: "Translation",
    sites: [
      {
        name: "Google Translate",
        aliases: ["gt", "gtrans", "gtranslate"],
        home: "https://translate.google.com/",
        search: "https://translate.google.com/?sl=auto&tl=en&text={q}&op=translate"
      },
      {
        name: "DeepL — Auto to English",
        description: "Translate detected text into English with DeepL.",
        aliases: ["deepl","dl","trans","translate"],
        home: "https://www.deepl.com/translator",
        search: "https://www.deepl.com/translator#xx/en/{q}",
        icon: "https://static.deepl.com/img/logo/deepl-logo-blue.svg"
      },
      {
        name: "DeepL — English to Spanish",
        aliases: ["enes", "ensp"],
        home: "https://www.deepl.com/translator#en/es",
        search: "https://www.deepl.com/translator#en/es/{q}",
        icon: "https://static.deepl.com/img/logo/deepl-logo-blue.svg"
      },
      {
        name: "DeepL — Spanish to English",
        aliases: ["esen", "spen"],
        home: "https://www.deepl.com/translator#es/en",
        search: "https://www.deepl.com/translator#es/en/{q}",
        icon: "https://static.deepl.com/img/logo/deepl-logo-blue.svg"
      },
      {
        name: "DeepL — English to French",
        aliases: ["enfr"],
        home: "https://www.deepl.com/translator#en/fr",
        search: "https://www.deepl.com/translator#en/fr/{q}",
        icon: "https://static.deepl.com/img/logo/deepl-logo-blue.svg"
      },
      {
        name: "DeepL — French to English",
        aliases: ["fren"],
        home: "https://www.deepl.com/translator#fr/en",
        search: "https://www.deepl.com/translator#fr/en/{q}",
        icon: "https://static.deepl.com/img/logo/deepl-logo-blue.svg"
      },
      {
        name: "DeepL — Spanish to French",
        aliases: ["esfr", "spfr"],
        home: "https://www.deepl.com/translator#es/fr",
        search: "https://www.deepl.com/translator#es/fr/{q}",
        icon: "https://static.deepl.com/img/logo/deepl-logo-blue.svg"
      },
      {
        name: "DeepL — French to Spanish",
        aliases: ["fres", "frsp"],
        home: "https://www.deepl.com/translator#fr/es",
        search: "https://www.deepl.com/translator#fr/es/{q}",
        icon: "https://static.deepl.com/img/logo/deepl-logo-blue.svg"
      },
      {
        name: "DeepL — English to German",
        aliases: ["ende"],
        home: "https://www.deepl.com/translator#en/de",
        search: "https://www.deepl.com/translator#en/de/{q}",
        icon: "https://static.deepl.com/img/logo/deepl-logo-blue.svg"
      },
      {
        name: "DeepL — German to English",
        aliases: ["deen"],
        home: "https://www.deepl.com/translator#de/en",
        search: "https://www.deepl.com/translator#de/en/{q}",
        icon: "https://static.deepl.com/img/logo/deepl-logo-blue.svg"
      },
      {
        name: "DeepL — English to Italian",
        aliases: ["enit"],
        home: "https://www.deepl.com/translator#en/it",
        search: "https://www.deepl.com/translator#en/it/{q}",
        icon: "https://static.deepl.com/img/logo/deepl-logo-blue.svg"
      },
      {
        name: "DeepL — Italian to English",
        aliases: ["iten"],
        home: "https://www.deepl.com/translator#it/en",
        search: "https://www.deepl.com/translator#it/en/{q}",
        icon: "https://static.deepl.com/img/logo/deepl-logo-blue.svg"
      },
      {
        name: "DeepL — English to Portuguese",
        aliases: ["enpt"],
        home: "https://www.deepl.com/translator#en/pt",
        search: "https://www.deepl.com/translator#en/pt/{q}",
        icon: "https://static.deepl.com/img/logo/deepl-logo-blue.svg"
      },
      {
        name: "DeepL — Portuguese to English",
        aliases: ["pten"],
        home: "https://www.deepl.com/translator#pt/en",
        search: "https://www.deepl.com/translator#pt/en/{q}",
        icon: "https://static.deepl.com/img/logo/deepl-logo-blue.svg"
      },
      {
        name: "DeepL — English to Japanese",
        aliases: ["enja"],
        home: "https://www.deepl.com/translator#en/ja",
        search: "https://www.deepl.com/translator#en/ja/{q}",
        icon: "https://static.deepl.com/img/logo/deepl-logo-blue.svg"
      },
      {
        name: "DeepL — Japanese to English",
        aliases: ["jaen"],
        home: "https://www.deepl.com/translator#ja/en",
        search: "https://www.deepl.com/translator#ja/en/{q}",
        icon: "https://static.deepl.com/img/logo/deepl-logo-blue.svg"
      },
      {
        name: "DeepL — English to Chinese",
        aliases: ["enzh"],
        home: "https://www.deepl.com/translator#en/zh",
        search: "https://www.deepl.com/translator#en/zh/{q}",
        icon: "https://static.deepl.com/img/logo/deepl-logo-blue.svg"
      },
      {
        name: "DeepL — Chinese to English",
        aliases: ["zhen"],
        home: "https://www.deepl.com/translator#zh/en",
        search: "https://www.deepl.com/translator#zh/en/{q}",
        icon: "https://static.deepl.com/img/logo/deepl-logo-blue.svg"
      },
      {
        name: "DeepL — English to Korean",
        aliases: ["enko"],
        home: "https://www.deepl.com/translator#en/ko",
        search: "https://www.deepl.com/translator#en/ko/{q}",
        icon: "https://static.deepl.com/img/logo/deepl-logo-blue.svg"
      },
      {
        name: "DeepL — Korean to English",
        aliases: ["koen"],
        home: "https://www.deepl.com/translator#ko/en",
        search: "https://www.deepl.com/translator#ko/en/{q}",
        icon: "https://static.deepl.com/img/logo/deepl-logo-blue.svg"
      }
    ]
  },
  {
    category: "Communication, Cloud & Accounts",
    sites: [
      {
        name: "Gmail",
        aliases: ["go","gma","gmail","mail"],
        home: "https://mail.google.com/",
        search: "https://mail.google.com/mail/u/0/#search/{q}",
        icon: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://mail.google.com&size=128"
      },
      {
        name: "Google Drive",
        aliases: ["drive", "gdrive"],
        home: "https://drive.google.com/drive/my-drive",
        search: "https://drive.google.com/drive/search?q={q}"
      },
      {
        name: "Google Docs",
        aliases: ["gd", "docs", "gdoc", "gdocs"],
        home: "https://docs.google.com/document/u/0/",
        search: "https://docs.google.com/document/u/0/?q={q}",
        icon: "https://www.gstatic.com/images/branding/productlogos/docs_2026/v2/web/192px.svg"
      },
      {
        name: "Google Voice",
        description: "Open Google Voice or search your messages.",
        aliases: ["voice","gvo","gvoice","gvmail"],
        home: "https://voice.google.com/u/1/",
        search: "https://voice.google.com/u/1/search?from=%5B%5D&q=%5B%22{q}%22%5D",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Google_Voice_Logo_05.2026.svg/1280px-Google_Voice_Logo_05.2026.svg.png"
      },
      {
        name: "OneDrive",
        description: "Open OneDrive or search your files.",
        aliases: ["onedrive", "od"],
        home: "https://onedrive.live.com/",
        search: "https://onedrive.live.com/?qt=search&q={q}"
      },
    ]
  },
  {
    category: "Privacy, Security & Domains",
    sites: [
      {
        name: "Techlore.tech",
        description: "Open Techlore’s privacy tools or search the Techlore YouTube channel.",
        aliases: ["spa", "techlore"],
        home: "https://tools.techlore.tech/",
        search: "https://www.youtube.com/@techlore/search?query={q}"
      },
      {
        name: "Proton Mail",
        description: "Private encrypted Gmail alternative.",
        aliases: ["pm", "protonmail"],
        home: "https://mail.proton.me/",
        search: "https://mail.proton.me/u/0/almost-all-mail#keyword={q}",
        icon: "https://upload.wikimedia.org/wikipedia/commons/0/0c/ProtonMail_icon.svg"
      },
      {
        name: "Proton Drive",
        description: "Private Google Drive alternative.",
        aliases: ["pd","protondrive"],
        home: "https://drive.proton.me/",
        search: "https://drive.proton.me/u/0/search#q={q}",
        icon: "https://drive.proton.me/assets/android-chrome-192x192.png"
      },
      {
        name: "Proton Pass",
        description: "Open Proton Pass or search your password manager.",
        aliases: ["pp", "pass", "password"],
        home: "https://pass.proton.me/u/19",
        search: "https://pass.proton.me/u/19/search#q={q}",
        icon: "https://pass.proton.me/assets/static/favicon.e8c1f23f352f3571d1a0.svg"
      },
      {
        name: "Proton Calendar",
        description: "Open Proton Calendar or search calendar items.",
        aliases: ["pc","cal","calendar"],
        home: "https://calendar.proton.me/",
        search: "https://calendar.proton.me/u/0/search#q={q}",
        icon: "https://calendar.proton.me/assets/android-chrome-192x192.png"
      },
      {
        name: "Proton Docs",
        description: "Open Proton Docs or search your documents.",
        aliases: ["pdoc", "pdocs", "protondocs"],
        home: "https://docs.proton.me/",
        search: "https://docs.proton.me/u/0/search#q={q}",
        icon: "https://docs.proton.me/assets/static/favicon.40633466c4eb6e41d336.svg"
      },
      {
        name: "Proton",
        description: "Proton referral link.",
        aliases: ["p", "proton"],
        home: "https://micahjeffery.com/proton/",
        icon: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Proton_AG_Logo_01.svg"
      },
      {
        name: "Proton Meet",
        description: "Open Proton’s browser-based meeting app.",
        aliases: ["meet","pmeet","protonmeet"],
        home: "https://meet.proton.me/",
        icon: "https://meet.proton.me/assets/static/favicon.0df442ee78b4350582c6.svg"
      },
      {
        name: "GrapheneOS",
        description: "Open GrapheneOS or search its site.",
        aliases: ["gos", "graphene", "grapheneos"],
        home: "https://grapheneos.org/",
        search: "https://grapheneos.org/{q}"
      },
      {
        name: "GrapheneOS Discussion Forum",
        description: "Open the GrapheneOS community discussion forum.",
        aliases: ["gosd", "graphened"],
        home: "https://discuss.grapheneos.org/",
        search: "https://grapheneos.org/{q}"
      },
      {
        name: "Brave Talk",
        description: "Open Brave’s browser-based video calling service.",
        aliases: ["talk", "btalk", "bravetalk"],
        home: "https://talk.brave.com/",
        icon: "https://brave.com/talk/images/logo-brave-talk.svg"
      },
      {
        name: "Bitwarden",
        description: "Open Bitwarden password manager or search your vault.",
        aliases: ["bw", "bitwarden"],
        home: "https://bitwarden.com/",
        search: "https://vault.bitwarden.com/#/vault?search={q}"
      },
      {
        name: "NextDNS",
        description: "Open the NextDNS configuration dashboard.",
        aliases: ["dns", "nextdns", "ndns"],
        home: "https://my.nextdns.io/"
      },
      {
        name: "Signal",
        description: "Private encrypted messaging app.",
        aliases: ["signal"],
        home: "https://signal.org/download/",
        icon: "https://signal.org/assets/images/favicon/favicon-32x32.png"
      },
      {
        name: "Ente Auth",
        description: "Open Ente’s 2FA authentication app.",
        aliases: ["ente","ea","auth"],
        home: "https://auth.ente.com/auth",
        icon: "https://auth.ente.com/images/favicon.png"
      },
      {
        name: "Privacy.com",
        description: "Private virtual-cards.",
        aliases: ["privacy", "virtualcards", ],
        home: "https://app.privacy.com/home"
      },
      {
        name: "VirusTotal Domain Lookup",
        description: "Paste a file, URL, or hostname to open its VirusTotal domain report.",
        aliases: ["virus", "vt", "virustotal"],
        home: "https://www.virustotal.com/gui/home/url",
        icon: "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.virustotal.com&size=128",
        handler: "virustotal"
      },
      {
        name: "Have I Been Pwned",
        description: "Check whether an email address appears in known data breaches.",
        aliases: ["hibp", "pwned", "haveibeenpwned"],
        home: "https://haveibeenpwned.com/",
        search: "https://haveibeenpwned.com/account/{q}"
      },
      {
        name: "ICANN Lookup",
        description: "Look up domain registration information.",
        aliases: ["icann", "whois", "ican"],
        home: "https://lookup.icann.org/en",
        search: "https://lookup.icann.org/whois/en?q={q}&t=a"
      },
      {
        name: "Cloudflare Domains",
        description: "Search and buy unregistered domains.",
        aliases: ["domain", "dom", "domains", "cfd", "cloudflaredomains"],
        home: "https://domains.cloudflare.com/",
        search: "https://domains.cloudflare.com/?domain={q}"
      },
      {
        name: "Cloudflare Dashboard",
        description: "Open the Cloudflare account dashboard.",
        aliases: ["cf", "cloudflare"],
        home: "https://dash.cloudflare.com/"
      },
      {
        name: "Tuta Mail",
        description: "Private encrypted Gmail alternative.",
        aliases: ["tuta","tm","tutamail"],
        home: "https://mail.tutanota.com/",
        icon: "https://mail.tutanota.com/images/logo-favicon.svg"
      },
      {
        name: "Guerrilla Mail",
        description: "Open a disposable-email inbox.",
        aliases: ["spam", "temp", "guerrilla"],
        home: "https://www.guerrillamail.com/inbox"
      }
    ]
  },
  {
    category: "Creative & Utilities",
    sites: [
      {
        name: "Calculator",
        description: "Preview simple expressions locally, or search Wolfram|Alpha with a bang.",
        aliases: ["math", "calc"],
        home: "https://www.wolframalpha.com/",
        search: "https://www.wolframalpha.com/input?i={q}",
        icon: "https://icons.duckduckgo.com/ip3/wolframalpha.com.ico",
        handler: "math"
      },
      {
        name: "Micah Jeffery",
        description: "Open Micah Jeffery’s site.",
        aliases: ["mj","micah"],
        home: "https://www.micahjeffery.com/",
        search: "https://www.micahjeffery.com/_/search?query={q}",
        icon: "https://icons.duckduckgo.com/ip3/micahjeffery.com.ico"
      },
      {
        name: "Micah Jeffery > apps",
        description: "Open the applications links page.",
        aliases: ["apps", "mja"],
        home: "https://www.micahjeffery.com/links/applications",
        icon: "https://icons.duckduckgo.com/ip3/micahjeffery.com.ico"
      },
      {
        name: "Micah Jeffery > extensions",
        description: "Open the browser-extensions links page.",
        aliases: ["mje", "extensions"],
        home: "https://www.micahjeffery.com/links/extensions",
        icon: "https://icons.duckduckgo.com/ip3/micahjeffery.com.ico"
      },
      {
        name: "Micah Jeffery > hysa",
        description: "Open the high-yield savings-account page.",
        aliases: ["mjs", "mjh", "hysa", "hysas", "apy", "savings"],
        home: "https://www.micahjeffery.com/financial/hysas",
        icon: "https://icons.duckduckgo.com/ip3/micahjeffery.com.ico"
      },
      {
        name: "Micah Jeffery > referrals",
        description: "Open the referral and savings links page.",
        aliases: ["refer", "mjr", "referral", "referrals"],
        home: "https://www.micahjeffery.com/financial/hysas",
        icon: "https://icons.duckduckgo.com/ip3/micahjeffery.com.ico"
      },
      {
        name: "Caption Ninja",
        description: "Open browser-based captioning tools.",
        aliases: ["caption", "cap"],
        home: "https://caption.ninja/",
        icon: "https://caption.ninja/favicon.svg"
      },
      {
        name: "Case Converter",
        description: "Open a text case-conversion tool.",
        aliases: ["case"],
        home: "https://it-tools.tech/case-converter"
      },
      {
        name: "Coolors",
        description: "Open a color-palette generator.",
        aliases: ["color","coolors"],
        home: "https://coolors.co/?home",
        icon: "https://coolors.co/assets/img/favicon.png"
      },
      {
        name: "Cursors",
        description: "Open the cursor theme repository.",
        aliases: ["cursor", "cursors"],
        home: "https://github.com/wrinkdater/Posys-Cursors-Improved-by-wrinkdater"
      },
      {
        name: "Cobalt Downloader",
        description: "Download media from X, Facebook, Instagram, Pinterest, Reddit, Snapchat, Soundcloud, Tiktok, Twitch, etc.",
        aliases: ["download","cobalt"],
        home: "https://cobalt.tools/",
        icon: "https://cobalt.tools/icons/apple-touch-icon.png"
      },
      {
        name: "Excalidraw",
        description: "Open a collaborative whiteboard.",
        aliases: ["draw", "excalidraw"],
        home: "https://excalidraw.com/"
      },
      {
        name: "MindMup",
        description: "Create a new mind map.",
        aliases: ["mindmap", "mup"],
        home: "https://app.mindmup.com/map/new"
      },
      {
        name: "Diagram.net",
        description: "Flowchart Maker and Online Diagram Software.",
        aliases: ["dia", "diagram"],
        home: "https://app.diagrams.net/"
      },
      {
        name: "Blank Page",
        description: "Open a blank browser page.",
        aliases: ["page", "blank", "bp"],
        home: "https://blank.page"
      },
      {
        name: ".ics / iCal editor",
        description: "Create, view, or combine calendar-event files.",
        aliases: ["ics", "ical"],
        home: "https://giga.tools/data-tools/ical-event-file-creator"
      },
      {
        name: "Photopea",
        description: "Browser-based Photoshop alternative image editor.",
        aliases: ["photo","ps"],
        home: "https://www.photopea.com/",
        icon: "https://www.photopea.com/promo/icon512.png"
      },
      {
        name: "SVG Repo",
        description: "Search free open-licensed SVG vectors and icons.",
        aliases: ["svgrepo","svg","icons"],
        home: "https://www.svgrepo.com/",
        search: "https://www.svgrepo.com/vectors/{q}/",
        icon: "https://www.svgrepo.com/android-chrome-192x192.png"
      },
      {
        name: "VectorMaker",
        description: "Convert PNG or JPG images into SVG vectors.",
        aliases: ["vectormaker", "vector", "vectorize"],
        home: "https://vectormaker.co/"
      },
      {
        name: "Image Backgroud Remover",
        aliases: ["background", "remove", "bgrm"],
        home: "https://giga.tools/image-tools/background-remover"
      },
      {
        name: "Image Metadata/EXIF Analyzer",
        aliases: ["exif", "meta", "metadata"],
        home: "https://giga.tools/image-tools/exif-reader"
      },
      {
        name: "JPEG Optimizer",
        description: "Compress and optimize JPEG images.",
        aliases: ["jpeg","compress"],
        home: "https://jpeg-optimizer.com/",
        icon: "https://jpeg-optimizer.com/favicons/favicon.ico"
      },
      {
        name: "Image Extractor",
        description: "Extract all images from a web page.",
        aliases: ["extract", "image", "pics"],
        home: "https://extract.pics/"
      },
      {
        name: "Emoji Picker",
        aliases: ["emoji", "emo", "emoj"],
        home: "https://emojipedia.org/en/", 
        search: "https://emojipedia.org/en/search?q={q}"
      },
      {
        name: "Unicode Faces",
        description: "Browse text faces and Unicode emoticons.",
        aliases: ["face","unicode"],
        home: "https://textfac.es/",
        icon: "https://textfac.es/static/ico/favicon.png"
      },
      {
        name: "Wormhole File Transfer",
        description: "Send files directly with Wormhole.",
        aliases: ["file","wh","worm","transfer","transf","wormhole"],
        home: "https://wormhole.app/",
        icon: "https://icons.duckduckgo.com/ip3/wormhole.app.ico"
      },
      {
        name: "WhatFontIs",
        description: "Identify fonts from an image.",
        aliases: ["font","whatfont"],
        home: "https://www.whatfontis.com/",
        icon: "https://d1ly52g9wjvbd2.cloudfront.net/favicon.ico"
      },
      {
        name: "VDO.Ninja",
        description: "Bring live video from any phone or computer into OBS.",
        aliases: ["vdo","obs"],
        home: "https://vdo.ninja/",
        icon: "https://vdo.ninja/media/favicon-32x32.png"
      },
      {
        name: "OnlineOCR",
        description: "Extract text from image files with OCR.",
        aliases: ["ocr"],
        home: "https://www.onlineocr.net/"
      },
      {
        name: "TinyWow PDF Tools",
        description: "Open browser-based PDF tools.",
        aliases: ["pdf"],
        home: "https://tinywow.com/tools/pdf",
        icon: "https://tinywow.com/v3/img/favicon-tinywow.svg"
      },
      {
        name: "QuickChart QR Generator",
        description: "Generate a QR code from text or a URL.",
        aliases: ["qr","qrcode"],
        home: "https://quickchart.io/qr-code-api/",
        search: "https://quickchart.io/qr?text={q}",
        icon: "https://quickchart.io/favicon-32x32.png"
      },
      {
        name: "ZXing QR Decoder",
        description: "Decode a QR code from an image or image URL.",
        aliases: ["qrdecode", "qrd"],
        home: "https://zxing.org/w/decode.jspx", 
        search: "https://zxing.org/w/decode?u={q}" 
      },
      {
        name: "Wayback Machine",
        description: "Open archived versions of websites.",
        aliases: ["wb","wbm","archive","wayback"],
        home: "https://web.archive.org/",
        search: "https://web.archive.org/web/*/{q}",
        icon: "https://web-static.archive.org/_static/images/archive.ico"
      },
      {
        name: "Receive SMS",
        description: "Open a public temporary-SMS service.",
        aliases: ["sms"],
        home: "https://receive-sms.cc/"
      },
      {
        name: "Fast.com",
        description: "Run a simple internet-speed test.",
        aliases: ["test","speed","fast"],
        home: "https://fast.com/",
        icon: "https://fast.com/assets/favicons/apple-icon-180x180.png"
      },
      {
        name: "Text Statistics",
        description: "Analyze text length, words, and reading statistics.",
        aliases: ["text"],
        home: "https://it-tools.tech/text-statistics"
      },
      {
        name: "Upscale.media",
        description: "Open an image-upscaling tool.",
        aliases: ["upscale"],
        home: "https://www.upscale.media/upload",
        icon: "https://cdn.pixelbin.io/v2/dummy-cloudname/original/upscalemedia_assets/logo/upscale_light_favicon.png?f_auto=true"
      },
      {
        name: "Wallhaven",
        description: "Search wallpaper images on Wallhaven.",
        aliases: ["wallpaper", "wall", "wallhaven", "wp"],
        home: "https://wallhaven.cc/",
        search: "https://wallhaven.cc/search?q={q}"
      }
    ]
  },
  {
    category: "Learning",
    sites: [
      {
        name: "Monkeytype",
        description: "Practice typing.",
        aliases: ["type","mt","monkey"],
        home: "https://monkeytype.com/",
        icon: "https://monkeytype.com/images/favicon/favicon.ico"
      },
      {
        name: "Agile Fingers",
        description: "Practice typing with custom text.",
        aliases: ["af", "agile", "agilefingers"],
        home: "https://agilefingers.com/custom-texts"
      },
      {
        name: "Seterra",
        description: "Practice geography quizzes.",
        aliases: ["geo", "set", "seterra", "settera", "geography", ],
        home: "https://www.geoguessr.com/quiz/seterra"
      },
      {
        name: "AnkiWeb",
        description: "Browse or search shared Anki flashcard decks.",
        aliases: ["anki","flashcards"],
        home: "https://ankiweb.net/decks",
        search: "https://ankiweb.net/shared/decks?search={q}",
        icon: "https://ankiweb.net/logo.png"
      },
      {
        name: "Language Squad",
        description: "Language Identifying & Guessing Game.",
        aliases: ["language", "ls", "languagesquad"],
        home: "https://www.languagesquad.com/"
      },
      {
        name: "EthnoGuessr",
        description: "Open the EthnoGuessr game.",
        aliases: ["ethno","race","ethnicity","ethnogussr","hbd"],
        home: "https://hbd.gg/",
        icon: "https://hbd.gg/static/ethnoguessr/icons/apple-touch-icon.png"
      },
      {
        name: "Justin Guitar",
        description: "Guitar-learning course and resources.",
        aliases: ["guitar", "jg","justinguitar"],
        home: "https://www.justinguitar.com/",
        search: "https://www.justinguitar.com/advanced_search?q={q}"
      },
      {
        name: "OpenCourseWare - MIT courses",
        description: "Search free MIT course materials.",
        aliases: ["mit", "ocw"],
        home: "https://ocw.mit.edu/",
        search: "https://ocw.mit.edu/search/?q={q}"
      },
      {
        name: "Wikiversity",
        description: "Search free learning resources and educational projects.",
        aliases: ["wv", "wikiversity"],
        home: "https://en.wikiversity.org/wiki/",
        search: "https://en.wikiversity.org/w/index.php?search={q}"
       },
       {
        name: "Wikibooks",
        description: "Search free textbooks and manuals.",
        aliases: ["wbk", "wikibooks"],
        home: "https://www.wikibooks.org/",
        search: "https://en.wikibooks.org/w/index.php?search={q}"
      }
    ]
  }
];
// -----------------------------------------------------------------------------
// 3. CONFIGURATION INDEXES AND VALIDATION
// -----------------------------------------------------------------------------

const SITES = SITE_GROUPS.flatMap((group) =>
  group.sites.map((site) => ({
    ...site,
    id: String(site.aliases[0]).toLowerCase(),
    category: group.category
  }))
);
const SITE_BY_ID = new Map(SITES.map((site) => [site.id, site]));
// Multisearch icons can use either `icon` (an external URL) or `iconSvg`
// `icon` takes precedence when both are present.
const MULTI_ICON_SVGS = {
  web: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 21l-5.2-5.2M18 10.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  video: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" stroke-width="2"/><path d="m10 9 5 3-5 3V9Z" fill="currentColor"/></svg>`,
  image: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" stroke-width="2"/><circle cx="8.5" cy="9" r="1.5" fill="currentColor"/><path d="m5 18 5-5 3 3 2-2 4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  news: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 4h12a2 2 0 0 1 2 2v13H7a2 2 0 0 1-2-2V4Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M19 8h2v9a2 2 0 0 1-2 2M8 8h6M8 12h8M8 16h5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  games: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8.2 8h7.6a5 5 0 0 1 4.75 6.56l-.68 2.08a2.7 2.7 0 0 1-4.48 1.08L13.7 16h-3.4l-1.69 1.72a2.7 2.7 0 0 1-4.48-1.08l-.68-2.08A5 5 0 0 1 8.2 8Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M8 11v4M6 13h4M16.5 12h.01M18 14h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  shopping: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 4h2l2.2 10.2a2 2 0 0 0 1.95 1.58h7.98a2 2 0 0 0 1.94-1.5L21 7H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="20" r="1.25" fill="currentColor"/><circle cx="18" cy="20" r="1.25" fill="currentColor"/></svg>`,
  model3d: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="m4.5 7.8 7.5 4.3 7.5-4.3M12 12v8.5" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`,
  ai: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2.8c.65 4.65 2.9 6.9 7.55 7.55-4.65.65-6.9 2.9-7.55 7.55-.65-4.65-2.9-6.9-7.55-7.55C9.1 9.7 11.35 7.45 12 2.8Z" fill="currentColor"/><path d="M19 15.5c.25 1.8 1.2 2.75 3 3-1.8.25-2.75 1.2-3 3-.25-1.8-1.2-2.75-3-3 1.8-.25 2.75-1.2 3-3Z" fill="currentColor" opacity=".75"/></svg>`,
  translate: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 5h9M8.5 3v2M6 9c1.7 2.5 4 4.4 7 5.5M11 7c-1.1 3.2-3.5 5.8-7 7.5M14 20l3.3-8h1.4l3.3 8M15.2 17h5.6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  maps: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 22s7-6.1 7-13A7 7 0 1 0 5 9c0 6.9 7 13 7 13Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="12" cy="9" r="2.5" fill="currentColor"/></svg>`
};
const MULTI_SEARCHES = [
  {
    id: "x",
    name: "Web Multisearch",
    description: "Search the same term across multiple search engines.",
    iconSvg: MULTI_ICON_SVGS.web,
    aliases: ["x", "xsearch", "xweb"],
    targets: [
      { type: "engine", key: "" },
      { type: "engine", key: "g" },
      { type: "engine", key: "brave" },
      { type: "engine", key: "startpage" },
      { type: "engine", key: "bing" },
      { type: "engine", key: "yahoo" }
    ]
  },
  {
    id: "xv",
    name: "Video Multisearch",
    description: "Search multiple video platforms.",
    iconSvg: MULTI_ICON_SVGS.video,
    aliases: ["xv", "vx", "xvideo", "xvid"],
    targets: [
      { type: "site", key: "yt" },
      { type: "site", key: "gv" },
      { type: "site", key: "dv" },
      { type: "site", key: "bv" },
      { type: "site", key: "spv" },
      { type: "site", key: "yv" },
      { type: "site", key: "tt" }
    ]
  },
  {
    id: "xi",
    name: "Image Multisearch",
    description: "Search multiple image engines.",
    iconSvg: MULTI_ICON_SVGS.image,
    aliases: ["xi", "ix", "ximage", "ximages", "ximg"],
    targets: [
      { type: "site", key: "gi" },
      { type: "site", key: "di" },
      { type: "site", key: "bi" },
      { type: "site", key: "spi" },
      { type: "site", key: "yi" },
      { type: "site", key: "pin" },
      { type: "site", key: "wm" }
    ]
  },
  {
    id: "xn",
    name: "News Multisearch",
    description: "Search news tabs across multiple search engines.",
    iconSvg: MULTI_ICON_SVGS.news,
    aliases: ["xn", "nx", "xnews"],
    targets: [
      { type: "site", key: "gn" },
      { type: "site", key: "dn" },
      { type: "site", key: "bn" },
      { type: "site", key: "spn" },
      { type: "site", key: "yn" }
    ]
  },
  {
    id: "xg",
    name: "Games Multisearch",
    description: "Search a game across multiple sites.",
    iconSvg: MULTI_ICON_SVGS.games,
    aliases: ["xg", "gx", "xgame", "xgames"],
    targets: [
      { type: "site", key: "steam" },
      { type: "site", key: "gog" },
      { type: "site", key: "itad" },
      { type: "site", key: "eneba" },
      { type: "site", key: "steamdb" },
      { type: "site", key: "protondb" },
      { type: "site", key: "hltb" },
      { type: "site", key: "beforeiplay" }
    ]
  },
  {
    id: "xs",
    name: "Shopping Multisearch",
    description: "Search multiple shopping sites.",
    iconSvg: MULTI_ICON_SVGS.shopping,
    aliases: ["xs", "xshop", "xshopping"],
    targets: [
      { type: "site", key: "gs" },
      { type: "site", key: "pcpp" },
      { type: "site", key: "amazon" },
      { type: "site", key: "ebay" },
      { type: "site", key: "walmart" },
      { type: "site", key: "costco" },
      { type: "site", key: "fbm" },
      { type: "site", key: "ys" },
      { type: "site", key: "camel" },
      { type: "site", key: "homedepot" }
    ]
  },
  {
    id: "x3d",
    name: "3D Model Multisearch",
    description: "Search printable model sites at the same time.",
    iconSvg: MULTI_ICON_SVGS.model3d,
    aliases: ["x3d", "xmodels", "xprint", "3dx"],
    targets: [
      { type: "site", key: "printables" },
      { type: "site", key: "maker" },
      { type: "site", key: "thing" },
      { type: "site", key: "cults" },
      { type: "site", key: "thangs" },
      { type: "site", key: "yeggi" }
    ]
  },
  {
    id: "xai",
    name: "AI Multisearch",
    description: "Open multiple AI assistants and AI tools.",
    iconSvg: MULTI_ICON_SVGS.ai,
    aliases: ["xai"],
    targets: [
      { type: "site", key: "duckai" },
      { type: "site", key: "lumo" },
      { type: "site", key: "chatgpt" },
      { type: "site", key: "claude" },
      { type: "site", key: "gemini" },
      { type: "site", key: "perplexity" },
      { type: "site", key: "poe" },
      { type: "site", key: "mistral" },
      { type: "site", key: "copilot" },
      { type: "site", key: "huggingchat" },
      { type: "site", key: "deepseek" }
    ]
  },
  {
    id: "xeng",
    name: "Translation Multisearch",
    description: "Translate English text into multiple languages.",
    iconSvg: MULTI_ICON_SVGS.translate,
    aliases: ["xeng", "xtrans", "enex", "engex"],
    targets: [
      { type: "site", key: "enes" },
      { type: "site", key: "enfr" },
      { type: "site", key: "ende" },
      { type: "site", key: "enit" },
      { type: "site", key: "enpt" },
      { type: "site", key: "enja" },
      { type: "site", key: "enzh" },
      { type: "site", key: "enko" }
    ]
  },
  {
    id: "xmap",
    name: "Maps Multisearch",
    description: "Open multiple maps at the same time.",
    iconSvg: MULTI_ICON_SVGS.maps,
    aliases: ["xmap", "xmaps"],
    targets: [
      { type: "site", key: "gm" },
      { type: "site", key: "dm" },
      { type: "site", key: "osm" },
      { type: "site", key: "amaps" }
    ]
  }
]
const DEFAULT_ENGINE_BY_PATH = buildDefaultEngineIndex(DEFAULT_ENGINES);
const { byAlias: BANGS, conflicts: ALIAS_CONFLICTS, invalid: INVALID_ALIASES } =
  buildBangIndex(SITES);
const {
  byAlias: MULTI_SEARCH_BY_ALIAS,
  byId: MULTI_SEARCH_BY_ID,
  conflicts: MULTI_SEARCH_CONFLICTS,
  invalid: INVALID_MULTI_SEARCH_ALIASES
} = buildMultiSearchIndex(MULTI_SEARCHES);
const CROSS_ALIAS_CONFLICTS = [...MULTI_SEARCH_BY_ALIAS.entries()].flatMap(([alias, multi]) => {
  const site = BANGS.get(alias);
  return site ? [{ alias, first: site.name, second: multi.name }] : [];
});
const RESOLVED_MULTI_SEARCH_TARGETS = new Map(
  MULTI_SEARCHES.map((multi) => [multi.id, resolveMultiSearchTargets(multi)])
);
const MULTI_SEARCH_CARD_TERMS = new Map(
  MULTI_SEARCHES.map((multi) => [multi.id, buildMultiSearchCardSearchTerms(multi)])
);
const HELP_PAGE_HTML_CACHE = new Map();
function buildDefaultEngineIndex(engines) {
  const index = new Map();
  for (const engine of engines) {
    for (const path of engine.paths) {
      index.set(normalizePath(path), engine);
    }
  }
  return index;
}
function buildBangIndex(sites) {
  const byAlias = new Map();
  const conflicts = [];
  const invalid = [];
  for (const site of sites) {
    for (const rawAlias of site.aliases) {
      const alias = String(rawAlias).trim().toLowerCase();
      if (!/^[a-z0-9_-]+$/.test(alias)) {
        invalid.push({ alias: rawAlias, site: site.name });
        continue;
      }
      if (byAlias.has(alias)) {
        conflicts.push({
          alias,
          first: byAlias.get(alias).name,
          second: site.name
        });
        continue;
      }
      byAlias.set(alias, site);
    }
  }
  return { byAlias, conflicts, invalid };
}
function buildMultiSearchIndex(multis) {
  const byAlias = new Map();
  const byId = new Map();
  const conflicts = [];
  const invalid = [];
  for (const multi of multis) {
    const normalizedId = String(multi.id).trim().toLowerCase();
    if (!/^[a-z0-9_-]+$/.test(normalizedId)) {
      invalid.push({ alias: multi.id, site: multi.name });
      continue;
    }
    byId.set(normalizedId, multi);
    for (const rawAlias of multi.aliases) {
      const alias = String(rawAlias).trim().toLowerCase();
      if (!/^[a-z0-9_-]+$/.test(alias)) {
        invalid.push({ alias: rawAlias, site: multi.name });
        continue;
      }
      if (byAlias.has(alias)) {
        conflicts.push({
          alias,
          first: byAlias.get(alias).name,
          second: multi.name
        });
        continue;
      }
      byAlias.set(alias, multi);
    }
  }
  return { byAlias, byId, conflicts, invalid };
}
// -----------------------------------------------------------------------------
// 4. SPECIAL HANDLERS
// -----------------------------------------------------------------------------
function handleVirusTotalLookup(query) {
  const domain = extractDomain(query);
  if (!domain) {
    return redirectTo("https://www.virustotal.com/gui/home/url");
  }
  return redirectTo(
    `https://www.virustotal.com/gui/domain/${encodeURIComponent(domain)}`
  );
}
function extractDomain(query) {
  let value = query.trim().replace(/^[\s"'(<\[]+|[\s"')>\],.;]+$/g, "");
  if (!value) return null;
  // A pasted URL normally has no spaces. If it does, use the first URL-like token.
  value = value.split(/\s+/)[0];
  if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(value)) {
    value = `https://${value}`;
  }
  try {
    const hostname = new URL(value).hostname.toLowerCase();
    return hostname.replace(/^www\./, "") || null;
  } catch {
    return null;
  }
}
// -----------------------------------------------------------------------------
// 5. GENERAL HELPERS
// -----------------------------------------------------------------------------
function normalizePath(value) {
  return String(value).replace(/^\/+|\/+$/g, "").toLowerCase();
}
function htmlResponse(html, cacheControl = "no-store") {
  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": cacheControl,
      "x-content-type-options": "nosniff",
      "referrer-policy": "no-referrer"
    }
  });
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      "x-content-type-options": "nosniff",
      "referrer-policy": "no-referrer"
    }
  });
}
const FAVICON_DISCOVERY_CACHE = new Map();
const FAVICON_DISCOVERY_CACHE_TTL = 10 * 60 * 1000;
const FAVICON_DISCOVERY_CACHE_LIMIT = 100;
function getCachedFaviconDiscovery(key) {
  const cached = FAVICON_DISCOVERY_CACHE.get(key);
  if (!cached) return null;
  if (cached.expiresAt <= Date.now()) {
    FAVICON_DISCOVERY_CACHE.delete(key);
    return null;
  }
  return cached.value;
}
function setCachedFaviconDiscovery(key, value) {
  if (FAVICON_DISCOVERY_CACHE.size >= FAVICON_DISCOVERY_CACHE_LIMIT) {
    const firstKey = FAVICON_DISCOVERY_CACHE.keys().next().value;
    if (firstKey !== undefined) FAVICON_DISCOVERY_CACHE.delete(firstKey);
  }
  FAVICON_DISCOVERY_CACHE.set(key, {
    value,
    expiresAt: Date.now() + FAVICON_DISCOVERY_CACHE_TTL
  });
}
function normalizeDiscoveryUrl(value) {
  let raw = String(value || "").trim();
  if (!raw) throw new Error("Enter a home URL first.");
  if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(raw)) raw = `https://${raw}`;
  const url = new URL(raw);
  if (url.protocol !== "https:" && url.protocol !== "http:") {
    throw new Error("Only HTTP and HTTPS URLs are supported.");
  }
  assertPublicDiscoveryUrl(url);
  url.hash = "";
  return url;
}
function assertPublicDiscoveryUrl(url) {
  const hostname = String(url.hostname || "").replace(/^\[|\]$/g, "").toLowerCase();
  if (!hostname) throw new Error("The URL needs a valid hostname.");
  if (
    hostname === "localhost" ||
    hostname.endsWith(".localhost") ||
    hostname.endsWith(".local") ||
    hostname.endsWith(".internal")
  ) {
    throw new Error("Local and private-network addresses are not allowed.");
  }
  if (isBlockedIpv4(hostname) || isBlockedIpv6(hostname)) {
    throw new Error("Local, reserved, and private-network addresses are not allowed.");
  }
}
function isBlockedIpv4(hostname) {
  if (!/^\d{1,3}(?:\.\d{1,3}){3}$/.test(hostname)) return false;
  const parts = hostname.split(".").map(Number);
  if (parts.some((part) => part < 0 || part > 255)) return true;
  const [a, b, c] = parts;
  return (
    a === 0 ||
    a === 10 ||
    a === 127 ||
    a >= 224 ||
    (a === 100 && b >= 64 && b <= 127) ||
    (a === 169 && b === 254) ||
    (a === 172 && b >= 16 && b <= 31) ||
    (a === 192 && b === 0) ||
    (a === 192 && b === 168) ||
    (a === 192 && b === 0 && c === 2) ||
    (a === 198 && (b === 18 || b === 19 || b === 51)) ||
    (a === 203 && b === 0 && c === 113)
  );
}
function isBlockedIpv6(hostname) {
  if (!hostname.includes(":")) return false;
  const value = hostname.toLowerCase();
  if (value === "::" || value === "::1") return true;
  if (value.startsWith("fc") || value.startsWith("fd")) return true;
  if (/^fe[89ab]/.test(value)) return true;
  const mapped = value.match(/::ffff:(\d{1,3}(?:\.\d{1,3}){3})$/);
  return mapped ? isBlockedIpv4(mapped[1]) : false;
}
async function fetchDiscoveryResource(input, init = {}, maxRedirects = 4) {
  let current = input instanceof URL ? new URL(input.href) : normalizeDiscoveryUrl(input);
  for (let redirectCount = 0; redirectCount <= maxRedirects; redirectCount += 1) {
    assertPublicDiscoveryUrl(current);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    let response;
    try {
      response = await fetch(current.href, {
        ...init,
        redirect: "manual",
        signal: controller.signal,
        headers: {
          "user-agent": "Micah-Search-Bang-Builder/1.0",
          ...(init.headers || {})
        }
      });
    } finally {
      clearTimeout(timeout);
    }
    if (![301, 302, 303, 307, 308].includes(response.status)) {
      return { response, finalUrl: current };
    }
    const location = response.headers.get("location");
    if (!location) return { response, finalUrl: current };
    if (response.body) response.body.cancel().catch(() => {});
    current = new URL(location, current);
    if (current.protocol !== "https:" && current.protocol !== "http:") {
      throw new Error("The site redirected to an unsupported URL.");
    }
  }
  throw new Error("The site redirected too many times.");
}
async function readTextLimited(response, maxBytes) {
  const contentLength = Number(response.headers.get("content-length") || 0);
  if (contentLength && contentLength > maxBytes) {
    throw new Error("The site response is too large to inspect safely.");
  }
  if (!response.body) return "";
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let total = 0;
  let result = "";
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      total += value.byteLength;
      if (total > maxBytes) {
        await reader.cancel();
        throw new Error("The site response is too large to inspect safely.");
      }
      result += decoder.decode(value, { stream: true });
    }
    result += decoder.decode();
    return result;
  } finally {
    reader.releaseLock();
  }
}
function parseHtmlAttributes(tag) {
  const attributes = {};
  const attributePattern = /([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  let match;
  while ((match = attributePattern.exec(tag))) {
    const name = String(match[1] || "").toLowerCase();
    if (name === "link" || name === "meta") continue;
    attributes[name] = match[2] ?? match[3] ?? match[4] ?? "";
  }
  return attributes;
}
function resolveHttpCandidate(value, baseUrl) {
  const raw = String(value || "").trim();
  if (!raw || raw.startsWith("data:")) return "";
  try {
    const url = new URL(raw, baseUrl);
    if (url.protocol !== "https:" && url.protocol !== "http:") return "";
    assertPublicDiscoveryUrl(url);
    url.hash = "";
    return url.href;
  } catch {
    return "";
  }
}
const HTML_ENTITY_NAMES = {
  amp: "&", quot: '"', apos: "'", lt: "<", gt: ">", nbsp: " ",
  ndash: "–", mdash: "—", hellip: "…", lsquo: "‘", rsquo: "’",
  ldquo: "“", rdquo: "”", copy: "©", reg: "®", trade: "™", middot: "·"
};
function decodeHtmlEntities(value) {
  return String(value || "").replace(/&(#(?:x[0-9a-f]+|\d+)|[a-z][a-z0-9]+);/gi, (entity, token) => {
    if (token.startsWith("#")) {
      const isHex = token[1]?.toLowerCase() === "x";
      const number = Number.parseInt(token.slice(isHex ? 2 : 1), isHex ? 16 : 10);
      if (Number.isFinite(number) && number > 0 && number <= 0x10ffff) {
        try { return String.fromCodePoint(number); } catch {}
      }
      return entity;
    }
    return HTML_ENTITY_NAMES[token.toLowerCase()] ?? entity;
  });
}
function cleanDiscoveredText(value) {
  return decodeHtmlEntities(String(value || "").replace(/<[^>]*>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}
function extractReadableText(html, pattern) {
  const match = html.match(pattern);
  return match ? cleanDiscoveredText(match[1] || "") : "";
}
function parseDeclaredSize(value) {
  const sizes = String(value || "").toLowerCase().match(/\d+x\d+/g) || [];
  return sizes.reduce((largest, size) => {
    const [width, height] = size.split("x").map(Number);
    return Math.max(largest, width || 0, height || 0);
  }, 0);
}
function addFaviconCandidate(candidates, rawUrl, baseUrl, metadata = {}) {
  const url = resolveHttpCandidate(rawUrl, baseUrl);
  if (!url) return;
  const lowerUrl = url.toLowerCase();
  let score = Number(metadata.score || 0);
  if (metadata.type === "image/svg+xml" || /\.svg(?:$|[?#])/i.test(lowerUrl)) score += 240;
  if (/\.png(?:$|[?#])/i.test(lowerUrl)) score += 80;
  if (/favicon\.ico(?:$|[?#])/i.test(lowerUrl)) score += 50;
  const declaredSize = parseDeclaredSize(metadata.sizes);
  if (declaredSize) {
    if (declaredSize <= 24) score += 35;
    else if (declaredSize <= 64) score += 105;
    else if (declaredSize <= 192) score += 135;
    else if (declaredSize <= 512) score += 95;
    else score += 25;
  }
  const existing = candidates.get(url);
  if (!existing || score > existing.score) {
    candidates.set(url, {
      url,
      score,
      source: metadata.source || "page",
      type: metadata.type || "",
      sizes: metadata.sizes || ""
    });
  }
}
async function probeFaviconCandidate(candidate) {
  try {
    const { response, finalUrl } = await fetchDiscoveryResource(candidate.url, {
      method: "GET",
      headers: {
        accept: "image/avif,image/webp,image/svg+xml,image/png,image/*,*/*;q=0.5"
      }
    });
    const contentType = String(response.headers.get("content-type") || "").toLowerCase();
    const clearlyNotImage =
      contentType.includes("text/html") ||
      contentType.includes("application/json") ||
      contentType.includes("text/plain");
    const iconLikeUrl = /(?:favicon|apple-touch-icon|site-icon|logo|\.(?:ico|png|svg|webp|gif|jpe?g))(?:$|[/?#._-])/i.test(finalUrl.href);
    const looksLikeImage = response.ok && !clearlyNotImage && (
      contentType.startsWith("image/") ||
      contentType.includes("svg") ||
      iconLikeUrl ||
      candidate.source === "favicon service fallback"
    );
    if (response.body) response.body.cancel().catch(() => {});
    return {
      ...candidate,
      url: finalUrl.href,
      works: looksLikeImage,
      contentType
    };
  } catch {
    return { ...candidate, works: false, contentType: "" };
  }
}
async function inspectManifestIcons(manifestUrl, candidates) {
  try {
    const { response, finalUrl } = await fetchDiscoveryResource(manifestUrl, {
      method: "GET",
      headers: { accept: "application/manifest+json,application/json;q=0.9,*/*;q=0.2" }
    });
    if (!response.ok) {
      if (response.body) response.body.cancel().catch(() => {});
      return;
    }
    const text = await readTextLimited(response, 256 * 1024);
    const manifest = JSON.parse(text);
    for (const icon of Array.isArray(manifest.icons) ? manifest.icons : []) {
      addFaviconCandidate(candidates, icon?.src, finalUrl, {
        source: "web app manifest",
        type: icon?.type || "",
        sizes: icon?.sizes || "",
        score: 310
      });
    }
  } catch {}
}
function collectLooseIconCandidates(html, baseUrl, candidates) {
  const metaTags = html.match(/<meta\b[^>]*>/gi) || [];
  for (const tag of metaTags) {
    const attributes = parseHtmlAttributes(tag);
    const key = String(attributes.name || attributes.property || attributes.itemprop || "").toLowerCase();
    if (!/(?:image|icon|logo)/.test(key) || !attributes.content) continue;
    addFaviconCandidate(candidates, attributes.content, baseUrl, {
      source: key || "page metadata",
      score: /icon|logo/.test(key) ? 205 : 115
    });
  }
  const imageTags = html.match(/<img\b[^>]*>/gi) || [];
  for (const tag of imageTags.slice(0, 250)) {
    const attributes = parseHtmlAttributes(tag);
    const clue = [attributes.src, attributes.alt, attributes.class, attributes.id]
      .filter(Boolean).join(" ").toLowerCase();
    if (!/(?:favicon|site[-_ ]?icon|logo|brand)/.test(clue)) continue;
    addFaviconCandidate(candidates, attributes.src, baseUrl, {
      source: "page logo image",
      sizes: attributes.width && attributes.height ? `${attributes.width}x${attributes.height}` : "",
      score: /favicon|site[-_ ]?icon/.test(clue) ? 260 : 125
    });
  }
  const quotedAssetPattern = /["']([^"'<>\s]{1,420}(?:favicon|apple-touch-icon|site[-_]?icon|logo)[^"'<>\s]{0,180})["']/gi;
  let assetMatch;
  let looseCount = 0;
  while ((assetMatch = quotedAssetPattern.exec(html)) && looseCount < 40) {
    const raw = assetMatch[1].replaceAll("\/", "/");
    if (/^(?:javascript|mailto|tel):/i.test(raw)) continue;
    addFaviconCandidate(candidates, raw, baseUrl, {
      source: "icon-like page asset",
      score: /favicon|apple-touch-icon|site[-_]?icon/i.test(raw) ? 235 : 95
    });
    looseCount += 1;
  }
}
async function buildFaviconDiscovery(homeUrl) {
  let finalPageUrl = homeUrl;
  let html = "";
  let pageTitle = "";
  let pageDescription = "";
  let pageWarning = "";
  try {
    const { response, finalUrl } = await fetchDiscoveryResource(homeUrl, {
      method: "GET",
      headers: {
        accept: "text/html,application/xhtml+xml;q=0.9,*/*;q=0.2",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/126 Safari/537.36"
      }
    });
    finalPageUrl = finalUrl;
    const contentType = String(response.headers.get("content-type") || "").toLowerCase();
    if (response.ok && (!contentType || contentType.includes("html") || contentType.includes("xhtml"))) {
      html = await readTextLimited(response, 1000 * 1024);
      pageTitle = extractReadableText(html, /<title\b[^>]*>([\s\S]*?)<\/title>/i);
      const metaTags = html.match(/<meta\b[^>]*>/gi) || [];
      for (const tag of metaTags) {
        const attributes = parseHtmlAttributes(tag);
        const key = String(attributes.name || attributes.property || "").toLowerCase();
        if ((key === "description" || key === "og:description" || key === "twitter:description") && attributes.content) {
          pageDescription = cleanDiscoveredText(attributes.content);
          if (key === "description") break;
        }
      }
    } else {
      pageWarning = `Page returned HTTP ${response.status}; fallback checks still ran.`;
      if (response.body) response.body.cancel().catch(() => {});
    }
  } catch (error) {
    pageWarning = `Page inspection failed; fallback checks still ran.`;
  }
  const candidates = new Map();
  const defaultIconUrl = new URL("/favicon.ico", finalPageUrl).href;
  addFaviconCandidate(candidates, defaultIconUrl, finalPageUrl, {
    source: "default /favicon.ico",
    score: 300
  });
  const manifestUrls = new Set([
    new URL("/site.webmanifest", finalPageUrl).href,
    new URL("/manifest.webmanifest", finalPageUrl).href,
    new URL("/manifest.json", finalPageUrl).href
  ]);
  if (html) {
    const linkTags = html.match(/<link\b[^>]*>/gi) || [];
    for (const tag of linkTags) {
      const attributes = parseHtmlAttributes(tag);
      const rel = String(attributes.rel || "").toLowerCase();
      const relTokens = rel.split(/\s+/).filter(Boolean);
      if (relTokens.includes("manifest") && attributes.href) {
        const manifestUrl = resolveHttpCandidate(attributes.href, finalPageUrl);
        if (manifestUrl) manifestUrls.add(manifestUrl);
        continue;
      }
      const hrefLooksRelevant = /(?:favicon|icon|logo)/i.test(String(attributes.href || ""));
      if (!relTokens.includes("icon") && !rel.includes("shortcut icon") && !rel.includes("apple-touch-icon") && !rel.includes("mask-icon") && !hrefLooksRelevant) {
        continue;
      }
      let score = 420;
      if (rel.includes("mask-icon")) score += 70;
      if (rel.includes("apple-touch-icon")) score += 30;
      if (rel.includes("shortcut icon")) score += 20;
      if (!rel.includes("icon")) score -= 180;
      addFaviconCandidate(candidates, attributes.href, finalPageUrl, {
        source: `<link rel="${rel || "asset"}">`,
        type: attributes.type || "",
        sizes: attributes.sizes || "",
        score
      });
    }
    collectLooseIconCandidates(html, finalPageUrl, candidates);
  }
  await Promise.all([...manifestUrls].slice(0, 6).map((url) => inspectManifestIcons(url, candidates)));
  const commonPaths = [
    ["/favicon.svg", "common /favicon.svg", "image/svg+xml", 250],
    ["/favicon.png", "common /favicon.png", "image/png", 210],
    ["/apple-touch-icon.png", "common Apple touch icon", "image/png", 190],
    ["/icon.svg", "common /icon.svg", "image/svg+xml", 165],
    ["/logo.svg", "common /logo.svg", "image/svg+xml", 90]
  ];
  for (const [path, source, type, score] of commonPaths) {
    addFaviconCandidate(candidates, path, finalPageUrl, { source, type, score });
  }
  const host = finalPageUrl.hostname.replace(/^www\./, "");
  addFaviconCandidate(candidates, `https://icons.duckduckgo.com/ip3/${encodeURIComponent(host)}.ico`, finalPageUrl, {
    source: "favicon service fallback",
    score: 65
  });
  addFaviconCandidate(candidates, `https://www.google.com/s2/favicons?domain_url=${encodeURIComponent(finalPageUrl.origin)}&sz=128`, finalPageUrl, {
    source: "favicon service fallback",
    score: 60
  });
  const rankedCandidates = [...candidates.values()]
    .sort((a, b) => b.score - a.score)
    .slice(0, 28);
  const checked = await Promise.all(rankedCandidates.map(probeFaviconCandidate));
  const working = checked
    .filter((candidate) => candidate.works)
    .sort((a, b) => b.score - a.score);
  const defaultResult = checked.find((candidate) => candidate.source === "default /favicon.ico");
  const defaultIconWorks = Boolean(defaultResult?.works);
  const bestCandidate = working[0] || null;
  const recommended = bestCandidate?.source === "default /favicon.ico" && defaultIconWorks
    ? ""
    : (bestCandidate?.url || "");
  return {
    ok: true,
    homeUrl: homeUrl.href,
    finalPageUrl: finalPageUrl.href,
    title: pageTitle,
    description: pageDescription,
    pageWarning,
    defaultIconUrl,
    defaultIconWorks,
    recommendedIcon: recommended,
    candidates: working.slice(0, 20).map((candidate) => ({
      url: candidate.url,
      source: candidate.source,
      type: candidate.contentType || candidate.type || "",
      sizes: candidate.sizes || "",
      score: candidate.score || 0,
      isDefault: candidate.source === "default /favicon.ico",
      isFallback: candidate.source === "favicon service fallback"
    }))
  };
}
async function handleFaviconDiscovery(request) {
  if (request.method !== "POST") {
    return jsonResponse({ ok: false, error: "Use POST for favicon discovery." }, 405);
  }
  const requestOrigin = request.headers.get("origin");
  if (requestOrigin && requestOrigin !== new URL(request.url).origin) {
    return jsonResponse({ ok: false, error: "Cross-site requests are not allowed." }, 403);
  }
  try {
    const contentLength = Number(request.headers.get("content-length") || 0);
    if (contentLength > 16 * 1024) {
      return jsonResponse({ ok: false, error: "The request is too large." }, 413);
    }
    const body = await request.json();
    const homeUrl = normalizeDiscoveryUrl(body?.url);
    const cacheKey = homeUrl.href;
    const cached = getCachedFaviconDiscovery(cacheKey);
    if (cached) return jsonResponse({ ...cached, cached: true });
    const result = await buildFaviconDiscovery(homeUrl);
    setCachedFaviconDiscovery(cacheKey, result);
    return jsonResponse(result);
  } catch (error) {
    return jsonResponse({
      ok: false,
      error: error instanceof Error ? error.message : "Favicon discovery failed."
    }, 400);
  }
}

function getFaviconUrl(site) {
  const explicit = String(site?.icon || "").trim();
  if (explicit) return explicit;
  const home = String(site?.home || "").trim();
  if (!home || home.startsWith("/")) return "";
  try {
    const url = new URL(home);
    if (url.protocol !== "https:" && url.protocol !== "http:") return "";
    return `${url.origin}/favicon.ico`;
  } catch {
    return "";
  }
}
function getDefaultEngine(pathname) {
  return DEFAULT_ENGINE_BY_PATH.get(normalizePath(pathname)) || DEFAULT_ENGINE_BY_PATH.get("");
}
function redirectTo(template, query = "") {
  const destination = template.replaceAll("{q}", encodeURIComponent(query.trim()));
  return Response.redirect(destination, 302);
}
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
  for (let index = 0; index < patterns.length; index += 1) {
    const match = raw.match(patterns[index]);
    if (!match) continue;
    if (index === 0) return { bang: match[2].toLowerCase(), query: match[3] || "" };
    if (index === 1) return { bang: match[1].toLowerCase(), query: match[3] || "" };
    if (index === 2) return { bang: match[3].toLowerCase(), query: match[1] || "" };
    if (index === 3) return { bang: match[2].toLowerCase(), query: match[1] || "" };
  }
  return null;
}
const RESERVED_BARE_QUERY_HINTS = new Map([
  ["xvideos", { safe: ";xv", label: "Video Multisearch" }]
]);
function getReservedBareQueryHint(raw) {
  const firstWord = String(raw).trim().toLowerCase().split(/\s+/)[0];
  return RESERVED_BARE_QUERY_HINTS.get(firstWord) || null;
}
function renderReservedBareQueryPage(raw, hint, requestUrl) {
  const query = String(raw).trim().replace(/^\S+\s*/, "");
  const suggested = query ? `${hint.safe} ${query}` : hint.safe;
  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Shortcut hint · ${escapeHtml(PROJECT.name)}</title>
  <style>
    :root { color-scheme: dark; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; background: #101114; color: #eef0f4; }
    body { min-height: 100vh; margin: 0; display: grid; place-items: center; padding: 24px; }
    main { width: min(620px, 100%); border: 1px solid rgba(255,255,255,.14); border-radius: 22px; padding: 28px; background: #181a20; box-shadow: 0 24px 80px rgba(0,0,0,.35); }
    h1 { margin: 0 0 10px; font-size: clamp(1.7rem, 5vw, 2.35rem); }
    p { color: #b8beca; line-height: 1.55; }
    code { color: #8ab4ff; font: 1rem ui-monospace, SFMono-Regular, Menlo, monospace; }
    .actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 20px; }
    a, button { border: 1px solid rgba(255,255,255,.16); border-radius: 999px; padding: 10px 14px; background: #222631; color: #eef0f4; text-decoration: none; cursor: pointer; font: inherit; }
    .primary { background: #8ab4ff; color: #101114; border-color: #8ab4ff; font-weight: 700; }
  </style>
</head>
<body>
  <main>
    <h1>Use the bang for that one</h1>
    <p><code>${escapeHtml(String(raw).trim())}</code> was not sent to your default search engine. Did you mean <strong>${escapeHtml(hint.label)}</strong>?</p>
    <p>Try <code>${escapeHtml(suggested)}</code>.</p>
    <div class="actions">
      <a class="primary" href="/?q=${encodeURIComponent(suggested)}">Open ${escapeHtml(hint.label)}</a>
      <a href="/">Back to shortcuts</a>
    </div>
  </main>
</body>
</html>`;
  return htmlResponse(html);
}
function chooseRandom(items) {
  if (!items.length) return null;
  const values = new Uint32Array(1);
  crypto.getRandomValues(values);
  return items[values[0] % items.length];
}
function handleRandomBang(query) {
  const candidates = query
    ? SITES.filter((candidate) => candidate.handler !== "random" && !candidate.handler && candidate.search)
    : SITES.filter((candidate) => candidate.handler !== "random" && candidate.home && !candidate.aliases.includes("home"));
  const selected = chooseRandom(candidates);
  if (!selected) return redirectTo(PROJECT.repository);
  return query && selected.search
    ? redirectTo(selected.search, query)
    : redirectTo(selected.home);
}
function handleSite(site, query, requestUrl) {
  if (site.handler === "random") {
    return handleRandomBang(query);
  }
  if (site.handler === "virustotal") {
    return query ? handleVirusTotalLookup(query) : redirectTo(site.home);
  }
  if (query && site.search) {
    return redirectTo(site.search, query);
  }
  return redirectTo(site.home);
}
function renderLocalBangResolverPage(shortcut, raw, defaultEngine) {
  const fallbackUrl = defaultEngine.search.replaceAll("{q}", encodeURIComponent(String(raw).trim()));
  const payload = JSON.stringify({
    bang: shortcut.bang,
    query: shortcut.query,
    fallbackUrl
  }).replaceAll("<", "\\u003c");
  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Opening local bang · ${escapeHtml(PROJECT.name)}</title>
  <style>
    :root { color-scheme: light dark; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; background: #101114; color: #eef0f4; }
    @media (prefers-color-scheme: light) { :root { background: #f7f8fb; color: #17191f; } }
    body { min-height: 100vh; margin: 0; display: grid; place-items: center; padding: 24px; box-sizing: border-box; }
    main { width: min(560px, 100%); text-align: center; }
    h1 { margin: 0 0 8px; font-size: clamp(1.55rem, 5vw, 2.1rem); }
    p { margin: 0; opacity: .72; }
    a { display: inline-block; margin-top: 18px; color: inherit; }
  </style>
</head>
<body>
  <main>
    <h1 id="resolver-title">Checking local bangs…</h1>
    <p id="resolver-status">This should only take a moment.</p>
    <a id="resolver-fallback" href="${escapeAttribute(fallbackUrl)}">Continue with the default search</a>
  </main>
  <script>
    (() => {
      const request = ${payload};
      const storageKey = "search-local-bangs-v1";
      const isHttpUrl = (value) => {
        try {
          const url = new URL(String(value || ""));
          return url.protocol === "http:" || url.protocol === "https:";
        } catch { return false; }
      };
      let localBangs = [];
      try {
        const parsed = JSON.parse(localStorage.getItem(storageKey) || "[]");
        if (Array.isArray(parsed)) localBangs = parsed;
      } catch {}
      const target = localBangs.find((bang) =>
        bang && bang.enabled !== false && Array.isArray(bang.aliases) &&
        bang.aliases.some((alias) => String(alias).toLowerCase() === request.bang)
      );
      let destination = request.fallbackUrl;
      if (target && isHttpUrl(target.home)) {
        const search = String(target.search || "");
        destination = request.query && search.includes("{q}") && isHttpUrl(search.replaceAll("{q}", "example"))
          ? search.replaceAll("{q}", encodeURIComponent(request.query.trim()))
          : target.home;
        document.getElementById("resolver-title").textContent = "Opening " + String(target.name || "local bang") + "…";
        document.getElementById("resolver-status").textContent = "Resolved !" + request.bang + " from this browser.";
      } else {
        document.getElementById("resolver-title").textContent = "Local bang not found";
        document.getElementById("resolver-status").textContent = "Continuing with your default search.";
      }
      document.getElementById("resolver-fallback").href = destination;
      window.location.replace(destination);
    })();
  </script>
</body>
</html>`;
  return htmlResponse(html, "no-store");
}

// -----------------------------------------------------------------------------
// 6. AUTOMATIC HELP / HOMEPAGE
// -----------------------------------------------------------------------------
function buildMultiSearchCardSearchTerms(multi) {
  const resolvedTargets = RESOLVED_MULTI_SEARCH_TARGETS?.get(multi.id) || resolveMultiSearchTargets(multi);
  return [
    multi.name,
    multi.description || "",
    "Multisearch",
    ...multi.aliases,
    ...resolvedTargets.flatMap((target) => [
      target.name,
      target.detail,
      target.home,
      target.search || "",
      ...(target.aliases || [])
    ])
  ].join(" ");
}
function renderHelpPage(requestUrl) {
  const origin = requestUrl.origin;
  const cachedHtml = HELP_PAGE_HTML_CACHE.get(origin);
  if (cachedHtml) return htmlResponse(cachedHtml);
  const totalAliases = BANGS.size + MULTI_SEARCH_BY_ALIAS.size;
  const totalSites = SITES.length + MULTI_SEARCHES.length;
  const issues = [
    ...ALIAS_CONFLICTS,
    ...INVALID_ALIASES,
    ...MULTI_SEARCH_CONFLICTS,
    ...INVALID_MULTI_SEARCH_ALIASES,
    ...CROSS_ALIAS_CONFLICTS
  ];
  const engineCards = DEFAULT_ENGINES.map((engine) => {
    const primaryPath = engine.paths[0];
    const searchUrl = primaryPath
      ? `${origin}/${primaryPath}/?q=%s`
      : `${origin}/?q=%s`;
    return `
      <button class="engine-card" type="button" data-copy="${escapeAttribute(searchUrl)}">
        <span>${escapeHtml(engine.name)}</span>
        <code>${escapeHtml(searchUrl)}</code>
      </button>`;
  }).join("");
  const homeEngineOptions = DEFAULT_ENGINES.map((engine) =>
    `<option value="${escapeAttribute(engine.paths[0])}">${escapeHtml(engine.name)}</option>`
  ).join("");
  const homeEnginePaths = DEFAULT_ENGINES.map((engine) => engine.paths[0]);
  const supportIcon = `<img src="https://upload.wikimedia.org/wikipedia/commons/8/86/A_perfect_SVG_heart.svg" alt="" width="19" height="19" referrerpolicy="no-referrer">`;
  const supportControl = PROJECT.support
    ? `<a class="icon-button support-link" href="${escapeAttribute(PROJECT.support)}" target="_blank" rel="noreferrer" aria-label="Support" title="Support">${supportIcon}</a>`
    : `<span class="icon-button support" role="img" aria-label="Support" title="Support">${supportIcon}</span>`;
  const browserBangSites = [
    ...SITES.map((site) => [
      site.name,
      `!${site.aliases[0]}`,
      site.handler === "virustotal" ? "domain" : site.handler === "math" ? "math" : site.handler === "random" ? "random" : site.search ? "search" : "link"
    ]),
    ...MULTI_SEARCHES.map((multi) => [
      multi.name,
      `!${multi.aliases[0]}`,
      "multi"
    ])
  ];
  const browserBangAliases = Object.fromEntries([
    ...SITES.flatMap((site, index) =>
      site.aliases.map((alias) => [alias.toLowerCase(), index])
    ),
    ...MULTI_SEARCHES.flatMap((multi, index) =>
      multi.aliases.map((alias) => [alias.toLowerCase(), SITES.length + index])
    )
  ]);
  const browserBangDataJson = JSON.stringify({
    sites: browserBangSites,
    aliases: browserBangAliases
  }).replaceAll("<", "\\u003c");
  const bangBuilderAliasOwnersJson = JSON.stringify(Object.fromEntries([
    ...[...BANGS.entries()].map(([alias, site]) => [alias, { id: site.id, name: site.name }]),
    ...[...MULTI_SEARCH_BY_ALIAS.entries()].map(([alias, multi]) => [alias, { id: `multi:${multi.id}`, name: multi.name }])
  ])).replaceAll("<", "\u003c");
  const bangBuilderHandlers = [...new Set(SITES.map((site) => site.handler).filter(Boolean))].sort();
  const bangBuilderHandlersJson = JSON.stringify(bangBuilderHandlers).replaceAll("<", "\u003c");
  const bangBuilderHandlerOptions = bangBuilderHandlers
    .map((handler) => `<option value="${escapeAttribute(handler)}"></option>`)
    .join("");
  const bangBuilderExistingSitesJson = JSON.stringify(SITES.map((site) => ({
    id: site.id,
    category: site.category,
    name: site.name,
    description: site.description || "",
    aliases: site.aliases,
    home: site.home,
    search: site.search || "",
    icon: site.icon || "",
    handler: site.handler || ""
  }))).replaceAll("<", "\u003c");
  const multiSearchDisplayGroup = {
    category: "Multisearch",
    sites: MULTI_SEARCHES.map((multi) => ({
      name: multi.name,
      description: multi.description,
      aliases: multi.aliases,
      home: `/multi/${multi.id}/`,
      handler: "multi",
      id: `multi:${multi.id}`,
      category: "Multisearch",
      icon: multi.icon || "",
      iconSvg: multi.iconSvg || "",
      searchTerms: MULTI_SEARCH_CARD_TERMS.get(multi.id) || ""
    }))
  };
  const displayGroups = [multiSearchDisplayGroup, ...SITE_GROUPS];
  const groups = displayGroups.map((group) => {
    const cards = group.sites
      .map((site) => renderSiteCard({
        ...site,
        id: site.id || String(site.aliases[0]).toLowerCase(),
        category: site.category || group.category
      }))
      .join("");
    return `
      <details class="group" data-group="${escapeAttribute(group.category.toLowerCase())}" open>
        <summary class="group-title">
          <h2>${escapeHtml(group.category)}</h2>
          <span>${group.sites.length}</span>
        </summary>
        <div class="site-grid">${cards}</div>
      </details>`;
  }).join("");
  const warning = issues.length
    ? `<section class="warning"><strong>Configuration warning:</strong> ${escapeHtml(formatIssues(issues))}</section>`
    : "";
  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Micah ${escapeHtml(PROJECT.name)}</title>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <script>
    (() => {
      const root = document.documentElement;
      const resolveAutoTheme = () =>
        window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
      const revealFallback = () => { root.dataset.preferencesReady = "true"; };

      try {
        const savedTheme = localStorage.getItem("search-help-theme");
        const themePreference = ["auto", "dark", "light", "black"].includes(savedTheme) ? savedTheme : "auto";
        const savedLayout = localStorage.getItem("search-help-layout");
        const layout = ["compact", "minimalist"].includes(savedLayout) ? savedLayout : "comfortable";
        const savedDefaultsOpen = localStorage.getItem("search-help-defaults-open");

        root.dataset.theme = themePreference === "auto" ? resolveAutoTheme() : themePreference;
        root.dataset.themePreference = themePreference;
        root.dataset.density = layout;
        root.dataset.defaultsOpen = savedDefaultsOpen === "false" ? "false" : "true";
      } catch {
        root.dataset.theme = resolveAutoTheme();
        root.dataset.themePreference = "auto";
        root.dataset.density = "comfortable";
        root.dataset.defaultsOpen = "true";
      }

      // The main script removes this fallback after it has restored every control.
      window.setTimeout(revealFallback, 1200);
    })();
  </script>
  <noscript><style>html:not([data-preferences-ready="true"]) body { visibility: visible; }</style></noscript>
  <style>
    :root,
    :root[data-theme="dark"] {
      color-scheme: dark;
      --bg: #101114;
      --surface: #191b20;
      --surface-2: #22252c;
      --input: #13151a;
      --border: #323640;
      --border-strong: #4a5160;
      --text: #eef0f4;
      --muted: #a7adb9;
      --accent: #8ab4ff;
      --accent-contrast: #091525;
      --good: #83d49b;
      --warn: #ffca70;
      --info: #c9a7ff;
      --danger: #ff9b9b;
      --code: #c9d7ff;
      --shadow: rgba(0, 0, 0, .22);
    }
    :root[data-theme="light"] {
      color-scheme: light;
      --bg: #f5f7fb;
      --surface: #ffffff;
      --surface-2: #eef2f8;
      --input: #ffffff;
      --border: #cdd4e0;
      --border-strong: #9eabbc;
      --text: #171a20;
      --muted: #576274;
      --accent: #185bc4;
      --accent-contrast: #ffffff;
      --good: #137a3d;
      --warn: #8a5200;
      --info: #633ca9;
      --danger: #b42318;
      --code: #174f9d;
      --shadow: rgba(29, 43, 68, .10);
    }
    :root[data-theme="black"] {
      color-scheme: dark;
      --bg: #000000;
      --surface: #090909;
      --surface-2: #141414;
      --input: #050505;
      --border: #2c2c2c;
      --border-strong: #4b4b4b;
      --text: #f5f5f5;
      --muted: #ababab;
      --accent: #9fc6ff;
      --accent-contrast: #06111f;
      --good: #91e7a7;
      --warn: #ffd18a;
      --info: #d8baff;
      --danger: #ffaaaa;
      --code: #d3e0ff;
      --shadow: rgba(0, 0, 0, .55);
    }
    * { box-sizing: border-box; }
    [hidden] { display: none !important; }
    html { background: var(--bg); }
    html:not([data-preferences-ready="true"]) body { visibility: hidden; }
    :root[data-defaults-open="false"] .defaults-body { display: none; }
    :root[data-defaults-open="false"] .defaults summary::before { transform: rotate(-90deg); }
    body {
      min-width: 320px;
      margin: 0;
      background: var(--bg);
      color: var(--text);
      font: 16px/1.45 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }
    main { max-width: 1280px; margin: 0 auto; padding: 36px 20px 64px; }
    header { display: flex; gap: 20px; align-items: flex-start; justify-content: space-between; margin-bottom: 24px; }
    h1 { margin: 0; font-size: clamp(2rem, 5vw, 3rem); line-height: 1.05; letter-spacing: -.03em; }
    h2 { margin: 0; font-size: 1.1rem; }
    p { color: var(--muted); margin: 10px 0 0; }
    a { color: var(--accent); }
    .header-actions, .toolbar-actions, .badges, .aliases, .site-actions {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
    }
    .header-actions { position: relative; justify-content: flex-end; }
    .header-actions-panel { display: flex; flex-wrap: wrap; align-items: center; justify-content: flex-end; gap: 8px; }
    .header-menu-button, .compact-header-control { display: none; }
    :root:not([data-density="compact"]) .header-menu-button,
    :root:not([data-density="compact"]) .compact-header-control { display: none !important; }
    :root[data-density="compact"] .header-menu-button,
    :root[data-density="compact"] .compact-header-control { display: grid; }
    :root[data-density="compact"] .header-actions-panel {
      position: absolute;
      z-index: 20;
      top: 0;
      right: calc(100% + 8px);
      width: max-content;
      max-width: min(calc(100vw - 80px), 520px);
      height: 36px;
      flex-wrap: nowrap;
      padding: 0;
      border: 0;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transform: translateX(10px);
      transform-origin: right center;
      transition: opacity .16s ease, transform .16s ease, visibility .16s;
    }
    :root[data-density="compact"] .header-actions-panel > .theme-select,
    :root[data-density="compact"] .header-actions-panel > .layout-select { display: none; }
    :root[data-density="compact"] .header-actions.is-menu-open .header-actions-panel {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      transform: none;
    }
    .badges { margin-top: 14px; }
    .badge {
      border: 1px solid var(--border);
      border-radius: 999px;
      padding: 4px 9px;
      color: var(--muted);
      font-size: .78rem;
      white-space: nowrap;
    }
    .type {
      display: grid;
      flex: 0 0 24px;
      place-items: center;
      width: 24px;
      height: 24px;
      border: 1px solid var(--border);
      border-radius: 999px;
    }
    .type::before {
      content: "";
      width: 13px;
      height: 13px;
      background: currentColor;
      -webkit-mask: var(--type-icon) center / contain no-repeat;
      mask: var(--type-icon) center / contain no-repeat;
    }
    .type.search {
      --type-icon: url("https://upload.wikimedia.org/wikipedia/commons/9/9a/Magnifying_glass_for_search_ui_Pinhead_icon.svg");
      color: var(--good);
    }
    .type.open {
      --type-icon: url("https://upload.wikimedia.org/wikipedia/commons/c/c7/Home_%2885250%29_-_The_Noun_Project.svg");
      color: var(--warn);
    }
    .type.multi {
      --type-icon: url("https://upload.wikimedia.org/wikipedia/commons/8/8a/X_Pinhead_icon.svg");
      color: var(--accent);
    }
    .toolbar, .defaults, .favorites, .recent-searches, .warning {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 14px;
      box-shadow: 0 8px 24px var(--shadow);
    }
    .toolbar { padding: 14px; margin: 20px 0; }
    .search-row { display: flex; gap: 10px; align-items: stretch; }
    .search-row input { flex: 1; }
    input, .theme-select, .layout-select, .home-engine-select, .toolbar-button, .engine-card, .alias, .favorite-button, .recent-search, .recent-clear, .history-disable, .dialog-button, .dialog-close, .icon-button, .minimalist-exit {
      font: inherit;
    }
    input {
      min-width: 0;
      width: 100%;
      padding: 13px 14px;
      border: 1px solid var(--border);
      border-radius: 10px;
      background: var(--input);
      color: var(--text);
    }
    input:focus, .theme-select:focus, .layout-select:focus, .home-engine-select:focus, .toolbar-button:focus-visible, .engine-card:focus-visible,
    .alias:focus-visible, .favorite-button:focus-visible, .recent-search:focus-visible, .recent-clear:focus-visible, .history-disable:focus-visible, .dialog-button:focus-visible, .dialog-close:focus-visible, .site-name:focus-visible, .github-link:focus-visible, .icon-button:focus-visible, .minimalist-exit:focus-visible {
      outline: 3px solid color-mix(in srgb, var(--accent) 45%, transparent);
      outline-offset: 2px;
    }
    .search-button, .toolbar-button, .theme-select, .layout-select, .home-engine-select, .recent-search, .recent-clear, .history-disable, .dialog-button, .dialog-close {
      appearance: none;
      border: 1px solid var(--border);
      border-radius: 9px;
      background: var(--surface-2);
      color: var(--text);
      padding: 8px 10px;
      cursor: pointer;
    }
    .dialog-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
    }
    .search-button {
      border-color: var(--accent);
      background: var(--accent);
      color: var(--accent-contrast);
      padding-inline: 15px;
      font-weight: 700;
    }
    .toolbar-actions {
      display: flex;
      align-items: end;
      gap: 8px;
      margin-top: 10px;
    }
    .toolbar-actions-right {
      display: flex;
      gap: 8px;
      margin-left: auto;
    }
    .toolbar-button:hover, .theme-select:hover, .layout-select:hover, .home-engine-select:hover, .engine-card:hover, .alias:hover, .favorite-button:hover, .recent-search:hover, .recent-clear:hover, .history-disable:hover, .dialog-button:hover, .dialog-close:hover, .github-link:hover, .icon-button:hover, .minimalist-exit:hover {
      border-color: var(--accent);
    }
    .theme-select, .layout-select, .home-engine-select, .toolbar-button {
      height: 36px;
      min-height: 0;
      padding-block: 4px;
      line-height: 1.2;
    }
    .control-label {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      color: var(--muted);
      font-size: .84rem;
      white-space: nowrap;
    }
    .github-link, .icon-button, .minimalist-exit {
      display: grid;
      place-items: center;
      width: 36px;
      height: 36px;
      border: 1px solid var(--border);
      border-radius: 9px;
      color: var(--text);
      background: var(--surface-2);
      text-decoration: none;
    }
    .icon-button {
      appearance: none;
      padding: 0;
      cursor: pointer;
      font-size: 1.15rem;
      line-height: 1;
    }
    .minimalist-exit {
      display: none;
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 20;
      appearance: none;
      padding: 0;
      cursor: pointer;
    }
    .github-link img,
    #keyboard-shortcuts-button img,
    .support-link img,
    .minimalist-exit img {
      display: block;
      width: 19px;
      height: 19px;
      filter: brightness(0) invert(1);
    }
    :root[data-theme="light"] .github-link img,
    :root[data-theme="light"] #keyboard-shortcuts-button img,
    :root[data-theme="light"] .support-link img,
    :root[data-theme="light"] .minimalist-exit img {
      filter: brightness(0);
    }
    .dialog {
      width: min(460px, calc(100vw - 32px));
      max-height: calc(100vh - 32px);
      margin: auto;
      padding: 0;
      border: 1px solid var(--border);
      border-radius: 14px;
      background: var(--surface);
      color: var(--text);
      box-shadow: 0 20px 56px var(--shadow);
    }
    .dialog::backdrop { background: rgba(0, 0, 0, .58); }
    .dialog-body { padding: 18px; }
    .dialog-heading, .dialog-actions, .recent-actions {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .dialog-heading { justify-content: space-between; }
    .dialog-heading h2 { margin: 0; }
    .dialog-heading-actions { display: flex; align-items: center; gap: 8px; }
    .dialog-actions { justify-content: flex-end; margin-top: 18px; }
    .dialog-button.danger { border-color: var(--danger); color: var(--danger); }
    .builder-dialog {
      width: min(820px, calc(100vw - 32px));
      max-height: min(900px, calc(100vh - 32px));
      overflow: auto;
    }
    .builder-form { margin-top: 14px; }
    .builder-grid {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr) minmax(140px, .55fr);
      gap: 13px;
    }
    .builder-field { display: grid; align-content: start; gap: 6px; min-width: 0; }
    .builder-field.full { grid-column: 1 / -1; }
    .builder-field > label { color: var(--text); font-size: .88rem; font-weight: 700; }
    .builder-field small, .builder-note, .builder-status {
      color: var(--muted);
      font-size: .8rem;
      line-height: 1.35;
    }
    .builder-note { margin-top: 5px; }
    .builder-field textarea {
      width: 100%; min-width: 0; min-height: 68px; padding: 10px 11px; resize: vertical;
      border: 1px solid var(--border); border-radius: 10px; background: var(--input); color: var(--text); font: inherit;
    }
    .builder-icon-row { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 8px; }
    .builder-icon-result { display: flex; align-items: center; gap: 10px; min-height: 42px; }
    .builder-icon-preview {
      display: grid; flex: 0 0 42px; place-items: center; width: 42px; height: 42px;
      border: 1px solid var(--border); border-radius: 10px; background: var(--surface-2);
    }
    .builder-icon-preview img { display: block; max-width: 29px; max-height: 29px; object-fit: contain; }
    .builder-candidates { display: grid; gap: 8px; margin-top: 2px; }
    .builder-candidate {
      display: grid;
      grid-template-columns: auto 44px minmax(0, 1fr);
      gap: 10px;
      align-items: center;
      padding: 9px;
      border: 1px solid var(--border);
      border-radius: 10px;
      background: var(--surface-2);
      cursor: pointer;
    }
    .builder-candidate:has(input:checked) { border-color: var(--accent); box-shadow: 0 0 0 2px color-mix(in srgb, var(--accent) 22%, transparent); }
    .builder-candidate-thumb {
      display: grid; place-items: center; width: 44px; height: 44px;
      border: 1px solid var(--border); border-radius: 9px; background: var(--surface);
      color: var(--muted); font-size: .72rem; text-align: center;
    }
    .builder-candidate-thumb img { max-width: 30px; max-height: 30px; object-fit: contain; }
    .builder-candidate-copy { min-width: 0; }
    .builder-candidate-copy strong { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; color: var(--text); font-size: .84rem; }
    .builder-candidate-copy a { display: block; margin-top: 2px; font-size: .75rem; overflow-wrap: anywhere; }
    .builder-recommended {
      display: inline-flex;
      align-items: center;
      min-height: 18px;
      padding: 1px 6px;
      border-radius: 999px;
      background: color-mix(in srgb, var(--good) 16%, transparent);
      color: var(--good);
      font-size: .67rem;
      font-weight: 800;
      letter-spacing: .01em;
    }
    .builder-show-more { justify-self: start; margin-top: 2px; }
    .builder-existing {
      grid-column: 1 / -1;
      padding: 11px 12px;
      border: 1px solid var(--warn);
      border-radius: 10px;
      background: color-mix(in srgb, var(--warn) 8%, var(--surface));
    }
    .builder-existing-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 9px; }
    .builder-output { min-height: 220px !important; padding-right: 48px !important; tab-size: 2; white-space: pre; font: .84rem/1.55 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace !important; }
    .builder-output-meta { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 8px; }
    .builder-output-wrap { position: relative; }
    .builder-code-copy {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 32px;
      height: 32px;
      border: 1px solid var(--border);
      border-radius: 8px;
      background: var(--surface-2);
      color: var(--text);
      cursor: pointer;
    }
    .builder-code-copy:hover { border-color: var(--accent); }
    .builder-code-copy svg { display: block; width: 16px; height: 16px; margin: auto; fill: currentColor; }
    .builder-status[data-tone="good"] { color: var(--good); }
    .builder-status[data-tone="warn"] { color: var(--warn); }
    .builder-status[data-tone="danger"] { color: var(--danger); }
    .builder-actions { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 8px; margin-top: 16px; }
    .builder-primary { border-color: var(--accent); background: var(--accent); color: var(--accent-contrast); font-weight: 700; }
    #settings-backup-button svg, #bang-builder-button svg, #header-menu-button svg, #compact-theme-button svg, #compact-layout-button svg { display: block; width: 19px; height: 19px; }
    .settings-backup-grid { display: grid; gap: 12px; margin-top: 16px; }
    .settings-option {
      display: grid;
      grid-template-columns: 18px minmax(0, 1fr);
      align-items: center;
      gap: 10px;
      min-height: 42px;
      padding: 10px 12px;
      border: 1px solid var(--border);
      border-radius: 10px;
      background: var(--surface-2);
      color: var(--text);
      cursor: pointer;
    }
    .settings-option input[type="checkbox"] {
      appearance: auto;
      width: 18px;
      height: 18px;
      min-width: 18px;
      margin: 0;
      padding: 0;
      border: 0;
      border-radius: 4px;
      accent-color: var(--accent);
      box-shadow: none;
    }
    .settings-import-mode { display: grid; gap: 6px; color: var(--text); font-size: .88rem; font-weight: 700; }
    .settings-import-mode select {
      width: 100%;
      min-height: 42px;
      padding: 10px 12px;
      border: 1px solid var(--border);
      border-radius: 10px;
      background: var(--input);
      color: var(--text);
      font: inherit;
      cursor: pointer;
    }
    .settings-import-mode select:focus {
      outline: 3px solid color-mix(in srgb, var(--accent) 45%, transparent);
      outline-offset: 2px;
    }
    .settings-backup-status { min-height: 1.3em; margin: 0; }
    .local-bangs-list { display: grid; gap: 10px; margin-top: 14px; }
    .local-bang-item {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 10px 14px;
      align-items: center;
      padding: 12px;
      border: 1px solid var(--border);
      border-radius: 12px;
      background: var(--surface);
    }
    .local-bang-main { min-width: 0; }
    .local-bang-main strong { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .local-bang-main code { display: block; margin-top: 3px; color: var(--muted); overflow-wrap: anywhere; }
    .local-bang-main small { display: block; margin-top: 4px; color: var(--muted); }
    .local-bang-actions { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 7px; }
    .local-bang-toggle { display: inline-flex; align-items: center; gap: 6px; color: var(--muted); font-size: .82rem; }
    .local-bang-empty { margin: 16px 0 0; color: var(--muted); }
    @media (max-width: 620px) {
      .local-bang-item { grid-template-columns: 1fr; }
      .local-bang-actions { justify-content: flex-start; }
    }
    @media (max-width: 760px) {
      .builder-grid { grid-template-columns: 1fr; }
      .builder-field.full { grid-column: auto; }
      .builder-icon-row { grid-template-columns: 1fr; }
    }
    .shortcut-list {
      display: grid;
      gap: 8px;
      margin: 16px 0 0;
      padding: 0;
      list-style: none;
    }
    .shortcut-list li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      color: var(--muted);
    }
    kbd {
      min-width: 2.1em;
      padding: 3px 7px;
      border: 1px solid var(--border-strong);
      border-bottom-width: 2px;
      border-radius: 6px;
      background: var(--surface-2);
      color: var(--text);
      font: .78rem ui-monospace, SFMono-Regular, Menlo, monospace;
      text-align: center;
      white-space: nowrap;
    }
    :root[data-density="compact"] main { padding: 18px 14px 34px; }
    :root[data-density="compact"] header { gap: 12px; margin-bottom: 14px; }
    :root[data-density="compact"] .badges { margin-top: 9px; }
    :root[data-density="compact"] .toolbar { padding: 10px; margin: 12px 0; }
    :root[data-density="compact"] .toolbar-actions { margin-top: 8px; }
    :root[data-density="compact"] .favorites, :root[data-density="compact"] .recent-searches { padding: 12px; margin: 12px 0; }
    :root[data-density="compact"] .defaults { display: none; }
    :root[data-density="compact"] .group { margin: 16px 0; }
    :root[data-density="compact"] .engine-grid, :root[data-density="compact"] .site-grid { gap: 8px; }
    :root[data-density="compact"] .site-card { padding: 10px; }
    :root[data-density="compact"] .site-description {
      display: -webkit-box;
      margin-top: 6px;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      line-clamp: 2;
    }
    :root[data-density="compact"] .aliases {
      flex-wrap: nowrap;
      margin-top: 8px;
      padding-bottom: 3px;
      overflow-x: auto;
      overflow-y: hidden;
      overscroll-behavior-inline: contain;
      scrollbar-width: thin;
    }
    :root[data-density="compact"] .aliases .alias { flex: 0 0 auto; }
    :root[data-density="compact"] .site-url { display: none; }
    :root[data-density="compact"] .footer { margin-top: 24px; }
    :root[data-density="minimalist"] body { min-height: 100vh; }
    :root[data-density="minimalist"] main {
      min-height: 100vh;
      max-width: none;
      display: grid;
      place-items: center;
      padding: 24px;
    }
    :root[data-density="minimalist"] main > :not(.toolbar):not(dialog) { display: none !important; }
    :root[data-density="minimalist"] .toolbar {
      width: min(760px, 100%);
      margin: 0;
      padding: 0;
      border: 0;
      background: transparent;
      box-shadow: none;
    }
    :root[data-density="minimalist"] .toolbar-actions,
    :root[data-density="minimalist"] .bang-preview { display: none !important; }
    :root[data-density="minimalist"] .minimalist-exit { display: grid; }
    .favorites, .recent-searches { padding: 16px; margin: 20px 0; }
    .section-heading, .recent-heading, .defaults summary {
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 0;
      color: var(--text);
    }
    .section-heading, .recent-heading { justify-content: space-between; }
    .favorites-count { color: var(--muted); font-size: .84rem; font-weight: 400; }
    .recent-heading h2 { font-size: 1rem; }
    .recent-actions { margin-left: auto; }
    .recent-clear, .history-disable { padding: 5px 8px; font-size: .8rem; }
    .history-disable { color: var(--warn); }
    .recent-list { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
    .recent-search {
      max-width: 100%;
      padding: 6px 9px;
      border: 1px solid var(--border);
      border-radius: 999px;
      background: var(--surface-2);
      color: var(--text);
      cursor: pointer;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .bang-preview {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      gap: 6px 10px;
      margin-top: 10px;
      padding: 9px 11px;
      border: 1px solid var(--border);
      border-radius: 10px;
      background: var(--surface-2);
      color: var(--muted);
      font-size: .88rem;
    }
    .bang-preview-title { color: var(--text); font-weight: 700; }
    .bang-preview.is-unknown .bang-preview-title { color: var(--warn); }
    .defaults { padding: 0; margin: 20px 0 30px; overflow: clip; }
    .defaults summary {
      cursor: pointer;
      list-style: none;
      padding: 16px;
      font-weight: 700;
      user-select: none;
    }
    .defaults summary::-webkit-details-marker { display: none; }
    .defaults summary::before { content: "▾"; color: var(--muted); transition: transform .15s ease; }
    .defaults:not([open]) summary::before { transform: rotate(-90deg); }
    .defaults-body { padding: 0 16px 16px; }
    .engine-grid, .site-grid { display: grid; gap: 10px; }
    .engine-grid { grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); margin-top: 14px; }
    .site-grid { grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); }
    .engine-card {
      display: flex;
      flex-direction: column;
      gap: 4px;
      min-width: 0;
      padding: 10px;
      border: 1px solid var(--border);
      border-radius: 10px;
      background: var(--surface-2);
      color: var(--text);
      text-align: left;
      cursor: pointer;
    }
    code {
      color: var(--code);
      font: .8rem ui-monospace, SFMono-Regular, Menlo, monospace;
      overflow-wrap: anywhere;
    }
    .group { margin: 28px 0; }
    .group-title {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;
      cursor: pointer;
      list-style: none;
      user-select: none;
    }
    .group-title::-webkit-details-marker { display: none; }
    .group-title::before { content: "▾"; color: var(--muted); transition: transform .15s ease; }
    .group:not([open]) .group-title::before { transform: rotate(-90deg); }
    .group-title span { color: var(--muted); font-size: .85rem; }
    .group:not([open]) .group-title { margin-bottom: 0; }
    .site-card.is-keyboard-selected {
      border-color: var(--accent);
      box-shadow: 0 0 0 2px color-mix(in srgb, var(--accent) 25%, transparent);
      scroll-margin-block: 16px;
    }
    .site-card {
      display: flex;
      flex-direction: column;
      min-width: 0;
      padding: 14px;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
    }
    .site-top { display: flex; min-width: 0; gap: 10px; justify-content: space-between; align-items: flex-start; }
    .site-heading { display: flex; flex: 1 1 auto; align-items: center; gap: 9px; min-width: 0; overflow: hidden; }
    .site-favicon {
      width: 20px;
      height: 20px;
      flex: 0 0 20px;
      object-fit: contain;
      border-radius: 4px;
    }
    .site-favicon[hidden] { display: none; }
    .site-favicon-edit {
      position: relative;
      display: grid;
      width: 20px;
      height: 20px;
      flex: 0 0 20px;
      place-items: center;
      overflow: hidden;
      padding: 0;
      border: 0;
      border-radius: 4px;
      background: transparent;
      color: var(--text);
      cursor: pointer;
    }
    .site-favicon-edit > img.site-favicon {
      position: absolute;
      inset: 0;
      z-index: 1;
      background: var(--surface);
    }
    .site-favicon-fallback {
      display: block;
      width: 18px;
      height: 18px;
      background: currentColor;
      color: var(--muted);
      -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='black' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='9'/%3E%3Cpath d='M3 12h18M12 3c2.7 2.5 4.2 5.5 4.2 9S14.7 18.5 12 21M12 3C9.3 5.5 7.8 8.5 7.8 12s1.5 6.5 4.2 9'/%3E%3C/g%3E%3C/svg%3E") center / contain no-repeat;
      mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='black' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='9'/%3E%3Cpath d='M3 12h18M12 3c2.7 2.5 4.2 5.5 4.2 9S14.7 18.5 12 21M12 3C9.3 5.5 7.8 8.5 7.8 12s1.5 6.5 4.2 9'/%3E%3C/g%3E%3C/svg%3E") center / contain no-repeat;
    }
    .site-favicon-pencil {
      position: absolute;
      inset: 0;
      z-index: 2;
      display: grid;
      place-items: center;
      border-radius: inherit;
      background: color-mix(in srgb, var(--surface) 84%, transparent);
      color: var(--text);
      opacity: 0;
      transition: opacity .12s ease;
      pointer-events: none;
    }
    .site-favicon-pencil svg { display: block; width: 11px; height: 11px; fill: currentColor; }
    .site-favicon-edit:hover .site-favicon-pencil,
    .site-favicon-edit:focus-visible .site-favicon-pencil { opacity: 1; }
    .site-favicon-edit:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; overflow: visible; }
    .site-favicon-svg { display: grid; place-items: center; color: var(--accent); }
    .site-favicon-svg svg { display: block; width: 20px; height: 20px; }
    .site-favicon-mask {
      display: block;
      background: currentColor;
      color: var(--accent);
      -webkit-mask: var(--site-icon-mask) center / contain no-repeat;
      mask: var(--site-icon-mask) center / contain no-repeat;
    }
    .site-card[data-site-key="random"] .site-favicon-mask,
    .site-card[data-site-key="random"] .site-favicon-svg { color: var(--warn); }
    .site-name {
      display: block;
      min-width: 0;
      overflow: hidden;
      color: var(--text);
      font-weight: 750;
      text-decoration: none;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .site-actions { flex: 0 0 auto; flex-wrap: nowrap; justify-content: flex-end; gap: 6px; }
    .site-description { min-height: 1.45em; margin: 8px 0 0; font-size: .87rem; }
    .aliases { margin-top: 11px; }
    .alias, .favorite-button {
      appearance: none;
      border: 1px solid var(--border);
      border-radius: 7px;
      background: var(--surface-2);
      color: var(--text);
      cursor: pointer;
    }
    .alias {
      padding: 4px 7px;
      font: .78rem ui-monospace, SFMono-Regular, Menlo, monospace;
    }
    .favorite-button {
      width: 24px;
      height: 24px;
      padding: 0;
      font-size: .98rem;
      line-height: 1;
    }
    .favorite-button.is-favorite { color: var(--warn); }
    .local-delete-button {
      display: grid;
      width: 24px;
      height: 24px;
      place-items: center;
      padding: 0;
      border: 1px solid var(--border);
      border-radius: 7px;
      background: var(--surface-2);
      color: var(--muted);
      cursor: pointer;
    }
    .local-delete-button:hover, .local-delete-button:focus-visible { color: var(--danger); border-color: color-mix(in srgb, var(--danger) 45%, var(--border)); }
    .local-delete-button svg { width: 13px; height: 13px; fill: currentColor; }
    .site-url { display: block; margin-top: 12px; color: var(--muted); font-size: .77rem; overflow-wrap: anywhere; text-decoration: none; }
    .warning { padding: 12px 14px; color: var(--warn); margin-bottom: 20px; }
    .empty { display: none; color: var(--muted); margin: 30px 0; }
    .footer { margin-top: 42px; color: var(--muted); font-size: .9rem; }
    .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
    @media (max-width: 700px) {
      .toolbar-actions {
        align-items: flex-start;
      }
      .toolbar-actions-right {
        margin-left: 0;
      }
      main { padding: 25px 14px 48px; }
      header { flex-direction: column; }
      .header-actions { justify-content: flex-start; }
      :root[data-density="compact"] .header-actions { align-self: flex-end; justify-content: flex-end; }
      .search-row { flex-direction: column; }
      .search-button { width: 100%; }
    }
  </style>
</head>
<body>
  <main>
    <header>
      <div>
        <h1>Micah ${escapeHtml(PROJECT.name)}</h1>
        <div class="badges">
          <span class="badge" id="site-count-badge">${totalSites} sites</span>
          <span class="badge" id="alias-count-badge">${totalAliases} aliases</span>
          <span class="badge">Symbols: ! ; : .</span>
        </div>
      </div>
      <div class="header-actions" id="header-actions">
        <button class="icon-button header-menu-button" id="header-menu-button" type="button" aria-expanded="false" aria-controls="header-actions-panel" aria-label="Open page controls" title="Page controls">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 7a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"/></svg>
        </button>
        <div class="header-actions-panel" id="header-actions-panel">
        <button class="icon-button compact-header-control" id="compact-theme-button" type="button" aria-label="Theme: Auto" title="Theme: Auto">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 3.5a8.5 8.5 0 0 0 0 17V3.5Z" fill="currentColor"/></svg>
        </button>
        <button class="icon-button compact-header-control" id="compact-layout-button" type="button" aria-label="Change page density" title="Change page density">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm0 7a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm0 7a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"/></svg>
        </button>
        <label class="sr-only" for="theme-select">Color theme</label>
        <select id="theme-select" class="theme-select" aria-label="Color theme">
          <option value="auto">Auto</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="black">Black</option>
        </select>
        <label class="sr-only" for="layout-select">Page density</label>
        <select id="layout-select" class="layout-select" aria-label="Page density">
          <option value="comfortable">Comfortable</option>
          <option value="compact">Compact</option>
          <option value="minimalist">Minimalist</option>
        </select>
        <button class="icon-button" id="settings-backup-button" type="button" aria-haspopup="dialog" aria-controls="settings-backup" aria-label="Import or export settings" title="Import or export settings">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 19h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <button class="icon-button" id="bang-builder-button" type="button" aria-haspopup="dialog" aria-controls="bang-builder" aria-label="Add a bang" title="Build a new bang">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M11 5a1 1 0 0 1 2 0v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5Z"/></svg>
        </button>
        <button class="icon-button" id="keyboard-shortcuts-button" type="button" aria-haspopup="dialog" aria-controls="keyboard-shortcuts" aria-label="Keyboard shortcuts" title="Keyboard shortcuts">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/OOjs_UI_icon_keyboard-progressive.svg" alt="" width="19" height="19" referrerpolicy="no-referrer">
        </button>
        ${supportControl}
        <a class="github-link" href="${escapeAttribute(PROJECT.repository)}" target="_blank" rel="noreferrer" aria-label="Open the GitHub repository" title="Open the GitHub repository">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" width="19" height="19" referrerpolicy="no-referrer">
        </a>
        </div>
      </div>
    </header>
    ${warning}
    <form id="search-form" class="toolbar" action="/" method="get">
      <label class="sr-only" for="filter">Search or filter bangs</label>
      <div class="search-row">
        <input
          id="filter"
          name="q"
          type="search"
          autocomplete="off"
          spellcheck="false"
          placeholder="Filter bangs or search DuckDuckGo…"
          title="Press Escape to clear"
          autofocus
        >
        <button class="search-button" type="submit">Search</button>
      </div>
      <div id="bang-preview" class="bang-preview" hidden aria-live="polite">
        <span id="bang-preview-title" class="bang-preview-title"></span>
        <span id="bang-preview-text"></span>
      </div>
      <div class="toolbar-actions">
        <label class="control-label" for="home-engine-select">
          <span>Default to</span>
          <select id="home-engine-select" class="home-engine-select" aria-label="Home page search engine">${homeEngineOptions}</select>
        </label>
        <div class="toolbar-actions-right">
          <button class="toolbar-button" id="collapse-all" type="button" title="Collapse all groups ([)">Collapse</button>
          <button class="toolbar-button" id="expand-all" type="button" title="Expand all groups (])">Expand</button>
        </div>
      </div>
    </form>
    <section class="recent-searches" id="recent-searches" hidden>
      <div class="recent-heading">
        <h2>Recent searches</h2>
        <div class="recent-actions">
          <button class="recent-clear" id="clear-recent-searches" type="button">Clear</button>
          <button class="history-disable" id="disable-history" type="button">Disable history</button>
        </div>
      </div>
      <div id="recent-search-list" class="recent-list"></div>
    </section>
    <dialog class="dialog" id="settings-backup" aria-labelledby="settings-backup-title">
      <div class="dialog-body">
        <div class="dialog-heading">
          <h2 id="settings-backup-title">Settings backup</h2>
          <button class="dialog-close" type="button" data-close-dialog="settings-backup" aria-label="Close settings backup">Close</button>
        </div>
        <p>Export your theme, layout, favorites, local bangs, home engine, and multisearch choices as JSON.</p>
        <div class="settings-backup-grid">
          <label class="settings-option" for="settings-include-history">
            <input id="settings-include-history" type="checkbox">
            <span>Include recent searches</span>
          </label>
          <button class="dialog-button" id="settings-export" type="button">Export settings</button>
          <label class="settings-import-mode" for="settings-import-mode">Import mode
            <select id="settings-import-mode">
              <option value="replace" selected>Replace current settings</option>
              <option value="merge">Merge with current settings</option>
            </select>
          </label>
          <button class="dialog-button" id="settings-import" type="button">Import settings</button>
          <button class="dialog-button" id="manage-local-bangs" type="button">Manage local bangs <span id="local-bangs-settings-count"></span></button>
          <input id="settings-import-file" type="file" accept="application/json,.json" hidden>
          <p class="builder-status settings-backup-status" id="settings-backup-status" aria-live="polite"></p>
        </div>
      </div>
    </dialog>
    <dialog class="dialog" id="local-bangs-manager" aria-labelledby="local-bangs-manager-title">
      <div class="dialog-body">
        <div class="dialog-heading">
          <div>
            <h2 id="local-bangs-manager-title">Local bangs</h2>
            <p class="builder-note">Saved only in this browser. They also work from its address bar.</p>
          </div>
          <button class="dialog-close" type="button" data-close-dialog="local-bangs-manager" aria-label="Close local bang manager">Close</button>
        </div>
        <div class="local-bangs-list" id="local-bangs-list"></div>
        <p class="local-bang-empty" id="local-bangs-empty">No local bangs yet.</p>
        <div class="builder-actions">
          <button class="dialog-button builder-primary" id="local-bangs-new" type="button">New local bang</button>
        </div>
      </div>
    </dialog>
    <dialog class="dialog" id="keyboard-shortcuts" aria-labelledby="keyboard-shortcuts-title">
      <div class="dialog-body">
        <div class="dialog-heading">
          <h2 id="keyboard-shortcuts-title">Keyboard shortcuts</h2>
          <button class="dialog-close" type="button" data-close-dialog="keyboard-shortcuts" aria-label="Close keyboard shortcuts">Close</button>
        </div>
        <ul class="shortcut-list">
          <li><span>Focus or select the search box</span><kbd>/</kbd></li>
          <li><span>Open this shortcuts popup</span><kbd>?</kbd></li>
          <li><span>Open Bang Builder</span><kbd>+</kbd></li>
          <li><span>Clear the search box; blur it when empty</span><kbd>Esc</kbd></li>
          <li><span>Comfortable mode</span><kbd>1</kbd></li>
          <li><span>Compact mode</span><kbd>2</kbd></li>
          <li><span>Minimalist mode</span><kbd>3</kbd></li>
          <li><span>Collapse all categories</span><kbd>[</kbd></li>
          <li><span>Expand all categories</span><kbd>]</kbd></li>
          <li><span>Move through filtered cards</span><span><kbd>↑</kbd> <kbd>↓</kbd></span></li>
          <li><span>Use the selected card</span><kbd>Enter</kbd></li>
        </ul>
      </div>
    </dialog>
    <dialog class="dialog builder-dialog" id="bang-builder" aria-labelledby="bang-builder-title">
      <div class="dialog-body">
        <div class="dialog-heading">
          <div>
            <h2 id="bang-builder-title">Bang Builder</h2>
            <p class="builder-note">Build a copyable bang entry. Nothing is submitted automatically.</p>
          </div>
          <div class="dialog-heading-actions">
            <button class="dialog-button" id="builder-reset" type="button">Clear</button>
            <button class="dialog-close" type="button" data-close-dialog="bang-builder" aria-label="Close Bang Builder">Close</button>
          </div>
        </div>
        <form id="bang-builder-form" class="builder-form" novalidate>
          <div class="builder-grid">
            <div class="builder-field full">
              <label for="builder-home">Home URL</label>
              <div class="builder-icon-row">
                <input id="builder-home" type="url" inputmode="url" autocomplete="url" spellcheck="false" placeholder="https://example.com/">
                <button class="dialog-button" id="builder-find-icon" type="button">Inspect site</button>
              </div>
              <small>Inspection can autofill the name, description, and favicon choices.</small>
            </div>
            <div class="builder-existing" id="builder-existing" hidden>
              <strong id="builder-existing-title"></strong>
              <div class="builder-status" id="builder-existing-text"></div>
              <div class="builder-existing-actions">
                <button class="dialog-button" id="builder-edit-existing" type="button">Edit existing bang</button>
                <button class="dialog-button" id="builder-keep-new" type="button">Create another anyway</button>
              </div>
            </div>
            <div class="builder-field">
              <label for="builder-name">Name</label>
              <input id="builder-name" type="text" autocomplete="off" placeholder="Example">
            </div>
            <div class="builder-field">
              <label for="builder-aliases">Aliases</label>
              <input id="builder-aliases" type="text" autocomplete="off" spellcheck="false" placeholder="example, ex">
              <small>Separate with spaces or commas.</small>
            </div>
            <div class="builder-field">
              <label for="builder-handler">Handler <span class="builder-note">(optional)</span></label>
              <input id="builder-handler" type="text" list="builder-handler-options" autocomplete="off" spellcheck="false" placeholder="math">
              <datalist id="builder-handler-options">${bangBuilderHandlerOptions}</datalist>
              <small>Existing handler name.</small>
            </div>
            <div class="builder-field full">
              <label for="builder-description">Description <span class="builder-note">(optional)</span></label>
              <textarea id="builder-description" placeholder="Short directory description."></textarea>
            </div>
            <div class="builder-field full">
              <label for="builder-search">Search URL <span class="builder-note">(optional)</span></label>
              <input id="builder-search" type="text" inputmode="url" autocomplete="off" spellcheck="false" placeholder="https://example.com/search?q={q}">
              <small>Use <code>{q}</code>; <code>%s</code> is converted automatically.</small>
            </div>
            <div class="builder-field full">
              <label for="builder-icon">Icon override <span class="builder-note">(optional)</span></label>
              <input id="builder-icon" type="url" inputmode="url" autocomplete="off" spellcheck="false" placeholder="Paste an icon URL or choose one below">
              <div class="builder-icon-result">
                <span class="builder-icon-preview" aria-hidden="true"><img id="builder-icon-preview" alt="" hidden></span>
                <span class="builder-status" id="builder-icon-status">Inspect the site to find favicon choices.</span>
              </div>
              <div class="builder-candidates" id="builder-icon-candidates" aria-label="Discovered favicon choices" hidden></div>
              <button class="dialog-button builder-show-more" id="builder-icon-more" type="button" hidden>Show more</button>
            </div>
            <div class="builder-field full">
              <div class="builder-output-meta">
                <label for="builder-code">Generated bang code</label>
                <span class="builder-status" id="builder-validation-status" aria-live="polite"></span>
              </div>
              <small id="builder-code-hint">Paste this object into the appropriate <code>SITE_GROUPS</code> sites array.</small>
              <div class="builder-output-wrap">
                <textarea class="builder-output" id="builder-code" readonly spellcheck="false" aria-label="Generated bang code"></textarea>
                <button class="builder-code-copy" id="builder-copy-inline" type="button" aria-label="Copy generated bang code" title="Copy generated bang code">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 7V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h3Zm2 1h5a2 2 0 0 1 2 2v4h2V5h-9v3Zm5 2H5v9h10v-9Z"/></svg>
                </button>
              </div>
            </div>
          </div>
          <div class="builder-actions">
            <button class="dialog-button" id="builder-reset-bottom" type="button">Clear</button>
            <button class="dialog-button" id="builder-add-local" type="button">Add locally</button>
            <button class="dialog-button builder-primary" id="builder-copy-bottom" type="button">Copy code</button>
            <a class="dialog-button" id="builder-open-github" href="${escapeAttribute(PROJECT.editMain)}" target="_blank" rel="noopener noreferrer">Open GitHub</a>
          </div>
        </form>
      </div>
    </dialog>
    <dialog class="dialog" id="disable-history-dialog" aria-labelledby="disable-history-title">
      <div class="dialog-body">
        <div class="dialog-heading">
          <h2 id="disable-history-title">Stop saving search history?</h2>
          <button class="dialog-close" type="button" data-close-dialog="disable-history-dialog" aria-label="Close history warning">Close</button>
        </div>
        <p>Search history is stored only in this browser’s local site data. Continuing deletes the saved searches and prevents new searches from being saved.</p>
        <p>To re-enable history later, you must clear site data for search.micahjeffery.com in your browser. That also clears this page’s theme, layout, favorites, and selected home search engine.</p>
        <div class="dialog-actions">
          <button class="dialog-button" id="cancel-disable-history" type="button">Cancel</button>
          <button class="dialog-button danger" id="confirm-disable-history" type="button">Disable history</button>
        </div>
      </div>
    </dialog>
    <section class="favorites" id="favorites" hidden>
      <div class="section-heading">
        <h2>Favorites</h2>
        <span id="favorites-count" class="favorites-count"></span>
      </div>
      <div id="favorites-grid" class="site-grid" style="margin-top: 14px;"></div>
    </section>
    <details class="defaults" id="defaults" open>
      <summary>Browser default-search URLs</summary>
      <div class="defaults-body">
        <p>Click one to copy. Go to Settings &gt; Search Engine &gt; Add custom search engine, paste it and make it the default.</p>
        <div class="engine-grid">${engineCards}</div>
      </div>
    </details>
    <div id="empty" class="empty">No bangs match that filter.</div>
    <div id="groups">
      <details class="group" id="local-bangs-group" data-group="local bangs" open hidden>
        <summary class="group-title">
          <h2>Local Bangs</h2>
          <span id="local-bangs-count">0</span>
        </summary>
        <div class="site-grid" id="local-bangs-grid"></div>
      </details>
      ${groups}
    </div>
    <p class="footer">Click a bang to place it in the search box. Click ☆ to save a favorite. Your theme, layout, home search engine, favorites, search history, and default-search selection stay private on this browser.</p>
  </main>
  <button class="minimalist-exit" id="exit-minimalist" type="button" aria-label="Return to compact mode" title="Return to compact mode">
    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Back_Arrow.svg" alt="" width="19" height="19" referrerpolicy="no-referrer">
  </button>
  <script>
    const STORAGE = {
      theme: "search-help-theme",
      layout: "search-help-layout",
      homeEngine: "search-help-home-engine",
      defaultsOpen: "search-help-defaults-open",
      favorites: "search-help-favorites",
      recentSearches: "search-help-recent-searches-v2",
      historyDisabled: "search-help-history-disabled"
    };
    const RECENT_SEARCH_LIMIT = 20;
    const HOME_ENGINE_PATHS = ${JSON.stringify(homeEnginePaths)};
    const BANG_DATA = ${browserBangDataJson};
    const GITHUB_EDITOR_URL = ${JSON.stringify(PROJECT.editMain)};
    const BANG_BUILDER_ALIAS_OWNERS = ${bangBuilderAliasOwnersJson};
    BANG_BUILDER_ALIAS_OWNERS.xvideos ||= { id: "reserved:xvideos", name: "Reserved safety hint" };
    const BANG_BUILDER_HANDLERS = ${bangBuilderHandlersJson};
    const BANG_BUILDER_EXISTING_SITES = ${bangBuilderExistingSitesJson};
    const filter = document.getElementById("filter");
    const searchForm = document.getElementById("search-form");
    const homeEngineSelect = document.getElementById("home-engine-select");
    const bangPreview = document.getElementById("bang-preview");
    const bangPreviewTitle = document.getElementById("bang-preview-title");
    const bangPreviewText = document.getElementById("bang-preview-text");
    const recentSearchesSection = document.getElementById("recent-searches");
    const recentSearchList = document.getElementById("recent-search-list");
    const clearRecentSearchesButton = document.getElementById("clear-recent-searches");
    const disableHistoryButton = document.getElementById("disable-history");
    const keyboardShortcutsButton = document.getElementById("keyboard-shortcuts-button");
    const settingsBackupButton = document.getElementById("settings-backup-button");
    const settingsBackupDialog = document.getElementById("settings-backup");
    const settingsIncludeHistory = document.getElementById("settings-include-history");
    const settingsExportButton = document.getElementById("settings-export");
    const settingsImportButton = document.getElementById("settings-import");
    const settingsImportFile = document.getElementById("settings-import-file");
    const settingsImportMode = document.getElementById("settings-import-mode");
    const settingsBackupStatus = document.getElementById("settings-backup-status");
    const manageLocalBangsButton = document.getElementById("manage-local-bangs");
    const localBangsSettingsCount = document.getElementById("local-bangs-settings-count");
    const localBangsManagerDialog = document.getElementById("local-bangs-manager");
    const localBangsList = document.getElementById("local-bangs-list");
    const localBangsEmpty = document.getElementById("local-bangs-empty");
    const localBangsNewButton = document.getElementById("local-bangs-new");
    const localBangsGroup = document.getElementById("local-bangs-group");
    const localBangsGrid = document.getElementById("local-bangs-grid");
    const localBangsCount = document.getElementById("local-bangs-count");
    const siteCountBadge = document.getElementById("site-count-badge");
    const aliasCountBadge = document.getElementById("alias-count-badge");
    const headerActions = document.getElementById("header-actions");
    const headerMenuButton = document.getElementById("header-menu-button");
    const compactThemeButton = document.getElementById("compact-theme-button");
    const compactLayoutButton = document.getElementById("compact-layout-button");
    const keyboardShortcutsDialog = document.getElementById("keyboard-shortcuts");
    const bangBuilderButton = document.getElementById("bang-builder-button");
    const bangBuilderDialog = document.getElementById("bang-builder");
    const bangBuilderForm = document.getElementById("bang-builder-form");
    const builderName = document.getElementById("builder-name");
    const builderAliases = document.getElementById("builder-aliases");
    const builderDescription = document.getElementById("builder-description");
    const builderHome = document.getElementById("builder-home");
    const builderSearch = document.getElementById("builder-search");
    const builderHandler = document.getElementById("builder-handler");
    const builderIcon = document.getElementById("builder-icon");
    const builderFindIcon = document.getElementById("builder-find-icon");
    const builderIconCandidates = document.getElementById("builder-icon-candidates");
    const builderIconMore = document.getElementById("builder-icon-more");
    const builderIconPreview = document.getElementById("builder-icon-preview");
    const builderIconStatus = document.getElementById("builder-icon-status");
    const builderExisting = document.getElementById("builder-existing");
    const builderExistingTitle = document.getElementById("builder-existing-title");
    const builderExistingText = document.getElementById("builder-existing-text");
    const builderEditExisting = document.getElementById("builder-edit-existing");
    const builderKeepNew = document.getElementById("builder-keep-new");
    const builderValidationStatus = document.getElementById("builder-validation-status");
    const builderCodeHint = document.getElementById("builder-code-hint");
    const builderCode = document.getElementById("builder-code");
    const builderCopyInline = document.getElementById("builder-copy-inline");
    const builderCopyBottom = document.getElementById("builder-copy-bottom");
    const builderAddLocal = document.getElementById("builder-add-local");
    const builderOpenGithub = document.getElementById("builder-open-github");
    const builderReset = document.getElementById("builder-reset");
    const builderResetBottom = document.getElementById("builder-reset-bottom");
    const disableHistoryDialog = document.getElementById("disable-history-dialog");
    const cancelDisableHistoryButton = document.getElementById("cancel-disable-history");
    const confirmDisableHistoryButton = document.getElementById("confirm-disable-history");
    const exitMinimalistButton = document.getElementById("exit-minimalist");
    const pageParams = new URLSearchParams(window.location.search);
    const requestedAction = pageParams.get("action") || "";
    const requestedMode = pageParams.get("mode") || "";
    function updateSearchPlaceholder() {
      const engineName =
        homeEngineSelect.selectedOptions[0]?.textContent.trim() || "DuckDuckGo";
      filter.placeholder = "Filter bangs or search " + engineName + "…";
    }
    const defaults = document.getElementById("defaults");
    let groups = [];
    let sourceCards = [];
    let cardsByGroup = new Map();
    let sourceCardByKey = new Map();
    function refreshCardIndexes() {
      groups = [...document.querySelectorAll("#groups .group")];
      sourceCards = [...document.querySelectorAll("#groups .site-card")];
      cardsByGroup = new Map(groups.map((group) => [group, [...group.querySelectorAll(".site-card")]]));
      sourceCardByKey = new Map(sourceCards.map((card) => [card.dataset.siteKey, card]));
    }
    refreshCardIndexes();
    document.addEventListener("error", (event) => {
      const image = event.target;
      if (image instanceof HTMLImageElement && image.matches("[data-site-favicon]")) {
        image.hidden = true;
        const editButton = image.closest(".site-favicon-edit");
        if (editButton) editButton.classList.add("uses-fallback");
      }
    }, true);
    const favoritesSection = document.getElementById("favorites");
    const favoritesGrid = document.getElementById("favorites-grid");
    const favoritesCount = document.getElementById("favorites-count");
    const empty = document.getElementById("empty");
    const themeSelect = document.getElementById("theme-select");
    const layoutSelect = document.getElementById("layout-select");
    function readStorage(key, fallback) {
      try {
        const value = localStorage.getItem(key);
        return value === null ? fallback : value;
      } catch {
        return fallback;
      }
    }
    function writeStorage(key, value) {
      try {
        localStorage.setItem(key, value);
      } catch {}
    }
    const BANG_BUILDER_STORAGE_KEY = "search-bang-builder-draft-v2";
    const BUILDER_ICON_INITIAL_LIMIT = 6;
    const bangBuilderFields = [builderHome, builderName, builderAliases, builderDescription, builderSearch, builderHandler, builderIcon];
    let discoveredIconPreviewUrl = "";
    let builderIconChoices = [];
    let builderIconPreferredIndex = -1;
    let builderIconChoicesExpanded = false;
    let builderExistingMatch = null;
    let builderEditingId = "";
    let builderDuplicateAllowed = false;
    function setBuilderStatus(element, message, tone = "") {
      element.textContent = message;
      if (tone) element.dataset.tone = tone;
      else delete element.dataset.tone;
    }
    function normalizeBuilderHttpUrl(value) {
      let raw = String(value || "").trim();
      if (!raw) return "";
      if (!/^[a-z][a-z0-9+.-]*:\\/\\//i.test(raw)) raw = "https://" + raw;
      const url = new URL(raw);
      if (url.protocol !== "https:" && url.protocol !== "http:") throw new Error("Use an HTTP or HTTPS URL.");
      url.hash = "";
      return url.href;
    }
    function normalizeBuilderSearchUrl(value) {
      let raw = String(value || "").trim().replaceAll("%s", "{q}");
      if (!raw) return "";
      if (!/^[a-z][a-z0-9+.-]*:\\/\\//i.test(raw)) raw = "https://" + raw;
      const testUrl = new URL(raw.replaceAll("{q}", "example"));
      if (testUrl.protocol !== "https:" && testUrl.protocol !== "http:") throw new Error("Use an HTTP or HTTPS search URL.");
      return raw;
    }
    function parseBuilderAliases(value) {
      return [...new Set(String(value || "").toLowerCase().split(/[\\s,]+/).map((alias) => alias.trim()).filter(Boolean))];
    }
    const LOCAL_BANGS_STORAGE_KEY = "search-local-bangs-v1";
    const LOCAL_BANG_LIMIT = 100;
    const BUILTIN_SITE_TOTAL = ${totalSites};
    const BUILTIN_ALIAS_TOTAL = ${totalAliases};
    function makeLocalBangId() {
      if (crypto.randomUUID) return crypto.randomUUID();
      return Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10);
    }
    function normalizeLocalBang(raw, fallbackId = "") {
      if (!raw || typeof raw !== "object") return null;
      const aliases = [...new Set((Array.isArray(raw.aliases) ? raw.aliases : [])
        .map((alias) => String(alias).trim().toLowerCase())
        .filter((alias) => /^[a-z0-9_-]+$/.test(alias)))].slice(0, 20);
      if (!aliases.length) return null;
      let home = "", search = "", icon = "";
      try { home = normalizeBuilderHttpUrl(raw.home); } catch { return null; }
      try { search = normalizeBuilderSearchUrl(raw.search); } catch { search = ""; }
      try { icon = normalizeBuilderHttpUrl(raw.icon); } catch { icon = ""; }
      if (!home || (search && !search.includes("{q}"))) return null;
      const name = String(raw.name || aliases[0]).trim().slice(0, 80) || aliases[0];
      return {
        id: String(raw.id || fallbackId || makeLocalBangId()).slice(0, 100),
        name,
        description: String(raw.description || "").replace(/\\s+/g, " ").trim().slice(0, 240),
        aliases,
        home,
        search,
        icon,
        enabled: raw.enabled !== false,
        createdAt: String(raw.createdAt || new Date().toISOString()),
        updatedAt: String(raw.updatedAt || new Date().toISOString())
      };
    }
    function readLocalBangs() {
      try {
        const parsed = JSON.parse(readStorage(LOCAL_BANGS_STORAGE_KEY, "[]"));
        if (!Array.isArray(parsed)) return [];
        const result = [];
        const usedAliases = new Set(Object.keys(BANG_BUILDER_ALIAS_OWNERS));
        for (const item of parsed.slice(0, LOCAL_BANG_LIMIT)) {
          const bang = normalizeLocalBang(item);
          if (!bang || bang.aliases.some((alias) => usedAliases.has(alias))) continue;
          bang.aliases.forEach((alias) => usedAliases.add(alias));
          result.push(bang);
        }
        return result;
      } catch { return []; }
    }
    function saveLocalBangs() {
      writeStorage(LOCAL_BANGS_STORAGE_KEY, JSON.stringify(localBangs.slice(0, LOCAL_BANG_LIMIT)));
    }
    let localBangs = readLocalBangs();
    function localBuilderSite(bang) {
      return {
        ...bang,
        id: "local:" + bang.id,
        category: "Local Bangs",
        handler: "",
        isLocal: true
      };
    }
    function findLocalBangByAlias(alias, includeDisabled = false) {
      const normalized = String(alias || "").toLowerCase();
      return localBangs.find((bang) =>
        (includeDisabled || bang.enabled) && bang.aliases.includes(normalized)
      ) || null;
    }
    function getBuilderAliasOwner(alias) {
      const builtIn = BANG_BUILDER_ALIAS_OWNERS[alias];
      if (builtIn) return { ...builtIn, isLocal: false };
      const local = findLocalBangByAlias(alias, true);
      return local ? { id: "local:" + local.id, name: local.name, isLocal: true } : null;
    }
    function getLocalBangFavicon(bang) {
      const explicit = String(bang?.icon || "").trim();
      if (explicit) return explicit;
      try { return new URL("/favicon.ico", bang.home).href; } catch { return ""; }
    }
    function appendFaviconEditButton(heading, imageUrl, siteId, siteName) {
      const button = document.createElement("button");
      button.className = "site-favicon-edit";
      button.type = "button";
      button.dataset.builderEditSite = siteId;
      button.setAttribute("aria-label", "Edit " + siteName + " in Bang Builder");
      button.title = "Edit in Bang Builder";
      const fallback = document.createElement("span");
      fallback.className = "site-favicon-fallback";
      fallback.setAttribute("aria-hidden", "true");
      button.append(fallback);
      if (imageUrl) {
        const image = document.createElement("img");
        image.className = "site-favicon";
        image.src = imageUrl;
        image.alt = "";
        image.width = 20;
        image.height = 20;
        image.loading = "lazy";
        image.decoding = "async";
        image.referrerPolicy = "no-referrer";
        image.dataset.siteFavicon = "";
        button.append(image);
      }
      const pencil = document.createElement("span");
      pencil.className = "site-favicon-pencil";
      pencil.setAttribute("aria-hidden", "true");
      pencil.innerHTML = '<svg viewBox="0 0 24 24"><path d="m16.9 3.6 3.5 3.5-11 11-4.4.9.9-4.4 11-11ZM4 20l1.5-7.1L15.8 2.6a2 2 0 0 1 2.8 0l2.8 2.8a2 2 0 0 1 0 2.8L11.1 18.5 4 20Z"/></svg>';
      button.append(pencil);
      heading.append(button);
    }
    function buildLocalBangCard(bang) {
      const card = document.createElement("article");
      card.className = "site-card local-site-card";
      card.dataset.siteKey = "local:" + bang.id;
      card.dataset.localBangId = bang.id;
      card.dataset.search = [bang.name, bang.description, "Local Bangs", ...bang.aliases, bang.home, bang.search].join(" ").toLowerCase();
      card.title = bang.home;

      const top = document.createElement("div");
      top.className = "site-top";
      const heading = document.createElement("div");
      heading.className = "site-heading";
      appendFaviconEditButton(heading, getLocalBangFavicon(bang), "local:" + bang.id, bang.name);
      const name = document.createElement("a");
      name.className = "site-name";
      name.href = bang.home;
      name.target = "_blank";
      name.rel = "noreferrer";
      name.title = bang.name;
      name.textContent = bang.name;
      heading.append(name);
      const actions = document.createElement("div");
      actions.className = "site-actions";
      const type = document.createElement("span");
      type.className = "type " + (bang.search ? "search" : "open");
      type.setAttribute("role", "img");
      type.setAttribute("aria-label", bang.search ? "Local search" : "Local link");
      type.title = bang.search ? "Local search" : "Local link";
      const favorite = document.createElement("button");
      favorite.className = "favorite-button";
      favorite.type = "button";
      favorite.dataset.favorite = "local:" + bang.id;
      favorite.setAttribute("aria-label", "Add to favorites");
      favorite.setAttribute("aria-pressed", "false");
      favorite.title = "Add to favorites";
      favorite.textContent = "☆";
      const remove = document.createElement("button");
      remove.className = "local-delete-button";
      remove.type = "button";
      remove.dataset.localCardDelete = bang.id;
      remove.setAttribute("aria-label", "Delete local bang " + bang.name);
      remove.title = "Delete local bang";
      remove.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6l1 2h4v2h-1l-1 14H6L5 7H4V5h4l1-2Zm-1.9 4 .9 12h8l.9-12H7.1ZM10 9h2v8h-2V9Zm4 0h2v8h-2V9Z"/></svg>';
      actions.append(type, favorite, remove);
      top.append(heading, actions);
      card.append(top);
      if (bang.description) {
        const description = document.createElement("p");
        description.className = "site-description";
        description.textContent = bang.description;
        card.append(description);
      }
      const aliases = document.createElement("div");
      aliases.className = "aliases";
      bang.aliases.forEach((alias) => {
        const button = document.createElement("button");
        button.className = "alias";
        button.type = "button";
        button.dataset.bang = "!" + alias;
        button.title = "Use !" + alias + " in the search box";
        button.textContent = "!" + alias;
        aliases.append(button);
      });
      card.append(aliases);
      const url = document.createElement("a");
      url.className = "site-url";
      url.href = bang.home;
      url.target = "_blank";
      url.rel = "noreferrer";
      url.textContent = bang.home;
      card.append(url);
      return card;
    }
    function updateLocalBangCounts() {
      const aliasCount = localBangs.reduce((total, bang) => total + bang.aliases.length, 0);
      localBangsCount.textContent = String(localBangs.length);
      localBangsSettingsCount.textContent = localBangs.length ? "(" + localBangs.length + ")" : "";
      siteCountBadge.textContent = (BUILTIN_SITE_TOTAL + localBangs.length) + " sites";
      aliasCountBadge.textContent = (BUILTIN_ALIAS_TOTAL + aliasCount) + " aliases";
    }
    function renderLocalBangCards() {
      localBangsGrid.replaceChildren();
      localBangs.filter((bang) => bang.enabled).forEach((bang) => localBangsGrid.append(buildLocalBangCard(bang)));
      localBangsGroup.hidden = !localBangs.some((bang) => bang.enabled);
      updateLocalBangCounts();
      refreshCardIndexes();
    }
    function renderLocalBangManager() {
      localBangsList.replaceChildren();
      localBangsEmpty.hidden = localBangs.length > 0;
      localBangs.forEach((bang) => {
        const item = document.createElement("article");
        item.className = "local-bang-item";
        const main = document.createElement("div");
        main.className = "local-bang-main";
        const name = document.createElement("strong");
        name.textContent = bang.name;
        const aliases = document.createElement("code");
        aliases.textContent = bang.aliases.map((alias) => "!" + alias).join(" · ");
        main.append(name, aliases);
        if (bang.description) {
          const description = document.createElement("small");
          description.textContent = bang.description;
          main.append(description);
        }
        const actions = document.createElement("div");
        actions.className = "local-bang-actions";
        const toggleLabel = document.createElement("label");
        toggleLabel.className = "local-bang-toggle";
        const toggle = document.createElement("input");
        toggle.type = "checkbox";
        toggle.checked = bang.enabled;
        toggle.dataset.localToggle = bang.id;
        toggleLabel.append(toggle, document.createTextNode("Enabled"));
        const edit = document.createElement("button");
        edit.className = "dialog-button";
        edit.type = "button";
        edit.dataset.localEdit = bang.id;
        edit.textContent = "Edit";
        const remove = document.createElement("button");
        remove.className = "dialog-button";
        remove.type = "button";
        remove.dataset.localDelete = bang.id;
        remove.textContent = "Delete";
        actions.append(toggleLabel, edit, remove);
        item.append(main, actions);
        localBangsList.append(item);
      });
      updateLocalBangCounts();
    }
    function refreshLocalBangUi() {
      renderLocalBangCards();
      renderLocalBangManager();
      if (typeof favorites !== "undefined") {
        favorites = favorites.filter((key) => sourceCardByKey.has(key));
        saveFavorites();
        renderFavorites();
        applyFilter();
      }
    }
    function builderHomeKey(value) {
      try {
        const url = new URL(normalizeBuilderHttpUrl(value));
        const host = url.hostname.toLowerCase().replace(/^www\\./, "");
        const path = url.pathname.replace(/\\/+$/, "") || "/";
        return host + path;
      } catch { return ""; }
    }
    function builderSearchKey(value) {
      try {
        const raw = normalizeBuilderSearchUrl(value);
        if (!raw) return "";
        const url = new URL(raw.replaceAll("{q}", "__QUERY__"));
        url.hostname = url.hostname.toLowerCase().replace(/^www\\./, "");
        return url.href.replace("__QUERY__", "{q}").replace(/\\/+$/, "");
      } catch { return ""; }
    }
    function findExistingBuilderSite() {
      const homeKey = builderHomeKey(builderHome.value);
      const searchKey = builderSearchKey(builderSearch.value);
      if (!homeKey && !searchKey) return null;
      const matches = [...BANG_BUILDER_EXISTING_SITES, ...localBangs.map(localBuilderSite)].filter((site) =>
        (homeKey && builderHomeKey(site.home) === homeKey) ||
        (searchKey && site.search && builderSearchKey(site.search) === searchKey)
      );
      return matches.find((site) => site.id === builderEditingId) || matches[0] || null;
    }
    function updateExistingBuilderMatch() {
      const match = findExistingBuilderSite();
      const previousId = builderExistingMatch?.id || "";
      builderExistingMatch = match;
      if (!match) {
        builderExisting.hidden = true;
        if (builderEditingId && builderEditingId !== previousId) builderEditingId = "";
        builderDuplicateAllowed = false;
        return;
      }
      if (builderEditingId === match.id) {
        builderExisting.hidden = false;
        builderExistingTitle.textContent = "Editing " + match.name;
        builderExistingText.textContent = match.isLocal
          ? "Saving locally will update this browser’s bang."
          : "Generated code replaces the existing entry in " + match.category + ".";
        builderEditExisting.hidden = true;
        builderKeepNew.hidden = true;
        return;
      }
      if (builderDuplicateAllowed) {
        builderExisting.hidden = true;
        builderEditExisting.hidden = true;
        builderKeepNew.hidden = true;
        return;
      }
      builderExisting.hidden = false;
      builderExistingTitle.textContent = "This URL already exists";
      builderExistingText.textContent = match.name + " uses !" + match.aliases.join(", !") + ".";
      builderEditExisting.hidden = false;
      builderKeepNew.hidden = false;
    }
    function loadExistingBang() {
      const site = builderExistingMatch;
      if (!site) return;
      builderEditingId = site.id;
      builderDuplicateAllowed = false;
      builderHome.value = site.home || "";
      builderName.value = site.name || "";
      builderAliases.value = (site.aliases || []).join(", ");
      builderDescription.value = site.description || "";
      builderSearch.value = site.search || "";
      builderHandler.value = site.handler || "";
      builderIcon.value = site.icon || "";
      setBuilderIconPreview(builderIcon.value);
      updateExistingBuilderMatch();
      renderBangBuilderCode();
    }
    function openBuilderForSiteId(siteId) {
      const normalizedId = String(siteId || "");
      const site = normalizedId.startsWith("local:")
        ? localBangs.map(localBuilderSite).find((item) => item.id === normalizedId)
        : BANG_BUILDER_EXISTING_SITES.find((item) => item.id === normalizedId);
      if (!site) return;
      builderExistingMatch = site;
      builderEditingId = site.id;
      builderDuplicateAllowed = false;
      builderHome.value = site.home || "";
      builderName.value = site.name || "";
      builderAliases.value = (site.aliases || []).join(", ");
      builderDescription.value = site.description || "";
      builderSearch.value = site.search || "";
      builderHandler.value = site.handler || "";
      builderIcon.value = site.icon || "";
      setBuilderIconPreview(builderIcon.value || getLocalBangFavicon(site));
      updateExistingBuilderMatch();
      renderBangBuilderCode();
      if (localBangsManagerDialog.open) localBangsManagerDialog.close();
      openBangBuilder();
    }
    function keepDuplicateBang() {
      builderEditingId = "";
      builderDuplicateAllowed = true;
      builderExisting.hidden = true;
      renderBangBuilderCode();
      setBuilderStatus(builderValidationStatus, "Duplicate URL allowed. Use unique aliases for the new bang.", "good");
    }
    function saveBangBuilderDraft() {
      writeStorage(BANG_BUILDER_STORAGE_KEY, JSON.stringify({
        name: builderName.value, aliases: builderAliases.value, description: builderDescription.value,
        home: builderHome.value, search: builderSearch.value, handler: builderHandler.value, icon: builderIcon.value,
        editingId: builderEditingId, duplicateAllowed: builderDuplicateAllowed
      }));
    }
    function restoreBangBuilderDraft() {
      try {
        const draft = JSON.parse(readStorage(BANG_BUILDER_STORAGE_KEY, "{}"));
        builderName.value = typeof draft.name === "string" ? draft.name : "";
        builderAliases.value = typeof draft.aliases === "string" ? draft.aliases : "";
        builderDescription.value = typeof draft.description === "string" ? draft.description : "";
        builderHome.value = typeof draft.home === "string" ? draft.home : "";
        builderSearch.value = typeof draft.search === "string" ? draft.search : "";
        builderHandler.value = typeof draft.handler === "string" ? draft.handler : "";
        builderIcon.value = typeof draft.icon === "string" ? draft.icon : "";
        builderEditingId = typeof draft.editingId === "string" ? draft.editingId : "";
        builderDuplicateAllowed = Boolean(draft.duplicateAllowed);
      } catch {}
    }
    function setBuilderIconPreview(url) {
      discoveredIconPreviewUrl = String(url || "").trim();
      if (!discoveredIconPreviewUrl) {
        builderIconPreview.hidden = true;
        builderIconPreview.removeAttribute("src");
        return;
      }
      builderIconPreview.hidden = false;
      builderIconPreview.src = discoveredIconPreviewUrl;
    }
    function renderBangBuilderCode() {
      updateExistingBuilderMatch();
      const name = builderName.value.trim();
      const aliases = parseBuilderAliases(builderAliases.value);
      const description = builderDescription.value.trim();
      const handler = builderHandler.value.trim().toLowerCase();
      const errors = [];
      const warnings = [];
      let home = "", search = "", icon = "";
      try { home = normalizeBuilderHttpUrl(builderHome.value); } catch (error) { errors.push(error.message || "Invalid home URL."); }
      try { search = normalizeBuilderSearchUrl(builderSearch.value); } catch (error) { errors.push(error.message || "Invalid search URL."); }
      try { icon = normalizeBuilderHttpUrl(builderIcon.value); } catch (error) { errors.push(error.message || "Invalid icon URL."); }
      if (!name) errors.push("Add a name.");
      if (!aliases.length) errors.push("Add an alias.");
      const invalidAliases = aliases.filter((alias) => !/^[a-z0-9_-]+$/.test(alias));
      if (invalidAliases.length) errors.push("Invalid aliases: " + invalidAliases.join(", ") + ".");
      if (handler && !/^[a-z0-9_-]+$/.test(handler)) errors.push("Handler names may use lowercase letters, numbers, underscores, and hyphens.");
      if (handler && !BANG_BUILDER_HANDLERS.includes(handler)) warnings.push("Custom handler: add matching Worker logic.");
      if (builderDuplicateAllowed) warnings.push("Duplicate URL allowed; use unique aliases.");
      const conflicts = aliases.flatMap((alias) => {
        const owner = getBuilderAliasOwner(alias);
        if (!owner || owner.id === builderEditingId) return [];
        return [alias + " (" + owner.name + ")"];
      });
      if (conflicts.length) errors.push("Aliases in use: " + conflicts.join(", ") + ".");
      if (!home && !errors.some((message) => message.toLowerCase().includes("home url"))) errors.push("Add a home URL.");
      if (search && !search.includes("{q}")) errors.push('Search URL needs "{q}".');
      if (builderExistingMatch && builderExistingMatch.id !== builderEditingId && !builderDuplicateAllowed) {
        errors.push("This URL already has a bang. Edit it or choose Create another anyway.");
      }
      const properties = [
        "name: " + JSON.stringify(name || "Example"),
        ...(description ? ["description: " + JSON.stringify(description)] : []),
        "aliases: " + JSON.stringify(aliases.length ? aliases : ["example"]),
        "home: " + JSON.stringify(home || "https://example.com/"),
        ...(search ? ["search: " + JSON.stringify(search)] : []),
        ...(icon ? ["icon: " + JSON.stringify(icon)] : []),
        ...(handler ? ["handler: " + JSON.stringify(handler)] : [])
      ];
      const objectIndent = "\\t\\t\\t";
      const propertyIndent = objectIndent + "\\t";
      builderCode.value = [
        objectIndent + "{",
        ...properties.map((property, index) => propertyIndent + property + (index < properties.length - 1 ? "," : "")),
        objectIndent + "},"
      ].join("\\n");
      builderCopyInline.disabled = false;
      builderCopyBottom.disabled = false;
      const editingLocalBang = builderEditingId.startsWith("local:");
      builderAddLocal.textContent = editingLocalBang ? "Update local bang" : "Add locally";
      builderAddLocal.disabled = Boolean(handler);
      builderAddLocal.title = handler ? "Handlers require Worker source code and cannot be stored locally." : "Save this bang in this browser";
      builderOpenGithub.href = GITHUB_EDITOR_URL;
      builderCodeHint.textContent = builderEditingId && builderExistingMatch
        ? "Replace the existing " + builderExistingMatch.name + " object in " + builderExistingMatch.category + "."
        : "Paste directly into the appropriate SITE_GROUPS sites array.";
      const messages = [...errors, ...warnings];
      setBuilderStatus(
        builderValidationStatus,
        messages.length ? messages.join(" ") : "Ready to copy.",
        errors.length ? "danger" : warnings.length ? "warn" : "good"
      );
      saveBangBuilderDraft();
    }
    function paintBuilderIconChoices() {
      builderIconCandidates.replaceChildren();
      if (!builderIconChoices.length) {
        builderIconCandidates.hidden = true;
        builderIconMore.hidden = true;
        return;
      }
      const visibleIndexes = builderIconChoicesExpanded
        ? builderIconChoices.map((_, index) => index)
        : builderIconChoices.slice(0, BUILDER_ICON_INITIAL_LIMIT).map((_, index) => index);
      if (!builderIconChoicesExpanded && builderIconPreferredIndex >= BUILDER_ICON_INITIAL_LIMIT) {
        visibleIndexes.push(builderIconPreferredIndex);
      }
      [...new Set(visibleIndexes)].forEach((index) => {
        const choice = builderIconChoices[index];
        const label = document.createElement("label");
        label.className = "builder-candidate";
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "builder-icon-choice";
        radio.value = String(index);
        radio.checked = index === builderIconPreferredIndex;
        const thumb = document.createElement("span");
        thumb.className = "builder-candidate-thumb";
        const image = document.createElement("img");
        image.alt = "";
        image.loading = "lazy";
        image.decoding = "async";
        image.src = choice.url;
        image.addEventListener("error", () => {
          image.remove();
          thumb.textContent = "No preview";
        });
        thumb.append(image);
        const copy = document.createElement("span");
        copy.className = "builder-candidate-copy";
        const title = document.createElement("strong");
        const titleText = document.createElement("span");
        titleText.textContent = choice.label;
        title.append(titleText);
        if (choice.recommended) {
          const badge = document.createElement("span");
          badge.className = "builder-recommended";
          badge.textContent = "Recommended";
          title.append(badge);
        }
        const link = document.createElement("a");
        link.href = choice.url;
        link.target = "_blank";
        link.rel = "noreferrer";
        link.textContent = choice.url;
        link.addEventListener("click", (event) => event.stopPropagation());
        copy.append(title, link);
        label.append(radio, thumb, copy);
        radio.addEventListener("change", () => {
          if (!radio.checked) return;
          builderIconPreferredIndex = index;
          builderIcon.value = choice.override;
          setBuilderIconPreview(choice.url);
          setBuilderStatus(builderIconStatus, choice.override ? "Icon override selected." : "Default favicon selected; no override needed.", "good");
          renderBangBuilderCode();
        });
        builderIconCandidates.append(label);
      });
      builderIconCandidates.hidden = false;
      const hiddenCount = Math.max(0, builderIconChoices.length - BUILDER_ICON_INITIAL_LIMIT);
      builderIconMore.hidden = hiddenCount === 0;
      builderIconMore.textContent = builderIconChoicesExpanded ? "Show fewer" : "Show " + hiddenCount + " more";
      builderIconMore.setAttribute("aria-expanded", String(builderIconChoicesExpanded));
    }
    function renderBuilderIconChoices(choices, preferredIndex) {
      builderIconChoices = choices;
      builderIconPreferredIndex = preferredIndex;
      builderIconChoicesExpanded = false;
      paintBuilderIconChoices();
    }
    async function findBuilderFavicon() {
      let home;
      try {
        home = normalizeBuilderHttpUrl(builderHome.value);
        if (!home) throw new Error("Enter a home URL first.");
      } catch (error) {
        setBuilderStatus(builderIconStatus, error.message || "Enter a valid home URL.", "danger");
        return;
      }
      builderHome.value = home;
      updateExistingBuilderMatch();
      builderFindIcon.disabled = true;
      builderIconCandidates.hidden = true;
      builderIconCandidates.replaceChildren();
      builderIconMore.hidden = true;
      builderIconChoices = [];
      builderIconPreferredIndex = -1;
      builderIconChoicesExpanded = false;
      setBuilderStatus(builderIconStatus, "Inspecting site…");
      try {
        const response = await fetch("/api/favicon-discover", {
          method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ url: home })
        });
        const data = await response.json();
        if (!response.ok || !data.ok) throw new Error(data.error || "Inspection failed.");
        if (!builderName.value.trim() && data.title) {
          builderName.value = String(data.title).replace(/\\s+[|–—-]\\s+.*$/, "").trim().slice(0, 70);
        }
        if (!builderDescription.value.trim() && data.description) {
          const concise = String(data.description).replace(/\\s+/g, " ").trim();
          builderDescription.value = (concise.length > 150 ? concise.slice(0, 147).replace(/\\s+\\S*$/, "") + "…" : concise);
        }
        const choices = [];
        for (const candidate of Array.isArray(data.candidates) ? data.candidates : []) {
          if (!candidate?.url || choices.some((choice) => choice.url === candidate.url)) continue;
          const override = candidate.isDefault && data.defaultIconWorks ? "" : candidate.url;
          choices.push({
            url: candidate.url,
            override,
            score: Number(candidate.score || 0),
            fallback: Boolean(candidate.isFallback),
            recommended: override === data.recommendedIcon,
            label: candidate.isDefault && data.defaultIconWorks
              ? "Default favicon (no override)"
              : candidate.isFallback ? "Favicon service fallback" : (candidate.source || "Discovered icon")
          });
        }
        if (!choices.length) {
          builderIcon.value = "";
          setBuilderIconPreview("");
          setBuilderStatus(builderIconStatus, "No icon found. Paste one manually." + (data.pageWarning ? " " + data.pageWarning : ""), "warn");
        } else {
          let preferredIndex = choices.findIndex((choice) => choice.override === data.recommendedIcon);
          if (preferredIndex < 0) preferredIndex = 0;
          choices.forEach((choice, index) => { choice.recommended = index === preferredIndex; });
          choices.sort((a, b) => Number(b.recommended) - Number(a.recommended) || Number(a.fallback) - Number(b.fallback) || b.score - a.score);
          preferredIndex = choices.findIndex((choice) => choice.recommended);
          const selected = choices[preferredIndex];
          builderIcon.value = selected.override;
          setBuilderIconPreview(selected.url);
          renderBuilderIconChoices(choices, preferredIndex);
          setBuilderStatus(builderIconStatus, choices.length + (choices.length === 1 ? " icon found. Best match selected." : " icons found. Best match selected."), "good");
        }
        updateExistingBuilderMatch();
        renderBangBuilderCode();
      } catch (error) {
        setBuilderStatus(builderIconStatus, error.message || "Inspection failed.", "danger");
      } finally {
        builderFindIcon.disabled = false;
      }
    }
    function setBangBuilderCopyFeedback(button, copied) {
      const originalLabel = button.getAttribute("aria-label") || button.textContent;
      if (button === builderCopyInline) {
        button.setAttribute("aria-label", copied ? "Copied" : "Copy failed");
        button.title = copied ? "Copied" : "Copy failed";
      } else {
        button.textContent = copied ? "Copied" : "Copy failed";
      }
      window.setTimeout(() => {
        if (button === builderCopyInline) {
          button.setAttribute("aria-label", originalLabel);
          button.title = originalLabel;
        } else {
          button.textContent = originalLabel;
        }
      }, 1400);
    }
    async function copyBangBuilderCode(button = builderCopyInline) {
      const text = builderCode.value;
      if (!text) {
        setBangBuilderCopyFeedback(button, false);
        return;
      }

      let copied = false;
      try {
        await navigator.clipboard.writeText(text);
        copied = true;
      } catch {
        // Legacy fallback: copy directly from the visible textarea.
        const previousFocus = document.activeElement;
        builderCode.focus({ preventScroll: true });
        builderCode.select();
        builderCode.setSelectionRange(0, builderCode.value.length);
        try { copied = document.execCommand("copy"); } catch {}
        if (previousFocus instanceof HTMLElement) {
          try { previousFocus.focus({ preventScroll: true }); } catch {}
        }
      }

      setBangBuilderCopyFeedback(button, copied);
      if (!copied) {
        builderCode.focus({ preventScroll: true });
        builderCode.select();
        setBuilderStatus(builderValidationStatus, "Automatic copy was blocked. The code is selected; press Ctrl+C or Command+C.", "warn");
      }
    }
    function getLocalBangCandidate() {
      const errors = [];
      const name = builderName.value.trim();
      const aliases = parseBuilderAliases(builderAliases.value);
      const description = builderDescription.value.trim();
      const handler = builderHandler.value.trim().toLowerCase();
      let home = "", search = "", icon = "";
      try { home = normalizeBuilderHttpUrl(builderHome.value); } catch (error) { errors.push(error.message || "Invalid home URL."); }
      try { search = normalizeBuilderSearchUrl(builderSearch.value); } catch (error) { errors.push(error.message || "Invalid search URL."); }
      try { icon = normalizeBuilderHttpUrl(builderIcon.value); } catch (error) { errors.push(error.message || "Invalid icon URL."); }
      if (!name) errors.push("Add a name.");
      if (!aliases.length) errors.push("Add an alias.");
      if (aliases.some((alias) => !/^[a-z0-9_-]+$/.test(alias))) errors.push("Use only letters, numbers, underscores, and hyphens in aliases.");
      if (!home) errors.push("Add a home URL.");
      if (search && !search.includes("{q}")) errors.push('Search URL needs "{q}".');
      if (handler) errors.push("Handlers require Worker source code and cannot be added locally.");
      const editingLocalId = builderEditingId.startsWith("local:") ? builderEditingId.slice(6) : "";
      const conflicts = aliases.flatMap((alias) => {
        const owner = getBuilderAliasOwner(alias);
        if (!owner || (owner.isLocal && owner.id === "local:" + editingLocalId)) return [];
        return [alias + " (" + owner.name + ")"];
      });
      if (conflicts.length) errors.push("Aliases in use: " + conflicts.join(", ") + ".");
      if (builderExistingMatch && !builderExistingMatch.isLocal && !builderDuplicateAllowed) {
        errors.push("This URL already has a built-in bang. Choose Create another anyway to save a local version.");
      }
      return { errors, editingLocalId, bang: { name, aliases, description, home, search, icon } };
    }
    function addBangLocally() {
      const { errors, editingLocalId, bang } = getLocalBangCandidate();
      if (errors.length) {
        setBuilderStatus(builderValidationStatus, errors.join(" "), "danger");
        return;
      }
      const now = new Date().toISOString();
      const existing = editingLocalId ? localBangs.find((item) => item.id === editingLocalId) : null;
      const saved = normalizeLocalBang({
        ...bang,
        id: existing?.id || makeLocalBangId(),
        enabled: existing?.enabled !== false,
        createdAt: existing?.createdAt || now,
        updatedAt: now
      });
      if (!saved) {
        setBuilderStatus(builderValidationStatus, "Could not save that local bang.", "danger");
        return;
      }
      if (existing) localBangs = localBangs.map((item) => item.id === existing.id ? saved : item);
      else localBangs = [saved, ...localBangs].slice(0, LOCAL_BANG_LIMIT);
      saveLocalBangs();
      builderEditingId = "local:" + saved.id;
      builderExistingMatch = localBuilderSite(saved);
      builderDuplicateAllowed = false;
      refreshLocalBangUi();
      renderBangBuilderCode();
      setBuilderStatus(builderValidationStatus, existing ? "Local bang updated." : "Added locally. It now works from this browser’s address bar.", "good");
    }
    function editLocalBang(id) {
      openBuilderForSiteId("local:" + id);
    }
    function deleteLocalBang(id) {
      const bang = localBangs.find((item) => item.id === id);
      if (!bang || !window.confirm("Delete local bang “" + bang.name + "”?")) return;
      localBangs = localBangs.filter((item) => item.id !== id);
      favorites = favorites.filter((key) => key !== "local:" + id);
      saveFavorites();
      saveLocalBangs();
      if (builderEditingId === "local:" + id) resetBangBuilder();
      refreshLocalBangUi();
    }
    function toggleLocalBang(id, enabled) {
      localBangs = localBangs.map((bang) => bang.id === id ? { ...bang, enabled, updatedAt: new Date().toISOString() } : bang);
      saveLocalBangs();
      refreshLocalBangUi();
    }
    function navigateToLocalBang(bang, query = "") {
      if (!bang?.enabled) return false;
      const trimmed = String(query || "").trim();
      const destination = trimmed && bang.search
        ? bang.search.replaceAll("{q}", encodeURIComponent(trimmed))
        : bang.home;
      if (!destination) return false;
      window.location.assign(destination);
      return true;
    }
    function resetBangBuilder() {
      bangBuilderForm.reset();
      builderIconCandidates.replaceChildren();
      builderIconCandidates.hidden = true;
      builderIconMore.hidden = true;
      builderIconChoices = [];
      builderIconPreferredIndex = -1;
      builderIconChoicesExpanded = false;
      builderEditingId = "";
      builderDuplicateAllowed = false;
      builderExistingMatch = null;
      builderExisting.hidden = true;
      setBuilderIconPreview("");
      setBuilderStatus(builderIconStatus, "Inspect the site to find favicon choices.");
      try { localStorage.removeItem(BANG_BUILDER_STORAGE_KEY); } catch {}
      renderBangBuilderCode();
      builderHome.focus();
    }
    function openBangBuilder() {
      showDialog(bangBuilderDialog);
      window.setTimeout(() => {
        const firstEmpty = [builderHome, builderName, builderAliases].find((field) => !field.value.trim());
        (firstEmpty || builderHome).focus();
      }, 0);
    }
    function normalizeRecentSearch(value) {
      return String(value).trim().replace(/\\s+/g, " ");
    }
    function readRecentSearches() {
      try {
        const parsed = JSON.parse(readStorage(STORAGE.recentSearches, "[]"));
        if (!Array.isArray(parsed)) return [];
        return parsed
          .filter((value) => typeof value === "string")
          .map(normalizeRecentSearch)
          .filter(Boolean)
          .filter((value, index, values) =>
            values.findIndex((other) => other.toLowerCase() === value.toLowerCase()) === index
          )
          .slice(0, RECENT_SEARCH_LIMIT);
      } catch {
        return [];
      }
    }
    function saveRecentSearch(value) {
      if (historyDisabled) return;
      const search = normalizeRecentSearch(value);
      if (!search) return;
      recentSearches = [
        search,
        ...recentSearches.filter((item) => item.toLowerCase() !== search.toLowerCase())
      ].slice(0, RECENT_SEARCH_LIMIT);
      writeStorage(STORAGE.recentSearches, JSON.stringify(recentSearches));
    }
    function renderRecentSearches() {
      recentSearchList.replaceChildren();
      recentSearches.forEach((search) => {
        const button = document.createElement("button");
        button.className = "recent-search";
        button.type = "button";
        button.dataset.recentSearch = search;
        button.textContent = search;
        button.title = "Search again: " + search;
        recentSearchList.append(button);
      });
      recentSearchesSection.hidden = historyDisabled || recentSearches.length === 0 || Boolean(filter.value.trim());
    }
    function clearRecentSearches() {
      recentSearches = [];
      writeStorage(STORAGE.recentSearches, JSON.stringify(recentSearches));
      renderRecentSearches();
    }
    function disableSearchHistory() {
      historyDisabled = true;
      recentSearches = [];
      writeStorage(STORAGE.recentSearches, JSON.stringify(recentSearches));
      writeStorage(STORAGE.historyDisabled, "true");
      renderRecentSearches();
    }
    function readFavorites() {
      try {
        const parsed = JSON.parse(readStorage(STORAGE.favorites, "[]"));
        if (!Array.isArray(parsed)) return [];
        return [...new Set(parsed.filter((key) => sourceCardByKey.has(key)))];
      } catch {
        return [];
      }
    }
    renderLocalBangCards();
    renderLocalBangManager();
    let historyDisabled = readStorage(STORAGE.historyDisabled, "false") === "true";
    let recentSearches = historyDisabled ? [] : readRecentSearches();
    let favorites = readFavorites();
    let keyboardSelection = -1;
    const MULTISEARCH_STORAGE_PREFIX = "search-multisearch-selected:";
    function setSettingsBackupStatus(message, tone = "") {
      setBuilderStatus(settingsBackupStatus, message, tone);
    }
    function collectMultisearchSettings() {
      const selections = {};
      try {
        for (let index = 0; index < localStorage.length; index += 1) {
          const key = localStorage.key(index);
          if (!key || !key.startsWith(MULTISEARCH_STORAGE_PREFIX)) continue;
          const id = key.slice(MULTISEARCH_STORAGE_PREFIX.length);
          const value = JSON.parse(localStorage.getItem(key) || "null");
          if (id && Array.isArray(value)) selections[id] = value.filter((item) => typeof item === "string");
        }
      } catch {}
      return selections;
    }
    function buildSettingsExport() {
      const payload = {
        version: 1,
        exportedAt: new Date().toISOString(),
        settings: {
          theme: readStorage(STORAGE.theme, "auto"),
          layout: readStorage(STORAGE.layout, "comfortable"),
          homeEngine: readStorage(STORAGE.homeEngine, ""),
          defaultsOpen: readStorage(STORAGE.defaultsOpen, "true") === "true",
          favorites: [...favorites],
          historyDisabled,
          multisearchSelections: collectMultisearchSettings(),
          localBangs: localBangs.map((bang) => ({ ...bang }))
        }
      };
      if (settingsIncludeHistory.checked && !historyDisabled) payload.recentSearches = [...recentSearches];
      return payload;
    }
    function exportSettings() {
      const payload = buildSettingsExport();
      const blob = new Blob([JSON.stringify(payload, null, 2) + "\\n"], { type: "application/json" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "micah-search-settings-" + new Date().toISOString().slice(0, 10) + ".json";
      document.body.append(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(link.href), 0);
      setSettingsBackupStatus("Settings exported.", "good");
    }
    function clearImportableSettings() {
      Object.values(STORAGE).forEach((key) => {
        try { localStorage.removeItem(key); } catch {}
      });
      try { localStorage.removeItem(LOCAL_BANGS_STORAGE_KEY); } catch {}
      try {
        const keys = [];
        for (let index = 0; index < localStorage.length; index += 1) {
          const key = localStorage.key(index);
          if (key?.startsWith(MULTISEARCH_STORAGE_PREFIX)) keys.push(key);
        }
        keys.forEach((key) => localStorage.removeItem(key));
      } catch {}
    }
    function importSettingsPayload(payload) {
      if (!payload || payload.version !== 1 || !payload.settings || typeof payload.settings !== "object") {
        throw new Error("That is not a supported Search settings file.");
      }
      if (settingsImportMode.value === "replace") clearImportableSettings();
      const settings = payload.settings;
      if (["auto", "light", "dark", "black"].includes(settings.theme)) writeStorage(STORAGE.theme, settings.theme);
      if (["comfortable", "compact", "minimalist"].includes(settings.layout)) writeStorage(STORAGE.layout, settings.layout);
      if (typeof settings.homeEngine === "string" && HOME_ENGINE_PATHS.includes(settings.homeEngine)) writeStorage(STORAGE.homeEngine, settings.homeEngine);
      if (typeof settings.defaultsOpen === "boolean") writeStorage(STORAGE.defaultsOpen, String(settings.defaultsOpen));

      if (Array.isArray(settings.localBangs)) {
        const imported = [];
        const usedAliases = new Set(Object.keys(BANG_BUILDER_ALIAS_OWNERS));
        if (settingsImportMode.value === "merge") {
          localBangs.forEach((bang) => {
            imported.push(bang);
            bang.aliases.forEach((alias) => usedAliases.add(alias));
          });
        }
        for (const item of settings.localBangs.slice(0, LOCAL_BANG_LIMIT)) {
          const bang = normalizeLocalBang(item);
          if (!bang) continue;
          const existingIndex = imported.findIndex((current) => current.id === bang.id);
          if (existingIndex >= 0) {
            imported[existingIndex].aliases.forEach((alias) => usedAliases.delete(alias));
            if (bang.aliases.some((alias) => usedAliases.has(alias))) {
              imported[existingIndex].aliases.forEach((alias) => usedAliases.add(alias));
              continue;
            }
            imported[existingIndex] = bang;
            bang.aliases.forEach((alias) => usedAliases.add(alias));
            continue;
          }
          if (bang.aliases.some((alias) => usedAliases.has(alias))) continue;
          bang.aliases.forEach((alias) => usedAliases.add(alias));
          imported.push(bang);
          if (imported.length >= LOCAL_BANG_LIMIT) break;
        }
        localBangs = imported;
        writeStorage(LOCAL_BANGS_STORAGE_KEY, JSON.stringify(imported));
      } else if (settingsImportMode.value === "replace") {
        localBangs = [];
      }

      if (Array.isArray(settings.favorites)) {
        const validFavoriteKeys = new Set([
          ...sourceCardByKey.keys(),
          ...localBangs.map((bang) => "local:" + bang.id)
        ]);
        const importedFavorites = [...new Set(settings.favorites.filter((key) => typeof key === "string" && validFavoriteKeys.has(key)))];
        const nextFavorites = settingsImportMode.value === "merge"
          ? [...new Set([...favorites, ...importedFavorites])]
          : importedFavorites;
        writeStorage(STORAGE.favorites, JSON.stringify(nextFavorites));
      }
      if (typeof settings.historyDisabled === "boolean") {
        writeStorage(STORAGE.historyDisabled, String(settings.historyDisabled));
        if (settings.historyDisabled) writeStorage(STORAGE.recentSearches, "[]");
      }
      if (Array.isArray(payload.recentSearches) && settings.historyDisabled !== true) {
        const importedRecent = payload.recentSearches.filter((item) => typeof item === "string").map(normalizeRecentSearch).filter(Boolean).slice(0, RECENT_SEARCH_LIMIT);
        writeStorage(STORAGE.recentSearches, JSON.stringify(importedRecent));
      }
      if (settings.multisearchSelections && typeof settings.multisearchSelections === "object") {
        for (const [id, selection] of Object.entries(settings.multisearchSelections)) {
          if (!/^[a-z0-9_-]+$/.test(id) || !Array.isArray(selection)) continue;
          writeStorage(MULTISEARCH_STORAGE_PREFIX + id, JSON.stringify(selection.filter((item) => typeof item === "string")));
        }
      }
    }
    async function importSettingsFile(file) {
      if (!file) return;
      try {
        const payload = JSON.parse(await file.text());
        importSettingsPayload(payload);
        setSettingsBackupStatus("Settings imported. Reloading…", "good");
        window.setTimeout(() => window.location.reload(), 250);
      } catch (error) {
        setSettingsBackupStatus(error.message || "Could not import that file.", "danger");
      } finally {
        settingsImportFile.value = "";
      }
    }
    let lockedScrollY = 0;
    function lockPageScroll() {
      if (document.body.dataset.dialogScrollLocked === "true") return;
      lockedScrollY = window.scrollY;
      document.body.dataset.dialogScrollLocked = "true";
      document.body.style.position = "fixed";
      document.body.style.top = "-" + lockedScrollY + "px";
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    }
    function unlockPageScroll() {
      if (document.body.dataset.dialogScrollLocked !== "true") return;
      delete document.body.dataset.dialogScrollLocked;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, lockedScrollY);
    }
    function syncDialogScrollLock() {
      const anyOpen = [settingsBackupDialog, localBangsManagerDialog, keyboardShortcutsDialog, bangBuilderDialog, disableHistoryDialog].some((dialog) => dialog.open);
      if (anyOpen) lockPageScroll();
      else unlockPageScroll();
    }
    function showDialog(dialog) {
      if (!dialog.open) dialog.showModal();
      syncDialogScrollLock();
    }
    function resolveTheme(preference) {
      if (preference !== "auto") return preference;
      return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    }
    const COMPACT_THEME_ORDER = ["auto", "light", "dark", "black"];
    const COMPACT_THEME_ICONS = {
      auto: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 3.5a8.5 8.5 0 0 0 0 17V3.5Z" fill="currentColor"/></svg>',
      light: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="3.5" fill="currentColor"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
      dark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.4 15.1A8.5 8.5 0 0 1 8.9 3.6 8.5 8.5 0 1 0 20.4 15.1Z" fill="currentColor"/></svg>',
      black: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5c.7 5.35 3.15 7.8 8.5 8.5-5.35.7-7.8 3.15-8.5 8.5-.7-5.35-3.15-7.8-8.5-8.5 5.35-.7 7.8-3.15 8.5-8.5Z" fill="currentColor"/></svg>'
    };
    function syncCompactHeaderControls() {
      const theme = themeSelect.value || "auto";
      const themeName = theme.charAt(0).toUpperCase() + theme.slice(1);
      const nextTheme = COMPACT_THEME_ORDER[(COMPACT_THEME_ORDER.indexOf(theme) + 1) % COMPACT_THEME_ORDER.length];
      const nextThemeName = nextTheme.charAt(0).toUpperCase() + nextTheme.slice(1);
      compactThemeButton.innerHTML = COMPACT_THEME_ICONS[theme] || COMPACT_THEME_ICONS.auto;
      compactThemeButton.setAttribute("aria-label", "Theme: " + themeName + ". Change to " + nextThemeName);
      compactThemeButton.title = "Theme: " + themeName + " · Next: " + nextThemeName;
      const layout = layoutSelect.value || "comfortable";
      const nextLayout = layout === "compact" ? "comfortable" : "compact";
      compactLayoutButton.setAttribute("aria-label", "Layout: " + layout + ". Change to " + nextLayout);
      compactLayoutButton.title = "Layout: " + layout.charAt(0).toUpperCase() + layout.slice(1) + " · Change to " + nextLayout.charAt(0).toUpperCase() + nextLayout.slice(1);
    }
    function applyTheme(preference) {
      const nextPreference = ["auto", "dark", "light", "black"].includes(preference) ? preference : "auto";
      document.documentElement.dataset.theme = resolveTheme(nextPreference);
      document.documentElement.dataset.themePreference = nextPreference;
      themeSelect.value = nextPreference;
      writeStorage(STORAGE.theme, nextPreference);
      syncCompactHeaderControls();
    }
    function applyLayout(layout) {
      const nextLayout = ["compact", "minimalist"].includes(layout) ? layout : "comfortable";
      document.documentElement.dataset.density = nextLayout;
      headerActions.classList.remove("is-menu-open");
      headerMenuButton.setAttribute("aria-expanded", "false");
      layoutSelect.value = nextLayout;
      writeStorage(STORAGE.layout, nextLayout);
      syncCompactHeaderControls();
      if (nextLayout === "minimalist") {
        requestAnimationFrame(() => filter.focus());
      }
    }
    function applyHomeEngine(path) {
      const nextPath = HOME_ENGINE_PATHS.includes(path) ? path : "";
      homeEngineSelect.value = nextPath;
      searchForm.action = nextPath ? "/" + nextPath + "/" : "/";
      writeStorage(STORAGE.homeEngine, nextPath);
    }
    applyTheme(readStorage(STORAGE.theme, document.documentElement.dataset.themePreference || "auto"));
    applyLayout(readStorage(STORAGE.layout, "comfortable"));
    if (["comfortable", "compact", "minimalist"].includes(requestedMode)) {
      applyLayout(requestedMode);
    }
    applyHomeEngine(readStorage(STORAGE.homeEngine, ""));
    updateSearchPlaceholder();
    themeSelect.addEventListener("change", () => {
      applyTheme(themeSelect.value);
    });
    const colorSchemeMedia = window.matchMedia("(prefers-color-scheme: light)");
    const syncAutoTheme = () => {
      if (themeSelect.value === "auto") applyTheme("auto");
    };
    if (colorSchemeMedia.addEventListener) {
      colorSchemeMedia.addEventListener("change", syncAutoTheme);
    } else {
      colorSchemeMedia.addListener(syncAutoTheme);
    }
    layoutSelect.addEventListener("change", () => {
      applyLayout(layoutSelect.value);
    });
    compactThemeButton.addEventListener("click", () => {
      const current = themeSelect.value || "auto";
      const next = COMPACT_THEME_ORDER[(COMPACT_THEME_ORDER.indexOf(current) + 1) % COMPACT_THEME_ORDER.length];
      applyTheme(next);
    });
    compactLayoutButton.addEventListener("click", () => {
      applyLayout(layoutSelect.value === "compact" ? "comfortable" : "compact");
    });
    exitMinimalistButton.addEventListener("click", () => {
      applyLayout("compact");
      filter.focus();
    });
    homeEngineSelect.addEventListener("change", () => {
      applyHomeEngine(homeEngineSelect.value);
      updateSearchPlaceholder();
    });
    const storedDefaultsOpen = readStorage(STORAGE.defaultsOpen, null);
    if (storedDefaultsOpen !== null) {
      defaults.open = storedDefaultsOpen === "true";
    }
    document.documentElement.dataset.defaultsOpen = String(defaults.open);
    defaults.addEventListener("toggle", () => {
      writeStorage(STORAGE.defaultsOpen, String(defaults.open));
      document.documentElement.dataset.defaultsOpen = String(defaults.open);
    });
    function isFavorite(key) {
      return favorites.includes(key);
    }
    function saveFavorites() {
      writeStorage(STORAGE.favorites, JSON.stringify(favorites));
    }
    function updateFavoriteButtons() {
      document.querySelectorAll("[data-favorite]").forEach((button) => {
        const favorite = isFavorite(button.dataset.favorite);
        button.classList.toggle("is-favorite", favorite);
        button.textContent = favorite ? "★" : "☆";
        button.setAttribute("aria-pressed", String(favorite));
        button.setAttribute("aria-label", favorite ? "Remove from favorites" : "Add to favorites");
        button.title = favorite ? "Remove from favorites" : "Add to favorites";
      });
    }
    function renderFavorites() {
      favoritesGrid.replaceChildren();
      favorites = favorites.filter((key) => sourceCardByKey.has(key));
      favorites.forEach((key) => {
        const card = sourceCardByKey.get(key).cloneNode(true);
        card.hidden = false;
        favoritesGrid.append(card);
      });
      favoritesCount.textContent = favorites.length === 1 ? "1 saved site" : String(favorites.length) + " saved sites";
      updateFavoriteButtons();
    }
    function toggleFavorite(key) {
      if (isFavorite(key)) {
        favorites = favorites.filter((savedKey) => savedKey !== key);
      } else {
        favorites = [key, ...favorites];
      }
      saveFavorites();
      renderFavorites();
      applyFilter();
    }
    function setAllGroups(open) {
      groups.forEach((group) => { group.open = open; });
    }
    function parseBangInput(raw) {
      const value = raw.trim();
      if (!value) return null;
      let match = value.match(/^([!;:.])([a-zA-Z0-9_-]+)(?:\\s+(.+))?$/);
      if (match) return { bang: match[2].toLowerCase(), query: match[3] || "" };
      match = value.match(/^([a-zA-Z0-9_-]+)([!;:.])(?:\\s+(.+))?$/);
      if (match) return { bang: match[1].toLowerCase(), query: match[3] || "" };
      match = value.match(/^(.+?)\\s+([!;:.])([a-zA-Z0-9_-]+)$/);
      if (match) return { bang: match[3].toLowerCase(), query: match[1] || "" };
      match = value.match(/^(.+?)\\s+([a-zA-Z0-9_-]+)([!;:.])$/);
      if (match) return { bang: match[2].toLowerCase(), query: match[1] || "" };
      return null;
    }
    function evaluateMathExpression(value) {
      const expression = String(value).trim();
      if (
        !expression ||
        expression.length > 120 ||
        !/[+*/%^-]/.test(expression) ||
        !/^[0-9+*/%^().\\s-]+$/.test(expression)
      ) {
        return null;
      }

      try {
        const result = Function('"use strict"; return (' + expression.replaceAll("^", "**") + ");")();
        if (typeof result !== "number" || !Number.isFinite(result)) return null;
        const normalized = Object.is(result, -0) ? 0 : Number(result.toPrecision(12));
        return String(normalized);
      } catch {
        return null;
      }
    }

    function showMathPreview(expression, title = "Calculator") {
      const result = evaluateMathExpression(expression);
      if (result === null) return false;
      bangPreview.hidden = false;
      bangPreview.classList.remove("is-unknown");
      bangPreviewTitle.textContent = title;
      bangPreviewText.textContent = expression.trim() + " = " + result;
      return true;
    }

    function updateBangPreview() {
      const shortcut = parseBangInput(filter.value);
      if (!shortcut) {
        if (!showMathPreview(filter.value)) {
          bangPreview.hidden = true;
          bangPreview.classList.remove("is-unknown");
        }
        return;
      }
      const siteIndex = BANG_DATA.aliases[shortcut.bang];
      let site = Number.isInteger(siteIndex) ? BANG_DATA.sites[siteIndex] : null;
      if (!site) {
        const local = findLocalBangByAlias(shortcut.bang);
        if (local) site = [local.name, "!" + local.aliases[0], local.search ? "search" : "link"];
      }
      bangPreview.hidden = false;
      if (!site) {
        bangPreview.classList.add("is-unknown");
        bangPreviewTitle.textContent = "Unknown bang";
        bangPreviewText.textContent = "No shortcut named !" + shortcut.bang + ".";
        return;
      }
      const [siteName, primaryBang, behavior] = site;
      bangPreview.classList.remove("is-unknown");
      bangPreviewTitle.textContent = primaryBang;
      if (behavior === "math") {
        if (!shortcut.query) {
          bangPreviewText.textContent = "Enter a simple expression, such as !math 45/6.";
        } else if (!showMathPreview(shortcut.query, primaryBang)) {
          bangPreviewTitle.textContent = primaryBang;
          bangPreviewText.textContent = "Use numbers, parentheses, and + - * / % ^.";
        }
        return;
      }
      if (behavior === "multi") {
        bangPreviewText.textContent = shortcut.query
          ? 'Open the multisearch page for “' + shortcut.query + '”.'
          : "Open this multisearch page.";
        return;
      }
      if (behavior === "random") {
        bangPreviewText.textContent = shortcut.query
          ? 'Search “' + shortcut.query + '” with a random searchable shortcut.'
          : "Open a random shortcut.";
        return;
      }
      if (!shortcut.query) {
        bangPreviewText.textContent = behavior === "search"
          ? "Open " + siteName + " or add a search term."
          : "Press Enter to open " + siteName + ".";
      } else if (behavior === "domain") {
        bangPreviewText.textContent = "Scan " + shortcut.query + " with VirusTotal.";
      } else if (behavior === "search") {
        bangPreviewText.textContent = 'Search “' + shortcut.query + '” with ' + siteName + '.';
      } else {
        bangPreviewText.textContent = "Open " + siteName + ". This shortcut does not search.";
      }
    }
    function clearKeyboardSelection() {
      sourceCards.forEach((card) => card.classList.remove("is-keyboard-selected"));
      keyboardSelection = -1;
    }
    function getKeyboardCards() {
      return sourceCards.filter((card) => {
        const group = card.closest(".group");
        return !card.hidden && !group.hidden && group.open;
      });
    }
    function moveKeyboardSelection(direction) {
      const cards = getKeyboardCards();
      if (!cards.length) return;
      const nextIndex = keyboardSelection < 0
        ? (direction > 0 ? 0 : cards.length - 1)
        : (keyboardSelection + direction + cards.length) % cards.length;
      sourceCards.forEach((card) => card.classList.remove("is-keyboard-selected"));
      keyboardSelection = nextIndex;
      const card = cards[keyboardSelection];
      card.classList.add("is-keyboard-selected");
      card.closest(".group").open = true;
      card.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
    function useKeyboardSelection() {
      const cards = getKeyboardCards();
      const card = cards[keyboardSelection];
      if (!card) return;
      const isLinkOnly = Boolean(card.querySelector(".type.open"));
      if (isLinkOnly) {
        const url = card.querySelector(".site-name")?.href;
        if (url) window.location.assign(url);
        return;
      }
      const bang = card.querySelector("[data-bang]")?.dataset.bang;
      if (bang) putBangInSearch(bang);
    }
    function applyFilter() {
      clearKeyboardSelection();
      const query = filter.value
        .trim()
        .toLowerCase()
        .replace(/[!;:.]/g, "");
      const queryTokens = query.split(/\\s+/).filter(Boolean);
      const cardMatches = (card) =>
        queryTokens.length === 0 || queryTokens.every((token) => card.dataset.search.includes(token));
      defaults.hidden = queryTokens.length > 0;
      let visible = 0;
      sourceCards.forEach((card) => {
        const matches = cardMatches(card);
        card.hidden = !matches;
        if (matches) visible += 1;
      });
      groups.forEach((group) => {
        const hasVisibleCard = (cardsByGroup.get(group) || []).some((card) => !card.hidden);
        group.hidden = !hasVisibleCard;
        if (queryTokens.length && hasVisibleCard) group.open = true;
      });
      const favoriteCards = [...favoritesGrid.querySelectorAll(".site-card")];
      let visibleFavorites = 0;
      favoriteCards.forEach((card) => {
        const matches = cardMatches(card);
        card.hidden = !matches;
        if (matches) visibleFavorites += 1;
      });
      favoritesSection.hidden = favorites.length === 0 || (queryTokens.length > 0 && visibleFavorites === 0);
      empty.style.display = visible ? "none" : "block";
      updateBangPreview();
      renderRecentSearches();
    }
    function putBangInSearch(bang) {
      filter.value = bang + " ";
      filter.focus();
      filter.setSelectionRange(filter.value.length, filter.value.length);
      applyFilter();
    }
    function clearSearch() {
      if (!filter.value) return false;
      filter.value = "";
      filter.focus();
      applyFilter();
      return true;
    }
    function isTypingTarget(target) {
      return target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement ||
        target?.isContentEditable;
    }
    let filterFrame = 0;
    function scheduleFilter() {
      if (filterFrame) return;
      filterFrame = window.requestAnimationFrame(() => {
        filterFrame = 0;
        applyFilter();
      });
    }
    filter.addEventListener("input", scheduleFilter);
    filter.addEventListener("keydown", (event) => {
      if (!filter.value && event.key === "+") {
        event.preventDefault();
        openBangBuilder();
        return;
      }
      if (!filter.value && event.key === "?") {
        event.preventDefault();
        showDialog(keyboardShortcutsDialog);
        return;
      }
      if (event.key === "Escape") {
        if (clearSearch()) {
          event.preventDefault();
        } else if (!filter.value.trim()) {
          filter.blur();
          event.preventDefault();
        }
        return;
      }
      if (!filter.value.trim()) return;
      if (event.key === "ArrowDown") {
        event.preventDefault();
        moveKeyboardSelection(1);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        moveKeyboardSelection(-1);
      } else if (event.key === "Enter" && keyboardSelection >= 0) {
        event.preventDefault();
        useKeyboardSelection();
      }
    });
    async function copyTextToClipboard(text) {
      if (navigator.clipboard?.writeText && window.isSecureContext) {
        try {
          await navigator.clipboard.writeText(text);
          return true;
        } catch {}
      }
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.append(textarea);
      textarea.select();
      const copied = document.execCommand("copy");
      textarea.remove();
      return copied;
    }
    function showMathCopyStatus(result, copied) {
      bangPreview.hidden = false;
      bangPreview.classList.remove("is-unknown");
      bangPreviewTitle.textContent = copied ? "Copied" : "Copy failed";
      bangPreviewText.textContent = copied
        ? result + " copied to the clipboard."
        : result + " could not be copied automatically.";
      window.setTimeout(() => {
        if (!filter.value.trim()) updateBangPreview();
      }, 1600);
    }
    searchForm.addEventListener("submit", async (event) => {
      const raw = filter.value.trim();
      if (raw === "+") {
        event.preventDefault();
        filter.value = "";
        applyFilter();
        openBangBuilder();
        return;
      }
      const parsedShortcut = parseBangInput(raw);
      const localBang = parsedShortcut ? findLocalBangByAlias(parsedShortcut.bang) : null;
      if (localBang) {
        event.preventDefault();
        saveRecentSearch(filter.value);
        navigateToLocalBang(localBang, parsedShortcut.query);
        return;
      }
      const mathResult = parsedShortcut ? null : evaluateMathExpression(raw);
      if (mathResult !== null) {
        event.preventDefault();
        const copied = await copyTextToClipboard(mathResult);
        filter.value = "";
        applyFilter();
        showMathCopyStatus(mathResult, copied);
        return;
      }
      saveRecentSearch(filter.value);
    });
    restoreBangBuilderDraft();
    updateExistingBuilderMatch();
    renderBangBuilderCode();
    if (builderIcon.value.trim()) setBuilderIconPreview(builderIcon.value);
    bangBuilderFields.forEach((field) => {
      field.addEventListener("input", () => {
        if (field === builderIcon) setBuilderIconPreview(builderIcon.value);
        if (field === builderHome || field === builderSearch) {
          if (builderEditingId && builderExistingMatch && builderHomeKey(builderHome.value) !== builderHomeKey(builderExistingMatch.home)) builderEditingId = "";
          builderDuplicateAllowed = false;
        }
        renderBangBuilderCode();
      });
      field.addEventListener("change", renderBangBuilderCode);
    });
    builderSearch.addEventListener("blur", () => {
      if (builderSearch.value.includes("%s")) {
        builderSearch.value = builderSearch.value.replaceAll("%s", "{q}");
        renderBangBuilderCode();
      }
    });
    builderIconPreview.addEventListener("load", () => {
      if (builderIconPreview.src === discoveredIconPreviewUrl || builderIconPreview.currentSrc === discoveredIconPreviewUrl) {
        builderIconPreview.hidden = false;
      }
    });
    builderIconPreview.addEventListener("error", () => {
      builderIconPreview.hidden = true;
      setBuilderStatus(builderIconStatus, "Preview unavailable; the URL can still be selected or replaced manually.", "warn");
    });
    bangBuilderForm.addEventListener("submit", (event) => event.preventDefault());
    builderFindIcon.addEventListener("click", findBuilderFavicon);
    builderIconMore.addEventListener("click", () => {
      builderIconChoicesExpanded = !builderIconChoicesExpanded;
      paintBuilderIconChoices();
    });
    builderCopyInline.addEventListener("click", () => copyBangBuilderCode(builderCopyInline));
    builderCopyBottom.addEventListener("click", () => copyBangBuilderCode(builderCopyBottom));
    builderAddLocal.addEventListener("click", addBangLocally);
    builderReset.addEventListener("click", resetBangBuilder);
    builderResetBottom.addEventListener("click", resetBangBuilder);
    builderEditExisting.addEventListener("click", loadExistingBang);
    builderKeepNew.addEventListener("click", keepDuplicateBang);
    bangBuilderButton.addEventListener("click", openBangBuilder);
    settingsBackupButton.addEventListener("click", () => showDialog(settingsBackupDialog));
    manageLocalBangsButton.addEventListener("click", () => {
      renderLocalBangManager();
      settingsBackupDialog.close();
      showDialog(localBangsManagerDialog);
    });
    localBangsNewButton.addEventListener("click", () => {
      localBangsManagerDialog.close();
      resetBangBuilder();
      openBangBuilder();
    });
    localBangsList.addEventListener("change", (event) => {
      const toggle = event.target.closest("[data-local-toggle]");
      if (toggle) toggleLocalBang(toggle.dataset.localToggle, toggle.checked);
    });
    localBangsList.addEventListener("click", (event) => {
      const edit = event.target.closest("[data-local-edit]");
      if (edit) { editLocalBang(edit.dataset.localEdit); return; }
      const remove = event.target.closest("[data-local-delete]");
      if (remove) deleteLocalBang(remove.dataset.localDelete);
    });
    settingsExportButton.addEventListener("click", exportSettings);
    settingsImportButton.addEventListener("click", () => settingsImportFile.click());
    settingsImportFile.addEventListener("change", () => importSettingsFile(settingsImportFile.files?.[0]));
    headerMenuButton.addEventListener("click", () => {
      const open = headerActions.classList.toggle("is-menu-open");
      headerMenuButton.setAttribute("aria-expanded", String(open));
    });
    clearRecentSearchesButton.addEventListener("click", clearRecentSearches);
    disableHistoryButton.addEventListener("click", () => {
      showDialog(disableHistoryDialog);
    });
    cancelDisableHistoryButton.addEventListener("click", () => {
      disableHistoryDialog.close();
    });
    confirmDisableHistoryButton.addEventListener("click", () => {
      disableSearchHistory();
      disableHistoryDialog.close();
    });
    keyboardShortcutsButton.addEventListener("click", () => {
      showDialog(keyboardShortcutsDialog);
    });
    if (requestedAction === "shortcuts") {
      window.setTimeout(() => showDialog(keyboardShortcutsDialog), 0);
    } else if (requestedAction === "builder") {
      window.setTimeout(openBangBuilder, 0);
    }
    document.querySelectorAll("[data-close-dialog]").forEach((button) => {
      button.addEventListener("click", () => {
        const dialog = document.getElementById(button.dataset.closeDialog);
        if (dialog) dialog.close();
      });
    });
    [settingsBackupDialog, localBangsManagerDialog, keyboardShortcutsDialog, bangBuilderDialog, disableHistoryDialog].forEach((dialog) => {
      let startedOnBackdrop = false;
      dialog.addEventListener("pointerdown", (event) => {
        startedOnBackdrop = event.target === dialog;
      });
      dialog.addEventListener("pointerup", (event) => {
        if (startedOnBackdrop && event.target === dialog) dialog.close();
        startedOnBackdrop = false;
      });
      dialog.addEventListener("pointercancel", () => { startedOnBackdrop = false; });
      dialog.addEventListener("close", syncDialogScrollLock);
      dialog.addEventListener("cancel", () => window.requestAnimationFrame(syncDialogScrollLock));
    });
    document.getElementById("expand-all").addEventListener("click", () => {
      setAllGroups(true);
    });
    document.getElementById("collapse-all").addEventListener("click", () => {
      setAllGroups(false);
    });
    document.addEventListener("keydown", (event) => {
      if (settingsBackupDialog.open || localBangsManagerDialog.open || keyboardShortcutsDialog.open || bangBuilderDialog.open || disableHistoryDialog.open || event.defaultPrevented || event.ctrlKey || event.metaKey || event.altKey) {
        return;
      }
      if (event.key === "Escape") {
        if (isTypingTarget(event.target) && event.target !== filter) return;
        if (clearSearch()) {
          event.preventDefault();
        } else if (event.target === filter || document.activeElement === filter) {
          filter.blur();
          event.preventDefault();
        }
        return;
      }
      if (isTypingTarget(event.target)) return;
      if (event.key === "/") {
        event.preventDefault();
        filter.focus();
        filter.select();
      } else if (event.key === "?") {
        event.preventDefault();
        showDialog(keyboardShortcutsDialog);
      } else if (event.key === "+") {
        event.preventDefault();
        openBangBuilder();
      } else if (event.key === "1") {
        event.preventDefault();
        applyLayout("comfortable");
      } else if (event.key === "2") {
        event.preventDefault();
        applyLayout("compact");
      } else if (event.key === "3") {
        event.preventDefault();
        applyLayout("minimalist");
      } else if (event.key === "[") {
        event.preventDefault();
        setAllGroups(false);
      } else if (event.key === "]") {
        event.preventDefault();
        setAllGroups(true);
      }
    });
    document.addEventListener("click", async (event) => {
      const recentTarget = event.target.closest("[data-recent-search]");
      if (recentTarget) {
        filter.value = recentTarget.dataset.recentSearch;
        searchForm.requestSubmit();
        return;
      }
      const editFaviconTarget = event.target.closest("[data-builder-edit-site]");
      if (editFaviconTarget) {
        event.preventDefault();
        openBuilderForSiteId(editFaviconTarget.dataset.builderEditSite);
        return;
      }
      const localDeleteTarget = event.target.closest("[data-local-card-delete]");
      if (localDeleteTarget) {
        event.preventDefault();
        deleteLocalBang(localDeleteTarget.dataset.localCardDelete);
        return;
      }
      const favoriteTarget = event.target.closest("[data-favorite]");
      if (favoriteTarget) {
        toggleFavorite(favoriteTarget.dataset.favorite);
        return;
      }
      const bangTarget = event.target.closest("[data-bang]");
      if (bangTarget) {
        putBangInSearch(bangTarget.dataset.bang);
        return;
      }
      const copyTarget = event.target.closest("[data-copy]");
      if (!copyTarget) return;
      const text = copyTarget.dataset.copy;
      try {
        await navigator.clipboard.writeText(text);
        const original = copyTarget.innerHTML;
        copyTarget.textContent = "Copied";
        setTimeout(() => { copyTarget.innerHTML = original; }, 900);
      } catch {
        window.prompt("Copy this:", text);
      }
    });
    renderFavorites();
    applyFilter();
    document.documentElement.dataset.preferencesReady = "true";
  </script>
</body>
</html>`;
  if (!HELP_PAGE_HTML_CACHE.has(origin) && HELP_PAGE_HTML_CACHE.size >= 4) {
    HELP_PAGE_HTML_CACHE.clear();
  }
  HELP_PAGE_HTML_CACHE.set(origin, html);
  return htmlResponse(html);
}
function resolveMultiSearchTargets(multi) {
  return multi.targets
    .map((target) => resolveMultiSearchTarget(target))
    .filter(Boolean);
}
function resolveMultiSearchTarget(target) {
  const key = normalizePath(target.key);
  if (target.type === "engine") {
    const engine = DEFAULT_ENGINE_BY_PATH.get(key);
    if (!engine?.search || !engine.home) return null;
    const primaryPath = engine.paths[0] || "";
    return {
      id: `engine:${primaryPath || "root"}`,
      name: engine.name,
      detail: "Default search engine",
      home: engine.home,
      search: engine.search,
      icon: getFaviconUrl(engine),
      aliases: engine.paths
    };
  }
  if (target.type === "site") {
    const site = BANGS.get(key) || SITE_BY_ID.get(key);
    if (!site?.home) return null;
    return {
      id: `site:${site.id}`,
      name: site.name,
      detail: `${site.category} · !${site.aliases[0]}`,
      home: site.home,
      search: site.search || "",
      icon: getFaviconUrl(site),
      aliases: site.aliases
    };
  }
  return null;
}
function buildMultiTargetUrl(target, query) {
  const trimmed = query.trim();
  if (trimmed && target.search) {
    return target.search.replaceAll("{q}", encodeURIComponent(trimmed));
  }
  return target.home;
}
function jsonForInlineScript(value) {
  return JSON.stringify(value).replaceAll("<", "\\u003c");
}
function renderMultiSearchPage(multi, query, requestUrl) {
  const targets = RESOLVED_MULTI_SEARCH_TARGETS.get(multi.id) || resolveMultiSearchTargets(multi);
  const trimmedQuery = query.trim();
  const primaryAlias = multi.aliases[0];
  const targetRows = targets.map((target, index) => {
    const href = buildMultiTargetUrl(target, trimmedQuery);
    return `
      <label class="target-row" data-target-row data-target-id="${escapeAttribute(target.id)}">
        <input class="target-check" type="checkbox" data-target-check="${index}" checked>
        <span class="target-main">
          ${target.icon ? `<img class="target-favicon" src="${escapeAttribute(target.icon)}" alt="" width="22" height="22" loading="lazy" decoding="async" fetchpriority="low" referrerpolicy="no-referrer" data-site-favicon>` : ""}
          <span class="target-copy">
            <strong>${escapeHtml(target.name)}</strong>
            <span>${escapeHtml(target.detail)}</span>
          </span>
        </span>
        <a class="target-open" href="${escapeAttribute(href)}" target="_blank" rel="noreferrer" data-target-link="${index}">Open</a>
      </label>`;
  }).join("");
  const targetDataJson = jsonForInlineScript(targets);
  const multiHeadingIcon = multi.icon
    ? `<img class="multi-heading-icon" src="${escapeAttribute(multi.icon)}" alt="" width="34" height="34" referrerpolicy="no-referrer">`
    : String(multi.iconSvg || "").trim()
      ? `<span class="multi-heading-icon" aria-hidden="true">${multi.iconSvg}</span>`
      : "";
  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(multi.name)} · ${escapeHtml(PROJECT.name)}</title>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <script>
    (() => {
      const allowed = ["auto", "dark", "light", "black"];
      let preference = "auto";
      try {
        const saved = localStorage.getItem("search-help-theme");
        if (allowed.includes(saved)) preference = saved;
      } catch {}
      const resolveAuto = () => window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
      document.documentElement.dataset.theme = preference === "auto" ? resolveAuto() : preference;
      document.documentElement.dataset.themePreference = preference;
    })();
  </script>
  <style>
    :root {
      color-scheme: dark;
      --bg: #101114;
      --surface: #191b20;
      --surface-2: #22252c;
      --input: #13151a;
      --border: #323640;
      --border-strong: #4a5160;
      --text: #eef0f4;
      --muted: #a7adb9;
      --accent: #8ab4ff;
      --accent-contrast: #091525;
      --good: #83d49b;
      --warn: #ffca70;
      --danger: #ff9b9b;
      --shadow: rgba(0, 0, 0, .22);
    }
    :root[data-theme="dark"] {
      color-scheme: dark;
      --bg: #101114;
      --surface: #191b20;
      --surface-2: #22252c;
      --input: #13151a;
      --border: #323640;
      --border-strong: #4a5160;
      --text: #eef0f4;
      --muted: #a7adb9;
      --accent: #8ab4ff;
      --accent-contrast: #091525;
      --good: #83d49b;
      --warn: #ffca70;
      --danger: #ff9b9b;
      --shadow: rgba(0, 0, 0, .22);
    }
    :root[data-theme="light"] {
      color-scheme: light;
      --bg: #f5f7fb;
      --surface: #ffffff;
      --surface-2: #eef2f8;
      --input: #ffffff;
      --border: #cdd4e0;
      --border-strong: #9eabbc;
      --text: #171a20;
      --muted: #576274;
      --accent: #185bc4;
      --accent-contrast: #ffffff;
      --good: #137a3d;
      --warn: #8a5200;
      --danger: #b42318;
      --shadow: rgba(29, 43, 68, .10);
    }
    :root[data-theme="black"] {
      color-scheme: dark;
      --bg: #000000;
      --surface: #050505;
      --surface-2: #0d0d0d;
      --input: #000000;
      --border: rgba(255,255,255,.16);
      --border-strong: rgba(255,255,255,.28);
      --text: #f7f7f7;
      --muted: #b6b6b6;
      --accent: #9ec5ff;
      --accent-contrast: #000000;
      --good: #83d49b;
      --warn: #ffca70;
      --danger: #ff9b9b;
      --shadow: rgba(0, 0, 0, .60);
    }
    * { box-sizing: border-box; }
    body {
      min-width: 320px;
      margin: 0;
      background: var(--bg);
      color: var(--text);
      font: 16px/1.45 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }
    main { max-width: 860px; margin: 0 auto; padding: 36px 20px 64px; }
    a { color: var(--accent); }
    h1 { margin: 0; font-size: clamp(2rem, 5vw, 3rem); line-height: 1.05; letter-spacing: -.03em; }
    .multi-heading { display: flex; align-items: center; gap: 12px; }
    .multi-heading-icon { display: grid; flex: 0 0 36px; place-items: center; width: 36px; height: 36px; color: var(--accent); object-fit: contain; }
    .multi-heading-icon svg { display: block; width: 34px; height: 34px; }
    p { color: var(--muted); margin: 10px 0 0; }
    .top { display: flex; justify-content: space-between; gap: 16px; align-items: flex-start; margin-bottom: 24px; }
    .multi-title { display: flex; align-items: center; gap: 12px; }
    .multi-heading-icon { display: inline-grid; width: 34px; height: 34px; flex: 0 0 34px; place-items: center; color: var(--accent); }
    .multi-heading-icon svg, img.multi-heading-icon { display: block; width: 34px; height: 34px; object-fit: contain; }
    .back { border: 1px solid var(--border); border-radius: 999px; padding: 8px 11px; text-decoration: none; color: var(--text); background: var(--surface-2); white-space: nowrap; }
    .card { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; box-shadow: 0 8px 24px var(--shadow); padding: 16px; margin-top: 16px; }
    .search-row { display: flex; gap: 10px; align-items: stretch; }
    input[type="search"] { flex: 1; min-width: 0; width: 100%; padding: 13px 14px; border: 1px solid var(--border); border-radius: 10px; background: var(--input); color: var(--text); font: inherit; }
    button, .target-open, input[type="search"] { font: inherit; }
    button, .target-open { appearance: none; border: 1px solid var(--border); border-radius: 9px; background: var(--surface-2); color: var(--text); padding: 8px 10px; cursor: pointer; text-decoration: none; }
    button:hover, .target-open:hover, .back:hover { border-color: var(--accent); }
    button.primary { border-color: var(--accent); background: var(--accent); color: var(--accent-contrast); font-weight: 700; }
    button:focus-visible, a:focus-visible, input:focus-visible { outline: 3px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; }
    .actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
    .hint { font-size: .92rem; }
    .status { min-height: 1.4em; margin-top: 10px; color: var(--muted); }
    .status.good { color: var(--good); }
    .status.warn { color: var(--warn); }
    .status.danger { color: var(--danger); }
    .target-list { display: grid; gap: 8px; margin-top: 14px; }
    .target-row { display: grid; grid-template-columns: auto 1fr auto; gap: 12px; align-items: center; padding: 12px; border: 1px solid var(--border); border-radius: 12px; background: var(--surface-2); }
    .target-row:has(input:not(:checked)) { opacity: .62; }
    .target-check { width: 20px; height: 20px; accent-color: var(--accent); }
    .target-main { display: flex; align-items: center; gap: 10px; min-width: 0; }
    .target-favicon { width: 22px; height: 22px; flex: 0 0 22px; object-fit: contain; border-radius: 4px; }
    .target-favicon[hidden] { display: none; }
    .target-copy { display: grid; gap: 2px; min-width: 0; }
    .target-copy span { color: var(--muted); font-size: .86rem; overflow-wrap: anywhere; }
    .small { color: var(--muted); font-size: .86rem; }
    code { color: var(--accent); }
    @media (max-width: 620px) {
      .top, .search-row { display: block; }
      .back { display: inline-block; margin-top: 14px; }
      .search-row button { width: 100%; margin-top: 10px; }
      .target-row { grid-template-columns: auto 1fr; }
      .target-open { grid-column: 1 / -1; text-align: center; }
    }
  </style>
</head>
<body>
  <main>
    <div class="top">
      <div>
        <h1 class="multi-title">${multiHeadingIcon}<span>${escapeHtml(multi.name)}</span></h1>
        <p>${escapeHtml(multi.description || "Choose targets, then open them together.")}</p>
        <p class="small">Shortcut: <code>;${escapeHtml(primaryAlias)} ${escapeHtml(trimmedQuery || "your search")}</code></p>
      </div>
      <a class="back" href="/">All bangs</a>
    </div>

    <section class="card">
      <form id="multi-form" action="javascript:void(0)" autocomplete="off">
        <div class="search-row">
          <input id="multi-query" type="search" autocomplete="off" spellcheck="false" value="${escapeAttribute(trimmedQuery)}" placeholder="Search term">
          <button class="primary" id="search-all" type="button">Search all selected</button>
        </div>
      </form>
      <div class="actions">
        <button type="button" id="open-next">Open next</button>
        <button type="button" id="select-all">Select all</button>
        <button type="button" id="select-none">Select none</button>
        <button type="button" id="copy-links">Copy selected links</button>
      </div>
      <p id="status" class="status" aria-live="polite"></p>
      <p class="hint">Your checked sites are remembered in this browser. If Search all is blocked, allow popups for this site and try again, or use Open next.</p>
    </section>

    <section class="card">
      <div class="target-list" id="target-list">
        ${targetRows || `<p>No valid multisearch targets are configured.</p>`}
      </div>
    </section>
  </main>

  <script>
    const MULTI_ID = ${JSON.stringify(multi.id)};
    const TARGETS = ${targetDataJson};
    const themeMedia = window.matchMedia ? window.matchMedia("(prefers-color-scheme: light)") : null;
    function syncAutoTheme() {
      if (document.documentElement.dataset.themePreference === "auto") {
        document.documentElement.dataset.theme = themeMedia && themeMedia.matches ? "light" : "dark";
      }
    }
    if (themeMedia) {
      if (themeMedia.addEventListener) themeMedia.addEventListener("change", syncAutoTheme);
      else if (themeMedia.addListener) themeMedia.addListener(syncAutoTheme);
    }
    const STORAGE_KEY = "search-multisearch-selected:" + MULTI_ID;
    const form = document.getElementById("multi-form");
    const searchAllButton = document.getElementById("search-all");
    const queryInput = document.getElementById("multi-query");
    const status = document.getElementById("status");
    const checks = [...document.querySelectorAll("[data-target-check]")];
    const links = [...document.querySelectorAll("[data-target-link]")];
    let nextCursor = 0;
    document.addEventListener("error", (event) => {
      const image = event.target;
      if (image instanceof HTMLImageElement && image.matches("[data-site-favicon]")) {
        const editButton = image.closest(".site-favicon-edit");
        if (editButton) editButton.hidden = true;
        else image.hidden = true;
      }
    }, true);

    function setStatus(message, type = "") {
      status.textContent = message;
      status.className = "status" + (type ? " " + type : "");
    }
    function checkedTargets() {
      return checks
        .filter((check) => check.checked)
        .map((check) => TARGETS[Number(check.dataset.targetCheck)])
        .filter(Boolean);
    }
    function saveSelection() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedTargets().map((target) => target.id)));
      } catch {}
    }
    function restoreSelection() {
      let saved = null;
      try {
        const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
        if (Array.isArray(parsed)) saved = new Set(parsed);
      } catch {}
      if (!saved) return;
      checks.forEach((check) => {
        const target = TARGETS[Number(check.dataset.targetCheck)];
        check.checked = Boolean(target && saved.has(target.id));
      });
    }
    function urlFor(target) {
      const query = queryInput.value.trim();
      if (query && target.search) {
        return target.search.replaceAll("{q}", encodeURIComponent(query));
      }
      return target.home;
    }
    function updateSearchAllLabel() {
      const count = checkedTargets().length;
      searchAllButton.textContent = count
        ? "Search all selected (" + count + ")"
        : "Search all selected";
    }
    function updateAddressBar() {
      try {
        const url = new URL(window.location.href);
        const query = queryInput.value.trim();
        if (query) url.searchParams.set("q", query);
        else url.searchParams.delete("q");
        window.history.replaceState(null, "", url);
      } catch {}
    }
    function updateLinks() {
      links.forEach((link) => {
        const target = TARGETS[Number(link.dataset.targetLink)];
        if (target) link.href = urlFor(target);
      });
    }
    function openPopup(url) {
      const opened = window.open(url, "_blank");
      if (opened) {
        opened.opener = null;
        return true;
      }
      return false;
    }
    function openTargets(targets) {
      if (!targets.length) {
        setStatus("Choose at least one search target first.", "warn");
        return;
      }
      let blocked = 0;
      for (const target of targets) {
        if (!openPopup(urlFor(target))) blocked += 1;
      }
      if (blocked) {
        setStatus(blocked + " tab" + (blocked === 1 ? " was" : "s were") + " blocked. Allow popups for this site, then try again.", "danger");
      } else {
        setStatus("Opened " + targets.length + " selected search" + (targets.length === 1 ? "" : "es") + ".", "good");
      }
    }
    function openNext() {
      const selected = checkedTargets();
      if (!selected.length) {
        setStatus("Choose at least one search target first.", "warn");
        return;
      }
      const target = selected[nextCursor % selected.length];
      nextCursor = (nextCursor + 1) % selected.length;
      if (openPopup(urlFor(target))) {
        setStatus("Opened " + target.name + ".", "good");
      } else {
        setStatus("That tab was blocked. Allow popups for this site, then try again.", "danger");
      }
    }
    async function copyLinks() {
      const urls = checkedTargets().map((target) => urlFor(target));
      if (!urls.length) {
        setStatus("Choose at least one search target first.", "warn");
        return;
      }
      const text = urls.join("\\n");
      try {
        await navigator.clipboard.writeText(text);
        setStatus("Copied " + urls.length + " link" + (urls.length === 1 ? "" : "s") + ".", "good");
      } catch {
        window.prompt("Copy these links:", text);
      }
    }
    function searchAllSelected(event) {
      if (event) event.preventDefault();
      updateLinks();
      saveSelection();
      openTargets(checkedTargets());
    }
    form.addEventListener("submit", searchAllSelected);
    searchAllButton.addEventListener("click", searchAllSelected);
    queryInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        searchAllSelected(event);
      } else if (event.key === "Escape") {
        if (queryInput.value) {
          queryInput.value = "";
          updateLinks();
          updateAddressBar();
        } else {
          queryInput.blur();
        }
        event.preventDefault();
      }
    });
    queryInput.addEventListener("input", () => {
      updateLinks();
      updateAddressBar();
    });
    checks.forEach((check) => check.addEventListener("change", () => {
      nextCursor = 0;
      saveSelection();
      updateSearchAllLabel();
    }));
    document.getElementById("open-next").addEventListener("click", openNext);
    document.getElementById("select-all").addEventListener("click", () => {
      checks.forEach((check) => { check.checked = true; });
      nextCursor = 0;
      saveSelection();
      updateSearchAllLabel();
      setStatus("Selected all targets.", "good");
    });
    document.getElementById("select-none").addEventListener("click", () => {
      checks.forEach((check) => { check.checked = false; });
      nextCursor = 0;
      saveSelection();
      updateSearchAllLabel();
      setStatus("Deselected all targets.", "warn");
    });
    document.getElementById("copy-links").addEventListener("click", copyLinks);
    restoreSelection();
    updateLinks();
    updateSearchAllLabel();
    queryInput.focus();
    queryInput.setSelectionRange(queryInput.value.length, queryInput.value.length);
  </script>
</body>
</html>`;
  return htmlResponse(html);
}
function renderSiteCard(site) {
  const aliases = site.aliases
    .map((alias) => `<button class="alias" type="button" data-bang="!${escapeAttribute(alias)}" title="Use !${escapeAttribute(alias)} in the search box">!${escapeHtml(alias)}</button>`)
    .join("");
  const type = getSiteType(site);
  const searchText = [
    site.name,
    site.description || "",
    site.category || "",
    site.searchTerms || "",
    ...site.aliases,
    site.home || ""
  ].join(" ").toLowerCase();
  const link = site.home || "#";
  const faviconUrl = getFaviconUrl(site);
  const iconMask = String(site.iconMask || "").trim();
  const inlineIcon = String(site.iconSvg || "").trim();
  const visual = iconMask
    ? `<span class="site-favicon site-favicon-mask" style="--site-icon-mask:url(&quot;${escapeAttribute(iconMask)}&quot;)" aria-hidden="true"></span>`
    : inlineIcon
      ? `<span class="site-favicon site-favicon-svg" aria-hidden="true">${inlineIcon}</span>`
      : `<span class="site-favicon-fallback" aria-hidden="true"></span>${faviconUrl ? `<img class="site-favicon" src="${escapeAttribute(faviconUrl)}" alt="" width="20" height="20" loading="lazy" decoding="async" fetchpriority="low" referrerpolicy="no-referrer" data-site-favicon>` : ""}`;
  const favicon = `<button class="site-favicon-edit" type="button" data-builder-edit-site="${escapeAttribute(site.id)}" aria-label="Edit ${escapeAttribute(site.name)} in Bang Builder" title="Edit in Bang Builder">${visual}<span class="site-favicon-pencil" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m16.9 3.6 3.5 3.5-11 11-4.4.9.9-4.4 11-11ZM4 20l1.5-7.1L15.8 2.6a2 2 0 0 1 2.8 0l2.8 2.8a2 2 0 0 1 0 2.8L11.1 18.5 4 20Z"/></svg></span></button>`;
  const description = site.description
    ? `<p class="site-description">${escapeHtml(site.description)}</p>`
    : "";
  return `
    <article class="site-card" data-site-key="${escapeAttribute(site.id)}" data-search="${escapeAttribute(searchText)}"${site.home ? ` title="${escapeAttribute(site.home)}"` : ""}>
      <div class="site-top">
        <div class="site-heading">
          ${favicon}
          <a class="site-name" href="${escapeAttribute(link)}" target="_blank" rel="noreferrer" title="${escapeAttribute(site.name)}">${escapeHtml(site.name)}</a>
        </div>
        <div class="site-actions">
          <span class="type ${type.className}" role="img" aria-label="${escapeAttribute(type.label)}" title="${escapeAttribute(type.label)}"></span>
          <button class="favorite-button" type="button" data-favorite="${escapeAttribute(site.id)}" aria-label="Add to favorites" aria-pressed="false" title="Add to favorites">☆</button>
        </div>
      </div>
      ${description}
      <div class="aliases">${aliases}</div>
      ${site.home ? `<a class="site-url" href="${escapeAttribute(site.home)}" target="_blank" rel="noreferrer">${escapeHtml(site.home)}</a>` : ""}
    </article>`;
}
function getSiteType(site) {
  if (site.handler === "multi") {
    return { label: "Multisearch", className: "multi" };
  }
  if (site.handler === "virustotal" || site.handler === "random" || site.search) {
    return { label: "Search", className: "search" };
  }
  return { label: "Link", className: "open" };
}
function formatIssues(issues) {
  return issues
    .map((issue) => {
      if ("first" in issue) return `duplicate alias “${issue.alias}” (${issue.first} and ${issue.second})`;
      return `invalid alias “${issue.alias}” (${issue.site})`;
    })
    .join("; ");
}
function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
function escapeAttribute(value) {
  return escapeHtml(value);
}
function renderFavicon() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#101114"/><circle cx="28" cy="28" r="15" fill="none" stroke="#8ab4ff" stroke-width="7"/><path d="M39 39 54 54" fill="none" stroke="#8ab4ff" stroke-width="7" stroke-linecap="round"/><path d="M28 19v12" stroke="#eef0f4" stroke-width="5" stroke-linecap="round"/><circle cx="28" cy="38" r="3" fill="#eef0f4"/></svg>`;
  return new Response(svg, {
    headers: {
      "content-type": "image/svg+xml; charset=utf-8",
      "cache-control": "public, max-age=604800"
    }
  });
}
// -----------------------------------------------------------------------------
// 7. WORKER ENTRY POINT
// -----------------------------------------------------------------------------
export default {
  async fetch(request) {
    const url = new URL(request.url);
    const route = normalizePath(url.pathname);
    const raw = (url.searchParams.get("q") || "").trim();
    if (route === "api/favicon-discover") {
      return handleFaviconDiscovery(request);
    }
    if (route === "favicon.svg" || route === "favicon.ico") {
      return renderFavicon();
    }
    if (route.startsWith("multi/")) {
      const multiId = normalizePath(route.slice("multi/".length));
      const multi = MULTI_SEARCH_BY_ID.get(multiId) || MULTI_SEARCH_BY_ALIAS.get(multiId);
      if (multi) {
        return renderMultiSearchPage(multi, raw, url);
      }
    }
    // Root is the landing/help page. Search-engine URLs always include ?q=%s,
    // so this does not interfere with normal address-bar searching.
    if ((route === "" && !raw) || route === "help" || route === "bangs") {
      return renderHelpPage(url);
    }
    const defaultEngine = getDefaultEngine(url.pathname);
    if (!raw) {
      return redirectTo(defaultEngine.home);
    }
    // A bare shortcut symbol is a quick way to open the Help page.
    if (["!", ";", ":", "."].includes(raw)) {
      return renderHelpPage(url);
    }
    const shortcut = findShortcut(raw);
    if (!shortcut) {
      const reservedHint = getReservedBareQueryHint(raw);
      if (reservedHint) {
        return renderReservedBareQueryPage(raw, reservedHint, url);
      }
    }
    if (shortcut) {
      const multi = MULTI_SEARCH_BY_ALIAS.get(shortcut.bang);
      if (multi) {
        return renderMultiSearchPage(multi, shortcut.query, url);
      }
      const site = BANGS.get(shortcut.bang);
      if (site) {
        return handleSite(site, shortcut.query, url);
      }
      const reservedHint = RESERVED_BARE_QUERY_HINTS.get(shortcut.bang);
      if (reservedHint) {
        return renderReservedBareQueryPage(raw, reservedHint, url);
      }
      return renderLocalBangResolverPage(shortcut, raw, defaultEngine);
    }
    return redirectTo(defaultEngine.search, raw);
  }
};
