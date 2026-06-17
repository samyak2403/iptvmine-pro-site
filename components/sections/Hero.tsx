import { Download, Code2, Sparkles, ChevronDown } from "lucide-react";
import ParticleField from "@/components/ParticleField";
import { SITE } from "@/lib/data";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "6rem 1.5rem 4rem",
        position: "relative",
      }}
    >
      {/* Ambient gradient glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 45% at 50% -5%, rgba(0,229,199,0.18), transparent 70%), radial-gradient(ellipse 50% 40% at 90% 30%, rgba(110,91,255,0.10), transparent 70%), radial-gradient(ellipse 45% 35% at 5% 75%, rgba(0,229,199,0.06), transparent 70%)",
        }}
      />

      {/* Floating orbs */}
      <div
        aria-hidden="true"
        className="float-slow"
        style={{
          position: "absolute",
          top: "12%",
          left: "8%",
          width: 160,
          height: 160,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,229,199,0.16), transparent 70%)",
          filter: "blur(8px)",
        }}
      />
      <div
        aria-hidden="true"
        className="float-slower"
        style={{
          position: "absolute",
          bottom: "16%",
          right: "10%",
          width: 220,
          height: 220,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(110,91,255,0.14), transparent 70%)",
          filter: "blur(10px)",
        }}
      />

      <ParticleField count={26} />
      <div className="grain" />

      <div style={{ maxWidth: 780, position: "relative", zIndex: 1 }} className="fade-up">
        {/* Badge */}
        <div
          className="glass"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            color: "var(--teal)",
            borderRadius: 100,
            fontSize: "0.78rem",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            padding: "0.45rem 1.15rem",
            marginBottom: "1.85rem",
            border: "1px solid rgba(0,229,199,0.25)",
          }}
        >
          <Sparkles size={13} />
          Android &amp; Android TV
        </div>

        <h1
          className="font-display"
          style={{
            fontSize: "clamp(2.6rem, 7vw, 4.85rem)",
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "-0.04em",
            lineHeight: 1.08,
            margin: "0 0 1.5rem",
          }}
        >
          Stream Everything,
          <br />
          <span className="gradient-text teal-glow">Anywhere</span>
        </h1>

        <p
          style={{
            color: "var(--text-dim)",
            fontSize: "1.2rem",
            lineHeight: 1.7,
            marginBottom: "2.75rem",
            maxWidth: 600,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          IPTVMine Pro brings Live TV, Movies, and Series to your phone and your television —
          powered by M3U playlists and Vega-compatible provider extensions.
        </p>

        <div style={{ display: "flex", gap: "0.9rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="#download"
            className="hover-scale"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "linear-gradient(135deg, #00E5C7, #00A896)",
              color: "#07080B",
              padding: "0.95rem 2.1rem",
              borderRadius: 13,
              fontWeight: 600,
              textDecoration: "none",
              fontSize: "0.95rem",
              boxShadow: "0 8px 30px rgba(0,229,199,0.28)",
            }}
          >
            <Download size={17} strokeWidth={2.4} />
            Download Now
          </a>
          <a
            href={SITE.githubOrg}
            target="_blank"
            rel="noopener noreferrer"
            className="glass hover-scale"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "var(--text)",
              padding: "0.95rem 2.1rem",
              borderRadius: 13,
              fontWeight: 500,
              textDecoration: "none",
              fontSize: "0.95rem",
              border: "1px solid var(--border-strong)",
            }}
          >
            <Code2 size={17} strokeWidth={2.2} />
            View Source
          </a>
        </div>

        {/* Scroll cue */}
        <div
          aria-hidden="true"
          className="pulse-glow"
          style={{
            marginTop: "4rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            color: "var(--text-faint)",
          }}
        >
          <span style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Scroll</span>
          <ChevronDown size={16} />
        </div>
      </div>
    </section>
  );
}
