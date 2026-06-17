import { Star, GitFork, CircleDot, Bug, Lightbulb, Tag } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import Reveal from "@/components/Reveal";
import { SITE, GITHUB_STATS } from "@/lib/data";

const STAT_ITEMS = [
  { Icon: Star, label: "Stars", value: GITHUB_STATS.stars },
  { Icon: GitFork, label: "Forks", value: GITHUB_STATS.forks },
  { Icon: CircleDot, label: "Issues", value: GITHUB_STATS.issues },
  { Icon: Tag, label: "Latest Release", value: GITHUB_STATS.latestRelease },
];

export default function GithubSection() {
  return (
    <section id="github" style={{ padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <p style={{ color: "var(--teal)", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
            Open source
          </p>
          <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 3.6vw, 2.4rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", margin: 0 }}>
            Built in the open
          </h2>
        </Reveal>

        <Reveal>
          <div className="glass-strong glow-border" style={{ borderRadius: "var(--radius-xl)", padding: "2.5rem", position: "relative", overflow: "hidden" }}>
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: -60,
                right: -60,
                width: 220,
                height: 220,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(0,229,199,0.1), transparent 70%)",
              }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: "1.75rem", flexWrap: "wrap" }}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: "var(--surface-2)",
                    border: "1px solid var(--border-strong)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span style={{ color: "var(--text)", display: "flex" }}>
                    <GithubIcon size={26} />
                  </span>
                </div>
                <div>
                  <h3 className="font-display" style={{ color: "#fff", fontWeight: 700, fontSize: "1.2rem", margin: 0 }}>
                    {SITE.githubRepo}
                  </h3>
                  <p style={{ color: "var(--text-faint)", fontSize: "0.85rem", margin: "0.2rem 0 0" }}>
                    Public repository · MIT-style open source
                  </p>
                </div>
              </div>

              {/* Stats grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "0.9rem", marginBottom: "2rem" }}>
                {STAT_ITEMS.map(({ Icon, label, value }) => (
                  <div
                    key={label}
                    style={{
                      background: "var(--surface-2)",
                      border: "1px solid var(--border)",
                      borderRadius: 14,
                      padding: "1.1rem",
                      textAlign: "center",
                    }}
                  >
                    <Icon size={18} color="var(--teal)" style={{ marginBottom: 6 }} />
                    <div className="font-display" style={{ color: "#fff", fontWeight: 700, fontSize: "1.15rem" }}>{value}</div>
                    <div style={{ color: "var(--text-faint)", fontSize: "0.74rem", marginTop: 2 }}>{label}</div>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <a
                  href={SITE.githubOrg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-scale"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: "linear-gradient(135deg, #00E5C7, #00A896)", color: "#07080B",
                    padding: "0.75rem 1.4rem", borderRadius: 11, fontWeight: 600,
                    textDecoration: "none", fontSize: "0.86rem",
                  }}
                >
                  <GithubIcon size={15} />
                  View Source
                </a>
                <a
                  href={`${SITE.githubOrg}/issues/new?labels=bug`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-scale"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: "rgba(255,92,122,0.1)", color: "var(--rose)",
                    border: "1px solid rgba(255,92,122,0.25)",
                    padding: "0.75rem 1.4rem", borderRadius: 11, fontWeight: 600,
                    textDecoration: "none", fontSize: "0.86rem",
                  }}
                >
                  <Bug size={15} strokeWidth={2.2} />
                  Report Bug
                </a>
                <a
                  href={`${SITE.githubOrg}/issues/new?labels=enhancement`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-scale"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: "rgba(255,180,84,0.1)", color: "var(--amber)",
                    border: "1px solid rgba(255,180,84,0.25)",
                    padding: "0.75rem 1.4rem", borderRadius: 11, fontWeight: 600,
                    textDecoration: "none", fontSize: "0.86rem",
                  }}
                >
                  <Lightbulb size={15} strokeWidth={2.2} />
                  Feature Request
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
