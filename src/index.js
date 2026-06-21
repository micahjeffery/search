const SITE_GROUPS = [
  {
    category: "Project",
    sites: [
      {
        name: "Search Project",
        aliases: ["bang", "bangs", "search", "home", "repo"],
        home: "https://github.com/micahjeffery/search"
      },
      {
        name: "Edit Search Project",
        aliases: ["edit"],
        home: "https://github.com/micahjeffery/search/edit/main/src/index.js"
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
        search: "https://www.google.com/search?tbm=nws&q={q}"
      },
      {
        name: "Google Maps",
        aliases: ["m", "gm", "gmap", "gmaps", "maps"],
        home: "https://www.google.com/maps",
        search: "https://www.google.com/maps/search/{q}"
      },
      {
        name: "Gmail",
        aliases: ["go", "gma", "gmail", "mail"],
        home: "https://mail.google.com/",
        search: "https://mail.google.com/mail/u/0/#search/{q}"
      },
      {
        name: "Google Scholar",
        aliases: ["scholar", "gscholar"],
        home: "https://scholar.google.com/",
        search: "https://scholar.google.com/scholar?q={q}"
      },
      {
        name: "Google Finance",
        aliases: ["gf", "gfinance", "googlefinance"],
        home: "https://www.google.com/finance/"
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
        aliases: ["ai", "duckai"],
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
    category: "Shopping, Reference & Cloud",
    sites: [
      {
        name: "eBay",
        aliases: ["e", "ebay"],
        home: "https://www.ebay.com/",
        search: "https://www.ebay.com/sch/i.html?_nkw={q}"
      },
      {
        name: "Facebook Marketplace",
        aliases: ["fbm", "fbmarket", "marketplace", "facebookmarketplace"],
        home: "https://www.facebook.com/marketplace/",
        search: "https://www.facebook.com/marketplace/search/?query={q}"
      },
      {
        name: "Amazon",
        aliases: ["a", "amz", "amazon"],
        home: "https://www.amazon.com/",
        search: "https://www.amazon.com/s?k={q}"
      },
      {
        name: "CamelCamelCamel",
        aliases: ["c", "ccc", "camel", "camelcamelcamel"],
        home: "https://camelcamelcamel.com/",
        search: "https://camelcamelcamel.com/search?sq={q}"
      },
      {
        name: "Costco",
        aliases: ["costco", "co"],
        home: "https://www.costco.com/",
        search: "https://www.costco.com/CatalogSearch?keyword={q}"
      },
      {
        name: "Home Depot",
        aliases: ["h", "hd", "homedepot"],
        home: "https://www.homedepot.com/",
        search: "https://www.homedepot.com/s/{q}"
      },
      {
        name: "Wikipedia",
        aliases: ["wiki", "w", "wikipedia"],
        home: "https://en.wikipedia.org/wiki/Main_Page?vectornightmode=1",
        search: "https://en.wikipedia.org/wiki/Special:Search?search={q}&vectornightmode=1"
      },
      {
        name: "Urban Dictionary",
        aliases: ["u", "ud", "urban", "urbandictionary"],
        home: "https://www.urbandictionary.com/",
        search: "https://www.urbandictionary.com/define.php?term={q}"
      },
      {
        name: "Scrabble Word Finder",
        aliases: ["scrabble", "scrab", "words", "wordfinder", "bg", "bananagram"],
        home: "https://scrabble.merriam.com/word-lists",
        search: "https://scrabble.merriam.com/finder/{q}"
      },
      {
        name: "Merriam-Webster Thesaurus",
        aliases: ["thesaurus", "thes", "syn", "synonym"],
        home: "https://www.merriam-webster.com/thesaurus",
        search: "https://www.merriam-webster.com/thesaurus/{q}"
      },
      {
        name: "OneLook",
        aliases: ["o", "onelook", "1", "1l", "1look"],
        home: "https://www.onelook.com/",
        search: "https://www.onelook.com/?w={q}"
      },
      {
        name: "GitHub",
        aliases: ["gh", "github", "git"],
        home: "https://github.com/",
        search: "https://github.com/search?q={q}"
      },
      {
        name: "OneDrive",
        aliases: ["onedrive", "od", "1d"],
        home: "https://onedrive.live.com/",
        search: "https://onedrive.live.com/?qt=search&q={q}"
      },
      {
        name: "How Long to Read",
        aliases: ["hltr", "howlongtoread", "readtime"],
        home: "https://howlongtoread.com/",
        search: "https://howlongtoread.com/results/{q}"
      },
      {
        name: "PubMed",
        aliases: ["pubmed", "pub", "med"],
        home: "https://pubmed.ncbi.nlm.nih.gov/",
        search: "https://pubmed.ncbi.nlm.nih.gov/?term={q}"
      },
      {
        name: "Have I Been Pwned",
        aliases: ["hibp", "pwned", "haveibeenpwned"],
        home: "https://haveibeenpwned.com/",
        search: "https://haveibeenpwned.com/account/{q}"
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
    category: "Media, Social & Meetings",
    sites: [
      {
        name: "Genius Lyrics",
        aliases: ["lyrics", "lyric", "genius"],
        home: "https://genius.com/",
        search: "https://genius.com/search?q={q}"
      },
      {
        name: "AZLyrics",
        aliases: ["azlyrics", "azl"],
        home: "https://www.azlyrics.com/"
      },
      {
        name: "YouTube",
        aliases: ["yt", "youtube"],
        home: "https://www.youtube.com/",
        search: "https://www.youtube.com/results?search_query={q}"
      },
      {
        name: "Spotify",
        aliases: ["s", "spotify"],
        home: "https://open.spotify.com/",
        search: "https://open.spotify.com/search/{q}"
      },
      {
        name: "IMDb",
        aliases: ["imdb"],
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
        aliases: ["r", "reddit"],
        home: "https://www.reddit.com/",
        search: "https://www.reddit.com/search/?q={q}"
      },
      {
        name: "TikTok",
        aliases: ["tt", "tiktok"],
        home: "https://www.tiktok.com/",
        search: "https://www.tiktok.com/search?q={q}"
      },
      {
        name: "Discord",
        aliases: ["dc", "discord"],
        home: "https://discord.com/channels/@me"
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
      }
    ]
  },

  {
    category: "Bible & Fitness",
    sites: [
      {
        name: "Blue Letter Bible — ESV",
        aliases: ["b", "blb", "bible", "blbesv", "esv"],
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
      },
      {
        name: "StrengthLevel",
        aliases: ["strengthlevel", "sl"],
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
    category: "Games & 3D Printing",
    sites: [
      {
        name: "HowLongToBeat",
        aliases: ["hlb", "hltb", "howlongtobeat"],
        home: "https://howlongtobeat.com/",
        search: "https://howlongtobeat.com/?q={q}"
      },
      {
        name: "IsThereAnyDeal",
        aliases: ["itad", "isthereanydeal"],
        home: "https://isthereanydeal.com/",
        search: "https://isthereanydeal.com/search/?q={q}"
      },
      {
        name: "Eneba",
        aliases: ["eneba"],
        home: "https://www.eneba.com/us/",
        search: "https://www.eneba.com/us/store/all?text={q}"
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
      },
      {
        name: "Printables",
        aliases: ["printables", "prusa", "prusaprinters"],
        home: "https://www.printables.com/",
        search: "https://www.printables.com/search/models?q={q}"
      },
      {
        name: "MakerWorld",
        aliases: ["mw", "maker", "makerworld"],
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
      }
    ]
  },

  {
    category: "Finance, Tax & Metals",
    sites: [
      {
        name: "Monument Metals",
        aliases: ["monument", "monumentmetals", "mm"],
        home: "https://monumentmetals.com/",
        search: "https://monumentmetals.com/search.html?query={q}"
      },
      {
        name: "APMEX",
        aliases: ["apmex", "spot", "metals", "pmspot"],
        home: "https://www.apmex.com/gold-and-silver-price-charts",
        search: "https://www.apmex.com/search?q={q}"
      },
      {
        name: "Gold Spot Price",
        aliases: ["gld", "gold", "apmexgold"],
        home: "https://www.apmex.com/gold-price"
      },
      {
        name: "Silver Spot Price",
        aliases: ["slv", "silver", "apmexsilver"],
        home: "https://www.apmex.com/silver-price"
      },
      {
        name: "IRS Estate Tax",
        aliases: ["death", "estate"],
        home: "https://www.irs.gov/businesses/small-businesses-self-employed/estate-tax"
      },
      {
        name: "Federal Funds Rate",
        aliases: ["fed", "rate", "fedfunds"],
        home: "https://fred.stlouisfed.org/series/fedfunds"
      },
      {
        name: "Inflation Chart",
        aliases: ["inflation"],
        home: "https://fred.stlouisfed.org/graph/?g=1wmdD"
      },
      {
        name: "IRS IRA Limits",
        aliases: ["ira"],
        home: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-ira-contribution-limits"
      },
      {
        name: "Capital Gains Rates",
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
        aliases: ["tariff", "tarrif", "tarif", "tarriff"],
        home: "https://bipartisanpolicy.org/explainer/tariff-tracker/"
      },
      {
        name: "Federal Income Tax Brackets",
        aliases: ["tax", "brackets", "taxbrackets"],
        home: "https://www.forbes.com/advisor/taxes/taxes-federal-income-tax-bracket/#:~:text=maintains%20the%20previous%20tax%20brackets%3A"
      },
      {
        name: "Investopedia",
        aliases: ["investopedia", "invest"],
        home: "https://www.investopedia.com/",
        search: "https://www.investopedia.com/search?q={q}"
      },
      {
        name: "VBIL / SGOV Video",
        aliases: ["vbil", "bil", "sgov"],
        home: "https://www.youtube.com/watch?v=DSwBc-d9Ukc"
      },
      {
        name: "SEC EDGAR — 10-K",
        aliases: ["sec", "edgar"],
        home: "https://www.sec.gov/edgar/search/",
        search: "https://www.sec.gov/edgar/search/#/q={q}&filter_forms=10-K"
      },
      {
        name: "Robinhood",
        aliases: ["rh", "robinhood", "hood"],
        home: "https://robinhood.com/",
        search: "https://robinhood.com/stocks/{q}"
      },
      {
        name: "Yahoo Finance",
        aliases: ["yf", "yfinance", "yahoofinance"],
        home: "https://finance.yahoo.com/",
        search: "https://finance.yahoo.com/quote/{q}"
      },
      {
        name: "FRED",
        aliases: ["fred", "stlouisfed"],
        home: "https://fred.stlouisfed.org/",
        search: "https://fred.stlouisfed.org/searchresults?st={q}"
      },
      {
        name: "Zillow",
        aliases: ["z", "zillow"],
        home: "https://www.zillow.com/",
        search: "https://www.zillow.com/homes/{q}_rb/"
      }
    ]
  },

  {
    category: "Translation",
    sites: [
      {
        name: "Google Translate",
        aliases: ["gt", "translate", "gtranslate"],
        home: "https://translate.google.com/",
        search: "https://translate.google.com/?sl=auto&tl=en&text={q}&op=translate"
      },
      {
        name: "DeepL — Auto to English",
        aliases: ["deepl", "dl"],
        home: "https://www.deepl.com/translator",
        search: "https://www.deepl.com/translator#xx/en/{q}"
      },
      { name: "DeepL — English to Spanish", aliases: ["enes"], home: "https://www.deepl.com/translator#en/es", search: "https://www.deepl.com/translator#en/es/{q}" },
      { name: "DeepL — Spanish to English", aliases: ["esen"], home: "https://www.deepl.com/translator#es/en", search: "https://www.deepl.com/translator#es/en/{q}" },
      { name: "DeepL — English to French", aliases: ["enfr"], home: "https://www.deepl.com/translator#en/fr", search: "https://www.deepl.com/translator#en/fr/{q}" },
      { name: "DeepL — French to English", aliases: ["fren"], home: "https://www.deepl.com/translator#fr/en", search: "https://www.deepl.com/translator#fr/en/{q}" },
      { name: "DeepL — Spanish to French", aliases: ["esfr"], home: "https://www.deepl.com/translator#es/fr", search: "https://www.deepl.com/translator#es/fr/{q}" },
      { name: "DeepL — French to Spanish", aliases: ["fres"], home: "https://www.deepl.com/translator#fr/es", search: "https://www.deepl.com/translator#fr/es/{q}" },
      { name: "DeepL — English to German", aliases: ["ende"], home: "https://www.deepl.com/translator#en/de", search: "https://www.deepl.com/translator#en/de/{q}" },
      { name: "DeepL — German to English", aliases: ["deen"], home: "https://www.deepl.com/translator#de/en", search: "https://www.deepl.com/translator#de/en/{q}" },
      { name: "DeepL — English to Italian", aliases: ["enit"], home: "https://www.deepl.com/translator#en/it", search: "https://www.deepl.com/translator#en/it/{q}" },
      { name: "DeepL — Italian to English", aliases: ["iten"], home: "https://www.deepl.com/translator#it/en", search: "https://www.deepl.com/translator#it/en/{q}" },
      { name: "DeepL — English to Portuguese", aliases: ["enpt"], home: "https://www.deepl.com/translator#en/pt", search: "https://www.deepl.com/translator#en/pt/{q}" },
      { name: "DeepL — Portuguese to English", aliases: ["pten"], home: "https://www.deepl.com/translator#pt/en", search: "https://www.deepl.com/translator#pt/en/{q}" },
      { name: "DeepL — English to Japanese", aliases: ["enja"], home: "https://www.deepl.com/translator#en/ja", search: "https://www.deepl.com/translator#en/ja/{q}" },
      { name: "DeepL — Japanese to English", aliases: ["jaen"], home: "https://www.deepl.com/translator#ja/en", search: "https://www.deepl.com/translator#ja/en/{q}" },
      { name: "DeepL — English to Chinese", aliases: ["enzh"], home: "https://www.deepl.com/translator#en/zh", search: "https://www.deepl.com/translator#en/zh/{q}" },
      { name: "DeepL — Chinese to English", aliases: ["zhen"], home: "https://www.deepl.com/translator#zh/en", search: "https://www.deepl.com/translator#zh/en/{q}" },
      { name: "DeepL — English to Korean", aliases: ["enko"], home: "https://www.deepl.com/translator#en/ko", search: "https://www.deepl.com/translator#en/ko/{q}" },
      { name: "DeepL — Korean to English", aliases: ["koen"], home: "https://www.deepl.com/translator#ko/en", search: "https://www.deepl.com/translator#ko/en/{q}" }
    ]
  },

  {
    category: "Tools & Privacy",
    sites: [
      { name: "Caption Ninja", aliases: ["caption", "cap"], home: "https://caption.ninja/" },
      { name: "Case Converter", aliases: ["case"], home: "https://it-tools.tech/case-converter" },
      { name: "Coolors", aliases: ["color", "coolors"], home: "https://coolors.co/?home" },
      { name: "Posys Cursors", aliases: ["cursor", "cursors"], home: "https://github.com/wrinkdater/Posys-Cursors-Improved-by-wrinkdater" },
      { name: "Cobalt", aliases: ["download", "cobalt"], home: "https://cobalt.tools/" },
      { name: "Excalidraw", aliases: ["draw", "excalidraw"], home: "https://excalidraw.com/" },
      { name: "Emoji Picker", aliases: ["emoji"], home: "https://it-tools.tech/emoji-picker" },
      { name: "Wormhole", aliases: ["file", "worm", "transfer", "wormhole"], home: "https://wormhole.app/" },
      { name: "WhatFontIs", aliases: ["font", "whatfont"], home: "https://www.whatfontis.com/" },
      { name: "VDO.Ninja", aliases: ["vdo", "obs"], home: "https://vdo.ninja/" },
      { name: "Online OCR", aliases: ["ocr"], home: "https://www.onlineocr.net/" },
      { name: "TinyWow PDF", aliases: ["pdf"], home: "https://tinywow.com/tools/pdf" },
      {
        name: "QR Code Generator",
        aliases: ["qr", "qrcode"],
        home: "https://quickchart.io/qr-code-api/",
        search: "https://quickchart.io/qr?text={q}"
      },
      {
        name: "QR Code Decoder",
        aliases: ["qrdecode", "qrd"],
        home: "https://zxing.org/w/decode.jspx"
      },
      {
        name: "Wayback Machine",
        aliases: ["archive", "wayback"],
        home: "https://web.archive.org/",
        search: "https://web.archive.org/web/*/{q}"
      },
      { name: "Regex101", aliases: ["regex"], home: "https://regex101.com/" },
      { name: "Receive SMS", aliases: ["sms"], home: "https://receive-sms.cc/" },
      { name: "Temp Mail", aliases: ["spam", "temp", "tempmail"], home: "https://temp-mail.org/" },
      { name: "Fast.com", aliases: ["test", "speed", "fast"], home: "https://fast.com/" },
      { name: "Text Statistics", aliases: ["text"], home: "https://it-tools.tech/text-statistics" },
      { name: "Upscale.media", aliases: ["upscale"], home: "https://www.upscale.media/upload" },
      {
        name: "VirusTotal — Domain Lookup",
        aliases: ["virus", "vt", "virustotal"],
        home: "https://www.virustotal.com/gui/home/url",
        search: "https://www.virustotal.com/gui/domain/{q}",
        queryTransform: "hostname"
      },
      {
        name: "Wallhaven",
        aliases: ["wallpaper", "wall", "wallhaven"],
        home: "https://wallhaven.cc/",
        search: "https://wallhaven.cc/search?q={q}"
      }
    ]
  },

  {
    category: "Proton & Google Apps",
    sites: [
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
        name: "Proton Landing Page",
        aliases: ["p", "proton"],
        home: "https://micahjeffery.com/proton/"
      },
      {
        name: "Google Drive",
        aliases: ["drive", "gdrive"],
        home: "https://drive.google.com/drive/my-drive",
        search: "https://drive.google.com/drive/search?q={q}"
      },
      {
        name: "Google Docs",
        aliases: ["docs", "gdoc", "gdocs"],
        home: "https://docs.google.com/document/u/0/",
        search: "https://docs.google.com/document/u/0/?q={q}"
      },
      {
        name: "Google Voice",
        aliases: ["voice", "gvoice", "gvmail"],
        home: "https://voice.google.com/u/1/",
        search: "https://voice.google.com/u/1/search?from=%5B%5D&q=%5B%22{q}%22%5D"
      }
    ]
  },

  {
    category: "Domains & Terms",
    sites: [
      {
        name: "ToS;DR",
        aliases: ["tosdr", "tos"],
        home: "https://tosdr.org/en",
        search: "https://tosdr.org/en/search/{q}"
      },
      {
        name: "ICANN Lookup",
        aliases: ["icann", "whois", "lookup"],
        home: "https://lookup.icann.org/en",
        search: "https://lookup.icann.org/whois/en/index.layout.privacynotification:ackprivacy?q={q}"
      },
      {
        name: "Cloudflare Domains",
        aliases: ["domain", "dom", "domains", "cfd", "cloudflaredomains"],
        home: "https://domains.cloudflare.com/",
        search: "https://domains.cloudflare.com/?domain={q}"
      }
    ]
  }
];

const DEFAULT_ENGINES = {
  ddg: { name: "DuckDuckGo", home: "https://duckduckgo.com/", search: "https://duckduckgo.com/?q={q}" },
  duckduckgo: { name: "DuckDuckGo", home: "https://duckduckgo.com/", search: "https://duckduckgo.com/?q={q}" },
  d: { name: "DuckDuckGo", home: "https://duckduckgo.com/", search: "https://duckduckgo.com/?q={q}" },
  noai: { name: "DuckDuckGo No AI", home: "https://noai.duckduckgo.com/", search: "https://noai.duckduckgo.com/?q={q}" },
  noaiddg: { name: "DuckDuckGo No AI", home: "https://noai.duckduckgo.com/", search: "https://noai.duckduckgo.com/?q={q}" },
  google: { name: "Google", home: "https://www.google.com/", search: "https://www.google.com/search?q={q}" },
  g: { name: "Google", home: "https://www.google.com/", search: "https://www.google.com/search?q={q}" },
  startpage: { name: "Startpage", home: "https://www.startpage.com/", search: "https://www.startpage.com/sp/search?query={q}" },
  sp: { name: "Startpage", home: "https://www.startpage.com/", search: "https://www.startpage.com/sp/search?query={q}" },
  brave: { name: "Brave Search", home: "https://search.brave.com/", search: "https://search.brave.com/search?q={q}" },
  b: { name: "Brave Search", home: "https://search.brave.com/", search: "https://search.brave.com/search?q={q}" },
  bing: { name: "Bing", home: "https://www.bing.com/", search: "https://www.bing.com/search?q={q}" },
  ecosia: { name: "Ecosia", home: "https://www.ecosia.org/", search: "https://www.ecosia.org/search?q={q}" },
  eco: { name: "Ecosia", home: "https://www.ecosia.org/", search: "https://www.ecosia.org/search?q={q}" },
  yahoo: { name: "Yahoo", home: "https://search.yahoo.com/", search: "https://search.yahoo.com/search?p={q}" },
  y: { name: "Yahoo", home: "https://search.yahoo.com/", search: "https://search.yahoo.com/search?p={q}" }
};

const sites = SITE_GROUPS.flatMap((group) =>
  group.sites.map((site) => ({ ...site, category: group.category }))
);

const { bangMap, aliasConflicts } = buildBangMap(sites);

function buildBangMap(entries) {
  const bangMap = new Map();
  const aliasConflicts = [];

  for (const site of entries) {
    for (const alias of site.aliases) {
      const key = alias.toLowerCase();
      const existing = bangMap.get(key);

      if (existing) {
        aliasConflicts.push({ alias: key, first: existing.name, second: site.name });
        continue;
      }

      bangMap.set(key, site);
    }
  }

  return { bangMap, aliasConflicts };
}

function redirectTo(template, query = "") {
  const target = template.replaceAll("{q}", encodeURIComponent(query.trim()));
  return Response.redirect(target, 302);
}

function getDefaultEngineFromPath(pathname) {
  const key = pathname.replace(/^\/+|\/+$/g, "").toLowerCase();
  return DEFAULT_ENGINES[key] || DEFAULT_ENGINES.ddg;
}

function findShortcut(raw) {
  const symbols = "[!;:.]";
  const name = "[a-zA-Z0-9_-]+";
  const patterns = [
    new RegExp(`^(${symbols})(${name})(?:\\s+(.+))?$`),
    new RegExp(`^(${name})(${symbols})(?:\\s+(.+))?$`),
    new RegExp(`^(.+?)\\s+(${symbols})(${name})$`),
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

function transformQuery(site, query) {
  if (site.queryTransform === "hostname") {
    return extractHostname(query);
  }

  return query.trim();
}

function extractHostname(value) {
  const input = value.trim();
  if (!input) return "";

  const candidate = /^[a-z][a-z0-9+.-]*:\/\//i.test(input)
    ? input
    : `https://${input.replace(/^\/+/, "")}`;

  try {
    const hostname = new URL(candidate).hostname.toLowerCase().replace(/\.$/, "");
    return hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    "\"": "&quot;"
  })[character]);
}

function renderHelpPage(origin) {
  const defaultEngineRows = Object.entries(DEFAULT_ENGINES)
    .filter(([key]) => !["d", "g", "sp", "b", "eco", "y", "noaiddg"].includes(key))
    .map(([key, engine]) => {
      const searchUrl = `${origin}/${key === "ddg" ? "" : `${key}/`}?q=%s`;
      return `<button class="engine" data-copy="${escapeHtml(searchUrl)}"><strong>${escapeHtml(engine.name)}</strong><span>/${escapeHtml(key)}</span></button>`;
    })
    .join("");

  const groupCards = SITE_GROUPS.map((group) => {
    const cards = group.sites.map((site) => {
      const aliases = site.aliases
        .map((alias) => `<button class="alias" data-copy=";${escapeHtml(alias)}">;${escapeHtml(alias)}</button>`)
        .join("");
      const type = site.search ? "Search" : "Open";
      const searchData = [site.name, site.category, ...site.aliases, site.home].join(" ").toLowerCase();

      return `
        <article class="card" data-search="${escapeHtml(searchData)}">
          <div class="card-heading">
            <h3>${escapeHtml(site.name)}</h3>
            <span class="type">${type}</span>
          </div>
          <div class="aliases">${aliases}</div>
          <a class="site-link" href="${escapeHtml(site.home)}" target="_blank" rel="noreferrer">Open site ↗</a>
        </article>`;
    }).join("");

    return `
      <section class="group" data-group>
        <h2>${escapeHtml(group.category)}</h2>
        <div class="grid">${cards}</div>
      </section>`;
  }).join("");

  const conflictNotice = aliasConflicts.length
    ? `<p class="warning">Duplicate aliases: ${escapeHtml(aliasConflicts.map((item) => `${item.alias} (${item.first} / ${item.second})`).join(", "))}</p>`
    : "";

  const mainSearchUrl = `${origin}/?q=%s`;

  return new Response(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Search Bangs</title>
  <style>
    :root { color-scheme: dark; }
    * { box-sizing: border-box; }
    body { margin: 0; background: #0b1020; color: #e8edf7; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    main { width: min(1180px, calc(100% - 32px)); margin: 0 auto; padding: 48px 0 72px; }
    .hero { padding: 28px; border: 1px solid #29355a; border-radius: 22px; background: linear-gradient(135deg, #141d37, #0d1429); box-shadow: 0 20px 50px rgba(0,0,0,.24); }
    h1 { margin: 0; font-size: clamp(2rem, 5vw, 3.6rem); letter-spacing: -.04em; }
    h2 { margin: 42px 0 14px; font-size: 1.3rem; }
    h3 { margin: 0; font-size: 1rem; }
    p { line-height: 1.55; color: #abb7d5; }
    code, .url { font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace; }
    .url { display: inline-block; margin-top: 12px; padding: 10px 12px; border-radius: 10px; color: #b9d4ff; background: #0a0f20; border: 1px solid #2b3a64; word-break: break-all; }
    .hint { margin-top: 16px; color: #abb7d5; }
    .hint code { color: #fff; }
    #filter { width: 100%; margin: 24px 0 8px; padding: 14px 16px; color: #eef4ff; border: 1px solid #3b4b77; border-radius: 12px; background: #090e1d; font: inherit; outline: none; }
    #filter:focus { border-color: #89a8ff; box-shadow: 0 0 0 3px rgba(105,145,255,.2); }
    .engines { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; }
    button { font: inherit; cursor: pointer; }
    .engine, .alias { border: 1px solid #33436d; color: #dbe7ff; background: #111a31; border-radius: 9px; }
    .engine { padding: 9px 11px; display: inline-flex; gap: 8px; align-items: baseline; }
    .engine span { color: #91a6d9; font-family: "SFMono-Regular", Consolas, monospace; font-size: .8rem; }
    .alias { padding: 4px 7px; font-family: "SFMono-Regular", Consolas, monospace; font-size: .82rem; }
    .engine:hover, .alias:hover { border-color: #85a6ff; background: #172446; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px; }
    .card { min-height: 132px; padding: 15px; border: 1px solid #26345b; border-radius: 14px; background: #10172a; }
    .card-heading { display: flex; align-items: flex-start; gap: 8px; justify-content: space-between; }
    .type { padding: 3px 7px; color: #8bd7ae; border-radius: 99px; background: #113324; font-size: .72rem; }
    .aliases { display: flex; flex-wrap: wrap; gap: 6px; margin: 14px 0; }
    .site-link { color: #91b7ff; font-size: .88rem; text-decoration: none; }
    .site-link:hover { text-decoration: underline; }
    .warning { padding: 12px 14px; color: #ffd8a8; border: 1px solid #76592f; border-radius: 10px; background: #2c2112; }
    .empty { display: none; margin-top: 26px; color: #abb7d5; }
    .toast { position: fixed; right: 18px; bottom: 18px; padding: 10px 14px; border: 1px solid #3d5284; border-radius: 10px; background: #15213d; color: #edf4ff; opacity: 0; transform: translateY(8px); transition: .18s; pointer-events: none; }
    .toast.show { opacity: 1; transform: translateY(0); }
    @media (max-width: 560px) { main { width: min(100% - 24px, 1180px); padding-top: 20px; } .hero { padding: 20px; } }
  </style>
</head>
<body>
  <main>
    <header class="hero">
      <h1>Search Bangs</h1>
      <p>Generated directly from this Worker’s configuration. Click an alias to copy it.</p>
      <button class="url" data-copy="${escapeHtml(mainSearchUrl)}">${escapeHtml(mainSearchUrl)}</button>
      <p class="hint">Use <code>!</code>, <code>;</code>, <code>:</code>, or <code>.</code> before an alias. Example: <code>;g cats</code>. You can also put it at the end: <code>cats ;g</code>.</p>
      <input id="filter" type="search" placeholder="Filter by site, alias, or URL…" autocomplete="off" autofocus>
      <div class="engines">${defaultEngineRows}</div>
      ${conflictNotice}
    </header>
    <p id="empty" class="empty">No matching bangs.</p>
    ${groupCards}
  </main>
  <div id="toast" class="toast" role="status" aria-live="polite"></div>
  <script>
    const filter = document.getElementById("filter");
    const cards = [...document.querySelectorAll(".card")];
    const groups = [...document.querySelectorAll("[data-group]")];
    const empty = document.getElementById("empty");
    const toast = document.getElementById("toast");
    let toastTimer;

    function showToast(message) {
      toast.textContent = message;
      toast.classList.add("show");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove("show"), 1300);
    }

    filter.addEventListener("input", () => {
      const query = filter.value.trim().toLowerCase();
      let visibleCount = 0;

      cards.forEach((card) => {
        const visible = !query || card.dataset.search.includes(query);
        card.hidden = !visible;
        if (visible) visibleCount += 1;
      });

      groups.forEach((group) => {
        group.hidden = ![...group.querySelectorAll(".card")].some((card) => !card.hidden);
      });

      empty.style.display = visibleCount ? "none" : "block";
    });

    document.addEventListener("click", async (event) => {
      const button = event.target.closest("[data-copy]");
      if (!button) return;

      const value = button.dataset.copy;
      try {
        await navigator.clipboard.writeText(value);
        showToast("Copied " + value);
      } catch {
        showToast("Copy this: " + value);
      }
    });
  </script>
</body>
</html>`, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store"
    }
  });
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const pathname = url.pathname.replace(/\/+$/, "") || "/";

    if (pathname === "/help" || pathname === "/bangs") {
      return renderHelpPage(url.origin);
    }

    const raw = (url.searchParams.get("q") || "").trim();
    const defaultEngine = getDefaultEngineFromPath(url.pathname);

    if (!raw) {
      return redirectTo(defaultEngine.home);
    }

    const shortcut = findShortcut(raw);
    const site = shortcut ? bangMap.get(shortcut.bang) : null;

    if (site) {
      if (shortcut.query && site.search) {
        const query = transformQuery(site, shortcut.query);
        if (query) return redirectTo(site.search, query);
      }

      return redirectTo(site.home);
    }

    return redirectTo(defaultEngine.search, raw);
  }
};
