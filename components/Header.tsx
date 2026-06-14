"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
        background: scrolled
          ? "rgba(10,12,16,0.92)"
          : "rgba(10,12,16,0.60)",
        backdropFilter: "blur(18px)",
        borderBottom: `1px solid ${scrolled ? "rgba(0,201,177,0.12)" : "transparent"}`,
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 1.5rem",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "linear-gradient(135deg, #00C9B1, #007A6E)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <polygon points="5,3 19,12 5,21" fill="white" />
            </svg>
          </div>
          <span
            className="font-display"
            style={{ fontSize: "1.15rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}
          >
            IPTVMine<span style={{ color: "#00C9B1" }}>Pro</span>
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
                  padding: "0.4rem 0.85rem",
                  borderRadius: 8,
                  fontSize: "0.875rem",
                  fontWeight: active ? 600 : 400,
                  color: active ? "#00C9B1" : "#9AA3B8",
                  background: active ? "rgba(0,201,177,0.1)" : "transparent",
                  textDecoration: "none",
                  transition: "all 0.2s",
                  border: active ? "1px solid rgba(0,201,177,0.2)" : "1px solid transparent",
                }}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="show-mobile"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 6,
            color: "#E8EAF0",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor">
            {open ? (
              <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
            ) : (
              <>
                <rect y="4" width="22" height="2" rx="1" />
                <rect y="10" width="22" height="2" rx="1" />
                <rect y="16" width="22" height="2" rx="1" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "rgba(15,18,24,0.98)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
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
                  padding: "0.75rem 1rem",
                  borderRadius: 10,
                  fontSize: "0.95rem",
                  fontWeight: active ? 600 : 400,
                  color: active ? "#00C9B1" : "#9AA3B8",
                  background: active ? "rgba(0,201,177,0.1)" : "transparent",
                  textDecoration: "none",
                  borderLeft: active ? "3px solid #00C9B1" : "3px solid transparent",
                }}
              >
                {l.label}
              </Link>
            );
          })}
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
