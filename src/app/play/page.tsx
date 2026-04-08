"use client";

import { useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useGame } from "@/context/GameContext";
import { characters, ENEMY_POINTS } from "@/data/characters";
import { GAME_WIDTH, GAME_HEIGHT } from "@/game/config";

export default function PlayPage() {
  const router = useRouter();
  const { state, dispatch } = useGame();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const gameRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const character = characters.find((c) => c.id === state.currentCharacterId);
  const level = character?.levels[state.currentLevelIndex];

  const handleEnemyKilled = useCallback(
    (enemyType: string) => {
      const points = ENEMY_POINTS[enemyType] ?? 100;
      dispatch({ type: "ADD_SCORE", points });
    },
    [dispatch]
  );

  const handlePlayerHit = useCallback(() => {
    dispatch({ type: "TAKE_DAMAGE", amount: 10 });
  }, [dispatch]);

  const handleLevelComplete = useCallback(() => {
    const prevLevel = state.currentLevelIndex;
    dispatch({ type: "COMPLETE_LEVEL" });
    if (character && prevLevel + 1 >= character.levels.length) {
      dispatch({ type: "COMPLETE_CHARACTER" });
      const willBeCompleted = [...state.completedCharacters, character.id];
      if (willBeCompleted.length >= characters.length) {
        router.push("/victory?completed=true");
      } else {
        router.push("/victory");
      }
    } else {
      router.push(`/map?from=${prevLevel}`);
    }
  }, [state, character, dispatch, router]);

  const handlePlayerDied = useCallback(() => {
    dispatch({ type: "GAME_OVER" });
    router.push("/gameover");
  }, [dispatch, router]);

  useEffect(() => {
    if (!containerRef.current || !level) return;
    if (gameRef.current) return;

    import("phaser").then((PhaserModule) => {
      import("@/game/scenes/LevelScene").then(({ LevelScene }) => {
        import("@/game/scenes/HUDScene").then(({ HUDScene }) => {
          if (!containerRef.current) return;

          const config = {
            type: PhaserModule.AUTO,
            width: GAME_WIDTH,
            height: GAME_HEIGHT,
            parent: containerRef.current,
            backgroundColor: "#1a1a2e",
            physics: {
              default: "arcade",
              arcade: { gravity: { x: 0, y: 800 }, debug: false },
            },
            scene: [LevelScene, HUDScene],
            scale: {
              mode: PhaserModule.Scale.FIT,
              autoCenter: PhaserModule.Scale.CENTER_BOTH,
            },
          };

          const game = new PhaserModule.Game(config);
          gameRef.current = game;

          game.scene.start("LevelScene", {
            levelData: {
              enemies: level.enemies,
              platforms: undefined,
              background: level.background,
            },
            health: state.health,
            score: state.score,
            onEnemyKilled: handleEnemyKilled,
            onPlayerHit: handlePlayerHit,
            onLevelComplete: handleLevelComplete,
            onPlayerDied: handlePlayerDied,
          });
        });
      });
    });

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, [
    level,
    state.health,
    state.score,
    handleEnemyKilled,
    handlePlayerHit,
    handleLevelComplete,
    handlePlayerDied,
  ]);

  if (!character || !level) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="text-center mb-2">
        <span className="text-gray-400">{character.name} — </span>
        <span className="text-white font-bold">{level.name}</span>
      </div>
      <div ref={containerRef} className="w-full max-w-[800px] aspect-[4/3]" />
    </main>
  );
}
