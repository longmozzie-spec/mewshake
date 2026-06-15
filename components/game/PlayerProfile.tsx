"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/8bit-button";
import { Card } from "@/components/ui/8bit-card";
import { Progress } from "@/components/ui/8bit-progress";
import VideoCard, { type VideoItem } from "@/components/game/VideoCard";

const VIDEOS: VideoItem[] = [
  { id: "oZ1EsYJYd4Q", title: "SHORT REEL 01", tag: "SHORT" },
  { id: "urIkk5bPLw8", title: "SHORT REEL 02", tag: "SHORT" },
  { id: "LWnsh9UYxao", title: "VIDEO PROJECT 01", tag: "VIDEO" },
  { id: "oLxr131HL6I", title: "VIDEO PROJECT 02", tag: "VIDEO" },
  { id: "h8swSeCIKtw", title: "VIDEO PROJECT 03", tag: "VIDEO" },
  { id: "27NjDWufuE4", title: "VIDEO PROJECT 04", tag: "VIDEO" },
  { id: "oAhO2ZYs4XA", title: "VIDEO PROJECT 05", tag: "VIDEO" },
  { id: "xdU4i6HQ5Wc", title: "VIDEO PROJECT 06", tag: "VIDEO" },
  { id: "d0vcAkPFH3Q", title: "VIDEO PROJECT 07", tag: "VIDEO" },
  { id: "Dk7pJISdXtg", title: "VIDEO PROJECT 08", tag: "VIDEO" },
  { id: "IttmSAdv5KI", title: "VIDEO PROJECT 09", tag: "VIDEO" },
  { id: "oJQSLny8IVI", title: "VIDEO PROJECT 10", tag: "VIDEO" },
];

const SKILLS = [
  { label: "VIDEO EDITING", value: 95, color: "bg-primary" },
  { label: "MOTION GRAPHICS", value: 82, color: "bg-primary" },
  { label: "COLOR GRADING", value: 90, color: "bg-primary" },
  { label: "SOUND DESIGN", value: 68, color: "bg-primary" },
  { label: "STORYTELLING", value: 88, color: "bg-primary" },
];

const EQUIPMENT = [
  { name: "PREMIERE PRO", tag: "WPN" },
  { name: "AFTER EFFECTS", tag: "MAG" },
  { name: "DAVINCI RESOLVE", tag: "ARM" },
  { name: "PHOTOSHOP", tag: "ACC" },
];

const WORKS = [
  {
    title: "REAL ESTATE CINEMATIC",
    type: "VIDEO · MAP ANIMATION",
    desc: "Dựng video bất động sản cinematic, map animation & color grading thu hút khách hàng.",
    score: "98,500",
  },
  {
    title: "BRAND STORY FILM",
    type: "MOTION · STORYTELLING",
    desc: "Phim thương hiệu kể chuyện, kết hợp motion graphics và sound design ấn tượng.",
    score: "87,200",
  },
  {
    title: "SOCIAL SHORTS",
    type: "EDITING · VIRAL",
    desc: "Chuỗi video ngắn TikTok/Reels nhịp nhanh, tối ưu giữ chân người xem.",
    score: "76,400",
  },
  {
    title: "EVENT RECAP",
    type: "EDIT · COLOR",
    desc: "Recap sự kiện năng lượng cao, color grading điện ảnh, cắt dựng theo beat nhạc.",
    score: "64,900",
  },
];

const NAV = [
  { id: "profile", label: "PROFILE" },
  { id: "works", label: "WORKS" },
  { id: "contact", label: "CONTACT" },
];

export default function PlayerProfile({ onExit }: { onExit: () => void }) {
  const [active, setActive] = useState("profile");

  // highlight the menu item for the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="screen-in min-h-screen w-full pb-20">
      {/* ---------- Pixel menu bar ---------- */}
      <header className="sticky top-0 z-40 border-b-4 border-primary bg-background/95 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <button
            onClick={onExit}
            className="retro glow text-[10px] text-primary hover:text-cyan md:text-xs"
          >
            ◀ EXIT
          </button>
          <ul className="flex flex-wrap items-center gap-3 md:gap-6">
            {NAV.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => go(item.id)}
                  className={cn(
                    "retro text-[8px] transition-colors md:text-[10px]",
                    active === item.id
                      ? "text-cyan glow-cyan"
                      : "text-muted-foreground hover:text-cyan"
                  )}
                >
                  {active === item.id ? "▶ " : ""}
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl space-y-20 px-4 pt-12">
        {/* ================= PROFILE ================= */}
        <section id="profile" className="scroll-mt-24">
          <SectionTitle>PLAYER PROFILE</SectionTitle>

          <div className="grid gap-8 md:grid-cols-[280px_1fr]">
            {/* Avatar card */}
            <div className="mx-auto w-full max-w-[280px]">
              <div className="relative bg-card p-2 shadow-[0_0_0_4px_var(--background),0_0_0_8px_var(--primary),0_0_30px_rgba(177,74,237,0.35)]">
                <div className="relative aspect-[3/4] w-full overflow-hidden border-2 border-primary/50 bg-[#0d0b14]">
                  <Image
                    src="/team-3.png"
                    alt="Lê Hải Long"
                    fill
                    sizes="280px"
                    className="object-cover object-top pixelated"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0d0b14] via-transparent to-transparent" />
                </div>
                <div className="mt-3 space-y-1 px-1 pb-1 text-center">
                  <p className="title-vn glow text-3xl text-primary">LÊ HẢI LONG</p>
                  <p className="retro glow-cyan text-[8px]">LV.99 CREATIVE</p>
                </div>
              </div>
            </div>

            {/* Bio + stats */}
            <div className="space-y-6">
              <Card>
                <p className="retro glow-cyan mb-3 text-[10px]">BIO</p>
                <p className="zbody text-foreground/90">
                  Mình là <span className="text-primary glow">Lê Hải Long</span> — Video
                  Editor &amp; Creative tại <span className="text-primary">CR Studio</span>.
                  Biến footage thô thành những thước phim cinematic: cắt dựng có nhịp,
                  color grading điện ảnh và motion graphics kể chuyện. Mỗi dự án là một
                  màn chơi — và mình luôn nhắm tới HI-SCORE.
                </p>
              </Card>

              {/* Skill bars */}
              <Card>
                <p className="retro glow-cyan mb-4 text-[10px]">STATS</p>
                <div className="space-y-3">
                  {SKILLS.map((s) => (
                    <div key={s.label} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="retro text-[8px] text-muted-foreground">
                          {s.label}
                        </span>
                        <span className="retro text-[8px] text-primary">{s.value}</span>
                      </div>
                      <Progress value={s.value} progressBg={s.color} className="h-4" />
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Equipment row */}
          <div className="mt-8">
            <p className="retro glow-cyan mb-4 text-center text-[10px]">
              EQUIPMENT / TOOLS
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {EQUIPMENT.map((e) => (
                <div
                  key={e.name}
                  className="flex flex-col items-center gap-2 border-2 border-border bg-card p-4 text-center hover:border-primary"
                >
                  <span className="retro text-[7px] text-accent">[{e.tag}]</span>
                  <span className="retro text-[8px] leading-relaxed text-foreground">
                    {e.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= WORKS ================= */}
        <section id="works" className="scroll-mt-24">
          <SectionTitle>WORKS · SHOWREEL</SectionTitle>

          {/* Video showreel — autoplay on hover */}
          <p className="retro glow-cyan mb-4 text-center text-[10px]">
            ▶ SHOWREEL <span className="text-muted-foreground">(rê chuột để xem)</span>
          </p>
          <div className="mb-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VIDEOS.map((v) => (
              <VideoCard key={v.id} {...v} />
            ))}
          </div>

          <p className="retro glow-cyan mb-4 text-center text-[10px]">// HIGHLIGHTS</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {WORKS.map((w) => (
              <Card key={w.title} className="transition-transform hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <span className="retro text-[7px] text-muted-foreground">{w.type}</span>
                  <span className="retro text-[7px] text-accent glow-amber">
                    ★ {w.score}
                  </span>
                </div>
                <h3 className="retro glow-cyan my-3 text-xs leading-relaxed">
                  {w.title}
                </h3>
                <p className="zbody text-foreground/80">{w.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="scroll-mt-24">
          <SectionTitle>CONTACT · CONTINUE?</SectionTitle>
          <Card className="mx-auto max-w-2xl">
            <div className="space-y-6 text-center">
              <p className="retro text-[10px] leading-relaxed text-foreground">
                READY FOR PLAYER 2?
              </p>
              <p className="zbody text-foreground/80">
                Có một dự án cần lên hình? Gửi mình một dòng — co-op ngay!
              </p>

              <div className="space-y-3">
                <ContactRow label="EMAIL" value="longmozzie@gmail.com" href="mailto:longmozzie@gmail.com" />
                <ContactRow label="STUDIO" value="CR STUDIO · crstudio.vn" href="https://crstudio.vn" />
                <ContactRow
                  label="FACEBOOK"
                  value="facebook.com/longbeosne"
                  href="https://www.facebook.com/longbeosne/"
                />
              </div>

              {/* Zalo QR */}
              <div className="flex flex-col items-center gap-3 pt-2">
                <span className="retro glow-cyan text-[8px]">[ ZALO · QUÉT MÃ ]</span>
                <div className="bg-white p-2 shadow-[0_0_0_4px_var(--background),0_0_0_8px_var(--primary),0_0_24px_rgba(177,74,237,0.4)]">
                  <Image
                    src="/zalo-qr.jpg"
                    alt="Zalo QR — Lê Hải Long"
                    width={160}
                    height={160}
                    className="h-40 w-40 object-contain"
                  />
                </div>
                <span className="zbody-sm text-muted-foreground">
                  Mở Zalo → quét mã để kết nối
                </span>
              </div>

              <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
                <a href="mailto:longmozzie@gmail.com">
                  <Button variant="accent" size="lg">
                    ✉ SEND MESSAGE
                  </Button>
                </a>
                <Button variant="outline" size="lg" onClick={onExit}>
                  ↻ RESTART
                </Button>
              </div>
            </div>
          </Card>

          {/* marquee ticker */}
          <div className="mt-12 overflow-hidden border-y-2 border-primary/40 py-3">
            <div className="marquee retro text-[8px] text-muted-foreground">
              <span className="mr-12">★ THANKS FOR PLAYING ★ LÊ HẢI LONG ★ CREATIVE QUEST ★ CR STUDIO ★ GAME OVER? PRESS RESTART ★ </span>
              <span className="mr-12">★ THANKS FOR PLAYING ★ LÊ HẢI LONG ★ CREATIVE QUEST ★ CR STUDIO ★ GAME OVER? PRESS RESTART ★ </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="title-vn glow mb-8 text-center text-3xl text-primary md:text-5xl">
      <span className="glow-cyan">&gt;</span> {children}
    </h2>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex flex-col items-center justify-between gap-1 border-2 border-border bg-card/60 px-4 py-3 hover:border-primary sm:flex-row sm:gap-3">
      <span className="retro glow-cyan text-[8px]">[{label}]</span>
      <span className="zbody text-foreground/90">{value}</span>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}
