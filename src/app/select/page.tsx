"use client";

import { CharacterCard } from "@/components/CharacterCard";
import { useGame } from "@/context/GameContext";
import { characters } from "@/data/characters";
import { useRouter } from "next/navigation";

export default function SelectScreen() {
  const router = useRouter();
  const { state, dispatch } = useGame();

  function handleSelect(characterId: string) {
    dispatch({ type: "SELECT_CHARACTER", characterId });
    router.push("/map");
  }

  return (
    <main className="flex flex-col items-center min-h-screen p-4 pt-12">
      <h1 className="text-4xl font-bold mb-2">CHOOSE YOUR HERO</h1>
      <p className="text-gray-400 mb-8">
        Who&apos;s trying to get to Chicot today?
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl w-full">
        {characters.map((char) => (
          <CharacterCard
            key={char.id}
            character={char}
            isCompleted={state.completedCharacters.includes(char.id)}
            currentLevel={state.characterProgress[char.id] ?? 0}
            onSelect={() => handleSelect(char.id)}
          />
        ))}
      </div>

      <div className="mt-8 text-gray-500 text-sm">
        Score: {state.score} | HP: {state.health}
      </div>

      <button
        onClick={() => router.push("/")}
        className="cursor-pointer mt-4 px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
      >
        Back to Main Menu
      </button>
    </main>
  );
}
