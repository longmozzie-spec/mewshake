"use client";

import { useState } from "react";

import CRTOverlay from "@/components/game/CRTOverlay";
import StartScreen from "@/components/game/StartScreen";
import CharacterSelect from "@/components/game/CharacterSelect";
import PlayerProfile from "@/components/game/PlayerProfile";
import LoadingScreen from "@/components/ui/8bit-loading-screen";
import RetroGrid from "@/components/ui/retro-grid";

type Screen = "loading" | "start" | "select" | "profile";

export default function Game() {
  const [screen, setScreen] = useState<Screen>("loading");

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Animated synthwave grid background (Hextech violet) */}
      <RetroGrid
        gridColor="#b14aed"
        showScanlines={false}
        className="fixed inset-0 z-0 h-full w-full"
      />
      {/* Soft dark veil so foreground text stays readable over the grid */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-background/45" />

      <CRTOverlay />

      <div className="relative z-10">
        {screen === "loading" && (
          <LoadingScreen title="LOADING" onDone={() => setScreen("start")} />
        )}

        {screen === "start" && <StartScreen onStart={() => setScreen("select")} />}

        {screen === "select" && (
          <CharacterSelect
            onSelect={() => setScreen("profile")}
            onBack={() => setScreen("start")}
          />
        )}

        {screen === "profile" && (
          <PlayerProfile onExit={() => setScreen("start")} />
        )}
      </div>
    </div>
  );
}
