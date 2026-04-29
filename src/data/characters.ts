import { Character } from "./types";

export const MAX_HEALTH = 100;

export const ENEMY_POINTS: Record<string, number> = {
  "alarm-clock": 100,
  laptop: 150,
  traffic: 200,
  "cant-make-it": 75,
  "rain-cloud": 175,
  "couch-potato": 250,
};

export const characters: Character[] = [
  {
    id: "valentyn",
    name: "Valentyn",
    difficulty: 2,
    headImage: "/characters/valentyn-head.png",
    mapImage: "/map/valentyn.png",
    levels: [
      {
        name: "Opera Hotel Kyiv",
        mapX: 0.23,
        mapY: 0.4,
        background: "/backgrounds/level/opera-hotel-kyiv.jpg",
        enemies: [
          { type: "alarm-clock", count: 4 },
          { type: "cant-make-it", count: 3 },
        ],
      },
      {
        name: "Chicot",
        mapX: 0.71,
        mapY: 0.72,
        background: "/backgrounds/level/chicot.jpg",
        enemies: [
          { type: "laptop", count: 4 },
          { type: "traffic", count: 2 },
          { type: "cant-make-it", count: 3 },
        ],
      },
    ],
  },
  {
    id: "victor",
    name: "Victor",
    difficulty: 3,
    headImage: "/characters/victor-head.png",
    mapImage: "/map/victor.png",
    levels: [
      {
        name: "Balerina monument",
        mapX: 0.66,
        mapY: 0.05,
        background: "/backgrounds/level/balerina-monument.jpg",
        enemies: [
          { type: "alarm-clock", count: 5 },
          { type: "cant-make-it", count: 3 },
        ],
      },
      {
        name: "Ivana Franka descent",
        mapX: 0.6,
        mapY: 0.4,
        background: "/backgrounds/level/ivana-franka-descent.jpg",
        enemies: [
          { type: "alarm-clock", count: 3 },
          { type: "laptop", count: 3 },
          { type: "traffic", count: 2 },
        ],
      },
      {
        name: "Chicot",
        mapX: 0.57,
        mapY: 0.75,
        background: "/backgrounds/level/chicot.jpg",
        enemies: [
          { type: "laptop", count: 4 },
          { type: "traffic", count: 3 },
          { type: "rain-cloud", count: 2 },
        ],
      },
    ],
  },
  {
    id: "artem",
    name: "Artem",
    difficulty: 3,
    headImage: "/characters/artem-head.png",
    mapImage: "/map/artem.png",
    levels: [
      {
        name: "Pchilka",
        mapX: 0.5,
        mapY: 0.75,
        background: "/backgrounds/level/pchilka.jpg",
        enemies: [
          { type: "alarm-clock", count: 4 },
          { type: "laptop", count: 3 },
        ],
      },
      {
        name: "Park Shevchenka",
        mapX: 0.55,
        mapY: 0.55,
        background: "/backgrounds/level/park-shevchenka.jpg",
        enemies: [
          { type: "laptop", count: 4 },
          { type: "cant-make-it", count: 4 },
        ],
      },
      {
        name: "Chicot",
        mapX: 0.48,
        mapY: 0.22,
        background: "/backgrounds/level/chicot.jpg",
        enemies: [
          { type: "traffic", count: 4 },
          { type: "rain-cloud", count: 3 },
          { type: "couch-potato", count: 2 },
        ],
      },
    ],
  },
  {
    id: "malesya",
    name: "Malesya",
    difficulty: 4,
    headImage: "/characters/malesya-head.png",
    mapImage: "/map/malesya.png",
    levels: [
      {
        name: "Vovcha Tropa",
        mapX: 0.68,
        mapY: 0.78,
        background: "/backgrounds/level/vovcha-tropa.jpg",
        enemies: [
          { type: "alarm-clock", count: 5 },
          { type: "laptop", count: 3 },
        ],
      },
      {
        name: "Parus Business Centre",
        mapX: 0.56,
        mapY: 0.8,
        background: "/backgrounds/level/parus-business-centre.jpg",
        enemies: [
          { type: "laptop", count: 4 },
          { type: "traffic", count: 3 },
        ],
      },
      {
        name: "TSUM",
        mapX: 0.47,
        mapY: 0.46,
        background: "/backgrounds/level/tsum.jpg",
        enemies: [
          { type: "traffic", count: 3 },
          { type: "cant-make-it", count: 5 },
          { type: "rain-cloud", count: 2 },
        ],
      },
      {
        name: "Chicot",
        mapX: 0.29,
        mapY: 0.41,
        background: "/backgrounds/level/chicot.jpg",
        enemies: [
          { type: "traffic", count: 4 },
          { type: "rain-cloud", count: 3 },
          { type: "couch-potato", count: 3 },
        ],
      },
    ],
  },
  {
    id: "dima",
    name: "Dima",
    difficulty: 4,
    headImage: "/characters/dima-head.png",
    mapImage: "/map/malesya.png",
    levels: [
      {
        name: "Vovcha Tropa",
        mapX: 0.68,
        mapY: 0.78,
        background: "/backgrounds/level/vovcha-tropa.jpg",
        enemies: [
          { type: "alarm-clock", count: 5 },
          { type: "laptop", count: 3 },
        ],
      },
      {
        name: "Parus Business Centre",
        mapX: 0.56,
        mapY: 0.8,
        background: "/backgrounds/level/parus-business-centre.jpg",
        enemies: [
          { type: "laptop", count: 4 },
          { type: "traffic", count: 3 },
        ],
      },
      {
        name: "TSUM",
        mapX: 0.47,
        mapY: 0.46,
        background: "/backgrounds/level/tsum.jpg",
        enemies: [
          { type: "traffic", count: 3 },
          { type: "cant-make-it", count: 5 },
          { type: "rain-cloud", count: 2 },
        ],
      },
      {
        name: "Chicot",
        mapX: 0.29,
        mapY: 0.41,
        background: "/backgrounds/level/chicot.jpg",
        enemies: [
          { type: "traffic", count: 4 },
          { type: "rain-cloud", count: 3 },
          { type: "couch-potato", count: 3 },
        ],
      },
    ],
  },
  {
    id: "tanya",
    name: "Tanya",
    difficulty: 5,
    headImage: "/characters/tanya-head.png",
    mapImage: "/map/tanya.png",
    levels: [
      {
        name: "Arsenalna",
        mapX: 0.87,
        mapY: 0.52,
        background: "/backgrounds/level/arsenalna.jpg",
        enemies: [
          { type: "alarm-clock", count: 5 },
          { type: "cant-make-it", count: 5 },
        ],
      },
      {
        name: "Khreshchatyk",
        mapX: 0.43,
        mapY: 0.28,
        background: "/backgrounds/level/khreshchatyk.jpg",
        enemies: [
          { type: "laptop", count: 4 },
          { type: "traffic", count: 3 },
        ],
      },
      {
        name: "Teatralna",
        mapX: 0.29,
        mapY: 0.45,
        background: "/backgrounds/level/teatralna.jpg",
        enemies: [
          { type: "traffic", count: 4 },
          { type: "rain-cloud", count: 3 },
        ],
      },
      {
        name: "Universytet",
        mapX: 0.1,
        mapY: 0.52,
        background: "/backgrounds/level/universytet.jpg",
        enemies: [
          { type: "laptop", count: 3 },
          { type: "traffic", count: 3 },
          { type: "couch-potato", count: 3 },
        ],
      },
      {
        name: "Chicot",
        mapX: 0.17,
        mapY: 0.37,
        background: "/backgrounds/level/chicot.jpg",
        enemies: [
          { type: "traffic", count: 5 },
          { type: "rain-cloud", count: 3 },
          { type: "couch-potato", count: 3 },
        ],
      },
    ],
  },
  {
    id: "karina",
    name: "Karina",
    difficulty: 5,
    headImage: "/characters/karina-head.png",
    mapImage: "/map/karina.png",
    levels: [
      {
        name: "Spaska 13",
        mapX: 0.59,
        mapY: 0.05,
        background: "/backgrounds/level/spaska-13.jpg",
        enemies: [
          { type: "alarm-clock", count: 5 },
          { type: "cant-make-it", count: 5 },
        ],
      },
      {
        name: "Spaska 12",
        mapX: 0.62,
        mapY: 0.12,
        background: "/backgrounds/level/spaska-12.jpg",
        enemies: [
          { type: "laptop", count: 4 },
          { type: "traffic", count: 3 },
        ],
      },
      {
        name: "Shchekavytsia",
        mapX: 0.4,
        mapY: 0.12,
        background: "/backgrounds/level/shchekavytsia.jpg",
        enemies: [
          { type: "traffic", count: 4 },
          { type: "rain-cloud", count: 3 },
        ],
      },
      {
        name: "Kudriavka",
        mapX: 0.38,
        mapY: 0.4,
        background: "/backgrounds/level/kudriavka.jpg",
        enemies: [
          { type: "laptop", count: 3 },
          { type: "traffic", count: 3 },
          { type: "couch-potato", count: 3 },
        ],
      },
      {
        name: "Yaroslava",
        mapX: 0.49,
        mapY: 0.65,
        background: "/backgrounds/level/yaroslava.jpg",
        enemies: [
          { type: "traffic", count: 4 },
          { type: "rain-cloud", count: 3 },
          { type: "couch-potato", count: 2 },
        ],
      },
      {
        name: "Chicot",
        mapX: 0.47,
        mapY: 0.87,
        background: "/backgrounds/level/chicot.jpg",
        enemies: [
          { type: "traffic", count: 5 },
          { type: "rain-cloud", count: 3 },
          { type: "couch-potato", count: 3 },
        ],
      },
    ],
  },
  {
    id: "taiia",
    name: "Taiia",
    difficulty: 5,
    headImage: "/characters/taiia-head.png",
    mapImage: "/map/taiia.png",
    levels: [
      {
        name: "K41",
        mapX: 0.36,
        mapY: 0.04,
        background: "/backgrounds/level/k41.jpg",
        enemies: [
          { type: "alarm-clock", count: 5 },
          { type: "cant-make-it", count: 5 },
        ],
      },
      {
        name: "Closer",
        mapX: 0.4,
        mapY: 0.2,
        background: "/backgrounds/level/closer.jpg",
        enemies: [
          { type: "laptop", count: 4 },
          { type: "traffic", count: 3 },
        ],
      },
      {
        name: "Valy",
        mapX: 0.52,
        mapY: 0.25,
        background: "/backgrounds/level/valy.jpg",
        enemies: [
          { type: "traffic", count: 4 },
          { type: "rain-cloud", count: 3 },
        ],
      },
      {
        name: "Vosnesenskyi Descent",
        mapX: 0.47,
        mapY: 0.45,
        background: "/backgrounds/level/vosnesenskyi-descent.jpg",
        enemies: [
          { type: "laptop", count: 3 },
          { type: "traffic", count: 3 },
          { type: "couch-potato", count: 3 },
        ],
      },
      {
        name: "Lvivska Square",
        mapX: 0.47,
        mapY: 0.61,
        background: "/backgrounds/level/lvivska-square.jpg",
        enemies: [
          { type: "traffic", count: 4 },
          { type: "rain-cloud", count: 3 },
          { type: "couch-potato", count: 2 },
        ],
      },
      {
        name: "Chicot",
        mapX: 0.5,
        mapY: 0.92,
        background: "/backgrounds/level/chicot.jpg",
        enemies: [
          { type: "traffic", count: 5 },
          { type: "rain-cloud", count: 3 },
          { type: "couch-potato", count: 3 },
        ],
      },
    ],
  },
  {
    id: "lera",
    name: "Lera",
    difficulty: 6,
    headImage: "/characters/lera-head.png",
    mapImage: "/map/lera.png",
    levels: [
      {
        name: "Minska",
        mapX: 0.444,
        mapY: 0.03,
        background: "/backgrounds/level/minska.jpg",
        enemies: [
          { type: "alarm-clock", count: 6 },
          { type: "cant-make-it", count: 4 },
        ],
      },
      {
        name: "Obolon",
        mapX: 0.444,
        mapY: 0.2,
        background: "/backgrounds/level/obolon.jpg",
        enemies: [
          { type: "laptop", count: 5 },
          { type: "traffic", count: 3 },
        ],
      },
      {
        name: "Pochaina",
        mapX: 0.444,
        mapY: 0.38,
        background: "/backgrounds/level/pochaina.jpg",
        enemies: [
          { type: "laptop", count: 4 },
          { type: "rain-cloud", count: 3 },
          { type: "couch-potato", count: 2 },
        ],
      },
      {
        name: "Podil",
        mapX: 0.52,
        mapY: 0.6,
        background: "/backgrounds/level/podil.jpg",
        enemies: [
          { type: "traffic", count: 4 },
          { type: "rain-cloud", count: 3 },
          { type: "couch-potato", count: 3 },
        ],
      },
      {
        name: "Zoloti Vorota",
        mapX: 0.5,
        mapY: 0.83,
        background: "/backgrounds/level/zoloti-vorota.jpg",
        enemies: [
          { type: "laptop", count: 3 },
          { type: "traffic", count: 4 },
          { type: "couch-potato", count: 3 },
        ],
      },
      {
        name: "Chicot",
        mapX: 0.48,
        mapY: 0.92,
        background: "/backgrounds/level/chicot.jpg",
        enemies: [
          { type: "traffic", count: 5 },
          { type: "rain-cloud", count: 4 },
          { type: "couch-potato", count: 3 },
        ],
      },
    ],
  },
  {
    id: "ambal",
    name: "Ambal",
    difficulty: 7,
    headImage: "/characters/ambal-head.png",
    mapImage: "/map/ambal.png",
    levels: [
      {
        name: "Holosiivskyi Park",
        mapX: 0.92,
        mapY: 0.72,
        background: "/backgrounds/level/holosiivskyi-park.jpg",
        enemies: [
          { type: "alarm-clock", count: 6 },
          { type: "cant-make-it", count: 6 },
        ],
      },
      {
        name: "Demiyivska",
        mapX: 0.82,
        mapY: 0.68,
        background: "/backgrounds/level/demiyivska.jpg",
        enemies: [
          { type: "laptop", count: 5 },
          { type: "traffic", count: 4 },
        ],
      },
      {
        name: "Lybidska",
        mapX: 0.72,
        mapY: 0.63,
        background: "/backgrounds/level/lybidska.jpg",
        enemies: [
          { type: "traffic", count: 5 },
          { type: "rain-cloud", count: 3 },
        ],
      },
      {
        name: "Palats Ukraina",
        mapX: 0.6,
        mapY: 0.55,
        background: "/backgrounds/level/palats-ukraina.jpg",
        enemies: [
          { type: "laptop", count: 4 },
          { type: "traffic", count: 3 },
          { type: "couch-potato", count: 3 },
        ],
      },
      {
        name: "Olimpiiska",
        mapX: 0.53,
        mapY: 0.5,
        background: "/backgrounds/level/olimpiiska.jpg",
        enemies: [
          { type: "traffic", count: 4 },
          { type: "rain-cloud", count: 4 },
          { type: "couch-potato", count: 3 },
        ],
      },
      {
        name: "Teatralna",
        mapX: 0.47,
        mapY: 0.48,
        background: "/backgrounds/level/teatralna.jpg",
        enemies: [
          { type: "laptop", count: 3 },
          { type: "traffic", count: 5 },
          { type: "couch-potato", count: 3 },
        ],
      },
      {
        name: "Chicot",
        mapX: 0.5,
        mapY: 0.45,
        background: "/backgrounds/level/chicot.jpg",
        enemies: [
          { type: "traffic", count: 6 },
          { type: "rain-cloud", count: 4 },
          { type: "couch-potato", count: 4 },
        ],
      },
    ],
  },
  {
    id: "antonio",
    name: "Antonio",
    difficulty: 8,
    headImage: "/characters/antonio-head.png",
    mapImage: "/map/antonio.png",
    levels: [
      {
        name: "Hatne",
        mapX: 0.02,
        mapY: 0.42,
        background: "/backgrounds/level/hatne.jpg",
        enemies: [
          { type: "alarm-clock", count: 7 },
          { type: "cant-make-it", count: 5 },
        ],
      },
      {
        name: "Teremky",
        mapX: 0.06,
        mapY: 0.41,
        background: "/backgrounds/level/teremky.jpg",
        enemies: [
          { type: "laptop", count: 5 },
          { type: "traffic", count: 4 },
        ],
      },
      {
        name: "Ipodrom",
        mapX: 0.1,
        mapY: 0.4,
        background: "/backgrounds/level/ipodrom.jpg",
        enemies: [
          { type: "traffic", count: 5 },
          { type: "cant-make-it", count: 5 },
        ],
      },
      {
        name: "VDNG",
        mapX: 0.15,
        mapY: 0.39,
        background: "/backgrounds/level/vdng.jpg",
        enemies: [
          { type: "laptop", count: 4 },
          { type: "traffic", count: 4 },
          { type: "rain-cloud", count: 2 },
        ],
      },
      {
        name: "Vasylkivska",
        mapX: 0.2,
        mapY: 0.38,
        background: "/backgrounds/level/vasylkivska.jpg",
        enemies: [
          { type: "traffic", count: 5 },
          { type: "rain-cloud", count: 3 },
          { type: "couch-potato", count: 2 },
        ],
      },
      {
        name: "Holosiivska",
        mapX: 0.25,
        mapY: 0.38,
        background: "/backgrounds/level/holosiivska.jpg",
        enemies: [
          { type: "laptop", count: 4 },
          { type: "traffic", count: 4 },
          { type: "couch-potato", count: 3 },
        ],
      },
      {
        name: "Lybidska",
        mapX: 0.3,
        mapY: 0.39,
        background: "/backgrounds/level/lybidska.jpg",
        enemies: [
          { type: "traffic", count: 5 },
          { type: "rain-cloud", count: 4 },
          { type: "couch-potato", count: 3 },
        ],
      },
      {
        name: "Palats Ukraina",
        mapX: 0.38,
        mapY: 0.42,
        background: "/backgrounds/level/palats-ukraina.jpg",
        enemies: [
          { type: "traffic", count: 5 },
          { type: "rain-cloud", count: 4 },
          { type: "couch-potato", count: 4 },
        ],
      },
      {
        name: "Olimpiiska",
        mapX: 0.44,
        mapY: 0.44,
        background: "/backgrounds/level/olimpiiska.jpg",
        enemies: [
          { type: "laptop", count: 3 },
          { type: "traffic", count: 5 },
          { type: "rain-cloud", count: 4 },
          { type: "couch-potato", count: 4 },
        ],
      },
      {
        name: "PLUG",
        mapX: 0.44,
        mapY: 0.44,
        background: "/backgrounds/level/plug.jpg",
        enemies: [
          { type: "laptop", count: 3 },
          { type: "traffic", count: 5 },
          { type: "rain-cloud", count: 4 },
          { type: "couch-potato", count: 4 },
        ],
      },
      {
        name: "Shevchenka University",
        mapX: 0.44,
        mapY: 0.44,
        background: "/backgrounds/level/shevchenka-university.jpg",
        enemies: [
          { type: "laptop", count: 3 },
          { type: "traffic", count: 5 },
          { type: "rain-cloud", count: 4 },
          { type: "couch-potato", count: 4 },
        ],
      },
      {
        name: "Chicot",
        mapX: 0.5,
        mapY: 0.45,
        background: "/backgrounds/level/chicot.jpg",
        enemies: [
          { type: "traffic", count: 6 },
          { type: "rain-cloud", count: 5 },
          { type: "couch-potato", count: 5 },
        ],
      },
    ],
  },
];
