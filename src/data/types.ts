export interface EnemySpawn {
  type: string;
  count: number;
}

export interface Platform {
  x: number; // percentage 0-1 of level width
  y: number; // percentage 0-1 of level height
  width: number; // percentage 0-1 of level width
}

export interface Level {
  name: string;
  mapX: number; // percentage 0-1 of map image width
  mapY: number; // percentage 0-1 of map image height
  background: string; // path to blurry location photo
  enemies: EnemySpawn[];
  platforms?: Platform[]; // optional — auto-generated if omitted
}

export interface Character {
  id: string;
  name: string;
  difficulty: number; // 1-8
  headImage?: string; // path to head photo
  levels: Level[];
}

export interface GameState {
  currentCharacterId: string | null;
  currentLevelIndex: number;
  health: number;
  score: number;
  completedCharacters: string[];
  characterProgress: Record<string, number>; // characterId -> levelIndex
}

export interface LeaderboardEntry {
  name: string;
  score: number;
  character: string;
  completed: boolean;
  timestamp: number;
}
