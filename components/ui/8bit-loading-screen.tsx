"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/8bit-progress";

const DEFAULT_TIPS = [
  "INSERT COIN TO CONTINUE...",
  "Tip: Every project is a new level.",
  "Loading gaming gear data...",
  "Pro tip: Always test before you buy.",
  "Loading creative assets...",
];

export interface LoadingScreenProps extends React.ComponentProps<"div"> {
  title?: string;
  tips?: string[];
  showPercentage?: boolean;
  tipInterval?: number;
  autoProgressDuration?: number;
  onDone?: () => void;
}

export default function LoadingScreen({
  className,
  title = "LOADING",
  tips = DEFAULT_TIPS,
  showPercentage = true,
  tipInterval = 1800,
  autoProgressDuration = 3200,
  onDone,
  ...props
}: LoadingScreenProps) {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const step = 4;
    const steps = 100 / step;
    const intervalTime = autoProgressDuration / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [autoProgressDuration]);

  useEffect(() => {
    if (progress >= 100 && onDone) {
      const t = setTimeout(onDone, 450);
      return () => clearTimeout(t);
    }
  }, [progress, onDone]);

  useEffect(() => {
    if (tips.length === 0) return;
    const tipTimer = setInterval(() => {
      setCurrentTipIndex((prev) => (prev + 1) % tips.length);
    }, tipInterval);
    return () => clearInterval(tipTimer);
  }, [tips, tipInterval]);

  return (
    <div
      className={cn(
        "flex min-h-screen w-full flex-col items-center justify-center gap-8 p-8",
        className
      )}
      {...props}
    >
      <h2 className="title-vn glow animate-pulse text-center text-4xl md:text-6xl">
        {title}
      </h2>

      <div className="w-full max-w-md space-y-2">
        {showPercentage && (
          <div className="flex justify-between">
            <span className="retro text-[10px] text-muted-foreground">NOW LOADING</span>
            <span className="retro text-[10px] text-primary">
              {Math.round(progress)}%
            </span>
          </div>
        )}
        <Progress value={progress} progressBg="bg-primary" className="h-5" />
      </div>

      {tips.length > 0 && (
        <div className="flex min-h-12 w-full max-w-md items-center justify-center">
          {/* VT323 (not .retro) so Vietnamese diacritics render cleanly */}
          <p className="zbody animate-pulse text-center tracking-wide text-muted-foreground">
            {tips[currentTipIndex]}
          </p>
        </div>
      )}
    </div>
  );
}
