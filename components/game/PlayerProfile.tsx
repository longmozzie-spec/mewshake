"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/8bit-button";
import { Card } from "@/components/ui/8bit-card";
import { Progress } from "@/components/ui/8bit-progress";
import VideoCard, { type VideoItem } from "@/components/game/VideoCard";

const VIDEOS: VideoItem[] = [
  { id: "7590056602204409108", title: "AULA S75 PRO - Perfect replacement for Aula F75?", tag: "REVIEW" },
  { id: "7655388770417659156", title: "Tanchjim Space Pro - Dual CS43198 DAC", tag: "REVIEW" },
  { id: "7590812641682066708", title: "AULA F87 Pro V2 - Solid pre-build, bright LEDs", tag: "REVIEW" },
  { id: "7588527083517693204", title: "Leobog HI75C Pro - Aluminum kit worth trying", tag: "UNBOX" },
  { id: "7632366516352142613", title: "WLMOUSE HUAN IEM - Most expensive peripheral", tag: "UNBOX" },
  { id: "7589375966288366869", title: "Stock stabs surprisingly smooth, no rattle", tag: "REVIEW" },
  { id: "7657026606334053652", title: "SMSL Nano One - All-in-one desktop audio", tag: "REVIEW" },
  { id: "7659382976828067092", title: "DARKBEACON FLUX87 - Magnetic Switches", tag: "TECH" },
  { id: "7647585012522568980", title: "NICEHCK NK1 Max & GK KUNTEN - Best budget combo", tag: "TECH" },
  { id: "7640172029785853204", title: "GK KUNTEN - Best IEM in its price range", tag: "REVIEW" },
];

const SKILLS = [
  { label: "UNBOXING & REVIEW", value: 95, color: "bg-primary" },
  { label: "GAMING GEAR TESTING", value: 88, color: "bg-primary" },
  { label: "CONTENT CREATION", value: 90, color: "bg-primary" },
  { label: "TECH KNOWLEDGE", value: 82, color: "bg-primary" },
  { label: "COMMUNITY ENGAGEMENT", value: 85, color: "bg-primary" },
];

const EQUIPMENT = [
  { name: "CAMERA GEAR", tag: "WPN" },
  { name: "LIGHTING SETUP", tag: "MAG" },
  { name: "EDITING SOFTWARE", tag: "ARM" },
  { name: "GAMING PERIPHERALS", tag: "ACC" },
];

const WORKS = [
  {
    title: "GAMING MOUSE SHOWDOWN",
    type: "REVIEW · COMPARISON",
    desc: "In-depth comparison of gaming mice from entry to high-end, testing sensor accuracy, build quality and ergonomics.",
    score: "98,500",
  },
  {
    title: "MECHANICAL KEYBOARD DEEP DIVE",
    type: "UNBOX · REVIEW",
    desc: "Unboxing and reviewing mechanical keyboards from budget to custom, testing switch feel, sound and typing experience.",
    score: "87,200",
  },
  {
    title: "HEADSET & AUDIO GEAR",
    type: "REVIEW · TESTING",
    desc: "Gaming headset reviews covering soundstage, mic quality and long-session comfort.",
    score: "76,400",
  },
  {
    title: "SETUP TOUR & PERIPHERALS",
    type: "SETUP · TECH",
    desc: "Full gaming setup showcase from monitor to mousepad, sharing tips to optimize your gaming experience.",
    score: "64,900",
  },
];

const AFFILIATES = [
  { name: "ATK STORE", desc: "Gaming peripherals & accessories", href: "https://www.atk.store/?ref=mewshake" },
  { name: "DARKBEACON", desc: "Magnetic switch keyboards", href: "https://darkbeacon.ai/?utm_source=m3wshake&utm_medium=influencer&utm_campaign=kol&utm_content=all" },
  { name: "WLMOUSE", desc: "Premium gaming mice", href: "https://www.wlmouse.com/?ref=mewshake" },
  { name: "FOSI AUDIO", desc: "Hi-Fi amplifiers & DACs", href: "https://fosiaudio.com/?ref=zihquorw&utm_campaign=goaffpro&utm_medium=referral&utm_source=affiliate" },
  { name: "QMTECH", desc: "Gaming gear Vietnam", href: "https://qmtech.vn/" },
  { name: "ANGRY MIAO", desc: "AM Infinity 97 wireless mouse", href: "https://store.angrymiao.com/products/am-infinity-97-wireless-gaming-mouse" },
  { name: "TANCHJIM", desc: "Space Pro portable DAC", href: "https://tanchjim.com/en/products/dac/space-pro/" },
  { name: "SMSL AUDIO", desc: "Desktop DAC & amplifiers", href: "https://www.smsl-audio.com/portal/product/detail/id/939.html" },
  { name: "PHONG CÁCH XANH", desc: "RAWM Leviathan V4", href: "https://www.phongcachxanh.vn/products/rawm-leviathan-v4" },
  { name: "FIFINE", desc: "AmpliGame audio mixer bundle", href: "https://fifinemicrophone.com/collections/audio-mixers/products/fifine-ampligame-recording-bundle-sc3-audio-mixer-xlr-cable" },
  { name: "SHOPEE", desc: "Deals on Shopee", href: "https://shopee.vn/product/16409457/27294799186?credential_token=8wEwiDL7YDzC5t8SfPgBNa24HDyQMk5TNtzxt8zy1G&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMibXrIYUaXM17apnZ7ndhtLKKELDCCl5CbrdZQjH4dydtQOHqLGHYqdRY8fHy9FBlOJIj9MsgqZWzglz7qmNpcGhlcnRleHTEkQAAAAw9h-tM5HFKuBqLNXBp2KMcn8Z2gmDqzZ-d5N_LWDZyoBoMccxeahgEqzbTtUe69sEKbENhtVZKWEXfdrfmsS6dxKLgaYs9GT7WliON4WgsUKXyp-fo27Hpm6-TL4kmat5J2rqaGJNkzC1_IbJL0O1QM6Nx_-CtpL-e_hVJndApf230KgfptoVqqFci_dk&mmp_pid=an_17346360391&uls_trackid=564seihh052u" },
];

const NAV = [
  { id: "profile", label: "PROFILE" },
  { id: "works", label: "WORKS" },
  { id: "shop", label: "SHOP" },
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
              <div className="relative bg-card p-2 shadow-[0_0_0_4px_var(--background),0_0_0_8px_var(--border),0_0_30px_rgba(59,130,246,0.35)]">
                <div className="relative aspect-[3/4] w-full overflow-hidden border-2 border-primary/50 bg-[#0a0e1a]">
                  <Image
                    src="/1772710591973.331.JPG"
                    alt="Mewshake"
                    fill
                    sizes="280px"
                    className="object-cover object-top"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0d0b14] via-transparent to-transparent" />
                </div>
                <div className="mt-3 space-y-1 px-1 pb-1 text-center">
                  <p className="title-vn glow whitespace-nowrap text-primary" style={{ fontSize: "min(4.2vw, 22px)" }}>VÕ NGUYỄN QUANG HUY</p>
                  <p className="retro glow-cyan text-[8px]">LV.99 REVIEWER</p>
                </div>
              </div>
            </div>

            {/* Bio + stats */}
            <div className="space-y-6">
              <Card>
                <p className="retro glow-cyan mb-3 text-[10px]">BIO</p>
                <p className="zbody text-foreground/90">
                  Looking to showcase your products to an active, highly engaged community?
                  Let&apos;s connect! I am <span className="text-primary glow">Vo Nguyen Quang Huy</span> aka{" "}
                  <span className="text-primary glow">Mewshake</span> (@m3wshake on TikTok),
                  dedicated to delivering honest, visually compelling product reviews. Brands
                  interested in sending PR packages or discussing sponsorship opportunities can
                  reach me directly at{" "}
                  <a href="mailto:mewshake2077@gmail.com" className="text-cyan hover:underline">
                    mewshake2077@gmail.com
                  </a>
                  . Let&apos;s create something impactful together!
                </p>
              </Card>

              {/* Skill bars */}
              <Card>
                <p className="retro glow-cyan mb-4 text-xs">STATS</p>
                <div className="space-y-3">
                  {SKILLS.map((s) => (
                    <div key={s.label} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="retro text-[10px] text-muted-foreground">
                          {s.label}
                        </span>
                        <span className="retro text-[10px] text-primary">{s.value}</span>
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
            <p className="retro glow-cyan mb-4 text-center text-xs">
              EQUIPMENT / TOOLS
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {EQUIPMENT.map((e) => (
                <div
                  key={e.name}
                  className="flex flex-col items-center gap-2 border-2 border-border bg-card p-4 text-center hover:border-primary"
                >
                  <span className="retro text-[9px] text-accent">[{e.tag}]</span>
                  <span className="retro text-[11px] leading-relaxed text-foreground">
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

          {/* Video showreel — horizontal auto-scroll carousel */}
          <p className="retro glow-cyan mb-4 text-center text-[10px]">
            ▶ SHOWREEL <span className="text-muted-foreground">(TikTok videos)</span>
          </p>
          <div className="mb-12 overflow-hidden">
            <div className="video-carousel flex gap-5">
              {VIDEOS.map((v) => (
                <VideoCard key={v.id} {...v} />
              ))}
              {VIDEOS.map((v) => (
                <VideoCard key={`dup-${v.id}`} {...v} />
              ))}
            </div>
          </div>

          <p className="retro glow-cyan mb-4 text-center text-xs">// HIGHLIGHTS</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {WORKS.map((w) => (
              <Card key={w.title} className="transition-transform hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <span className="retro text-[9px] text-muted-foreground">{w.type}</span>
                  <span className="retro text-[9px] text-accent glow-amber">
                    ★ {w.score}
                  </span>
                </div>
                <h3 className="retro glow-cyan my-3 text-sm leading-relaxed">
                  {w.title}
                </h3>
                <p className="zbody text-foreground/80">{w.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* ================= SHOP / AFFILIATE ================= */}
        <section id="shop" className="scroll-mt-24">
          <SectionTitle>SHOP · AFFILIATE</SectionTitle>
          <p className="retro glow-cyan mb-6 text-center text-[10px]">
            ★ USE MY LINKS TO SUPPORT THE CHANNEL ★
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AFFILIATES.map((a) => (
              <a
                key={a.name}
                href={a.href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col gap-2 border-2 border-border bg-card p-4 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              >
                <span className="retro glow text-xs text-primary group-hover:text-cyan">
                  {a.name}
                </span>
                <span className="zbody text-[11px] text-muted-foreground">
                  {a.desc}
                </span>
                <span className="retro mt-auto text-[8px] text-accent glow-amber">
                  ▶ VISIT STORE
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="scroll-mt-24">
          <SectionTitle>CONTACT · BOOKING</SectionTitle>
          <Card className="mx-auto max-w-2xl">
            <div className="space-y-6 text-center">
              <p className="retro text-[10px] leading-relaxed text-foreground">
                READY FOR COLLABORATION?
              </p>
              <p className="zbody text-foreground/80">
                Want to collaborate on product reviews? Reach out via the channels below!
              </p>

              {/* Social Icons */}
              <div className="flex items-center justify-center gap-6 pt-2">
                <a
                  href="https://www.tiktok.com/@m3wshake"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-center gap-2 transition-transform hover:-translate-y-1"
                >
                  <div className="flex h-14 w-14 items-center justify-center border-2 border-border bg-card group-hover:border-primary group-hover:shadow-[0_0_16px_rgba(59,130,246,0.4)]">
                    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-foreground group-hover:fill-primary" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.88 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .56.04.82.1V9.4a6.33 6.33 0 00-.82-.05A6.34 6.34 0 003.15 15.7 6.34 6.34 0 009.49 22a6.34 6.34 0 006.34-6.34V9.05a8.27 8.27 0 004.85 1.56V7.16a4.83 4.83 0 01-1.09-.47z"/>
                    </svg>
                  </div>
                  <span className="retro text-[7px] text-muted-foreground group-hover:text-primary">TIKTOK</span>
                </a>

                <a
                  href="https://www.facebook.com/mewyuh204"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-center gap-2 transition-transform hover:-translate-y-1"
                >
                  <div className="flex h-14 w-14 items-center justify-center border-2 border-border bg-card group-hover:border-primary group-hover:shadow-[0_0_16px_rgba(59,130,246,0.4)]">
                    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-foreground group-hover:fill-primary" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <span className="retro text-[7px] text-muted-foreground group-hover:text-primary">FACEBOOK</span>
                </a>

                <a
                  href="https://www.instagram.com/crazymew.204"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-center gap-2 transition-transform hover:-translate-y-1"
                >
                  <div className="flex h-14 w-14 items-center justify-center border-2 border-border bg-card group-hover:border-primary group-hover:shadow-[0_0_16px_rgba(59,130,246,0.4)]">
                    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-foreground group-hover:fill-primary" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </div>
                  <span className="retro text-[7px] text-muted-foreground group-hover:text-primary">INSTAGRAM</span>
                </a>

                <a
                  href="mailto:mewshake2077@gmail.com"
                  className="group flex flex-col items-center gap-2 transition-transform hover:-translate-y-1"
                >
                  <div className="flex h-14 w-14 items-center justify-center border-2 border-border bg-card group-hover:border-primary group-hover:shadow-[0_0_16px_rgba(59,130,246,0.4)]">
                    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-foreground group-hover:fill-primary" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <span className="retro text-[7px] text-muted-foreground group-hover:text-primary">EMAIL</span>
                </a>
              </div>

              {/* TikTok Channel Highlight */}
              <div className="border-2 border-primary/50 bg-card/60 p-4">
                <p className="retro glow-cyan mb-2 text-[10px]">[ TIKTOK CHANNEL ]</p>
                <a
                  href="https://www.tiktok.com/@m3wshake"
                  target="_blank"
                  rel="noreferrer"
                  className="title-vn glow text-2xl text-primary hover:text-cyan transition-colors"
                >
                  @m3wshake
                </a>
                <p className="zbody-sm mt-2 text-muted-foreground">
                  Gaming Gear Reviews · Unboxing · Tech
                </p>
              </div>

              <div className="space-y-3">
                <ContactRow label="EMAIL" value="mewshake2077@gmail.com" href="mailto:mewshake2077@gmail.com" />
                <ContactRow label="TIKTOK" value="tiktok.com/@m3wshake" href="https://www.tiktok.com/@m3wshake" />
                <ContactRow label="FACEBOOK" value="facebook.com/mewyuh204" href="https://www.facebook.com/mewyuh204" />
                <ContactRow label="INSTAGRAM" value="instagram.com/crazymew.204" href="https://www.instagram.com/crazymew.204" />
              </div>

              <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
                <a href="mailto:mewshake2077@gmail.com">
                  <Button variant="accent" size="lg">
                    ✉ BOOKING
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
              <span className="mr-12">★ THANKS FOR WATCHING ★ MEWSHAKE ★ GEAR QUEST ★ @M3WSHAKE ★ GAME OVER? PRESS RESTART ★ </span>
              <span className="mr-12">★ THANKS FOR WATCHING ★ MEWSHAKE ★ GEAR QUEST ★ @M3WSHAKE ★ GAME OVER? PRESS RESTART ★ </span>
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
