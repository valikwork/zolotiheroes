import { LeaderboardEntry } from "@/data/types";
import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

const LEADERBOARD_KEY = "zoloti-heroes:leaderboard";
const MAX_ENTRIES = 50;

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

export async function GET() {
  try {
    const raw = await redis.zrange<string[]>(
      LEADERBOARD_KEY,
      0,
      MAX_ENTRIES - 1,
      {
        rev: true,
        withScores: true,
      },
    );

    const leaderboard: (LeaderboardEntry & { rank: number })[] = [];
    for (let i = 0; i < raw.length; i += 2) {
      const data = typeof raw[i] === "string" ? JSON.parse(raw[i]) : raw[i];
      leaderboard.push({
        ...data,
        score: Number(raw[i + 1]),
        rank: Math.floor(i / 2) + 1,
      });
    }

    return NextResponse.json(leaderboard);
  } catch (err) {
    console.error("[leaderboard GET]", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeaderboardEntry;

    const member = JSON.stringify({
      name: body.name,
      character: body.character,
      completed: body.completed,
      completedCount: body.completedCount,
      timestamp: body.timestamp,
    });

    const result = await redis.zadd(LEADERBOARD_KEY, {
      score: body.score,
      member,
    });
    console.log(
      "[leaderboard POST] zadd result:",
      result,
      "score:",
      body.score,
      "member:",
      member,
    );

    return NextResponse.json({ ok: true, zadd: result });
  } catch (err) {
    console.error("[leaderboard POST]", err);
    return NextResponse.json(
      { ok: false, error: String(err) },
      { status: 500 },
    );
  }
}
