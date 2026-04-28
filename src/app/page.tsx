"use client";

import { useGame } from "@/context/GameContext";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TitleScreen() {
  const { dispatch } = useGame();
  const [confirmReset, setConfirmReset] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageOrientation, setImageOrientation] = useState<
    "horizontal" | "vertical"
  >("horizontal");
  const [chicotImages, setChicotImages] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/chicot-images")
      .then((res) => res.json())
      .then((data) => {
        setChicotImages(data.images);
        setCurrentImageIndex(Math.floor(Math.random() * data.images.length));
      });
  }, []);

  useEffect(() => {
    if (chicotImages.length === 0) return;
    // image orientation for beautiful panning effect :thumbsup: amaizing
    const img = new Image();
    img.src = chicotImages[currentImageIndex];
    img.onload = () => {
      setImageOrientation(img.width > img.height ? "horizontal" : "vertical");
    };
  }, [currentImageIndex, chicotImages]);

  useEffect(() => {
    if (chicotImages.length === 0) return;
    const interval = setInterval(() => {
      setCurrentImageIndex(Math.floor(Math.random() * chicotImages.length));
    }, 7000);

    return () => clearInterval(interval);
  }, [chicotImages.length]);

  const handleReset = () => {
    if (!confirmReset) {
      setConfirmReset(true);
      return;
    }
    dispatch({ type: "GAME_OVER" });
    setConfirmReset(false);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-8 p-4 relative overflow-hidden">
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out blur-[5px] scale-125 ${
          imageOrientation === "horizontal"
            ? "animate-pan-horizontal"
            : "animate-pan-vertical"
        }`}
        style={{
          backgroundImage: `url(${chicotImages[currentImageIndex]})`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="text-center relative z-10">
        <h1 className="text-6xl font-bold tracking-tight mb-4">
          ZOLOTI HEROES
        </h1>
        <p className="text-xl text-gray-400 italic">
          Everyone&apos;s busy. Nobody&apos;s coming. Get to Chicot anyway.
        </p>
      </div>

      <div className="flex flex-col gap-4 w-64 relative z-10">
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
        <button
          onClick={handleReset}
          className={`font-bold text-sm py-2 px-8 rounded-lg transition-colors ${
            confirmReset
              ? "bg-red-600 hover:bg-red-500 text-white"
              : "bg-gray-900 hover:bg-gray-800 text-gray-500"
          }`}
        >
          {confirmReset ? "ARE YOU SURE?" : "RESET PROGRESS"}
        </button>
      </div>
    </main>
  );
}
