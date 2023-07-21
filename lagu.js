

use lagudb


db.createCollection("Songs")


db.createCollection("Artists")


db.createCollection("Popular_Songs")


db.Songs.insertMany([
  {
    title: "Dreaming in the Stars",
    artists: ["Luna Nova"],
    album: "Stardust Serenade",
  },
  {
    title: "Midnight Serenade",
    artists: ["The Nightingales"],
    album: "Moonlit Melodies",
  },
  {
    title: "Whispers of the Wind",
    artists: ["Mystic Breeze"],
    album: "Enchanted Journey",
  },
  {
    title: "Eternal Embrace",
    artists: ["Ephemeral Souls"],
    album: "Everlasting Memories",
  },
  {
    title: "Dancing on Rainbows",
    artists: ["Chromatic Skies"],
    album: "Colorful Horizons",
  },
  {
    title: "Wandering Souls",
    artists: ["Nomad Beats"],
    album: "Journey Beyond",
  },
  {
    title: "Celestial Rhapsody",
    artists: ["Stellar Symphony"],
    album: "Cosmic Overture",
  },
  {
    title: "Whispers in the Woods",
    artists: ["Sylvan Spirits"],
    album: "Enchanted Forest",
  },
  {
    title: "Galactic Echoes",
    artists: ["Astro Harmonies"],
    album: "Interstellar Odyssey",
  },
  {
    title: "Melodies of Tomorrow",
    artists: ["Time Travelers"],
    album: "Temporal Visions",
  },
  {
    title: "Serenading the Stars",
    artists: ["Cosmic Crooners"],
    album: "Galactic Ballads",
  },
]);
  


db.Artists.insertMany([
  {
    "name": "Rick Astley",
    "dateOfBirth": "1966-02-06",
    "genres": ["Pop", "Dance"]
  },
  {
    "name": "Taylor Swift",
    "dateOfBirth": "1989-12-13",
    "genres": ["Pop", "Country"]
  },
  {
    "name": "Ed Sheeran",
    "dateOfBirth": "1991-02-17",
    "genres": ["Pop", "Dance"]
  },
  {
    "name": "Shawn Mendes",
    "dateOfBirth": "1998-08-08",
    "genres": ["Pop"]
  },
  {
    "name": "Post Malone",
    "dateOfBirth": "1995-07-04",
    "genres": ["Hip hop", "Pop"]
  },
  {
    "name": "Tulus",
    "dateOfBirth": "1987-08-20",
    "genres": ["Pop", "Jazz"]
  },
  {
    "name": "Bruno Major",
    "dateOfBirth": "1988-07-15",
    "genres": ["R&B", "Pop"]
  },
  {
    "name": "Rex Orange County",
    "dateOfBirth": "1998-05-04",
    "genres": ["Pop", "Indie Rock"]
  },
  {
    "name": "Kunto Aji",
    "dateOfBirth": "1987-01-04",
    "genres": ["Pop", "Jazz"]
  },
  {
    "name": "John Mayer",
    "dateOfBirth": "1977-10-16",
    "genres": ["Pop", "Rock"]
  },
  {
    "name": "Swae Lee",
    "dateOfBirth": "1993-06-07",
    "genres": ["Hip Hop", "Rap"]
  }
]);

// 
db.Popular_Songs.insertMany([
  {
    "title": "Drivers License",
    "playCount": 2500,
    "period": "Tahun 2021"
  },
  {
    "title": "Blinding Lights",
    "playCount": 2200,
    "period": "Tahun 2021"
  },
  {
    "title": "Levitating",
    "playCount": 2100,
    "period": "Tahun 2021"
  },
  {
    "title": "Save Your Tears",
    "playCount": 1900,
    "period": "Tahun 2021"
  },
  {
    "title": "Good 4 U",
    "playCount": 1800,
    "period": "Tahun 2021"
  },
  {
    "title": "Peaches",
    "playCount": 1750,
    "period": "Tahun 2021"
  },
  {
    "title": "Leave The Door Open",
    "playCount": 1600,
    "period": "Tahun 2021"
  },
  {
    "title": "Montero (Call Me By Your Name)",
    "playCount": 1500,
    "period": "Tahun 2021"
  },
  {
    "title": "Kiss Me More",
    "playCount": 1400,
    "period": "Tahun 2021"
  },
  {
    "title": "Dynamite",
    "playCount": 1300,
    "period": "Tahun 2021"
  },
]);