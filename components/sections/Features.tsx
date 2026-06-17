import { Tv, Clapperboard, Search, Puzzle, Gamepad2, Moon, type LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import { FEATURES } from "@/lib/data";

// Maps the string icon names stored in lib/data.ts to actual lucide components.
// Keeping the data file free of JSX/component references means it stays a
// plain, server-safe data module that any component (including future
// server components) can import without pulling in client-only code.
const ICON_MAP: Record<string, LucideIcon> = {
  Tv,
  Clapperboard,
  Search,
  Puzzle,
  Gamepad2,
  Moon,
};

export default function Features() {
  return (
    <section id="features" style={{ padding: "6rem 1.5rem", position: "relative" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <Reveal className="fade-up" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p
            style={{
              color: "var(--teal)",
              fontWeight: 600,
              fontSize: "0.78rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Capabilities
          </p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.9rem, 4vw, 2.75rem)",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "-0.03em",
              margin: "0 0 0.85rem",
            }}
          >
            Everything you need to stream
          </h2>
          <p style={{ color: "var(--text-dim)", fontSize: "1.05rem" }}>
            Built with Kotlin, Jetpack Compose, and AndroidX Media3.
          </p>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1.1rem" }}>
          {FEATURES.map(({ icon, title, desc }, i) => {
            const Icon = ICON_MAP[icon];
            return (
              <Reveal key={title} style={{ transitionDelay: `${i * 60}ms` }}>
                <div
                  className="glass glow-border hover-lift"
                  style={{
                    borderRadius: 18,
                    padding: "1.75rem",
                    height: "100%",
                  }}
                >
                  <div
                    className="feature-icon-wrap"
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 12,
                      background: "linear-gradient(135deg, rgba(0,229,199,0.16), rgba(0,229,199,0.04))",
                      border: "1px solid rgba(0,229,199,0.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.1rem",
                      transition: "transform 0.4s var(--ease-spring)",
                    }}
                  >
                    {Icon && <Icon size={22} color="var(--teal)" strokeWidth={1.8} />}
                  </div>
                  <h3 className="font-display" style={{ color: "#fff", fontWeight: 600, fontSize: "1.05rem", margin: "0 0 0.5rem" }}>
                    {title}
                  </h3>
                  <p style={{ color: "var(--text-faint)", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                    {desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <style>{`
        .glow-border:hover .feature-icon-wrap {
          transform: scale(1.1) rotate(-4deg);
        }
      `}</style>
    </section>
  );
}
