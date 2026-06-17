/**
 * PhoneIllustration
 * ----------------------------------------------------------------------
 * Lightweight inline SVG mockup of a phone showing a simplified version of
 * the app UI (search bar, poster grid, nav rail). Avoids shipping a large
 * raster mockup image while still giving the Mobile download section a
 * concrete "this is what it looks like" visual anchor.
 */
export default function PhoneIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 560"
      width="100%"
      height="100%"
      className={className}
      role="img"
      aria-label="IPTVMine Pro mobile app preview"
    >
      <defs>
        <linearGradient id="phoneScreenGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#10141C" />
          <stop offset="100%" stopColor="#070A0F" />
        </linearGradient>
        <linearGradient id="phonePosterGrad1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00E5C7" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#00786C" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id="phonePosterGrad2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6E5BFF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#4732CC" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Phone body */}
      <rect x="10" y="10" width="300" height="540" rx="38" fill="#0B0D12" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
      {/* Screen */}
      <rect x="24" y="34" width="272" height="492" rx="22" fill="url(#phoneScreenGrad)" />
      {/* Notch */}
      <rect x="130" y="46" width="60" height="10" rx="5" fill="rgba(255,255,255,0.18)" />

      {/* Status / header */}
      <text x="46" y="92" fill="#00E5C7" fontSize="16" fontWeight="700" fontFamily="Space Grotesk, sans-serif">
        IPTVMine
      </text>

      {/* Search bar */}
      <rect x="46" y="112" width="228" height="34" rx="17" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
      <circle cx="64" cy="129" r="6" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
      <line x1="69" y1="134" x2="74" y2="139" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" />

      {/* Poster grid */}
      {[0, 1].map((row) =>
        [0, 1, 2].map((col) => {
          const x = 46 + col * 80;
          const y = 168 + row * 150;
          const grad = (row + col) % 2 === 0 ? "url(#phonePosterGrad1)" : "url(#phonePosterGrad2)";
          return <rect key={`${row}-${col}`} x={x} y={y} width="66" height="100" rx="10" fill={grad} />;
        })
      )}

      {/* Bottom nav */}
      <rect x="24" y="478" width="272" height="48" rx="0" fill="rgba(255,255,255,0.03)" />
      {[0, 1, 2, 3].map((i) => (
        <circle key={i} cx={70 + i * 60} cy={502} r={6} fill={i === 0 ? "#00E5C7" : "rgba(255,255,255,0.25)"} />
      ))}
    </svg>
  );
}
