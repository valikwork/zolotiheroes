"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useGame } from "@/context/GameContext";
import { Suspense } from "react";

function VictoryContent() {
  const router = useRouter();
  const { state } = useGame();
  const searchParams = useSearchParams();
  const allCompleted = searchParams.get("completed") === "true";

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-8 p-4 text-center">
      {allCompleted ? (
        <>
          <h1 className="text-5xl font-bold text-yellow-400">YOU DID IT!</h1>
          <p className="text-2xl text-gray-300">All heroes made it to Chicot!</p>
          <p className="text-6xl">🎉🍻🎉</p>
          <p className="text-xl text-gray-400">Everyone&apos;s finally here. Was it really that hard?</p>
          <p className="text-3xl text-yellow-400 font-bold">Final Score: {state.score}</p>
        </>
      ) : (
        <>
          <h1 className="text-5xl font-bold text-green-400">MADE IT!</h1>
          <p className="text-xl text-gray-300">Character reached Chicot! 🎉</p>
          <p className="text-2xl text-yellow-400">Score: {state.score} | HP: {state.health}</p>
          <p className="text-gray-400">
            {state.completedCharacters.length} / 8 heroes at Chicot
          </p>
        </>
      )}

      <div className="flex gap-4">
        {!allCompleted && (
          <button
            onClick={() => router.push("/select")}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg transition-colors"
          >
            NEXT HERO
          </button>
        )}
        <button
          onClick={() => router.push("/leaderboard")}
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
        >
          LEADERBOARD
        </button>
        <button
          onClick={() => router.push("/")}
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
        >
          TITLE
        </button>
      </div>
    </main>
  );
}

export default function VictoryPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <VictoryContent />
    </Suspense>
  );
}
