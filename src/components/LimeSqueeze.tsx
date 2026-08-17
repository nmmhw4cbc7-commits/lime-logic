import { useEffect, useState } from "react";
import limeHero from "@/assets/lime-hero.png";

type Droplet = {
  x: number;
  y: number;
  tx: number;
  ty: number;
  size: number;
  delay: number;
  duration: number;
};

/** Deterministic pseudo-random so SSR and client agree. */
function makeDroplets(count: number, seed: number): Droplet[] {
  let s = seed;
  const rnd = () => {
    s = (s * 16807) % 2147483647;
    return s / 2147483647;
  };
  return Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2 + rnd() * 0.6;
    const dist = 26 + rnd() * 46;
    return {
      x: 44 + rnd() * 12,
      y: 46 + rnd() * 12,
      tx: Math.cos(angle) * dist,
      ty: Math.sin(angle) * dist * 0.85 - 8,
      size: 4 + rnd() * 12,
      delay: 1.05 + rnd() * 0.5,
      duration: 0.9 + rnd() * 0.7,
    };
  });
}

const DROPLETS = makeDroplets(22, 7919);

export function LimeSqueeze({ className = "" }: { className?: string }) {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setPlay(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const halfClasses =
    "absolute inset-0 w-full h-full object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.85)]";

  return (
    <div
      className={`relative aspect-square ${className}`}
      data-play={play ? "true" : "false"}
    >
      {/* glow */}
      <div className="absolute inset-[12%] rounded-full bg-lime/25 blur-[100px]" />

      {/* the two halves */}
      <div className="absolute inset-0 animate-[squeeze_1.4s_cubic-bezier(.34,1.56,.64,1)_0.55s_both]">
        <div className="absolute inset-0 animate-[float_9s_ease-in-out_2.4s_infinite]">
          <img
            src={limeHero}
            alt="A freshly cut lime half with juice droplets splashing"
            width={1024}
            height={1024}
            className={`${halfClasses} [clip-path:inset(0_50%_0_0)] animate-[split-left_1.5s_cubic-bezier(.22,1,.36,1)_0.85s_both]`}
          />
          <img
            src={limeHero}
            alt=""
            aria-hidden="true"
            width={1024}
            height={1024}
            className={`${halfClasses} [clip-path:inset(0_0_0_50%)] animate-[split-right_1.5s_cubic-bezier(.22,1,.36,1)_0.85s_both]`}
          />
        </div>
      </div>

      {/* blade slash */}
      <div className="pointer-events-none absolute left-[-10%] right-[-10%] top-1/2 h-[2px] origin-left -translate-y-1/2 rotate-[-8deg] bg-gradient-to-r from-transparent via-white to-transparent animate-[slash_0.55s_ease-in_0.5s_both]" />

      {/* juice */}
      <div className="pointer-events-none absolute inset-0">
        {DROPLETS.map((d, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-lime shadow-[0_0_12px_rgba(190,242,100,0.8)] animate-[squirt_var(--dur)_ease-out_var(--delay)_infinite]"
            style={
              {
                left: `${d.x}%`,
                top: `${d.y}%`,
                width: `${d.size}px`,
                height: `${d.size * 1.25}px`,
                "--tx": `${d.tx}%`,
                "--ty": `${d.ty}%`,
                "--dur": `${d.duration + 1.6}s`,
                "--delay": `${d.delay}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}
