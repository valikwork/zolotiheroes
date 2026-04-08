"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LeaderboardEntry } from "@/data/types";

interface RankedEntry extends LeaderboardEntry {
  rank: number;
}

export default function LeaderboardPage() {
  const [entries, setEntries] = useState<RankedEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/leaderboard")
      .then((res) => res.json())
      .then((data) => setEntries(data))
      .catch(() => setEntries([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="flex flex-col items-center min-h-screen p-4 pt-12">
      <h1 className="text-4xl font-bold mb-8 text-yellow-400">LEADERBOARD</h1>

      {loading ? (
        <p className="text-gray-400">Loading scores...</p>
      ) : entries.length === 0 ? (
        <p className="text-gray-400">No scores yet. Be the first!</p>
      ) : (
        <div className="w-full max-w-lg">
          <div className="grid grid-cols-[3rem_1fr_5rem_5rem] gap-2 text-gray-500 text-sm mb-2 px-2">
            <span>#</span>
            <span>NAME</span>
            <span className="text-right">SCORE</span>
            <span className="text-right">HERO</span>
          </div>
          {entries.map((entry) => (
            <div
              key={`${entry.name}-${entry.timestamp}`}
              className={`grid grid-cols-[3rem_1fr_5rem_5rem] gap-2 py-3 px-2 rounded-lg mb-1 ${
                entry.rank <= 3 ? "bg-yellow-500/10" : "bg-gray-900"
              }`}
            >
              <span className={`font-bold ${entry.rank <= 3 ? "text-yellow-400" : "text-gray-500"}`}>
                {entry.rank}
              </span>
              <span className="font-bold flex items-center gap-2">
                {entry.name}
                {entry.completed && <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded">COMPLETED</span>}
              </span>
              <span className="text-right text-yellow-400 font-mono">{entry.score.toLocaleString()}</span>
              <span className="text-right text-gray-400 text-sm capitalize">{entry.character}</span>
            </div>
          ))}
        </div>
      )}

      <Link
        href="/"
        className="mt-8 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
      >
        BACK
      </Link>
    </main>
  );
}
