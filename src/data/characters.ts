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
    levels: [
      {
        name: "Opera Hotel Kyiv",
        mapX: 0.38,
        mapY: 0.28,
        background: "/backgrounds/level/opera-hotel-kyiv.jpg",
        enemies: [
          { type: "alarm-clock", count: 4 },
          { type: "cant-make-it", count: 3 },
        ],
      },
      {
        name: "Chicot",
        mapX: 0.5,
        mapY: 0.45,
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
    levels: [
      {
        name: "Balerina monument",
        mapX: 0.35,
        mapY: 0.15,
        background: "/backgrounds/level/balerina-monument.jpg",
        enemies: [
          { type: "alarm-clock", count: 5 },
          { type: "cant-make-it", count: 3 },
        ],
      },
      {
        name: "Ivana Franka descent",
        mapX: 0.37,
        mapY: 0.22,
        background: "/backgrounds/level/ivana-franka-descent.jpg",
        enemies: [
          { type: "alarm-clock", count: 3 },
          { type: "laptop", count: 3 },
          { type: "traffic", count: 2 },
        ],
      },
      {
        name: "Chicot",
        mapX: 0.5,
        mapY: 0.45,
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
    levels: [
      {
        name: "Pchilka",
        mapX: 0.3,
        mapY: 0.38,
        background: "/backgrounds/level/pchilka.jpg",
        enemies: [
          { type: "alarm-clock", count: 4 },
          { type: "laptop", count: 3 },
        ],
      },
      {
        name: "Park Shevchenka",
        mapX: 0.34,
        mapY: 0.35,
        background: "/backgrounds/level/park-shevchenka.jpg",
        enemies: [
          { type: "laptop", count: 4 },
          { type: "cant-make-it", count: 4 },
        ],
      },
      {
        name: "Chicot",
        mapX: 0.5,
        mapY: 0.45,
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
    levels: [
      {
        name: "Vovcha Tropa",
        mapX: 0.48,
        mapY: 0.62,
        background: "/backgrounds/level/vovcha-tropa.jpg",
        enemies: [
          { type: "alarm-clock", count: 5 },
          { type: "laptop", count: 3 },
        ],
      },
      {
        name: "Parus Business Centre",
        mapX: 0.47,
        mapY: 0.55,
        background: "/backgrounds/level/parus-business-centre.jpg",
        enemies: [
          { type: "laptop", count: 4 },
          { type: "traffic", count: 3 },
        ],
      },
      {
        name: "TSUM",
        mapX: 0.5,
        mapY: 0.52,
        background: "/backgrounds/level/tsum.jpg",
        enemies: [
          { type: "traffic", count: 3 },
          { type: "cant-make-it", count: 5 },
          { type: "rain-cloud", count: 2 },
        ],
      },
      {
        name: "Chicot",
        mapX: 0.5,
        mapY: 0.45,
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
    levels: [
      {
        name: "Vovcha Tropa",
        mapX: 0.48,
        mapY: 0.62,
        background: "/backgrounds/level/vovcha-tropa.jpg",
        enemies: [
          { type: "alarm-clock", count: 5 },
          { type: "laptop", count: 3 },
        ],
      },
      {
        name: "Parus Business Centre",
        mapX: 0.47,
        mapY: 0.55,
        background: "/backgrounds/level/parus-business-centre.jpg",
        enemies: [
          { type: "laptop", count: 4 },
          { type: "traffic", count: 3 },
        ],
      },
      {
        name: "TSUM",
        mapX: 0.5,
        mapY: 0.52,
        background: "/backgrounds/level/tsum.jpg",
        enemies: [
          { type: "traffic", count: 3 },
          { type: "cant-make-it", count: 5 },
          { type: "rain-cloud", count: 2 },
        ],
      },
      {
        name: "Chicot",
        mapX: 0.5,
        mapY: 0.45,
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
    levels: [
      {
        name: "Arsenalna",
        mapX: 0.72,
        mapY: 0.75,
        background: "/backgrounds/level/arsenalna.jpg",
        enemies: [
          { type: "alarm-clock", count: 5 },
          { type: "cant-make-it", count: 5 },
        ],
      },
      {
        name: "Khreshchatyk",
        mapX: 0.68,
        mapY: 0.7,
        background: "/backgrounds/level/khreshchatyk.jpg",
        enemies: [
          { type: "laptop", count: 4 },
          { type: "traffic", count: 3 },
        ],
      },
      {
        name: "Teatralna",
        mapX: 0.63,
        mapY: 0.65,
        background: "/backgrounds/level/teatralna.jpg",
        enemies: [
          { type: "traffic", count: 4 },
          { type: "rain-cloud", count: 3 },
        ],
      },
      {
        name: "Universytet",
        mapX: 0.55,
        mapY: 0.55,
        background: "/backgrounds/level/universytet.jpg",
        enemies: [
          { type: "laptop", count: 3 },
          { type: "traffic", count: 3 },
          { type: "couch-potato", count: 3 },
        ],
      },
      {
        name: "Chicot",
        mapX: 0.5,
        mapY: 0.45,
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
    // headImage: "/characters/karina-head.png",
    levels: [
      {
        name: "Pozniaky",
        mapX: 0.72,
        mapY: 0.75,
        background: "/backgrounds/level/pozniaky.jpg",
        enemies: [
          { type: "alarm-clock", count: 5 },
          { type: "cant-make-it", count: 5 },
        ],
      },
      {
        name: "Osokorky",
        mapX: 0.68,
        mapY: 0.7,
        background: "/backgrounds/level/osokorky.jpg",
        enemies: [
          { type: "laptop", count: 4 },
          { type: "traffic", count: 3 },
        ],
      },
      {
        name: "Slavutych",
        mapX: 0.63,
        mapY: 0.65,
        background: "/backgrounds/level/slavutych.jpg",
        enemies: [
          { type: "traffic", count: 4 },
          { type: "rain-cloud", count: 3 },
        ],
      },
      {
        name: "Pechersk",
        mapX: 0.55,
        mapY: 0.55,
        background: "/backgrounds/level/pechersk.jpg",
        enemies: [
          { type: "laptop", count: 3 },
          { type: "traffic", count: 3 },
          { type: "couch-potato", count: 3 },
        ],
      },
      {
        name: "Arsenalna",
        mapX: 0.52,
        mapY: 0.48,
        background: "/backgrounds/level/arsenalna.jpg",
        enemies: [
          { type: "traffic", count: 4 },
          { type: "rain-cloud", count: 3 },
          { type: "couch-potato", count: 2 },
        ],
      },
      {
        name: "Chicot",
        mapX: 0.5,
        mapY: 0.45,
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
    // headImage: "/characters/taiia-head.png",
    levels: [
      {
        name: "Pozniaky",
        mapX: 0.72,
        mapY: 0.75,
        background: "/backgrounds/level/pozniaky.jpg",
        enemies: [
          { type: "alarm-clock", count: 5 },
          { type: "cant-make-it", count: 5 },
        ],
      },
      {
        name: "Osokorky",
        mapX: 0.68,
        mapY: 0.7,
        background: "/backgrounds/level/osokorky.jpg",
        enemies: [
          { type: "laptop", count: 4 },
          { type: "traffic", count: 3 },
        ],
      },
      {
        name: "Slavutych",
        mapX: 0.63,
        mapY: 0.65,
        background: "/backgrounds/level/slavutych.jpg",
        enemies: [
          { type: "traffic", count: 4 },
          { type: "rain-cloud", count: 3 },
        ],
      },
      {
        name: "Pechersk",
        mapX: 0.55,
        mapY: 0.55,
        background: "/backgrounds/level/pechersk.jpg",
        enemies: [
          { type: "laptop", count: 3 },
          { type: "traffic", count: 3 },
          { type: "couch-potato", count: 3 },
        ],
      },
      {
        name: "Arsenalna",
        mapX: 0.52,
        mapY: 0.48,
        background: "/backgrounds/level/arsenalna.jpg",
        enemies: [
          { type: "traffic", count: 4 },
          { type: "rain-cloud", count: 3 },
          { type: "couch-potato", count: 2 },
        ],
      },
      {
        name: "Chicot",
        mapX: 0.5,
        mapY: 0.45,
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
    // headImage: "/characters/lera-head.png",
    levels: [
      {
        name: "Sviatoshyn",
        mapX: 0.08,
        mapY: 0.42,
        background: "/backgrounds/level/sviatoshyn.jpg",
        enemies: [
          { type: "alarm-clock", count: 6 },
          { type: "cant-make-it", count: 4 },
        ],
      },
      {
        name: "Nyvky",
        mapX: 0.13,
        mapY: 0.4,
        background: "/backgrounds/level/nyvky.jpg",
        enemies: [
          { type: "laptop", count: 5 },
          { type: "traffic", count: 3 },
        ],
      },
      {
        name: "Beresteiska",
        mapX: 0.18,
        mapY: 0.39,
        background: "/backgrounds/level/beresteiska.jpg",
        enemies: [
          { type: "traffic", count: 4 },
          { type: "cant-make-it", count: 5 },
        ],
      },
      {
        name: "Shuliavska",
        mapX: 0.22,
        mapY: 0.38,
        background: "/backgrounds/level/shuliavska.jpg",
        enemies: [
          { type: "laptop", count: 4 },
          { type: "rain-cloud", count: 3 },
          { type: "couch-potato", count: 2 },
        ],
      },
      {
        name: "KPI",
        mapX: 0.27,
        mapY: 0.39,
        background: "/backgrounds/level/kpi.jpg",
        enemies: [
          { type: "traffic", count: 4 },
          { type: "rain-cloud", count: 3 },
          { type: "couch-potato", count: 3 },
        ],
      },
      {
        name: "Universytet",
        mapX: 0.38,
        mapY: 0.42,
        background: "/backgrounds/level/universytet.jpg",
        enemies: [
          { type: "laptop", count: 3 },
          { type: "traffic", count: 4 },
          { type: "couch-potato", count: 3 },
        ],
      },
      {
        name: "Chicot",
        mapX: 0.5,
        mapY: 0.45,
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
    // headImage: "/characters/ambal-head.png",
    levels: [
      {
        name: "Boryspil",
        mapX: 0.92,
        mapY: 0.72,
        background: "/backgrounds/level/boryspil.jpg",
        enemies: [
          { type: "alarm-clock", count: 6 },
          { type: "cant-make-it", count: 6 },
        ],
      },
      {
        name: "Vydubychi",
        mapX: 0.82,
        mapY: 0.68,
        background: "/backgrounds/level/vydubychi.jpg",
        enemies: [
          { type: "laptop", count: 5 },
          { type: "traffic", count: 4 },
        ],
      },
      {
        name: "Druzhby Narodiv",
        mapX: 0.72,
        mapY: 0.63,
        background: "/backgrounds/level/druzhby-narodiv.jpg",
        enemies: [
          { type: "traffic", count: 5 },
          { type: "rain-cloud", count: 3 },
        ],
      },
      {
        name: "Pecherska",
        mapX: 0.6,
        mapY: 0.55,
        background: "/backgrounds/level/pecherska.jpg",
        enemies: [
          { type: "laptop", count: 4 },
          { type: "traffic", count: 3 },
          { type: "couch-potato", count: 3 },
        ],
      },
      {
        name: "Klovska",
        mapX: 0.53,
        mapY: 0.5,
        background: "/backgrounds/level/klovska.jpg",
        enemies: [
          { type: "traffic", count: 4 },
          { type: "rain-cloud", count: 4 },
          { type: "couch-potato", count: 3 },
        ],
      },
      {
        name: "Palats Sportu",
        mapX: 0.47,
        mapY: 0.48,
        background: "/backgrounds/level/palats-sportu.jpg",
        enemies: [
          { type: "laptop", count: 3 },
          { type: "traffic", count: 5 },
          { type: "couch-potato", count: 3 },
        ],
      },
      {
        name: "Khreshchatyk",
        mapX: 0.48,
        mapY: 0.46,
        background: "/backgrounds/level/khreshchatyk.jpg",
        enemies: [
          { type: "traffic", count: 5 },
          { type: "rain-cloud", count: 4 },
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
    id: "anton",
    name: "Anton",
    difficulty: 8,
    // headImage: "/characters/anton-head.png",
    levels: [
      {
        name: "Akademmistechko",
        mapX: 0.02,
        mapY: 0.42,
        background: "/backgrounds/level/akademmistechko.jpg",
        enemies: [
          { type: "alarm-clock", count: 7 },
          { type: "cant-make-it", count: 5 },
        ],
      },
      {
        name: "Zhytomyrska",
        mapX: 0.06,
        mapY: 0.41,
        background: "/backgrounds/level/zhytomyrska.jpg",
        enemies: [
          { type: "laptop", count: 5 },
          { type: "traffic", count: 4 },
        ],
      },
      {
        name: "Sviatoshyn",
        mapX: 0.1,
        mapY: 0.4,
        background: "/backgrounds/level/sviatoshyn.jpg",
        enemies: [
          { type: "traffic", count: 5 },
          { type: "cant-make-it", count: 5 },
        ],
      },
      {
        name: "Nyvky",
        mapX: 0.15,
        mapY: 0.39,
        background: "/backgrounds/level/nyvky.jpg",
        enemies: [
          { type: "laptop", count: 4 },
          { type: "traffic", count: 4 },
          { type: "rain-cloud", count: 2 },
        ],
      },
      {
        name: "Beresteiska",
        mapX: 0.2,
        mapY: 0.38,
        background: "/backgrounds/level/beresteiska.jpg",
        enemies: [
          { type: "traffic", count: 5 },
          { type: "rain-cloud", count: 3 },
          { type: "couch-potato", count: 2 },
        ],
      },
      {
        name: "Shuliavska",
        mapX: 0.25,
        mapY: 0.38,
        background: "/backgrounds/level/shuliavska.jpg",
        enemies: [
          { type: "laptop", count: 4 },
          { type: "traffic", count: 4 },
          { type: "couch-potato", count: 3 },
        ],
      },
      {
        name: "KPI",
        mapX: 0.3,
        mapY: 0.39,
        background: "/backgrounds/level/kpi.jpg",
        enemies: [
          { type: "traffic", count: 5 },
          { type: "rain-cloud", count: 4 },
          { type: "couch-potato", count: 3 },
        ],
      },
      {
        name: "Universytet",
        mapX: 0.38,
        mapY: 0.42,
        background: "/backgrounds/level/universytet.jpg",
        enemies: [
          { type: "traffic", count: 5 },
          { type: "rain-cloud", count: 4 },
          { type: "couch-potato", count: 4 },
        ],
      },
      {
        name: "Zoloti Vorota",
        mapX: 0.44,
        mapY: 0.44,
        background: "/backgrounds/level/zoloti-vorota.jpg",
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
