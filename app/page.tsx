import Link from "next/link";

const features = [
  { icon: "📺", title: "Live TV", desc: "Stream thousands of live channels via M3U playlists with category filtering." },
  { icon: "🎬", title: "Movies & Series", desc: "Access VOD content through Vega-compatible provider extensions." },
  { icon: "🔍", title: "Global Search", desc: "Unified search across all channels, movies, series, and extensions." },
  { icon: "🔌", title: "Extensions", desc: "Install and manage JavaScript/TypeScript provider extensions dynamically." },
  { icon: "🎮", title: "Advanced Player", desc: "Powered by AndroidX Media3 supporting HLS, DASH, RTSP, and more." },
  { icon: "🌙", title: "Modern UI", desc: "Jetpack Compose UI with a smooth teal-themed dark design." },
];

const legalCards = [
  { href: "/privacy-policy", label: "Privacy Policy", desc: "How we handle your data and protect your privacy.", icon: "🔒" },
  { href: "/terms-and-conditions", label: "Terms & Conditions", desc: "Rules governing use of IPTVMine Pro.", icon: "📋" },
  { href: "/disclaimer", label: "Disclaimer", desc: "Important information about content ownership and liability.", icon: "⚠️" },
];

export default function Home() {
  return (
    <div style={{ background: "var(--bg)" }}>
      <section style={{
        minHeight: "88vh",
        display: "flex", alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "5rem 1.5rem",
        background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,201,177,0.12), transparent)",
      }}>
        <div style={{ maxWidth: 720 }} className="fade-up">
          <div style={{
            display: "inline-block",
            background: "rgba(0,201,177,0.12)", color: "#00C9B1",
            border: "1px solid rgba(0,201,177,0.25)", borderRadius: 100,
            fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em",
            textTransform: "uppercase", padding: "0.35rem 1rem", marginBottom: "1.5rem",
          }}>
            Android IPTV App
          </div>
          <h1 className="font-display" style={{
            fontSize: "clamp(2.5rem, 7vw, 4.5rem)", fontWeight: 700, color: "#fff",
            letterSpacing: "-0.04em", lineHeight: 1.1, margin: "0 0 1.25rem",
          }}>
            Stream Everything,<br />
            <span style={{ color: "#00C9B1" }} className="teal-glow">Anywhere</span>
          </h1>
          <p style={{ color: "#7A8499", fontSize: "1.15rem", lineHeight: 1.7, marginBottom: "2.5rem" }}>
            IPTVMine Pro gives you Live TV, Movies, and Series on Android via M3U playlists and Vega-compatible provider extensions.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#download" style={{
              background: "linear-gradient(135deg, #00C9B1, #007A6E)", color: "#fff",
              padding: "0.85rem 2rem", borderRadius: 12, fontWeight: 600,
              textDecoration: "none", fontSize: "0.95rem",
            }}>
              Download APK
            </a>
            <Link href="/privacy-policy" style={{
              background: "rgba(255,255,255,0.05)", color: "#E8EAF0",
              padding: "0.85rem 2rem", borderRadius: 12, fontWeight: 500,
              textDecoration: "none", fontSize: "0.95rem",
              border: "1px solid rgba(255,255,255,0.08)",
            }}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>

      <section id="features" style={{ padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 className="font-display" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.03em", margin: "0 0 0.75rem" }}>
              Everything you need to stream
            </h2>
            <p style={{ color: "#7A8499", fontSize: "1.05rem" }}>Built with Kotlin, Jetpack Compose, and AndroidX Media3.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {features.map((f) => (
              <div key={f.title} style={{
                background: "var(--surface)", border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 16, padding: "1.5rem",
              }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{f.icon}</div>
                <h3 className="font-display" style={{ color: "#fff", fontWeight: 600, fontSize: "1rem", margin: "0 0 0.5rem" }}>{f.title}</h3>
                <p style={{ color: "#6B7587", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem", background: "var(--surface)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 className="font-display" style={{ textAlign: "center", color: "#fff", fontWeight: 700, fontSize: "1.75rem", margin: "0 0 2rem", letterSpacing: "-0.02em" }}>
            Legal & Privacy
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
            {legalCards.map((c) => (
              <Link key={c.href} href={c.href} style={{
                display: "block", background: "var(--surface2)",
                border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14,
                padding: "1.5rem", textDecoration: "none",
              }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>{c.icon}</div>
                <h3 style={{ color: "#00C9B1", fontWeight: 600, fontSize: "0.95rem", margin: "0 0 0.4rem" }}>{c.label}</h3>
                <p style={{ color: "#6B7587", fontSize: "0.82rem", lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="download" style={{ padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 className="font-display" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.03em", margin: "0 0 1rem" }}>
            Get IPTVMine Pro
          </h2>
          <p style={{ color: "#7A8499", marginBottom: "2rem" }}>Free and open-source Android app. No account required.</p>
          <a href="https://github.com/samyak/iptvmine-pro/releases" target="_blank" rel="noopener noreferrer" style={{
            display: "inline-block", background: "linear-gradient(135deg, #00C9B1, #007A6E)",
            color: "#fff", padding: "1rem 2.5rem", borderRadius: 12, fontWeight: 600,
            textDecoration: "none", fontSize: "1rem",
          }}>
            Download on GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
