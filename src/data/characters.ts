import { Character } from "./types";

export const MAX_HEALTH = 100;

export const ENEMY_POINTS: Record<string, number> = {
  "alarm-clock": 100,
  "laptop": 150,
  "traffic": 200,
  "cant-make-it": 75,
  "rain-cloud": 175,
  "couch-potato": 250,
};

export const characters: Character[] = [
  {
    id: "valentyn",
    name: "Valentyn",
    difficulty: 1,
    headImage: "/characters/valentyn-head.png",
    levels: [
      {
        name: "Podil",
        mapX: 0.38,
        mapY: 0.28,
        background: "/backgrounds/podil.jpg",
        enemies: [
          { type: "alarm-clock", count: 4 },
          { type: "cant-make-it", count: 3 },
        ],
      },
      {
        name: "Kontraktova",
        mapX: 0.42,
        mapY: 0.35,
        background: "/backgrounds/kontraktova.jpg",
        enemies: [
          { type: "alarm-clock", count: 3 },
          { type: "laptop", count: 3 },
          { type: "cant-make-it", count: 2 },
        ],
      },
      {
        name: "Chicot",
        mapX: 0.50,
        mapY: 0.45,
        background: "/backgrounds/chicot.jpg",
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
    difficulty: 2,
    headImage: "/characters/victor-head.png",
    levels: [
      {
        name: "Obolon",
        mapX: 0.35, mapY: 0.15,
        background: "/backgrounds/obolon.jpg",
        enemies: [{ type: "alarm-clock", count: 5 }, { type: "cant-make-it", count: 3 }],
      },
      {
        name: "Pochaina",
        mapX: 0.37, mapY: 0.22,
        background: "/backgrounds/pochaina.jpg",
        enemies: [{ type: "alarm-clock", count: 3 }, { type: "laptop", count: 3 }, { type: "traffic", count: 2 }],
      },
      {
        name: "Podil",
        mapX: 0.38, mapY: 0.28,
        background: "/backgrounds/podil.jpg",
        enemies: [{ type: "laptop", count: 4 }, { type: "rain-cloud", count: 2 }],
      },
      {
        name: "Chicot",
        mapX: 0.50, mapY: 0.45,
        background: "/backgrounds/chicot.jpg",
        enemies: [{ type: "laptop", count: 4 }, { type: "traffic", count: 3 }, { type: "rain-cloud", count: 2 }],
      },
    ],
  },
  {
    id: "artem",
    name: "Artem",
    difficulty: 3,
    headImage: "/characters/artem-head.png",
    levels: [
      { name: "Lukianivska", mapX: 0.30, mapY: 0.38, background: "/backgrounds/lukianivska.jpg", enemies: [{ type: "alarm-clock", count: 4 }, { type: "laptop", count: 3 }] },
      { name: "Lvivska Brama", mapX: 0.34, mapY: 0.35, background: "/backgrounds/lvivska-brama.jpg", enemies: [{ type: "laptop", count: 4 }, { type: "cant-make-it", count: 4 }] },
      { name: "Zoloti Vorota", mapX: 0.40, mapY: 0.40, background: "/backgrounds/zoloti-vorota.jpg", enemies: [{ type: "traffic", count: 3 }, { type: "rain-cloud", count: 3 }] },
      { name: "Khreshchatyk", mapX: 0.46, mapY: 0.43, background: "/backgrounds/khreshchatyk.jpg", enemies: [{ type: "laptop", count: 3 }, { type: "traffic", count: 3 }, { type: "couch-potato", count: 2 }] },
      { name: "Chicot", mapX: 0.50, mapY: 0.45, background: "/backgrounds/chicot.jpg", enemies: [{ type: "traffic", count: 4 }, { type: "rain-cloud", count: 3 }, { type: "couch-potato", count: 2 }] },
    ],
  },
  {
    id: "dima",
    name: "Dima",
    difficulty: 4,
    headImage: "/characters/dima-head.png",
    levels: [
      { name: "Lybidska", mapX: 0.48, mapY: 0.62, background: "/backgrounds/lybidska.jpg", enemies: [{ type: "alarm-clock", count: 5 }, { type: "laptop", count: 3 }] },
      { name: "Palats Sportu", mapX: 0.47, mapY: 0.55, background: "/backgrounds/palats-sportu.jpg", enemies: [{ type: "laptop", count: 4 }, { type: "traffic", count: 3 }] },
      { name: "Olimpiiska", mapX: 0.50, mapY: 0.52, background: "/backgrounds/olimpiiska.jpg", enemies: [{ type: "traffic", count: 3 }, { type: "cant-make-it", count: 5 }, { type: "rain-cloud", count: 2 }] },
      { name: "Maidan", mapX: 0.49, mapY: 0.47, background: "/backgrounds/maidan.jpg", enemies: [{ type: "laptop", count: 3 }, { type: "traffic", count: 3 }, { type: "couch-potato", count: 3 }] },
      { name: "Chicot", mapX: 0.50, mapY: 0.45, background: "/backgrounds/chicot.jpg", enemies: [{ type: "traffic", count: 4 }, { type: "rain-cloud", count: 3 }, { type: "couch-potato", count: 3 }] },
    ],
  },
  {
    id: "karina",
    name: "Karina",
    difficulty: 5,
    headImage: "/characters/karina-head.png",
    levels: [
      { name: "Pozniaky", mapX: 0.72, mapY: 0.75, background: "/backgrounds/pozniaky.jpg", enemies: [{ type: "alarm-clock", count: 5 }, { type: "cant-make-it", count: 5 }] },
      { name: "Osokorky", mapX: 0.68, mapY: 0.70, background: "/backgrounds/osokorky.jpg", enemies: [{ type: "laptop", count: 4 }, { type: "traffic", count: 3 }] },
      { name: "Slavutych", mapX: 0.63, mapY: 0.65, background: "/backgrounds/slavutych.jpg", enemies: [{ type: "traffic", count: 4 }, { type: "rain-cloud", count: 3 }] },
      { name: "Pechersk", mapX: 0.55, mapY: 0.55, background: "/backgrounds/pechersk.jpg", enemies: [{ type: "laptop", count: 3 }, { type: "traffic", count: 3 }, { type: "couch-potato", count: 3 }] },
      { name: "Arsenalna", mapX: 0.52, mapY: 0.48, background: "/backgrounds/arsenalna.jpg", enemies: [{ type: "traffic", count: 4 }, { type: "rain-cloud", count: 3 }, { type: "couch-potato", count: 2 }] },
      { name: "Chicot", mapX: 0.50, mapY: 0.45, background: "/backgrounds/chicot.jpg", enemies: [{ type: "traffic", count: 5 }, { type: "rain-cloud", count: 3 }, { type: "couch-potato", count: 3 }] },
    ],
  },
  {
    id: "lera",
    name: "Lera",
    difficulty: 6,
    headImage: "/characters/lera-head.png",
    levels: [
      { name: "Sviatoshyn", mapX: 0.08, mapY: 0.42, background: "/backgrounds/sviatoshyn.jpg", enemies: [{ type: "alarm-clock", count: 6 }, { type: "cant-make-it", count: 4 }] },
      { name: "Nyvky", mapX: 0.13, mapY: 0.40, background: "/backgrounds/nyvky.jpg", enemies: [{ type: "laptop", count: 5 }, { type: "traffic", count: 3 }] },
      { name: "Beresteiska", mapX: 0.18, mapY: 0.39, background: "/backgrounds/beresteiska.jpg", enemies: [{ type: "traffic", count: 4 }, { type: "cant-make-it", count: 5 }] },
      { name: "Shuliavska", mapX: 0.22, mapY: 0.38, background: "/backgrounds/shuliavska.jpg", enemies: [{ type: "laptop", count: 4 }, { type: "rain-cloud", count: 3 }, { type: "couch-potato", count: 2 }] },
      { name: "KPI", mapX: 0.27, mapY: 0.39, background: "/backgrounds/kpi.jpg", enemies: [{ type: "traffic", count: 4 }, { type: "rain-cloud", count: 3 }, { type: "couch-potato", count: 3 }] },
      { name: "Universytet", mapX: 0.38, mapY: 0.42, background: "/backgrounds/universytet.jpg", enemies: [{ type: "laptop", count: 3 }, { type: "traffic", count: 4 }, { type: "couch-potato", count: 3 }] },
      { name: "Chicot", mapX: 0.50, mapY: 0.45, background: "/backgrounds/chicot.jpg", enemies: [{ type: "traffic", count: 5 }, { type: "rain-cloud", count: 4 }, { type: "couch-potato", count: 3 }] },
    ],
  },
  {
    id: "ambal",
    name: "Ambal",
    difficulty: 7,
    headImage: "/characters/ambal-head.png",
    levels: [
      { name: "Boryspil", mapX: 0.92, mapY: 0.72, background: "/backgrounds/boryspil.jpg", enemies: [{ type: "alarm-clock", count: 6 }, { type: "cant-make-it", count: 6 }] },
      { name: "Vydubychi", mapX: 0.82, mapY: 0.68, background: "/backgrounds/vydubychi.jpg", enemies: [{ type: "laptop", count: 5 }, { type: "traffic", count: 4 }] },
      { name: "Druzhby Narodiv", mapX: 0.72, mapY: 0.63, background: "/backgrounds/druzhby-narodiv.jpg", enemies: [{ type: "traffic", count: 5 }, { type: "rain-cloud", count: 3 }] },
      { name: "Pecherska", mapX: 0.60, mapY: 0.55, background: "/backgrounds/pecherska.jpg", enemies: [{ type: "laptop", count: 4 }, { type: "traffic", count: 3 }, { type: "couch-potato", count: 3 }] },
      { name: "Klovska", mapX: 0.53, mapY: 0.50, background: "/backgrounds/klovska.jpg", enemies: [{ type: "traffic", count: 4 }, { type: "rain-cloud", count: 4 }, { type: "couch-potato", count: 3 }] },
      { name: "Palats Sportu", mapX: 0.47, mapY: 0.48, background: "/backgrounds/palats-sportu.jpg", enemies: [{ type: "laptop", count: 3 }, { type: "traffic", count: 5 }, { type: "couch-potato", count: 3 }] },
      { name: "Khreshchatyk", mapX: 0.48, mapY: 0.46, background: "/backgrounds/khreshchatyk.jpg", enemies: [{ type: "traffic", count: 5 }, { type: "rain-cloud", count: 4 }, { type: "couch-potato", count: 3 }] },
      { name: "Chicot", mapX: 0.50, mapY: 0.45, background: "/backgrounds/chicot.jpg", enemies: [{ type: "traffic", count: 6 }, { type: "rain-cloud", count: 4 }, { type: "couch-potato", count: 4 }] },
    ],
  },
  {
    id: "anton",
    name: "Anton",
    difficulty: 8,
    headImage: "/characters/anton-head.png",
    levels: [
      { name: "Akademmistechko", mapX: 0.02, mapY: 0.42, background: "/backgrounds/akademmistechko.jpg", enemies: [{ type: "alarm-clock", count: 7 }, { type: "cant-make-it", count: 5 }] },
      { name: "Zhytomyrska", mapX: 0.06, mapY: 0.41, background: "/backgrounds/zhytomyrska.jpg", enemies: [{ type: "laptop", count: 5 }, { type: "traffic", count: 4 }] },
      { name: "Sviatoshyn", mapX: 0.10, mapY: 0.40, background: "/backgrounds/sviatoshyn.jpg", enemies: [{ type: "traffic", count: 5 }, { type: "cant-make-it", count: 5 }] },
      { name: "Nyvky", mapX: 0.15, mapY: 0.39, background: "/backgrounds/nyvky.jpg", enemies: [{ type: "laptop", count: 4 }, { type: "traffic", count: 4 }, { type: "rain-cloud", count: 2 }] },
      { name: "Beresteiska", mapX: 0.20, mapY: 0.38, background: "/backgrounds/beresteiska.jpg", enemies: [{ type: "traffic", count: 5 }, { type: "rain-cloud", count: 3 }, { type: "couch-potato", count: 2 }] },
      { name: "Shuliavska", mapX: 0.25, mapY: 0.38, background: "/backgrounds/shuliavska.jpg", enemies: [{ type: "laptop", count: 4 }, { type: "traffic", count: 4 }, { type: "couch-potato", count: 3 }] },
      { name: "KPI", mapX: 0.30, mapY: 0.39, background: "/backgrounds/kpi.jpg", enemies: [{ type: "traffic", count: 5 }, { type: "rain-cloud", count: 4 }, { type: "couch-potato", count: 3 }] },
      { name: "Universytet", mapX: 0.38, mapY: 0.42, background: "/backgrounds/universytet.jpg", enemies: [{ type: "traffic", count: 5 }, { type: "rain-cloud", count: 4 }, { type: "couch-potato", count: 4 }] },
      { name: "Zoloti Vorota", mapX: 0.44, mapY: 0.44, background: "/backgrounds/zoloti-vorota.jpg", enemies: [{ type: "laptop", count: 3 }, { type: "traffic", count: 5 }, { type: "rain-cloud", count: 4 }, { type: "couch-potato", count: 4 }] },
      { name: "Chicot", mapX: 0.50, mapY: 0.45, background: "/backgrounds/chicot.jpg", enemies: [{ type: "traffic", count: 6 }, { type: "rain-cloud", count: 5 }, { type: "couch-potato", count: 5 }] },
    ],
  },
];
