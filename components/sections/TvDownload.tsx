import { Download, Check, FileText, AlertTriangle } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import Reveal from "@/components/Reveal";
import SpecRow from "@/components/SpecRow";
import TvIllustration from "@/components/illustrations/TvIllustration";
import { TV_APP } from "@/lib/data";

export default function TvDownload() {
  return (
    <section style={{ padding: "2rem 1.5rem 5rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <p style={{ color: "var(--violet)", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
            For your living room
          </p>
          <h3 className="font-display" style={{ fontSize: "clamp(1.6rem, 3.4vw, 2.2rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", margin: 0 }}>
            {TV_APP.name}
          </h3>
        </Reveal>

        <Reveal>
          <div
            className="glass-strong glow-border-violet"
            style={{
              borderRadius: "var(--radius-xl)",
              padding: "0",
              overflow: "hidden",
              position: "relative",
              display: "grid",
              gridTemplateColumns: "1fr 1.1fr",
            }}
            id="tv-download-card"
          >
            {/* Ambient gradient backdrop */}
            <div
              aria-hidden="true"
              className="gradient-animated"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(120deg, rgba(110,91,255,0.12), rgba(71,50,204,0.04), rgba(110,91,255,0.09))",
                zIndex: 0,
              }}
            />

            {/* Left: illustration */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2.5rem 2rem",
                background: "rgba(0,0,0,0.15)",
              }}
              className="tv-illustration-panel"
            >
              <div className="float-slower" style={{ width: "100%", maxWidth: 380, filter: "drop-shadow(0 30px 60px rgba(110,91,255,0.2))" }}>
                <TvIllustration />
              </div>
            </div>

            {/* Right: details */}
            <div style={{ position: "relative", zIndex: 1, padding: "2.75rem 2.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: "linear-gradient(135deg, #6E5BFF, #4732CC)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 24px rgba(110,91,255,0.28)",
                  }}
                >
                  <Download size={24} color="#fff" strokeWidth={2.2} />
                </div>
                <span
                  style={{
                    background: "rgba(255,180,84,0.12)",
                    color: "var(--amber)",
                    border: "1px solid rgba(255,180,84,0.3)",
                    borderRadius: 100,
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    padding: "0.3rem 0.75rem",
                  }}
                >
                  Beta
                </span>
              </div>

              <h4 className="font-display" style={{ color: "#fff", fontWeight: 700, fontSize: "1.55rem", margin: "0 0 0.3rem" }}>
                {TV_APP.name}
              </h4>
              <p style={{ color: "var(--text-dim)", fontSize: "0.92rem", marginBottom: "1.5rem" }}>
                {TV_APP.tagline}
              </p>

              {/* Feature list */}
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.75rem", display: "grid", gap: "0.55rem" }}>
                {TV_APP.features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: 9, color: "var(--text-dim)", fontSize: "0.86rem" }}>
                    <Check size={15} color="var(--violet)" strokeWidth={2.4} style={{ flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA buttons */}
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "1.75rem" }}>
                <a
                  href={TV_APP.downloadUrl}
                  download
                  className="hover-scale"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "linear-gradient(135deg, #6E5BFF, #4732CC)",
                    color: "#fff",
                    padding: "0.85rem 1.6rem",
                    borderRadius: 12,
                    fontWeight: 600,
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    boxShadow: "0 8px 24px rgba(110,91,255,0.25)",
                  }}
                >
                  <Download size={16} strokeWidth={2.4} />
                  Download Beta APK
                </a>
                <a
                  href={TV_APP.githubReleaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-scale"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "rgba(255,255,255,0.06)",
                    color: "var(--text)",
                    padding: "0.85rem 1.6rem",
                    borderRadius: 12,
                    fontWeight: 600,
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    border: "1px solid var(--border-strong)",
                  }}
                >
                  <GithubIcon size={16} />
                  GitHub Releases
                </a>
              </div>

              {/* Specs */}
              <div>
                <SpecRow label="Version" value={TV_APP.version} />
                <SpecRow label="APK Size" value={TV_APP.apkSize} />
                <SpecRow label="Android TV Version" value={TV_APP.androidTvVersion} />
              </div>

              {/* Release notes */}
              <div style={{ marginTop: "1.5rem" }}>
                <p style={{ display: "flex", alignItems: "center", gap: 7, color: "var(--text-faint)", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: "0.65rem" }}>
                  <FileText size={13} />
                  Release Notes
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.4rem" }}>
                  {TV_APP.releaseNotes.map((note) => (
                    <li key={note} style={{ color: "var(--text-faint)", fontSize: "0.82rem", lineHeight: 1.6, paddingLeft: "0.9rem", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "var(--violet)" }}>•</span>
                      {note}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Known issues */}
              <div style={{ marginTop: "1.25rem" }}>
                <p style={{ display: "flex", alignItems: "center", gap: 7, color: "var(--amber)", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: "0.65rem" }}>
                  <AlertTriangle size={13} />
                  Known Issues
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.4rem" }}>
                  {TV_APP.knownIssues.map((issue) => (
                    <li key={issue} style={{ color: "var(--text-faint)", fontSize: "0.82rem", lineHeight: 1.6, paddingLeft: "0.9rem", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "var(--amber)" }}>•</span>
                      {issue}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 860px) {
          #tv-download-card { grid-template-columns: 1fr !important; }
          .tv-illustration-panel { padding-bottom: 0 !important; }
        }
      `}</style>
    </section>
  );
}
