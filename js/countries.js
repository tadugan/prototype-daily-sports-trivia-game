// Olympic country list — all nations that have competed in the Summer Olympics
// plus historical/special entities.
// All alias strings are lowercase (search is case-insensitive).

window.COUNTRIES = [

  // ─── A ───────────────────────────────────────────────────────────────────────

  { iso3: "AFG", name: "Afghanistan",            aliases: ["afghan"] },
  { iso3: "ALB", name: "Albania",                aliases: [] },
  { iso3: "ALG", name: "Algeria",                aliases: ["algerie", "democratic people's republic of algeria"] },
  { iso3: "AND", name: "Andorra",                aliases: [] },
  { iso3: "AGO", name: "Angola",                 aliases: [] },
  { iso3: "ANT", name: "Antigua and Barbuda",    aliases: ["antigua", "barbuda"] },
  { iso3: "ARG", name: "Argentina",              aliases: ["argentine republic"] },
  { iso3: "ARM", name: "Armenia",                aliases: [] },
  { iso3: "ARU", name: "Aruba",                  aliases: [] },
  { iso3: "AUS", name: "Australia",              aliases: ["aussie", "aussies", "oz"] },
  { iso3: "AUT", name: "Austria",                aliases: ["österreich"] },
  { iso3: "AZE", name: "Azerbaijan",             aliases: [] },

  // ─── B ───────────────────────────────────────────────────────────────────────

  { iso3: "BAH", name: "Bahamas",                aliases: ["the bahamas"] },
  { iso3: "BRN", name: "Bahrain",                aliases: [] },
  { iso3: "BAN", name: "Bangladesh",             aliases: [] },
  { iso3: "BAR", name: "Barbados",               aliases: [] },
  { iso3: "BLR", name: "Belarus",                aliases: ["byelorussia", "belorussia"] },
  { iso3: "BEL", name: "Belgium",                aliases: ["belgique", "belgië"] },
  { iso3: "BIZ", name: "Belize",                 aliases: [] },
  { iso3: "BEN", name: "Benin",                  aliases: [] },
  { iso3: "BHU", name: "Bhutan",                 aliases: [] },
  { iso3: "BOL", name: "Bolivia",                aliases: [] },
  { iso3: "BIH", name: "Bosnia and Herzegovina", aliases: ["bosnia", "herzegovina", "bih"] },
  { iso3: "BOT", name: "Botswana",               aliases: [] },
  { iso3: "BRA", name: "Brazil",                 aliases: ["brasil", "federative republic of brazil"] },
  { iso3: "BRU", name: "Brunei",                 aliases: ["brunei darussalam"] },
  { iso3: "BUL", name: "Bulgaria",               aliases: ["balgaria"] },
  { iso3: "BUR", name: "Burkina Faso",            aliases: ["upper volta"] },
  { iso3: "BDI", name: "Burundi",                aliases: [] },

  // ─── C ───────────────────────────────────────────────────────────────────────

  { iso3: "CPV", name: "Cape Verde",             aliases: ["cabo verde"] },
  { iso3: "CAM", name: "Cambodia",               aliases: ["kampuchea", "khmer"] },
  { iso3: "CMR", name: "Cameroon",               aliases: [] },
  { iso3: "CAN", name: "Canada",                 aliases: [] },
  { iso3: "CAF", name: "Central African Republic", aliases: ["car", "central africa"] },
  { iso3: "CHA", name: "Chad",                   aliases: [] },
  { iso3: "CHI", name: "Chile",                  aliases: [] },
  { iso3: "CHN", name: "China",                  aliases: ["people's republic of china", "prc", "mainland china"] },
  { iso3: "COL", name: "Colombia",               aliases: [] },
  { iso3: "COM", name: "Comoros",                aliases: [] },
  { iso3: "COD", name: "DR Congo",               aliases: ["congo", "democratic republic of the congo", "zaire", "drc"] },
  { iso3: "CGO", name: "Republic of Congo",      aliases: ["congo-brazzaville"] },
  { iso3: "CRC", name: "Costa Rica",             aliases: [] },
  { iso3: "CIV", name: "Côte d'Ivoire",          aliases: ["ivory coast", "cote d'ivoire"] },
  { iso3: "CRO", name: "Croatia",                aliases: ["hrvatska"] },
  { iso3: "CUB", name: "Cuba",                   aliases: [] },
  { iso3: "CYP", name: "Cyprus",                 aliases: [] },
  { iso3: "CZE", name: "Czech Republic",         aliases: ["czechia", "czech"] },

  // ─── D ───────────────────────────────────────────────────────────────────────

  { iso3: "DEN", name: "Denmark",                aliases: ["danmark"] },
  { iso3: "DJI", name: "Djibouti",               aliases: [] },
  { iso3: "DMA", name: "Dominica",               aliases: [] },
  { iso3: "DOM", name: "Dominican Republic",     aliases: [] },

  // ─── E ───────────────────────────────────────────────────────────────────────

  { iso3: "ECU", name: "Ecuador",                aliases: [] },
  { iso3: "EGY", name: "Egypt",                  aliases: ["united arab republic", "uar"] },
  { iso3: "ESA", name: "El Salvador",            aliases: ["salvador"] },
  { iso3: "GEQ", name: "Equatorial Guinea",      aliases: [] },
  { iso3: "ERI", name: "Eritrea",                aliases: [] },
  { iso3: "EST", name: "Estonia",                aliases: [] },
  { iso3: "SWZ", name: "Eswatini",               aliases: ["swaziland"] },
  { iso3: "ETH", name: "Ethiopia",               aliases: ["abyssinia"] },

  // ─── F ───────────────────────────────────────────────────────────────────────

  { iso3: "FIJ", name: "Fiji",                   aliases: [] },
  { iso3: "FIN", name: "Finland",                aliases: ["suomi"] },
  { iso3: "FRA", name: "France",                 aliases: ["french republic"] },

  // ─── G ───────────────────────────────────────────────────────────────────────

  { iso3: "GAB", name: "Gabon",                  aliases: [] },
  { iso3: "GAM", name: "Gambia",                 aliases: ["the gambia"] },
  { iso3: "GEO", name: "Georgia",                aliases: [] },
  { iso3: "GER", name: "Germany",                aliases: ["deutschland", "federal republic of germany", "west germany (frg)", "east germany (gdr)"] },
  { iso3: "GHA", name: "Ghana",                  aliases: [] },
  { iso3: "GBR", name: "Great Britain",          aliases: ["united kingdom", "uk", "england", "britain", "scotland", "wales"] },
  { iso3: "GRE", name: "Greece",                 aliases: ["hellas", "ellada"] },
  { iso3: "GRN", name: "Grenada",                aliases: [] },
  { iso3: "GUA", name: "Guatemala",              aliases: [] },
  { iso3: "GUI", name: "Guinea",                 aliases: [] },
  { iso3: "GBS", name: "Guinea-Bissau",          aliases: [] },
  { iso3: "GUY", name: "Guyana",                 aliases: [] },

  // ─── H ───────────────────────────────────────────────────────────────────────

  { iso3: "HAI", name: "Haiti",                  aliases: [] },
  { iso3: "HON", name: "Honduras",               aliases: [] },
  { iso3: "HKG", name: "Hong Kong",              aliases: ["hong kong china", "hong kong, china"] },
  { iso3: "HUN", name: "Hungary",                aliases: ["magyarország"] },

  // ─── I ───────────────────────────────────────────────────────────────────────

  { iso3: "ISL", name: "Iceland",                aliases: ["ísland"] },
  { iso3: "IND", name: "India",                  aliases: ["hindustan"] },
  { iso3: "INA", name: "Indonesia",              aliases: [] },
  { iso3: "IRN", name: "Iran",                   aliases: ["islamic republic of iran", "persia"] },
  { iso3: "IRQ", name: "Iraq",                   aliases: [] },
  { iso3: "IRL", name: "Ireland",                aliases: ["eire", "republic of ireland"] },
  { iso3: "ISR", name: "Israel",                 aliases: [] },
  { iso3: "ITA", name: "Italy",                  aliases: ["italia"] },

  // ─── J ───────────────────────────────────────────────────────────────────────

  { iso3: "JAM", name: "Jamaica",                aliases: [] },
  { iso3: "JPN", name: "Japan",                  aliases: ["nippon", "nihon"] },
  { iso3: "JOR", name: "Jordan",                 aliases: [] },

  // ─── K ───────────────────────────────────────────────────────────────────────

  { iso3: "KAZ", name: "Kazakhstan",             aliases: [] },
  { iso3: "KEN", name: "Kenya",                  aliases: [] },
  { iso3: "PRK", name: "North Korea",            aliases: ["dprk", "democratic people's republic of korea"] },
  { iso3: "KOR", name: "South Korea",            aliases: ["korea", "republic of korea"] },
  { iso3: "KUW", name: "Kuwait",                 aliases: [] },
  { iso3: "KGZ", name: "Kyrgyzstan",             aliases: ["kirghizia", "kirghizstan"] },

  // ─── L ───────────────────────────────────────────────────────────────────────

  { iso3: "LAO", name: "Laos",                   aliases: ["lao pdr", "lao people's democratic republic"] },
  { iso3: "LAT", name: "Latvia",                 aliases: [] },
  { iso3: "LBN", name: "Lebanon",                aliases: [] },
  { iso3: "LES", name: "Lesotho",                aliases: [] },
  { iso3: "LBR", name: "Liberia",                aliases: [] },
  { iso3: "LBA", name: "Libya",                  aliases: ["libyan arab jamahiriya"] },
  { iso3: "LIE", name: "Liechtenstein",          aliases: [] },
  { iso3: "LTU", name: "Lithuania",              aliases: [] },
  { iso3: "LUX", name: "Luxembourg",             aliases: [] },

  // ─── M ───────────────────────────────────────────────────────────────────────

  { iso3: "MAD", name: "Madagascar",             aliases: ["malagasy republic"] },
  { iso3: "MAW", name: "Malawi",                 aliases: ["nyasaland"] },
  { iso3: "MAS", name: "Malaysia",               aliases: [] },
  { iso3: "MDV", name: "Maldives",               aliases: [] },
  { iso3: "MLI", name: "Mali",                   aliases: [] },
  { iso3: "MLT", name: "Malta",                  aliases: [] },
  { iso3: "MRI", name: "Mauritius",              aliases: [] },
  { iso3: "MEX", name: "Mexico",                 aliases: ["méxico"] },
  { iso3: "MDA", name: "Moldova",                aliases: [] },
  { iso3: "MON", name: "Monaco",                 aliases: [] },
  { iso3: "MGL", name: "Mongolia",               aliases: [] },
  { iso3: "MNE", name: "Montenegro",             aliases: [] },
  { iso3: "MAR", name: "Morocco",                aliases: ["maroc"] },
  { iso3: "MOZ", name: "Mozambique",             aliases: [] },
  { iso3: "MYA", name: "Myanmar",                aliases: ["burma"] },

  // ─── N ───────────────────────────────────────────────────────────────────────

  { iso3: "NAM", name: "Namibia",                aliases: ["south west africa"] },
  { iso3: "NEP", name: "Nepal",                  aliases: [] },
  { iso3: "NED", name: "Netherlands",            aliases: ["holland", "dutch", "nederland"] },
  { iso3: "NZL", name: "New Zealand",            aliases: ["nz", "kiwis"] },
  { iso3: "NCA", name: "Nicaragua",              aliases: [] },
  { iso3: "NIG", name: "Niger",                  aliases: [] },
  { iso3: "NGR", name: "Nigeria",                aliases: [] },
  { iso3: "MKD", name: "North Macedonia",        aliases: ["macedonia", "former yugoslav republic of macedonia", "fyrom"] },
  { iso3: "NOR", name: "Norway",                 aliases: ["norge"] },

  // ─── O ───────────────────────────────────────────────────────────────────────

  { iso3: "OMA", name: "Oman",                   aliases: [] },

  // ─── P ───────────────────────────────────────────────────────────────────────

  { iso3: "PAK", name: "Pakistan",               aliases: [] },
  { iso3: "PLE", name: "Palestine",              aliases: ["palestinian authority"] },
  { iso3: "PAN", name: "Panama",                 aliases: [] },
  { iso3: "PNG", name: "Papua New Guinea",       aliases: ["png"] },
  { iso3: "PAR", name: "Paraguay",               aliases: [] },
  { iso3: "PER", name: "Peru",                   aliases: [] },
  { iso3: "PHI", name: "Philippines",            aliases: [] },
  { iso3: "POL", name: "Poland",                 aliases: ["polska"] },
  { iso3: "POR", name: "Portugal",               aliases: [] },
  { iso3: "PUR", name: "Puerto Rico",            aliases: [] },

  // ─── Q ───────────────────────────────────────────────────────────────────────

  { iso3: "QAT", name: "Qatar",                  aliases: [] },

  // ─── R ───────────────────────────────────────────────────────────────────────

  { iso3: "ROU", name: "Romania",                aliases: ["rumania", "roumania"] },
  { iso3: "RUS", name: "Russia",                 aliases: ["russian federation"] },
  { iso3: "RWA", name: "Rwanda",                 aliases: [] },

  // ─── S ───────────────────────────────────────────────────────────────────────

  { iso3: "SKN", name: "Saint Kitts and Nevis",  aliases: ["st kitts", "st. kitts"] },
  { iso3: "LCA", name: "Saint Lucia",            aliases: ["st lucia", "st. lucia"] },
  { iso3: "VIN", name: "Saint Vincent and the Grenadines", aliases: ["st vincent", "st. vincent"] },
  { iso3: "SAM", name: "Samoa",                  aliases: ["western samoa"] },
  { iso3: "SMR", name: "San Marino",             aliases: [] },
  { iso3: "STP", name: "São Tomé and Príncipe",  aliases: ["sao tome"] },
  { iso3: "KSA", name: "Saudi Arabia",           aliases: ["saudi", "ksa"] },
  { iso3: "SEN", name: "Senegal",                aliases: [] },
  { iso3: "SRB", name: "Serbia",                 aliases: [] },
  { iso3: "SEY", name: "Seychelles",             aliases: [] },
  { iso3: "SLE", name: "Sierra Leone",           aliases: [] },
  { iso3: "SGP", name: "Singapore",              aliases: [] },
  { iso3: "SVK", name: "Slovakia",               aliases: [] },
  { iso3: "SLO", name: "Slovenia",               aliases: [] },
  { iso3: "SOL", name: "Solomon Islands",        aliases: [] },
  { iso3: "SOM", name: "Somalia",                aliases: [] },
  { iso3: "RSA", name: "South Africa",           aliases: ["rsa"] },
  { iso3: "SSD", name: "South Sudan",            aliases: [] },
  { iso3: "ESP", name: "Spain",                  aliases: ["españa"] },
  { iso3: "SRI", name: "Sri Lanka",              aliases: ["ceylon"] },
  { iso3: "SUD", name: "Sudan",                  aliases: [] },
  { iso3: "SUR", name: "Suriname",               aliases: [] },
  { iso3: "SWE", name: "Sweden",                 aliases: ["sverige"] },
  { iso3: "SUI", name: "Switzerland",            aliases: ["schweiz", "suisse", "svizzera"] },
  { iso3: "SYR", name: "Syria",                  aliases: ["syrian arab republic"] },

  // ─── T ───────────────────────────────────────────────────────────────────────

  { iso3: "TPE", name: "Chinese Taipei",         aliases: ["taiwan", "republic of china", "roc taiwan"] },
  { iso3: "TJK", name: "Tajikistan",             aliases: [] },
  { iso3: "TAN", name: "Tanzania",               aliases: ["tanganyika"] },
  { iso3: "THA", name: "Thailand",               aliases: ["siam"] },
  { iso3: "TLS", name: "Timor-Leste",            aliases: ["east timor"] },
  { iso3: "TOG", name: "Togo",                   aliases: [] },
  { iso3: "TGA", name: "Tonga",                  aliases: [] },
  { iso3: "TTO", name: "Trinidad and Tobago",    aliases: ["trinidad", "tobago", "t&t"] },
  { iso3: "TUN", name: "Tunisia",                aliases: ["tunisie"] },
  { iso3: "TUR", name: "Turkey",                 aliases: ["türkiye"] },
  { iso3: "TKM", name: "Turkmenistan",           aliases: [] },
  { iso3: "TUV", name: "Tuvalu",                 aliases: [] },

  // ─── U ───────────────────────────────────────────────────────────────────────

  { iso3: "UGA", name: "Uganda",                 aliases: [] },
  { iso3: "UKR", name: "Ukraine",                aliases: [] },
  { iso3: "UAE", name: "United Arab Emirates",   aliases: ["uae", "emirates"] },
  { iso3: "USA", name: "United States",          aliases: ["united states of america", "america", "us", "u.s.", "u.s.a."] },
  { iso3: "URU", name: "Uruguay",                aliases: [] },
  { iso3: "UZB", name: "Uzbekistan",             aliases: [] },

  // ─── V ───────────────────────────────────────────────────────────────────────

  { iso3: "VAN", name: "Vanuatu",                aliases: ["new hebrides"] },
  { iso3: "VEN", name: "Venezuela",              aliases: [] },
  { iso3: "VIE", name: "Vietnam",                aliases: ["viet nam", "south vietnam", "north vietnam"] },

  // ─── W ───────────────────────────────────────────────────────────────────────

  { iso3: "IVB", name: "British Virgin Islands", aliases: ["bvi"] },
  { iso3: "ISV", name: "US Virgin Islands",      aliases: ["virgin islands", "usvi"] },

  // ─── Y ───────────────────────────────────────────────────────────────────────

  { iso3: "YEM", name: "Yemen",                  aliases: ["north yemen", "south yemen", "aden"] },

  // ─── Z ───────────────────────────────────────────────────────────────────────

  { iso3: "ZAM", name: "Zambia",                 aliases: ["northern rhodesia"] },
  { iso3: "ZIM", name: "Zimbabwe",               aliases: ["rhodesia", "southern rhodesia"] },

  // ─── HISTORICAL / SPECIAL OLYMPIC ENTITIES ──────────────────────────────────

  {
    iso3: "URS",
    name: "Soviet Union",
    aliases: ["ussr", "cccp", "soviet", "sssr", "union of soviet socialist republics"]
  },
  {
    iso3: "GDR",
    name: "East Germany",
    aliases: ["german democratic republic", "east german", "ddr"]
  },
  {
    iso3: "FRG",
    name: "West Germany",
    aliases: ["federal republic of germany", "west german"]
  },
  {
    iso3: "YUG",
    name: "Yugoslavia",
    aliases: ["yugoslav", "socialist federal republic of yugoslavia", "sfry"]
  },
  {
    iso3: "TCH",
    name: "Czechoslovakia",
    aliases: ["czech", "czechoslovak", "cssr"]
  },
  {
    iso3: "EUN",
    name: "Unified Team",
    aliases: ["cis", "commonwealth of independent states", "unified", "eun 1992"]
  },
  {
    iso3: "ROC",
    name: "ROC",
    aliases: ["russian olympic committee", "roc 2020", "roc 2021", "russian athletes"]
  },
  {
    iso3: "AIN",
    name: "Individual Neutral Athletes",
    aliases: ["ain", "neutral", "neutral athletes", "ain 2024"]
  },
  {
    iso3: "RFT",
    name: "Refugee Olympic Team",
    aliases: ["refugee", "eor", "rot"]
  },
  {
    iso3: "ANZ",
    name: "Australasia",
    aliases: ["australasian", "anzac (olympic)"]
  },
  {
    iso3: "BOH",
    name: "Bohemia",
    aliases: ["bohemian"]
  },
  {
    iso3: "SRH",
    name: "Southern Rhodesia",
    aliases: []
  }

];
