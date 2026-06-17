import Link from "next/link";
import { ShieldCheck, FileText, AlertTriangle, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const LEGAL_CARDS = [
  { href: "/privacy-policy", label: "Privacy Policy", desc: "How we handle your data and protect your privacy.", Icon: ShieldCheck },
  { href: "/terms-and-conditions", label: "Terms & Conditions", desc: "Rules governing use of IPTVMine Pro.", Icon: FileText },
  { href: "/disclaimer", label: "Disclaimer", desc: "Content ownership and liability information.", Icon: AlertTriangle },
];

export default function LegalSection() {
  return (
    <section style={{ padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: 950, margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", marginBottom: "2.25rem" }}>
          <h2 className="font-display" style={{ color: "#fff", fontWeight: 700, fontSize: "1.85rem", margin: 0, letterSpacing: "-0.02em" }}>
            Legal &amp; Privacy
          </h2>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.1rem" }}>
          {LEGAL_CARDS.map(({ href, label, desc, Icon }, i) => (
            <Reveal key={href} style={{ transitionDelay: `${i * 70}ms` }}>
              <Link
                href={href}
                className="glass glow-border hover-lift legal-card"
                style={{
                  display: "block",
                  borderRadius: "var(--radius-md)",
                  padding: "1.6rem",
                  textDecoration: "none",
                  height: "100%",
                }}
              >
                <div
                  className="legal-icon-wrap"
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
                    transition: "transform 0.4s var(--ease-spring)",
                  }}
                >
                  <Icon size={18} color="var(--teal)" strokeWidth={1.8} />
                </div>
                <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "0.98rem", margin: "0 0 0.45rem", display: "flex", alignItems: "center", gap: 6 }}>
                  {label}
                  <ArrowRight size={14} color="var(--teal)" className="legal-arrow" style={{ transition: "transform 0.3s ease" }} />
                </h3>
                <p style={{ color: "var(--text-faint)", fontSize: "0.84rem", lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .legal-card:hover .legal-icon-wrap { transform: scale(1.1) rotate(-4deg); }
        .legal-card:hover .legal-arrow { transform: translateX(4px); }
      `}</style>
    </section>
  );
}
