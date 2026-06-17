"use client";

import Link from "next/link";
import {
  Tv, Clapperboard, Search, Puzzle, Gamepad2, Moon,
  Smartphone, Download, ShieldCheck, FileText, AlertTriangle,
  ArrowRight, Sparkles, Code2,
} from "lucide-react";

const features = [
  { Icon: Tv, title: "Live TV", desc: "Stream thousands of live channels via M3U playlists with category filtering." },
  { Icon: Clapperboard, title: "Movies & Series", desc: "Access VOD content through Vega-compatible provider extensions." },
  { Icon: Search, title: "Global Search", desc: "Unified search across channels, movies, series, and every extension." },
  { Icon: Puzzle, title: "Extensions", desc: "Install and manage JavaScript/TypeScript provider extensions dynamically." },
  { Icon: Gamepad2, title: "Advanced Player", desc: "Powered by AndroidX Media3 — supports HLS, DASH, RTSP, and more." },
  { Icon: Moon, title: "Modern UI", desc: "Jetpack Compose interface with a refined, teal-accented dark design." },
];

const legalCards = [
  { href: "/privacy-policy", label: "Privacy Policy", desc: "How we handle your data and protect your privacy.", Icon: ShieldCheck },
  { href: "/terms-and-conditions", label: "Terms & Conditions", desc: "Rules governing use of IPTVMine Pro.", Icon: FileText },
  { href: "/disclaimer", label: "Disclaimer", desc: "Content ownership and liability information.", Icon: AlertTriangle },
];

const creators = [
  {
    name: "Vighnya",
    github: "https://github.com/vighnya777",
  },
  {
    name: "Samyak",
    github: "https://github.com/samyak2403",
  },
];

export default function Home() {
  return (
    <div style={{ background: "var(--bg)", overflow: "hidden" }}>
      {/* ============ HERO ============ */}
      <section style={{
        minHeight: "92vh",
        display: "flex", alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "6rem 1.5rem 4rem",
        position: "relative",
      }}>
        {/* Ambient background */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 70% 45% at 50% -5%, rgba(0,229,199,0.16), transparent 70%), radial-gradient(ellipse 50% 40% at 90% 30%, rgba(110,91,255,0.08), transparent 70%)",
        }} />
        <div className="grain" />

        <div style={{ maxWidth: 760, position: "relative", zIndex: 1 }} className="fade-up">
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            background: "rgba(0,229,199,0.1)", color: "var(--teal)",
            border: "1px solid rgba(0,229,199,0.25)", borderRadius: 100,
            fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.06em",
            textTransform: "uppercase", padding: "0.4rem 1.1rem", marginBottom: "1.75rem",
          }}>
            <Sparkles size={13} />
            Android &amp; Android TV
          </div>

          <h1 className="font-display" style={{
            fontSize: "clamp(2.6rem, 7vw, 4.75rem)", fontWeight: 700, color: "#fff",
            letterSpacing: "-0.04em", lineHeight: 1.08, margin: "0 0 1.5rem",
          }}>
            Stream Everything,<br />
            <span style={{ color: "var(--teal)" }} className="teal-glow">Anywhere</span>
          </h1>

          <p style={{ color: "var(--text-dim)", fontSize: "1.2rem", lineHeight: 1.7, marginBottom: "2.75rem", maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>
            IPTVMine Pro brings Live TV, Movies, and Series to your phone and your television —
            powered by M3U playlists and Vega-compatible provider extensions.
          </p>

          <div style={{ display: "flex", gap: "0.9rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#download" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "linear-gradient(135deg, #00E5C7, #00A896)", color: "#07080B",
              padding: "0.95rem 2.1rem", borderRadius: 13, fontWeight: 600,
              textDecoration: "none", fontSize: "0.95rem",
              boxShadow: "0 8px 30px rgba(0,229,199,0.25)",
            }}>
              <Download size={17} strokeWidth={2.4} />
              Download Now
            </a>
            <a href="https://github.com/samyak/iptvmine-pro" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,0.04)", color: "var(--text)",
              padding: "0.95rem 2.1rem", borderRadius: 13, fontWeight: 500,
              textDecoration: "none", fontSize: "0.95rem",
              border: "1px solid var(--border-strong)",
            }}>
              <Code2 size={17} strokeWidth={2.2} />
              View Source
            </a>
          </div>
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section id="features" style={{ padding: "6rem 1.5rem", position: "relative" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }} className="fade-up">
            <p style={{ color: "var(--teal)", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              Capabilities
            </p>
            <h2 className="font-display" style={{ fontSize: "clamp(1.9rem, 4vw, 2.75rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.03em", margin: "0 0 0.85rem" }}>
              Everything you need to stream
            </h2>
            <p style={{ color: "var(--text-dim)", fontSize: "1.05rem" }}>
              Built with Kotlin, Jetpack Compose, and AndroidX Media3.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1.1rem" }}>
            {features.map(({ Icon, title, desc }) => (
              <div key={title} className="glass" style={{
                borderRadius: 18,
                padding: "1.75rem",
                transition: "transform 0.25s, border-color 0.25s",
              }}>
                <div style={{
                  width: 46, height: 46, borderRadius: 12,
                  background: "linear-gradient(135deg, rgba(0,229,199,0.16), rgba(0,229,199,0.04))",
                  border: "1px solid rgba(0,229,199,0.18)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "1.1rem",
                }}>
                  <Icon size={22} color="var(--teal)" strokeWidth={1.8} />
                </div>
                <h3 className="font-display" style={{ color: "#fff", fontWeight: 600, fontSize: "1.05rem", margin: "0 0 0.5rem" }}>{title}</h3>
                <p style={{ color: "var(--text-faint)", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DOWNLOAD — MOBILE + TV ============ */}
      <section id="download" style={{ padding: "6rem 1.5rem", background: "var(--bg-rise)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }} className="fade-up">
            <p style={{ color: "var(--teal)", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              Get the app
            </p>
            <h2 className="font-display" style={{ fontSize: "clamp(1.9rem, 4vw, 2.75rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.03em", margin: "0 0 0.85rem" }}>
              Two apps. One experience.
            </h2>
            <p style={{ color: "var(--text-dim)", fontSize: "1.05rem", maxWidth: 520, margin: "0 auto" }}>
              IPTVMine Pro for your phone, and a dedicated IPTVMine Pro TV build for the big screen.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {/* Mobile App Card */}
            <div className="glass" style={{ borderRadius: 22, padding: "2.25rem", position: "relative", overflow: "hidden" }}>
              <div style={{
                position: "absolute", top: -40, right: -40, width: 160, height: 160, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(0,229,199,0.14), transparent 70%)",
              }} />
              <div style={{
                width: 56, height: 56, borderRadius: 15,
                background: "linear-gradient(135deg, #00E5C7, #00786C)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "1.5rem", boxShadow: "0 8px 24px rgba(0,229,199,0.22)",
              }}>
                <Smartphone size={26} color="#07080B" strokeWidth={2} />
              </div>
              <h3 className="font-display" style={{ color: "#fff", fontWeight: 700, fontSize: "1.3rem", margin: "0 0 0.4rem" }}>
                IPTVMine Pro
              </h3>
              <p style={{ color: "var(--text-faint)", fontSize: "0.85rem", marginBottom: "0.25rem" }}>For Android phones &amp; tablets</p>
              <p style={{ color: "var(--text-dim)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.75rem" }}>
                The full mobile experience — Live TV, Movies, Series, global search, and extension management, optimized for touch.
              </p>
              <a href="/downloads/IPTVMinePro.zip" download style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%",
                background: "linear-gradient(135deg, #00E5C7, #00A896)", color: "#07080B",
                padding: "0.9rem 1.5rem", borderRadius: 12, fontWeight: 600,
                textDecoration: "none", fontSize: "0.92rem",
              }}>
                <Download size={16} strokeWidth={2.4} />
                Download APK
              </a>
              <p style={{ color: "var(--text-faint)", fontSize: "0.75rem", textAlign: "center", marginTop: "0.85rem", marginBottom: 0 }}>
                Stable release · Android 7.0+
              </p>
            </div>

            {/* TV App Card */}
            <div className="glass" style={{ borderRadius: 22, padding: "2.25rem", position: "relative", overflow: "hidden" }}>
              <div style={{
                position: "absolute", top: -40, right: -40, width: 160, height: 160, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(110,91,255,0.14), transparent 70%)",
              }} />
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem",
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 15,
                  background: "linear-gradient(135deg, #6E5BFF, #3D2EBF)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 8px 24px rgba(110,91,255,0.22)",
                }}>
                  <Tv size={26} color="#fff" strokeWidth={2} />
                </div>
                <span style={{
                  background: "rgba(255,180,84,0.12)", color: "var(--amber)",
                  border: "1px solid rgba(255,180,84,0.3)", borderRadius: 100,
                  fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.05em",
                  textTransform: "uppercase", padding: "0.3rem 0.75rem",
                }}>
                  Beta
                </span>
              </div>
              <h3 className="font-display" style={{ color: "#fff", fontWeight: 700, fontSize: "1.3rem", margin: "0 0 0.4rem" }}>
                IPTVMine Pro TV
              </h3>
              <p style={{ color: "var(--text-faint)", fontSize: "0.85rem", marginBottom: "0.25rem" }}>For Android TV &amp; Google TV</p>
              <p style={{ color: "var(--text-dim)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.75rem" }}>
                A dedicated 10-foot UI built for remote navigation and the living room. Early beta — feedback welcome.
              </p>
              <a href="/downloads/IPTVMinePro-TV-beta.apk" download style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%",
                background: "rgba(255,255,255,0.06)", color: "#fff",
                padding: "0.9rem 1.5rem", borderRadius: 12, fontWeight: 600,
                textDecoration: "none", fontSize: "0.92rem",
                border: "1px solid var(--border-strong)",
              }}>
                <Download size={16} strokeWidth={2.4} />
                Download Beta APK
              </a>
              <p style={{ color: "var(--text-faint)", fontSize: "0.75rem", textAlign: "center", marginTop: "0.85rem", marginBottom: 0 }}>
                Beta release · Android TV 9.0+
              </p>
            </div>
          </div>

          <p style={{ color: "var(--text-faint)", fontSize: "0.8rem", textAlign: "center", marginTop: "2rem" }}>
            Installing from outside the Play Store requires enabling "Install from unknown sources" in your device settings.
          </p>
        </div>
      </section>

      {/* ============ LEGAL QUICK LINKS ============ */}
      <section style={{ padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 950, margin: "0 auto" }}>
          <h2 className="font-display" style={{ textAlign: "center", color: "#fff", fontWeight: 700, fontSize: "1.85rem", margin: "0 0 2.25rem", letterSpacing: "-0.02em" }}>
            Legal &amp; Privacy
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.1rem" }}>
            {legalCards.map(({ href, label, desc, Icon }) => (
              <Link key={href} href={href} className="glass" style={{
                display: "block", borderRadius: 16,
                padding: "1.6rem", textDecoration: "none",
              }}>
                <div style={{
                  width: 38, height: 38, borderRadius: 10,
                  background: "var(--surface-2)", border: "1px solid var(--border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "1rem",
                }}>
                  <Icon size={18} color="var(--teal)" strokeWidth={1.8} />
                </div>
                <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "0.98rem", margin: "0 0 0.45rem", display: "flex", alignItems: "center", gap: 6 }}>
                  {label}
                  <ArrowRight size={14} color="var(--teal)" />
                </h3>
                <p style={{ color: "var(--text-faint)", fontSize: "0.84rem", lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DEVELOPERS ============ */}
      <section style={{ padding: "4rem 1.5rem 6rem", textAlign: "center" }}>
        <p style={{ color: "var(--text-faint)", fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
          Crafted by
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          {creators.map((creator) => (
            <a
              key={creator.name}
              href={creator.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 100,
                  padding: "0.6rem 1.4rem",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.borderColor = "#00E5C7";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "var(--border)";
                }}
              >
                <div style={{
                  width: 26,
                  height: 26,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #00E5C7, #6E5BFF)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#07080B",
                }}>
                  {creator.name[0]}
                </div>
                <span style={{ color: "var(--text)", fontWeight: 600, fontSize: "0.9rem" }}>
                  {creator.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
