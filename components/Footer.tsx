import Link from "next/link";
import { PlayCircle, Mail, Smartphone, Tv } from "lucide-react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.73.08-.73 1.21.09 1.85 1.25 1.85 1.25 1.08 1.84 2.83 1.31 3.52 1 .11-.78.41-1.31.75-1.61-2.67-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.47 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.21.7.82.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  );
}

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/disclaimer", label: "Disclaimer" },
];

const aboutLinks = [
  { href: "/", label: "Home" },
  { href: "/#features", label: "Features" },
  { href: "/#download", label: "Download" },
];

const downloadLinks = [
  { href: "/downloads/IPTVMinePro.apk", label: "Mobile App", icon: Smartphone },
  { href: "/downloads/IPTVMinePro-TV-beta.apk", label: "TV App (Beta)", icon: Tv },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      background: "var(--bg)",
      borderTop: "1px solid var(--border)",
      padding: "4rem 1.5rem 2rem",
      position: "relative",
    }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
          gap: "2.5rem",
          marginBottom: "3rem",
        }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.1rem" }}>
              <div style={{
                width: 34, height: 34, borderRadius: 9,
                background: "linear-gradient(135deg, #00E5C7, #00786C)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <PlayCircle size={18} color="#07080B" strokeWidth={2.4} />
              </div>
              <span className="font-display" style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff" }}>
                IPTVMine<span style={{ color: "var(--teal)" }}>Pro</span>
              </span>
            </div>
            <p style={{ color: "var(--text-faint)", fontSize: "0.875rem", lineHeight: 1.75, maxWidth: 260, marginBottom: "1.25rem" }}>
              A premium Android IPTV experience for Live TV, Movies, and Series — built on Kotlin, Jetpack Compose, and Media3.
            </p>
            <div style={{ display: "flex", gap: "0.6rem" }}>
              <a href="https://github.com/samyak/iptvmine-pro" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                style={{
                  width: 36, height: 36, borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center",
                  background: "var(--surface-2)", border: "1px solid var(--border)", color: "var(--text-dim)",
                }}>
                <GithubIcon size={16} />
              </a>
              <a href="mailto:support@iptvminepro.app" aria-label="Email"
                style={{
                  width: 36, height: 36, borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center",
                  background: "var(--surface-2)", border: "1px solid var(--border)", color: "var(--text-dim)",
                }}>
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="font-display" style={{ color: "#fff", fontWeight: 600, fontSize: "0.8rem", marginBottom: "1.1rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              About
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {aboutLinks.map((l) => (
                <li key={l.href} style={{ marginBottom: "0.65rem" }}>
                  <Link href={l.href} style={{ color: "var(--text-faint)", fontSize: "0.875rem", textDecoration: "none" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display" style={{ color: "#fff", fontWeight: 600, fontSize: "0.8rem", marginBottom: "1.1rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Legal
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {legalLinks.map((l) => (
                <li key={l.href} style={{ marginBottom: "0.65rem" }}>
                  <Link href={l.href} style={{ color: "var(--text-faint)", fontSize: "0.875rem", textDecoration: "none" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Downloads */}
          <div>
            <h4 className="font-display" style={{ color: "#fff", fontWeight: 600, fontSize: "0.8rem", marginBottom: "1.1rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Download
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {downloadLinks.map((l) => (
                <li key={l.href} style={{ marginBottom: "0.65rem" }}>
                  <a href={l.href} download style={{ color: "var(--text-faint)", fontSize: "0.875rem", textDecoration: "none", display: "flex", alignItems: "center", gap: 7 }}>
                    <l.icon size={14} />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ height: 1, background: "var(--border)", marginBottom: "1.75rem" }} />

        {/* Developers credit */}
        <div style={{
          display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between",
          gap: "1rem", marginBottom: "1.75rem",
        }}>
          <p style={{ color: "var(--text-faint)", fontSize: "0.8rem", margin: 0 }}>
            © {year} IPTVMine Pro. All rights reserved.
          </p>
          <p style={{ color: "var(--text-faint)", fontSize: "0.8rem", margin: 0 }}>
            Developed by{" "}
            <a 
              href="https://github.com/vighnya777" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: "var(--text-dim)", fontWeight: 600, textDecoration: "none" }}
            >
              Vighnya
            </a>
            {" "}&amp;{" "}
            <a 
              href="https://github.com/samyak2403" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: "var(--text-dim)", fontWeight: 600, textDecoration: "none" }}
            >
              Samyak
            </a>
          </p>
        </div>

        <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", justifyContent: "center" }}>
          {legalLinks.map((l) => (
            <Link key={l.href} href={l.href} style={{ color: "var(--text-faint)", fontSize: "0.8rem", textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
