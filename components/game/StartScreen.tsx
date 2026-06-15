"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/8bit-button";

export default function StartScreen({ onStart }: { onStart: () => void }) {
  // Let the player press Enter / Space to start, like a real arcade.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") onStart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onStart]);

  return (
    <div className="screen-in flex min-h-screen w-full flex-col items-center justify-center gap-10 px-4 text-center">
      {/* High-score style header */}
      <div className="retro flex w-full max-w-2xl justify-between text-[8px] text-muted-foreground md:text-[10px]">
        <span>1UP</span>
        <span className="glow text-primary">HI-SCORE 999999</span>
        <span>©2026 CR</span>
      </div>

      {/* Title */}
      <div className="bob space-y-4">
        <p className="retro glow-cyan text-[10px] md:text-xs">
          CREATIVE QUEST
        </p>
        <h1 className="title-vn glow text-5xl leading-[0.95] text-primary sm:text-7xl md:text-8xl">
          LÊ HẢI
          <br />
          LONG
        </h1>
        <p className="retro text-[8px] text-muted-foreground md:text-[10px]">
          VIDEO EDITOR &middot; CREATIVE &middot; CR STUDIO
        </p>
      </div>

      {/* Start button */}
      <div className="flex flex-col items-center gap-5">
        <Button variant="accent" size="lg" onClick={onStart}>
          ▶ START GAME
        </Button>
        <p className="retro blink text-[8px] text-foreground md:text-[10px]">
          PRESS ENTER
        </p>
      </div>

      {/* Footer credits */}
      <p className="retro text-[7px] text-muted-foreground md:text-[8px]">
        © 2026 <span className="title-vn text-[10px] md:text-xs">LÊ HẢI LONG</span> — ALL RIGHTS RESERVED
      </p>
    </div>
  );
}
