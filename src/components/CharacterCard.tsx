"use client";

import { Character } from "@/data/types";

interface CharacterCardProps {
  character: Character;
  isCompleted: boolean;
  onSelect: () => void;
}

export function CharacterCard({ character, isCompleted, onSelect }: CharacterCardProps) {
  const stars = "★".repeat(character.difficulty) + "☆".repeat(8 - character.difficulty);

  return (
    <button
      onClick={onSelect}
      className={`relative flex flex-col items-center p-4 rounded-xl border-2 transition-all hover:scale-105 ${
        isCompleted
          ? "border-green-500 bg-green-500/10"
          : "border-gray-700 bg-gray-900 hover:border-yellow-500"
      }`}
    >
      {isCompleted && (
        <div className="absolute top-2 right-2 text-green-400 text-xl">✓</div>
      )}

      {/* Placeholder head — will be replaced with real photo */}
      <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center text-3xl mb-3">
        {character.name[0]}
      </div>

      <h3 className="text-lg font-bold">{character.name}</h3>
      <p className="text-yellow-400 text-sm tracking-wider">{stars}</p>
      <p className="text-gray-500 text-sm mt-1">
        {character.levels.length} levels
      </p>
      <p className="text-gray-600 text-xs mt-1">
        Start: {character.levels[0].name}
      </p>
    </button>
  );
}
