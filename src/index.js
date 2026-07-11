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
        aliases: ["gs", "gshop", "shopping"],
        home: "https://shopping.google.com/",
        search: "https://www.google.com/search?tbm=shop&q={q}"
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
        search: "https://www.google.com/maps/search/{q}"
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
        aliases: ["mistral", "vibe", "lechat"],
        home: "https://chat.mistral.ai/"
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
        home: "https://chat.deepseek.com/"
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
        search: "https://howlongtoread.com/results/{q}"
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
        aliases: ["23", "surname", "sur", "dna"],
        home: "https://discover.23andme.com/",
        search: "https://discover.23andme.com/last-name/{q}"
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
        aliases: ["monument", "monumentmetals", "mm"],
        home: "https://monumentmetals.com/",
        search: "https://monumentmetals.com/search.html?query={q}"
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
        aliases: ["yts", "studio", "youtubestudio"],
        home: "https://studio.youtube.com/",
        search: "https://blog.youtube/search/?domain=youtube&query={q}&order=relevance"
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
        aliases: ["l", "li", "linkedin"],
        home: "https://www.linkedin.com/",
        search: "https://www.linkedin.com/search/results/all/?keywords={q}"
      },
      {
        name: "X",
        aliases: ["twitter", "tw", "xcom"],
        home: "https://x.com/",
        search: "https://x.com/search?q={q}"
      },
      {
        name: "Instagram",
        aliases: ["ig", "insta", "instagram"],
        home: "https://www.instagram.com/",
        search: "https://www.instagram.com/explore/search/keyword/?q={q}"
      },
      {
        name: "Facebook",
        aliases: ["fb", "facebook"],
        home: "https://www.facebook.com/",
        search: "https://www.facebook.com/search/top?q={q}"
      },
      {
        name: "Pinterest",
        aliases: ["pin", "pinterest"],
        home: "https://www.pinterest.com/",
        search: "https://www.pinterest.com/search/pins/?q={q}"
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
        aliases: ["dc", "disc", "discord"],
        home: "https://discord.com/channels/@me"
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
        search: "https://isthereanydeal.com/search/?q={q}"
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
        aliases: ["bump", "bumpmesh", "3dtexture"],
        home: "https://bumpmesh.com/"      
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
        aliases: ["blb", "bible", "blbesv", "esv"],
        home: "https://www.blueletterbible.org/esv/jhn/1/1/",
        search: "https://www.blb.org/search/preSearch.cfm?plugin=yes&Criteria={q}&t=ESV",
        icon: ""
      },
      {
        name: "Blue Letter Bible — LSB",
        description: "Search Blue Letter Bible using the Legacy Standard Bible.",
        aliases: ["lsb", "blblsb"],
        home: "https://www.blueletterbible.org/lsb/jhn/1/1/",
        search: "https://www.blb.org/search/preSearch.cfm?plugin=yes&Criteria={q}&t=LSB"
      },
      {
        name: "Blue Letter Bible — NIV",
        description: "Search Blue Letter Bible using the New International Version.",
        aliases: ["niv", "blbniv"],
        home: "https://www.blueletterbible.org/niv/jhn/1/1/",
        search: "https://www.blb.org/search/preSearch.cfm?plugin=yes&Criteria={q}&t=NIV"
      },
      {
        name: "Blue Letter Bible — KJV",
        description: "Search Blue Letter Bible using the King James Version.",
        aliases: ["kjv", "blbkjv"],
        home: "https://www.blueletterbible.org/kjv/jhn/1/1/",
        search: "https://www.blb.org/search/preSearch.cfm?plugin=yes&Criteria={q}&t=KJV"
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
        aliases: ["deepl", "dl", "trans", "translate"],
        home: "https://www.deepl.com/translator",
        search: "https://www.deepl.com/translator#xx/en/{q}"
      },
      {
        name: "DeepL — English to Spanish",
        aliases: ["enes", "ensp"],
        home: "https://www.deepl.com/translator#en/es",
        search: "https://www.deepl.com/translator#en/es/{q}"
      },
      {
        name: "DeepL — Spanish to English",
        aliases: ["esen", "spen"],
        home: "https://www.deepl.com/translator#es/en",
        search: "https://www.deepl.com/translator#es/en/{q}"
      },
      {
        name: "DeepL — English to French",
        aliases: ["enfr"],
        home: "https://www.deepl.com/translator#en/fr",
        search: "https://www.deepl.com/translator#en/fr/{q}"
      },
      {
        name: "DeepL — French to English",
        aliases: ["fren"],
        home: "https://www.deepl.com/translator#fr/en",
        search: "https://www.deepl.com/translator#fr/en/{q}"
      },
      {
        name: "DeepL — Spanish to French",
        aliases: ["esfr", "spfr"],
        home: "https://www.deepl.com/translator#es/fr",
        search: "https://www.deepl.com/translator#es/fr/{q}"
      },
      {
        name: "DeepL — French to Spanish",
        aliases: ["fres", "frsp"],
        home: "https://www.deepl.com/translator#fr/es",
        search: "https://www.deepl.com/translator#fr/es/{q}"
      },
      {
        name: "DeepL — English to German",
        aliases: ["ende"],
        home: "https://www.deepl.com/translator#en/de",
        search: "https://www.deepl.com/translator#en/de/{q}"
      },
      {
        name: "DeepL — German to English",
        aliases: ["deen"],
        home: "https://www.deepl.com/translator#de/en",
        search: "https://www.deepl.com/translator#de/en/{q}"
      },
      {
        name: "DeepL — English to Italian",
        aliases: ["enit"],
        home: "https://www.deepl.com/translator#en/it",
        search: "https://www.deepl.com/translator#en/it/{q}"
      },
      {
        name: "DeepL — Italian to English",
        aliases: ["iten"],
        home: "https://www.deepl.com/translator#it/en",
        search: "https://www.deepl.com/translator#it/en/{q}"
      },
      {
        name: "DeepL — English to Portuguese",
        aliases: ["enpt"],
        home: "https://www.deepl.com/translator#en/pt",
        search: "https://www.deepl.com/translator#en/pt/{q}"
      },
      {
        name: "DeepL — Portuguese to English",
        aliases: ["pten"],
        home: "https://www.deepl.com/translator#pt/en",
        search: "https://www.deepl.com/translator#pt/en/{q}"
      },
      {
        name: "DeepL — English to Japanese",
        aliases: ["enja"],
        home: "https://www.deepl.com/translator#en/ja",
        search: "https://www.deepl.com/translator#en/ja/{q}"
      },
      {
        name: "DeepL — Japanese to English",
        aliases: ["jaen"],
        home: "https://www.deepl.com/translator#ja/en",
        search: "https://www.deepl.com/translator#ja/en/{q}"
      },
      {
        name: "DeepL — English to Chinese",
        aliases: ["enzh"],
        home: "https://www.deepl.com/translator#en/zh",
        search: "https://www.deepl.com/translator#en/zh/{q}"
      },
      {
        name: "DeepL — Chinese to English",
        aliases: ["zhen"],
        home: "https://www.deepl.com/translator#zh/en",
        search: "https://www.deepl.com/translator#zh/en/{q}"
      },
      {
        name: "DeepL — English to Korean",
        aliases: ["enko"],
        home: "https://www.deepl.com/translator#en/ko",
        search: "https://www.deepl.com/translator#en/ko/{q}"
      },
      {
        name: "DeepL — Korean to English",
        aliases: ["koen"],
        home: "https://www.deepl.com/translator#ko/en",
        search: "https://www.deepl.com/translator#ko/en/{q}"
      }
    ]
  },
  {
    category: "Communication, Cloud & Accounts",
    sites: [
      {
        name: "Gmail",
        aliases: ["go", "gma", "gmail", "mail"],
        home: "https://mail.google.com/",
        search: "https://mail.google.com/mail/u/0/#search/{q}"
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
        search: "https://docs.google.com/document/u/0/?q={q}"
      },
      {
        name: "Google Voice",
        description: "Open Google Voice or search your messages.",
        aliases: ["voice", "gvo", "gvoice", "gvmail"],
        home: "https://voice.google.com/u/1/",
        search: "https://voice.google.com/u/1/search?from=%5B%5D&q=%5B%22{q}%22%5D"
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
        aliases: ["pd", "protondrive"],
        home: "https://drive.proton.me/",
        search: "https://drive.proton.me/u/0/search#q={q}"
      },
      {
        name: "Proton Pass",
        description: "Open Proton Pass or search your password manager.",
        aliases: ["pp", "pass", "password"],
        home: "https://pass.proton.me/u/19",
        search: "https://pass.proton.me/u/19/search#q={q}"
      },
      {
        name: "Proton Calendar",
        description: "Open Proton Calendar or search calendar items.",
        aliases: ["pc", "cal", "calendar"],
        home: "https://calendar.proton.me/",
        search: "https://calendar.proton.me/u/0/search#q={q}"
      },
      {
        name: "Proton Docs",
        description: "Open Proton Docs or search your documents.",
        aliases: ["pdoc", "pdocs", "protondocs"],
        home: "https://docs.proton.me/",
        search: "https://docs.proton.me/u/0/search#q={q}"
      },
      {
        name: "Proton",
        description: "Proton referral link.",
        aliases: ["p", "proton"],
        home: "https://micahjeffery.com/proton/"
      },
      {
        name: "Proton Meet",
        description: "Open Proton’s browser-based meeting app.",
        aliases: ["meet", "pmeet", "protonmeet"],
        home: "https://meet.proton.me/"
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
        description: "Private encrypted messaging app",
        aliases: ["signal"],
        home: "https://signal.org/download/"
      },
      {
        name: "Ente Auth",
        description: "Open Ente’s 2FA authentication app.",
        aliases: ["ente", "ea", "auth"],
        home: "https://auth.ente.com/auth"
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
        aliases: ["tuta", "tm", "tutamail"],
        home: "https://mail.tutanota.com/"
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
        handler: "math"
      },
      {
        name: "Micah Jeffery",
        description: "Open Micah Jeffery’s site.",
        aliases: ["mj", "micah"],
        home: "https://www.micahjeffery.com",
        search: "https://www.micahjeffery.com/_/search?query={q}"
      },
      {
        name: "Micah Jeffery > apps",
        description: "Open the applications links page.",
        aliases: ["apps", "mja"],
        home: "https://www.micahjeffery.com/links/applications"
      },
      {
        name: "Micah Jeffery > extensions",
        description: "Open the browser-extensions links page.",
        aliases: ["mje", "extensions"],
        home: "https://www.micahjeffery.com/links/extensions"
      },
      {
        name: "Micah Jeffery > hysa",
        description: "Open the high-yield savings-account page.",
        aliases: ["mjs", "mjh", "hysa", "hysas", "apy", "savings"],
        home: "https://www.micahjeffery.com/financial/hysas"
      },
      {
        name: "Micah Jeffery > referrals",
        description: "Open the referral and savings links page.",
        aliases: ["refer", "mjr", "referral", "referrals"],
        home: "https://www.micahjeffery.com/financial/hysas"
      },
      {
        name: "Caption Ninja",
        description: "Open browser-based captioning tools.",
        aliases: ["caption", "cap"],
        home: "https://caption.ninja/"
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
        aliases: ["color", "coolors"],
        home: "https://coolors.co/?home"
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
        aliases: ["download", "cobalt"],
        home: "https://cobalt.tools/"
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
        aliases: ["photo", "ps"],
        home: "https://www.photopea.com/"
      },
      {
        name: "SVG Repo",
        description: "Search free open-licensed SVG vectors and icons.",
        aliases: ["svgrepo", "svg", "icons"],
        home: "https://www.svgrepo.com/",
        search: "https://www.svgrepo.com/vectors/{q}/"
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
        aliases: ["jpeg", "compress"],
        home: "https://jpeg-optimizer.com/"
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
        aliases: ["face", "unicode"],
        home: "https://textfac.es/"
      },
      {
        name: "Wormhole File Transfer",
        description: "Send files directly with Wormhole.",
        aliases: ["file", "wh", "worm", "transfer", "transf", "wormhole"],
        home: "https://wormhole.app/"
      },
      {
        name: "WhatFontIs",
        description: "Identify fonts from an image.",
        aliases: ["font", "whatfont"],
        home: "https://www.whatfontis.com/"
      },
      {
        name: "VDO.Ninja",
        description: "Bring live video from any phone or computer into OBS.",
        aliases: ["vdo", "obs"],
        home: "https://vdo.ninja/"
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
        home: "https://tinywow.com/tools/pdf"
      },
      {
        name: "QuickChart QR Generator",
        description: "Generate a QR code from text or a URL.",
        aliases: ["qr", "qrcode"],
        home: "https://quickchart.io/qr-code-api/",
        search: "https://quickchart.io/qr?text={q}"
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
        aliases: ["wb", "wbm", "archive", "wayback"],
        home: "https://web.archive.org/",
        search: "https://web.archive.org/web/*/{q}"
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
        aliases: ["test", "speed", "fast"],
        home: "https://fast.com/"
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
        home: "https://www.upscale.media/upload"
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
        description: "Practice typing with customizable tests.",
        aliases: ["type", "mt", "monkey"],
        home: "https://monkeytype.com/"
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
        aliases: ["anki", "flashcards"],
        home: "https://ankiweb.net/decks",
        search: "https://ankiweb.net/shared/decks?search={q}"
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
        aliases: ["ethno", "race", "ethnicity", "ethnogussr", "hbd"],
        home: "https://hbd.gg/"
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
       }
    ]
  }
];
// -----------------------------------------------------------------------------
// 3. CONFIGURATION INDEXES AND VALIDATION
// -----------------------------------------------------------------------------
// Display metadata such as `description` is intentionally separate from routing.
const SITES = SITE_GROUPS.flatMap((group) =>
  group.sites.map((site) => ({
    ...site,
    id: String(site.aliases[0]).toLowerCase(),
    category: group.category
  }))
);
const SITE_BY_ID = new Map(SITES.map((site) => [site.id, site]));
const MULTI_SEARCHES = [
  {
    id: "x",
    name: "Web Multisearch",
    description: "Search the same term across multiple search engines.",
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
      { type: "site", key: "you" },
      { type: "site", key: "phind" },
      { type: "site", key: "huggingchat" },
      { type: "site", key: "deepseek" }
    ]
  },
  {
    id: "xeng",
    name: "Translation Multisearch",
    description: "Translate English text into multiple languages.",
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
function handleSite(site, query, requestUrl) {
  if (site.handler === "virustotal") {
    return query ? handleVirusTotalLookup(query) : redirectTo(site.home);
  }
  if (query && site.search) {
    return redirectTo(site.search, query);
  }
  return redirectTo(site.home);
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
      site.handler === "virustotal" ? "domain" : site.handler === "math" ? "math" : site.search ? "search" : "link"
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
    .header-actions { justify-content: flex-end; }
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
      flex: 0 0 30px;
      place-items: center;
      width: 30px;
      height: 30px;
      border: 1px solid var(--border);
      border-radius: 999px;
    }
    .type::before {
      content: "";
      width: 15px;
      height: 15px;
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
    .dialog-actions { justify-content: flex-end; margin-top: 18px; }
    .dialog-button.danger { border-color: var(--danger); color: var(--danger); }
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
    :root[data-density="compact"] .site-description { margin-top: 6px; }
    :root[data-density="compact"] .aliases { margin-top: 8px; }
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
    :root[data-density="minimalist"] main > :not(.toolbar) { display: none !important; }
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
    .site-top { display: flex; gap: 10px; justify-content: space-between; align-items: flex-start; }
    .site-heading { display: flex; align-items: center; gap: 9px; min-width: 0; }
    .site-favicon {
      width: 20px;
      height: 20px;
      flex: 0 0 20px;
      object-fit: contain;
      border-radius: 4px;
    }
    .site-favicon[hidden] { display: none; }
    .site-name { min-width: 0; color: var(--text); font-weight: 750; text-decoration: none; overflow-wrap: anywhere; }
    .site-actions { justify-content: flex-end; }
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
      width: 30px;
      height: 30px;
      padding: 0;
      font-size: 1.1rem;
      line-height: 1;
    }
    .favorite-button.is-favorite { color: var(--warn); }
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
          <span class="badge">${totalSites} sites</span>
          <span class="badge">${totalAliases} aliases</span>
          <span class="badge">Symbols: ! ; : .</span>
        </div>
      </div>
      <div class="header-actions">
        <label class="sr-only" for="theme-select">Color theme</label>
        <select id="theme-select" class="theme-select" aria-label="Color theme">
          <option value="auto">Auto</option>
          <option value="dark">Dark</option>
          <option value="light">Light</option>
          <option value="black">Black</option>
        </select>
        <label class="sr-only" for="layout-select">Page density</label>
        <select id="layout-select" class="layout-select" aria-label="Page density">
          <option value="comfortable">Comfortable</option>
          <option value="compact">Compact</option>
          <option value="minimalist">Minimalist</option>
        </select>
        <button class="icon-button" id="keyboard-shortcuts-button" type="button" aria-haspopup="dialog" aria-controls="keyboard-shortcuts" aria-label="Keyboard shortcuts" title="Keyboard shortcuts">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/OOjs_UI_icon_keyboard-progressive.svg" alt="" width="19" height="19" referrerpolicy="no-referrer">
        </button>
        ${supportControl}
        <a class="github-link" href="${escapeAttribute(PROJECT.repository)}" target="_blank" rel="noreferrer" aria-label="Open the GitHub repository" title="Open the GitHub repository">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" width="19" height="19" referrerpolicy="no-referrer">
        </a>
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
    <dialog class="dialog" id="keyboard-shortcuts" aria-labelledby="keyboard-shortcuts-title">
      <div class="dialog-body">
        <div class="dialog-heading">
          <h2 id="keyboard-shortcuts-title">Keyboard shortcuts</h2>
          <button class="dialog-close" type="button" data-close-dialog="keyboard-shortcuts" aria-label="Close keyboard shortcuts">Close</button>
        </div>
        <ul class="shortcut-list">
          <li><span>Focus or select the search box</span><kbd>/</kbd></li>
          <li><span>Open this shortcuts popup</span><kbd>?</kbd></li>
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
    <div id="groups">${groups}</div>
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
    const keyboardShortcutsDialog = document.getElementById("keyboard-shortcuts");
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
    const groups = [...document.querySelectorAll("#groups .group")];
    const sourceCards = [...document.querySelectorAll("#groups .site-card")];
    const cardsByGroup = new Map(
      groups.map((group) => [group, [...group.querySelectorAll(".site-card")]])
    );
    const sourceCardByKey = new Map(sourceCards.map((card) => [card.dataset.siteKey, card]));
    document.addEventListener("error", (event) => {
      const image = event.target;
      if (image instanceof HTMLImageElement && image.matches("[data-site-favicon]")) {
        image.hidden = true;
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
    let historyDisabled = readStorage(STORAGE.historyDisabled, "false") === "true";
    let recentSearches = historyDisabled ? [] : readRecentSearches();
    let favorites = readFavorites();
    let keyboardSelection = -1;
    function resolveTheme(preference) {
      if (preference !== "auto") return preference;
      return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    }
    function applyTheme(preference) {
      const nextPreference = ["auto", "dark", "light", "black"].includes(preference) ? preference : "auto";
      document.documentElement.dataset.theme = resolveTheme(nextPreference);
      document.documentElement.dataset.themePreference = nextPreference;
      themeSelect.value = nextPreference;
      writeStorage(STORAGE.theme, nextPreference);
    }
    function applyLayout(layout) {
      const nextLayout = ["compact", "minimalist"].includes(layout) ? layout : "comfortable";
      document.documentElement.dataset.density = nextLayout;
      layoutSelect.value = nextLayout;
      writeStorage(STORAGE.layout, nextLayout);
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
      const site = Number.isInteger(siteIndex) ? BANG_DATA.sites[siteIndex] : null;
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
      const queryTokens = query.split(/\s+/).filter(Boolean);
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
      const mathResult = parseBangInput(raw) ? null : evaluateMathExpression(raw);
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
    clearRecentSearchesButton.addEventListener("click", clearRecentSearches);
    disableHistoryButton.addEventListener("click", () => {
      disableHistoryDialog.showModal();
    });
    cancelDisableHistoryButton.addEventListener("click", () => {
      disableHistoryDialog.close();
    });
    confirmDisableHistoryButton.addEventListener("click", () => {
      disableSearchHistory();
      disableHistoryDialog.close();
    });
    keyboardShortcutsButton.addEventListener("click", () => {
      keyboardShortcutsDialog.showModal();
    });
    if (requestedAction === "shortcuts") {
      window.setTimeout(() => keyboardShortcutsDialog.showModal(), 0);
    }
    document.querySelectorAll("[data-close-dialog]").forEach((button) => {
      button.addEventListener("click", () => {
        const dialog = document.getElementById(button.dataset.closeDialog);
        if (dialog) dialog.close();
      });
    });
    [keyboardShortcutsDialog, disableHistoryDialog].forEach((dialog) => {
      dialog.addEventListener("click", (event) => {
        if (event.target === dialog) dialog.close();
      });
    });
    document.getElementById("expand-all").addEventListener("click", () => {
      setAllGroups(true);
    });
    document.getElementById("collapse-all").addEventListener("click", () => {
      setAllGroups(false);
    });
    document.addEventListener("keydown", (event) => {
      if (keyboardShortcutsDialog.open || disableHistoryDialog.open || event.defaultPrevented || event.ctrlKey || event.metaKey || event.altKey) {
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
        keyboardShortcutsDialog.showModal();
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
    p { color: var(--muted); margin: 10px 0 0; }
    .top { display: flex; justify-content: space-between; gap: 16px; align-items: flex-start; margin-bottom: 24px; }
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
        <h1>${escapeHtml(multi.name)}</h1>
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
        image.hidden = true;
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
  const favicon = faviconUrl
    ? `<img class="site-favicon" src="${escapeAttribute(faviconUrl)}" alt="" width="20" height="20" loading="lazy" decoding="async" fetchpriority="low" referrerpolicy="no-referrer" data-site-favicon>`
    : "";
  const description = site.description
    ? `<p class="site-description">${escapeHtml(site.description)}</p>`
    : "";
  return `
    <article class="site-card" data-site-key="${escapeAttribute(site.id)}" data-search="${escapeAttribute(searchText)}"${site.home ? ` title="${escapeAttribute(site.home)}"` : ""}>
      <div class="site-top">
        <div class="site-heading">
          ${favicon}
          <a class="site-name" href="${escapeAttribute(link)}" target="_blank" rel="noreferrer">${escapeHtml(site.name)}</a>
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
  if (site.handler === "virustotal" || site.search) {
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
    }
    return redirectTo(defaultEngine.search, raw);
  }
};
