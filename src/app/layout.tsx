import type { Metadata } from "next";
import { GameProvider } from "@/context/GameContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zoloti Heroes",
  description: "Everyone's busy. Nobody's coming. Get to Chicot anyway.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        <GameProvider>{children}</GameProvider>
      </body>
    </html>
  );
}
