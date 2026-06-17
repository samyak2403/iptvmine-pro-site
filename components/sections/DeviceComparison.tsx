import { Check, X, Smartphone, Tv } from "lucide-react";
import Reveal from "@/components/Reveal";
import { COMPARISON_ROWS } from "@/lib/data";

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span style={{ color: "var(--text)", fontSize: "0.85rem", fontWeight: 500 }}>{value}</span>;
  }
  return value ? (
    <Check size={18} color="var(--teal)" strokeWidth={2.6} />
  ) : (
    <X size={18} color="var(--text-faint)" strokeWidth={2.4} />
  );
}

export default function DeviceComparison() {
  return (
    <section style={{ padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", marginBottom: "2.75rem" }}>
          <p style={{ color: "var(--teal)", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
            Choose your device
          </p>
          <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 3.6vw, 2.4rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", margin: 0 }}>
            Mobile vs. TV
          </h2>
        </Reveal>

        <Reveal>
          <div className="glass" style={{ borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
            {/* Header row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.4fr 0.8fr 0.8fr",
                padding: "1.1rem 1.5rem",
                borderBottom: "1px solid var(--border)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <span style={{ color: "var(--text-faint)", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Capability
              </span>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, color: "var(--teal)", fontSize: "0.82rem", fontWeight: 600 }}>
                <Smartphone size={15} />
                Mobile
              </span>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, color: "var(--violet)", fontSize: "0.82rem", fontWeight: 600 }}>
                <Tv size={15} />
                TV
              </span>
            </div>

            {/* Rows */}
            {COMPARISON_ROWS.map((row, i) => (
              <div
                key={row.label}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.4fr 0.8fr 0.8fr",
                  alignItems: "center",
                  padding: "0.9rem 1.5rem",
                  borderBottom: i < COMPARISON_ROWS.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <span style={{ color: "var(--text-dim)", fontSize: "0.86rem" }}>{row.label}</span>
                <span style={{ display: "flex", justifyContent: "center" }}>
                  <CellValue value={row.mobile} />
                </span>
                <span style={{ display: "flex", justifyContent: "center" }}>
                  <CellValue value={row.tv} />
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
