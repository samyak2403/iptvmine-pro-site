"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Smartphone, Tv, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { MOBILE_SCREENSHOTS, TV_SCREENSHOTS } from "@/lib/data";

type Tab = "mobile" | "tv";

export default function ScreenshotGallery() {
  const [tab, setTab] = useState<Tab>(MOBILE_SCREENSHOTS.length > 0 ? "mobile" : "tv");
  const scrollerRef = useRef<HTMLDivElement>(null);

  const active = tab === "mobile" ? MOBILE_SCREENSHOTS : TV_SCREENSHOTS;
  const isPortrait = tab === "mobile";

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (isPortrait ? 240 : 420), behavior: "smooth" });
  };

  return (
    <section id="screenshots" style={{ padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", marginBottom: "2.25rem" }}>
          <p style={{ color: "var(--teal)", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
            See it in action
          </p>
          <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 3.6vw, 2.4rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", margin: "0 0 1.5rem" }}>
            Screenshots
          </h2>

          {/* Tabs */}
          <div style={{ display: "inline-flex", gap: "0.4rem", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 100, padding: "0.3rem" }}>
            <button
              onClick={() => setTab("mobile")}
              disabled={MOBILE_SCREENSHOTS.length === 0}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                padding: "0.55rem 1.3rem",
                borderRadius: 100,
                border: "none",
                cursor: MOBILE_SCREENSHOTS.length === 0 ? "not-allowed" : "pointer",
                background: tab === "mobile" ? "linear-gradient(135deg, #00E5C7, #00A896)" : "transparent",
                color: tab === "mobile" ? "#07080B" : "var(--text-dim)",
                fontWeight: 600,
                fontSize: "0.85rem",
                opacity: MOBILE_SCREENSHOTS.length === 0 ? 0.4 : 1,
                transition: "all 0.25s ease",
              }}
            >
              <Smartphone size={15} />
              Mobile
            </button>
            <button
              onClick={() => setTab("tv")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                padding: "0.55rem 1.3rem",
                borderRadius: 100,
                border: "none",
                cursor: "pointer",
                background: tab === "tv" ? "linear-gradient(135deg, #6E5BFF, #4732CC)" : "transparent",
                color: tab === "tv" ? "#fff" : "var(--text-dim)",
                fontWeight: 600,
                fontSize: "0.85rem",
                transition: "all 0.25s ease",
              }}
            >
              <Tv size={15} />
              Android TV
            </button>
          </div>
        </Reveal>

        {active.length === 0 ? (
          <p style={{ textAlign: "center", color: "var(--text-faint)", fontSize: "0.9rem" }}>
            Screenshots for this device are coming soon.
          </p>
        ) : (
          <Reveal style={{ position: "relative" }}>
            {/* Carousel controls */}
            <button
              aria-label="Scroll left"
              onClick={() => scrollBy(-1)}
              className="carousel-arrow hover-scale"
              style={{ left: -8 }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              aria-label="Scroll right"
              onClick={() => scrollBy(1)}
              className="carousel-arrow hover-scale"
              style={{ right: -8 }}
            >
              <ChevronRight size={20} />
            </button>

            <div
              ref={scrollerRef}
              className="scrollbar-hidden"
              style={{
                display: "flex",
                gap: "1.25rem",
                overflowX: "auto",
                scrollSnapType: "x mandatory",
                padding: "0.5rem 0.25rem 1.5rem",
              }}
            >
              {active.map((shot) => (
                <figure
                  key={shot.src}
                  className="glass glow-border screenshot-card"
                  style={{
                    flex: "0 0 auto",
                    width: isPortrait ? 220 : 380,
                    borderRadius: "var(--radius-md)",
                    overflow: "hidden",
                    scrollSnapAlign: "start",
                    margin: 0,
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: isPortrait ? "1080 / 2400" : "1600 / 963",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes={isPortrait ? "220px" : "380px"}
                      style={{ objectFit: "cover", transition: "transform 0.5s var(--ease-out-expo)" }}
                      className="screenshot-img"
                    />
                  </div>
                  <figcaption
                    style={{
                      padding: "0.75rem 1rem",
                      fontSize: "0.8rem",
                      color: "var(--text-dim)",
                      fontWeight: 500,
                      borderTop: "1px solid var(--border)",
                    }}
                  >
                    {shot.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        )}
      </div>

      <style>{`
        .screenshot-card:hover .screenshot-img {
          transform: scale(1.08);
        }
        .carousel-arrow {
          position: absolute;
          top: 40%;
          transform: translateY(-50%);
          z-index: 2;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(14,17,23,0.85);
          border: 1px solid var(--border-strong);
          color: var(--text);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        @media (max-width: 640px) {
          .carousel-arrow { display: none; }
        }
      `}</style>
    </section>
  );
}
