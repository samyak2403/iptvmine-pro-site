"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, PlayCircle, Download } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: scrolled ? "rgba(7,8,11,0.85)" : "rgba(7,8,11,0.4)",
        backdropFilter: "blur(20px) saturate(140%)",
        borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
        transition: "all 0.35s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 1.5rem",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 11 }}>
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 11,
              background: "linear-gradient(135deg, #00E5C7, #00786C)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              boxShadow: "0 4px 18px rgba(0,229,199,0.25)",
            }}
          >
            <PlayCircle size={20} color="#07080B" strokeWidth={2.4} />
          </div>
          <span
            className="font-display"
            style={{ fontSize: "1.2rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}
          >
            IPTVMine<span style={{ color: "var(--teal)" }}>Pro</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: "0.25rem", alignItems: "center" }} className="hidden-mobile">
          {navLinks.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  padding: "0.45rem 0.9rem",
                  borderRadius: 8,
                  fontSize: "0.875rem",
                  fontWeight: active ? 600 : 500,
                  color: active ? "var(--teal)" : "var(--text-dim)",
                  background: active ? "rgba(0,229,199,0.08)" : "transparent",
                  textDecoration: "none",
                  transition: "all 0.2s",
                  border: active ? "1px solid rgba(0,229,199,0.18)" : "1px solid transparent",
                }}
              >
                {l.label}
              </Link>
            );
          })}
          <a
            href="#download"
            style={{
              marginLeft: "0.75rem",
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: "linear-gradient(135deg, #00E5C7, #00A896)",
              color: "#07080B",
              padding: "0.5rem 1.1rem",
              borderRadius: 9,
              fontWeight: 600,
              fontSize: "0.85rem",
              textDecoration: "none",
            }}
          >
            <Download size={15} strokeWidth={2.4} />
            Download
          </a>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="show-mobile"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 6, color: "var(--text)" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "rgba(11,13,18,0.99)",
            borderTop: "1px solid var(--border)",
            padding: "1rem 1.5rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
          }}
          className="show-mobile"
        >
          {navLinks.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  padding: "0.8rem 1rem",
                  borderRadius: 10,
                  fontSize: "0.95rem",
                  fontWeight: active ? 600 : 400,
                  color: active ? "var(--teal)" : "var(--text-dim)",
                  background: active ? "rgba(0,229,199,0.08)" : "transparent",
                  textDecoration: "none",
                  borderLeft: active ? "3px solid var(--teal)" : "3px solid transparent",
                }}
              >
                {l.label}
              </Link>
            );
          })}
          <a
            href="#download"
            style={{
              marginTop: "0.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              background: "linear-gradient(135deg, #00E5C7, #00A896)",
              color: "#07080B",
              padding: "0.75rem 1.1rem",
              borderRadius: 10,
              fontWeight: 600,
              fontSize: "0.9rem",
              textDecoration: "none",
            }}
          >
            <Download size={16} strokeWidth={2.4} />
            Download App
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
