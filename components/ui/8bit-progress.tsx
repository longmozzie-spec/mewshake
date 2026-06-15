"use client";

import { cn } from "@/lib/utils";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  /** background color class of the fill, e.g. "bg-primary" */
  progressBg?: string;
}

/**
 * 8-bit progress bar — rendered as discrete pixel segments.
 */
export function Progress({
  value = 0,
  progressBg = "bg-primary",
  className,
  ...props
}: ProgressProps) {
  const clamped = Math.max(0, Math.min(100, value));

  return (
    <div
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn(
        "relative w-full h-4 bg-muted p-0.5",
        "shadow-[0_0_0_2px_var(--background),0_0_0_4px_var(--primary)]",
        className
      )}
      {...props}
    >
      <div className="relative h-full w-full overflow-hidden">
        <div
          className={cn("h-full transition-[width] duration-200 ease-linear", progressBg)}
          style={{
            width: `${clamped}%`,
            // chunky segmented look
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(0,0,0,0.35) 0 2px, transparent 2px 8px)",
          }}
        />
      </div>
    </div>
  );
}

export default Progress;
