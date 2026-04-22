"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function GameOverContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const finalScore = parseInt(searchParams.get("score") ?? "0", 10);
  const characterId = searchParams.get("character") ?? "unknown";
  const [name, setName] = useState("");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  async function handleSave() {
    if (!name.trim()) return;
    setSaving(true);

    try {
      await fetch("/api/leaderboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim().toUpperCase(),
          score: finalScore,
          character: characterId,
          completed: false,
          timestamp: Date.now(),
        }),
      });
      setSaved(true);
    } catch {
      setSaved(true);
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 p-4 text-center">
      <h1 className="text-5xl font-bold text-red-500">GAME OVER</h1>
      <p className="text-2xl text-gray-400">You didn&apos;t make it to Chicot...</p>
      <p className="text-4xl text-yellow-400 font-bold">Score: {finalScore}</p>

      {!saved ? (
        <div className="flex flex-col items-center gap-4">
          <p className="text-gray-300 text-lg">ENTER YOUR NAME</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value.slice(0, 10))}
            placeholder="YOUR NAME"
            maxLength={10}
            className="bg-gray-900 border-2 border-yellow-500 text-yellow-400 text-center text-2xl font-bold py-3 px-6 rounded-lg w-64 uppercase tracking-widest focus:outline-none focus:border-yellow-300"
            autoFocus
            onKeyDown={(e) => e.key === "Enter" && handleSave()}
          />
          <button
            onClick={handleSave}
            disabled={saving || !name.trim()}
            className="bg-yellow-500 hover:bg-yellow-400 disabled:bg-gray-700 text-black font-bold py-3 px-8 rounded-lg transition-colors"
          >
            {saving ? "SAVING..." : "SAVE SCORE"}
          </button>
        </div>
      ) : (
        <p className="text-green-400 text-lg">Score saved!</p>
      )}

      <div className="flex gap-4 mt-4">
        <button
          onClick={() => router.push("/")}
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
        >
          TRY AGAIN
        </button>
        <button
          onClick={() => router.push("/leaderboard")}
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
        >
          LEADERBOARD
        </button>
      </div>
    </main>
  );
}

export default function GameOverPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <GameOverContent />
    </Suspense>
  );
}
