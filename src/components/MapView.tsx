"use client";

import { Character } from "@/data/types";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface MapViewProps {
  character: Character;
  currentLevelIndex: number;
  onStartLevel: () => void;
  animateFromLevel?: number;
}

export function MapView({
  character,
  currentLevelIndex,
  onStartLevel,
  animateFromLevel,
}: MapViewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [animationDone, setAnimationDone] = useState(
    animateFromLevel === undefined,
  );
  const [mapLoaded, setMapLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = container.clientWidth;
    const height = container.clientHeight;
    canvas.width = width;
    canvas.height = height;

    const levels = character.levels;
    const pins = levels.map((level) => ({
      x: level.mapX * width,
      y: level.mapY * height,
      name: level.name,
    }));

    function drawMap() {
      ctx!.clearRect(0, 0, width, height);

      // Draw path lines between all pins
      ctx!.strokeStyle = "#555";
      ctx!.lineWidth = 2;
      ctx!.setLineDash([8, 4]);
      for (let i = 0; i < pins.length - 1; i++) {
        ctx!.beginPath();
        ctx!.moveTo(pins[i].x, pins[i].y);
        ctx!.lineTo(pins[i + 1].x, pins[i + 1].y);
        ctx!.stroke();
      }
      ctx!.setLineDash([]);

      // Draw completed path in red
      ctx!.strokeStyle = "#ef4444";
      ctx!.lineWidth = 3;
      for (let i = 0; i < currentLevelIndex && i < pins.length - 1; i++) {
        ctx!.beginPath();
        ctx!.moveTo(pins[i].x, pins[i].y);
        ctx!.lineTo(pins[i + 1].x, pins[i + 1].y);
        ctx!.stroke();
      }

      // Draw pins
      for (let i = 0; i < pins.length; i++) {
        const pin = pins[i];
        const isCompleted = i < currentLevelIndex;
        const isCurrent = i === currentLevelIndex;
        const isChicot = i === pins.length - 1;

        ctx!.beginPath();
        ctx!.arc(pin.x, pin.y, isChicot ? 14 : 10, 0, Math.PI * 2);
        ctx!.fillStyle = isCompleted
          ? "#22c55e"
          : isCurrent
            ? "#eab308"
            : isChicot
              ? "#f59e0b"
              : "#374151";
        ctx!.fill();
        ctx!.strokeStyle = isChicot ? "#f59e0b" : "#fff";
        ctx!.lineWidth = 2;
        ctx!.stroke();

        if (isCompleted) {
          ctx!.fillStyle = "#fff";
          ctx!.font = "bold 12px sans-serif";
          ctx!.textAlign = "center";
          ctx!.textBaseline = "middle";
          ctx!.fillText("✓", pin.x, pin.y);
        }

        if (isCurrent && animationDone) {
          const pulse = Math.sin(Date.now() / 300) * 4 + 16;
          ctx!.beginPath();
          ctx!.arc(pin.x, pin.y, pulse, 0, Math.PI * 2);
          ctx!.strokeStyle = "rgba(234, 179, 8, 0.4)";
          ctx!.lineWidth = 2;
          ctx!.stroke();
        }

        ctx!.fillStyle = "#fff";
        ctx!.font = "12px sans-serif";
        ctx!.textAlign = "center";
        ctx!.fillText(pin.name, pin.x, pin.y + 24);
      }
    }

    if (
      animateFromLevel !== undefined &&
      animateFromLevel < currentLevelIndex
    ) {
      const fromPin = pins[animateFromLevel];
      const toPin = pins[currentLevelIndex];
      const duration = 1500;
      const startTime = Date.now();

      function animateTravel() {
        const progress = Math.min(1, (Date.now() - startTime) / duration);
        drawMap();

        const currentX = fromPin.x + (toPin.x - fromPin.x) * progress;
        const currentY = fromPin.y + (toPin.y - fromPin.y) * progress;

        ctx!.strokeStyle = "#ef4444";
        ctx!.lineWidth = 3;
        ctx!.setLineDash([6, 3]);
        ctx!.beginPath();
        ctx!.moveTo(fromPin.x, fromPin.y);
        ctx!.lineTo(currentX, currentY);
        ctx!.stroke();
        ctx!.setLineDash([]);

        ctx!.beginPath();
        ctx!.arc(currentX, currentY, 6, 0, Math.PI * 2);
        ctx!.fillStyle = "#eab308";
        ctx!.fill();

        if (progress < 1) {
          requestAnimationFrame(animateTravel);
        } else {
          setAnimationDone(true);
        }
      }

      animateTravel();
    } else {
      let animFrame: number;
      function loop() {
        drawMap();
        animFrame = requestAnimationFrame(loop);
      }
      loop();
      return () => cancelAnimationFrame(animFrame);
    }
  }, [character, currentLevelIndex, animateFromLevel, animationDone]);

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[500px]">
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <Image
          src={character.mapImage}
          alt={`${character.name} map`}
          className="w-full h-full object-cover opacity-60"
          onLoad={() => setMapLoaded(true)}
          onError={(e) => {
            e.currentTarget.src = "/map/kyiv.svg";
            setMapLoaded(true);
          }}
          unoptimized
          width={500}
          height={200}
        />
        <canvas
          ref={canvasRef}
          className={`${!mapLoaded ? "hidden" : ""} absolute inset-0 w-full h-full`}
        />
        {!mapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-xl font-bold">Loading map...</p>
          </div>
        )}
      </div>

      {animationDone && mapLoaded && (
        <button
          onClick={onStartLevel}
          className="absolute -bottom-18 left-1/2 -translate-x-1/2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg transition-colors text-lg"
        >
          START LEVEL: {character.levels[currentLevelIndex]?.name ?? "Chicot"}
        </button>
      )}
    </div>
  );
}
