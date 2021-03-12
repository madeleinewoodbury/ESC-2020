const countries = [
  {
    name: "Albania",
    code: "AL",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d938a00-42af-4b60-835f-415a224a66cd.svg",
  },
  {
    name: "Andorra",
    code: "AD",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d9389ed-81c5-443e-8983-5833449c844c.svg",
  },
  {
    name: "Armenia",
    code: "AM",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d93896f-fd4c-4afe-bd6e-9caaab1fde55.svg",
  },
  {
    name: "Australia",
    code: "AU",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d93895c-9990-4097-af10-1e22a057fb79.svg",
  },
  {
    name: "Austria",
    code: "AT",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d93895c-40a0-4991-b0c2-ece12225bf32.svg",
  },
  {
    name: "Azerbaijan",
    code: "AZ",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d93895b-f5a2-40c3-8e80-ccb3100837fb.svg",
  },
  {
    name: "Belarus",
    code: "BY",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d9388bf-2507-4a4e-be3c-b3c5d0e6180f.svg",
  },
  {
    name: "Belgium",
    code: "BE",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d93893e-237b-427a-b982-a0c7d1c41fde.svg",
  },
  {
    name: "Bosnia & Herzegovina",
    code: "BA",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d9388c0-7ad5-40db-9208-781ee2617ab5.svg",
  },
  {
    name: "Bulgaria",
    code: "BG",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d9388c1-04f7-4d41-818d-6d3bacf4253a.svg",
  },
  {
    name: "Croatia",
    code: "HR",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d93887c-4206-405c-bcf9-2f15ab74d1ac.svg",
  },
  {
    name: "Cyprus",
    code: "CY",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d9388bc-39b2-4c25-ac07-51f9e63967c0.svg",
  },
  {
    name: "Czech Republic",
    code: "CZ",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d9388b8-1024-4996-b07f-f858b38d5a4d.svg",
  },
  {
    name: "Denmark",
    code: "DK",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d9388b2-4037-42a1-80d4-9d707d193b52.svg",
  },
  {
    name: "Estonia",
    code: "EE",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d9388b0-cfa5-47fe-8d1c-ec1a9d773af2.svg",
  },
  {
    name: "Finland",
    code: "FI",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d938883-a75b-4720-8911-8e3796f2a7d1.svg",
  },
  {
    name: "France",
    code: "FR",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d938882-e456-4901-a2d2-de3b6ccc7cdb.svg",
  },
  {
    name: "Georgia",
    code: "GE",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d938882-5102-4e3c-8e83-527766ab211c.svg",
  },
  {
    name: "Germany",
    code: "DE",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d9388b6-92cc-4f05-a687-e4ebe31966cb.svg",
  },
  {
    name: "Greece",
    code: "GR",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d93887d-4341-4b77-9c5c-7ad22f3262b3.svg",
  },
  {
    name: "Hungary",
    code: "HU",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d93887b-f81b-4766-92d1-0324884a9d2a.svg",
  },
  {
    name: "Iceland",
    code: "IS",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d9a46c4-def5-4b18-b4af-375320fbac0e.svg",
  },
  {
    name: "Ireland",
    code: "IE",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d93887b-7df6-40dc-bfa5-aa99d70ac957.svg",
  },
  {
    name: "Israel",
    code: "IL",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d93886a-4c64-40a7-8e95-ad0732715a38.svg",
  },
  {
    name: "Italy",
    code: "IT",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d93886a-27ac-4996-bc17-2f12b47b2a0e.svg",
  },
  {
    name: "Latvia",
    code: "LV",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d938866-37b5-494b-bf22-b216ab1d8fce.svg",
  },
  {
    name: "Lithuania",
    code: "LT",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d938867-7e59-4252-979c-a9f152caa024.svg",
  },
  {
    name: "Luxembourg",
    code: "LU",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d938866-ea96-45d3-8670-337b807de746.svg",
  },
  {
    name: "Malta",
    code: "MT",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d9387f2-8d60-494e-bd92-0d201e17c376.svg",
  },
  {
    name: "Moldova",
    code: "MD",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d938863-f530-484c-9b17-ff4a299bac5d.svg",
  },
  {
    name: "Monaco",
    code: "MC",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d938865-0070-4944-81e2-d0b76c5b0ff8.svg",
  },
  {
    name: "Montenegro",
    code: "ME",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d9387ef-688e-4131-b6f9-cfc01885b6cb.svg",
  },
  {
    name: "Morocco",
    code: "MA",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d938865-f47a-477d-b7ab-82eab0ec3387.svg",
  },
  {
    name: "North Macedonia",
    code: "MK",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d938863-a50c-4ded-8acf-3205851eae1f.svg",
  },
  {
    name: "Norway",
    code: "NO",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d9387de-68de-403d-b3d0-1bdcf1c361e6.svg",
  },
  {
    name: "Poland",
    code: "PL",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d9387d4-cc6f-437f-a646-cb3bde395dc2.svg",
  },
  {
    name: "Portugal",
    code: "PT",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d9387d4-255c-4052-b159-b62ef4ea2394.svg",
  },
  {
    name: "Romania",
    code: "RO",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d9a45ac-baef-4080-a24a-1afa3361e0ec.svg",
  },
  {
    name: "Russia",
    code: "RU",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d9387d3-056c-418a-a660-c192add9a5b9.svg",
  },
  {
    name: "San Marino",
    code: "SM",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d9387d1-bb97-4d83-b573-ba00a2eae728.svg",
  },
  {
    name: "Serbia",
    code: "RS",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d9387d0-c64f-4ab5-bd48-6fb25e5b343d.svg",
  },
  {
    name: "Serbia & Montenegro",
    code: "RM",
    altIcon: "https://cdn.jsdelivr.net/emojione/assets/4.5/png/64/26aa.png",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d9386fc-d9a2-4ca1-8e5a-8855f2b74519.svg",
  },
  {
    name: "Slovakia",
    code: "SK",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d9387cf-e1f3-4a73-bc96-bc9a59cb60a4.svg",
  },
  {
    name: "Slovenia",
    code: "SI",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d938784-099c-474a-99fb-51ec49400899.svg",
  },
  {
    name: "Spain",
    code: "ES",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d9388b1-0d59-43b4-9777-ec7b545077f3.svg",
  },
  {
    name: "Sweden",
    code: "SE",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d938783-ccc9-42c9-9f74-89c607bb7dfe.svg",
  },
  {
    name: "Switzerland",
    code: "CH",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d9388bd-8cdd-47ae-9c14-eba17dcc8d6f.svg",
  },
  {
    name: "The Netherlands",
    code: "NL",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d9387e9-8829-478f-b985-db9da30f4277.svg",
  },
  {
    name: "Turkey",
    code: "TR",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d938782-89b1-436d-b9ae-675e8705d167.svg",
  },
  {
    name: "Ukraine",
    code: "UA",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d9386fe-147d-4043-989b-6d8eed8c322e.svg",
  },
  {
    name: "United Kingdom",
    code: "GB",
    flag:
      "https://static.eurovision.tv/hb-cgi/images/8d938882-af21-4fa6-b0d6-35a5fa6a0939.svg",
  },
];

export default countries;
