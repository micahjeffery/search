const PROJECT = {
  name: "Search",
  repository: "https://github.com/micahjeffery/search",
  editMain: "https://github.com/micahjeffery/search/edit/main/src/index.js",
  editTest: "https://github.com/micahjeffery/search/edit/test/src/index.js"
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
    name: "DuckDuckGo No AI",
    paths: ["noai", "noaiddg"],
    home: "https://noai.duckduckgo.com/",
    search: "https://noai.duckduckgo.com/?q={q}"
  },
  {
    name: "Google",
    paths: ["google", "g"],
    home: "https://www.google.com/",
    search: "https://www.google.com/search?q={q}"
  },
  {
    name: "Brave Search",
    paths: ["brave", "b"],
    home: "https://search.brave.com/",
    search: "https://search.brave.com/search?q={q}"
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
// Every site uses the same shape:
//   name:    Display name used on the help page.
//   aliases: Bang words.
//   home:    Destination for a bang with no query.
//   search:  Destination for a bang with a query.
//   handler: Optional special behavior.
const SITE_GROUPS = [
  {
    category: "Project & Developer",
    sites: [
      {
        name: "Home Page",
        description: "Open this start page and the full directory of bang shortcuts.",
        aliases: ["help", "bangs", "bang", "search", "home", "commands", "shortcuts"],
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
    category: "Search Engines & AI",
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
        search: "https://www.google.com/search?tbm=nws&q={q}"
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
        name: "Duck.ai",
        description: "Open DuckDuckGo’s AI chat.",
        aliases: ["ai", "dai", "duckai"],
        home: "https://duck.ai/"
      },
      {
        name: "Brave Search",
        aliases: ["b", "brave", "brv"],
        home: "https://search.brave.com/",
        search: "https://search.brave.com/search?q={q}"
      },
      {
        name: "Brave Images",
        aliases: ["bi", "bimg", "bimage", "bimages"],
        home: "https://search.brave.com/images",
        search: "https://search.brave.com/images?q={q}"
      },
      {
        name: "Brave News",
        aliases: ["bn", "bnews"],
        home: "https://search.brave.com/news",
        search: "https://search.brave.com/news?q={q}"
      },
      {
        name: "Brave Videos",
        aliases: ["bv", "bvideo", "bvideos"],
        home: "https://search.brave.com/videos",
        search: "https://search.brave.com/videos?q={q}"
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
    category: "Reference, Research & Words",
    sites: [
      {
        name: "Wikipedia",
        aliases: ["wiki", "w", "wikipedia"],
        home: "https://en.wikipedia.org/wiki/Main_Page?vectornightmode=1",
        search: "https://en.wikipedia.org/wiki/Special:Search?search={q}&vectornightmode=1"
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
        search: "https://tosdr.org/en/search/{q}"
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
        aliases: ["wm", "walmart", "wal", "wmt"],
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
        home: "https://www.google.com/finance/"
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
        aliases: ["x", "twitter"],
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
        search: "https://www.blb.org/search/preSearch.cfm?plugin=yes&Criteria={q}&t=ESV"
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
        search: "https://mail.proton.me/u/0/almost-all-mail#keyword={q}"
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
        home: "https://talk.brave.com/"
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
const DEFAULT_ENGINE_BY_PATH = buildDefaultEngineIndex(DEFAULT_ENGINES);
const { byAlias: BANGS, conflicts: ALIAS_CONFLICTS, invalid: INVALID_ALIASES } =
  buildBangIndex(SITES);

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
function renderHelpPage(requestUrl) {
  const origin = requestUrl.origin;
  const totalAliases = BANGS.size;
  const totalSites = SITES.length;
  const issues = [...ALIAS_CONFLICTS, ...INVALID_ALIASES];

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

  const groups = SITE_GROUPS.map((group) => {
    const cards = group.sites
      .map((site) => renderSiteCard({
        ...site,
        id: String(site.aliases[0]).toLowerCase(),
        category: group.category
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
      try {
        const saved = localStorage.getItem("search-help-theme");
        document.documentElement.dataset.theme =
          ["dark", "light", "amoled"].includes(saved) ? saved : "dark";
      } catch {
        document.documentElement.dataset.theme = "dark";
      }
    })();
  </script>
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

    :root[data-theme="amoled"] {
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

    .badge, .type {
      border: 1px solid var(--border);
      border-radius: 999px;
      padding: 4px 9px;
      color: var(--muted);
      font-size: .78rem;
      white-space: nowrap;
    }

    .type.search { color: var(--good); }
    .type.open { color: var(--warn); }

    .toolbar, .defaults, .favorites, .warning {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 14px;
      box-shadow: 0 8px 24px var(--shadow);
    }

    .toolbar { padding: 14px; margin: 20px 0; }
    .search-row { display: flex; gap: 10px; align-items: stretch; }
    .search-row input { flex: 1; }

    input, .theme-select, .layout-select, .home-engine-select, .toolbar-button, .engine-card, .alias, .favorite-button {
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
    .alias:focus-visible, .favorite-button:focus-visible, .site-name:focus-visible, .github-link:focus-visible {
      outline: 3px solid color-mix(in srgb, var(--accent) 45%, transparent);
      outline-offset: 2px;
    }

    .search-button, .toolbar-button, .theme-select, .layout-select, .home-engine-select {
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
    .toolbar-button:hover, .theme-select:hover, .layout-select:hover, .home-engine-select:hover, .engine-card:hover, .alias:hover, .favorite-button:hover, .github-link:hover {
      border-color: var(--accent);
    }

    .theme-select, .layout-select, .home-engine-select { min-height: 36px; }

    .control-label {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      color: var(--muted);
      font-size: .84rem;
      white-space: nowrap;
    }

    .github-link {
      display: grid;
      place-items: center;
      width: 36px;
      height: 36px;
      border: 1px solid var(--border);
      border-radius: 9px;
      color: var(--text);
      background: var(--surface-2);
    }

    .github-link svg { width: 19px; height: 19px; fill: currentColor; }

    :root[data-density="compact"] main { padding: 18px 14px 34px; }
    :root[data-density="compact"] header { gap: 12px; margin-bottom: 14px; }
    :root[data-density="compact"] .badges { margin-top: 9px; }
    :root[data-density="compact"] .toolbar { padding: 10px; margin: 12px 0; }
    :root[data-density="compact"] .toolbar-actions { margin-top: 8px; }
    :root[data-density="compact"] .favorites { padding: 12px; margin: 12px 0; }
    :root[data-density="compact"] .defaults { display: none; }
    :root[data-density="compact"] .group { margin: 16px 0; }
    :root[data-density="compact"] .engine-grid, :root[data-density="compact"] .site-grid { gap: 8px; }
    :root[data-density="compact"] .site-card { padding: 10px; }
    :root[data-density="compact"] .site-description { margin-top: 6px; }
    :root[data-density="compact"] .aliases { margin-top: 8px; }
    :root[data-density="compact"] .site-url { margin-top: 9px; }
    :root[data-density="compact"] .footer { margin-top: 24px; }


    .favorites { padding: 16px; margin: 20px 0; }
    .section-heading, .defaults summary {
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 0;
      color: var(--text);
    }

    .section-heading { justify-content: space-between; }
    .favorites-count { color: var(--muted); font-size: .84rem; font-weight: 400; }

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
    .site-name { color: var(--text); font-weight: 750; text-decoration: none; }
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
          <option value="dark">Dark</option>
          <option value="light">Light</option>
          <option value="amoled">AMOLED</option>
        </select>
        <label class="sr-only" for="layout-select">Page density</label>
        <select id="layout-select" class="layout-select" aria-label="Page density">
          <option value="comfortable">Comfortable</option>
          <option value="compact">Compact</option>
        </select>
        <a class="github-link" href="${escapeAttribute(PROJECT.repository)}" target="_blank" rel="noreferrer" aria-label="Open the GitHub repository" title="Open the GitHub repository">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .7a11.3 11.3 0 0 0-3.57 22.02c.57.1.77-.25.77-.55v-2.15c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.26-1.65-1.26-1.65-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.51-.29-5.15-1.26-5.15-5.59 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.11 1.16A10.8 10.8 0 0 1 12 5.2c.96 0 1.93.13 2.84.38 2.16-1.47 3.1-1.16 3.1-1.16.62 1.55.24 2.69.12 2.98.72.79 1.16 1.8 1.16 3.03 0 4.34-2.65 5.29-5.17 5.57.4.35.77 1.03.77 2.08v3.1c0 .3.2.66.78.55A11.3 11.3 0 0 0 12 .7Z"/></svg>
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
          placeholder="Search DuckDuckGo or filter bangs…"
          autofocus
        >
        <button class="search-button" type="submit">Search</button>
      </div>

      <div class="toolbar-actions">
        <label class="control-label" for="home-engine-select">
          <span>Search with</span>
          <select id="home-engine-select" class="home-engine-select" aria-label="Home page search engine">${homeEngineOptions}</select>
        </label>

        <div class="toolbar-actions-right">
          <button class="toolbar-button" id="expand-all" type="button" title="Expand all groups (])">Expand</button>
          <button class="toolbar-button" id="collapse-all" type="button" title="Collapse all groups ([)">Collapse</button>
        </div>
      </div>
    </form>

    <section class="favorites" id="favorites" hidden>
      <div class="section-heading">
        <h2>Favorites</h2>
        <span id="favorites-count" class="favorites-count"></span>
      </div>
      <p>Favorites are saved only in this browser.</p>
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
    <p class="footer">Click a bang to place it in the search box. Click ☆ to save a favorite. Your theme, layout, home search engine, favorites, and default-search section state stay on this browser and device.</p>
  </main>

  <script>
    const STORAGE = {
      theme: "search-help-theme",
      layout: "search-help-layout",
      homeEngine: "search-help-home-engine",
      defaultsOpen: "search-help-defaults-open",
      favorites: "search-help-favorites"
    };

    const HOME_ENGINE_PATHS = ${JSON.stringify(homeEnginePaths)};
    const filter = document.getElementById("filter");
    const searchForm = document.getElementById("search-form");
    const homeEngineSelect = document.getElementById("home-engine-select");
    function updateSearchPlaceholder() {
      const engineName =
        homeEngineSelect.selectedOptions[0]?.textContent.trim() || "DuckDuckGo";

      filter.placeholder = "Filter bangs or search " + engineName + "…";
    }
    const defaults = document.getElementById("defaults");
    const groups = [...document.querySelectorAll("#groups .group")];
    const sourceCards = [...document.querySelectorAll("#groups .site-card")];
    const sourceCardByKey = new Map(sourceCards.map((card) => [card.dataset.siteKey, card]));
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

    function readFavorites() {
      try {
        const parsed = JSON.parse(readStorage(STORAGE.favorites, "[]"));
        if (!Array.isArray(parsed)) return [];
        return [...new Set(parsed.filter((key) => sourceCardByKey.has(key)))];
      } catch {
        return [];
      }
    }

    let favorites = readFavorites();

    function applyTheme(theme) {
      const nextTheme = ["dark", "light", "amoled"].includes(theme) ? theme : "dark";
      document.documentElement.dataset.theme = nextTheme;
      themeSelect.value = nextTheme;
      writeStorage(STORAGE.theme, nextTheme);
    }

    function applyLayout(layout) {
      const nextLayout = layout === "compact" ? "compact" : "comfortable";
      document.documentElement.dataset.density = nextLayout;
      layoutSelect.value = nextLayout;
      writeStorage(STORAGE.layout, nextLayout);
    }

    function applyHomeEngine(path) {
      const nextPath = HOME_ENGINE_PATHS.includes(path) ? path : "";
      homeEngineSelect.value = nextPath;
      searchForm.action = nextPath ? "/" + nextPath + "/" : "/";
      writeStorage(STORAGE.homeEngine, nextPath);
    }

    applyTheme(readStorage(STORAGE.theme, document.documentElement.dataset.theme || "dark"));
    applyLayout(readStorage(STORAGE.layout, "comfortable"));
    applyHomeEngine(readStorage(STORAGE.homeEngine, ""));
    updateSearchPlaceholder();

    themeSelect.addEventListener("change", () => {
      applyTheme(themeSelect.value);
    });

    layoutSelect.addEventListener("change", () => {
      applyLayout(layoutSelect.value);
    });

    homeEngineSelect.addEventListener("change", () => {
      applyHomeEngine(homeEngineSelect.value);
      updateSearchPlaceholder();
    });

    const storedDefaultsOpen = readStorage(STORAGE.defaultsOpen, null);
    if (storedDefaultsOpen !== null) {
      defaults.open = storedDefaultsOpen === "true";
    }

    defaults.addEventListener("toggle", () => {
      writeStorage(STORAGE.defaultsOpen, String(defaults.open));
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

    function applyFilter() {
      const query = filter.value
        .trim()
        .toLowerCase()
        .replace(/[!;:.]/g, "");

      defaults.hidden = query.length > 0;

      let visible = 0;
      sourceCards.forEach((card) => {
        const matches = !query || card.dataset.search.includes(query);
        card.hidden = !matches;
        if (matches) visible += 1;
      });

      groups.forEach((group) => {
        const hasVisibleCard = [...group.querySelectorAll(".site-card")].some((card) => !card.hidden);
        group.hidden = !hasVisibleCard;
        if (query && hasVisibleCard) group.open = true;
      });

      const favoriteCards = [...favoritesGrid.querySelectorAll(".site-card")];
      let visibleFavorites = 0;
      favoriteCards.forEach((card) => {
        const matches = !query || card.dataset.search.includes(query);
        card.hidden = !matches;
        if (matches) visibleFavorites += 1;
      });

      favoritesSection.hidden = favorites.length === 0 || (query.length > 0 && visibleFavorites === 0);
      empty.style.display = visible ? "none" : "block";
    }

    function putBangInSearch(bang) {
      filter.value = bang + " ";
      filter.focus();
      filter.setSelectionRange(filter.value.length, filter.value.length);
      applyFilter();
    }

    function isTypingTarget(target) {
      return target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement ||
        target?.isContentEditable;
    }

    filter.addEventListener("input", applyFilter);

    document.getElementById("expand-all").addEventListener("click", () => {
      setAllGroups(true);
    });

    document.getElementById("collapse-all").addEventListener("click", () => {
      setAllGroups(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.defaultPrevented || event.ctrlKey || event.metaKey || event.altKey || isTypingTarget(event.target)) {
        return;
      }

      if (event.key === "/") {
        event.preventDefault();
        filter.focus();
        filter.select();
      } else if (event.key === "[") {
        event.preventDefault();
        setAllGroups(false);
      } else if (event.key === "]") {
        event.preventDefault();
        setAllGroups(true);
      }
    });

    document.addEventListener("click", async (event) => {
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
  </script>
</body>
</html>`;

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store"
    }
  });
}

function renderSiteCard(site) {
  const aliases = site.aliases
    .map((alias) => `<button class="alias" type="button" data-bang=";${escapeAttribute(alias)}" title="Use ;${escapeAttribute(alias)} in the search box">;${escapeHtml(alias)}</button>`)
    .join("");

  const type = getSiteType(site);
  const searchText = [
    site.name,
    site.description || "",
    site.category || "",
    ...site.aliases,
    site.home || ""
  ].join(" ").toLowerCase();

  const link = site.home || "#";
  const description = site.description
    ? `<p class="site-description">${escapeHtml(site.description)}</p>`
    : "";

  return `
    <article class="site-card" data-site-key="${escapeAttribute(site.id)}" data-search="${escapeAttribute(searchText)}">
      <div class="site-top">
        <a class="site-name" href="${escapeAttribute(link)}" target="_blank" rel="noreferrer">${escapeHtml(site.name)}</a>
        <div class="site-actions">
          <span class="type ${type.className}">${type.label}</span>
          <button class="favorite-button" type="button" data-favorite="${escapeAttribute(site.id)}" aria-label="Add to favorites" aria-pressed="false" title="Add to favorites">☆</button>
        </div>
      </div>
      ${description}
      <div class="aliases">${aliases}</div>
      ${site.home ? `<a class="site-url" href="${escapeAttribute(site.home)}" target="_blank" rel="noreferrer">${escapeHtml(site.home)}</a>` : ""}
    </article>`;
}

function getSiteType(site) {
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
    if (shortcut) {
      const site = BANGS.get(shortcut.bang);
      if (site) {
        return handleSite(site, shortcut.query, url);
      }
    }

    return redirectTo(defaultEngine.search, raw);
  }
};
