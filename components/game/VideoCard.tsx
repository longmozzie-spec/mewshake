"use client";

import { useState } from "react";

export interface VideoItem {
  id: string;
  title: string;
  tag: string;
}

/**
 * Pixel-framed YouTube card. Shows the thumbnail by default and swaps in a
 * muted autoplaying embed on hover (or tap on touch devices). Unmounting the
 * iframe on mouse-leave stops playback.
 */
export default function VideoCard({ id, title, tag }: VideoItem) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className="group relative aspect-video overflow-hidden border-2 border-border bg-black transition-colors hover:border-primary"
      onMouseEnter={() => setPlaying(true)}
      onMouseLeave={() => setPlaying(false)}
      onClick={() => setPlaying(true)}
    >
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=1&rel=0&playsinline=1&modestbranding=1`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          {/* dark gradient for label legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

          {/* play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-12 w-12 items-center justify-center border-2 border-primary bg-background/70 text-primary glow transition-transform group-hover:scale-110">
              ▶
            </div>
          </div>

          {/* labels */}
          <span className="retro glow-cyan absolute left-2 top-2 bg-background/70 px-1.5 py-0.5 text-[7px]">
            {tag}
          </span>
          <span className="retro absolute bottom-2 left-2 right-2 text-[8px] leading-relaxed text-foreground">
            {title}
          </span>
        </>
      )}
    </div>
  );
}
