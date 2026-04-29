"use client";

import { useGame } from "@/context/GameContext";
import { characters, ENEMY_POINTS } from "@/data/characters";
import { GAME_HEIGHT, GAME_WIDTH } from "@/game/config";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function PlayPage() {
  const router = useRouter();
  const { state, dispatch } = useGame();
  const gameRef = useRef<Phaser.Game | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Use refs for callbacks so Phaser always calls the latest version
  // without needing to recreate the game on every state change
  const stateRef = useRef(state);
  const routerRef = useRef(router);
  const dispatchRef = useRef(dispatch);
  stateRef.current = state;
  routerRef.current = router;
  dispatchRef.current = dispatch;

  const character = characters.find((c) => c.id === state.currentCharacterId);
  const level = character?.levels[state.currentLevelIndex];
  const characterRef = useRef(character);
  characterRef.current = character;

  // Capture initial values for game creation (don't change after mount)
  const initialHealthRef = useRef(state.health);
  const initialScoreRef = useRef(state.score);
  const initialLevelRef = useRef(level);

  useEffect(() => {
    const currentLevel = initialLevelRef.current;
    if (!containerRef.current || !currentLevel) return;
    if (gameRef.current) return;

    let cancelled = false;

    import("phaser").then((PhaserModule) => {
      import("@/game/scenes/LevelScene").then(({ LevelScene }) => {
        import("@/game/scenes/HUDScene").then(({ HUDScene }) => {
          if (!containerRef.current || cancelled) return;

          const config = {
            type: PhaserModule.AUTO,
            width: GAME_WIDTH,
            height: GAME_HEIGHT,
            parent: containerRef.current,
            backgroundColor: "#0a0a0f",
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
              enemies: currentLevel.enemies,
              platforms: undefined,
              background: currentLevel.background,
            },
            health: initialHealthRef.current,
            score: initialScoreRef.current,
            headImage: characterRef.current?.headImage,
            onEnemyKilled: (enemyType: string) => {
              const points = ENEMY_POINTS[enemyType] ?? 100;
              dispatchRef.current({ type: "ADD_SCORE", points });
            },
            onPlayerHit: () => {
              dispatchRef.current({ type: "TAKE_DAMAGE", amount: 10 });
            },
            onLevelComplete: () => {
              const s = stateRef.current;
              const char = characterRef.current;
              const prevLevel = s.currentLevelIndex;
              dispatchRef.current({ type: "COMPLETE_LEVEL" });
              if (char && prevLevel + 1 >= char.levels.length) {
                dispatchRef.current({ type: "COMPLETE_CHARACTER" });
                const willBeCompleted = [...s.completedCharacters, char.id];
                if (willBeCompleted.length >= characters.length) {
                  routerRef.current.push("/victory?completed=true");
                } else {
                  routerRef.current.push("/victory");
                }
              } else {
                routerRef.current.push(`/map?from=${prevLevel}`);
              }
            },
            onPlayerDied: () => {
              const s = stateRef.current;
              const finalScore = s.score;
              const charId = s.currentCharacterId ?? "unknown";
              dispatchRef.current({ type: "GAME_OVER" });
              routerRef.current.push(
                `/gameover?score=${finalScore}&character=${encodeURIComponent(charId)}`,
              );
            },
            onAbandon: () => {
              routerRef.current.push("/select");
            },
          });
        });
      });
    });

    return () => {
      cancelled = true;
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, []); // Run once on mount only — callbacks use refs for latest state

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
