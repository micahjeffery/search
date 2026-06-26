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
        name: "Bangs & Help",
        aliases: ["help", "bangs", "bang", "search", "home", "commands", "shortcuts"],
        home: "https://search.micahjeffery.com/"
      },
      {
        name: "Search Project",
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
      },
      {
        name: "Cloudflare Dashboard",
        aliases: ["cf", "cloudflare"],
        home: "https://dash.cloudflare.com/"
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
        name: "Duck.ai",
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
        aliases: ["pubmed", "pub", "med"],
        home: "https://pubmed.ncbi.nlm.nih.gov/",
        search: "https://pubmed.ncbi.nlm.nih.gov/?term={q}"
      },
      {
        name: "OneLook",
        aliases: ["o", "onelook", "1", "1l", "1look"],
        home: "https://www.onelook.com/",
        search: "https://www.onelook.com/?w={q}"
      },
      {
        name: "Merriam-Webster dictionary",
        aliases: ["def", "word", "mw", "definition", "webster", "dict", "dic", "dictionary"],
        home: "https://www.merriam-webster.com/dictionary",
        search: "https://www.merriam-webster.com/dictionary/{q}"
      },
      {
        name: "Merriam-Webster Thesaurus",
        aliases: ["thesaurus", "thes", "syn", "synonym"],
        home: "https://www.merriam-webster.com/thesaurus",
        search: "https://www.merriam-webster.com/thesaurus/{q}"
      },
      {
        name: "Merriam-Webster Scrabble Finder",
        aliases: ["scrabble", "scrab", "words", "wordfinder", "bg", "bananagram"],
        home: "https://scrabble.merriam.com/word-lists",
        search: "https://scrabble.merriam.com/finder/{q}"
      },
      {
        name: "Urban Dictionary",
        aliases: ["u", "ud", "urban", "urbandictionary"],
        home: "https://www.urbandictionary.com/",
        search: "https://www.urbandictionary.com/define.php?term={q}"
      },
      {
        name: "How Long to Read",
        aliases: ["hltr", "howlongtoread", "readtime"],
        home: "https://howlongtoread.com/",
        search: "https://howlongtoread.com/results/{q}"
      },
      {
        name: "ToS;DR",
        aliases: ["tosdr", "tos"],
        home: "https://tosdr.org/en",
        search: "https://tosdr.org/en/search/{q}"
      },
      {
        name: "23andMe Surname Discovery tool",
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
        name: "Facebook Marketplace",
        aliases: ["fbm", "fbmarket", "marketplace", "facebookmarketplace"],
        home: "https://www.facebook.com/marketplace/",
        search: "https://www.facebook.com/marketplace/search/?query={q}"
      },
      {
        name: "CamelCamelCamel",
        aliases: ["c", "ccc", "camel", "camelcamelcamel"],
        home: "https://camelcamelcamel.com/",
        search: "https://camelcamelcamel.com/search?sq={q}"
      },
      {
        name: "Eneba",
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
        name: "Walmart",
        aliases: ["wm", "walmart", "wal"],
        home: "https://www.walmart.com/",
        search: "https://www.walmart.com/search?q={q}"
      },
      {
        name: "Zillow",
        aliases: ["z", "zillow"],
        home: "https://www.zillow.com/",
        search: "https://www.zillow.com/homes/{q}_rb/"
      },
      {
        name: "CarCareKiosk",
        aliases: ["car", "carcare", "carcarekiosk"],
        home: "https://www.carcarekiosk.com/",
        search: "https://www.carcarekiosk.com/search?q={q}"
      },
      {
        name: "AppliancePartsPros",
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
        aliases: ["fred", "stlouisfed"],
        home: "https://fred.stlouisfed.org/",
        search: "https://fred.stlouisfed.org/searchresults?st={q}"
      },
      {
        name: "Federal Funds Rate",
        aliases: ["fed", "ffr", "rate", "fedfunds"],
        home: "https://fred.stlouisfed.org/series/fedfunds"
      },
      {
        name: "Inflation Chart",
        aliases: ["inflation", "in"],
        home: "https://fred.stlouisfed.org/graph/?g=1wmdD"
      },
      {
        name: "Investopedia",
        aliases: ["investopedia", "invest"],
        home: "https://www.investopedia.com/",
        search: "https://www.investopedia.com/search?q={q}"
      },
      {
        name: "Monument Metals",
        aliases: ["monument", "monumentmetals", "mm"],
        home: "https://monumentmetals.com/",
        search: "https://monumentmetals.com/search.html?query={q}"
      },
      {
        name: "APMEX & Spot Prices",
        aliases: ["apmex", "spot", "metals", "pmspot"],
        home: "https://www.apmex.com/gold-and-silver-price-charts",
        search: "https://www.apmex.com/search?q={q}"
      },
      {
        name: "Gold Price",
        aliases: ["gld", "gold", "apmexgold"],
        home: "https://www.apmex.com/gold-price"
      },
      {
        name: "Silver Price",
        aliases: ["slv", "silver", "apmexsilver"],
        home: "https://www.apmex.com/silver-price"
      },
      {
        name: "Treasury Bills / SGOV",
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
        aliases: ["sec", "edgar", "10k", "10-k"],
        home: "https://www.sec.gov/edgar/search/",
        search: "https://www.sec.gov/edgar/search/#/q={q}&filter_forms=10-K"
      },
      {
        name: "Estate Tax",
        aliases: ["death", "estate", "estatetax"],
        home: "https://www.irs.gov/businesses/small-businesses-self-employed/estate-tax"
      },
      {
        name: "IRA Contribution Limits",
        aliases: ["ira", "contribution"],
        home: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-ira-contribution-limits"
      },
      {
        name: "Capital Gains Tax",
        aliases: ["ltcg", "capitalgains"],
        home: "https://www.nerdwallet.com/taxes/learn/capital-gains-tax-rates#:~:text=Taxes%20on%20stocks-,Capital%20gains%20tax%20rate%202026,-The%20following%20rates"
      },
      {
        name: "Standard Deduction",
        aliases: ["standard", "std", "deduction"],
        home: "https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2026-including-amendments-from-the-one-big-beautiful-bill#:~:text=standard%20deduction%20is%20%2423%2C625"
      },
      {
        name: "Tariff Tracker",
        aliases: ["tariff", "tariffs", "tarrif", "tarif", "tarriff"],
        home: "https://bipartisanpolicy.org/explainer/tariff-tracker/"
      },
      {
        name: "Federal Tax Brackets",
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
        aliases: ["lyr", "lyrics", "lyric", "genius"],
        home: "https://genius.com/",
        search: "https://genius.com/search?q={q}"
      },
      {
        name: "AZLyrics",
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
        aliases: ["lb", "letterboxd"],
        home: "https://letterboxd.com/",
        search: "https://letterboxd.com/search/{q}/"
      },
      {
        name: "JustWatch",
        aliases: ["jw", "justwatch"],
        home: "https://www.justwatch.com/",
        search: "https://www.justwatch.com/us/search?q={q}"
      },
      {
        name: "TubiTV",
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
        aliases: ["hlb", "beat", "hltb", "howlongtobeat"],
        home: "https://howlongtobeat.com/",
        search: "https://howlongtobeat.com/?q={q}"
      },
      {
        name: "IsThereAnyDeal",
        aliases: ["itad", "isthereanydeal", "deal"],
        home: "https://isthereanydeal.com/",
        search: "https://isthereanydeal.com/search/?q={q}"
      },
      {
        name: "Before I Play",
        aliases: ["beforeiplay", "bip"],
        home: "https://beforeiplay.com/",
        search: "https://beforeiplay.com/index.php?search={q}&title=Special%3ASearch&go=Go"
      },
      {
        name: "ProtonDB",
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
        aliases: ["namemc", "mcname", "mcskin"],
        home: "https://namemc.com/",
        search: "https://namemc.com/search?q={q}"
      },
      {
        name: "PCPartPicker",
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
        aliases: ["printables", "print", "prusa", "prusaprinters"],
        home: "https://www.printables.com/",
        search: "https://www.printables.com/search/models?q={q}"
      },
      {
        name: "MakerWorld",
        aliases: ["maker", "makerworld"],
        home: "https://makerworld.com/en",
        search: "https://makerworld.com/en/search/models?keyword={q}"
      },
      {
        name: "Thingiverse",
        aliases: ["thing", "thingiverse"],
        home: "https://www.thingiverse.com/",
        search: "https://www.thingiverse.com/search?q={q}&type=things"
      },
      {
        name: "Cults3D",
        aliases: ["cults", "cults3d"],
        home: "https://cults3d.com/en",
        search: "https://cults3d.com/en/search?q={q}"
      },
      {
        name: "Texturelabs",
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
        aliases: ["strengthlevel", "sl", "strength"],
        home: "https://strengthlevel.com/",
        search: "https://strengthlevel.com/strength-standards/{q}"
      },
      {
        name: "Symmetric Strength",
        aliases: ["symmetric", "sym"],
        home: "https://symmetricstrength.com/"
      },
      {
        name: "Stronger by Science",
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
        aliases: ["blb", "bible", "blbesv", "esv"],
        home: "https://www.blueletterbible.org/esv/jhn/1/1/",
        search: "https://www.blb.org/search/preSearch.cfm?plugin=yes&Criteria={q}&t=ESV"
      },
      {
        name: "Blue Letter Bible — LSB",
        aliases: ["lsb", "blblsb"],
        home: "https://www.blueletterbible.org/lsb/jhn/1/1/",
        search: "https://www.blb.org/search/preSearch.cfm?plugin=yes&Criteria={q}&t=LSB"
      },
      {
        name: "Blue Letter Bible — NIV",
        aliases: ["niv", "blbniv"],
        home: "https://www.blueletterbible.org/niv/jhn/1/1/",
        search: "https://www.blb.org/search/preSearch.cfm?plugin=yes&Criteria={q}&t=NIV"
      },
      {
        name: "Blue Letter Bible — KJV",
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
        aliases: ["voice", "gvo", "gvoice", "gvmail"],
        home: "https://voice.google.com/u/1/",
        search: "https://voice.google.com/u/1/search?from=%5B%5D&q=%5B%22{q}%22%5D"
      },
      {
        name: "OneDrive",
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
        aliases: ["spa", "techlore"],
        home: "https://tools.techlore.tech/",
        search: "https://www.youtube.com/@techlore/search?query={q}"
      },
      {
        name: "Proton Mail",
        aliases: ["pm", "protonmail"],
        home: "https://mail.proton.me/",
        search: "https://mail.proton.me/u/0/almost-all-mail#keyword={q}"
      },
      {
        name: "Proton Drive",
        aliases: ["pd", "protondrive"],
        home: "https://drive.proton.me/",
        search: "https://drive.proton.me/u/0/search#q={q}"
      },
      {
        name: "Proton Pass",
        aliases: ["pp", "pass", "password"],
        home: "https://pass.proton.me/u/19",
        search: "https://pass.proton.me/u/19/search#q={q}"
      },
      {
        name: "Proton Calendar",
        aliases: ["pc", "cal", "calendar"],
        home: "https://calendar.proton.me/",
        search: "https://calendar.proton.me/u/0/search#q={q}"
      },
      {
        name: "Proton Docs",
        aliases: ["pdoc", "pdocs", "protondocs"],
        home: "https://docs.proton.me/",
        search: "https://docs.proton.me/u/0/search#q={q}"
      },
      {
        name: "Proton",
        aliases: ["p", "proton"],
        home: "https://micahjeffery.com/proton/"
      },
      {
        name: "Proton Meet",
        aliases: ["meet", "pmeet", "protonmeet"],
        home: "https://meet.proton.me/"
      },
      {
        name: "Brave Talk",
        aliases: ["talk", "btalk", "bravetalk"],
        home: "https://talk.brave.com/"
      },
      {
        name: "Bitwarden",
        aliases: ["bw", "bitwarden"],
        home: "https://bitwarden.com/",
        search: "https://vault.bitwarden.com/#/vault?search={q}"
      },
      {
        name: "NextDNS",
        aliases: ["dns", "nextdns", "ndns"],
        home: "https://my.nextdns.io/"
      },
      {
        name: "Signal",
        aliases: ["signal"],
        home: "https://signal.org/download/"
      },
      {
        name: "Ente Auth",
        aliases: ["ente", "ea", "auth"],
        home: "https://auth.ente.com/auth"
      },
      {
        name: "Privacy.com",
        aliases: ["privacy", "virtualcards", ],
        home: "https://app.privacy.com/home"
      },
      {
        name: "VirusTotal Domain Lookup",
        aliases: ["virus", "vt", "virustotal"],
        home: "https://www.virustotal.com/gui/home/url",
        handler: "virustotal"
      },
      {
        name: "Have I Been Pwned",
        aliases: ["hibp", "pwned", "haveibeenpwned"],
        home: "https://haveibeenpwned.com/",
        search: "https://haveibeenpwned.com/account/{q}"
      },
      {
        name: "ICANN Lookup",
        aliases: ["icann", "whois", "ican"],
        home: "https://lookup.icann.org/en",
        search: "https://lookup.icann.org/whois/en?q={q}&t=a"
      },
      {
        name: "Cloudflare Domains",
        aliases: ["domain", "dom", "domains", "cfd", "cloudflaredomains"],
        home: "https://domains.cloudflare.com/",
        search: "https://domains.cloudflare.com/?domain={q}"
      },
      {
        name: "Tuta Mail",
        aliases: ["tuta", "tm", "tutamail"],
        home: "https://www.guerrillamail.com/inbox"
      },
      {
        name: "Guerrilla Mail",
        aliases: ["spam", "temp", "guerrilla"],
        home: "https://www.guerrillamail.com/inbox"
      }
    ]
  },
  {
    category: "Creative & Utilities",
    sites: [
      {
        name: "Caption Ninja",
        aliases: ["caption", "cap"],
        home: "https://caption.ninja/"
      },
      {
        name: "Case Converter",
        aliases: ["case"],
        home: "https://it-tools.tech/case-converter"
      },
      {
        name: "Coolors",
        aliases: ["color", "coolors"],
        home: "https://coolors.co/?home"
      },
      {
        name: "Cursors",
        aliases: ["cursor", "cursors"],
        home: "https://github.com/wrinkdater/Posys-Cursors-Improved-by-wrinkdater"
      },
      {
        name: "Cobalt Downloader",
        aliases: ["download", "cobalt"],
        home: "https://cobalt.tools/"
      },
      {
        name: "Excalidraw",
        aliases: ["draw", "excalidraw"],
        home: "https://excalidraw.com/"
      },
      {
        name: "MindMup",
        aliases: ["mindmap", "mup"],
        home: "https://app.mindmup.com/map/new"
      },
      {
        name: "Diagram.net",
        aliases: ["dia", "diagram"],
        home: "https://app.diagrams.net/"
      },
      {
        name: "Blank Page",
        aliases: ["page", "blank", "bp"],
        home: "https://blank.page"
      },
      {
        name: ".ics / iCal editor",
        aliases: ["ics", "ical"],
        home: "https://giga.tools/data-tools/ical-event-file-creator"
      },
      {
        name: "Photopea",
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
        aliases: ["jpeg", "compress"],
        home: "https://jpeg-optimizer.com/"
      },
      {
        name: "Image Extractor",
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
        aliases: ["face", "unicode"],
        home: "https://textfac.es/"
      },
      
      {
        name: "Wormhole File Transfer",
        aliases: ["file", "wh", "worm", "transfer", "transf", "wormhole"],
        home: "https://wormhole.app/"
      },
      {
        name: "WhatFontIs",
        aliases: ["font", "whatfont"],
        home: "https://www.whatfontis.com/"
      },
      {
        name: "VDO.Ninja",
        aliases: ["vdo", "obs"],
        home: "https://vdo.ninja/"
      },
      {
        name: "OnlineOCR",
        aliases: ["ocr"],
        home: "https://www.onlineocr.net/"
      },
      {
        name: "TinyWow PDF Tools",
        aliases: ["pdf"],
        home: "https://tinywow.com/tools/pdf"
      },
      {
        name: "QuickChart QR Generator",
        aliases: ["qr", "qrcode"],
        home: "https://quickchart.io/qr-code-api/",
        search: "https://quickchart.io/qr?text={q}"
      },
      {
        name: "ZXing QR Decoder",
        aliases: ["qrdecode", "qrd"],
        home: "https://zxing.org/w/decode.jspx", 
        search: "https://zxing.org/w/decode?u={q}" 
      },
      {
        name: "Wayback Machine",
        aliases: ["wb", "wbm", "archive", "wayback"],
        home: "https://web.archive.org/",
        search: "https://web.archive.org/web/*/{q}"
      },
      {
        name: "Receive SMS",
        aliases: ["sms"],
        home: "https://receive-sms.cc/"
      },
      {
        name: "Fast.com",
        aliases: ["test", "speed", "fast"],
        home: "https://fast.com/"
      },
      {
        name: "Text Statistics",
        aliases: ["text"],
        home: "https://it-tools.tech/text-statistics"
      },
      {
        name: "Upscale.media",
        aliases: ["upscale"],
        home: "https://www.upscale.media/upload"
      },
      {
        name: "Wallhaven",
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
        aliases: ["type", "mt", "monkey"],
        home: "https://monkeytype.com/"
      },
      {
        name: "Agile Fingers",
        aliases: ["af", "agile", "agilefingers"],
        home: "https://agilefingers.com/custom-texts"
      },
      {
        name: "Seterra",
        aliases: ["geo", "set", "seterra", "settera", "geography", ],
        home: "https://www.geoguessr.com/quiz/seterra"
      },
      {
        name: "AnkiWeb",
        aliases: ["anki", "flashcards"],
        home: "https://ankiweb.net/decks",
        search: "https://ankiweb.net/shared/decks?search={q}"
      },
      {
        name: "Language Squad",
        aliases: ["language", "ls", "languagesquad"],
        home: "https://www.languagesquad.com/"
      },
      {
        name: "EthnoGuessr",
        aliases: ["ethno", "race", "ethnicity", "ethnogussr", "hbd"],
        home: "https://hbd.gg/"
      },
      {
        name: "Justin Guitar",
        aliases: ["guitar", "jg","justinguitar"],
        home: "https://www.justinguitar.com/",
        search: "https://www.justinguitar.com/advanced_search?q={q}"
      },
      {
        name: "OpenCourseWare - MIT courses",
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
const SITES = SITE_GROUPS.flatMap((group) =>
  group.sites.map((site) => ({ ...site, category: group.category }))
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
  return redirectTo(`https://www.virustotal.com/gui/domain/${encodeURIComponent(domain)}`);
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
  if (site.handler === "help") {
    return renderHelpPage(requestUrl);
  }
  if (site.handler === "virustotal") {
    return query ? handleVirusTotalLookup(query) : redirectTo(site.home);
  }
  if (query && site.search) {
    return redirectTo(site.search, query);
  }
  return redirectTo(site.home);
}
// -----------------------------------------------------------------------------
// 6. AUTOMATIC HELP PAGE
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
      <button class="engine-card copyable" type="button" data-copy="${escapeAttribute(searchUrl)}">
        <span>${escapeHtml(engine.name)}</span>
        <code>${escapeHtml(searchUrl)}</code>
      </button>`;
  }).join("");
  const groups = SITE_GROUPS.map((group) => {
    const cards = group.sites.map((site) => renderSiteCard(site)).join("");
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
  <title>${escapeHtml(PROJECT.name)} Bangs</title>
  <style>
    :root {
      color-scheme: dark;
      --bg: #101114;
      --panel: #191b20;
      --panel-2: #22252c;
      --border: #323640;
      --text: #eef0f4;
      --muted: #a7adb9;
      --accent: #8ab4ff;
      --good: #83d49b;
      --warn: #ffca70;
      --info: #c9a7ff;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      background: var(--bg);
      color: var(--text);
      font: 16px/1.45 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }
    main { max-width: 1280px; margin: 0 auto; padding: 36px 20px 64px; }
    header { display: flex; gap: 20px; align-items: flex-start; justify-content: space-between; margin-bottom: 24px; }
    h1 { margin: 0; font-size: clamp(2rem, 5vw, 3rem); line-height: 1.05; }
    h2 { margin: 0; font-size: 1.15rem; }
    p { color: var(--muted); margin: 10px 0 0; }
    a { color: var(--accent); }
    .badges { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; }
    .badge, .type { border: 1px solid var(--border); border-radius: 999px; padding: 4px 9px; color: var(--muted); font-size: .78rem; white-space: nowrap; }
    .type.search { color: var(--good); }
    .type.open { color: var(--warn); }
    .type.help { color: var(--info); }
    .toolbar, .defaults, .warning { background: var(--panel); border: 1px solid var(--border); border-radius: 14px; }
    .toolbar { padding: 14px; margin: 20px 0; }
    .toolbar-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
    .toolbar-button {
      appearance: none; border: 1px solid var(--border); border-radius: 8px; background: var(--panel-2);
      color: var(--text); padding: 7px 10px; font: inherit; font-size: .85rem; cursor: pointer;
    }
    .toolbar-button:hover { border-color: var(--accent); }
    input {
      width: 100%; padding: 13px 14px; border: 1px solid var(--border); border-radius: 10px;
      background: var(--bg); color: var(--text); font: inherit;
    }
    .defaults { padding: 16px; margin: 20px 0 30px; }
    .defaults h2 { margin-bottom: 10px; }
    .engine-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(235px, 1fr)); gap: 10px; }
    .engine-card {
      display: flex; flex-direction: column; gap: 4px; padding: 10px; border: 1px solid var(--border);
      border-radius: 10px; background: var(--panel-2); color: var(--text); text-align: left; cursor: pointer;
    }
    .engine-card:hover, .alias:hover { border-color: var(--accent); }
    code { color: #c9d7ff; font: .8rem ui-monospace, SFMono-Regular, Menlo, monospace; overflow-wrap: anywhere; }
    .group { margin: 28px 0; }
    .group-title {
      display: flex; align-items: center; gap: 10px; margin-bottom: 10px; cursor: pointer;
      list-style: none; user-select: none;
    }
    .group-title::-webkit-details-marker { display: none; }
    .group-title::before { content: "▾"; color: var(--muted); transition: transform .15s ease; }
    .group:not([open]) .group-title::before { transform: rotate(-90deg); }
    .group-title span { color: var(--muted); font-size: .85rem; }
    .group:not([open]) .group-title { margin-bottom: 0; }
    .site-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(245px, 1fr)); gap: 10px; }
    .site-card { padding: 14px; background: var(--panel); border: 1px solid var(--border); border-radius: 12px; }
    .site-top { display: flex; gap: 10px; justify-content: space-between; align-items: flex-start; }
    .site-name { color: var(--text); font-weight: 700; text-decoration: none; }
    .aliases { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 11px; }
    .alias {
      appearance: none; border: 1px solid var(--border); border-radius: 7px; background: var(--panel-2);
      color: var(--text); padding: 4px 7px; font: .78rem ui-monospace, SFMono-Regular, Menlo, monospace; cursor: pointer;
    }
    .site-url { display: block; margin-top: 12px; color: var(--muted); font-size: .77rem; overflow-wrap: anywhere; text-decoration: none; }
    .warning { padding: 12px 14px; color: var(--warn); margin-bottom: 20px; }
    .empty { display: none; color: var(--muted); margin: 30px 0; }
    .footer { margin-top: 42px; color: var(--muted); font-size: .9rem; }
    @media (max-width: 650px) { header { flex-direction: column; } main { padding-top: 25px; } }
  </style>
</head>
<body>
  <main>
    <header>
      <div>
        <h1>${escapeHtml(PROJECT.name)} Bangs</h1>
        <p>Type <code>;help</code> — or just <code>;</code> — in the address bar any time to return here. Click a bang or default-search URL to copy it.</p>
        <div class="badges">
          <span class="badge">${totalSites} sites</span>
          <span class="badge">${totalAliases} aliases</span>
          <span class="badge">Symbols: ! ; : .</span>
        </div>
      </div>
      <a href="${escapeAttribute(PROJECT.repository)}" target="_blank" rel="noreferrer">Repository ↗</a>
    </header>
    ${warning}
    <div class="toolbar">
      <input id="filter" type="search" autocomplete="off" placeholder="Filter by name, alias, or category…" autofocus>
      <div class="toolbar-actions">
        <button class="toolbar-button" id="expand-all" type="button">Expand all</button>
        <button class="toolbar-button" id="collapse-all" type="button">Collapse all</button>
      </div>
    </div>
    <details class="defaults" id="defaults" open>
      <summary>Browser default-search URLs</summary>
      <p>Click one to copy it. Go to Settings > Search Engine > Add custom search engine, paste it and make it the default.</p>
      <div class="engine-grid">${engineCards}</div>
    </details>
    <div id="empty" class="empty">No bangs match that filter.</div>
    <div id="groups">${groups}</div>
    <p class="footer">footer</p>
  </main>
  <script>
    const filter = document.getElementById("filter");
    const groups = [...document.querySelectorAll(".group")];
    const cards = [...document.querySelectorAll(".site-card")];
    const empty = document.getElementById("empty");
    filter.addEventListener("input", () => {
      const query = filter.value.trim().toLowerCase();
      document.getElementById("defaults").hidden = query.length > 0;
      let visible = 0;
      cards.forEach((card) => {
        const matches = !query || card.dataset.search.includes(query);
        card.hidden = !matches;
        if (matches) visible += 1;
      });
      groups.forEach((group) => {
        const hasVisibleCard = [...group.querySelectorAll(".site-card")].some((card) => !card.hidden);
        group.hidden = !hasVisibleCard;
        if (query && hasVisibleCard) group.open = true;
      });
      empty.style.display = visible ? "none" : "block";
    });
    document.getElementById("expand-all").addEventListener("click", () => {
      groups.forEach((group) => { group.open = true; });
    });
    document.getElementById("collapse-all").addEventListener("click", () => {
      groups.forEach((group) => { group.open = false; });
    });
    document.addEventListener("click", async (event) => {
      const target = event.target.closest("[data-copy]");
      if (!target) return;
      const text = target.dataset.copy;
      try {
        await navigator.clipboard.writeText(text);
        const original = target.textContent;
        target.textContent = "Copied";
        setTimeout(() => { target.textContent = original; }, 900);
      } catch {
        window.prompt("Copy this:", text);
      }
    });
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
    .map((alias) => `<button class="alias" type="button" data-copy=";${escapeAttribute(alias)}">;${escapeHtml(alias)}</button>`)
    .join("");
  const type = getSiteType(site);
  const searchText = [site.name, site.category, ...site.aliases, site.home || ""].join(" ").toLowerCase();
  const link = site.home || "#";
  return `
    <article class="site-card" data-search="${escapeAttribute(searchText)}">
      <div class="site-top">
        <a class="site-name" href="${escapeAttribute(link)}" target="_blank" rel="noreferrer">${escapeHtml(site.name)}</a>
        <span class="type ${type.className}">${type.label}</span>
      </div>
      <div class="aliases">${aliases}</div>
      ${site.home ? `<a class="site-url" href="${escapeAttribute(site.home)}" target="_blank" rel="noreferrer">${escapeHtml(site.home)}</a>` : ""}
    </article>`;
}
function getSiteType(site) {
  if (site.handler === "help") return { label: "Help", className: "help" };
  if (site.handler === "virustotal" || site.search) {
    return { label: "Search", className: "search" };
  }
  return { label: "Open", className: "open" };
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
// -----------------------------------------------------------------------------
// 7. WORKER ENTRY POINT
// -----------------------------------------------------------------------------
export default {
  async fetch(request) {
    const url = new URL(request.url);
    const route = normalizePath(url.pathname);
    const raw = (url.searchParams.get("q") || "").trim();
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
