"use client";

import { Button } from "@/components/ui/8bit-button";

function Star({ filled }: { filled: boolean }) {
  return (
    <span className={filled ? "text-accent glow-amber" : "text-muted-foreground/40"}>
      ★
    </span>
  );
}

function StatStars({ count }: { count: number }) {
  return (
    <span className="retro text-[8px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} filled={i < count} />
      ))}
    </span>
  );
}

export default function CharacterSelect({
  onSelect,
  onBack,
}: {
  onSelect: () => void;
  onBack: () => void;
}) {
  return (
    <div className="screen-in flex min-h-screen w-full flex-col items-center justify-center gap-8 px-4 py-12">
      <h2 className="title-vn glow text-center text-3xl text-primary md:text-5xl">
        SELECT YOUR PLAYER
      </h2>

      <div className="grid w-full max-w-4xl grid-cols-1 items-stretch gap-8 md:grid-cols-3">
        {/* Locked slot */}
        <LockedSlot label="???" />

        {/* Main character — Lê Hải Long */}
        <div className="order-first mx-auto w-full max-w-[260px] md:order-none md:max-w-none">
          <div className="relative bg-card p-2 shadow-[0_0_0_4px_var(--background),0_0_0_8px_var(--primary),0_0_30px_rgba(177,74,237,0.4)]">
            {/* P1 tag */}
            <div className="retro absolute -top-3 left-1/2 -translate-x-1/2 bg-accent px-3 py-1 text-[8px] text-accent-foreground">
              PLAYER 1
            </div>

            {/* Avatar video — living portrait */}
            <div className="relative mx-auto mt-3 aspect-[3/4] w-full overflow-hidden border-2 border-primary/50 bg-[#0d0b14]">
              <video
                src="/video-select.mp4"
                poster="/team-3.png"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              {/* scan tint */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0d0b14] via-transparent to-transparent" />
            </div>

            {/* Name plate */}
            <div className="mt-3 space-y-2 px-1 pb-2 text-center">
              <p className="title-vn glow text-3xl text-primary">LÊ HẢI LONG</p>
              <p className="retro glow-cyan text-[8px]">CLASS: VIDEO EDITOR</p>

              <div className="mx-auto mt-3 max-w-[200px] space-y-1 text-left">
                <StatRow label="EDIT" count={5} />
                <StatRow label="MOTION" count={4} />
                <StatRow label="COLOR" count={5} />
                <StatRow label="SOUND" count={3} />
              </div>
            </div>
          </div>
        </div>

        {/* Locked slot */}
        <LockedSlot label="???" />
      </div>

      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Button variant="outline" size="sm" onClick={onBack}>
          ◀ BACK
        </Button>
        <Button variant="accent" size="lg" onClick={onSelect}>
          SELECT ✓
        </Button>
      </div>
      <p className="retro blink text-[8px] text-muted-foreground">
        PRESS SELECT TO ENTER PROFILE
      </p>
    </div>
  );
}

function StatRow({ label, count }: { label: string; count: number }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="retro text-[7px] text-muted-foreground">{label}</span>
      <span className="retro text-[8px]">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} filled={i < count} />
        ))}
      </span>
    </div>
  );
}

function LockedSlot({ label }: { label: string }) {
  return (
    <div className="hidden items-center justify-center border-2 border-dashed border-border bg-card/40 p-2 md:flex">
      <div className="flex aspect-[3/4] w-full flex-col items-center justify-center gap-3 opacity-50">
        <span className="retro text-3xl text-muted-foreground">🔒</span>
        <span className="retro text-[10px] text-muted-foreground">{label}</span>
        <span className="retro text-[7px] text-muted-foreground">LOCKED</span>
      </div>
    </div>
  );
}
