"use client";

import Link from "next/link";

export default function TitleScreen() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-8 p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold tracking-tight mb-4">
          ZOLOTI HEROES
        </h1>
        <p className="text-xl text-gray-400 italic">
          Everyone&apos;s busy. Nobody&apos;s coming. Get to Chicot anyway.
        </p>
      </div>

      <div className="flex flex-col gap-4 w-64">
        <Link
          href="/select"
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-xl py-4 px-8 rounded-lg text-center transition-colors"
        >
          START
        </Link>
        <Link
          href="/leaderboard"
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold text-lg py-3 px-8 rounded-lg text-center transition-colors"
        >
          LEADERBOARD
        </Link>
      </div>
    </main>
  );
}
