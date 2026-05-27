// Olympic Medal Trivia Game — All-time medal counts by event through Paris 2024
// Sources: Wikipedia event pages, Olympedia, Statista, World Athletics, World Aquatics
// medals = gold + silver + bronze in that specific event across all Olympics of that season

window.PUZZLES = [

  // ─── ATHLETICS — SPRINTS ────────────────────────────────────────────────────

  {
    id: 0,
    event: "Men's 100m",
    sport: "Athletics",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 40 },
      { iso3: "JAM", country: "Jamaica",       medals: 12 },
      { iso3: "GBR", country: "Great Britain", medals:  8 }
    ]
  },
  {
    id: 1,
    event: "Women's 100m",
    sport: "Athletics",
    gender: "Women's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 18 },
      { iso3: "JAM", country: "Jamaica",       medals: 16 },
      { iso3: "GBR", country: "Great Britain", medals:  5 }
    ]
  },
  {
    id: 2,
    event: "Men's 200m",
    sport: "Athletics",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 28 },
      { iso3: "JAM", country: "Jamaica",       medals: 13 },
      { iso3: "GBR", country: "Great Britain", medals:  5 }
    ]
  },
  {
    id: 3,
    event: "Women's 200m",
    sport: "Athletics",
    gender: "Women's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 13 },
      { iso3: "JAM", country: "Jamaica",       medals: 13 },
      { iso3: "GDR", country: "East Germany",  medals:  6 }
    ]
  },
  {
    id: 4,
    event: "Men's 400m",
    sport: "Athletics",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 25 },
      { iso3: "JAM", country: "Jamaica",       medals:  7 },
      { iso3: "GBR", country: "Great Britain", medals:  6 }
    ]
  },
  {
    id: 5,
    event: "Women's 400m",
    sport: "Athletics",
    gender: "Women's",
    season: "Summer",
    top3: [
      { iso3: "URS", country: "Soviet Union",  medals:  7 },
      { iso3: "GDR", country: "East Germany",  medals:  7 },
      { iso3: "USA", country: "United States", medals:  7 }
    ]
  },
  {
    id: 6,
    event: "Men's 4×100m Relay",
    sport: "Athletics",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 20 },
      { iso3: "JAM", country: "Jamaica",       medals: 12 },
      { iso3: "CAN", country: "Canada",        medals: 10 }
    ]
  },
  {
    id: 7,
    event: "Women's 4×100m Relay",
    sport: "Athletics",
    gender: "Women's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 18 },
      { iso3: "JAM", country: "Jamaica",       medals: 12 },
      { iso3: "GBR", country: "Great Britain", medals: 11 }
    ]
  },
  {
    id: 8,
    event: "Men's 4×400m Relay",
    sport: "Athletics",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 28 },
      { iso3: "GBR", country: "Great Britain", medals: 13 },
      { iso3: "JAM", country: "Jamaica",       medals:  8 }
    ]
  },

  // ─── ATHLETICS — MIDDLE & LONG DISTANCE ────────────────────────────────────

  {
    id: 9,
    event: "Men's 800m",
    sport: "Athletics",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 26 },
      { iso3: "GBR", country: "Great Britain", medals: 14 },
      { iso3: "KEN", country: "Kenya",         medals: 12 }
    ]
  },
  {
    id: 10,
    event: "Women's 800m",
    sport: "Athletics",
    gender: "Women's",
    season: "Summer",
    top3: [
      { iso3: "URS", country: "Soviet Union",  medals:  8 },
      { iso3: "GBR", country: "Great Britain", medals:  7 },
      { iso3: "ROU", country: "Romania",       medals:  5 }
    ]
  },
  {
    id: 11,
    event: "Men's 1500m",
    sport: "Athletics",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "GBR", country: "Great Britain", medals: 10 },
      { iso3: "USA", country: "United States", medals:  9 },
      { iso3: "KEN", country: "Kenya",         medals:  8 }
    ]
  },
  {
    id: 12,
    event: "Men's 10,000m",
    sport: "Athletics",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "ETH", country: "Ethiopia",      medals: 24 },
      { iso3: "FIN", country: "Finland",       medals: 13 },
      { iso3: "KEN", country: "Kenya",         medals: 11 }
    ]
  },
  {
    id: 13,
    event: "Men's Marathon",
    sport: "Athletics",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 11 },
      { iso3: "ETH", country: "Ethiopia",      medals: 10 },
      { iso3: "KEN", country: "Kenya",         medals:  9 }
    ]
  },
  {
    id: 14,
    event: "Women's Marathon",
    sport: "Athletics",
    gender: "Women's",
    season: "Summer",
    top3: [
      { iso3: "KEN", country: "Kenya",         medals:  9 },
      { iso3: "ETH", country: "Ethiopia",      medals:  7 },
      { iso3: "JPN", country: "Japan",         medals:  5 }
    ]
  },

  // ─── ATHLETICS — HURDLES ────────────────────────────────────────────────────

  {
    id: 15,
    event: "Men's 110m Hurdles",
    sport: "Athletics",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 57 },
      { iso3: "GBR", country: "Great Britain", medals:  5 },
      { iso3: "CAN", country: "Canada",        medals:  4 }
    ]
  },
  {
    id: 16,
    event: "Women's 100m Hurdles",
    sport: "Athletics",
    gender: "Women's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 13 },
      { iso3: "GDR", country: "East Germany",  medals:  8 },
      { iso3: "AUS", country: "Australia",     medals:  5 }
    ]
  },
  {
    id: 17,
    event: "Men's 400m Hurdles",
    sport: "Athletics",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 22 },
      { iso3: "GBR", country: "Great Britain", medals:  6 },
      { iso3: "JAM", country: "Jamaica",       medals:  5 }
    ]
  },

  // ─── ATHLETICS — JUMPS ──────────────────────────────────────────────────────

  {
    id: 18,
    event: "Men's Long Jump",
    sport: "Athletics",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 47 },
      { iso3: "URS", country: "Soviet Union",  medals:  6 },
      { iso3: "GBR", country: "Great Britain", medals:  4 }
    ]
  },
  {
    id: 19,
    event: "Women's Long Jump",
    sport: "Athletics",
    gender: "Women's",
    season: "Summer",
    top3: [
      { iso3: "URS", country: "Soviet Union",  medals:  8 },
      { iso3: "USA", country: "United States", medals:  7 },
      { iso3: "ROU", country: "Romania",       medals:  5 }
    ]
  },
  {
    id: 20,
    event: "Men's High Jump",
    sport: "Athletics",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 18 },
      { iso3: "URS", country: "Soviet Union",  medals: 10 },
      { iso3: "CUB", country: "Cuba",          medals:  4 }
    ]
  },
  {
    id: 21,
    event: "Men's Pole Vault",
    sport: "Athletics",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 47 },
      { iso3: "FRA", country: "France",        medals:  7 },
      { iso3: "URS", country: "Soviet Union",  medals:  5 }
    ]
  },
  {
    id: 22,
    event: "Men's Triple Jump",
    sport: "Athletics",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 18 },
      { iso3: "URS", country: "Soviet Union",  medals: 10 },
      { iso3: "POR", country: "Portugal",      medals:  5 }
    ]
  },

  // ─── ATHLETICS — THROWS ─────────────────────────────────────────────────────

  {
    id: 23,
    event: "Men's Shot Put",
    sport: "Athletics",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 25 },
      { iso3: "URS", country: "Soviet Union",  medals:  7 },
      { iso3: "GDR", country: "East Germany",  medals:  4 }
    ]
  },
  {
    id: 24,
    event: "Men's Discus Throw",
    sport: "Athletics",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 22 },
      { iso3: "URS", country: "Soviet Union",  medals:  7 },
      { iso3: "LTU", country: "Lithuania",     medals:  4 }
    ]
  },
  {
    id: 25,
    event: "Men's Hammer Throw",
    sport: "Athletics",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 19 },
      { iso3: "URS", country: "Soviet Union",  medals: 18 },
      { iso3: "HUN", country: "Hungary",       medals:  7 }
    ]
  },
  {
    id: 26,
    event: "Men's Javelin",
    sport: "Athletics",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "FIN", country: "Finland",       medals: 22 },
      { iso3: "NOR", country: "Norway",        medals:  7 },
      { iso3: "SWE", country: "Sweden",        medals:  6 }
    ]
  },

  // ─── ATHLETICS — COMBINED & WALK ────────────────────────────────────────────

  {
    id: 27,
    event: "Men's Decathlon",
    sport: "Athletics",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 29 },
      { iso3: "GBR", country: "Great Britain", medals:  4 },
      { iso3: "GDR", country: "East Germany",  medals:  3 }
    ]
  },
  {
    id: 28,
    event: "Women's Heptathlon",
    sport: "Athletics",
    gender: "Women's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals:  7 },
      { iso3: "GBR", country: "Great Britain", medals:  6 },
      { iso3: "BEL", country: "Belgium",       medals:  3 }
    ]
  },
  {
    id: 29,
    event: "Men's 50km Race Walk",
    sport: "Athletics",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "ITA", country: "Italy",         medals:  6 },
      { iso3: "POL", country: "Poland",        medals:  5 },
      { iso3: "URS", country: "Soviet Union",  medals:  4 }
    ]
  },

  // ─── SWIMMING — MEN'S FREESTYLE ─────────────────────────────────────────────

  {
    id: 30,
    event: "Men's 100m Freestyle",
    sport: "Swimming",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 16 },
      { iso3: "AUS", country: "Australia",     medals:  8 },
      { iso3: "NED", country: "Netherlands",   medals:  4 }
    ]
  },
  {
    id: 31,
    event: "Men's 200m Freestyle",
    sport: "Swimming",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 12 },
      { iso3: "AUS", country: "Australia",     medals:  8 },
      { iso3: "CHN", country: "China",         medals:  4 }
    ]
  },
  {
    id: 32,
    event: "Men's 400m Freestyle",
    sport: "Swimming",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 12 },
      { iso3: "AUS", country: "Australia",     medals: 10 },
      { iso3: "GBR", country: "Great Britain", medals:  4 }
    ]
  },
  {
    id: 33,
    event: "Men's 1500m Freestyle",
    sport: "Swimming",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 14 },
      { iso3: "AUS", country: "Australia",     medals:  8 },
      { iso3: "GBR", country: "Great Britain", medals:  5 }
    ]
  },

  // ─── SWIMMING — MEN'S OTHER STROKES ─────────────────────────────────────────

  {
    id: 34,
    event: "Men's 100m Backstroke",
    sport: "Swimming",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 16 },
      { iso3: "AUS", country: "Australia",     medals:  5 },
      { iso3: "GBR", country: "Great Britain", medals:  3 }
    ]
  },
  {
    id: 35,
    event: "Men's 200m Backstroke",
    sport: "Swimming",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 14 },
      { iso3: "GBR", country: "Great Britain", medals:  4 },
      { iso3: "HUN", country: "Hungary",       medals:  3 }
    ]
  },
  {
    id: 36,
    event: "Men's 100m Breaststroke",
    sport: "Swimming",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals:  8 },
      { iso3: "GBR", country: "Great Britain", medals:  5 },
      { iso3: "AUS", country: "Australia",     medals:  3 }
    ]
  },
  {
    id: 37,
    event: "Men's 200m Breaststroke",
    sport: "Swimming",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals:  8 },
      { iso3: "AUS", country: "Australia",     medals:  6 },
      { iso3: "GBR", country: "Great Britain", medals:  5 }
    ]
  },
  {
    id: 38,
    event: "Men's 100m Butterfly",
    sport: "Swimming",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 12 },
      { iso3: "AUS", country: "Australia",     medals:  4 },
      { iso3: "HUN", country: "Hungary",       medals:  3 }
    ]
  },
  {
    id: 39,
    event: "Men's 200m Butterfly",
    sport: "Swimming",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 11 },
      { iso3: "AUS", country: "Australia",     medals:  5 },
      { iso3: "CHN", country: "China",         medals:  3 }
    ]
  },
  {
    id: 40,
    event: "Men's 200m Individual Medley",
    sport: "Swimming",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 12 },
      { iso3: "HUN", country: "Hungary",       medals:  4 },
      { iso3: "FRA", country: "France",        medals:  3 }
    ]
  },
  {
    id: 41,
    event: "Men's 4×100m Freestyle Relay",
    sport: "Swimming",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 22 },
      { iso3: "AUS", country: "Australia",     medals:  9 },
      { iso3: "FRA", country: "France",        medals:  5 }
    ]
  },
  {
    id: 42,
    event: "Men's 4×200m Freestyle Relay",
    sport: "Swimming",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 26 },
      { iso3: "AUS", country: "Australia",     medals: 10 },
      { iso3: "GBR", country: "Great Britain", medals:  5 }
    ]
  },

  // ─── SWIMMING — WOMEN'S ──────────────────────────────────────────────────────

  {
    id: 43,
    event: "Women's 100m Freestyle",
    sport: "Swimming",
    gender: "Women's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 16 },
      { iso3: "AUS", country: "Australia",     medals:  9 },
      { iso3: "GDR", country: "East Germany",  medals:  5 }
    ]
  },
  {
    id: 44,
    event: "Women's 400m Freestyle",
    sport: "Swimming",
    gender: "Women's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 14 },
      { iso3: "AUS", country: "Australia",     medals: 12 },
      { iso3: "GDR", country: "East Germany",  medals:  4 }
    ]
  },
  {
    id: 45,
    event: "Women's 100m Backstroke",
    sport: "Swimming",
    gender: "Women's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 14 },
      { iso3: "AUS", country: "Australia",     medals:  7 },
      { iso3: "GDR", country: "East Germany",  medals:  5 }
    ]
  },
  {
    id: 46,
    event: "Women's 100m Butterfly",
    sport: "Swimming",
    gender: "Women's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 12 },
      { iso3: "AUS", country: "Australia",     medals:  6 },
      { iso3: "CHN", country: "China",         medals:  4 }
    ]
  },
  {
    id: 47,
    event: "Women's 4×100m Freestyle Relay",
    sport: "Swimming",
    gender: "Women's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 20 },
      { iso3: "AUS", country: "Australia",     medals: 10 },
      { iso3: "GDR", country: "East Germany",  medals:  5 }
    ]
  },

  // ─── GYMNASTICS — MEN'S ──────────────────────────────────────────────────────

  {
    id: 48,
    event: "Men's Gymnastics All-Around",
    sport: "Gymnastics",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "JPN", country: "Japan",         medals: 16 },
      { iso3: "URS", country: "Soviet Union",  medals: 14 },
      { iso3: "CHN", country: "China",         medals:  8 }
    ]
  },
  {
    id: 49,
    event: "Men's Gymnastics Team",
    sport: "Gymnastics",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "URS", country: "Soviet Union",  medals: 14 },
      { iso3: "JPN", country: "Japan",         medals: 12 },
      { iso3: "CHN", country: "China",         medals:  9 }
    ]
  },
  {
    id: 50,
    event: "Men's Floor Exercise",
    sport: "Gymnastics",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "URS", country: "Soviet Union",  medals: 10 },
      { iso3: "JPN", country: "Japan",         medals:  7 },
      { iso3: "CHN", country: "China",         medals:  5 }
    ]
  },
  {
    id: 51,
    event: "Men's Rings",
    sport: "Gymnastics",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "CHN", country: "China",         medals:  8 },
      { iso3: "URS", country: "Soviet Union",  medals:  7 },
      { iso3: "GRE", country: "Greece",        medals:  4 }
    ]
  },
  {
    id: 52,
    event: "Men's Pommel Horse",
    sport: "Gymnastics",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "URS", country: "Soviet Union",  medals:  9 },
      { iso3: "HUN", country: "Hungary",       medals:  7 },
      { iso3: "CHN", country: "China",         medals:  6 }
    ]
  },

  // ─── GYMNASTICS — WOMEN'S ────────────────────────────────────────────────────

  {
    id: 53,
    event: "Women's Gymnastics All-Around",
    sport: "Gymnastics",
    gender: "Women's",
    season: "Summer",
    top3: [
      { iso3: "URS", country: "Soviet Union",  medals: 10 },
      { iso3: "USA", country: "United States", medals:  9 },
      { iso3: "ROU", country: "Romania",       medals:  7 }
    ]
  },
  {
    id: 54,
    event: "Women's Gymnastics Team",
    sport: "Gymnastics",
    gender: "Women's",
    season: "Summer",
    top3: [
      { iso3: "URS", country: "Soviet Union",  medals: 13 },
      { iso3: "ROU", country: "Romania",       medals:  9 },
      { iso3: "USA", country: "United States", medals:  8 }
    ]
  },
  {
    id: 55,
    event: "Women's Floor Exercise",
    sport: "Gymnastics",
    gender: "Women's",
    season: "Summer",
    top3: [
      { iso3: "URS", country: "Soviet Union",  medals: 11 },
      { iso3: "ROU", country: "Romania",       medals:  7 },
      { iso3: "USA", country: "United States", medals:  6 }
    ]
  },
  {
    id: 56,
    event: "Women's Balance Beam",
    sport: "Gymnastics",
    gender: "Women's",
    season: "Summer",
    top3: [
      { iso3: "URS", country: "Soviet Union",  medals: 10 },
      { iso3: "ROU", country: "Romania",       medals:  9 },
      { iso3: "CHN", country: "China",         medals:  6 }
    ]
  },
  {
    id: 57,
    event: "Women's Uneven Bars",
    sport: "Gymnastics",
    gender: "Women's",
    season: "Summer",
    top3: [
      { iso3: "URS", country: "Soviet Union",  medals:  9 },
      { iso3: "ROU", country: "Romania",       medals:  7 },
      { iso3: "CHN", country: "China",         medals:  6 }
    ]
  },
  {
    id: 58,
    event: "Women's Vault",
    sport: "Gymnastics",
    gender: "Women's",
    season: "Summer",
    top3: [
      { iso3: "URS", country: "Soviet Union",  medals: 10 },
      { iso3: "ROU", country: "Romania",       medals:  7 },
      { iso3: "USA", country: "United States", medals:  5 }
    ]
  },

  // ─── ROWING ─────────────────────────────────────────────────────────────────

  {
    id: 59,
    event: "Men's Single Sculls",
    sport: "Rowing",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "FIN", country: "Finland",       medals:  5 },
      { iso3: "URS", country: "Soviet Union",  medals:  5 },
      { iso3: "NOR", country: "Norway",        medals:  4 }
    ]
  },
  {
    id: 60,
    event: "Men's Eight",
    sport: "Rowing",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 17 },
      { iso3: "CAN", country: "Canada",        medals: 11 },
      { iso3: "GBR", country: "Great Britain", medals: 10 }
    ]
  },
  {
    id: 61,
    event: "Men's Coxless Four",
    sport: "Rowing",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "GBR", country: "Great Britain", medals: 10 },
      { iso3: "AUS", country: "Australia",     medals:  7 },
      { iso3: "USA", country: "United States", medals:  6 }
    ]
  },

  // ─── CYCLING ─────────────────────────────────────────────────────────────────

  {
    id: 62,
    event: "Men's Road Race",
    sport: "Cycling",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "ITA", country: "Italy",         medals:  8 },
      { iso3: "BEL", country: "Belgium",       medals:  7 },
      { iso3: "FRA", country: "France",        medals:  6 }
    ]
  },
  {
    id: 63,
    event: "Men's Track Sprint",
    sport: "Cycling",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "FRA", country: "France",        medals: 15 },
      { iso3: "GBR", country: "Great Britain", medals: 12 },
      { iso3: "NED", country: "Netherlands",   medals:  8 }
    ]
  },
  {
    id: 64,
    event: "Men's Team Sprint",
    sport: "Cycling",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "GBR", country: "Great Britain", medals:  8 },
      { iso3: "FRA", country: "France",        medals:  5 },
      { iso3: "NED", country: "Netherlands",   medals:  5 }
    ]
  },
  {
    id: 65,
    event: "Men's Keirin",
    sport: "Cycling",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "GBR", country: "Great Britain", medals:  7 },
      { iso3: "NED", country: "Netherlands",   medals:  4 },
      { iso3: "FRA", country: "France",        medals:  3 }
    ]
  },

  // ─── WRESTLING ───────────────────────────────────────────────────────────────

  {
    id: 66,
    event: "Men's Freestyle Wrestling 65kg",
    sport: "Wrestling",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "URS", country: "Soviet Union",  medals:  8 },
      { iso3: "USA", country: "United States", medals:  7 },
      { iso3: "JPN", country: "Japan",         medals:  6 }
    ]
  },
  {
    id: 67,
    event: "Men's Freestyle Wrestling 74kg",
    sport: "Wrestling",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "RUS", country: "Russia",        medals:  7 },
      { iso3: "USA", country: "United States", medals:  6 },
      { iso3: "IRN", country: "Iran",          medals:  4 }
    ]
  },
  {
    id: 68,
    event: "Men's Greco-Roman Wrestling 67kg",
    sport: "Wrestling",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "URS", country: "Soviet Union",  medals:  9 },
      { iso3: "HUN", country: "Hungary",       medals:  6 },
      { iso3: "TUR", country: "Turkey",        medals:  4 }
    ]
  },
  {
    id: 69,
    event: "Men's Greco-Roman Wrestling 87kg",
    sport: "Wrestling",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "URS", country: "Soviet Union",  medals:  8 },
      { iso3: "RUS", country: "Russia",        medals:  5 },
      { iso3: "HUN", country: "Hungary",       medals:  4 }
    ]
  },

  // ─── BOXING ──────────────────────────────────────────────────────────────────

  {
    id: 70,
    event: "Men's Boxing Light Heavyweight",
    sport: "Boxing",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals:  9 },
      { iso3: "CUB", country: "Cuba",          medals:  7 },
      { iso3: "URS", country: "Soviet Union",  medals:  5 }
    ]
  },
  {
    id: 71,
    event: "Men's Boxing Heavyweight",
    sport: "Boxing",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "CUB", country: "Cuba",          medals:  9 },
      { iso3: "USA", country: "United States", medals:  8 },
      { iso3: "GBR", country: "Great Britain", medals:  4 }
    ]
  },
  {
    id: 72,
    event: "Men's Boxing Lightweight",
    sport: "Boxing",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 10 },
      { iso3: "CUB", country: "Cuba",          medals:  7 },
      { iso3: "URS", country: "Soviet Union",  medals:  5 }
    ]
  },
  {
    id: 73,
    event: "Men's Boxing Welterweight",
    sport: "Boxing",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "CUB", country: "Cuba",          medals:  8 },
      { iso3: "USA", country: "United States", medals:  7 },
      { iso3: "URS", country: "Soviet Union",  medals:  5 }
    ]
  },

  // ─── JUDO ─────────────────────────────────────────────────────────────────────

  {
    id: 74,
    event: "Men's Judo 66kg",
    sport: "Judo",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "JPN", country: "Japan",         medals: 10 },
      { iso3: "FRA", country: "France",        medals:  5 },
      { iso3: "KOR", country: "South Korea",   medals:  4 }
    ]
  },
  {
    id: 75,
    event: "Men's Judo 73kg",
    sport: "Judo",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "JPN", country: "Japan",         medals: 10 },
      { iso3: "KOR", country: "South Korea",   medals:  5 },
      { iso3: "FRA", country: "France",        medals:  4 }
    ]
  },
  {
    id: 76,
    event: "Men's Judo 100kg",
    sport: "Judo",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "JPN", country: "Japan",         medals:  7 },
      { iso3: "RUS", country: "Russia",        medals:  5 },
      { iso3: "GEO", country: "Georgia",       medals:  4 }
    ]
  },
  {
    id: 77,
    event: "Women's Judo 57kg",
    sport: "Judo",
    gender: "Women's",
    season: "Summer",
    top3: [
      { iso3: "JPN", country: "Japan",         medals:  8 },
      { iso3: "FRA", country: "France",        medals:  4 },
      { iso3: "KOR", country: "South Korea",   medals:  3 }
    ]
  },

  // ─── WEIGHTLIFTING ───────────────────────────────────────────────────────────

  {
    id: 78,
    event: "Men's Weightlifting 61kg",
    sport: "Weightlifting",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "CHN", country: "China",         medals: 10 },
      { iso3: "TUR", country: "Turkey",        medals:  5 },
      { iso3: "BUL", country: "Bulgaria",      medals:  4 }
    ]
  },
  {
    id: 79,
    event: "Men's Weightlifting 89kg",
    sport: "Weightlifting",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "CHN", country: "China",         medals:  7 },
      { iso3: "URS", country: "Soviet Union",  medals:  6 },
      { iso3: "POL", country: "Poland",        medals:  4 }
    ]
  },
  {
    id: 80,
    event: "Women's Weightlifting 55kg",
    sport: "Weightlifting",
    gender: "Women's",
    season: "Summer",
    top3: [
      { iso3: "CHN", country: "China",         medals:  8 },
      { iso3: "THA", country: "Thailand",      medals:  5 },
      { iso3: "TPE", country: "Chinese Taipei", medals:  3 }
    ]
  },

  // ─── SHOOTING ────────────────────────────────────────────────────────────────

  {
    id: 81,
    event: "Men's 10m Air Rifle",
    sport: "Shooting",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "CHN", country: "China",         medals:  6 },
      { iso3: "RUS", country: "Russia",        medals:  4 },
      { iso3: "GER", country: "Germany",       medals:  3 }
    ]
  },
  {
    id: 82,
    event: "Men's 10m Air Pistol",
    sport: "Shooting",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "CHN", country: "China",         medals:  7 },
      { iso3: "RUS", country: "Russia",        medals:  4 },
      { iso3: "GRE", country: "Greece",        medals:  3 }
    ]
  },
  {
    id: 83,
    event: "Men's 50m Rifle 3 Positions",
    sport: "Shooting",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals:  8 },
      { iso3: "URS", country: "Soviet Union",  medals:  6 },
      { iso3: "SUI", country: "Switzerland",   medals:  5 }
    ]
  },
  {
    id: 84,
    event: "Men's Trap",
    sport: "Shooting",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "ITA", country: "Italy",         medals:  7 },
      { iso3: "USA", country: "United States", medals:  6 },
      { iso3: "GBR", country: "Great Britain", medals:  5 }
    ]
  },

  // ─── FENCING ─────────────────────────────────────────────────────────────────

  {
    id: 85,
    event: "Men's Individual Foil",
    sport: "Fencing",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "ITA", country: "Italy",         medals: 14 },
      { iso3: "FRA", country: "France",        medals: 13 },
      { iso3: "HUN", country: "Hungary",       medals:  5 }
    ]
  },
  {
    id: 86,
    event: "Men's Individual Épée",
    sport: "Fencing",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "FRA", country: "France",        medals: 14 },
      { iso3: "ITA", country: "Italy",         medals: 13 },
      { iso3: "HUN", country: "Hungary",       medals:  5 }
    ]
  },
  {
    id: 87,
    event: "Men's Individual Sabre",
    sport: "Fencing",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "HUN", country: "Hungary",       medals: 15 },
      { iso3: "ITA", country: "Italy",         medals:  9 },
      { iso3: "URS", country: "Soviet Union",  medals:  7 }
    ]
  },
  {
    id: 88,
    event: "Women's Individual Foil",
    sport: "Fencing",
    gender: "Women's",
    season: "Summer",
    top3: [
      { iso3: "ITA", country: "Italy",         medals:  8 },
      { iso3: "FRA", country: "France",        medals:  7 },
      { iso3: "HUN", country: "Hungary",       medals:  6 }
    ]
  },

  // ─── ADDITIONAL ATHLETICS ─────────────────────────────────────────────────────

  {
    id: 89,
    event: "Women's 400m Hurdles",
    sport: "Athletics",
    gender: "Women's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 10 },
      { iso3: "RUS", country: "Russia",        medals:  5 },
      { iso3: "JAM", country: "Jamaica",       medals:  4 }
    ]
  },
  {
    id: 90,
    event: "Women's 1500m",
    sport: "Athletics",
    gender: "Women's",
    season: "Summer",
    top3: [
      { iso3: "URS", country: "Soviet Union",  medals:  7 },
      { iso3: "GBR", country: "Great Britain", medals:  5 },
      { iso3: "ETH", country: "Ethiopia",      medals:  4 }
    ]
  },
  {
    id: 91,
    event: "Women's 5000m",
    sport: "Athletics",
    gender: "Women's",
    season: "Summer",
    top3: [
      { iso3: "ETH", country: "Ethiopia",      medals:  8 },
      { iso3: "KEN", country: "Kenya",         medals:  5 },
      { iso3: "TUR", country: "Turkey",        medals:  3 }
    ]
  },
  {
    id: 92,
    event: "Men's 5000m",
    sport: "Athletics",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "FIN", country: "Finland",       medals: 14 },
      { iso3: "ETH", country: "Ethiopia",      medals: 10 },
      { iso3: "KEN", country: "Kenya",         medals:  8 }
    ]
  },
  {
    id: 93,
    event: "Men's 3000m Steeplechase",
    sport: "Athletics",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "KEN", country: "Kenya",         medals: 18 },
      { iso3: "FIN", country: "Finland",       medals:  8 },
      { iso3: "GBR", country: "Great Britain", medals:  5 }
    ]
  },
  {
    id: 94,
    event: "Men's 20km Race Walk",
    sport: "Athletics",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "URS", country: "Soviet Union",  medals:  7 },
      { iso3: "MEX", country: "Mexico",        medals:  5 },
      { iso3: "CHN", country: "China",         medals:  5 }
    ]
  },
  {
    id: 95,
    event: "Women's Shot Put",
    sport: "Athletics",
    gender: "Women's",
    season: "Summer",
    top3: [
      { iso3: "URS", country: "Soviet Union",  medals:  9 },
      { iso3: "GDR", country: "East Germany",  medals:  7 },
      { iso3: "CHN", country: "China",         medals:  5 }
    ]
  },
  {
    id: 96,
    event: "Women's Discus Throw",
    sport: "Athletics",
    gender: "Women's",
    season: "Summer",
    top3: [
      { iso3: "URS", country: "Soviet Union",  medals: 10 },
      { iso3: "GDR", country: "East Germany",  medals:  8 },
      { iso3: "ROU", country: "Romania",       medals:  4 }
    ]
  },
  {
    id: 97,
    event: "Women's Javelin",
    sport: "Athletics",
    gender: "Women's",
    season: "Summer",
    top3: [
      { iso3: "URS", country: "Soviet Union",  medals:  8 },
      { iso3: "GDR", country: "East Germany",  medals:  5 },
      { iso3: "NOR", country: "Norway",        medals:  4 }
    ]
  },
  {
    id: 98,
    event: "Men's High Jump",
    sport: "Athletics",
    gender: "Men's",
    season: "Summer",
    top3: [
      { iso3: "USA", country: "United States", medals: 18 },
      { iso3: "URS", country: "Soviet Union",  medals: 10 },
      { iso3: "CUB", country: "Cuba",          medals:  4 }
    ]
  },
  {
    id: 99,
    event: "Women's High Jump",
    sport: "Athletics",
    gender: "Women's",
    season: "Summer",
    top3: [
      { iso3: "URS", country: "Soviet Union",  medals:  8 },
      { iso3: "ROU", country: "Romania",       medals:  5 },
      { iso3: "AUS", country: "Australia",     medals:  4 }
    ]
  },

  // ─── WINTER OLYMPICS — ALPINE SKIING ────────────────────────────────────────

  {
    id: 100,
    event: "Men's Downhill",
    sport: "Alpine Skiing",
    gender: "Men's",
    season: "Winter",
    top3: [
      { iso3: "AUT", country: "Austria",       medals: 20 },
      { iso3: "SUI", country: "Switzerland",   medals: 14 },
      { iso3: "FRA", country: "France",        medals: 11 }
    ]
  },
  {
    id: 101,
    event: "Women's Slalom",
    sport: "Alpine Skiing",
    gender: "Women's",
    season: "Winter",
    top3: [
      { iso3: "AUT", country: "Austria",       medals: 10 },
      { iso3: "SWE", country: "Sweden",        medals:  8 },
      { iso3: "SUI", country: "Switzerland",   medals:  7 }
    ]
  },
  {
    id: 102,
    event: "Men's Giant Slalom",
    sport: "Alpine Skiing",
    gender: "Men's",
    season: "Winter",
    top3: [
      { iso3: "AUT", country: "Austria",       medals: 12 },
      { iso3: "SUI", country: "Switzerland",   medals:  9 },
      { iso3: "USA", country: "United States", medals:  6 }
    ]
  },

  // ─── WINTER OLYMPICS — SPEED SKATING ────────────────────────────────────────

  {
    id: 103,
    event: "Men's 500m Speed Skating",
    sport: "Speed Skating",
    gender: "Men's",
    season: "Winter",
    top3: [
      { iso3: "USA", country: "United States", medals: 12 },
      { iso3: "NOR", country: "Norway",        medals:  8 },
      { iso3: "JPN", country: "Japan",         medals:  6 }
    ]
  },
  {
    id: 104,
    event: "Men's 10,000m Speed Skating",
    sport: "Speed Skating",
    gender: "Men's",
    season: "Winter",
    top3: [
      { iso3: "NED", country: "Netherlands",   medals: 16 },
      { iso3: "NOR", country: "Norway",        medals: 10 },
      { iso3: "SWE", country: "Sweden",        medals:  8 }
    ]
  },
  {
    id: 105,
    event: "Women's 5,000m Speed Skating",
    sport: "Speed Skating",
    gender: "Women's",
    season: "Winter",
    top3: [
      { iso3: "NED", country: "Netherlands",   medals: 10 },
      { iso3: "GDR", country: "East Germany",  medals:  7 },
      { iso3: "NOR", country: "Norway",        medals:  5 }
    ]
  },

  // ─── WINTER OLYMPICS — CROSS-COUNTRY SKIING ─────────────────────────────────

  {
    id: 106,
    event: "Men's 50km Cross-Country",
    sport: "Cross-Country Skiing",
    gender: "Men's",
    season: "Winter",
    top3: [
      { iso3: "NOR", country: "Norway",        medals: 14 },
      { iso3: "SWE", country: "Sweden",        medals: 10 },
      { iso3: "RUS", country: "Russia",        medals:  6 }
    ]
  },
  {
    id: 107,
    event: "Women's 4×5km Relay Cross-Country",
    sport: "Cross-Country Skiing",
    gender: "Women's",
    season: "Winter",
    top3: [
      { iso3: "URS", country: "Soviet Union",  medals:  8 },
      { iso3: "NOR", country: "Norway",        medals:  7 },
      { iso3: "FIN", country: "Finland",       medals:  5 }
    ]
  },

  // ─── WINTER OLYMPICS — BIATHLON ──────────────────────────────────────────────

  {
    id: 108,
    event: "Men's Biathlon 20km Individual",
    sport: "Biathlon",
    gender: "Men's",
    season: "Winter",
    top3: [
      { iso3: "NOR", country: "Norway",        medals: 10 },
      { iso3: "GER", country: "Germany",       medals:  8 },
      { iso3: "RUS", country: "Russia",        medals:  6 }
    ]
  },
  {
    id: 109,
    event: "Women's Biathlon 7.5km Sprint",
    sport: "Biathlon",
    gender: "Women's",
    season: "Winter",
    top3: [
      { iso3: "NOR", country: "Norway",        medals:  9 },
      { iso3: "GER", country: "Germany",       medals:  8 },
      { iso3: "RUS", country: "Russia",        medals:  7 }
    ]
  },

  // ─── WINTER OLYMPICS — SKI JUMPING ──────────────────────────────────────────

  {
    id: 110,
    event: "Men's Ski Jumping Large Hill",
    sport: "Ski Jumping",
    gender: "Men's",
    season: "Winter",
    top3: [
      { iso3: "FIN", country: "Finland",       medals: 12 },
      { iso3: "NOR", country: "Norway",        medals: 11 },
      { iso3: "AUT", country: "Austria",       medals:  9 }
    ]
  },

  // ─── WINTER OLYMPICS — ICE HOCKEY ───────────────────────────────────────────

  {
    id: 111,
    event: "Men's Ice Hockey",
    sport: "Ice Hockey",
    gender: "Men's",
    season: "Winter",
    top3: [
      { iso3: "CAN", country: "Canada",        medals: 14 },
      { iso3: "URS", country: "Soviet Union",  medals: 10 },
      { iso3: "USA", country: "United States", medals:  8 }
    ]
  },
  {
    id: 112,
    event: "Women's Ice Hockey",
    sport: "Ice Hockey",
    gender: "Women's",
    season: "Winter",
    top3: [
      { iso3: "CAN", country: "Canada",        medals:  7 },
      { iso3: "USA", country: "United States", medals:  6 },
      { iso3: "SWE", country: "Sweden",        medals:  3 }
    ]
  },

  // ─── WINTER OLYMPICS — FIGURE SKATING ───────────────────────────────────────

  {
    id: 113,
    event: "Women's Figure Skating",
    sport: "Figure Skating",
    gender: "Women's",
    season: "Winter",
    top3: [
      { iso3: "USA", country: "United States", medals: 14 },
      { iso3: "URS", country: "Soviet Union",  medals:  8 },
      { iso3: "AUT", country: "Austria",       medals:  6 }
    ]
  },
  {
    id: 114,
    event: "Pairs Figure Skating",
    sport: "Figure Skating",
    gender: "Mixed",
    season: "Winter",
    top3: [
      { iso3: "URS", country: "Soviet Union",  medals: 12 },
      { iso3: "RUS", country: "Russia",        medals:  8 },
      { iso3: "GER", country: "Germany",       medals:  5 }
    ]
  },

  // ─── WINTER OLYMPICS — SHORT TRACK ──────────────────────────────────────────

  {
    id: 115,
    event: "Men's Short Track 1000m",
    sport: "Short Track Speed Skating",
    gender: "Men's",
    season: "Winter",
    top3: [
      { iso3: "KOR", country: "South Korea",   medals: 12 },
      { iso3: "CAN", country: "Canada",        medals:  6 },
      { iso3: "CHN", country: "China",         medals:  4 }
    ]
  },

  // ─── WINTER OLYMPICS — LUGE & BOBSLED ───────────────────────────────────────

  {
    id: 116,
    event: "Men's Luge Singles",
    sport: "Luge",
    gender: "Men's",
    season: "Winter",
    top3: [
      { iso3: "GER", country: "Germany",       medals: 14 },
      { iso3: "AUT", country: "Austria",       medals:  8 },
      { iso3: "ITA", country: "Italy",         medals:  5 }
    ]
  },
  {
    id: 117,
    event: "Men's Bobsled Two-Man",
    sport: "Bobsled",
    gender: "Men's",
    season: "Winter",
    top3: [
      { iso3: "SUI", country: "Switzerland",   medals: 12 },
      { iso3: "GER", country: "Germany",       medals: 10 },
      { iso3: "ITA", country: "Italy",         medals:  7 }
    ]
  },

  // ─── WINTER OLYMPICS — CURLING ───────────────────────────────────────────────

  {
    id: 118,
    event: "Men's Curling",
    sport: "Curling",
    gender: "Men's",
    season: "Winter",
    top3: [
      { iso3: "CAN", country: "Canada",        medals:  6 },
      { iso3: "SWE", country: "Sweden",        medals:  5 },
      { iso3: "SUI", country: "Switzerland",   medals:  3 }
    ]
  },
  {
    id: 119,
    event: "Women's Curling",
    sport: "Curling",
    gender: "Women's",
    season: "Winter",
    top3: [
      { iso3: "CAN", country: "Canada",        medals:  6 },
      { iso3: "SWE", country: "Sweden",        medals:  4 },
      { iso3: "NOR", country: "Norway",        medals:  3 }
    ]
  }

];

// Shuffle puzzles into a deterministic but non-sequential order using a
// seeded LCG so consecutive days span different sports and seasons.
(function () {
  var seed = 86000;
  function rand() {
    seed = (seed * 1664525 + 1013904223) & 0xFFFFFFFF;
    return (seed >>> 0) / 4294967296;
  }
  var arr = window.PUZZLES;
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(rand() * (i + 1));
    var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
  }
})();
