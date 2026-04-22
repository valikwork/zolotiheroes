import { NextResponse } from "next/server";
import { LeaderboardEntry } from "@/data/types";

const LEADERBOARD_KEY = "zoloti-heroes:leaderboard";
const MAX_ENTRIES = 50;

// Check if Vercel KV is configured
function isKvConfigured() {
  return !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

// In-memory fallback for local dev without KV
const memoryLeaderboard: LeaderboardEntry[] = [];

export async function GET() {
  if (!isKvConfigured()) {
    // Return in-memory leaderboard sorted by score desc
    const sorted = [...memoryLeaderboard]
      .sort((a, b) => b.score - a.score)
      .slice(0, MAX_ENTRIES)
      .map((entry, i) => ({ ...entry, rank: i + 1 }));
    return NextResponse.json(sorted);
  }

  try {
    const { kv } = await import("@vercel/kv");
    const entries = await kv.zrange(LEADERBOARD_KEY, 0, MAX_ENTRIES - 1, { rev: true, withScores: true });

    const leaderboard: (LeaderboardEntry & { rank: number })[] = [];
    for (let i = 0; i < entries.length; i += 2) {
      const entry = JSON.parse(entries[i] as string) as LeaderboardEntry;
      leaderboard.push({
        ...entry,
        score: entries[i + 1] as number,
        rank: Math.floor(i / 2) + 1,
      });
    }

    return NextResponse.json(leaderboard);
  } catch {
    return NextResponse.json([]);
  }
}

export async function POST(request: Request) {
  const body = (await request.json()) as LeaderboardEntry;

  if (!isKvConfigured()) {
    // Store in memory for local dev
    memoryLeaderboard.push(body);
    return NextResponse.json({ ok: true });
  }

  try {
    const { kv } = await import("@vercel/kv");
    const member = JSON.stringify({
      name: body.name,
      character: body.character,
      completed: body.completed,
      timestamp: body.timestamp,
    });

    await kv.zadd(LEADERBOARD_KEY, { score: body.score, member });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "KV not configured" }, { status: 500 });
  }
}
