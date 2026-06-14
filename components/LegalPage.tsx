"use client";
import { useState, useEffect, useRef } from "react";

interface Section {
  id: string;
  title: string;
}

interface LegalPageProps {
  badge: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: Section[];
  children: React.ReactNode;
}

export default function LegalPage({
  badge,
  title,
  subtitle,
  lastUpdated,
  sections,
  children,
}: LegalPageProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Observe all section headings so the TOC highlights on scroll
  useEffect(() => {
    observerRef.current?.disconnect();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, [sections]);

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Hero banner */}
      <div
        style={{
          background:
            "linear-gradient(135deg, rgba(0,201,177,0.08) 0%, rgba(10,12,16,0) 60%)",
          borderBottom: "1px solid rgba(0,201,177,0.08)",
          padding: "4rem 1.5rem 3rem",
          textAlign: "center",
        }}
        className="fade-up"
      >
        <div
          style={{
            display: "inline-block",
            background: "rgba(0,201,177,0.12)",
            color: "#00C9B1",
            border: "1px solid rgba(0,201,177,0.25)",
            borderRadius: 100,
            fontSize: "0.78rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "0.35rem 1rem",
            marginBottom: "1.25rem",
          }}
        >
          {badge}
        </div>
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "-0.03em",
            margin: "0 0 0.75rem",
          }}
        >
          {title}
        </h1>
        <p style={{ color: "#7A8499", fontSize: "1.05rem", margin: "0 0 1rem" }}>
          {subtitle}
        </p>
        <span
          style={{
            display: "inline-block",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 6,
            padding: "0.3rem 0.9rem",
            fontSize: "0.8rem",
            color: "#5A6478",
          }}
        >
          Last updated: {lastUpdated}
        </span>
      </div>

      {/* Body: TOC sidebar + content */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "3rem 1.5rem",
          display: "grid",
          gridTemplateColumns: "240px 1fr",
          gap: "3rem",
          alignItems: "start",
        }}
        className="legal-grid"
      >
        {/* Sticky TOC */}
        <aside
          style={{
            position: "sticky",
            top: 80,
            background: "var(--surface)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 14,
            padding: "1.25rem",
          }}
          className="legal-toc"
        >
          <p
            style={{
              color: "#4A5568",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              margin: "0 0 1rem",
            }}
          >
            Contents
          </p>
          <nav>
            {sections.map(({ id, title: t }) => (
              <a
                key={id}
                href={`#${id}`}
                style={{
                  display: "block",
                  padding: "0.45rem 0.75rem",
                  borderRadius: 7,
                  fontSize: "0.82rem",
                  lineHeight: 1.5,
                  color: activeId === id ? "#00C9B1" : "#5A6478",
                  background:
                    activeId === id ? "rgba(0,201,177,0.08)" : "transparent",
                  borderLeft:
                    activeId === id
                      ? "2px solid #00C9B1"
                      : "2px solid transparent",
                  textDecoration: "none",
                  transition: "all 0.2s",
                  marginBottom: "0.15rem",
                }}
              >
                {t}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <article className="legal-prose fade-up-2">{children}</article>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .legal-grid {
            grid-template-columns: 1fr !important;
          }
          .legal-toc {
            position: static !important;
          }
        }
      `}</style>
    </div>
  );
}
