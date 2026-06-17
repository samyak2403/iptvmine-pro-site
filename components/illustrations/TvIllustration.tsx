/**
 * TvIllustration
 * ----------------------------------------------------------------------
 * Lightweight inline SVG mockup of a television showing a simplified
 * 10-foot UI (sidebar nav + featured row), mirroring the actual app
 * screenshots without shipping another large raster image.
 */
export default function TvIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 360"
      width="100%"
      height="100%"
      className={className}
      role="img"
      aria-label="IPTVMine Pro TV app preview"
    >
      <defs>
        <linearGradient id="tvScreenGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#10141C" />
          <stop offset="100%" stopColor="#070A0F" />
        </linearGradient>
        <linearGradient id="tvHeroGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6E5BFF" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#1B1340" stopOpacity="0.55" />
        </linearGradient>
      </defs>

      {/* TV body */}
      <rect x="10" y="10" width="540" height="300" rx="14" fill="#0B0D12" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
      {/* Screen */}
      <rect x="24" y="24" width="512" height="272" rx="8" fill="url(#tvScreenGrad)" />

      {/* Sidebar */}
      <rect x="24" y="24" width="86" height="272" fill="rgba(255,255,255,0.03)" />
      <text x="40" y="56" fill="#00E5C7" fontSize="11" fontWeight="700" fontFamily="Space Grotesk, sans-serif">
        IPTV
      </text>
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x="36"
          y={82 + i * 30}
          width={i === 1 ? 50 : 38}
          height="8"
          rx="4"
          fill={i === 1 ? "#00E5C7" : "rgba(255,255,255,0.18)"}
        />
      ))}

      {/* Hero banner */}
      <rect x="126" y="44" width="392" height="110" rx="10" fill="url(#tvHeroGrad)" />
      <rect x="144" y="62" width="60" height="14" rx="4" fill="rgba(0,229,199,0.5)" />
      <rect x="144" y="86" width="160" height="12" rx="3" fill="rgba(255,255,255,0.65)" />
      <rect x="144" y="106" width="110" height="20" rx="6" fill="rgba(255,255,255,0.85)" />

      {/* Poster row */}
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={126 + i * 80}
          y={172}
          width="66"
          height="96"
          rx="8"
          fill={i % 2 === 0 ? "rgba(0,229,199,0.3)" : "rgba(110,91,255,0.3)"}
          stroke={i === 1 ? "#00E5C7" : "transparent"}
          strokeWidth={i === 1 ? 2 : 0}
        />
      ))}

      {/* Remote (decorative, floating beside TV) */}
      <g transform="translate(486, 230)">
        <rect x="0" y="0" width="34" height="90" rx="14" fill="#181C27" stroke="rgba(255,255,255,0.15)" />
        <circle cx="17" cy="20" r="7" fill="rgba(0,229,199,0.6)" />
        <rect x="9" y="36" width="16" height="16" rx="8" fill="rgba(255,255,255,0.15)" />
        <circle cx="17" cy="68" r="5" fill="rgba(255,255,255,0.2)" />
      </g>
    </svg>
  );
}
