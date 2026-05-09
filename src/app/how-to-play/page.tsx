"use client";

import Link from "next/link";

export default function HowToPlay() {
  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            HOW TO PLAY
          </h1>
          <Link
            href="/"
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold text-sm py-2 px-4 rounded-lg transition-colors"
          >
            ← BACK
          </Link>
        </div>

        <p className="text-gray-400 italic mb-10">
          Everyone&apos;s busy. Nobody&apos;s coming. Get to Chicot anyway.
        </p>

        {/* Goal */}
        <Section title="GOAL">
          <p className="text-gray-300">
            Defeat all enemies on each level to reach Chicot. Survive
            distractions, keep your HP, climb the leaderboard.
          </p>
        </Section>

        {/* Desktop controls schematic */}
        <Section title="DESKTOP CONTROLS">
          <KeyboardSchematic />
          <ul className="text-gray-300 space-y-1 mt-4 text-sm">
            <li>
              <Kbd>A</Kbd> / <Kbd>←</Kbd> — move left
            </li>
            <li>
              <Kbd>D</Kbd> / <Kbd>→</Kbd> — move right
            </li>
            <li>
              <Kbd>W</Kbd> / <Kbd>SPACE</Kbd> — jump
            </li>
            <li>
              <Kbd>MOUSE</Kbd> — aim
            </li>
            <li>
              <Kbd>CLICK</Kbd> — fire
            </li>
            <li>
              <Kbd>ESC</Kbd> — pause
            </li>
          </ul>
        </Section>

        {/* Mobile controls schematic */}
        {/* <Section title="MOBILE CONTROLS">
          <MobileSchematic />
          <ul className="text-gray-300 space-y-1 mt-4 text-sm">
            <li><b>Top-left zone</b> — tap to jump</li>
            <li><b>Bottom-left zone</b> — slide left/right to move</li>
            <li><b>Right half</b> — drag to aim &amp; auto-fire</li>
          </ul>
        </Section> */}

        {/* Gameplay schematic */}
        <Section title="GAMEPLAY">
          <GameplaySchematic />
          <ul className="text-gray-300 space-y-1 mt-4 text-sm">
            <li>Enemies bounce around the screen — shoot them.</li>
            <li>
              Touching an enemy costs HP. Brief invincibility after each hit.
            </li>
            <li>Clear all enemies to advance.</li>
            <li>Some enemies (e.g. couch-potato) take multiple hits.</li>
            <li>HP at 0 = game over. Score persists to leaderboard.</li>
          </ul>
        </Section>

        <div className="flex justify-center mt-10">
          <Link
            href="/select"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-xl py-4 px-10 rounded-lg transition-colors"
          >
            START
          </Link>
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-yellow-400">{title}</h2>
      {children}
    </section>
  );
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="px-2 py-0.5 bg-gray-800 border border-gray-600 rounded text-xs font-mono">
      {children}
    </kbd>
  );
}

function KeyboardSchematic() {
  return (
    <svg
      viewBox="0 0 400 180"
      className="w-full max-w-md bg-gray-900 rounded-lg p-2"
    >
      {/* WASD cluster */}
      <Key x={70} y={20} label="W" hint="JUMP" />
      <Key x={20} y={70} label="A" hint="LEFT" />
      <Key x={70} y={70} label="S" />
      <Key x={120} y={70} label="D" hint="RIGHT" />

      {/* Space */}
      <rect
        x={20}
        y={130}
        width={150}
        height={30}
        rx={4}
        fill="#1f2937"
        stroke="#4b5563"
      />
      <text
        x={95}
        y={150}
        textAnchor="middle"
        fill="#fbbf24"
        fontSize="12"
        fontFamily="monospace"
      >
        SPACE = JUMP
      </text>

      {/* Mouse */}
      <g transform="translate(260,30)">
        <rect
          x={0}
          y={0}
          width={60}
          height={90}
          rx={30}
          fill="#1f2937"
          stroke="#4b5563"
        />
        <line x1={30} y1={0} x2={30} y2={40} stroke="#4b5563" />
        <line x1={0} y1={40} x2={60} y2={40} stroke="#4b5563" />
        <text x={30} y={25} textAnchor="middle" fill="#fbbf24" fontSize="9">
          CLICK
        </text>
        <text x={30} y={60} textAnchor="middle" fill="#9ca3af" fontSize="9">
          FIRE
        </text>
        <text x={30} y={108} textAnchor="middle" fill="#9ca3af" fontSize="10">
          AIM
        </text>
      </g>
    </svg>
  );
}

function Key({
  x,
  y,
  label,
  hint,
}: {
  x: number;
  y: number;
  label: string;
  hint?: string;
}) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect width={40} height={40} rx={4} fill="#1f2937" stroke="#4b5563" />
      <text
        x={20}
        y={26}
        textAnchor="middle"
        fill="#fbbf24"
        fontSize="16"
        fontFamily="monospace"
        fontWeight="bold"
      >
        {label}
      </text>
      {hint && (
        <text x={20} y={54} textAnchor="middle" fill="#9ca3af" fontSize="8">
          {hint}
        </text>
      )}
    </g>
  );
}

function MobileSchematic() {
  return (
    <svg
      viewBox="0 0 400 240"
      className="w-full max-w-md bg-gray-900 rounded-lg p-2"
    >
      {/* Phone outline */}
      <rect
        x={20}
        y={10}
        width={360}
        height={220}
        rx={12}
        fill="#0b0f19"
        stroke="#374151"
      />

      {/* Top-left: jump */}
      <rect
        x={30}
        y={20}
        width={170}
        height={90}
        rx={6}
        fill="#14532d"
        fillOpacity={0.4}
        stroke="#22c55e"
      />
      <text
        x={115}
        y={65}
        textAnchor="middle"
        fill="#22c55e"
        fontSize="18"
        fontWeight="bold"
      >
        JUMP
      </text>
      <text x={115} y={85} textAnchor="middle" fill="#9ca3af" fontSize="10">
        tap
      </text>

      {/* Bottom-left: move */}
      <rect
        x={30}
        y={120}
        width={170}
        height={100}
        rx={6}
        fill="#1e293b"
        stroke="#64748b"
      />
      <text
        x={115}
        y={165}
        textAnchor="middle"
        fill="#fbbf24"
        fontSize="18"
        fontWeight="bold"
      >
        MOVE
      </text>
      <text x={115} y={185} textAnchor="middle" fill="#9ca3af" fontSize="10">
        slide left/right
      </text>

      {/* Right: aim+fire */}
      <rect
        x={210}
        y={20}
        width={170}
        height={200}
        rx={6}
        fill="#7f1d1d"
        fillOpacity={0.4}
        stroke="#ef4444"
      />
      <text
        x={295}
        y={115}
        textAnchor="middle"
        fill="#ef4444"
        fontSize="18"
        fontWeight="bold"
      >
        AIM + FIRE
      </text>
      <text x={295} y={135} textAnchor="middle" fill="#9ca3af" fontSize="10">
        drag to aim
      </text>
      <text x={295} y={150} textAnchor="middle" fill="#9ca3af" fontSize="10">
        auto-fires
      </text>
    </svg>
  );
}

function GameplaySchematic() {
  return (
    <svg
      viewBox="0 0 400 220"
      className="w-full max-w-md bg-gray-900 rounded-lg p-2"
    >
      {/* Sky/scene */}
      <rect x={0} y={0} width={400} height={220} fill="#0f172a" />

      {/* Ground */}
      <rect x={0} y={180} width={400} height={40} fill="#374151" />

      {/* Player */}
      <rect
        x={50}
        y={140}
        width={32}
        height={32}
        fill="#3b82f6"
        stroke="#60a5fa"
      />
      <text x={66} y={135} textAnchor="middle" fill="#60a5fa" fontSize="9">
        YOU
      </text>

      {/* Bullet trajectory */}
      <line
        x1={82}
        y1={156}
        x2={250}
        y2={70}
        stroke="#fbbf24"
        strokeWidth={2}
        strokeDasharray="4 3"
      />
      <circle cx={250} cy={70} r={4} fill="#fbbf24" />

      {/* Enemy bouncing */}
      <rect x={260} y={50} width={28} height={28} fill="#ef4444" />
      <text x={274} y={45} textAnchor="middle" fill="#fca5a5" fontSize="9">
        ENEMY
      </text>
      <path
        d="M 320 60 Q 350 30 380 80"
        fill="none"
        stroke="#ef4444"
        strokeWidth={1}
        strokeDasharray="3 3"
      />

      {/* HP */}
      <rect
        x={10}
        y={10}
        width={120}
        height={14}
        rx={2}
        fill="#1f2937"
        stroke="#4b5563"
      />
      <rect x={10} y={10} width={90} height={14} rx={2} fill="#22c55e" />
      <text
        x={70}
        y={21}
        textAnchor="middle"
        fill="#fff"
        fontSize="10"
        fontWeight="bold"
      >
        HP
      </text>

      {/* Score */}
      <text
        x={390}
        y={22}
        textAnchor="end"
        fill="#fbbf24"
        fontSize="14"
        fontFamily="monospace"
        fontWeight="bold"
      >
        SCORE
      </text>
    </svg>
  );
}
