import GithubIcon from "@/components/icons/GithubIcon";
import Reveal from "@/components/Reveal";
import { DEVELOPERS } from "@/lib/data";

export default function Developers() {
  return (
    <section style={{ padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
        <Reveal>
          <p style={{ color: "var(--teal)", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
            Crafted by
          </p>
          <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 3.6vw, 2.4rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", margin: "0 0 2.5rem" }}>
            Meet the developers
          </h2>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
          {DEVELOPERS.map((dev, i) => (
            <Reveal key={dev.username} style={{ transitionDelay: `${i * 90}ms` }}>
              <a
                href={dev.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass glow-border hover-lift dev-card"
                style={{
                  display: "block",
                  borderRadius: "var(--radius-lg)",
                  padding: "2.25rem 1.75rem",
                  textDecoration: "none",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: -50,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    background: i === 0
                      ? "radial-gradient(circle, rgba(0,229,199,0.12), transparent 70%)"
                      : "radial-gradient(circle, rgba(110,91,255,0.12), transparent 70%)",
                  }}
                />

                {/* Avatar */}
                <div
                  className="dev-avatar font-display"
                  style={{
                    width: 84,
                    height: 84,
                    borderRadius: "50%",
                    margin: "0 auto 1.25rem",
                    background: i === 0
                      ? "linear-gradient(135deg, #00E5C7, #00786C)"
                      : "linear-gradient(135deg, #6E5BFF, #4732CC)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.8rem",
                    fontWeight: 700,
                    color: i === 0 ? "#07080B" : "#fff",
                    position: "relative",
                    zIndex: 1,
                    transition: "transform 0.4s var(--ease-spring)",
                  }}
                >
                  {dev.name[0]}
                </div>

                <h3 className="font-display" style={{ color: "#fff", fontWeight: 700, fontSize: "1.15rem", margin: "0 0 0.3rem", position: "relative", zIndex: 1 }}>
                  {dev.name}
                </h3>
                <p style={{ color: "var(--text-faint)", fontSize: "0.82rem", marginBottom: "1rem", position: "relative", zIndex: 1 }}>
                  {dev.role}
                </p>

                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    borderRadius: 100,
                    padding: "0.4rem 1rem",
                    color: "var(--text-dim)",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <GithubIcon size={14} />
                  @{dev.username}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .dev-card:hover .dev-avatar {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}
