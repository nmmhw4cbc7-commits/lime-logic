import { createFileRoute } from "@tanstack/react-router";
import limeHero from "@/assets/lime-hero.jpg";
import adblockerPreview from "@/assets/adblocker-preview.jpg";
import safeguardPreview from "@/assets/safeguard-preview.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lime Logic — A suite of sharp web utilities" },
      {
        name: "description",
        content:
          "Lime Logic is a growing suite of focused browser utilities — Lime Adblocker and Lime SafeGuard, with more ripening on the way.",
      },
      { property: "og:title", content: "Lime Logic — Sharp web utilities" },
      {
        property: "og:description",
        content:
          "A suite of hyper-focused tools to reclaim your digital sovereignty. Lime Adblocker, Lime SafeGuard, and more.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const GITHUB_URL = "https://github.com/nmmhw4cbc7-commits";
const ADBLOCKER_URL = "https://adblocker-lime.vercel.app/";
const SAFEGUARD_URL = "https://lime-safe-guard.vercel.app/";

const pipeline = [
  {
    status: "Coming Soon",
    name: "Lime Squeeze",
    blurb: "Advanced file compression without loss of zest.",
  },
  {
    status: "In Alpha",
    name: "Lime Vault",
    blurb: "Encrypted password management for the privacy-obsessed.",
  },
  {
    status: "Conceptual",
    name: "Lime Beam",
    blurb: "Zero-knowledge peer-to-peer file sharing protocol.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 md:px-8 py-6 md:py-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="size-8 bg-lime rounded-lg flex items-center justify-center">
            <div className="size-4 bg-background rounded-full"></div>
          </div>
          <span className="font-display font-extrabold text-xl tracking-tight uppercase">
            Lime Logic
          </span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
          <a href="#ecosystem" className="hover:text-lime transition-colors">
            Ecosystem
          </a>
          <a href="#pipeline" className="hover:text-lime transition-colors">
            Pipeline
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="hover:text-lime transition-colors"
          >
            Source
          </a>
        </div>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2 rounded-full border border-border text-sm font-medium hover:bg-lime hover:text-lime-foreground transition-all"
        >
          Follow Development
        </a>
      </nav>

      {/* Hero */}
      <header className="relative px-6 md:px-8 pt-10 md:pt-16 pb-24 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-10 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-8 rounded-full border border-border bg-surface-card/50 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
              <span className="size-1.5 rounded-full bg-lime animate-pulse"></span>
              Collection 01 — Available Now
            </div>
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl xl:text-8xl tracking-tighter mb-8 leading-[0.88]">
              DIGITAL UTILITY <br />
              <span className="bg-gradient-to-br from-lime via-lime to-lime/50 bg-clip-text text-transparent">
                WITHOUT THE PULP.
              </span>
            </h1>
            <p className="max-w-xl mx-auto lg:mx-0 text-muted-foreground text-lg md:text-xl leading-relaxed">
              Lime Logic is a suite of hyper-focused tools designed to reclaim
              your digital sovereignty. Fast, transparent, and undeniably fresh.
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#ecosystem"
                className="px-8 py-4 bg-lime text-lime-foreground font-bold rounded-xl shadow-[0_0_40px_-8px] shadow-lime/50 hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                Explore the suite
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 border border-border font-bold rounded-xl hover:bg-surface-card transition-all"
              >
                View source
              </a>
            </div>
          </div>

          {/* Lime visual */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="absolute inset-6 rounded-full bg-lime/25 blur-[90px]"></div>
            <img
              src={limeHero}
              alt="A freshly cut lime half with juice droplets splashing on a black background"
              width={1024}
              height={1024}
              className="relative w-full aspect-square object-cover rounded-[2.5rem] border border-lime/15 [mask-image:radial-gradient(circle_at_50%_50%,black_58%,transparent_78%)]"
            />
            <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] mix-blend-overlay bg-gradient-to-tr from-transparent via-transparent to-lime/25"></div>
          </div>
        </div>

        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[420px] bg-lime/10 blur-[130px] -z-10 rounded-full pointer-events-none"></div>
      </header>


      {/* Product Grid */}
      <main id="ecosystem" className="max-w-7xl mx-auto px-6 md:px-8 pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Lime Adblocker */}
          <article className="group relative bg-surface-card border border-border rounded-[2rem] p-6 md:p-12 hover:border-lime/30 transition-all duration-500 overflow-hidden">
            <div className="relative z-10">
              <div className="mb-8 md:mb-12">
                <img
                  src={adblockerPreview}
                  alt="Lime Adblocker interface preview"
                  width={800}
                  height={512}
                  loading="lazy"
                  className="w-full aspect-[16/10] object-cover rounded-xl border border-border"
                />
              </div>
              <div className="mb-4 flex items-center gap-2">
                <span className="size-2 rounded-full bg-lime"></span>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-lime/80">
                  Available now
                </span>
              </div>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-4 tracking-tight">
                Lime Adblocker
              </h2>
              <p className="text-muted-foreground mb-8 max-w-sm">
                Cleanse the web. Strip away distractions, trackers, and noise
                with our high-performance filtering engine.
              </p>
              <a
                href={ADBLOCKER_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-full py-4 bg-lime text-lime-foreground font-extrabold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                OPEN ADBLOCKER
              </a>
            </div>
          </article>

          {/* Lime SafeGuard */}
          <article className="group relative bg-surface-card border border-border rounded-[2rem] p-6 md:p-12 hover:border-lime/30 transition-all duration-500 overflow-hidden">
            <div className="relative z-10">
              <div className="mb-8 md:mb-12">
                <img
                  src={safeguardPreview}
                  alt="Lime SafeGuard interface preview"
                  width={800}
                  height={512}
                  loading="lazy"
                  className="w-full aspect-[16/10] object-cover rounded-xl border border-border"
                />
              </div>
              <div className="mb-4 flex items-center gap-2">
                <span className="size-2 rounded-full bg-lime"></span>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-lime/80">
                  Available now
                </span>
              </div>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-4 tracking-tight">
                Lime SafeGuard
              </h2>
              <p className="text-muted-foreground mb-8 max-w-sm">
                Shop with confidence. Real-time safety checks for e-commerce
                platforms to protect your data and your wallet.
              </p>
              <a
                href={SAFEGUARD_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-full py-4 bg-foreground text-background font-extrabold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                OPEN SAFEGUARD
              </a>
            </div>
          </article>
        </div>

        {/* Pipeline */}
        <section id="pipeline" className="mt-24 md:mt-32 border-t border-border pt-16 md:pt-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 md:mb-16">
            <div>
              <h3 className="text-lime font-display font-extrabold text-base md:text-xl uppercase tracking-widest mb-4">
                The Orchard
              </h3>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tighter">
                CURRENTLY RIPENING
              </h2>
            </div>
            <p className="text-muted-foreground max-w-xs text-sm">
              The Lime Logic ecosystem is constantly expanding. Here is what
              our lab is cooking up next.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pipeline.map((item) => (
              <div
                key={item.name}
                className="p-8 bg-surface-card/50 border border-border rounded-2xl opacity-70 hover:opacity-100 hover:border-lime/30 transition-all duration-500"
              >
                <span className="text-xs font-bold text-lime/60 uppercase block mb-4">
                  {item.status}
                </span>
                <h4 className="text-xl font-display font-extrabold mb-2 tracking-tight">
                  {item.name}
                </h4>
                <p className="text-sm text-muted-foreground">{item.blurb}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="size-6 bg-lime rounded flex items-center justify-center">
              <div className="size-2 bg-background rounded-full"></div>
            </div>
            <span className="font-display font-extrabold uppercase tracking-tighter">
              Lime Logic
            </span>
            <span className="text-muted-foreground text-sm">
              © {new Date().getFullYear()}
            </span>
          </div>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm font-medium">GitHub Repository</span>
            <span className="text-lime group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>

          <div className="text-muted-foreground text-[10px] uppercase tracking-widest font-bold">
            Built for the Open Web
          </div>
        </div>
      </footer>
    </div>
  );
}
