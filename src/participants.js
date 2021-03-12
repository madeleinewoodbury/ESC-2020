const participants = [
  {
    image:
      "https://eurovision.tv/image/8f6eb1ff-6648-46bc-9b49-1495b24ef09d/hero.png",
    final: true,
    country: {
      name: "Albania",
      code: "AL",
      flag:
        "https://eurovision.tv/image/8d938a00-42af-4b60-835f-415a224a66cd.svg",
    },
    artist: "Arilena Ara",
    song: "Fall From The Sky",
    semifinal: "Second Semifinal",
  },
  {
    image:
      "https://eurovision.tv/image/8fce584b-6a67-435b-947a-c01273f72faa/hero.png",
    final: false,
    country: {
      name: "Australia",
      code: "AU",
      flag:
        "https://static.eurovision.tv/hb-cgi/images/8d93895c-9990-4097-af10-1e22a057fb79.svg",
    },
    artist: "Montaigne",
    song: "Dont' Break Me",
    semifinal: "First Semifinal",
  },
  {
    image:
      "https://eurovision.tv/image/8ec984e0-e133-49f9-bf26-71a555a56f36/hero.jpg",
    final: false,
    country: {
      name: "Belgium",
      code: "BE",
      flag:
        "https://static.eurovision.tv/hb-cgi/images/8d93893e-237b-427a-b982-a0c7d1c41fde.svg",
    },
    artist: "Hooverphonic",
    song: "Release Me",
    semifinal: "First Semifinal",
  },
  {
    image:
      "https://eurovision.tv/image/8ff6517b-4d55-4e71-9467-c66da6b1f0db/hero.jpg",
    final: false,
    country: {
      name: "Azerbaijan",
      code: "AZ",
      flag:
        "https://static.eurovision.tv/hb-cgi/images/8d93895b-f5a2-40c3-8e80-ccb3100837fb.svg",
    },
    artist: "Samira Efendi",
    song: "No song yet",
    semifinal: "First Semifinal",
  },
  {
    image:
      "https://eurovision.tv/image/8ffac508-2d3e-4e47-af31-14c41852c2a0/hero.png",
    final: false,
    country: {
      name: "Belarus",
      code: "BY",
      flag:
        "https://static.eurovision.tv/hb-cgi/images/8d9388bf-2507-4a4e-be3c-b3c5d0e6180f.svg",
    },
    artist: "VAL",
    song: "Da Vidna",
    semifinal: "First Semifinal",
  },
  {
    image:
      "https://eurovision.tv/image/8ff958a2-8fba-488e-a72f-c75aaa16c2b6/hero.jpg",
    final: false,
    country: {
      name: "Croatia",
      code: "HR",
      flag:
        "https://static.eurovision.tv/hb-cgi/images/8d93887c-4206-405c-bcf9-2f15ab74d1ac.svg",
    },
    artist: "Damir Kedžo",
    song: "Divlji Vjetre",
    semifinal: "First Semifinal",
  },
  {
    image:
      "https://eurovision.tv/image/9000da1e-b754-450d-8d11-8f65b45ddd19/hero.jpg",
    final: false,
    country: {
      name: "Ireland",
      code: "IE",
      flag:
        "https://static.eurovision.tv/hb-cgi/images/8d93887b-7df6-40dc-bfa5-aa99d70ac957.svg",
    },
    artist: "Lesley Roy",
    song: "Story Of My Life",
    semifinal: "First Semifinal",
  },
  {
    image:
      "https://eurovision.tv/image/8ffd1f05-450e-409a-80b2-72de55937b87/hero.png",
    final: false,
    country: {
      name: "Russia",
      code: "RU",
      flag:
        "https://static.eurovision.tv/hb-cgi/images/8d9387d3-056c-418a-a660-c192add9a5b9.svg",
    },
    artist: "Little Big",
    song: "No song yet",
    semifinal: "First Semifinal",
  },
  {
    image:
      "https://eurovision.tv/image/900c7edf-74be-418f-b609-6ae310e78b6a/hero.jpg",
    final: false,
    country: {
      name: "Sweden",
      code: "SE",
      flag:
        "https://static.eurovision.tv/hb-cgi/images/8d938783-ccc9-42c9-9f74-89c607bb7dfe.svg",
    },
    artist: "The Mamas",
    song: "Move",
    semifinal: "First Semifinal",
  },
  {
    image:
      "https://eurovision.tv/image/90076d14-8f66-4d6e-b9a3-ba744b9563ac/hero.jpg",
    final: false,
    country: {
      name: "Denmark",
      code: "DK",
      flag:
        "https://static.eurovision.tv/hb-cgi/images/8d9388b2-4037-42a1-80d4-9d707d193b52.svg",
    },
    artist: "Ben & Tan",
    song: "Yes",
    semifinal: "Second Semifinal",
  },
  {
    image:
      "https://eurovision.tv/image/8ff94dd7-ff00-417d-ba50-608678023d5b/hero.jpg",
    final: false,
    country: {
      name: "Estonia",
      code: "EE",
      flag:
        "https://static.eurovision.tv/hb-cgi/images/8d9388b0-cfa5-47fe-8d1c-ec1a9d773af2.svg",
    },
    artist: "Uku Suviste",
    song: "What Love Is",
    semifinal: "Second Semifinal",
  },
  {
    image:
      "https://eurovision.tv/image/8fa9da2b-41fd-4613-ae26-344c17cfb2d0/hero.jpg",
    final: false,
    country: {
      name: "Finland",
      code: "FI",
      flag:
        "https://static.eurovision.tv/hb-cgi/images/8d938883-a75b-4720-8911-8e3796f2a7d1.svg",
    },
    artist: "Aksel",
    song: "Looking Back",
    semifinal: "Second Semifinal",
  },
  {
    image:
      "https://eurovision.tv/image/8fa3dc2c-e0ab-41ee-844f-0cc65058d7b6/hero.jpg",
    final: false,
    country: {
      name: "Iceland",
      code: "IS",
      flag:
        "https://static.eurovision.tv/hb-cgi/images/8d9a46c4-def5-4b18-b4af-375320fbac0e.svg",
    },
    artist: "Daði & Gagnamagnið",
    song: "Gagnamagnið (Think About Things)",
    semifinal: "Second Semifinal",
  },
  {
    image:
      "https://eurovision.tv/image/8ff95f64-907b-4489-8be2-5c2d82f23f93/hero.jpg",
    final: false,
    country: {
      name: "Moldova",
      code: "MD",
      flag:
        "https://static.eurovision.tv/hb-cgi/images/8d938863-f530-484c-9b17-ff4a299bac5d.svg",
    },
    artist: "Natalia Gordienko",
    song: "Prison",
    semifinal: "Second Semifinal",
  },
  {
    image:
      "https://eurovision.tv/image/900c75ad-67a9-4fec-b6d0-0307ddcc9d0f/hero.jpg",
    final: false,
    country: {
      name: "Portugal",
      code: "PT",
      flag:
        "https://static.eurovision.tv/hb-cgi/images/8d9387d4-255c-4052-b159-b62ef4ea2394.svg",
    },
    artist: "Elisa",
    song: "Medo de Sentir",
    semifinal: "Second Semifinal",
  },
  {
    image:
      "https://eurovision.tv/image/90029d06-1c70-4dec-bd87-ce46b8793b54/hero.jpg",
    final: false,
    country: {
      name: "San Marino",
      code: "SM",
      flag:
        "https://static.eurovision.tv/hb-cgi/images/8d9387d1-bb97-4d83-b573-ba00a2eae728.svg",
    },
    artist: "Senhit",
    song: "Freaky!",
    semifinal: "Second Semifinal",
  },
  {
    image:
      "https://eurovision.tv/image/8ffb88ee-c416-4d5b-825f-41ba1a249bd0/hero.jpg",
    final: false,
    country: {
      name: "Serbia",
      code: "RS",
      flag:
        "https://static.eurovision.tv/hb-cgi/images/8d9387d0-c64f-4ab5-bd48-6fb25e5b343d.svg",
    },
    artist: "Hurricane",
    song: "Hasta La Vista",
    semifinal: "Second Semifinal",
  },
  {
    image:
      "https://eurovision.tv/image/9000a94c-062b-4fc8-b5fb-e31af341e03f/hero.jpg",
    final: false,
    country: {
      name: "Switzerland",
      code: "CH",
      flag:
        "https://static.eurovision.tv/hb-cgi/images/8d9388bd-8cdd-47ae-9c14-eba17dcc8d6f.svg",
    },
    artist: "Gjon's Tears",
    song: "Répondez-moi",
    semifinal: "Second Semifinal",
  },
  {
    image:
      "https://eurovision.tv/image/8f3fe88f-3bd3-42e0-8f95-c03621ae90c7/hero.png",
    final: false,
    country: {
      name: "Cyprus",
      code: "CY",
      flag:
        "https://static.eurovision.tv/hb-cgi/images/8d9388bc-39b2-4c25-ac07-51f9e63967c0.svg",
    },
    artist: "Sandro",
    song: "Running",
    semifinal: "First Semifinal",
  },
  {
    image:
      "https://eurovision.tv/image/9000527b-080e-4981-8a05-191c9848f840/hero.jpg",
    final: false,
    country: {
      name: "Israel",
      code: "IL",
      flag:
        "https://static.eurovision.tv/hb-cgi/images/8d93886a-4c64-40a7-8e95-ad0732715a38.svg",
    },
    artist: "Eden Alene",
    song: "Feker Libi",
    semifinal: "First Semifinal",
  },
];

export default participants;
