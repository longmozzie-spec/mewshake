"use client";

export interface VideoItem {
  id: string;
  title: string;
  tag: string;
}

export default function VideoCard({ id, title, tag }: VideoItem) {
  const videoUrl = `https://www.tiktok.com/@m3wshake/video/${id}`;

  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noreferrer"
      className="group relative flex-shrink-0 w-[220px] overflow-hidden border-2 border-border bg-[#0a0e1a] transition-all hover:border-primary hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
    >
      <div className="aspect-[9/16] w-full overflow-hidden">
        <img
          src={`/thumbnails/${id}.jpg`}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />

        {/* Play overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
          <div className="flex h-14 w-14 items-center justify-center border-2 border-primary bg-background/80 text-primary opacity-0 transition-opacity group-hover:opacity-100">
            <span className="text-xl">▶</span>
          </div>
        </div>

        {/* Bottom gradient for title */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-8">
          <p className="retro text-[7px] leading-relaxed text-foreground line-clamp-2">
            {title}
          </p>
        </div>
      </div>

      <span className="retro glow-cyan absolute left-2 top-2 z-10 bg-background/70 px-1.5 py-0.5 text-[7px]">
        {tag}
      </span>
    </a>
  );
}
