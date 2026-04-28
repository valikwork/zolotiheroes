"use client";

import { MapView } from "@/components/MapView";
import { useGame } from "@/context/GameContext";
import { characters } from "@/data/characters";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function MapContent() {
  const router = useRouter();
  const { state } = useGame();
  const searchParams = useSearchParams();
  const animateFrom = searchParams.get("from");

  const character = characters.find((c) => c.id === state.currentCharacterId);

  if (!character) {
    router.push("/select");
    return null;
  }

  if (state.currentLevelIndex >= character.levels.length) {
    router.push("/victory");
    return null;
  }

  function handleStartLevel() {
    router.push("/play");
  }

  return (
    <main className="flex flex-col items-center min-h-screen p-4">
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={() => router.push("/select")}
          className="text-gray-500 hover:text-white transition-colors text-sm"
        >
          ← BACK
        </button>
        <h1 className="text-2xl font-bold">
          {character.name}&apos;s Route to Chicot
        </h1>
        <span className="text-gray-400">
          HP: {state.health} | Score: {state.score}
        </span>
      </div>
      <div className="w-full max-w-5xl flex-1">
        <MapView
          character={character}
          currentLevelIndex={state.currentLevelIndex}
          onStartLevel={handleStartLevel}
          animateFromLevel={
            animateFrom !== null ? parseInt(animateFrom, 10) : undefined
          }
        />
      </div>
    </main>
  );
}

export default function MapPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          Loading map...
        </div>
      }
    >
      <MapContent />
    </Suspense>
  );
}
