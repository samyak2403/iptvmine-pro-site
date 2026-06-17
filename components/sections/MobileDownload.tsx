import { Download, Check, FileText } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import Reveal from "@/components/Reveal";
import SpecRow from "@/components/SpecRow";
import PhoneIllustration from "@/components/illustrations/PhoneIllustration";
import { MOBILE_APP } from "@/lib/data";

export default function MobileDownload() {
  return (
    <section style={{ padding: "5rem 1.5rem 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <p style={{ color: "var(--teal)", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
            For your phone
          </p>
          <h3 className="font-display" style={{ fontSize: "clamp(1.6rem, 3.4vw, 2.2rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", margin: 0 }}>
            {MOBILE_APP.name}
          </h3>
        </Reveal>

        <Reveal>
          <div
            className="glass-strong glow-border"
            style={{
              borderRadius: "var(--radius-xl)",
              padding: "0",
              overflow: "hidden",
              position: "relative",
              display: "grid",
              gridTemplateColumns: "1.1fr 1fr",
            }}
            id="mobile-download-card"
          >
            {/* Ambient gradient backdrop */}
            <div
              aria-hidden="true"
              className="gradient-animated"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(120deg, rgba(0,229,199,0.10), rgba(0,120,108,0.04), rgba(0,229,199,0.08))",
                zIndex: 0,
              }}
            />

            {/* Left: details */}
            <div style={{ position: "relative", zIndex: 1, padding: "2.75rem 2.5rem" }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: "linear-gradient(135deg, #00E5C7, #00786C)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  boxShadow: "0 8px 24px rgba(0,229,199,0.25)",
                }}
              >
                <Download size={24} color="#07080B" strokeWidth={2.2} />
              </div>

              <h4 className="font-display" style={{ color: "#fff", fontWeight: 700, fontSize: "1.55rem", margin: "0 0 0.3rem" }}>
                {MOBILE_APP.name}
              </h4>
              <p style={{ color: "var(--text-dim)", fontSize: "0.92rem", marginBottom: "1.5rem" }}>
                {MOBILE_APP.tagline}
              </p>

              {/* Feature list */}
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.75rem", display: "grid", gap: "0.55rem" }}>
                {MOBILE_APP.features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: 9, color: "var(--text-dim)", fontSize: "0.86rem" }}>
                    <Check size={15} color="var(--teal)" strokeWidth={2.4} style={{ flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA buttons */}
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "1.75rem" }}>
                <a
                  href={MOBILE_APP.downloadUrl}
                  download
                  className="hover-scale"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "linear-gradient(135deg, #00E5C7, #00A896)",
                    color: "#07080B",
                    padding: "0.85rem 1.6rem",
                    borderRadius: 12,
                    fontWeight: 600,
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    boxShadow: "0 8px 24px rgba(0,229,199,0.22)",
                  }}
                >
                  <Download size={16} strokeWidth={2.4} />
                  {MOBILE_APP.downloadIsZip ? "Download APK (.zip)" : "Download APK"}
                </a>
                <a
                  href={MOBILE_APP.githubReleaseUrl}
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

              {MOBILE_APP.downloadIsZip && (
                <p style={{ color: "var(--text-faint)", fontSize: "0.78rem", marginTop: "-1.1rem", marginBottom: "1.75rem" }}>
                  Packaged as a .zip — extract it to get the .apk before installing.
                </p>
              )}

              {/* Specs */}
              <div>
                <SpecRow label="Version" value={MOBILE_APP.version} />
                <SpecRow label="APK Size" value={MOBILE_APP.apkSize} />
                <SpecRow label="Android Version" value={MOBILE_APP.androidVersion} />
                <SpecRow label="Release Date" value={MOBILE_APP.releaseDate} />
                <SpecRow label="SHA256" value={MOBILE_APP.sha256} copyable />
              </div>

              {/* Release notes */}
              <div style={{ marginTop: "1.5rem" }}>
                <p style={{ display: "flex", alignItems: "center", gap: 7, color: "var(--text-faint)", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: "0.65rem" }}>
                  <FileText size={13} />
                  Release Notes
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.4rem" }}>
                  {MOBILE_APP.releaseNotes.map((note) => (
                    <li key={note} style={{ color: "var(--text-faint)", fontSize: "0.82rem", lineHeight: 1.6, paddingLeft: "0.9rem", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "var(--teal)" }}>•</span>
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: illustration */}
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
              className="download-illustration-panel"
            >
              <div className="float-slow" style={{ width: "100%", maxWidth: 240, filter: "drop-shadow(0 30px 60px rgba(0,229,199,0.18))" }}>
                <PhoneIllustration />
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 860px) {
          #mobile-download-card { grid-template-columns: 1fr !important; }
          .download-illustration-panel { order: -1; padding-bottom: 0 !important; }
        }
      `}</style>
    </section>
  );
}
