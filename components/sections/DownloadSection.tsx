import Reveal from "@/components/Reveal";
import MobileDownload from "@/components/sections/MobileDownload";
import TvDownload from "@/components/sections/TvDownload";

export default function DownloadSection() {
  return (
    <section
      id="download"
      style={{
        background: "var(--bg-rise)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "5rem 0 2rem",
      }}
    >
      <Reveal style={{ textAlign: "center", padding: "0 1.5rem", marginBottom: "1rem" }}>
        <p style={{ color: "var(--teal)", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
          Get the app
        </p>
        <h2
          className="font-display"
          style={{ fontSize: "clamp(1.9rem, 4vw, 2.75rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.03em", margin: "0 0 0.85rem" }}
        >
          Two apps. One experience.
        </h2>
        <p style={{ color: "var(--text-dim)", fontSize: "1.05rem", maxWidth: 560, margin: "0 auto" }}>
          IPTVMine Pro for your phone, and a dedicated IPTVMine Pro TV build for the big screen —
          each with its own optimized interface.
        </p>
      </Reveal>

      <MobileDownload />

      <div
        aria-hidden="true"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          height: 1,
          background:
            "linear-gradient(90deg, transparent, var(--border-strong) 20%, var(--border-strong) 80%, transparent)",
        }}
      />

      <TvDownload />

      <p style={{ color: "var(--text-faint)", fontSize: "0.8rem", textAlign: "center", padding: "0 1.5rem" }}>
        Installing from outside the Play Store requires enabling &ldquo;Install from unknown sources&rdquo; in your device settings.
      </p>
    </section>
  );
}
