"use client";

import { Character } from "@/data/types";
import Image from "next/image";

interface CharacterCardProps {
  character: Character;
  isCompleted: boolean;
  currentLevel: number; // 0 = not started, 1+ = in progress
  onSelect: () => void;
}

export function CharacterCard({
  character,
  isCompleted,
  currentLevel,
  onSelect,
}: CharacterCardProps) {
  const stars =
    "★".repeat(character.difficulty) + "☆".repeat(8 - character.difficulty);

  return (
    <button
      onClick={isCompleted ? undefined : onSelect}
      disabled={isCompleted}
      className={`relative flex flex-col items-center p-4 rounded-xl border-2 transition-all ${
        isCompleted
          ? "border-green-500 bg-green-500/10 cursor-default opacity-75"
          : "cursor-pointer border-gray-700 bg-gray-900 hover:border-yellow-500 hover:scale-105"
      }`}
    >
      {isCompleted && (
        <div className="absolute top-2 right-2 text-green-400 text-xl">✓</div>
      )}

      <div
        className={`${!character.headImage && "bg-gray-700"} w-20 h-20 rounded-full overflow-hidden mb-3 flex items-center justify-center text-3xl`}
      >
        {character.headImage ? (
          <Image
            src={character.headImage}
            alt={character.name}
            width={80}
            height={80}
            className="w-full h-full object-cover"
            style={{ objectFit: "cover" }}
            unoptimized
          />
        ) : (
          <span className="absolute">{character.name[0]}</span>
        )}
      </div>

      <h3 className="text-lg font-bold">{character.name}</h3>
      <p className="text-yellow-400 text-sm tracking-wider">{stars}</p>
      <p className="text-gray-500 text-sm mt-1">
        {character.levels.length} levels
      </p>
      {isCompleted ? (
        <p className="text-green-400 text-xs mt-1 font-bold">At Chicot!</p>
      ) : currentLevel > 0 ? (
        <p className="text-yellow-400 text-xs mt-1">
          📍{" "}
          {character.levels[currentLevel]?.name ??
            character.levels[character.levels.length - 1].name}{" "}
          ({currentLevel}/{character.levels.length})
        </p>
      ) : (
        <p className="text-gray-600 text-xs mt-1">
          Start: {character.levels[0].name}
        </p>
      )}
    </button>
  );
}
