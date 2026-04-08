export const GAME_WIDTH = 800;
export const GAME_HEIGHT = 600;
export const GROUND_Y = 560;

export interface LevelData {
  enemies: { type: string; count: number }[];
  platforms?: { x: number; y: number; width: number }[];
  background?: string;
}
