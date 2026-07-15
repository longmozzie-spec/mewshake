"use client";

import { useEffect, useRef, useState } from "react";

export interface VideoItem {
  id: string;
  title: string;
  tag: string;
}

export default function VideoCard({ id, title, tag }: VideoItem) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      className="group relative flex-shrink-0 w-[220px] cursor-pointer overflow-hidden border-2 border-border bg-[#0a0e1a] transition-all hover:border-primary hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
    >
      <div className="aspect-[9/16] w-full overflow-hidden">
        <video
          ref={videoRef}
          src={`/video/${id}.mp4`}
          loop
          muted
          playsInline
          preload="none"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Mute indicator */}
      <div className="absolute right-2 top-2 z-10 flex h-7 w-7 items-center justify-center bg-background/70 text-foreground">
        <span className="text-xs">{muted ? "🔇" : "🔊"}</span>
      </div>

      {/* Bottom gradient for title */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-8">
        <p className="retro text-[7px] leading-relaxed text-foreground line-clamp-2">
          {title}
        </p>
      </div>

      <span className="retro glow-cyan absolute left-2 top-2 z-10 bg-background/70 px-1.5 py-0.5 text-[7px]">
        {tag}
      </span>
    </div>
  );
}
