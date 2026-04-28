import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function GET() {
  const imagesDir = path.join(process.cwd(), "public/backgrounds/main-menu");
  const files = fs.readdirSync(imagesDir);

  const imageFiles = files
    .filter((file) => file.startsWith("chicot_") && file.endsWith(".jpg"))
    .sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)?.[0] || "0");
      const numB = parseInt(b.match(/\d+/)?.[0] || "0");
      return numA - numB;
    })
    .map((file) => `/backgrounds/main-menu/${file}`);

  return NextResponse.json({ images: imageFiles });
}
