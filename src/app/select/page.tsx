"use client";

import { useRouter } from "next/navigation";
import { characters } from "@/data/characters";
import { CharacterCard } from "@/components/CharacterCard";
import { useGame } from "@/context/GameContext";

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
      <p className="text-gray-400 mb-8">Who&apos;s trying to get to Chicot today?</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl w-full">
        {characters.map((char) => (
          <CharacterCard
            key={char.id}
            character={char}
            isCompleted={state.completedCharacters.includes(char.id)}
            onSelect={() => handleSelect(char.id)}
          />
        ))}
      </div>

      <div className="mt-8 text-gray-500 text-sm">
        Score: {state.score} | HP: {state.health}
      </div>
    </main>
  );
}
