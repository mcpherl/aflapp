const sqlite3 = require('sqlite3').verbose();

// Open the database
let db = new sqlite3.Database('./playerCards.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Database connected.');
  }
});

// Sample data
const players = [
    {
      "id": 695,
      "first_name": "Marcus",
      "last_name": "Bontempelli",
      "team_id": 15,
      "previous_average": 129.65,
      "team": "WBD",
      "position1": "MID",
      "probability": 0.000096624
    },
    {
      "id": 706,
      "first_name": "Tim",
      "last_name": "English",
      "team_id": 15,
      "previous_average": 127.96,
      "team": "WBD",
      "position1": "RUC",
      "probability": 0.0000978357
    },
    {
      "id": 458,
      "first_name": "Clayton",
      "last_name": "Oliver",
      "team_id": 10,
      "previous_average": 120.62,
      "team": "MEL",
      "position1": "MID",
      "probability": 0.0000990602
    },
    {
      "id": 459,
      "first_name": "Christian",
      "last_name": "Petracca",
      "team_id": 10,
      "previous_average": 119.48,
      "team": "MEL",
      "position1": "MID",
      "probability": 0.000100297
    },
    {
      "id": 20,
      "first_name": "Rory",
      "last_name": "Laird",
      "team_id": 1,
      "previous_average": 116.86,
      "team": "ADE",
      "position1": "MID",
      "probability": 0.000101548
    },
    {
      "id": 197,
      "first_name": "Zach",
      "last_name": "Merrett",
      "team_id": 5,
      "previous_average": 116.32,
      "team": "ESS",
      "position1": "MID",
      "probability": 0.000102811
    },
    {
      "id": 138,
      "first_name": "Nick",
      "last_name": "Daicos",
      "team_id": 4,
      "previous_average": 116.3,
      "team": "COL",
      "position1": "DEF",
      "probability": 0.000104087
    },
    {
      "id": 717,
      "first_name": "Tom",
      "last_name": "Liberatore",
      "team_id": 15,
      "previous_average": 116.05,
      "team": "WBD",
      "position1": "MID",
      "probability": 0.000105377
    },
    {
      "id": 9,
      "first_name": "Jordan",
      "last_name": "Dawson",
      "team_id": 1,
      "previous_average": 115.87,
      "team": "ADE",
      "position1": "MID",
      "probability": 0.000106679
    },
    {
      "id": 54,
      "first_name": "Josh",
      "last_name": "Dunkley",
      "team_id": 2,
      "previous_average": 115.24,
      "team": "BRL",
      "position1": "MID",
      "probability": 0.000107996
    },
    {
      "id": 629,
      "first_name": "Rowan",
      "last_name": "Marshall",
      "team_id": 13,
      "previous_average": 114.35,
      "team": "STK",
      "position1": "RUC",
      "probability": 0.000109325
    },
    {
      "id": 425,
      "first_name": "James",
      "last_name": "Sicily",
      "team_id": 8,
      "previous_average": 114.05,
      "team": "HAW",
      "position1": "DEF",
      "probability": 0.000110669
    },
    {
      "id": 526,
      "first_name": "Zak",
      "last_name": "Butters",
      "team_id": 11,
      "previous_average": 113.83,
      "team": "PTA",
      "position1": "MID",
      "probability": 0.000112026
    },
    {
      "id": 342,
      "first_name": "Tom",
      "last_name": "Stewart",
      "team_id": 7,
      "previous_average": 113.68,
      "team": "GEE",
      "position1": "DEF",
      "probability": 0.000113396
    },
    {
      "id": 483,
      "first_name": "Luke",
      "last_name": "Davies-Uniacke",
      "team_id": 9,
      "previous_average": 113.64,
      "team": "NTH",
      "position1": "MID",
      "probability": 0.000114781
    },
    {
      "id": 663,
      "first_name": "Errol",
      "last_name": "Gulden",
      "team_id": 14,
      "previous_average": 111.3,
      "team": "SYD",
      "position1": "MID",
      "probability": 0.00011618
    },
    {
      "id": 242,
      "first_name": "Caleb",
      "last_name": "Serong",
      "team_id": 6,
      "previous_average": 111.23,
      "team": "FRE",
      "position1": "MID",
      "probability": 0.000117593
    },
    {
      "id": 362,
      "first_name": "Tom",
      "last_name": "Green",
      "team_id": 18,
      "previous_average": 111.21,
      "team": "GWS",
      "position1": "MID",
      "probability": 0.00011902
    },
    {
      "id": 72,
      "first_name": "Lachie",
      "last_name": "Neale",
      "team_id": 2,
      "previous_average": 110.39,
      "team": "BRL",
      "position1": "MID",
      "probability": 0.000120461
    },
    {
      "id": 241,
      "first_name": "Luke",
      "last_name": "Ryan",
      "team_id": 6,
      "previous_average": 109.48,
      "team": "FRE",
      "position1": "DEF",
      "probability": 0.000121917
    },
    {
      "id": 215,
      "first_name": "Andrew",
      "last_name": "Brayshaw",
      "team_id": 6,
      "previous_average": 108.96,
      "team": "FRE",
      "position1": "MID",
      "probability": 0.000123387
    },
    {
      "id": 350,
      "first_name": "Kieren",
      "last_name": "Briggs",
      "team_id": 18,
      "previous_average": 108.93,
      "team": "GWS",
      "position1": "RUC",
      "probability": 0.000124872
    },
    {
      "id": 93,
      "first_name": "Adam",
      "last_name": "Cerra",
      "team_id": 3,
      "previous_average": 108.32,
      "team": "CAR",
      "position1": "MID",
      "probability": 0.000126372
    },
    {
      "id": 198,
      "first_name": "Darcy",
      "last_name": "Parish",
      "team_id": 5,
      "previous_average": 108.11,
      "team": "ESS",
      "position1": "MID",
      "probability": 0.000127886
    },
    {
      "id": 730,
      "first_name": "Adam",
      "last_name": "Treloar",
      "team_id": 15,
      "previous_average": 107.68,
      "team": "WBD",
      "position1": "MID",
      "probability": 0.000129415
    },
    {
      "id": 552,
      "first_name": "Connor",
      "last_name": "Rozee",
      "team_id": 11,
      "previous_average": 107.57,
      "team": "PTA",
      "position1": "MID",
      "probability": 0.00013096
    },
    {
      "id": 639,
      "first_name": "Jack",
      "last_name": "Sinclair",
      "team_id": 13,
      "previous_average": 106.7,
      "team": "STK",
      "position1": "DEF",
      "probability": 0.000132519
    },
    {
      "id": 601,
      "first_name": "Tim",
      "last_name": "Taranto",
      "team_id": 12,
      "previous_average": 106.65,
      "team": "RIC",
      "position1": "MID",
      "probability": 0.000134094
    },
    {
      "id": 301,
      "first_name": "Jarrod",
      "last_name": "Witts",
      "team_id": 17,
      "previous_average": 106.14,
      "team": "GCS",
      "position1": "RUC",
      "probability": 0.000135684
    },
    {
      "id": 537,
      "first_name": "Dan",
      "last_name": "Houston",
      "team_id": 11,
      "previous_average": 106.13,
      "team": "PTA",
      "position1": "DEF",
      "probability": 0.000137289
    },
    {
      "id": 221,
      "first_name": "Sean",
      "last_name": "Darcy",
      "team_id": 6,
      "previous_average": 105.47,
      "team": "FRE",
      "position1": "RUC",
      "probability": 0.00013891
    },
    {
      "id": 257,
      "first_name": "Noah",
      "last_name": "Anderson",
      "team_id": 17,
      "previous_average": 104.91,
      "team": "GCS",
      "position1": "MID",
      "probability": 0.000140547
    },
    {
      "id": 443,
      "first_name": "Max",
      "last_name": "Gawn",
      "team_id": 10,
      "previous_average": 104.45,
      "team": "MEL",
      "position1": "RUC",
      "probability": 0.000142199
    },
    {
      "id": 590,
      "first_name": "Toby",
      "last_name": "Nankervis",
      "team_id": 12,
      "previous_average": 104.33,
      "team": "RIC",
      "position1": "RUC",
      "probability": 0.000143867
    },
    {
      "id": 126,
      "first_name": "Sam",
      "last_name": "Walsh",
      "team_id": 3,
      "previous_average": 103.2,
      "team": "CAR",
      "position1": "MID",
      "probability": 0.000145551
    },
    {
      "id": 762,
      "first_name": "Tim",
      "last_name": "Kelly",
      "team_id": 16,
      "previous_average": 102.73,
      "team": "WCE",
      "position1": "MID",
      "probability": 0.000147251
    },
    {
      "id": 293,
      "first_name": "Matt",
      "last_name": "Rowell",
      "team_id": 17,
      "previous_average": 102.3,
      "team": "GCS",
      "position1": "MID",
      "probability": 0.000148967
    },
    {
      "id": 355,
      "first_name": "Stephen",
      "last_name": "Coniglio",
      "team_id": 18,
      "previous_average": 101.7,
      "team": "GWS",
      "position1": "MID",
      "probability": 0.0001507
    },
    {
      "id": 372,
      "first_name": "Josh",
      "last_name": "Kelly",
      "team_id": 18,
      "previous_average": 101.63,
      "team": "GWS",
      "position1": "MID",
      "probability": 0.000152449
    },
    {
      "id": 101,
      "first_name": "Sam",
      "last_name": "Docherty",
      "team_id": 3,
      "previous_average": 100.6,
      "team": "CAR",
      "position1": "MID",
      "probability": 0.000154214
    },
    {
      "id": 690,
      "first_name": "Chad",
      "last_name": "Warner",
      "team_id": 14,
      "previous_average": 100.25,
      "team": "SYD",
      "position1": "MID",
      "probability": 0.000155996
    },
    {
      "id": 120,
      "first_name": "Nic",
      "last_name": "Newman",
      "team_id": 3,
      "previous_average": 100.19,
      "team": "CAR",
      "position1": "DEF",
      "probability": 0.000157794
    },
    {
      "id": 474,
      "first_name": "Jack",
      "last_name": "Viney",
      "team_id": 10,
      "previous_average": 100.14,
      "team": "MEL",
      "position1": "MID",
      "probability": 0.000159609
    },
    {
      "id": 719,
      "first_name": "Jack",
      "last_name": "Macrae",
      "team_id": 15,
      "previous_average": 99.91,
      "team": "WBD",
      "position1": "MID",
      "probability": 0.000161441
    },
    {
      "id": 509,
      "first_name": "Harry",
      "last_name": "Sheezel",
      "team_id": 9,
      "previous_average": 99.52,
      "team": "NTH",
      "position1": "DEF",
      "probability": 0.00016329
    },
    {
      "id": 137,
      "first_name": "Josh",
      "last_name": "Daicos",
      "team_id": 4,
      "previous_average": 99.09,
      "team": "COL",
      "position1": "MID",
      "probability": 0.000165156
    },
    {
      "id": 598,
      "first_name": "Jayden",
      "last_name": "Short",
      "team_id": 12,
      "previous_average": 98.63,
      "team": "RIC",
      "position1": "DEF",
      "probability": 0.000167039
    },
    {
      "id": 418,
      "first_name": "Jai",
      "last_name": "Newcombe",
      "team_id": 8,
      "previous_average": 98.27,
      "team": "HAW",
      "position1": "MID",
      "probability": 0.000168939
    },
    {
      "id": 230,
      "first_name": "Luke",
      "last_name": "Jackson",
      "team_id": 6,
      "previous_average": 97.87,
      "team": "FRE",
      "position1": "RUC",
      "probability": 0.000170857
    },
    {
      "id": 286,
      "first_name": "Touk",
      "last_name": "Miller",
      "team_id": 17,
      "previous_average": 97.62,
      "team": "GCS",
      "position1": "MID",
      "probability": 0.000172792
    },
    {
      "id": 7,
      "first_name": "Matt",
      "last_name": "Crouch",
      "team_id": 1,
      "previous_average": 97.57,
      "team": "ADE",
      "position1": "MID",
      "probability": 0.000174745
    },
    {
      "id": 99,
      "first_name": "Charlie",
      "last_name": "Curnow",
      "team_id": 3,
      "previous_average": 97.57,
      "team": "CAR",
      "position1": "FWD",
      "probability": 0.000176715
    },
    {
      "id": 97,
      "first_name": "Patrick",
      "last_name": "Cripps",
      "team_id": 3,
      "previous_average": 97.52,
      "team": "CAR",
      "position1": "MID",
      "probability": 0.000178703
    },
    {
      "id": 615,
      "first_name": "Brad",
      "last_name": "Crouch",
      "team_id": 13,
      "previous_average": 97.52,
      "team": "STK",
      "position1": "MID",
      "probability": 0.000180709
    },
    {
      "id": 397,
      "first_name": "Will",
      "last_name": "Day",
      "team_id": 8,
      "previous_average": 97.43,
      "team": "HAW",
      "position1": "MID",
      "probability": 0.000182733
    },
    {
      "id": 682,
      "first_name": "Luke",
      "last_name": "Parker",
      "team_id": 14,
      "previous_average": 96.86,
      "team": "SYD",
      "position1": "MID",
      "probability": 0.000184775
    },
    {
      "id": 566,
      "first_name": "Shai",
      "last_name": "Bolton",
      "team_id": 12,
      "previous_average": 96.74,
      "team": "RIC",
      "position1": "MID",
      "probability": 0.000186835
    },
    {
      "id": 139,
      "first_name": "Jordan",
      "last_name": "De Goey",
      "team_id": 4,
      "previous_average": 96.61,
      "team": "COL",
      "position1": "MID",
      "probability": 0.000188914
    },
    {
      "id": 27,
      "first_name": "Reilly",
      "last_name": "O'Brien",
      "team_id": 1,
      "previous_average": 95.78,
      "team": "ADE",
      "position1": "RUC",
      "probability": 0.00019101
    },
    {
      "id": 671,
      "first_name": "Jake",
      "last_name": "Lloyd",
      "team_id": 14,
      "previous_average": 95.77,
      "team": "SYD",
      "position1": "DEF",
      "probability": 0.000193125
    },
    {
      "id": 180,
      "first_name": "Todd",
      "last_name": "Goldstein",
      "team_id": 5,
      "previous_average": 95.45,
      "team": "ESS",
      "position1": "RUC",
      "probability": 0.000195259
    },
    {
      "id": 202,
      "first_name": "Jordan",
      "last_name": "Ridley",
      "team_id": 5,
      "previous_average": 94.88,
      "team": "ESS",
      "position1": "DEF",
      "probability": 0.000197411
    },
    {
      "id": 640,
      "first_name": "Jack",
      "last_name": "Steele",
      "team_id": 13,
      "previous_average": 94.75,
      "team": "STK",
      "position1": "MID",
      "probability": 0.000199582
    },
    {
      "id": 159,
      "first_name": "Tom",
      "last_name": "Mitchell",
      "team_id": 4,
      "previous_average": 94.65,
      "team": "COL",
      "position1": "MID",
      "probability": 0.000201772
    },
    {
      "id": 68,
      "first_name": "Oscar",
      "last_name": "McInerney",
      "team_id": 2,
      "previous_average": 94.36,
      "team": "BRL",
      "position1": "RUC",
      "probability": 0.000203981
    },
    {
      "id": 585,
      "first_name": "Dustin",
      "last_name": "Martin",
      "team_id": 12,
      "previous_average": 94.35,
      "team": "RIC",
      "position1": "FWD",
      "probability": 0.000206209
    },
    {
      "id": 645,
      "first_name": "Callum",
      "last_name": "Wilkie",
      "team_id": 13,
      "previous_average": 94.22,
      "team": "STK",
      "position1": "DEF",
      "probability": 0.000208456
    },
    {
      "id": 163,
      "first_name": "Scott",
      "last_name": "Pendlebury",
      "team_id": 4,
      "previous_average": 93.95,
      "team": "COL",
      "position1": "MID",
      "probability": 0.000210722
    },
    {
      "id": 255,
      "first_name": "Hayden",
      "last_name": "Young",
      "team_id": 6,
      "previous_average": 93.95,
      "team": "FRE",
      "position1": "DEF",
      "probability": 0.000213008
    },
    {
      "id": 67,
      "first_name": "Hugh",
      "last_name": "McCluggage",
      "team_id": 2,
      "previous_average": 93.73,
      "team": "BRL",
      "position1": "MID",
      "probability": 0.000215312
    },
    {
      "id": 602,
      "first_name": "James",
      "last_name": "Trezise",
      "team_id": 12,
      "previous_average": 93,
      "team": "RIC",
      "position1": "DEF",
      "probability": 0.000217637
    },
    {
      "id": 648,
      "first_name": "Mason",
      "last_name": "Wood",
      "team_id": 13,
      "previous_average": 92.96,
      "team": "STK",
      "position1": "MID",
      "probability": 0.000219981
    },
    {
      "id": 389,
      "first_name": "Lachie",
      "last_name": "Whitfield",
      "team_id": 18,
      "previous_average": 92.86,
      "team": "GWS",
      "position1": "DEF",
      "probability": 0.000222344
    },
    {
      "id": 703,
      "first_name": "Caleb",
      "last_name": "Daniel",
      "team_id": 15,
      "previous_average": 92.83,
      "team": "WBD",
      "position1": "MID",
      "probability": 0.000224728
    },
    {
      "id": 133,
      "first_name": "Darcy",
      "last_name": "Cameron",
      "team_id": 4,
      "previous_average": 92.19,
      "team": "COL",
      "position1": "RUC",
      "probability": 0.000227131
    },
    {
      "id": 603,
      "first_name": "Nick",
      "last_name": "Vlastuin",
      "team_id": 12,
      "previous_average": 92.1,
      "team": "RIC",
      "position1": "DEF",
      "probability": 0.000229554
    },
    {
      "id": 289,
      "first_name": "Wil",
      "last_name": "Powell",
      "team_id": 17,
      "previous_average": 91.89,
      "team": "GCS",
      "position1": "DEF",
      "probability": 0.000231998
    },
    {
      "id": 304,
      "first_name": "Mark",
      "last_name": "Blicavs",
      "team_id": 7,
      "previous_average": 91.58,
      "team": "GEE",
      "position1": "RUC",
      "probability": 0.000234461
    },
    {
      "id": 415,
      "first_name": "Dylan",
      "last_name": "Moore",
      "team_id": 8,
      "previous_average": 91,
      "team": "HAW",
      "position1": "FWD",
      "probability": 0.000236945
    },
    {
      "id": 363,
      "first_name": "Toby",
      "last_name": "Greene",
      "team_id": 18,
      "previous_average": 91,
      "team": "GWS",
      "position1": "FWD",
      "probability": 0.000239449
    },
    {
      "id": 200,
      "first_name": "Mason",
      "last_name": "Redman",
      "team_id": 5,
      "previous_average": 90.87,
      "team": "ESS",
      "position1": "DEF",
      "probability": 0.000241973
    },
    {
      "id": 702,
      "first_name": "Bailey",
      "last_name": "Dale",
      "team_id": 15,
      "previous_average": 90.83,
      "team": "WBD",
      "position1": "DEF",
      "probability": 0.000244518
    },
    {
      "id": 160,
      "first_name": "Darcy",
      "last_name": "Moore",
      "team_id": 4,
      "previous_average": 90.52,
      "team": "COL",
      "position1": "DEF",
      "probability": 0.000247084
    },
    {
      "id": 315,
      "first_name": "Mitch",
      "last_name": "Duncan",
      "team_id": 7,
      "previous_average": 90.31,
      "team": "GEE",
      "position1": "DEF",
      "probability": 0.00024967
    },
    {
      "id": 515,
      "first_name": "Tarryn",
      "last_name": "Thomas",
      "team_id": 9,
      "previous_average": 90.25,
      "team": "NTH",
      "position1": "MID",
      "probability": 0.000252277
    },
    {
      "id": 749,
      "first_name": "Liam",
      "last_name": "Duggan",
      "team_id": 16,
      "previous_average": 90.09,
      "team": "WCE",
      "position1": "DEF",
      "probability": 0.000254905
    },
    {
      "id": 432,
      "first_name": "James",
      "last_name": "Worpel",
      "team_id": 8,
      "previous_average": 89.96,
      "team": "HAW",
      "position1": "MID",
      "probability": 0.000257554
    },
    {
      "id": 436,
      "first_name": "Angus",
      "last_name": "Brayshaw",
      "team_id": 10,
      "previous_average": 89.83,
      "team": "MEL",
      "position1": "DEF",
      "probability": 0.000260223
    },
    {
      "id": 124,
      "first_name": "Adam",
      "last_name": "Saad",
      "team_id": 3,
      "previous_average": 89.59,
      "team": "CAR",
      "position1": "DEF",
      "probability": 0.000262914
    },
    {
      "id": 41,
      "first_name": "Taylor",
      "last_name": "Walker",
      "team_id": 1,
      "previous_average": 89.55,
      "team": "ADE",
      "position1": "FWD",
      "probability": 0.000265626
    },
    {
      "id": 652,
      "first_name": "Nick",
      "last_name": "Blakey",
      "team_id": 14,
      "previous_average": 89.39,
      "team": "SYD",
      "position1": "DEF",
      "probability": 0.00026836
    },
    {
      "id": 136,
      "first_name": "Jack",
      "last_name": "Crisp",
      "team_id": 4,
      "previous_average": 89.22,
      "team": "COL",
      "position1": "MID",
      "probability": 0.000271114
    },
    {
      "id": 44,
      "first_name": "Harris",
      "last_name": "Andrews",
      "team_id": 2,
      "previous_average": 89.09,
      "team": "BRL",
      "position1": "DEF",
      "probability": 0.00027389
    },
    {
      "id": 273,
      "first_name": "Sam",
      "last_name": "Flanders",
      "team_id": 17,
      "previous_average": 88.43,
      "team": "GCS",
      "position1": "MID",
      "probability": 0.000276688
    },
    {
      "id": 193,
      "first_name": "Nic",
      "last_name": "Martin",
      "team_id": 5,
      "previous_average": 88.17,
      "team": "ESS",
      "position1": "MID",
      "probability": 0.000279507
    },
    {
      "id": 752,
      "first_name": "Matt",
      "last_name": "Flynn",
      "team_id": 16,
      "previous_average": 88,
      "team": "WCE",
      "position1": "RUC",
      "probability": 0.000282348
    },
    {
      "id": 220,
      "first_name": "Brennan",
      "last_name": "Cox",
      "team_id": 6,
      "previous_average": 87.85,
      "team": "FRE",
      "position1": "DEF",
      "probability": 0.000285211
    },
    {
      "id": 679,
      "first_name": "Callum",
      "last_name": "Mills",
      "team_id": 14,
      "previous_average": 87.74,
      "team": "SYD",
      "position1": "MID",
      "probability": 0.000288095
    },
    {
      "id": 312,
      "first_name": "Patrick",
      "last_name": "Dangerfield",
      "team_id": 7,
      "previous_average": 87.72,
      "team": "GEE",
      "position1": "MID",
      "probability": 0.000291001
    },
    {
      "id": 530,
      "first_name": "Charlie",
      "last_name": "Dixon",
      "team_id": 11,
      "previous_average": 87.69,
      "team": "PTA",
      "position1": "FWD",
      "probability": 0.00029393
    },
    {
      "id": 87,
      "first_name": "Blake",
      "last_name": "Acres",
      "team_id": 3,
      "previous_average": 87.5,
      "team": "CAR",
      "position1": "MID",
      "probability": 0.00029688
    },
    {
      "id": 302,
      "first_name": "Tom",
      "last_name": "Atkins",
      "team_id": 7,
      "previous_average": 87.04,
      "team": "GEE",
      "position1": "MID",
      "probability": 0.000299852
    },
    {
      "id": 594,
      "first_name": "Daniel",
      "last_name": "Rioli",
      "team_id": 12,
      "previous_average": 86.91,
      "team": "RIC",
      "position1": "DEF",
      "probability": 0.000302847
    },
    {
      "id": 555,
      "first_name": "Ivan",
      "last_name": "Soldo",
      "team_id": 11,
      "previous_average": 86.88,
      "team": "PTA",
      "position1": "RUC",
      "probability": 0.000305864
    },
    {
      "id": 194,
      "first_name": "Andrew",
      "last_name": "McGrath",
      "team_id": 5,
      "previous_average": 86.87,
      "team": "ESS",
      "position1": "DEF",
      "probability": 0.000308903
    },
    {
      "id": 666,
      "first_name": "Isaac",
      "last_name": "Heeney",
      "team_id": 14,
      "previous_average": 86.55,
      "team": "SYD",
      "position1": "FWD",
      "probability": 0.000311965
    },
    {
      "id": 390,
      "first_name": "Karl",
      "last_name": "Amon",
      "team_id": 8,
      "previous_average": 86.48,
      "team": "HAW",
      "position1": "MID",
      "probability": 0.000315049
    },
    {
      "id": 662,
      "first_name": "Brodie",
      "last_name": "Grundy",
      "team_id": 14,
      "previous_average": 86.24,
      "team": "SYD",
      "position1": "RUC",
      "probability": 0.000318155
    },
    {
      "id": 725,
      "first_name": "Ed",
      "last_name": "Richards",
      "team_id": 15,
      "previous_average": 86.21,
      "team": "WBD",
      "position1": "DEF",
      "probability": 0.000321285
    },
    {
      "id": 403,
      "first_name": "Blake",
      "last_name": "Hardwick",
      "team_id": 8,
      "previous_average": 86.17,
      "team": "HAW",
      "position1": "DEF",
      "probability": 0.000324437
    },
    {
      "id": 86,
      "first_name": "Dayne",
      "last_name": "Zorko",
      "team_id": 2,
      "previous_average": 86,
      "team": "BRL",
      "position1": "MID",
      "probability": 0.000327611
    },
    {
      "id": 417,
      "first_name": "Conor",
      "last_name": "Nash",
      "team_id": 8,
      "previous_average": 86,
      "team": "HAW",
      "position1": "MID",
      "probability": 0.000330809
    },
    {
      "id": 531,
      "first_name": "Willem",
      "last_name": "Drew",
      "team_id": 11,
      "previous_average": 85.35,
      "team": "PTA",
      "position1": "MID",
      "probability": 0.000334029
    },
    {
      "id": 168,
      "first_name": "Steele",
      "last_name": "Sidebottom",
      "team_id": 4,
      "previous_average": 85.29,
      "team": "COL",
      "position1": "MID",
      "probability": 0.000337272
    },
    {
      "id": 643,
      "first_name": "Nasiah",
      "last_name": "Wanganeen-Milera",
      "team_id": 13,
      "previous_average": 85.13,
      "team": "STK",
      "position1": "DEF",
      "probability": 0.000340538
    },
    {
      "id": 534,
      "first_name": "Jeremy",
      "last_name": "Finlayson",
      "team_id": 11,
      "previous_average": 85.1,
      "team": "PTA",
      "position1": "FWD",
      "probability": 0.000343827
    },
    {
      "id": 127,
      "first_name": "Jacob",
      "last_name": "Weitering",
      "team_id": 3,
      "previous_average": 85.09,
      "team": "CAR",
      "position1": "DEF",
      "probability": 0.00034714
    },
    {
      "id": 204,
      "first_name": "Will",
      "last_name": "Setterfield",
      "team_id": 5,
      "previous_average": 85,
      "team": "ESS",
      "position1": "MID",
      "probability": 0.000350475
    },
    {
      "id": 16,
      "first_name": "Mitchell",
      "last_name": "Hinge",
      "team_id": 1,
      "previous_average": 84.86,
      "team": "ADE",
      "position1": "DEF",
      "probability": 0.000353834
    },
    {
      "id": 462,
      "first_name": "Trent",
      "last_name": "Rivers",
      "team_id": 10,
      "previous_average": 84.83,
      "team": "MEL",
      "position1": "DEF",
      "probability": 0.000357216
    },
    {
      "id": 46,
      "first_name": "Will",
      "last_name": "Ashcroft",
      "team_id": 2,
      "previous_average": 84.5,
      "team": "BRL",
      "position1": "MID",
      "probability": 0.000360621
    },
    {
      "id": 778,
      "first_name": "Alex",
      "last_name": "Witherden",
      "team_id": 16,
      "previous_average": 84.5,
      "team": "WCE",
      "position1": "DEF",
      "probability": 0.00036405
    },
    {
      "id": 773,
      "first_name": "Dom",
      "last_name": "Sheed",
      "team_id": 16,
      "previous_average": 84.33,
      "team": "WCE",
      "position1": "MID",
      "probability": 0.000367502
    },
    {
      "id": 766,
      "first_name": "Jeremy",
      "last_name": "McGovern",
      "team_id": 16,
      "previous_average": 84.22,
      "team": "WCE",
      "position1": "DEF",
      "probability": 0.000370977
    },
    {
      "id": 451,
      "first_name": "Steven",
      "last_name": "May",
      "team_id": 10,
      "previous_average": 83.9,
      "team": "MEL",
      "position1": "DEF",
      "probability": 0.000374476
    },
    {
      "id": 348,
      "first_name": "Lachie",
      "last_name": "Ash",
      "team_id": 18,
      "previous_average": 83.83,
      "team": "GWS",
      "position1": "DEF",
      "probability": 0.000377998
    },
    {
      "id": 384,
      "first_name": "Sam",
      "last_name": "Taylor",
      "team_id": 18,
      "previous_average": 83.73,
      "team": "GWS",
      "position1": "DEF",
      "probability": 0.000381545
    },
    {
      "id": 319,
      "first_name": "Cameron",
      "last_name": "Guthrie",
      "team_id": 7,
      "previous_average": 83.67,
      "team": "GEE",
      "position1": "MID",
      "probability": 0.000385114
    },
    {
      "id": 686,
      "first_name": "James",
      "last_name": "Rowbottom",
      "team_id": 14,
      "previous_average": 83.65,
      "team": "SYD",
      "position1": "MID",
      "probability": 0.000388708
    },
    {
      "id": 300,
      "first_name": "Lachie",
      "last_name": "Weller",
      "team_id": 17,
      "previous_average": 83.33,
      "team": "GCS",
      "position1": "DEF",
      "probability": 0.000392325
    },
    {
      "id": 560,
      "first_name": "Ollie",
      "last_name": "Wines",
      "team_id": 11,
      "previous_average": 82.96,
      "team": "PTA",
      "position1": "MID",
      "probability": 0.000395966
    },
    {
      "id": 307,
      "first_name": "Jeremy",
      "last_name": "Cameron",
      "team_id": 7,
      "previous_average": 82.8,
      "team": "GEE",
      "position1": "FWD",
      "probability": 0.00039963
    },
    {
      "id": 52,
      "first_name": "Joe",
      "last_name": "Daniher",
      "team_id": 2,
      "previous_average": 82.65,
      "team": "BRL",
      "position1": "FWD",
      "probability": 0.000403319
    },
    {
      "id": 31,
      "first_name": "Izak",
      "last_name": "Rankine",
      "team_id": 1,
      "previous_average": 82.6,
      "team": "ADE",
      "position1": "FWD",
      "probability": 0.000407031
    },
    {
      "id": 218,
      "first_name": "Jordan",
      "last_name": "Clark",
      "team_id": 6,
      "previous_average": 82.48,
      "team": "FRE",
      "position1": "DEF",
      "probability": 0.000410768
    },
    {
      "id": 36,
      "first_name": "Brodie",
      "last_name": "Smith",
      "team_id": 1,
      "previous_average": 82.32,
      "team": "ADE",
      "position1": "DEF",
      "probability": 0.000414528
    },
    {
      "id": 225,
      "first_name": "Tom",
      "last_name": "Emmett",
      "team_id": 6,
      "previous_average": 81.5,
      "team": "FRE",
      "position1": "FWD",
      "probability": 0.000418312
    },
    {
      "id": 592,
      "first_name": "Dion",
      "last_name": "Prestia",
      "team_id": 12,
      "previous_average": 81.25,
      "team": "RIC",
      "position1": "MID",
      "probability": 0.00042212
    },
    {
      "id": 369,
      "first_name": "Connor",
      "last_name": "Idun",
      "team_id": 18,
      "previous_average": 81.22,
      "team": "GWS",
      "position1": "DEF",
      "probability": 0.000425952
    },
    {
      "id": 331,
      "first_name": "Gryan",
      "last_name": "Miers",
      "team_id": 7,
      "previous_average": 80.78,
      "team": "GEE",
      "position1": "FWD",
      "probability": 0.000429809
    },
    {
      "id": 19,
      "first_name": "Ben",
      "last_name": "Keays",
      "team_id": 1,
      "previous_average": 80.61,
      "team": "ADE",
      "position1": "FWD",
      "probability": 0.000433689
    },
    {
      "id": 367,
      "first_name": "Harry",
      "last_name": "Himmelberg",
      "team_id": 18,
      "previous_average": 80.59,
      "team": "GWS",
      "position1": "DEF",
      "probability": 0.000437593
    },
    {
      "id": 184,
      "first_name": "Dyson",
      "last_name": "Heppell",
      "team_id": 5,
      "previous_average": 80.45,
      "team": "ESS",
      "position1": "DEF",
      "probability": 0.000441522
    },
    {
      "id": 154,
      "first_name": "Brayden",
      "last_name": "Maynard",
      "team_id": 4,
      "previous_average": 80.41,
      "team": "COL",
      "position1": "DEF",
      "probability": 0.000445475
    },
    {
      "id": 238,
      "first_name": "Jaeger",
      "last_name": "O'Meara",
      "team_id": 6,
      "previous_average": 80.38,
      "team": "FRE",
      "position1": "MID",
      "probability": 0.000449451
    },
    {
      "id": 114,
      "first_name": "Mitch",
      "last_name": "McGovern",
      "team_id": 3,
      "previous_average": 80.32,
      "team": "CAR",
      "position1": "DEF",
      "probability": 0.000453452
    },
    {
      "id": 728,
      "first_name": "Bailey",
      "last_name": "Smith",
      "team_id": 15,
      "previous_average": 80.26,
      "team": "WBD",
      "position1": "MID",
      "probability": 0.000457477
    },
    {
      "id": 739,
      "first_name": "Tom",
      "last_name": "Barrass",
      "team_id": 16,
      "previous_average": 80.07,
      "team": "WCE",
      "position1": "DEF",
      "probability": 0.000461527
    },
    {
      "id": 779,
      "first_name": "Elliot",
      "last_name": "Yeo",
      "team_id": 16,
      "previous_average": 80,
      "team": "WCE",
      "position1": "DEF",
      "probability": 0.0004656
    },
    {
      "id": 162,
      "first_name": "John",
      "last_name": "Noble",
      "team_id": 4,
      "previous_average": 79.96,
      "team": "COL",
      "position1": "DEF",
      "probability": 0.000469698
    },
    {
      "id": 325,
      "first_name": "Max",
      "last_name": "Holmes",
      "team_id": 7,
      "previous_average": 79.81,
      "team": "GEE",
      "position1": "MID",
      "probability": 0.00047382
    },
    {
      "id": 562,
      "first_name": "Liam",
      "last_name": "Baker",
      "team_id": 12,
      "previous_average": 79.74,
      "team": "RIC",
      "position1": "DEF",
      "probability": 0.000477966
    },
    {
      "id": 567,
      "first_name": "Nathan",
      "last_name": "Broad",
      "team_id": 12,
      "previous_average": 79.74,
      "team": "RIC",
      "position1": "DEF",
      "probability": 0.000482137
    },
    {
      "id": 633,
      "first_name": "Mitch",
      "last_name": "Owens",
      "team_id": 13,
      "previous_average": 79.68,
      "team": "STK",
      "position1": "FWD",
      "probability": 0.000486331
    },
    {
      "id": 511,
      "first_name": "Jy",
      "last_name": "Simpkin",
      "team_id": 9,
      "previous_average": 79.33,
      "team": "NTH",
      "position1": "MID",
      "probability": 0.00049055
    },
    {
      "id": 167,
      "first_name": "Lachie",
      "last_name": "Schultz",
      "team_id": 4,
      "previous_average": 79.13,
      "team": "COL",
      "position1": "FWD",
      "probability": 0.000494793
    },
    {
      "id": 190,
      "first_name": "Kyle",
      "last_name": "Langford",
      "team_id": 5,
      "previous_average": 79.09,
      "team": "ESS",
      "position1": "FWD",
      "probability": 0.000499061
    },
    {
      "id": 352,
      "first_name": "Jack",
      "last_name": "Buckley",
      "team_id": 18,
      "previous_average": 78.78,
      "team": "GWS",
      "position1": "DEF",
      "probability": 0.000503352
    },
    {
      "id": 269,
      "first_name": "Brandon",
      "last_name": "Ellis",
      "team_id": 17,
      "previous_average": 78.75,
      "team": "GCS",
      "position1": "MID",
      "probability": 0.000507668
    },
    {
      "id": 106,
      "first_name": "George",
      "last_name": "Hewett",
      "team_id": 3,
      "previous_average": 78.74,
      "team": "CAR",
      "position1": "MID",
      "probability": 0.000512008
    },
    {
      "id": 581,
      "first_name": "Jacob",
      "last_name": "Hopper",
      "team_id": 12,
      "previous_average": 78.63,
      "team": "RIC",
      "position1": "MID",
      "probability": 0.000516372
    },
    {
      "id": 322,
      "first_name": "Tom",
      "last_name": "Hawkins",
      "team_id": 7,
      "previous_average": 78.45,
      "team": "GEE",
      "position1": "FWD",
      "probability": 0.00052076
    },
    {
      "id": 649,
      "first_name": "Taylor",
      "last_name": "Adams",
      "team_id": 14,
      "previous_average": 78.23,
      "team": "SYD",
      "position1": "MID",
      "probability": 0.000525173
    },
    {
      "id": 173,
      "first_name": "Jye",
      "last_name": "Caldwell",
      "team_id": 5,
      "previous_average": 78.19,
      "team": "ESS",
      "position1": "MID",
      "probability": 0.00052961
    },
    {
      "id": 502,
      "first_name": "Luke",
      "last_name": "McDonald",
      "team_id": 9,
      "previous_average": 77.91,
      "team": "NTH",
      "position1": "DEF",
      "probability": 0.00053407
    },
    {
      "id": 405,
      "first_name": "Jarman",
      "last_name": "Impey",
      "team_id": 8,
      "previous_average": 77.77,
      "team": "HAW",
      "position1": "DEF",
      "probability": 0.000538555
    },
    {
      "id": 446,
      "first_name": "Lachie",
      "last_name": "Hunter",
      "team_id": 10,
      "previous_average": 77.73,
      "team": "MEL",
      "position1": "MID",
      "probability": 0.000543064
    },
    {
      "id": 47,
      "first_name": "Zac",
      "last_name": "Bailey",
      "team_id": 2,
      "previous_average": 77.71,
      "team": "BRL",
      "position1": "MID",
      "probability": 0.000547597
    },
    {
      "id": 536,
      "first_name": "Jason",
      "last_name": "Horne-Francis",
      "team_id": 11,
      "previous_average": 77.64,
      "team": "PTA",
      "position1": "MID",
      "probability": 0.000552154
    },
    {
      "id": 23,
      "first_name": "Wayne",
      "last_name": "Milera",
      "team_id": 1,
      "previous_average": 77.5,
      "team": "ADE",
      "position1": "DEF",
      "probability": 0.000556735
    },
    {
      "id": 533,
      "first_name": "Kane",
      "last_name": "Farrell",
      "team_id": 11,
      "previous_average": 77.2,
      "team": "PTA",
      "position1": "DEF",
      "probability": 0.00056134
    },
    {
      "id": 35,
      "first_name": "Rory",
      "last_name": "Sloane",
      "team_id": 1,
      "previous_average": 77,
      "team": "ADE",
      "position1": "MID",
      "probability": 0.000565969
    },
    {
      "id": 263,
      "first_name": "Connor",
      "last_name": "Budarick",
      "team_id": 17,
      "previous_average": 77,
      "team": "GCS",
      "position1": "DEF",
      "probability": 0.000570622
    },
    {
      "id": 776,
      "first_name": "Bailey J.",
      "last_name": "Williams",
      "team_id": 16,
      "previous_average": 76.91,
      "team": "WCE",
      "position1": "RUC",
      "probability": 0.000575299
    },
    {
      "id": 48,
      "first_name": "Jarrod",
      "last_name": "Berry",
      "team_id": 2,
      "previous_average": 76.5,
      "team": "BRL",
      "position1": "MID",
      "probability": 0.00058
    },
    {
      "id": 758,
      "first_name": "Jayden",
      "last_name": "Hunt",
      "team_id": 16,
      "previous_average": 76.39,
      "team": "WCE",
      "position1": "DEF",
      "probability": 0.000584724
    },
    {
      "id": 256,
      "first_name": "Ben",
      "last_name": "Ainsworth",
      "team_id": 17,
      "previous_average": 76.38,
      "team": "GCS",
      "position1": "FWD",
      "probability": 0.000589472
    },
    {
      "id": 525,
      "first_name": "Ryan",
      "last_name": "Burton",
      "team_id": 11,
      "previous_average": 76.3,
      "team": "PTA",
      "position1": "DEF",
      "probability": 0.000594244
    },
    {
      "id": 283,
      "first_name": "Jack",
      "last_name": "Lukosius",
      "team_id": 17,
      "previous_average": 76.05,
      "team": "GCS",
      "position1": "FWD",
      "probability": 0.000599039
    },
    {
      "id": 508,
      "first_name": "Bailey",
      "last_name": "Scott",
      "team_id": 9,
      "previous_average": 75.83,
      "team": "NTH",
      "position1": "MID",
      "probability": 0.000603859
    },
    {
      "id": 177,
      "first_name": "Sam",
      "last_name": "Draper",
      "team_id": 5,
      "previous_average": 75.57,
      "team": "ESS",
      "position1": "RUC",
      "probability": 0.000608701
    },
    {
      "id": 296,
      "first_name": "David",
      "last_name": "Swallow",
      "team_id": 17,
      "previous_average": 75.43,
      "team": "GCS",
      "position1": "MID",
      "probability": 0.000613567
    },
    {
      "id": 658,
      "first_name": "Oliver",
      "last_name": "Florent",
      "team_id": 14,
      "previous_average": 75.39,
      "team": "SYD",
      "position1": "DEF",
      "probability": 0.000618457
    },
    {
      "id": 772,
      "first_name": "Liam",
      "last_name": "Ryan",
      "team_id": 16,
      "previous_average": 75.33,
      "team": "WCE",
      "position1": "FWD",
      "probability": 0.00062337
    },
    {
      "id": 463,
      "first_name": "Christian",
      "last_name": "Salem",
      "team_id": 10,
      "previous_average": 75.29,
      "team": "MEL",
      "position1": "DEF",
      "probability": 0.000628306
    },
    {
      "id": 110,
      "first_name": "Matthew",
      "last_name": "Kennedy",
      "team_id": 3,
      "previous_average": 75.14,
      "team": "CAR",
      "position1": "MID",
      "probability": 0.000633266
    },
    {
      "id": 721,
      "first_name": "Aaron",
      "last_name": "Naughton",
      "team_id": 15,
      "previous_average": 75.13,
      "team": "WBD",
      "position1": "FWD",
      "probability": 0.000638248
    },
    {
      "id": 450,
      "first_name": "Jake",
      "last_name": "Lever",
      "team_id": 10,
      "previous_average": 75.09,
      "team": "MEL",
      "position1": "DEF",
      "probability": 0.000643254
    },
    {
      "id": 423,
      "first_name": "Jack",
      "last_name": "Scrimshaw",
      "team_id": 8,
      "previous_average": 75.06,
      "team": "HAW",
      "position1": "DEF",
      "probability": 0.000648283
    },
    {
      "id": 357,
      "first_name": "Brent",
      "last_name": "Daniels",
      "team_id": 18,
      "previous_average": 75.06,
      "team": "GWS",
      "position1": "FWD",
      "probability": 0.000653335
    },
    {
      "id": 368,
      "first_name": "Jesse",
      "last_name": "Hogan",
      "team_id": 18,
      "previous_average": 75,
      "team": "GWS",
      "position1": "FWD",
      "probability": 0.00065841
    },
    {
      "id": 386,
      "first_name": "Callan",
      "last_name": "Ward",
      "team_id": 18,
      "previous_average": 74.95,
      "team": "GWS",
      "position1": "MID",
      "probability": 0.000663507
    },
    {
      "id": 683,
      "first_name": "Dane",
      "last_name": "Rampe",
      "team_id": 14,
      "previous_average": 74.71,
      "team": "SYD",
      "position1": "DEF",
      "probability": 0.000668628
    },
    {
      "id": 596,
      "first_name": "Jack",
      "last_name": "Ross",
      "team_id": 12,
      "previous_average": 74.68,
      "team": "RIC",
      "position1": "MID",
      "probability": 0.000673771
    },
    {
      "id": 164,
      "first_name": "Isaac",
      "last_name": "Quaynor",
      "team_id": 4,
      "previous_average": 74.65,
      "team": "COL",
      "position1": "DEF",
      "probability": 0.000678936
    },
    {
      "id": 520,
      "first_name": "Aliir",
      "last_name": "Aliir",
      "team_id": 11,
      "previous_average": 74.55,
      "team": "PTA",
      "position1": "DEF",
      "probability": 0.000684125
    },
    {
      "id": 712,
      "first_name": "Jason",
      "last_name": "Johannisen",
      "team_id": 15,
      "previous_average": 74.55,
      "team": "WBD",
      "position1": "DEF",
      "probability": 0.000689335
    },
    {
      "id": 42,
      "first_name": "Josh",
      "last_name": "Worrell",
      "team_id": 1,
      "previous_average": 74.5,
      "team": "ADE",
      "position1": "DEF",
      "probability": 0.000694568
    },
    {
      "id": 563,
      "first_name": "Noah",
      "last_name": "Balta",
      "team_id": 12,
      "previous_average": 74.3,
      "team": "RIC",
      "position1": "DEF",
      "probability": 0.000699823
    },
    {
      "id": 186,
      "first_name": "Ben",
      "last_name": "Hobbs",
      "team_id": 5,
      "previous_average": 74.06,
      "team": "ESS",
      "position1": "MID",
      "probability": 0.0007051
    },
    {
      "id": 30,
      "first_name": "Josh",
      "last_name": "Rachele",
      "team_id": 1,
      "previous_average": 73.95,
      "team": "ADE",
      "position1": "FWD",
      "probability": 0.0007104
    },
    {
      "id": 100,
      "first_name": "Tom",
      "last_name": "De Koning",
      "team_id": 3,
      "previous_average": 73.69,
      "team": "CAR",
      "position1": "RUC",
      "probability": 0.000715721
    },
    {
      "id": 379,
      "first_name": "Harry",
      "last_name": "Perryman",
      "team_id": 18,
      "previous_average": 73.63,
      "team": "GWS",
      "position1": "DEF",
      "probability": 0.000721064
    },
    {
      "id": 17,
      "first_name": "Chayce",
      "last_name": "Jones",
      "team_id": 1,
      "previous_average": 73.61,
      "team": "ADE",
      "position1": "DEF",
      "probability": 0.000726428
    },
    {
      "id": 320,
      "first_name": "Zach",
      "last_name": "Guthrie",
      "team_id": 7,
      "previous_average": 73.61,
      "team": "GEE",
      "position1": "DEF",
      "probability": 0.000731815
    },
    {
      "id": 250,
      "first_name": "Corey",
      "last_name": "Wagner",
      "team_id": 6,
      "previous_average": 73.44,
      "team": "FRE",
      "position1": "DEF",
      "probability": 0.000737223
    },
    {
      "id": 142,
      "first_name": "Jamie",
      "last_name": "Elliott",
      "team_id": 4,
      "previous_average": 73.43,
      "team": "COL",
      "position1": "FWD",
      "probability": 0.000742652
    },
    {
      "id": 212,
      "first_name": "James",
      "last_name": "Aish",
      "team_id": 6,
      "previous_average": 73.35,
      "team": "FRE",
      "position1": "MID",
      "probability": 0.000748103
    },
    {
      "id": 354,
      "first_name": "Finn",
      "last_name": "Callaghan",
      "team_id": 18,
      "previous_average": 73.11,
      "team": "GWS",
      "position1": "MID",
      "probability": 0.000753574
    },
    {
      "id": 37,
      "first_name": "Jake",
      "last_name": "Soligo",
      "team_id": 1,
      "previous_average": 73.1,
      "team": "ADE",
      "position1": "MID",
      "probability": 0.000759067
    },
    {
      "id": 109,
      "first_name": "Brodie",
      "last_name": "Kemp",
      "team_id": 3,
      "previous_average": 73.07,
      "team": "CAR",
      "position1": "DEF",
      "probability": 0.000764581
    },
    {
      "id": 505,
      "first_name": "Will",
      "last_name": "Phillips",
      "team_id": 9,
      "previous_average": 73,
      "team": "NTH",
      "position1": "MID",
      "probability": 0.000770115
    },
    {
      "id": 266,
      "first_name": "Sam",
      "last_name": "Collins",
      "team_id": 17,
      "previous_average": 73,
      "team": "GCS",
      "position1": "DEF",
      "probability": 0.00077567
    },
    {
      "id": 366,
      "first_name": "Nick",
      "last_name": "Haynes",
      "team_id": 18,
      "previous_average": 73,
      "team": "GWS",
      "position1": "DEF",
      "probability": 0.000781246
    },
    {
      "id": 428,
      "first_name": "Josh",
      "last_name": "Ward",
      "team_id": 8,
      "previous_average": 72.94,
      "team": "HAW",
      "position1": "MID",
      "probability": 0.000786842
    },
    {
      "id": 518,
      "first_name": "Tristan",
      "last_name": "Xerri",
      "team_id": 9,
      "previous_average": 72.89,
      "team": "NTH",
      "position1": "RUC",
      "probability": 0.000792458
    },
    {
      "id": 61,
      "first_name": "Ryan",
      "last_name": "Lester",
      "team_id": 2,
      "previous_average": 72.56,
      "team": "BRL",
      "position1": "DEF",
      "probability": 0.000798095
    },
    {
      "id": 681,
      "first_name": "Tom",
      "last_name": "Papley",
      "team_id": 14,
      "previous_average": 72.55,
      "team": "SYD",
      "position1": "FWD",
      "probability": 0.000803751
    },
    {
      "id": 448,
      "first_name": "Ed",
      "last_name": "Langdon",
      "team_id": 10,
      "previous_average": 72.48,
      "team": "MEL",
      "position1": "MID",
      "probability": 0.000809428
    },
    {
      "id": 343,
      "first_name": "Zach",
      "last_name": "Tuohy",
      "team_id": 7,
      "previous_average": 72.45,
      "team": "GEE",
      "position1": "MID",
      "probability": 0.000815124
    },
    {
      "id": 50,
      "first_name": "Charlie",
      "last_name": "Cameron",
      "team_id": 2,
      "previous_average": 72.3,
      "team": "BRL",
      "position1": "FWD",
      "probability": 0.000820839
    },
    {
      "id": 259,
      "first_name": "Rory",
      "last_name": "Atkins",
      "team_id": 17,
      "previous_average": 72.29,
      "team": "GCS",
      "position1": "DEF",
      "probability": 0.000826574
    },
    {
      "id": 191,
      "first_name": "Jayden",
      "last_name": "Laverde",
      "team_id": 5,
      "previous_average": 72.26,
      "team": "ESS",
      "position1": "DEF",
      "probability": 0.000832329
    },
    {
      "id": 676,
      "first_name": "Justin",
      "last_name": "McInerney",
      "team_id": 14,
      "previous_average": 72.17,
      "team": "SYD",
      "position1": "MID",
      "probability": 0.000838102
    },
    {
      "id": 457,
      "first_name": "Alex",
      "last_name": "Neal-Bullen",
      "team_id": 10,
      "previous_average": 72.04,
      "team": "MEL",
      "position1": "FWD",
      "probability": 0.000843895
    },
    {
      "id": 260,
      "first_name": "Charlie",
      "last_name": "Ballard",
      "team_id": 17,
      "previous_average": 71.91,
      "team": "GCS",
      "position1": "DEF",
      "probability": 0.000849706
    },
    {
      "id": 621,
      "first_name": "Liam",
      "last_name": "Henry",
      "team_id": 13,
      "previous_average": 71.88,
      "team": "STK",
      "position1": "MID",
      "probability": 0.000855535
    },
    {
      "id": 677,
      "first_name": "Hayden",
      "last_name": "McLean",
      "team_id": 14,
      "previous_average": 71.67,
      "team": "SYD",
      "position1": "RUC",
      "probability": 0.000861384
    },
    {
      "id": 674,
      "first_name": "Tom",
      "last_name": "McCartin",
      "team_id": 14,
      "previous_average": 71.36,
      "team": "SYD",
      "position1": "DEF",
      "probability": 0.00086725
    },
    {
      "id": 51,
      "first_name": "Keidean",
      "last_name": "Coleman",
      "team_id": 2,
      "previous_average": 71.35,
      "team": "BRL",
      "position1": "DEF",
      "probability": 0.000873135
    },
    {
      "id": 284,
      "first_name": "Darcy",
      "last_name": "Macpherson",
      "team_id": 17,
      "previous_average": 71.3,
      "team": "GCS",
      "position1": "DEF",
      "probability": 0.000879037
    },
    {
      "id": 147,
      "first_name": "Jeremy",
      "last_name": "Howe",
      "team_id": 4,
      "previous_average": 71.27,
      "team": "COL",
      "position1": "DEF",
      "probability": 0.000884958
    },
    {
      "id": 753,
      "first_name": "Andrew",
      "last_name": "Gaff",
      "team_id": 16,
      "previous_average": 71.26,
      "team": "WCE",
      "position1": "MID",
      "probability": 0.000890896
    },
    {
      "id": 115,
      "first_name": "Harry",
      "last_name": "McKay",
      "team_id": 3,
      "previous_average": 71.21,
      "team": "CAR",
      "position1": "FWD",
      "probability": 0.000896851
    },
    {
      "id": 216,
      "first_name": "Will",
      "last_name": "Brodie",
      "team_id": 6,
      "previous_average": 71.2,
      "team": "FRE",
      "position1": "MID",
      "probability": 0.000902824
    },
    {
      "id": 407,
      "first_name": "Mitch",
      "last_name": "Lewis",
      "team_id": 8,
      "previous_average": 71.13,
      "team": "HAW",
      "position1": "FWD",
      "probability": 0.000908814
    },
    {
      "id": 84,
      "first_name": "Darcy",
      "last_name": "Wilmot",
      "team_id": 2,
      "previous_average": 71.09,
      "team": "BRL",
      "position1": "DEF",
      "probability": 0.00091482
    },
    {
      "id": 339,
      "first_name": "Rhys",
      "last_name": "Stanley",
      "team_id": 7,
      "previous_average": 71.08,
      "team": "GEE",
      "position1": "RUC",
      "probability": 0.000920843
    },
    {
      "id": 441,
      "first_name": "Bayley",
      "last_name": "Fritsch",
      "team_id": 10,
      "previous_average": 70.93,
      "team": "MEL",
      "position1": "FWD",
      "probability": 0.000926883
    },
    {
      "id": 123,
      "first_name": "Marc",
      "last_name": "Pittonet",
      "team_id": 3,
      "previous_average": 70.2,
      "team": "CAR",
      "position1": "RUC",
      "probability": 0.000932939
    },
    {
      "id": 510,
      "first_name": "Liam",
      "last_name": "Shiels",
      "team_id": 9,
      "previous_average": 70.19,
      "team": "NTH",
      "position1": "MID",
      "probability": 0.000939011
    },
    {
      "id": 735,
      "first_name": "Bailey",
      "last_name": "Williams",
      "team_id": 15,
      "previous_average": 70.04,
      "team": "WBD",
      "position1": "MID",
      "probability": 0.000945099
    },
    {
      "id": 6,
      "first_name": "Brayden",
      "last_name": "Cook",
      "team_id": 1,
      "previous_average": 70,
      "team": "ADE",
      "position1": "MID",
      "probability": 0.000951203
    },
    {
      "id": 185,
      "first_name": "Nick",
      "last_name": "Hind",
      "team_id": 5,
      "previous_average": 69.88,
      "team": "ESS",
      "position1": "DEF",
      "probability": 0.000957322
    },
    {
      "id": 527,
      "first_name": "Darcy",
      "last_name": "Byrne-Jones",
      "team_id": 11,
      "previous_average": 69.76,
      "team": "PTA",
      "position1": "FWD",
      "probability": 0.000963457
    },
    {
      "id": 151,
      "first_name": "Patrick",
      "last_name": "Lipinski",
      "team_id": 4,
      "previous_average": 69.73,
      "team": "COL",
      "position1": "FWD",
      "probability": 0.000969606
    },
    {
      "id": 435,
      "first_name": "Jake",
      "last_name": "Bowey",
      "team_id": 10,
      "previous_average": 69.67,
      "team": "MEL",
      "position1": "DEF",
      "probability": 0.000975771
    },
    {
      "id": 670,
      "first_name": "Peter",
      "last_name": "Ladhams",
      "team_id": 14,
      "previous_average": 69.67,
      "team": "SYD",
      "position1": "RUC",
      "probability": 0.00098195
    },
    {
      "id": 736,
      "first_name": "Oscar",
      "last_name": "Allen",
      "team_id": 16,
      "previous_average": 69.52,
      "team": "WCE",
      "position1": "FWD",
      "probability": 0.000988143
    },
    {
      "id": 498,
      "first_name": "Nick",
      "last_name": "Larkey",
      "team_id": 9,
      "previous_average": 69.43,
      "team": "NTH",
      "position1": "FWD",
      "probability": 0.000994351
    },
    {
      "id": 205,
      "first_name": "Dylan",
      "last_name": "Shiel",
      "team_id": 5,
      "previous_average": 69.42,
      "team": "ESS",
      "position1": "MID",
      "probability": 0.001000572
    },
    {
      "id": 481,
      "first_name": "Aidan",
      "last_name": "Corr",
      "team_id": 9,
      "previous_average": 69.42,
      "team": "NTH",
      "position1": "DEF",
      "probability": 0.001006808
    },
    {
      "id": 356,
      "first_name": "Isaac",
      "last_name": "Cumming",
      "team_id": 18,
      "previous_average": 69.35,
      "team": "GWS",
      "position1": "DEF",
      "probability": 0.001013057
    },
    {
      "id": 519,
      "first_name": "Cameron",
      "last_name": "Zurhaar",
      "team_id": 9,
      "previous_average": 69.31,
      "team": "NTH",
      "position1": "FWD",
      "probability": 0.001019319
    },
    {
      "id": 654,
      "first_name": "Braeden",
      "last_name": "Campbell",
      "team_id": 14,
      "previous_average": 69.18,
      "team": "SYD",
      "position1": "DEF",
      "probability": 0.001025594
    },
    {
      "id": 745,
      "first_name": "Jamie",
      "last_name": "Cripps",
      "team_id": 16,
      "previous_average": 69.17,
      "team": "WCE",
      "position1": "FWD",
      "probability": 0.001031882
    },
    {
      "id": 568,
      "first_name": "Tom",
      "last_name": "Brown",
      "team_id": 12,
      "previous_average": 69,
      "team": "RIC",
      "position1": "DEF",
      "probability": 0.001038183
    },
    {
      "id": 75,
      "first_name": "Cam",
      "last_name": "Rayner",
      "team_id": 2,
      "previous_average": 68.91,
      "team": "BRL",
      "position1": "FWD",
      "probability": 0.001044496
    },
    {
      "id": 125,
      "first_name": "Jack",
      "last_name": "Silvagni",
      "team_id": 3,
      "previous_average": 68.88,
      "team": "CAR",
      "position1": "FWD",
      "probability": 0.001050821
    },
    {
      "id": 306,
      "first_name": "Tanner",
      "last_name": "Bruhn",
      "team_id": 7,
      "previous_average": 68.79,
      "team": "GEE",
      "position1": "MID",
      "probability": 0.001057159
    },
    {
      "id": 761,
      "first_name": "Jamaine",
      "last_name": "Jones",
      "team_id": 16,
      "previous_average": 68.46,
      "team": "WCE",
      "position1": "DEF",
      "probability": 0.001063507
    },
    {
      "id": 461,
      "first_name": "Kysaiah",
      "last_name": "Pickett",
      "team_id": 10,
      "previous_average": 68.38,
      "team": "MEL",
      "position1": "FWD",
      "probability": 0.001069867
    },
    {
      "id": 636,
      "first_name": "Sebastian",
      "last_name": "Ross",
      "team_id": 13,
      "previous_average": 68.31,
      "team": "STK",
      "position1": "MID",
      "probability": 0.001076239
    },
    {
      "id": 409,
      "first_name": "Connor",
      "last_name": "Macdonald",
      "team_id": 8,
      "previous_average": 68.24,
      "team": "HAW",
      "position1": "FWD",
      "probability": 0.001082621
    },
    {
      "id": 24,
      "first_name": "Lachlan",
      "last_name": "Murphy",
      "team_id": 1,
      "previous_average": 68.18,
      "team": "ADE",
      "position1": "FWD",
      "probability": 0.001089013
    },
    {
      "id": 12,
      "first_name": "Darcy",
      "last_name": "Fogarty",
      "team_id": 1,
      "previous_average": 68.1,
      "team": "ADE",
      "position1": "FWD",
      "probability": 0.001095417
    },
    {
      "id": 53,
      "first_name": "Tom",
      "last_name": "Doedee",
      "team_id": 2,
      "previous_average": 68.09,
      "team": "BRL",
      "position1": "DEF",
      "probability": 0.00110183
    },
    {
      "id": 623,
      "first_name": "Bradley",
      "last_name": "Hill",
      "team_id": 13,
      "previous_average": 68.05,
      "team": "STK",
      "position1": "MID",
      "probability": 0.001108253
    },
    {
      "id": 488,
      "first_name": "Zac",
      "last_name": "Fisher",
      "team_id": 9,
      "previous_average": 67.75,
      "team": "NTH",
      "position1": "FWD",
      "probability": 0.001114685
    },
    {
      "id": 247,
      "first_name": "Sam",
      "last_name": "Switkowski",
      "team_id": 6,
      "previous_average": 67.68,
      "team": "FRE",
      "position1": "FWD",
      "probability": 0.001121127
    },
    {
      "id": 641,
      "first_name": "Liam",
      "last_name": "Stocker",
      "team_id": 13,
      "previous_average": 67.64,
      "team": "STK",
      "position1": "DEF",
      "probability": 0.001127578
    },
    {
      "id": 34,
      "first_name": "Lachlan",
      "last_name": "Sholl",
      "team_id": 1,
      "previous_average": 67.44,
      "team": "ADE",
      "position1": "MID",
      "probability": 0.001134038
    },
    {
      "id": 625,
      "first_name": "Dougal",
      "last_name": "Howard",
      "team_id": 13,
      "previous_average": 67.39,
      "team": "STK",
      "position1": "DEF",
      "probability": 0.001140506
    },
    {
      "id": 421,
      "first_name": "Ned",
      "last_name": "Reeves",
      "team_id": 8,
      "previous_average": 67.19,
      "team": "HAW",
      "position1": "RUC",
      "probability": 0.001146983
    },
    {
      "id": 659,
      "first_name": "Robbie",
      "last_name": "Fox",
      "team_id": 14,
      "previous_average": 67.16,
      "team": "SYD",
      "position1": "DEF",
      "probability": 0.001153467
    },
    {
      "id": 452,
      "first_name": "Shane",
      "last_name": "McAdam",
      "team_id": 10,
      "previous_average": 67.14,
      "team": "MEL",
      "position1": "FWD",
      "probability": 0.001159959
    },
    {
      "id": 468,
      "first_name": "Tom",
      "last_name": "Sparrow",
      "team_id": 10,
      "previous_average": 67.14,
      "team": "MEL",
      "position1": "MID",
      "probability": 0.001166459
    },
    {
      "id": 561,
      "first_name": "Brandon",
      "last_name": "Zerk-Thatcher",
      "team_id": 11,
      "previous_average": 67.14,
      "team": "PTA",
      "position1": "DEF",
      "probability": 0.001172965
    },
    {
      "id": 718,
      "first_name": "Rory",
      "last_name": "Lobb",
      "team_id": 15,
      "previous_average": 67.05,
      "team": "WBD",
      "position1": "FWD",
      "probability": 0.001179478
    },
    {
      "id": 549,
      "first_name": "Sam",
      "last_name": "Powell-Pepper",
      "team_id": 11,
      "previous_average": 67,
      "team": "PTA",
      "position1": "FWD",
      "probability": 0.001185998
    },
    {
      "id": 430,
      "first_name": "Josh",
      "last_name": "Weddle",
      "team_id": 8,
      "previous_average": 66.88,
      "team": "HAW",
      "position1": "DEF",
      "probability": 0.001192524
    },
    {
      "id": 665,
      "first_name": "Will",
      "last_name": "Hayward",
      "team_id": 14,
      "previous_average": 66.86,
      "team": "SYD",
      "position1": "FWD",
      "probability": 0.001199056
    },
    {
      "id": 179,
      "first_name": "Xavier",
      "last_name": "Duursma",
      "team_id": 5,
      "previous_average": 66.79,
      "team": "ESS",
      "position1": "MID",
      "probability": 0.001205594
    },
    {
      "id": 181,
      "first_name": "Jade",
      "last_name": "Gresham",
      "team_id": 5,
      "previous_average": 66.77,
      "team": "ESS",
      "position1": "FWD",
      "probability": 0.001212137
    },
    {
      "id": 335,
      "first_name": "Mark",
      "last_name": "O'Connor",
      "team_id": 7,
      "previous_average": 66.73,
      "team": "GEE",
      "position1": "DEF",
      "probability": 0.001218685
    },
    {
      "id": 622,
      "first_name": "Jack",
      "last_name": "Higgins",
      "team_id": 13,
      "previous_average": 66.71,
      "team": "STK",
      "position1": "FWD",
      "probability": 0.001225238
    },
    {
      "id": 310,
      "first_name": "Brad",
      "last_name": "Close",
      "team_id": 7,
      "previous_average": 66.67,
      "team": "GEE",
      "position1": "FWD",
      "probability": 0.001231795
    },
    {
      "id": 559,
      "first_name": "Dylan",
      "last_name": "Williams",
      "team_id": 11,
      "previous_average": 66.65,
      "team": "PTA",
      "position1": "DEF",
      "probability": 0.001238356
    },
    {
      "id": 500,
      "first_name": "Griffin",
      "last_name": "Logue",
      "team_id": 9,
      "previous_average": 66.53,
      "team": "NTH",
      "position1": "DEF",
      "probability": 0.001244921
    },
    {
      "id": 171,
      "first_name": "Nick",
      "last_name": "Bryan",
      "team_id": 5,
      "previous_average": 66.38,
      "team": "ESS",
      "position1": "RUC",
      "probability": 0.00125149
    },
    {
      "id": 416,
      "first_name": "Harry",
      "last_name": "Morrison",
      "team_id": 8,
      "previous_average": 66.38,
      "team": "HAW",
      "position1": "MID",
      "probability": 0.001258062
    },
    {
      "id": 577,
      "first_name": "Jack",
      "last_name": "Graham",
      "team_id": 12,
      "previous_average": 66.35,
      "team": "RIC",
      "position1": "FWD",
      "probability": 0.001264637
    },
    {
      "id": 323,
      "first_name": "Jack",
      "last_name": "Henry",
      "team_id": 7,
      "previous_average": 66.27,
      "team": "GEE",
      "position1": "DEF",
      "probability": 0.001271214
    },
    {
      "id": 130,
      "first_name": "Lewis",
      "last_name": "Young",
      "team_id": 3,
      "previous_average": 66.13,
      "team": "CAR",
      "position1": "DEF",
      "probability": 0.001277793
    },
    {
      "id": 543,
      "first_name": "Todd",
      "last_name": "Marshall",
      "team_id": 11,
      "previous_average": 66.05,
      "team": "PTA",
      "position1": "FWD",
      "probability": 0.001284375
    },
    {
      "id": 276,
      "first_name": "Nick",
      "last_name": "Holman",
      "team_id": 17,
      "previous_average": 66.05,
      "team": "GCS",
      "position1": "FWD",
      "probability": 0.001290958
    },
    {
      "id": 199,
      "first_name": "Archie",
      "last_name": "Perkins",
      "team_id": 5,
      "previous_average": 66,
      "team": "ESS",
      "position1": "FWD",
      "probability": 0.001297543
    },
    {
      "id": 404,
      "first_name": "Henry",
      "last_name": "Hustwaite",
      "team_id": 8,
      "previous_average": 66,
      "team": "HAW",
      "position1": "MID",
      "probability": 0.001304128
    },
    {
      "id": 522,
      "first_name": "Miles",
      "last_name": "Bergman",
      "team_id": 11,
      "previous_average": 65.86,
      "team": "PTA",
      "position1": "DEF",
      "probability": 0.001310714
    },
    {
      "id": 551,
      "first_name": "Willie",
      "last_name": "Rioli",
      "team_id": 11,
      "previous_average": 65.82,
      "team": "PTA",
      "position1": "FWD",
      "probability": 0.001317301
    },
    {
      "id": 470,
      "first_name": "Adam",
      "last_name": "Tomlinson",
      "team_id": 10,
      "previous_average": 65.63,
      "team": "MEL",
      "position1": "DEF",
      "probability": 0.001323887
    },
    {
      "id": 523,
      "first_name": "Travis",
      "last_name": "Boak",
      "team_id": 11,
      "previous_average": 65.63,
      "team": "PTA",
      "position1": "MID",
      "probability": 0.001330473
    },
    {
      "id": 158,
      "first_name": "Brody",
      "last_name": "Mihocek",
      "team_id": 4,
      "previous_average": 65.38,
      "team": "COL",
      "position1": "FWD",
      "probability": 0.001337059
    },
    {
      "id": 517,
      "first_name": "George",
      "last_name": "Wardlaw",
      "team_id": 9,
      "previous_average": 65.38,
      "team": "NTH",
      "position1": "MID",
      "probability": 0.001343643
    },
    {
      "id": 178,
      "first_name": "Sam",
      "last_name": "Durham",
      "team_id": 5,
      "previous_average": 65.23,
      "team": "ESS",
      "position1": "MID",
      "probability": 0.001350226
    },
    {
      "id": 472,
      "first_name": "Jacob",
      "last_name": "van Rooyen",
      "team_id": 10,
      "previous_average": 65.11,
      "team": "MEL",
      "position1": "FWD",
      "probability": 0.001356808
    },
    {
      "id": 744,
      "first_name": "Tom",
      "last_name": "Cole",
      "team_id": 16,
      "previous_average": 64.92,
      "team": "WCE",
      "position1": "DEF",
      "probability": 0.001363387
    },
    {
      "id": 644,
      "first_name": "Jimmy",
      "last_name": "Webster",
      "team_id": 13,
      "previous_average": 64.81,
      "team": "STK",
      "position1": "DEF",
      "probability": 0.001369964
    },
    {
      "id": 18,
      "first_name": "Mark",
      "last_name": "Keane",
      "team_id": 1,
      "previous_average": 64.8,
      "team": "ADE",
      "position1": "DEF",
      "probability": 0.001376539
    },
    {
      "id": 206,
      "first_name": "Jake",
      "last_name": "Stringer",
      "team_id": 5,
      "previous_average": 64.71,
      "team": "ESS",
      "position1": "FWD",
      "probability": 0.00138311
    },
    {
      "id": 272,
      "first_name": "Brayden",
      "last_name": "Fiorini",
      "team_id": 17,
      "previous_average": 64.65,
      "team": "GCS",
      "position1": "MID",
      "probability": 0.001389678
    },
    {
      "id": 775,
      "first_name": "Jake",
      "last_name": "Waterman",
      "team_id": 16,
      "previous_average": 64.64,
      "team": "WCE",
      "position1": "FWD",
      "probability": 0.001396243
    },
    {
      "id": 211,
      "first_name": "Peter",
      "last_name": "Wright",
      "team_id": 5,
      "previous_average": 64.4,
      "team": "ESS",
      "position1": "FWD",
      "probability": 0.001402803
    },
    {
      "id": 217,
      "first_name": "Heath",
      "last_name": "Chapman",
      "team_id": 6,
      "previous_average": 64.33,
      "team": "FRE",
      "position1": "DEF",
      "probability": 0.001409359
    },
    {
      "id": 439,
      "first_name": "Kade",
      "last_name": "Chandler",
      "team_id": 10,
      "previous_average": 64.29,
      "team": "MEL",
      "position1": "FWD",
      "probability": 0.00141591
    },
    {
      "id": 583,
      "first_name": "Tom",
      "last_name": "Lynch",
      "team_id": 12,
      "previous_average": 64.25,
      "team": "RIC",
      "position1": "FWD",
      "probability": 0.001422456
    },
    {
      "id": 733,
      "first_name": "Cody",
      "last_name": "Weightman",
      "team_id": 15,
      "previous_average": 64,
      "team": "WBD",
      "position1": "FWD",
      "probability": 0.001428996
    },
    {
      "id": 413,
      "first_name": "Lloyd",
      "last_name": "Meek",
      "team_id": 8,
      "previous_average": 63.94,
      "team": "HAW",
      "position1": "RUC",
      "probability": 0.001435531
    },
    {
      "id": 606,
      "first_name": "Josh",
      "last_name": "Battle",
      "team_id": 13,
      "previous_average": 63.86,
      "team": "STK",
      "position1": "DEF",
      "probability": 0.001442059
    },
    {
      "id": 135,
      "first_name": "Mason",
      "last_name": "Cox",
      "team_id": 4,
      "previous_average": 63.5,
      "team": "COL",
      "position1": "RUC",
      "probability": 0.001448581
    },
    {
      "id": 754,
      "first_name": "Reuben",
      "last_name": "Ginbey",
      "team_id": 16,
      "previous_average": 63.47,
      "team": "WCE",
      "position1": "MID",
      "probability": 0.001455097
    },
    {
      "id": 195,
      "first_name": "Ben",
      "last_name": "McKay",
      "team_id": 5,
      "previous_average": 63.21,
      "team": "ESS",
      "position1": "DEF",
      "probability": 0.001461604
    },
    {
      "id": 69,
      "first_name": "Conor",
      "last_name": "McKenna",
      "team_id": 2,
      "previous_average": 63.17,
      "team": "BRL",
      "position1": "DEF",
      "probability": 0.001468105
    },
    {
      "id": 489,
      "first_name": "Eddie",
      "last_name": "Ford",
      "team_id": 9,
      "previous_average": 63.14,
      "team": "NTH",
      "position1": "FWD",
      "probability": 0.001474597
    },
    {
      "id": 612,
      "first_name": "Hunter",
      "last_name": "Clark",
      "team_id": 13,
      "previous_average": 63.06,
      "team": "STK",
      "position1": "MID",
      "probability": 0.001481081
    },
    {
      "id": 757,
      "first_name": "Brady",
      "last_name": "Hough",
      "team_id": 16,
      "previous_average": 62.73,
      "team": "WCE",
      "position1": "DEF",
      "probability": 0.001487556
    },
    {
      "id": 58,
      "first_name": "Eric",
      "last_name": "Hipwood",
      "team_id": 2,
      "previous_average": 62.43,
      "team": "BRL",
      "position1": "FWD",
      "probability": 0.001494023
    },
    {
      "id": 105,
      "first_name": "Lachie",
      "last_name": "Fogarty",
      "team_id": 3,
      "previous_average": 62.33,
      "team": "CAR",
      "position1": "FWD",
      "probability": 0.00150048
    },
    {
      "id": 434,
      "first_name": "Jack",
      "last_name": "Billings",
      "team_id": 10,
      "previous_average": 62.33,
      "team": "MEL",
      "position1": "FWD",
      "probability": 0.001506927
    },
    {
      "id": 414,
      "first_name": "Seamus",
      "last_name": "Mitchell",
      "team_id": 8,
      "previous_average": 62.29,
      "team": "HAW",
      "position1": "DEF",
      "probability": 0.001513364
    },
    {
      "id": 406,
      "first_name": "Changkuoth",
      "last_name": "Jiath",
      "team_id": 8,
      "previous_average": 62.25,
      "team": "HAW",
      "position1": "DEF",
      "probability": 0.00151979
    },
    {
      "id": 98,
      "first_name": "David",
      "last_name": "Cuningham",
      "team_id": 3,
      "previous_average": 62.2,
      "team": "CAR",
      "position1": "FWD",
      "probability": 0.001526206
    },
    {
      "id": 609,
      "first_name": "Ryan",
      "last_name": "Byrnes",
      "team_id": 13,
      "previous_average": 62.15,
      "team": "STK",
      "position1": "MID",
      "probability": 0.00153261
    },
    {
      "id": 516,
      "first_name": "Darcy",
      "last_name": "Tucker",
      "team_id": 9,
      "previous_average": 62,
      "team": "NTH",
      "position1": "MID",
      "probability": 0.001539003
    },
    {
      "id": 13,
      "first_name": "Lachlan",
      "last_name": "Gollant",
      "team_id": 1,
      "previous_average": 61.75,
      "team": "ADE",
      "position1": "FWD",
      "probability": 0.001545384
    },
    {
      "id": 313,
      "first_name": "Sam",
      "last_name": "De Koning",
      "team_id": 7,
      "previous_average": 61.47,
      "team": "GEE",
      "position1": "DEF",
      "probability": 0.001551752
    },
    {
      "id": 338,
      "first_name": "Gary",
      "last_name": "Rohan",
      "team_id": 7,
      "previous_average": 61.4,
      "team": "GEE",
      "position1": "FWD",
      "probability": 0.001558108
    },
    {
      "id": 747,
      "first_name": "Jack",
      "last_name": "Darling",
      "team_id": 16,
      "previous_average": 61.3,
      "team": "WCE",
      "position1": "FWD",
      "probability": 0.001564451
    },
    {
      "id": 189,
      "first_name": "Jake",
      "last_name": "Kelly",
      "team_id": 5,
      "previous_average": 61.24,
      "team": "ESS",
      "position1": "DEF",
      "probability": 0.00157078
    },
    {
      "id": 305,
      "first_name": "Jack",
      "last_name": "Bowes",
      "team_id": 7,
      "previous_average": 61.18,
      "team": "GEE",
      "position1": "DEF",
      "probability": 0.001577095
    },
    {
      "id": 437,
      "first_name": "Ben",
      "last_name": "Brown",
      "team_id": 10,
      "previous_average": 61.14,
      "team": "MEL",
      "position1": "FWD",
      "probability": 0.001583397
    },
    {
      "id": 628,
      "first_name": "Max",
      "last_name": "King",
      "team_id": 13,
      "previous_average": 61.1,
      "team": "STK",
      "position1": "FWD",
      "probability": 0.001589683
    },
    {
      "id": 161,
      "first_name": "Nathan",
      "last_name": "Murphy",
      "team_id": 4,
      "previous_average": 60.95,
      "team": "COL",
      "position1": "DEF",
      "probability": 0.001595955
    },
    {
      "id": 393,
      "first_name": "Luke",
      "last_name": "Breust",
      "team_id": 8,
      "previous_average": 60.86,
      "team": "HAW",
      "position1": "FWD",
      "probability": 0.001602211
    },
    {
      "id": 460,
      "first_name": "Harrison",
      "last_name": "Petty",
      "team_id": 10,
      "previous_average": 60.64,
      "team": "MEL",
      "position1": "DEF",
      "probability": 0.001608452
    },
    {
      "id": 731,
      "first_name": "Jamarra",
      "last_name": "Ugle-Hagan",
      "team_id": 15,
      "previous_average": 60.57,
      "team": "WBD",
      "position1": "FWD",
      "probability": 0.001614677
    },
    {
      "id": 227,
      "first_name": "Michael",
      "last_name": "Frederick",
      "team_id": 6,
      "previous_average": 60.42,
      "team": "FRE",
      "position1": "FWD",
      "probability": 0.001620885
    },
    {
      "id": 494,
      "first_name": "Hugh",
      "last_name": "Greenwood",
      "team_id": 9,
      "previous_average": 60.36,
      "team": "NTH",
      "position1": "MID",
      "probability": 0.001627076
    },
    {
      "id": 453,
      "first_name": "Tom",
      "last_name": "McDonald",
      "team_id": 10,
      "previous_average": 60.17,
      "team": "MEL",
      "position1": "FWD",
      "probability": 0.001633251
    },
    {
      "id": 25,
      "first_name": "Nick",
      "last_name": "Murray",
      "team_id": 1,
      "previous_average": 60.12,
      "team": "ADE",
      "position1": "DEF",
      "probability": 0.001639407
    },
    {
      "id": 377,
      "first_name": "Xavier",
      "last_name": "O'Halloran",
      "team_id": 18,
      "previous_average": 60.08,
      "team": "GWS",
      "position1": "FWD",
      "probability": 0.001645546
    },
    {
      "id": 95,
      "first_name": "Matthew",
      "last_name": "Cottrell",
      "team_id": 3,
      "previous_average": 60,
      "team": "CAR",
      "position1": "MID",
      "probability": 0.001651666
    },
    {
      "id": 687,
      "first_name": "Angus",
      "last_name": "Sheldrick",
      "team_id": 14,
      "previous_average": 60,
      "team": "SYD",
      "position1": "MID",
      "probability": 0.001657768
    },
    {
      "id": 349,
      "first_name": "Toby",
      "last_name": "Bedford",
      "team_id": 18,
      "previous_average": 59.94,
      "team": "GWS",
      "position1": "FWD",
      "probability": 0.001663851
    },
    {
      "id": 656,
      "first_name": "Harry",
      "last_name": "Cunningham",
      "team_id": 14,
      "previous_average": 59.91,
      "team": "SYD",
      "position1": "DEF",
      "probability": 0.001669914
    },
    {
      "id": 113,
      "first_name": "Jack",
      "last_name": "Martin",
      "team_id": 3,
      "previous_average": 59.55,
      "team": "CAR",
      "position1": "FWD",
      "probability": 0.001675958
    },
    {
      "id": 324,
      "first_name": "Oliver",
      "last_name": "Henry",
      "team_id": 7,
      "previous_average": 59.55,
      "team": "GEE",
      "position1": "FWD",
      "probability": 0.001681981
    },
    {
      "id": 40,
      "first_name": "Riley",
      "last_name": "Thilthorpe",
      "team_id": 1,
      "previous_average": 59.43,
      "team": "ADE",
      "position1": "FWD",
      "probability": 0.001687984
    },
    {
      "id": 277,
      "first_name": "Bailey",
      "last_name": "Humphrey",
      "team_id": 17,
      "previous_average": 59.26,
      "team": "GCS",
      "position1": "FWD",
      "probability": 0.001693966
    },
    {
      "id": 664,
      "first_name": "Joel",
      "last_name": "Hamling",
      "team_id": 14,
      "previous_average": 59.25,
      "team": "SYD",
      "position1": "DEF",
      "probability": 0.001699926
    },
    {
      "id": 143,
      "first_name": "Billy",
      "last_name": "Frampton",
      "team_id": 4,
      "previous_average": 59,
      "team": "COL",
      "position1": "DEF",
      "probability": 0.001705865
    },
    {
      "id": 535,
      "first_name": "Mitch",
      "last_name": "Georgiades",
      "team_id": 11,
      "previous_average": 59,
      "team": "PTA",
      "position1": "FWD",
      "probability": 0.001711782
    },
    {
      "id": 675,
      "first_name": "Logan",
      "last_name": "McDonald",
      "team_id": 14,
      "previous_average": 59,
      "team": "SYD",
      "position1": "FWD",
      "probability": 0.001717676
    },
    {
      "id": 278,
      "first_name": "Joel",
      "last_name": "Jeffrey",
      "team_id": 17,
      "previous_average": 58.86,
      "team": "GCS",
      "position1": "DEF",
      "probability": 0.001723548
    },
    {
      "id": 588,
      "first_name": "Ben",
      "last_name": "Miller",
      "team_id": 12,
      "previous_average": 58.85,
      "team": "RIC",
      "position1": "RUC",
      "probability": 0.001729396
    },
    {
      "id": 239,
      "first_name": "Alex",
      "last_name": "Pearce",
      "team_id": 6,
      "previous_average": 58.83,
      "team": "FRE",
      "position1": "DEF",
      "probability": 0.001735221
    },
    {
      "id": 692,
      "first_name": "Sam",
      "last_name": "Wicks",
      "team_id": 14,
      "previous_average": 58.7,
      "team": "SYD",
      "position1": "FWD",
      "probability": 0.001741022
    },
    {
      "id": 66,
      "first_name": "Lincoln",
      "last_name": "McCarthy",
      "team_id": 2,
      "previous_average": 58.62,
      "team": "BRL",
      "position1": "FWD",
      "probability": 0.001746799
    },
    {
      "id": 157,
      "first_name": "Daniel",
      "last_name": "McStay",
      "team_id": 4,
      "previous_average": 58.58,
      "team": "COL",
      "position1": "FWD",
      "probability": 0.001752551
    },
    {
      "id": 714,
      "first_name": "Liam",
      "last_name": "Jones",
      "team_id": 15,
      "previous_average": 58.56,
      "team": "WBD",
      "position1": "DEF",
      "probability": 0.001758278
    },
    {
      "id": 229,
      "first_name": "Ethan",
      "last_name": "Hughes",
      "team_id": 6,
      "previous_average": 58.5,
      "team": "FRE",
      "position1": "DEF",
      "probability": 0.001763979
    },
    {
      "id": 329,
      "first_name": "Jake",
      "last_name": "Kolodjashnij",
      "team_id": 7,
      "previous_average": 58.42,
      "team": "GEE",
      "position1": "DEF",
      "probability": 0.001769655
    },
    {
      "id": 43,
      "first_name": "Callum",
      "last_name": "Ah Chee",
      "team_id": 2,
      "previous_average": 58.33,
      "team": "BRL",
      "position1": "MID",
      "probability": 0.001775305
    },
    {
      "id": 678,
      "first_name": "Lewis",
      "last_name": "Melican",
      "team_id": 14,
      "previous_average": 58.29,
      "team": "SYD",
      "position1": "DEF",
      "probability": 0.001780928
    },
    {
      "id": 3,
      "first_name": "James",
      "last_name": "Borlase",
      "team_id": 1,
      "previous_average": 58.25,
      "team": "ADE",
      "position1": "DEF",
      "probability": 0.001786525
    },
    {
      "id": 351,
      "first_name": "Callum M.",
      "last_name": "Brown",
      "team_id": 18,
      "previous_average": 58.25,
      "team": "GWS",
      "position1": "FWD",
      "probability": 0.001792094
    },
    {
      "id": 514,
      "first_name": "Curtis",
      "last_name": "Taylor",
      "team_id": 9,
      "previous_average": 58.19,
      "team": "NTH",
      "position1": "MID",
      "probability": 0.001797636
    },
    {
      "id": 582,
      "first_name": "Jacob",
      "last_name": "Koschitzke",
      "team_id": 12,
      "previous_average": 58.17,
      "team": "RIC",
      "position1": "FWD",
      "probability": 0.001803149
    },
    {
      "id": 267,
      "first_name": "Alex",
      "last_name": "Davies",
      "team_id": 17,
      "previous_average": 58.11,
      "team": "GCS",
      "position1": "MID",
      "probability": 0.001808635
    },
    {
      "id": 512,
      "first_name": "Dylan",
      "last_name": "Stephens",
      "team_id": 9,
      "previous_average": 58,
      "team": "NTH",
      "position1": "MID",
      "probability": 0.001814091
    },
    {
      "id": 608,
      "first_name": "Dan",
      "last_name": "Butler",
      "team_id": 13,
      "previous_average": 57.87,
      "team": "STK",
      "position1": "FWD",
      "probability": 0.001819519
    },
    {
      "id": 647,
      "first_name": "Marcus",
      "last_name": "Windhager",
      "team_id": 13,
      "previous_average": 57.83,
      "team": "STK",
      "position1": "DEF",
      "probability": 0.001824917
    },
    {
      "id": 108,
      "first_name": "Oliver",
      "last_name": "Hollands",
      "team_id": 3,
      "previous_average": 57.76,
      "team": "CAR",
      "position1": "MID",
      "probability": 0.001830286
    },
    {
      "id": 340,
      "first_name": "Tyson",
      "last_name": "Stengle",
      "team_id": 7,
      "previous_average": 57.58,
      "team": "GEE",
      "position1": "FWD",
      "probability": 0.001835624
    },
    {
      "id": 591,
      "first_name": "Marlion",
      "last_name": "Pickett",
      "team_id": 12,
      "previous_average": 57.57,
      "team": "RIC",
      "position1": "MID",
      "probability": 0.001840932
    },
    {
      "id": 767,
      "first_name": "Jack",
      "last_name": "Petruccelle",
      "team_id": 16,
      "previous_average": 57.5,
      "team": "WCE",
      "position1": "FWD",
      "probability": 0.00184621
    },
    {
      "id": 454,
      "first_name": "Judd",
      "last_name": "McVee",
      "team_id": 10,
      "previous_average": 57.43,
      "team": "MEL",
      "position1": "DEF",
      "probability": 0.001851456
    },
    {
      "id": 724,
      "first_name": "Caleb",
      "last_name": "Poulter",
      "team_id": 15,
      "previous_average": 57.33,
      "team": "WBD",
      "position1": "MID",
      "probability": 0.00185667
    },
    {
      "id": 734,
      "first_name": "Rhylee",
      "last_name": "West",
      "team_id": 15,
      "previous_average": 57.25,
      "team": "WBD",
      "position1": "FWD",
      "probability": 0.001861853
    },
    {
      "id": 145,
      "first_name": "Bobby",
      "last_name": "Hill",
      "team_id": 4,
      "previous_average": 57.14,
      "team": "COL",
      "position1": "FWD",
      "probability": 0.001867003
    },
    {
      "id": 73,
      "first_name": "Jack",
      "last_name": "Payne",
      "team_id": 2,
      "previous_average": 57,
      "team": "BRL",
      "position1": "DEF",
      "probability": 0.001872121
    },
    {
      "id": 539,
      "first_name": "Lachie",
      "last_name": "Jones",
      "team_id": 11,
      "previous_average": 57,
      "team": "PTA",
      "position1": "DEF",
      "probability": 0.001877206
    },
    {
      "id": 574,
      "first_name": "Thomson",
      "last_name": "Dow",
      "team_id": 12,
      "previous_average": 57,
      "team": "RIC",
      "position1": "MID",
      "probability": 0.001882258
    },
    {
      "id": 146,
      "first_name": "Will",
      "last_name": "Hoskin-Elliott",
      "team_id": 4,
      "previous_average": 56.85,
      "team": "COL",
      "position1": "MID",
      "probability": 0.001887276
    },
    {
      "id": 399,
      "first_name": "Sam",
      "last_name": "Frost",
      "team_id": 8,
      "previous_average": 56.72,
      "team": "HAW",
      "position1": "DEF",
      "probability": 0.001892261
    },
    {
      "id": 280,
      "first_name": "Ben",
      "last_name": "King",
      "team_id": 17,
      "previous_average": 56.6,
      "team": "GCS",
      "position1": "FWD",
      "probability": 0.001897211
    },
    {
      "id": 249,
      "first_name": "Josh",
      "last_name": "Treacy",
      "team_id": 6,
      "previous_average": 56.53,
      "team": "FRE",
      "position1": "FWD",
      "probability": 0.001902126
    },
    {
      "id": 650,
      "first_name": "Joel",
      "last_name": "Amartey",
      "team_id": 14,
      "previous_average": 56.36,
      "team": "SYD",
      "position1": "FWD",
      "probability": 0.001907007
    },
    {
      "id": 214,
      "first_name": "Bailey",
      "last_name": "Banfield",
      "team_id": 6,
      "previous_average": 56.29,
      "team": "FRE",
      "position1": "FWD",
      "probability": 0.001911852
    },
    {
      "id": 493,
      "first_name": "Josh",
      "last_name": "Goater",
      "team_id": 9,
      "previous_average": 56.2,
      "team": "NTH",
      "position1": "DEF",
      "probability": 0.001916661
    },
    {
      "id": 22,
      "first_name": "Max",
      "last_name": "Michalanney",
      "team_id": 1,
      "previous_average": 56.14,
      "team": "ADE",
      "position1": "DEF",
      "probability": 0.001921435
    },
    {
      "id": 507,
      "first_name": "Tom",
      "last_name": "Powell",
      "team_id": 9,
      "previous_average": 55.86,
      "team": "NTH",
      "position1": "FWD",
      "probability": 0.001926172
    },
    {
      "id": 29,
      "first_name": "Luke",
      "last_name": "Pedlar",
      "team_id": 1,
      "previous_average": 55.81,
      "team": "ADE",
      "position1": "FWD",
      "probability": 0.001930873
    },
    {
      "id": 550,
      "first_name": "Esava",
      "last_name": "Ratugolea",
      "team_id": 11,
      "previous_average": 55.81,
      "team": "PTA",
      "position1": "DEF",
      "probability": 0.001935537
    },
    {
      "id": 626,
      "first_name": "Zak",
      "last_name": "Jones",
      "team_id": 13,
      "previous_average": 55.75,
      "team": "STK",
      "position1": "MID",
      "probability": 0.001940163
    },
    {
      "id": 631,
      "first_name": "Tim",
      "last_name": "Membrey",
      "team_id": 13,
      "previous_average": 55.43,
      "team": "STK",
      "position1": "FWD",
      "probability": 0.001944753
    },
    {
      "id": 252,
      "first_name": "Michael",
      "last_name": "Walters",
      "team_id": 6,
      "previous_average": 55.25,
      "team": "FRE",
      "position1": "FWD",
      "probability": 0.001949304
    },
    {
      "id": 94,
      "first_name": "Alex",
      "last_name": "Cincotta",
      "team_id": 3,
      "previous_average": 55.19,
      "team": "CAR",
      "position1": "DEF",
      "probability": 0.001953817
    },
    {
      "id": 587,
      "first_name": "Kamdyn",
      "last_name": "McIntosh",
      "team_id": 12,
      "previous_average": 55.09,
      "team": "RIC",
      "position1": "MID",
      "probability": 0.001958291
    },
    {
      "id": 207,
      "first_name": "Elijah",
      "last_name": "Tsatas",
      "team_id": 5,
      "previous_average": 55,
      "team": "ESS",
      "position1": "MID",
      "probability": 0.001962727
    },
    {
      "id": 616,
      "first_name": "Paddy",
      "last_name": "Dow",
      "team_id": 13,
      "previous_average": 55,
      "team": "STK",
      "position1": "MID",
      "probability": 0.001967123
    },
    {
      "id": 546,
      "first_name": "Trent",
      "last_name": "McKenzie",
      "team_id": 11,
      "previous_average": 54.94,
      "team": "PTA",
      "position1": "DEF",
      "probability": 0.00197148
    },
    {
      "id": 765,
      "first_name": "Ryan",
      "last_name": "Maric",
      "team_id": 16,
      "previous_average": 54.8,
      "team": "WCE",
      "position1": "FWD",
      "probability": 0.001975798
    },
    {
      "id": 328,
      "first_name": "Mitchell",
      "last_name": "Knevitt",
      "team_id": 7,
      "previous_average": 54.75,
      "team": "GEE",
      "position1": "MID",
      "probability": 0.001980075
    },
    {
      "id": 264,
      "first_name": "Levi",
      "last_name": "Casboult",
      "team_id": 17,
      "previous_average": 54.65,
      "team": "GCS",
      "position1": "FWD",
      "probability": 0.001984312
    },
    {
      "id": 741,
      "first_name": "Tyler",
      "last_name": "Brockman",
      "team_id": 16,
      "previous_average": 54.6,
      "team": "WCE",
      "position1": "FWD",
      "probability": 0.001988508
    },
    {
      "id": 119,
      "first_name": "Jesse",
      "last_name": "Motlop",
      "team_id": 3,
      "previous_average": 54.56,
      "team": "CAR",
      "position1": "FWD",
      "probability": 0.001992664
    },
    {
      "id": 258,
      "first_name": "Mac",
      "last_name": "Andrew",
      "team_id": 17,
      "previous_average": 54.53,
      "team": "GCS",
      "position1": "DEF",
      "probability": 0.001996778
    },
    {
      "id": 26,
      "first_name": "Luke",
      "last_name": "Nankervis",
      "team_id": 1,
      "previous_average": 54.5,
      "team": "ADE",
      "position1": "DEF",
      "probability": 0.00200085
    },
    {
      "id": 81,
      "first_name": "Brandon",
      "last_name": "Starcevich",
      "team_id": 2,
      "previous_average": 54.48,
      "team": "BRL",
      "position1": "DEF",
      "probability": 0.002004881
    },
    {
      "id": 715,
      "first_name": "Alex",
      "last_name": "Keath",
      "team_id": 15,
      "previous_average": 54.44,
      "team": "WBD",
      "position1": "DEF",
      "probability": 0.00200887
    },
    {
      "id": 122,
      "first_name": "Matthew",
      "last_name": "Owies",
      "team_id": 3,
      "previous_average": 54.38,
      "team": "CAR",
      "position1": "FWD",
      "probability": 0.002012816
    },
    {
      "id": 182,
      "first_name": "Matt",
      "last_name": "Guelfi",
      "team_id": 5,
      "previous_average": 54.31,
      "team": "ESS",
      "position1": "FWD",
      "probability": 0.00201672
    },
    {
      "id": 597,
      "first_name": "Samson",
      "last_name": "Ryan",
      "team_id": 12,
      "previous_average": 54.21,
      "team": "RIC",
      "position1": "RUC",
      "probability": 0.00202058
    },
    {
      "id": 153,
      "first_name": "Oleg",
      "last_name": "Markov",
      "team_id": 4,
      "previous_average": 54.2,
      "team": "COL",
      "position1": "DEF",
      "probability": 0.002024398
    },
    {
      "id": 693,
      "first_name": "Oskar",
      "last_name": "Baker",
      "team_id": 15,
      "previous_average": 54.17,
      "team": "WBD",
      "position1": "MID",
      "probability": 0.002028172
    },
    {
      "id": 56,
      "first_name": "Darcy",
      "last_name": "Fort",
      "team_id": 2,
      "previous_average": 54.14,
      "team": "BRL",
      "position1": "RUC",
      "probability": 0.002031902
    },
    {
      "id": 710,
      "first_name": "Ryan",
      "last_name": "Gardner",
      "team_id": 15,
      "previous_average": 54.1,
      "team": "WBD",
      "position1": "DEF",
      "probability": 0.002035588
    },
    {
      "id": 231,
      "first_name": "Matthew",
      "last_name": "Johnson",
      "team_id": 6,
      "previous_average": 54,
      "team": "FRE",
      "position1": "MID",
      "probability": 0.00203923
    },
    {
      "id": 564,
      "first_name": "Sam",
      "last_name": "Banks",
      "team_id": 12,
      "previous_average": 54,
      "team": "RIC",
      "position1": "DEF",
      "probability": 0.002042827
    },
    {
      "id": 213,
      "first_name": "Jye",
      "last_name": "Amiss",
      "team_id": 6,
      "previous_average": 53.82,
      "team": "FRE",
      "position1": "FWD",
      "probability": 0.00204638
    },
    {
      "id": 155,
      "first_name": "Beau",
      "last_name": "McCreery",
      "team_id": 4,
      "previous_average": 53.77,
      "team": "COL",
      "position1": "FWD",
      "probability": 0.002049887
    },
    {
      "id": 431,
      "first_name": "Chad",
      "last_name": "Wingard",
      "team_id": 8,
      "previous_average": 53.57,
      "team": "HAW",
      "position1": "FWD",
      "probability": 0.002053349
    },
    {
      "id": 402,
      "first_name": "Jack",
      "last_name": "Gunston",
      "team_id": 8,
      "previous_average": 53.18,
      "team": "HAW",
      "position1": "FWD",
      "probability": 0.002056766
    },
    {
      "id": 337,
      "first_name": "Brandan",
      "last_name": "Parfitt",
      "team_id": 7,
      "previous_average": 53,
      "team": "GEE",
      "position1": "MID",
      "probability": 0.002060136
    },
    {
      "id": 102,
      "first_name": "Corey",
      "last_name": "Durdin",
      "team_id": 3,
      "previous_average": 52.64,
      "team": "CAR",
      "position1": "FWD",
      "probability": 0.002063461
    },
    {
      "id": 400,
      "first_name": "Jack",
      "last_name": "Ginnivan",
      "team_id": 8,
      "previous_average": 52.64,
      "team": "HAW",
      "position1": "FWD",
      "probability": 0.002066739
    },
    {
      "id": 381,
      "first_name": "Jake",
      "last_name": "Riccardi",
      "team_id": 18,
      "previous_average": 52.56,
      "team": "GWS",
      "position1": "FWD",
      "probability": 0.002069971
    },
    {
      "id": 33,
      "first_name": "Harry",
      "last_name": "Schoenberg",
      "team_id": 1,
      "previous_average": 52.55,
      "team": "ADE",
      "position1": "MID",
      "probability": 0.002073156
    },
    {
      "id": 15,
      "first_name": "Elliott",
      "last_name": "Himmelberg",
      "team_id": 1,
      "previous_average": 52.33,
      "team": "ADE",
      "position1": "FWD",
      "probability": 0.002076294
    },
    {
      "id": 696,
      "first_name": "Lachlan",
      "last_name": "Bramble",
      "team_id": 15,
      "previous_average": 52.27,
      "team": "WBD",
      "position1": "DEF",
      "probability": 0.002079385
    },
    {
      "id": 660,
      "first_name": "Aaron",
      "last_name": "Francis",
      "team_id": 14,
      "previous_average": 52.21,
      "team": "SYD",
      "position1": "DEF",
      "probability": 0.002082428
    },
    {
      "id": 732,
      "first_name": "Laitham",
      "last_name": "Vandermeer",
      "team_id": 15,
      "previous_average": 52.18,
      "team": "WBD",
      "position1": "DEF",
      "probability": 0.002085424
    },
    {
      "id": 610,
      "first_name": "Anthony",
      "last_name": "Caminiti",
      "team_id": 13,
      "previous_average": 52.06,
      "team": "STK",
      "position1": "FWD",
      "probability": 0.002088372
    },
    {
      "id": 604,
      "first_name": "Tylar",
      "last_name": "Young",
      "team_id": 12,
      "previous_average": 51.89,
      "team": "RIC",
      "position1": "DEF",
      "probability": 0.002091271
    },
    {
      "id": 764,
      "first_name": "Noah",
      "last_name": "Long",
      "team_id": 16,
      "previous_average": 51.84,
      "team": "WCE",
      "position1": "FWD",
      "probability": 0.002094123
    },
    {
      "id": 79,
      "first_name": "Harry",
      "last_name": "Sharp",
      "team_id": 2,
      "previous_average": 51.67,
      "team": "BRL",
      "position1": "MID",
      "probability": 0.002096926
    },
    {
      "id": 112,
      "first_name": "Caleb",
      "last_name": "Marchbank",
      "team_id": 3,
      "previous_average": 51.6,
      "team": "CAR",
      "position1": "DEF",
      "probability": 0.00209968
    },
    {
      "id": 55,
      "first_name": "Jaspa",
      "last_name": "Fletcher",
      "team_id": 2,
      "previous_average": 51.55,
      "team": "BRL",
      "position1": "MID",
      "probability": 0.002102385
    },
    {
      "id": 292,
      "first_name": "Malcolm",
      "last_name": "Rosas",
      "team_id": 17,
      "previous_average": 51.53,
      "team": "GCS",
      "position1": "FWD",
      "probability": 0.002105041
    },
    {
      "id": 635,
      "first_name": "Mattaes",
      "last_name": "Phillipou",
      "team_id": 13,
      "previous_average": 51.43,
      "team": "STK",
      "position1": "FWD",
      "probability": 0.002107647
    },
    {
      "id": 727,
      "first_name": "Anthony",
      "last_name": "Scott",
      "team_id": 15,
      "previous_average": 51.41,
      "team": "WBD",
      "position1": "MID",
      "probability": 0.002110204
    },
    {
      "id": 64,
      "first_name": "Jarryd",
      "last_name": "Lyons",
      "team_id": 2,
      "previous_average": 51.29,
      "team": "BRL",
      "position1": "MID",
      "probability": 0.002112712
    },
    {
      "id": 705,
      "first_name": "Taylor",
      "last_name": "Duryea",
      "team_id": 15,
      "previous_average": 51.25,
      "team": "WBD",
      "position1": "DEF",
      "probability": 0.002115169
    },
    {
      "id": 619,
      "first_name": "Jack",
      "last_name": "Hayes",
      "team_id": 13,
      "previous_average": 51,
      "team": "STK",
      "position1": "FWD",
      "probability": 0.002117576
    },
    {
      "id": 607,
      "first_name": "Riley",
      "last_name": "Bonner",
      "team_id": 13,
      "previous_average": 50.91,
      "team": "STK",
      "position1": "MID",
      "probability": 0.002119934
    },
    {
      "id": 638,
      "first_name": "Cooper",
      "last_name": "Sharman",
      "team_id": 13,
      "previous_average": 50.87,
      "team": "STK",
      "position1": "FWD",
      "probability": 0.00212224
    },
    {
      "id": 1,
      "first_name": "Sam",
      "last_name": "Berry",
      "team_id": 1,
      "previous_average": 50.75,
      "team": "ADE",
      "position1": "MID",
      "probability": 0.002124496
    },
    {
      "id": 90,
      "first_name": "Jordan",
      "last_name": "Boyd",
      "team_id": 3,
      "previous_average": 50.75,
      "team": "CAR",
      "position1": "DEF",
      "probability": 0.002126702
    },
    {
      "id": 228,
      "first_name": "Nat",
      "last_name": "Fyfe",
      "team_id": 6,
      "previous_average": 50.67,
      "team": "FRE",
      "position1": "MID",
      "probability": 0.002128856
    },
    {
      "id": 282,
      "first_name": "Ben",
      "last_name": "Long",
      "team_id": 17,
      "previous_average": 50.13,
      "team": "GCS",
      "position1": "DEF",
      "probability": 0.002130959
    },
    {
      "id": 237,
      "first_name": "Nathan",
      "last_name": "O'Driscoll",
      "team_id": 6,
      "previous_average": 49.9,
      "team": "FRE",
      "position1": "MID",
      "probability": 0.002133011
    },
    {
      "id": 149,
      "first_name": "Ash",
      "last_name": "Johnson",
      "team_id": 4,
      "previous_average": 49.73,
      "team": "COL",
      "position1": "FWD",
      "probability": 0.002135012
    },
    {
      "id": 210,
      "first_name": "Sam",
      "last_name": "Weideman",
      "team_id": 5,
      "previous_average": 49.5,
      "team": "ESS",
      "position1": "FWD",
      "probability": 0.002136961
    },
    {
      "id": 287,
      "first_name": "Ned",
      "last_name": "Moyle",
      "team_id": 17,
      "previous_average": 49.5,
      "team": "GCS",
      "position1": "RUC",
      "probability": 0.002138858
    },
    {
      "id": 107,
      "first_name": "Elijah",
      "last_name": "Hollands",
      "team_id": 3,
      "previous_average": 49.44,
      "team": "CAR",
      "position1": "MID",
      "probability": 0.002140704
    },
    {
      "id": 513,
      "first_name": "Jaidyn",
      "last_name": "Stephenson",
      "team_id": 9,
      "previous_average": 49.29,
      "team": "NTH",
      "position1": "FWD",
      "probability": 0.002142498
    },
    {
      "id": 667,
      "first_name": "James",
      "last_name": "Jordon",
      "team_id": 14,
      "previous_average": 49.29,
      "team": "SYD",
      "position1": "MID",
      "probability": 0.002144239
    },
    {
      "id": 634,
      "first_name": "Ben",
      "last_name": "Paton",
      "team_id": 13,
      "previous_average": 49.25,
      "team": "STK",
      "position1": "DEF",
      "probability": 0.002145928
    },
    {
      "id": 378,
      "first_name": "James",
      "last_name": "Peatling",
      "team_id": 18,
      "previous_average": 49.1,
      "team": "GWS",
      "position1": "FWD",
      "probability": 0.002147565
    },
    {
      "id": 471,
      "first_name": "Daniel",
      "last_name": "Turner",
      "team_id": 10,
      "previous_average": 49,
      "team": "MEL",
      "position1": "DEF",
      "probability": 0.00214915
    },
    {
      "id": 699,
      "first_name": "Luke",
      "last_name": "Cleary",
      "team_id": 15,
      "previous_average": 49,
      "team": "WBD",
      "position1": "DEF",
      "probability": 0.002150681
    },
    {
      "id": 579,
      "first_name": "Dylan",
      "last_name": "Grimes",
      "team_id": 12,
      "previous_average": 48.91,
      "team": "RIC",
      "position1": "DEF",
      "probability": 0.002152161
    },
    {
      "id": 395,
      "first_name": "Mabior",
      "last_name": "Chol",
      "team_id": 8,
      "previous_average": 48.88,
      "team": "HAW",
      "position1": "FWD",
      "probability": 0.002153587
    },
    {
      "id": 188,
      "first_name": "Harrison",
      "last_name": "Jones",
      "team_id": 5,
      "previous_average": 48.6,
      "team": "ESS",
      "position1": "FWD",
      "probability": 0.00215496
    },
    {
      "id": 410,
      "first_name": "Cam",
      "last_name": "Mackenzie",
      "team_id": 8,
      "previous_average": 48.57,
      "team": "HAW",
      "position1": "FWD",
      "probability": 0.00215628
    },
    {
      "id": 170,
      "first_name": "Kaine",
      "last_name": "Baldwin",
      "team_id": 5,
      "previous_average": 48.5,
      "team": "ESS",
      "position1": "DEF",
      "probability": 0.002157548
    },
    {
      "id": 281,
      "first_name": "Sean",
      "last_name": "Lemmens",
      "team_id": 17,
      "previous_average": 48.27,
      "team": "GCS",
      "position1": "DEF",
      "probability": 0.002158762
    },
    {
      "id": 57,
      "first_name": "Darcy",
      "last_name": "Gardiner",
      "team_id": 2,
      "previous_average": 48,
      "team": "BRL",
      "position1": "DEF",
      "probability": 0.002159922
    },
    {
      "id": 196,
      "first_name": "Jye",
      "last_name": "Menzie",
      "team_id": 5,
      "previous_average": 46.86,
      "team": "ESS",
      "position1": "FWD",
      "probability": 0.00216103
    },
    {
      "id": 467,
      "first_name": "Charlie",
      "last_name": "Spargo",
      "team_id": 10,
      "previous_average": 46.77,
      "team": "MEL",
      "position1": "FWD",
      "probability": 0.002162083
    },
    {
      "id": 174,
      "first_name": "Nik",
      "last_name": "Cox",
      "team_id": 5,
      "previous_average": 46.67,
      "team": "ESS",
      "position1": "DEF",
      "probability": 0.002163083
    },
    {
      "id": 478,
      "first_name": "Miller",
      "last_name": "Bergman",
      "team_id": 9,
      "previous_average": 46.5,
      "team": "NTH",
      "position1": "DEF",
      "probability": 0.00216403
    },
    {
      "id": 482,
      "first_name": "Paul",
      "last_name": "Curtis",
      "team_id": 9,
      "previous_average": 46.48,
      "team": "NTH",
      "position1": "FWD",
      "probability": 0.002164923
    },
    {
      "id": 614,
      "first_name": "Zaine",
      "last_name": "Cordy",
      "team_id": 13,
      "previous_average": 46.31,
      "team": "STK",
      "position1": "DEF",
      "probability": 0.002165762
    },
    {
      "id": 711,
      "first_name": "James",
      "last_name": "Harmes",
      "team_id": 15,
      "previous_average": 46.22,
      "team": "WBD",
      "position1": "MID",
      "probability": 0.002166547
    },
    {
      "id": 771,
      "first_name": "Josh",
      "last_name": "Rotham",
      "team_id": 16,
      "previous_average": 46.15,
      "team": "WCE",
      "position1": "DEF",
      "probability": 0.002167279
    },
    {
      "id": 251,
      "first_name": "Brandon",
      "last_name": "Walker",
      "team_id": 6,
      "previous_average": 46,
      "team": "FRE",
      "position1": "DEF",
      "probability": 0.002167956
    },
    {
      "id": 311,
      "first_name": "Toby",
      "last_name": "Conway",
      "team_id": 7,
      "previous_average": 46,
      "team": "GEE",
      "position1": "RUC",
      "probability": 0.002168579
    },
    {
      "id": 540,
      "first_name": "Ollie",
      "last_name": "Lord",
      "team_id": 11,
      "previous_average": 45.64,
      "team": "PTA",
      "position1": "FWD",
      "probability": 0.002169149
    },
    {
      "id": 756,
      "first_name": "Elijah",
      "last_name": "Hewett",
      "team_id": 16,
      "previous_average": 45.57,
      "team": "WCE",
      "position1": "MID",
      "probability": 0.002169664
    },
    {
      "id": 77,
      "first_name": "Deven",
      "last_name": "Robertson",
      "team_id": 2,
      "previous_average": 45.38,
      "team": "BRL",
      "position1": "MID",
      "probability": 0.002170125
    },
    {
      "id": 545,
      "first_name": "Jed",
      "last_name": "McEntee",
      "team_id": 11,
      "previous_average": 45.3,
      "team": "PTA",
      "position1": "FWD",
      "probability": 0.002170532
    },
    {
      "id": 59,
      "first_name": "Darragh",
      "last_name": "Joyce",
      "team_id": 2,
      "previous_average": 45.2,
      "team": "BRL",
      "position1": "DEF",
      "probability": 0.002170885
    },
    {
      "id": 480,
      "first_name": "Charlie",
      "last_name": "Comben",
      "team_id": 9,
      "previous_average": 45.14,
      "team": "NTH",
      "position1": "FWD",
      "probability": 0.002171183
    },
    {
      "id": 334,
      "first_name": "Shannon",
      "last_name": "Neale",
      "team_id": 7,
      "previous_average": 45,
      "team": "GEE",
      "position1": "FWD",
      "probability": 0.002171427
    },
    {
      "id": 285,
      "first_name": "Jack",
      "last_name": "Mahony",
      "team_id": 17,
      "previous_average": 45,
      "team": "GCS",
      "position1": "MID",
      "probability": 0.002171617
    },
    {
      "id": 751,
      "first_name": "Luke",
      "last_name": "Edwards",
      "team_id": 16,
      "previous_average": 44.93,
      "team": "WCE",
      "position1": "MID",
      "probability": 0.002171753
    },
    {
      "id": 303,
      "first_name": "Jed",
      "last_name": "Bews",
      "team_id": 7,
      "previous_average": 44.87,
      "team": "GEE",
      "position1": "DEF",
      "probability": 0.002171835
    },
    {
      "id": 479,
      "first_name": "Callum",
      "last_name": "Coleman-Jones",
      "team_id": 9,
      "previous_average": 44.78,
      "team": "NTH",
      "position1": "FWD",
      "probability": 0.002171862
    },
    {
      "id": 246,
      "first_name": "Sam",
      "last_name": "Sturt",
      "team_id": 6,
      "previous_average": 44.71,
      "team": "FRE",
      "position1": "FWD",
      "probability": 0.002171835
    },
    {
      "id": 548,
      "first_name": "Quinton",
      "last_name": "Narkle",
      "team_id": 11,
      "previous_average": 44.67,
      "team": "PTA",
      "position1": "FWD",
      "probability": 0.002171753
    },
    {
      "id": 408,
      "first_name": "Bailey",
      "last_name": "Macdonald",
      "team_id": 8,
      "previous_average": 44.5,
      "team": "HAW",
      "position1": "DEF",
      "probability": 0.002171617
    },
    {
      "id": 424,
      "first_name": "Jai",
      "last_name": "Serong",
      "team_id": 8,
      "previous_average": 44.5,
      "team": "HAW",
      "position1": "DEF",
      "probability": 0.002171427
    },
    {
      "id": 759,
      "first_name": "Callum",
      "last_name": "Jamieson",
      "team_id": 16,
      "previous_average": 44.5,
      "team": "WCE",
      "position1": "FWD",
      "probability": 0.002171183
    },
    {
      "id": 394,
      "first_name": "Sam",
      "last_name": "Butler",
      "team_id": 8,
      "previous_average": 44.13,
      "team": "HAW",
      "position1": "FWD",
      "probability": 0.002170885
    },
    {
      "id": 750,
      "first_name": "Harry",
      "last_name": "Edwards",
      "team_id": 16,
      "previous_average": 44,
      "team": "WCE",
      "position1": "DEF",
      "probability": 0.002170532
    },
    {
      "id": 455,
      "first_name": "Jake",
      "last_name": "Melksham",
      "team_id": 10,
      "previous_average": 43.92,
      "team": "MEL",
      "position1": "FWD",
      "probability": 0.002170125
    },
    {
      "id": 466,
      "first_name": "Joel",
      "last_name": "Smith",
      "team_id": 10,
      "previous_average": 43.58,
      "team": "MEL",
      "position1": "FWD",
      "probability": 0.002169664
    },
    {
      "id": 570,
      "first_name": "Judson",
      "last_name": "Clarke",
      "team_id": 12,
      "previous_average": 43.31,
      "team": "RIC",
      "position1": "FWD",
      "probability": 0.002169149
    },
    {
      "id": 746,
      "first_name": "Jai",
      "last_name": "Culley",
      "team_id": 16,
      "previous_average": 43.2,
      "team": "WCE",
      "position1": "MID",
      "probability": 0.002168579
    },
    {
      "id": 532,
      "first_name": "Francis",
      "last_name": "Evans",
      "team_id": 11,
      "previous_average": 42.9,
      "team": "PTA",
      "position1": "FWD",
      "probability": 0.002167956
    },
    {
      "id": 226,
      "first_name": "Neil",
      "last_name": "Erasmus",
      "team_id": 6,
      "previous_average": 42.64,
      "team": "FRE",
      "position1": "MID",
      "probability": 0.002167279
    },
    {
      "id": 288,
      "first_name": "Hewago",
      "last_name": "Oea",
      "team_id": 17,
      "previous_average": 42.38,
      "team": "GCS",
      "position1": "MID",
      "probability": 0.002166547
    },
    {
      "id": 96,
      "first_name": "Lachlan",
      "last_name": "Cowan",
      "team_id": 3,
      "previous_average": 42.29,
      "team": "CAR",
      "position1": "DEF",
      "probability": 0.002165762
    },
    {
      "id": 21,
      "first_name": "Ned",
      "last_name": "McHenry",
      "team_id": 1,
      "previous_average": 42,
      "team": "ADE",
      "position1": "FWD",
      "probability": 0.002164923
    },
    {
      "id": 279,
      "first_name": "Lloyd",
      "last_name": "Johnston",
      "team_id": 17,
      "previous_average": 42,
      "team": "GCS",
      "position1": "DEF",
      "probability": 0.00216403
    },
    {
      "id": 5,
      "first_name": "Jordon",
      "last_name": "Butts",
      "team_id": 1,
      "previous_average": 41.94,
      "team": "ADE",
      "position1": "DEF",
      "probability": 0.002163083
    },
    {
      "id": 484,
      "first_name": "Kallan",
      "last_name": "Dawson",
      "team_id": 9,
      "previous_average": 41,
      "team": "NTH",
      "position1": "DEF",
      "probability": 0.002162083
    },
    {
      "id": 584,
      "first_name": "Rhyan",
      "last_name": "Mansell",
      "team_id": 12,
      "previous_average": 40.47,
      "team": "RIC",
      "position1": "FWD",
      "probability": 0.00216103
    },
    {
      "id": 144,
      "first_name": "Harvey",
      "last_name": "Harrison",
      "team_id": 4,
      "previous_average": 40.25,
      "team": "COL",
      "position1": "FWD",
      "probability": 0.002159922
    },
    {
      "id": 396,
      "first_name": "Massimo",
      "last_name": "D'Ambrosio",
      "team_id": 8,
      "previous_average": 40.25,
      "team": "HAW",
      "position1": "DEF",
      "probability": 0.002158762
    },
    {
      "id": 524,
      "first_name": "Jase",
      "last_name": "Burgoyne",
      "team_id": 11,
      "previous_average": 40.2,
      "team": "PTA",
      "position1": "DEF",
      "probability": 0.002157548
    },
    {
      "id": 365,
      "first_name": "Cooper",
      "last_name": "Hamilton",
      "team_id": 18,
      "previous_average": 40,
      "team": "GWS",
      "position1": "MID",
      "probability": 0.00215628
    },
    {
      "id": 347,
      "first_name": "Ryan",
      "last_name": "Angwin",
      "team_id": 18,
      "previous_average": 39.87,
      "team": "GWS",
      "position1": "MID",
      "probability": 0.00215496
    },
    {
      "id": 547,
      "first_name": "Jackson",
      "last_name": "Mead",
      "team_id": 11,
      "previous_average": 39.71,
      "team": "PTA",
      "position1": "MID",
      "probability": 0.002153587
    },
    {
      "id": 104,
      "first_name": "Orazio",
      "last_name": "Fantasia",
      "team_id": 3,
      "previous_average": 39.33,
      "team": "CAR",
      "position1": "FWD",
      "probability": 0.002152161
    },
    {
      "id": 476,
      "first_name": "Taj",
      "last_name": "Woewodin",
      "team_id": 10,
      "previous_average": 39.25,
      "team": "MEL",
      "position1": "FWD",
      "probability": 0.002150681
    },
    {
      "id": 28,
      "first_name": "Patrick",
      "last_name": "Parnell",
      "team_id": 1,
      "previous_average": 39.2,
      "team": "ADE",
      "position1": "DEF",
      "probability": 0.00214915
    },
    {
      "id": 152,
      "first_name": "Finlay",
      "last_name": "Macrae",
      "team_id": 4,
      "previous_average": 39,
      "team": "COL",
      "position1": "FWD",
      "probability": 0.002147565
    },
    {
      "id": 74,
      "first_name": "Jaxon",
      "last_name": "Prior",
      "team_id": 2,
      "previous_average": 38.8,
      "team": "BRL",
      "position1": "DEF",
      "probability": 0.002145928
    },
    {
      "id": 248,
      "first_name": "Matt",
      "last_name": "Taberner",
      "team_id": 6,
      "previous_average": 38.5,
      "team": "FRE",
      "position1": "FWD",
      "probability": 0.002144239
    },
    {
      "id": 673,
      "first_name": "Lachlan",
      "last_name": "McAndrew",
      "team_id": 14,
      "previous_average": 38,
      "team": "SYD",
      "position1": "RUC",
      "probability": 0.002142498
    },
    {
      "id": 777,
      "first_name": "Jack",
      "last_name": "Williams",
      "team_id": 16,
      "previous_average": 37.8,
      "team": "WCE",
      "position1": "FWD",
      "probability": 0.002140704
    },
    {
      "id": 411,
      "first_name": "Finn",
      "last_name": "Maginness",
      "team_id": 8,
      "previous_average": 37.69,
      "team": "HAW",
      "position1": "MID",
      "probability": 0.002138858
    },
    {
      "id": 722,
      "first_name": "James",
      "last_name": "O'Donnell",
      "team_id": 15,
      "previous_average": 37.33,
      "team": "WBD",
      "position1": "DEF",
      "probability": 0.002136961
    },
    {
      "id": 176,
      "first_name": "Alwyn",
      "last_name": "Davey Jnr",
      "team_id": 5,
      "previous_average": 37.3,
      "team": "ESS",
      "position1": "FWD",
      "probability": 0.002135012
    },
    {
      "id": 371,
      "first_name": "Lachlan",
      "last_name": "Keeffe",
      "team_id": 18,
      "previous_average": 37.27,
      "team": "GWS",
      "position1": "FWD",
      "probability": 0.002133011
    },
    {
      "id": 593,
      "first_name": "Hugo",
      "last_name": "Ralphsmith",
      "team_id": 12,
      "previous_average": 36.92,
      "team": "RIC",
      "position1": "DEF",
      "probability": 0.002130959
    },
    {
      "id": 270,
      "first_name": "Jy",
      "last_name": "Farrar",
      "team_id": 17,
      "previous_average": 36.78,
      "team": "GCS",
      "position1": "DEF",
      "probability": 0.002128856
    },
    {
      "id": 392,
      "first_name": "James",
      "last_name": "Blanck",
      "team_id": 8,
      "previous_average": 36.2,
      "team": "HAW",
      "position1": "DEF",
      "probability": 0.002126702
    },
    {
      "id": 499,
      "first_name": "Charlie",
      "last_name": "Lazzaro",
      "team_id": 9,
      "previous_average": 36,
      "team": "NTH",
      "position1": "MID",
      "probability": 0.002124496
    },
    {
      "id": 743,
      "first_name": "Campbell",
      "last_name": "Chesser",
      "team_id": 16,
      "previous_average": 35.71,
      "team": "WCE",
      "position1": "MID",
      "probability": 0.00212224
    },
    {
      "id": 572,
      "first_name": "Matthew",
      "last_name": "Coulthard",
      "team_id": 12,
      "previous_average": 35.5,
      "team": "RIC",
      "position1": "FWD",
      "probability": 0.002119934
    },
    {
      "id": 45,
      "first_name": "Noah",
      "last_name": "Answerth",
      "team_id": 2,
      "previous_average": 35,
      "team": "BRL",
      "position1": "FWD",
      "probability": 0.002117576
    },
    {
      "id": 497,
      "first_name": "Cooper",
      "last_name": "Harvey",
      "team_id": 9,
      "previous_average": 35,
      "team": "NTH",
      "position1": "FWD",
      "probability": 0.002115169
    },
    {
      "id": 268,
      "first_name": "Sam",
      "last_name": "Day",
      "team_id": 17,
      "previous_average": 34.33,
      "team": "GCS",
      "position1": "FWD",
      "probability": 0.002112712
    },
    {
      "id": 713,
      "first_name": "Arthur",
      "last_name": "Jones",
      "team_id": 15,
      "previous_average": 34.15,
      "team": "WBD",
      "position1": "FWD",
      "probability": 0.002110204
    },
    {
      "id": 78,
      "first_name": "Brandon",
      "last_name": "Ryan",
      "team_id": 2,
      "previous_average": 34,
      "team": "BRL",
      "position1": "FWD",
      "probability": 0.002107647
    },
    {
      "id": 573,
      "first_name": "Noah",
      "last_name": "Cumberland",
      "team_id": 12,
      "previous_average": 34,
      "team": "RIC",
      "position1": "FWD",
      "probability": 0.002105041
    },
    {
      "id": 314,
      "first_name": "Oliver",
      "last_name": "Dempsey",
      "team_id": 7,
      "previous_average": 33.2,
      "team": "GEE",
      "position1": "FWD",
      "probability": 0.002102385
    },
    {
      "id": 4,
      "first_name": "Chris",
      "last_name": "Burgess",
      "team_id": 1,
      "previous_average": 33,
      "team": "ADE",
      "position1": "FWD",
      "probability": 0.00209968
    },
    {
      "id": 382,
      "first_name": "Harry",
      "last_name": "Rowston",
      "team_id": 18,
      "previous_average": 33,
      "team": "GWS",
      "position1": "MID",
      "probability": 0.002096926
    },
    {
      "id": 219,
      "first_name": "Josh",
      "last_name": "Corbett",
      "team_id": 6,
      "previous_average": 32.6,
      "team": "FRE",
      "position1": "FWD",
      "probability": 0.002094123
    },
    {
      "id": 373,
      "first_name": "Adam",
      "last_name": "Kennedy",
      "team_id": 18,
      "previous_average": 32.6,
      "team": "GWS",
      "position1": "DEF",
      "probability": 0.002091271
    },
    {
      "id": 261,
      "first_name": "Thomas",
      "last_name": "Berry",
      "team_id": 17,
      "previous_average": 32.5,
      "team": "GCS",
      "position1": "FWD",
      "probability": 0.002088372
    },
    {
      "id": 477,
      "first_name": "Jackson",
      "last_name": "Archer",
      "team_id": 9,
      "previous_average": 32,
      "team": "NTH",
      "position1": "DEF",
      "probability": 0.002085424
    },
    {
      "id": 557,
      "first_name": "Dante",
      "last_name": "Visentini",
      "team_id": 11,
      "previous_average": 32,
      "team": "PTA",
      "position1": "RUC",
      "probability": 0.002082428
    },
    {
      "id": 740,
      "first_name": "Rhett",
      "last_name": "Bazzo",
      "team_id": 16,
      "previous_average": 32,
      "team": "WCE",
      "position1": "DEF",
      "probability": 0.002079385
    },
    {
      "id": 595,
      "first_name": "Maurice",
      "last_name": "Rioli",
      "team_id": 12,
      "previous_average": 31.4,
      "team": "RIC",
      "position1": "FWD",
      "probability": 0.002076294
    },
    {
      "id": 685,
      "first_name": "Matt",
      "last_name": "Roberts",
      "team_id": 14,
      "previous_average": 31.17,
      "team": "SYD",
      "position1": "MID",
      "probability": 0.002073156
    },
    {
      "id": 774,
      "first_name": "Zane",
      "last_name": "Trew",
      "team_id": 16,
      "previous_average": 31,
      "team": "WCE",
      "position1": "MID",
      "probability": 0.002069971
    },
    {
      "id": 298,
      "first_name": "Bodhi",
      "last_name": "Uwland",
      "team_id": 17,
      "previous_average": 30.67,
      "team": "GCS",
      "position1": "DEF",
      "probability": 0.002066739
    },
    {
      "id": 332,
      "first_name": "Oisin",
      "last_name": "Mullin",
      "team_id": 7,
      "previous_average": 30.5,
      "team": "GEE",
      "position1": "DEF",
      "probability": 0.002063461
    },
    {
      "id": 63,
      "first_name": "Kai",
      "last_name": "Lohmann",
      "team_id": 2,
      "previous_average": 30,
      "team": "BRL",
      "position1": "FWD",
      "probability": 0.002060136
    },
    {
      "id": 254,
      "first_name": "Karl",
      "last_name": "Worner",
      "team_id": 6,
      "previous_average": 30,
      "team": "FRE",
      "position1": "DEF",
      "probability": 0.002056766
    },
    {
      "id": 600,
      "first_name": "Tyler",
      "last_name": "Sonsie",
      "team_id": 12,
      "previous_average": 30,
      "team": "RIC",
      "position1": "FWD",
      "probability": 0.002053349
    },
    {
      "id": 529,
      "first_name": "Tom",
      "last_name": "Clurey",
      "team_id": 11,
      "previous_average": 29,
      "team": "PTA",
      "position1": "DEF",
      "probability": 0.002049887
    },
    {
      "id": 720,
      "first_name": "Lachlan",
      "last_name": "McNeil",
      "team_id": 15,
      "previous_average": 28.46,
      "team": "WBD",
      "position1": "FWD",
      "probability": 0.00204638
    },
    {
      "id": 449,
      "first_name": "Bailey",
      "last_name": "Laurie",
      "team_id": 10,
      "previous_average": 28,
      "team": "MEL",
      "position1": "FWD",
      "probability": 0.002042827
    },
    {
      "id": 709,
      "first_name": "Riley",
      "last_name": "Garcia",
      "team_id": 15,
      "previous_average": 28,
      "team": "WBD",
      "position1": "FWD",
      "probability": 0.00203923
    },
    {
      "id": 401,
      "first_name": "Denver",
      "last_name": "Grainger-Barras",
      "team_id": 8,
      "previous_average": 27.29,
      "team": "HAW",
      "position1": "DEF",
      "probability": 0.002035588
    },
    {
      "id": 359,
      "first_name": "Josh",
      "last_name": "Fahey",
      "team_id": 18,
      "previous_average": 27.14,
      "team": "GWS",
      "position1": "MID",
      "probability": 0.002031902
    },
    {
      "id": 65,
      "first_name": "James",
      "last_name": "Madden",
      "team_id": 2,
      "previous_average": 27,
      "team": "BRL",
      "position1": "DEF",
      "probability": 0.002028172
    },
    {
      "id": 388,
      "first_name": "Jacob",
      "last_name": "Wehr",
      "team_id": 18,
      "previous_average": 26.25,
      "team": "GWS",
      "position1": "MID",
      "probability": 0.002024398
    },
    {
      "id": 420,
      "first_name": "Max",
      "last_name": "Ramsden",
      "team_id": 8,
      "previous_average": 25.5,
      "team": "HAW",
      "position1": "FWD",
      "probability": 0.00202058
    },
    {
      "id": 783,
      "first_name": "Jack",
      "last_name": "Bytel",
      "team_id": 4,
      "previous_average": 25,
      "team": "COL",
      "position1": "MID",
      "probability": 0.00201672
    },
    {
      "id": 295,
      "first_name": "Alex",
      "last_name": "Sexton",
      "team_id": 17,
      "previous_average": 23.88,
      "team": "GCS",
      "position1": "FWD",
      "probability": 0.002012816
    },
    {
      "id": 353,
      "first_name": "Aaron",
      "last_name": "Cadman",
      "team_id": 18,
      "previous_average": 22.83,
      "team": "GWS",
      "position1": "FWD",
      "probability": 0.00200887
    },
    {
      "id": 486,
      "first_name": "Blake",
      "last_name": "Drury",
      "team_id": 9,
      "previous_average": 22.25,
      "team": "NTH",
      "position1": "FWD",
      "probability": 0.002004881
    },
    {
      "id": 297,
      "first_name": "James",
      "last_name": "Tsitas",
      "team_id": 17,
      "previous_average": 22.25,
      "team": "GCS",
      "position1": "FWD",
      "probability": 0.00200085
    },
    {
      "id": 83,
      "first_name": "James",
      "last_name": "Tunstill",
      "team_id": 2,
      "previous_average": 22,
      "team": "BRL",
      "position1": "FWD",
      "probability": 0.001996778
    },
    {
      "id": 309,
      "first_name": "Ted",
      "last_name": "Clohesy",
      "team_id": 7,
      "previous_average": 22,
      "team": "GEE",
      "position1": "FWD",
      "probability": 0.001992664
    },
    {
      "id": 554,
      "first_name": "Josh",
      "last_name": "Sinn",
      "team_id": 11,
      "previous_average": 21.67,
      "team": "PTA",
      "position1": "MID",
      "probability": 0.001988508
    },
    {
      "id": 464,
      "first_name": "Josh",
      "last_name": "Schache",
      "team_id": 10,
      "previous_average": 21.5,
      "team": "MEL",
      "position1": "FWD",
      "probability": 0.001984312
    },
    {
      "id": 156,
      "first_name": "Reef",
      "last_name": "McInnes",
      "team_id": 4,
      "previous_average": 21.4,
      "team": "COL",
      "position1": "FWD",
      "probability": 0.001980075
    },
    {
      "id": 716,
      "first_name": "Buku",
      "last_name": "Khamis",
      "team_id": 15,
      "previous_average": 21,
      "team": "WBD",
      "position1": "FWD",
      "probability": 0.001975798
    },
    {
      "id": 691,
      "first_name": "Corey",
      "last_name": "Warner",
      "team_id": 14,
      "previous_average": 20.67,
      "team": "SYD",
      "position1": "FWD",
      "probability": 0.00197148
    },
    {
      "id": 565,
      "first_name": "Jacob",
      "last_name": "Bauer",
      "team_id": 12,
      "previous_average": 20,
      "team": "RIC",
      "position1": "FWD",
      "probability": 0.001967123
    },
    {
      "id": 704,
      "first_name": "Sam",
      "last_name": "Darcy",
      "team_id": 15,
      "previous_average": 19.33,
      "team": "WBD",
      "position1": "FWD",
      "probability": 0.001962727
    },
    {
      "id": 376,
      "first_name": "Toby",
      "last_name": "McMullin",
      "team_id": 18,
      "previous_average": 17.67,
      "team": "GWS",
      "position1": "FWD",
      "probability": 0.001958291
    },
    {
      "id": 653,
      "first_name": "Jack",
      "last_name": "Buller",
      "team_id": 14,
      "previous_average": 17,
      "team": "SYD",
      "position1": "FWD",
      "probability": 0.001953817
    },
    {
      "id": 383,
      "first_name": "Conor",
      "last_name": "Stone",
      "team_id": 18,
      "previous_average": 16,
      "team": "GWS",
      "position1": "FWD",
      "probability": 0.001949304
    },
    {
      "id": 134,
      "first_name": "Josh",
      "last_name": "Carmichael",
      "team_id": 4,
      "previous_average": 15,
      "team": "COL",
      "position1": "FWD",
      "probability": 0.001944753
    },
    {
      "id": 495,
      "first_name": "Robert",
      "last_name": "Hansen Jr",
      "team_id": 9,
      "previous_average": 15,
      "team": "NTH",
      "position1": "FWD",
      "probability": 0.001940163
    },
    {
      "id": 245,
      "first_name": "Ethan",
      "last_name": "Stanley",
      "team_id": 6,
      "previous_average": 13,
      "team": "FRE",
      "position1": "MID",
      "probability": 0.001935537
    },
    {
      "id": 308,
      "first_name": "Jhye",
      "last_name": "Clark",
      "team_id": 7,
      "previous_average": 13,
      "team": "GEE",
      "position1": "MID",
      "probability": 0.001930873
    },
    {
      "id": 166,
      "first_name": "Jakob",
      "last_name": "Ryan",
      "team_id": 4,
      "previous_average": 12,
      "team": "COL",
      "position1": "DEF",
      "probability": 0.001926172
    },
    {
      "id": 91,
      "first_name": "Jack",
      "last_name": "Carroll",
      "team_id": 3,
      "previous_average": 9,
      "team": "CAR",
      "position1": "MID",
      "probability": 0.001921435
    },
    {
      "id": 150,
      "first_name": "Nathan",
      "last_name": "Kreuger",
      "team_id": 4,
      "previous_average": 8.5,
      "team": "COL",
      "position1": "RUC",
      "probability": 0.001916661
    },
    {
      "id": 738,
      "first_name": "Harry",
      "last_name": "Barnett",
      "team_id": 16,
      "previous_average": 8,
      "team": "WCE",
      "position1": "RUC",
      "probability": 0.001911852
    },
    {
      "id": 2,
      "first_name": "Hugh",
      "last_name": "Bond",
      "team_id": 1,
      "previous_average": 0,
      "team": "ADE",
      "position1": "DEF",
      "probability": 0.001907007
    },
    {
      "id": 8,
      "first_name": "Daniel",
      "last_name": "Curtin",
      "team_id": 1,
      "previous_average": 0,
      "team": "ADE",
      "position1": "DEF",
      "probability": 0.001902126
    },
    {
      "id": 10,
      "first_name": "Billy",
      "last_name": "Dowling",
      "team_id": 1,
      "previous_average": 0,
      "team": "ADE",
      "position1": "MID",
      "probability": 0.001897211
    },
    {
      "id": 11,
      "first_name": "Charlie",
      "last_name": "Edwards",
      "team_id": 1,
      "previous_average": 0,
      "team": "ADE",
      "position1": "DEF",
      "probability": 0.001892261
    },
    {
      "id": 14,
      "first_name": "Will",
      "last_name": "Hamill",
      "team_id": 1,
      "previous_average": 0,
      "team": "ADE",
      "position1": "DEF",
      "probability": 0.001887276
    },
    {
      "id": 32,
      "first_name": "Oscar",
      "last_name": "Ryan",
      "team_id": 1,
      "previous_average": 0,
      "team": "ADE",
      "position1": "DEF",
      "probability": 0.001882258
    },
    {
      "id": 38,
      "first_name": "Kieran",
      "last_name": "Strachan",
      "team_id": 1,
      "previous_average": 0,
      "team": "ADE",
      "position1": "RUC",
      "probability": 0.001877206
    },
    {
      "id": 39,
      "first_name": "Zac",
      "last_name": "Taylor",
      "team_id": 1,
      "previous_average": 0,
      "team": "ADE",
      "position1": "MID",
      "probability": 0.001872121
    },
    {
      "id": 780,
      "first_name": "Karl",
      "last_name": "Gallagher",
      "team_id": 1,
      "previous_average": 0,
      "team": "ADE",
      "position1": "DEF",
      "probability": 0.001867003
    },
    {
      "id": 49,
      "first_name": "Shadeau",
      "last_name": "Brain",
      "team_id": 2,
      "previous_average": 0,
      "team": "BRL",
      "position1": "FWD",
      "probability": 0.001861853
    },
    {
      "id": 60,
      "first_name": "Kalin",
      "last_name": "Lane",
      "team_id": 2,
      "previous_average": 0,
      "team": "BRL",
      "position1": "RUC",
      "probability": 0.00185667
    },
    {
      "id": 62,
      "first_name": "Luke",
      "last_name": "Lloyd",
      "team_id": 2,
      "previous_average": 0,
      "team": "BRL",
      "position1": "FWD",
      "probability": 0.001851456
    },
    {
      "id": 70,
      "first_name": "Carter",
      "last_name": "Michael",
      "team_id": 2,
      "previous_average": 0,
      "team": "BRL",
      "position1": "DEF",
      "probability": 0.00184621
    },
    {
      "id": 71,
      "first_name": "Logan",
      "last_name": "Morris",
      "team_id": 2,
      "previous_average": 0,
      "team": "BRL",
      "position1": "FWD",
      "probability": 0.001840932
    },
    {
      "id": 76,
      "first_name": "Bruce",
      "last_name": "Reville",
      "team_id": 2,
      "previous_average": 0,
      "team": "BRL",
      "position1": "MID",
      "probability": 0.001835624
    },
    {
      "id": 80,
      "first_name": "Henry",
      "last_name": "Smith",
      "team_id": 2,
      "previous_average": 0,
      "team": "BRL",
      "position1": "RUC",
      "probability": 0.001830286
    },
    {
      "id": 82,
      "first_name": "Reece",
      "last_name": "Torrent",
      "team_id": 2,
      "previous_average": 0,
      "team": "BRL",
      "position1": "MID",
      "probability": 0.001824917
    },
    {
      "id": 85,
      "first_name": "Zane",
      "last_name": "Zakostelsky",
      "team_id": 2,
      "previous_average": 0,
      "team": "BRL",
      "position1": "DEF",
      "probability": 0.001819519
    },
    {
      "id": 88,
      "first_name": "Domanic",
      "last_name": "Akuei",
      "team_id": 3,
      "previous_average": 0,
      "team": "CAR",
      "position1": "DEF",
      "probability": 0.001814091
    },
    {
      "id": 89,
      "first_name": "Jaxon",
      "last_name": "Binns",
      "team_id": 3,
      "previous_average": 0,
      "team": "CAR",
      "position1": "MID",
      "probability": 0.001808635
    },
    {
      "id": 92,
      "first_name": "Matthew",
      "last_name": "Carroll",
      "team_id": 3,
      "previous_average": 0,
      "team": "CAR",
      "position1": "DEF",
      "probability": 0.001803149
    },
    {
      "id": 103,
      "first_name": "Sam",
      "last_name": "Durdin",
      "team_id": 3,
      "previous_average": 0,
      "team": "CAR",
      "position1": "DEF",
      "probability": 0.001797636
    },
    {
      "id": 111,
      "first_name": "Harry",
      "last_name": "Lemmey",
      "team_id": 3,
      "previous_average": 0,
      "team": "CAR",
      "position1": "FWD",
      "probability": 0.001792094
    },
    {
      "id": 116,
      "first_name": "Alex",
      "last_name": "Mirkov",
      "team_id": 3,
      "previous_average": 0,
      "team": "CAR",
      "position1": "RUC",
      "probability": 0.001786525
    },
    {
      "id": 117,
      "first_name": "Ashton",
      "last_name": "Moir",
      "team_id": 3,
      "previous_average": 0,
      "team": "CAR",
      "position1": "FWD",
      "probability": 0.001780928
    },
    {
      "id": 118,
      "first_name": "Rob",
      "last_name": "Monahan",
      "team_id": 3,
      "previous_average": 0,
      "team": "CAR",
      "position1": "FWD",
      "probability": 0.001775305
    },
    {
      "id": 121,
      "first_name": "Hudson",
      "last_name": "O'Keeffe",
      "team_id": 3,
      "previous_average": 0,
      "team": "CAR",
      "position1": "RUC",
      "probability": 0.001769655
    },
    {
      "id": 128,
      "first_name": "Zac",
      "last_name": "Williams",
      "team_id": 3,
      "previous_average": 0,
      "team": "CAR",
      "position1": "DEF",
      "probability": 0.001763979
    },
    {
      "id": 129,
      "first_name": "Billy",
      "last_name": "Wilson",
      "team_id": 3,
      "previous_average": 0,
      "team": "CAR",
      "position1": "DEF",
      "probability": 0.001758278
    },
    {
      "id": 131,
      "first_name": "Edward",
      "last_name": "Allan",
      "team_id": 4,
      "previous_average": 0,
      "team": "COL",
      "position1": "MID",
      "probability": 0.001752551
    },
    {
      "id": 132,
      "first_name": "Aiden",
      "last_name": "Begg",
      "team_id": 4,
      "previous_average": 0,
      "team": "COL",
      "position1": "RUC",
      "probability": 0.001746799
    },
    {
      "id": 140,
      "first_name": "Charlie",
      "last_name": "Dean",
      "team_id": 4,
      "previous_average": 0,
      "team": "COL",
      "position1": "DEF",
      "probability": 0.001741022
    },
    {
      "id": 141,
      "first_name": "Harry",
      "last_name": "DeMattia",
      "team_id": 4,
      "previous_average": 0,
      "team": "COL",
      "position1": "MID",
      "probability": 0.001735221
    },
    {
      "id": 148,
      "first_name": "Tew",
      "last_name": "Jiath",
      "team_id": 4,
      "previous_average": 0,
      "team": "COL",
      "position1": "DEF",
      "probability": 0.001729396
    },
    {
      "id": 165,
      "first_name": "Joe",
      "last_name": "Richards",
      "team_id": 4,
      "previous_average": 0,
      "team": "COL",
      "position1": "FWD",
      "probability": 0.001723548
    },
    {
      "id": 169,
      "first_name": "Oscar",
      "last_name": "Steene",
      "team_id": 4,
      "previous_average": 0,
      "team": "COL",
      "position1": "RUC",
      "probability": 0.001717676
    },
    {
      "id": 781,
      "first_name": "Lachlan",
      "last_name": "Sullivan",
      "team_id": 4,
      "previous_average": 0,
      "team": "COL",
      "position1": "MID",
      "probability": 0.001711782
    },
    {
      "id": 782,
      "first_name": "Josh",
      "last_name": "Eyre",
      "team_id": 4,
      "previous_average": 0,
      "team": "COL",
      "position1": "DEF",
      "probability": 0.001705865
    },
    {
      "id": 172,
      "first_name": "Nate",
      "last_name": "Caddy",
      "team_id": 5,
      "previous_average": 0,
      "team": "ESS",
      "position1": "FWD",
      "probability": 0.001699926
    },
    {
      "id": 175,
      "first_name": "Jayden",
      "last_name": "Davey",
      "team_id": 5,
      "previous_average": 0,
      "team": "ESS",
      "position1": "FWD",
      "probability": 0.001693966
    },
    {
      "id": 183,
      "first_name": "Lewis",
      "last_name": "Hayes",
      "team_id": 5,
      "previous_average": 0,
      "team": "ESS",
      "position1": "DEF",
      "probability": 0.001687984
    },
    {
      "id": 187,
      "first_name": "Jaiden",
      "last_name": "Hunter",
      "team_id": 5,
      "previous_average": 0,
      "team": "ESS",
      "position1": "FWD",
      "probability": 0.001681981
    },
    {
      "id": 192,
      "first_name": "Luamon",
      "last_name": "Lual",
      "team_id": 5,
      "previous_average": 0,
      "team": "ESS",
      "position1": "DEF",
      "probability": 0.001675958
    },
    {
      "id": 201,
      "first_name": "Zach",
      "last_name": "Reid",
      "team_id": 5,
      "previous_average": 0,
      "team": "ESS",
      "position1": "DEF",
      "probability": 0.001669914
    },
    {
      "id": 203,
      "first_name": "Archie",
      "last_name": "Roberts",
      "team_id": 5,
      "previous_average": 0,
      "team": "ESS",
      "position1": "DEF",
      "probability": 0.001663851
    },
    {
      "id": 208,
      "first_name": "Vigo",
      "last_name": "Visentini",
      "team_id": 5,
      "previous_average": 0,
      "team": "ESS",
      "position1": "RUC",
      "probability": 0.001657768
    },
    {
      "id": 209,
      "first_name": "Tex",
      "last_name": "Wanganeen",
      "team_id": 5,
      "previous_average": 0,
      "team": "ESS",
      "position1": "FWD",
      "probability": 0.001651666
    },
    {
      "id": 222,
      "first_name": "Hugh",
      "last_name": "Davies",
      "team_id": 6,
      "previous_average": 0,
      "team": "FRE",
      "position1": "DEF",
      "probability": 0.001645546
    },
    {
      "id": 223,
      "first_name": "Jack",
      "last_name": "Delean",
      "team_id": 6,
      "previous_average": 0,
      "team": "FRE",
      "position1": "FWD",
      "probability": 0.001639407
    },
    {
      "id": 224,
      "first_name": "Joshua",
      "last_name": "Draper",
      "team_id": 6,
      "previous_average": 0,
      "team": "FRE",
      "position1": "DEF",
      "probability": 0.001633251
    },
    {
      "id": 232,
      "first_name": "Odin",
      "last_name": "Jones",
      "team_id": 6,
      "previous_average": 0,
      "team": "FRE",
      "position1": "RUC",
      "probability": 0.001627076
    },
    {
      "id": 233,
      "first_name": "Max",
      "last_name": "Knobel",
      "team_id": 6,
      "previous_average": 0,
      "team": "FRE",
      "position1": "RUC",
      "probability": 0.001620885
    },
    {
      "id": 234,
      "first_name": "Sebit",
      "last_name": "Kuek",
      "team_id": 6,
      "previous_average": 0,
      "team": "FRE",
      "position1": "FWD",
      "probability": 0.001614677
    },
    {
      "id": 235,
      "first_name": "Oscar",
      "last_name": "McDonald",
      "team_id": 6,
      "previous_average": 0,
      "team": "FRE",
      "position1": "DEF",
      "probability": 0.001608452
    },
    {
      "id": 236,
      "first_name": "Ollie",
      "last_name": "Murphy",
      "team_id": 6,
      "previous_average": 0,
      "team": "FRE",
      "position1": "DEF",
      "probability": 0.001602211
    },
    {
      "id": 240,
      "first_name": "Liam",
      "last_name": "Reidy",
      "team_id": 6,
      "previous_average": 0,
      "team": "FRE",
      "position1": "RUC",
      "probability": 0.001595955
    },
    {
      "id": 243,
      "first_name": "Jeremy",
      "last_name": "Sharp",
      "team_id": 6,
      "previous_average": 0,
      "team": "FRE",
      "position1": "MID",
      "probability": 0.001589683
    },
    {
      "id": 244,
      "first_name": "Cooper",
      "last_name": "Simpson",
      "team_id": 6,
      "previous_average": 0,
      "team": "FRE",
      "position1": "MID",
      "probability": 0.001583397
    },
    {
      "id": 253,
      "first_name": "Conrad",
      "last_name": "Williams",
      "team_id": 6,
      "previous_average": 0,
      "team": "FRE",
      "position1": "MID",
      "probability": 0.001577095
    },
    {
      "id": 784,
      "first_name": "Patrick",
      "last_name": "Voss",
      "team_id": 6,
      "previous_average": 0,
      "team": "FRE",
      "position1": "FWD",
      "probability": 0.00157078
    },
    {
      "id": 316,
      "first_name": "Mitchell",
      "last_name": "Edwards",
      "team_id": 7,
      "previous_average": 0,
      "team": "GEE",
      "position1": "RUC",
      "probability": 0.001564451
    },
    {
      "id": 317,
      "first_name": "Phoenix",
      "last_name": "Foster",
      "team_id": 7,
      "previous_average": 0,
      "team": "GEE",
      "position1": "FWD",
      "probability": 0.001558108
    },
    {
      "id": 318,
      "first_name": "Joe",
      "last_name": "Furphy",
      "team_id": 7,
      "previous_average": 0,
      "team": "GEE",
      "position1": "RUC",
      "probability": 0.001551752
    },
    {
      "id": 321,
      "first_name": "Mitch",
      "last_name": "Hardie",
      "team_id": 7,
      "previous_average": 0,
      "team": "GEE",
      "position1": "MID",
      "probability": 0.001545384
    },
    {
      "id": 326,
      "first_name": "Lawson",
      "last_name": "Humphries",
      "team_id": 7,
      "previous_average": 0,
      "team": "GEE",
      "position1": "DEF",
      "probability": 0.001539003
    },
    {
      "id": 327,
      "first_name": "Emerson",
      "last_name": "Jeka",
      "team_id": 7,
      "previous_average": 0,
      "team": "GEE",
      "position1": "DEF",
      "probability": 0.00153261
    },
    {
      "id": 330,
      "first_name": "Shaun",
      "last_name": "Mannagh",
      "team_id": 7,
      "previous_average": 0,
      "team": "GEE",
      "position1": "MID",
      "probability": 0.001526206
    },
    {
      "id": 333,
      "first_name": "Oscar",
      "last_name": "Murdoch",
      "team_id": 7,
      "previous_average": 0,
      "team": "GEE",
      "position1": "DEF",
      "probability": 0.00151979
    },
    {
      "id": 336,
      "first_name": "Connor",
      "last_name": "O'Sullivan",
      "team_id": 7,
      "previous_average": 0,
      "team": "GEE",
      "position1": "DEF",
      "probability": 0.001513364
    },
    {
      "id": 341,
      "first_name": "George",
      "last_name": "Stevens",
      "team_id": 7,
      "previous_average": 0,
      "team": "GEE",
      "position1": "MID",
      "probability": 0.001506927
    },
    {
      "id": 344,
      "first_name": "James",
      "last_name": "Willis",
      "team_id": 7,
      "previous_average": 0,
      "team": "GEE",
      "position1": "MID",
      "probability": 0.00150048
    },
    {
      "id": 345,
      "first_name": "Oliver",
      "last_name": "Wiltshire",
      "team_id": 7,
      "previous_average": 0,
      "team": "GEE",
      "position1": "MID",
      "probability": 0.001494023
    },
    {
      "id": 391,
      "first_name": "Joshua",
      "last_name": "Bennetts",
      "team_id": 8,
      "previous_average": 0,
      "team": "HAW",
      "position1": "FWD",
      "probability": 0.001487556
    },
    {
      "id": 398,
      "first_name": "Calsher",
      "last_name": "Dear",
      "team_id": 8,
      "previous_average": 0,
      "team": "HAW",
      "position1": "FWD",
      "probability": 0.001481081
    },
    {
      "id": 412,
      "first_name": "William",
      "last_name": "McCabe",
      "team_id": 8,
      "previous_average": 0,
      "team": "HAW",
      "position1": "DEF",
      "probability": 0.001474597
    },
    {
      "id": 419,
      "first_name": "Jack",
      "last_name": "O'Sullivan",
      "team_id": 8,
      "previous_average": 0,
      "team": "HAW",
      "position1": "FWD",
      "probability": 0.001468105
    },
    {
      "id": 422,
      "first_name": "Bodie",
      "last_name": "Ryan",
      "team_id": 8,
      "previous_average": 0,
      "team": "HAW",
      "position1": "DEF",
      "probability": 0.001461604
    },
    {
      "id": 426,
      "first_name": "Cooper",
      "last_name": "Stephens",
      "team_id": 8,
      "previous_average": 0,
      "team": "HAW",
      "position1": "MID",
      "probability": 0.001455097
    },
    {
      "id": 427,
      "first_name": "Clay",
      "last_name": "Tucker",
      "team_id": 8,
      "previous_average": 0,
      "team": "HAW",
      "position1": "RUC",
      "probability": 0.001448581
    },
    {
      "id": 429,
      "first_name": "Nick",
      "last_name": "Watson",
      "team_id": 8,
      "previous_average": 0,
      "team": "HAW",
      "position1": "MID",
      "probability": 0.001442059
    },
    {
      "id": 785,
      "first_name": "Ethan",
      "last_name": "Phillips",
      "team_id": 8,
      "previous_average": 0,
      "team": "HAW",
      "position1": "DEF",
      "probability": 0.001435531
    },
    {
      "id": 485,
      "first_name": "Wil",
      "last_name": "Dawson",
      "team_id": 9,
      "previous_average": 0,
      "team": "NTH",
      "position1": "DEF",
      "probability": 0.001428996
    },
    {
      "id": 487,
      "first_name": "Zane",
      "last_name": "Duursma",
      "team_id": 9,
      "previous_average": 0,
      "team": "NTH",
      "position1": "MID",
      "probability": 0.001422456
    },
    {
      "id": 490,
      "first_name": "Hamish",
      "last_name": "Free",
      "team_id": 9,
      "previous_average": 0,
      "team": "NTH",
      "position1": "RUC",
      "probability": 0.00141591
    },
    {
      "id": 491,
      "first_name": "Brayden",
      "last_name": "George",
      "team_id": 9,
      "previous_average": 0,
      "team": "NTH",
      "position1": "FWD",
      "probability": 0.001409359
    },
    {
      "id": 492,
      "first_name": "Taylor",
      "last_name": "Goad",
      "team_id": 9,
      "previous_average": 0,
      "team": "NTH",
      "position1": "RUC",
      "probability": 0.001402803
    },
    {
      "id": 496,
      "first_name": "Riley",
      "last_name": "Hardeman",
      "team_id": 9,
      "previous_average": 0,
      "team": "NTH",
      "position1": "DEF",
      "probability": 0.001396243
    },
    {
      "id": 501,
      "first_name": "Finnbar",
      "last_name": "Maley",
      "team_id": 9,
      "previous_average": 0,
      "team": "NTH",
      "position1": "RUC",
      "probability": 0.001389678
    },
    {
      "id": 503,
      "first_name": "Colby",
      "last_name": "McKercher",
      "team_id": 9,
      "previous_average": 0,
      "team": "NTH",
      "position1": "MID",
      "probability": 0.00138311
    },
    {
      "id": 504,
      "first_name": "Bigoa",
      "last_name": "Nyuon",
      "team_id": 9,
      "previous_average": 0,
      "team": "NTH",
      "position1": "FWD",
      "probability": 0.001376539
    },
    {
      "id": 506,
      "first_name": "Toby",
      "last_name": "Pink",
      "team_id": 9,
      "previous_average": 0,
      "team": "NTH",
      "position1": "DEF",
      "probability": 0.001369964
    },
    {
      "id": 787,
      "first_name": "Tyler",
      "last_name": "Sellers",
      "team_id": 9,
      "previous_average": 0,
      "team": "NTH",
      "position1": "FWD",
      "probability": 0.001363387
    },
    {
      "id": 433,
      "first_name": "Jed",
      "last_name": "Adams",
      "team_id": 10,
      "previous_average": 0,
      "team": "MEL",
      "position1": "DEF",
      "probability": 0.001356808
    },
    {
      "id": 438,
      "first_name": "Kynan",
      "last_name": "Brown",
      "team_id": 10,
      "previous_average": 0,
      "team": "MEL",
      "position1": "MID",
      "probability": 0.001350226
    },
    {
      "id": 440,
      "first_name": "Kyah",
      "last_name": "Farris-White",
      "team_id": 10,
      "previous_average": 0,
      "team": "MEL",
      "position1": "RUC",
      "probability": 0.001343643
    },
    {
      "id": 442,
      "first_name": "Tom",
      "last_name": "Fullarton",
      "team_id": 10,
      "previous_average": 0,
      "team": "MEL",
      "position1": "FWD",
      "probability": 0.001337059
    },
    {
      "id": 444,
      "first_name": "Marty",
      "last_name": "Hore",
      "team_id": 10,
      "previous_average": 0,
      "team": "MEL",
      "position1": "DEF",
      "probability": 0.001330473
    },
    {
      "id": 445,
      "first_name": "Blake",
      "last_name": "Howes",
      "team_id": 10,
      "previous_average": 0,
      "team": "MEL",
      "position1": "DEF",
      "probability": 0.001323887
    },
    {
      "id": 447,
      "first_name": "Matthew",
      "last_name": "Jefferson",
      "team_id": 10,
      "previous_average": 0,
      "team": "MEL",
      "position1": "FWD",
      "probability": 0.001317301
    },
    {
      "id": 456,
      "first_name": "Andy",
      "last_name": "Moniz-Wakefield",
      "team_id": 10,
      "previous_average": 0,
      "team": "MEL",
      "position1": "FWD",
      "probability": 0.001310714
    },
    {
      "id": 465,
      "first_name": "Oliver",
      "last_name": "Sestan",
      "team_id": 10,
      "previous_average": 0,
      "team": "MEL",
      "position1": "FWD",
      "probability": 0.001304128
    },
    {
      "id": 469,
      "first_name": "Koltyn",
      "last_name": "Tholstrup",
      "team_id": 10,
      "previous_average": 0,
      "team": "MEL",
      "position1": "FWD",
      "probability": 0.001297543
    },
    {
      "id": 473,
      "first_name": "Will",
      "last_name": "Verrall",
      "team_id": 10,
      "previous_average": 0,
      "team": "MEL",
      "position1": "RUC",
      "probability": 0.001290958
    },
    {
      "id": 475,
      "first_name": "Caleb",
      "last_name": "Windsor",
      "team_id": 10,
      "previous_average": 0,
      "team": "MEL",
      "position1": "MID",
      "probability": 0.001284375
    },
    {
      "id": 521,
      "first_name": "Tom",
      "last_name": "Anastasopolous",
      "team_id": 11,
      "previous_average": 0,
      "team": "PTA",
      "position1": "FWD",
      "probability": 0.001277793
    },
    {
      "id": 528,
      "first_name": "Lachlan",
      "last_name": "Charleson",
      "team_id": 11,
      "previous_average": 0,
      "team": "PTA",
      "position1": "MID",
      "probability": 0.001271214
    },
    {
      "id": 538,
      "first_name": "Hugh",
      "last_name": "Jackson",
      "team_id": 11,
      "previous_average": 0,
      "team": "PTA",
      "position1": "MID",
      "probability": 0.001264637
    },
    {
      "id": 541,
      "first_name": "Will",
      "last_name": "Lorenz",
      "team_id": 11,
      "previous_average": 0,
      "team": "PTA",
      "position1": "MID",
      "probability": 0.001258062
    },
    {
      "id": 542,
      "first_name": "Kyle",
      "last_name": "Marshall",
      "team_id": 11,
      "previous_average": 0,
      "team": "PTA",
      "position1": "DEF",
      "probability": 0.00125149
    },
    {
      "id": 544,
      "first_name": "Tom",
      "last_name": "McCallum",
      "team_id": 11,
      "previous_average": 0,
      "team": "PTA",
      "position1": "DEF",
      "probability": 0.001244921
    },
    {
      "id": 553,
      "first_name": "Thomas",
      "last_name": "Scully",
      "team_id": 11,
      "previous_average": 0,
      "team": "PTA",
      "position1": "FWD",
      "probability": 0.001238356
    },
    {
      "id": 556,
      "first_name": "Jordon",
      "last_name": "Sweet",
      "team_id": 11,
      "previous_average": 0,
      "team": "PTA",
      "position1": "RUC",
      "probability": 0.001231795
    },
    {
      "id": 558,
      "first_name": "Xavier",
      "last_name": "Walsh",
      "team_id": 11,
      "previous_average": 0,
      "team": "PTA",
      "position1": "FWD",
      "probability": 0.001225238
    },
    {
      "id": 569,
      "first_name": "Seth",
      "last_name": "Campbell",
      "team_id": 12,
      "previous_average": 0,
      "team": "RIC",
      "position1": "FWD",
      "probability": 0.001218685
    },
    {
      "id": 571,
      "first_name": "Mate",
      "last_name": "Colina",
      "team_id": 12,
      "previous_average": 0,
      "team": "RIC",
      "position1": "RUC",
      "probability": 0.001212137
    },
    {
      "id": 575,
      "first_name": "Liam",
      "last_name": "Fawcett",
      "team_id": 12,
      "previous_average": 0,
      "team": "RIC",
      "position1": "FWD",
      "probability": 0.001205594
    },
    {
      "id": 576,
      "first_name": "Josh",
      "last_name": "Gibcus",
      "team_id": 12,
      "previous_average": 0,
      "team": "RIC",
      "position1": "DEF",
      "probability": 0.001199056
    },
    {
      "id": 578,
      "first_name": "Steely",
      "last_name": "Green",
      "team_id": 12,
      "previous_average": 0,
      "team": "RIC",
      "position1": "FWD",
      "probability": 0.001192524
    },
    {
      "id": 580,
      "first_name": "Oliver",
      "last_name": "Hayes-Brown",
      "team_id": 12,
      "previous_average": 0,
      "team": "RIC",
      "position1": "RUC",
      "probability": 0.001185998
    },
    {
      "id": 586,
      "first_name": "Kane",
      "last_name": "McAuliffe",
      "team_id": 12,
      "previous_average": 0,
      "team": "RIC",
      "position1": "MID",
      "probability": 0.001179478
    },
    {
      "id": 589,
      "first_name": "Sam",
      "last_name": "Naismith",
      "team_id": 12,
      "previous_average": 0,
      "team": "RIC",
      "position1": "RUC",
      "probability": 0.001172965
    },
    {
      "id": 599,
      "first_name": "Kaleb",
      "last_name": "Smith",
      "team_id": 12,
      "previous_average": 0,
      "team": "RIC",
      "position1": "DEF",
      "probability": 0.001166459
    },
    {
      "id": 786,
      "first_name": "Mykelti",
      "last_name": "Lefau",
      "team_id": 12,
      "previous_average": 0,
      "team": "RIC",
      "position1": "FWD",
      "probability": 0.001159959
    },
    {
      "id": 605,
      "first_name": "Matthew",
      "last_name": "Allison",
      "team_id": 13,
      "previous_average": 0,
      "team": "STK",
      "position1": "FWD",
      "probability": 0.001153467
    },
    {
      "id": 611,
      "first_name": "Tom",
      "last_name": "Campbell",
      "team_id": 13,
      "previous_average": 0,
      "team": "STK",
      "position1": "RUC",
      "probability": 0.001146983
    },
    {
      "id": 613,
      "first_name": "Lance",
      "last_name": "Collard",
      "team_id": 13,
      "previous_average": 0,
      "team": "STK",
      "position1": "FWD",
      "probability": 0.001140506
    },
    {
      "id": 617,
      "first_name": "Hugo",
      "last_name": "Garcia",
      "team_id": 13,
      "previous_average": 0,
      "team": "STK",
      "position1": "MID",
      "probability": 0.001134038
    },
    {
      "id": 618,
      "first_name": "Angus",
      "last_name": "Hastie",
      "team_id": 13,
      "previous_average": 0,
      "team": "STK",
      "position1": "DEF",
      "probability": 0.001127578
    },
    {
      "id": 620,
      "first_name": "Max",
      "last_name": "Heath",
      "team_id": 13,
      "previous_average": 0,
      "team": "STK",
      "position1": "RUC",
      "probability": 0.001121127
    },
    {
      "id": 624,
      "first_name": "Olli",
      "last_name": "Hotton",
      "team_id": 13,
      "previous_average": 0,
      "team": "STK",
      "position1": "MID",
      "probability": 0.001114685
    },
    {
      "id": 627,
      "first_name": "Isaac",
      "last_name": "Keeler",
      "team_id": 13,
      "previous_average": 0,
      "team": "STK",
      "position1": "FWD",
      "probability": 0.001108253
    },
    {
      "id": 630,
      "first_name": "Angus",
      "last_name": "McLennan",
      "team_id": 13,
      "previous_average": 0,
      "team": "STK",
      "position1": "DEF",
      "probability": 0.00110183
    },
    {
      "id": 632,
      "first_name": "Liam",
      "last_name": "O'Connell",
      "team_id": 13,
      "previous_average": 0,
      "team": "STK",
      "position1": "DEF",
      "probability": 0.001095417
    },
    {
      "id": 637,
      "first_name": "Arie",
      "last_name": "Schoenmaker",
      "team_id": 13,
      "previous_average": 0,
      "team": "STK",
      "position1": "DEF",
      "probability": 0.001089013
    },
    {
      "id": 642,
      "first_name": "James",
      "last_name": "Van Es",
      "team_id": 13,
      "previous_average": 0,
      "team": "STK",
      "position1": "DEF",
      "probability": 0.001082621
    },
    {
      "id": 646,
      "first_name": "Darcy",
      "last_name": "Wilson",
      "team_id": 13,
      "previous_average": 0,
      "team": "STK",
      "position1": "MID",
      "probability": 0.001076239
    },
    {
      "id": 651,
      "first_name": "Harrison",
      "last_name": "Arnold",
      "team_id": 14,
      "previous_average": 0,
      "team": "SYD",
      "position1": "DEF",
      "probability": 0.001069867
    },
    {
      "id": 655,
      "first_name": "Caiden",
      "last_name": "Cleary",
      "team_id": 14,
      "previous_average": 0,
      "team": "SYD",
      "position1": "MID",
      "probability": 0.001063507
    },
    {
      "id": 657,
      "first_name": "William",
      "last_name": "Edwards",
      "team_id": 14,
      "previous_average": 0,
      "team": "SYD",
      "position1": "DEF",
      "probability": 0.001057159
    },
    {
      "id": 661,
      "first_name": "William",
      "last_name": "Green",
      "team_id": 14,
      "previous_average": 0,
      "team": "SYD",
      "position1": "RUC",
      "probability": 0.001050821
    },
    {
      "id": 668,
      "first_name": "Indhi",
      "last_name": "Kirk",
      "team_id": 14,
      "previous_average": 0,
      "team": "SYD",
      "position1": "MID",
      "probability": 0.001044496
    },
    {
      "id": 669,
      "first_name": "Jacob",
      "last_name": "Konstanty",
      "team_id": 14,
      "previous_average": 0,
      "team": "SYD",
      "position1": "FWD",
      "probability": 0.001038183
    },
    {
      "id": 672,
      "first_name": "Jaiden",
      "last_name": "Magor",
      "team_id": 14,
      "previous_average": 0,
      "team": "SYD",
      "position1": "DEF",
      "probability": 0.001031882
    },
    {
      "id": 680,
      "first_name": "Caleb",
      "last_name": "Mitchell",
      "team_id": 14,
      "previous_average": 0,
      "team": "SYD",
      "position1": "DEF",
      "probability": 0.001025594
    },
    {
      "id": 684,
      "first_name": "Sam",
      "last_name": "Reid",
      "team_id": 14,
      "previous_average": 0,
      "team": "SYD",
      "position1": "FWD",
      "probability": 0.001019319
    },
    {
      "id": 688,
      "first_name": "Patrick",
      "last_name": "Snell",
      "team_id": 14,
      "previous_average": 0,
      "team": "SYD",
      "position1": "DEF",
      "probability": 0.001013057
    },
    {
      "id": 689,
      "first_name": "Cooper",
      "last_name": "Vickery",
      "team_id": 14,
      "previous_average": 0,
      "team": "SYD",
      "position1": "DEF",
      "probability": 0.001006808
    },
    {
      "id": 694,
      "first_name": "Dominic",
      "last_name": "Bedendo",
      "team_id": 15,
      "previous_average": 0,
      "team": "WBD",
      "position1": "MID",
      "probability": 0.001000572
    },
    {
      "id": 697,
      "first_name": "Jedd",
      "last_name": "Busslinger",
      "team_id": 15,
      "previous_average": 0,
      "team": "WBD",
      "position1": "DEF",
      "probability": 0.000994351
    },
    {
      "id": 698,
      "first_name": "Charlie",
      "last_name": "Clarke",
      "team_id": 15,
      "previous_average": 0,
      "team": "WBD",
      "position1": "FWD",
      "probability": 0.000988143
    },
    {
      "id": 700,
      "first_name": "Nick",
      "last_name": "Coffield",
      "team_id": 15,
      "previous_average": 0,
      "team": "WBD",
      "position1": "DEF",
      "probability": 0.00098195
    },
    {
      "id": 701,
      "first_name": "Jordan",
      "last_name": "Croft",
      "team_id": 15,
      "previous_average": 0,
      "team": "WBD",
      "position1": "FWD",
      "probability": 0.000975771
    },
    {
      "id": 707,
      "first_name": "Joel",
      "last_name": "Freijah",
      "team_id": 15,
      "previous_average": 0,
      "team": "WBD",
      "position1": "MID",
      "probability": 0.000969606
    },
    {
      "id": 708,
      "first_name": "Harvey",
      "last_name": "Gallagher",
      "team_id": 15,
      "previous_average": 0,
      "team": "WBD",
      "position1": "FWD",
      "probability": 0.000963457
    },
    {
      "id": 723,
      "first_name": "Aiden",
      "last_name": "O'Driscoll",
      "team_id": 15,
      "previous_average": 0,
      "team": "WBD",
      "position1": "FWD",
      "probability": 0.000957322
    },
    {
      "id": 726,
      "first_name": "Ryley",
      "last_name": "Sanders",
      "team_id": 15,
      "previous_average": 0,
      "team": "WBD",
      "position1": "MID",
      "probability": 0.000951203
    },
    {
      "id": 729,
      "first_name": "Lachlan",
      "last_name": "Smith",
      "team_id": 15,
      "previous_average": 0,
      "team": "WBD",
      "position1": "RUC",
      "probability": 0.000945099
    },
    {
      "id": 737,
      "first_name": "Jordyn",
      "last_name": "Baker",
      "team_id": 16,
      "previous_average": 0,
      "team": "WCE",
      "position1": "DEF",
      "probability": 0.000939011
    },
    {
      "id": 742,
      "first_name": "Coby",
      "last_name": "Burgiel",
      "team_id": 16,
      "previous_average": 0,
      "team": "WCE",
      "position1": "DEF",
      "probability": 0.000932939
    },
    {
      "id": 748,
      "first_name": "Tyrell",
      "last_name": "Dewar",
      "team_id": 16,
      "previous_average": 0,
      "team": "WCE",
      "position1": "FWD",
      "probability": 0.000926883
    },
    {
      "id": 755,
      "first_name": "Clay",
      "last_name": "Hall",
      "team_id": 16,
      "previous_average": 0,
      "team": "WCE",
      "position1": "MID",
      "probability": 0.000920843
    },
    {
      "id": 760,
      "first_name": "Harvey",
      "last_name": "Johnston",
      "team_id": 16,
      "previous_average": 0,
      "team": "WCE",
      "position1": "MID",
      "probability": 0.00091482
    },
    {
      "id": 763,
      "first_name": "Coen",
      "last_name": "Livingstone",
      "team_id": 16,
      "previous_average": 0,
      "team": "WCE",
      "position1": "RUC",
      "probability": 0.000908814
    },
    {
      "id": 768,
      "first_name": "Loch",
      "last_name": "Rawlinson",
      "team_id": 16,
      "previous_average": 0,
      "team": "WCE",
      "position1": "MID",
      "probability": 0.000902824
    },
    {
      "id": 769,
      "first_name": "Archer",
      "last_name": "Reid",
      "team_id": 16,
      "previous_average": 0,
      "team": "WCE",
      "position1": "RUC",
      "probability": 0.000896851
    },
    {
      "id": 770,
      "first_name": "Harley",
      "last_name": "Reid",
      "team_id": 16,
      "previous_average": 0,
      "team": "WCE",
      "position1": "MID",
      "probability": 0.000890896
    },
    {
      "id": 262,
      "first_name": "Sandy",
      "last_name": "Brock",
      "team_id": 17,
      "previous_average": 0,
      "team": "GCS",
      "position1": "DEF",
      "probability": 0.000884958
    },
    {
      "id": 265,
      "first_name": "Sam",
      "last_name": "Clohesy",
      "team_id": 17,
      "previous_average": 0,
      "team": "GCS",
      "position1": "DEF",
      "probability": 0.000879037
    },
    {
      "id": 271,
      "first_name": "Oskar",
      "last_name": "Faulkhead",
      "team_id": 17,
      "previous_average": 0,
      "team": "GCS",
      "position1": "MID",
      "probability": 0.000873135
    },
    {
      "id": 274,
      "first_name": "Caleb",
      "last_name": "Graham",
      "team_id": 17,
      "previous_average": 0,
      "team": "GCS",
      "position1": "DEF",
      "probability": 0.00086725
    },
    {
      "id": 275,
      "first_name": "Will",
      "last_name": "Graham",
      "team_id": 17,
      "previous_average": 0,
      "team": "GCS",
      "position1": "DEF",
      "probability": 0.000861384
    },
    {
      "id": 290,
      "first_name": "Ethan",
      "last_name": "Read",
      "team_id": 17,
      "previous_average": 0,
      "team": "GCS",
      "position1": "RUC",
      "probability": 0.000855535
    },
    {
      "id": 291,
      "first_name": "Jake",
      "last_name": "Rogers",
      "team_id": 17,
      "previous_average": 0,
      "team": "GCS",
      "position1": "MID",
      "probability": 0.000849706
    },
    {
      "id": 294,
      "first_name": "William",
      "last_name": "Rowlands",
      "team_id": 17,
      "previous_average": 0,
      "team": "GCS",
      "position1": "MID",
      "probability": 0.000843895
    },
    {
      "id": 299,
      "first_name": "Jed",
      "last_name": "Walter",
      "team_id": 17,
      "previous_average": 0,
      "team": "GCS",
      "position1": "FWD",
      "probability": 0.000838102
    },
    {
      "id": 346,
      "first_name": "Leek",
      "last_name": "Aleer",
      "team_id": 18,
      "previous_average": 0,
      "team": "GWS",
      "position1": "DEF",
      "probability": 0.000832329
    },
    {
      "id": 358,
      "first_name": "Wade",
      "last_name": "Derksen",
      "team_id": 18,
      "previous_average": 0,
      "team": "GWS",
      "position1": "FWD",
      "probability": 0.000826574
    },
    {
      "id": 360,
      "first_name": "Joe",
      "last_name": "Fonti",
      "team_id": 18,
      "previous_average": 0,
      "team": "GWS",
      "position1": "DEF",
      "probability": 0.000820839
    },
    {
      "id": 361,
      "first_name": "Phoenix",
      "last_name": "Gothard",
      "team_id": 18,
      "previous_average": 0,
      "team": "GWS",
      "position1": "FWD",
      "probability": 0.000815124
    },
    {
      "id": 364,
      "first_name": "Max",
      "last_name": "Gruzewski",
      "team_id": 18,
      "previous_average": 0,
      "team": "GWS",
      "position1": "FWD",
      "probability": 0.000809428
    },
    {
      "id": 370,
      "first_name": "Darcy",
      "last_name": "Jones",
      "team_id": 18,
      "previous_average": 0,
      "team": "GWS",
      "position1": "FWD",
      "probability": 0.000803751
    },
    {
      "id": 374,
      "first_name": "James",
      "last_name": "Leake",
      "team_id": 18,
      "previous_average": 0,
      "team": "GWS",
      "position1": "DEF",
      "probability": 0.000798095
    },
    {
      "id": 375,
      "first_name": "Nicholas",
      "last_name": "Madden",
      "team_id": 18,
      "previous_average": 0,
      "team": "GWS",
      "position1": "RUC",
      "probability": 0.000792458
    },
    {
      "id": 380,
      "first_name": "Braydon",
      "last_name": "Preuss",
      "team_id": 18,
      "previous_average": 0,
      "team": "GWS",
      "position1": "RUC",
      "probability": 0.000786842
    },
    {
      "id": 385,
      "first_name": "Harvey",
      "last_name": "Thomas",
      "team_id": 18,
      "previous_average": 0,
      "team": "GWS",
      "position1": "MID",
      "probability": 0.000781246
    },
    {
      "id": 387,
      "first_name": "Nathan",
      "last_name": "Wardius",
      "team_id": 18,
      "previous_average": 0,
      "team": "GWS",
      "position1": "FWD",
      "probability": 0.00077567
    }
   ]

   players.forEach(player => {
    db.run(`
      INSERT INTO cards 
        (id, first_name, last_name, team_id, previous_average, team, position1, probability) 
      VALUES 
        (?, ?, ?, ?, ?, ?, ?, ?)`, 
      [player.id, player.first_name, player.last_name, player.team_id, player.previous_average, player.team, player.position1, player.probability],
      (err) => {
        if (err) {
          console.error(`Error inserting data for ${player.first_name} ${player.last_name}: ${err.message}`);
          return;
        }
        console.log(`A row has been inserted with rowid ${this.lastID}`);
      });
  });
  
  // Close the database connection once all inserts are done
  db.close((err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Database connection closed.');
    }
  });