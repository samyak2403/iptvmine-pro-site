import Link from "next/link";

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

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      background: "#0A0C10",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "3.5rem 1.5rem 2rem",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2.5rem",
          marginBottom: "3rem",
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1rem" }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8,
                background: "linear-gradient(135deg, #00C9B1, #007A6E)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <polygon points="5,3 19,12 5,21" fill="white" />
                </svg>
              </div>
              <span className="font-display" style={{ fontSize: "1.05rem", fontWeight: 700, color: "#fff" }}>
                IPTVMine<span style={{ color: "#00C9B1" }}>Pro</span>
              </span>
            </div>
            <p style={{ color: "#6B7587", fontSize: "0.875rem", lineHeight: 1.7, maxWidth: 220 }}>
              Stream Live TV, Movies, and Series on Android with powerful provider extensions.
            </p>
          </div>

          <div>
            <h4 className="font-display" style={{ color: "#fff", fontWeight: 600, fontSize: "0.875rem", marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              About
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {aboutLinks.map((l) => (
                <li key={l.href} style={{ marginBottom: "0.6rem" }}>
                  <Link href={l.href} style={{ color: "#6B7587", fontSize: "0.875rem", textDecoration: "none" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display" style={{ color: "#fff", fontWeight: 600, fontSize: "0.875rem", marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Legal
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {legalLinks.map((l) => (
                <li key={l.href} style={{ marginBottom: "0.6rem" }}>
                  <Link href={l.href} style={{ color: "#6B7587", fontSize: "0.875rem", textDecoration: "none" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display" style={{ color: "#fff", fontWeight: 600, fontSize: "0.875rem", marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Contact
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "0.6rem" }}>
                <a href="mailto:support@iptvminepro.app" style={{ color: "#6B7587", fontSize: "0.875rem", textDecoration: "none" }}>
                  support@iptvminepro.app
                </a>
              </li>
              <li>
                <a href="https://github.com/samyak/iptvmine-pro" target="_blank" rel="noopener noreferrer" style={{ color: "#6B7587", fontSize: "0.875rem", textDecoration: "none" }}>
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ height: 1, background: "rgba(255,255,255,0.05)", marginBottom: "1.5rem" }} />

        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" }}>
          <p style={{ color: "#4A5568", fontSize: "0.8rem", margin: 0 }}>
            © {year} IPTVMine Pro. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} style={{ color: "#4A5568", fontSize: "0.8rem", textDecoration: "none" }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
