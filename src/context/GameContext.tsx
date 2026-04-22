"use client";

import { createContext, useContext, useReducer, useEffect, ReactNode } from "react";
import { GameState } from "@/data/types";
import { MAX_HEALTH } from "@/data/characters";

const STORAGE_KEY = "zoloti-heroes-state";

const initialState: GameState = {
  currentCharacterId: null,
  currentLevelIndex: 0,
  health: MAX_HEALTH,
  score: 0,
  completedCharacters: [],
  characterProgress: {},
};

type Action =
  | { type: "SELECT_CHARACTER"; characterId: string }
  | { type: "COMPLETE_LEVEL" }
  | { type: "COMPLETE_CHARACTER" }
  | { type: "TAKE_DAMAGE"; amount: number }
  | { type: "ADD_SCORE"; points: number }
  | { type: "GAME_OVER" }
  | { type: "LOAD_STATE"; state: GameState };

function gameReducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case "SELECT_CHARACTER": {
      // Save current character's progress before switching
      const updatedProgress = { ...state.characterProgress };
      if (state.currentCharacterId) {
        updatedProgress[state.currentCharacterId] = state.currentLevelIndex;
      }
      // Restore saved progress for selected character, or start at 0
      const savedLevel = updatedProgress[action.characterId] ?? 0;
      return {
        ...state,
        currentCharacterId: action.characterId,
        currentLevelIndex: savedLevel,
        characterProgress: updatedProgress,
      };
    }
    case "COMPLETE_LEVEL": {
      const newIndex = state.currentLevelIndex + 1;
      return {
        ...state,
        currentLevelIndex: newIndex,
        characterProgress: {
          ...state.characterProgress,
          ...(state.currentCharacterId ? { [state.currentCharacterId]: newIndex } : {}),
        },
      };
    }
    case "COMPLETE_CHARACTER": {
      const { [state.currentCharacterId!]: _, ...restProgress } = state.characterProgress;
      return {
        ...state,
        completedCharacters: [...state.completedCharacters, state.currentCharacterId!],
        currentCharacterId: null,
        currentLevelIndex: 0,
        characterProgress: restProgress,
      };
    }
    case "TAKE_DAMAGE":
      return { ...state, health: Math.max(0, state.health - action.amount) };
    case "ADD_SCORE":
      return { ...state, score: state.score + action.points };
    case "GAME_OVER":
      return { ...initialState };
    case "LOAD_STATE":
      return action.state;
    default:
      return state;
  }
}

interface GameContextValue {
  state: GameState;
  dispatch: React.Dispatch<Action>;
}

const GameContext = createContext<GameContextValue | null>(null);

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  // Hydrate from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as GameState;
        dispatch({ type: "LOAD_STATE", state: parsed });
      } catch {
        // Invalid data, start fresh
      }
    }
  }, []);

  // Persist to localStorage on every state change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
}
