import { CARS, fmt } from "../data/lamzy";
import CarImage from "./CarImage";


export function SectionHeader({ label, title, dim }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 4 }}>
      <p style={{
        fontFamily: "'DM Sans',sans-serif",
        fontSize: "0.72rem", color: "#D6AB58",
        letterSpacing: "3px", textTransform: "uppercase", marginBottom: 10,
      }}>{label}</p>
      <h2 style={{
        fontFamily: "'Bebas Neue',cursive",
        fontSize: "clamp(2rem,6vw,3.2rem)",
        color: "#F0EBDC", letterSpacing: "1px", lineHeight: 1, margin: 0,
      }}>
        {title} <span style={{ color: "rgba(240,235,220,0.25)" }}>{dim}</span>
      </h2>
    </div>
  );
}

// ─── Fleet Section ─────────────────────────────────────────────────────────
export default function Fleet({ onQuickBook }) {
  return (
    <section id="fleet" style={{ padding: "5rem 1.5rem", background: "#883e3e" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <SectionHeader label="Our Fleet" title="Every vehicle for" dim="every occasion" />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "1.1rem",
          marginTop: "2.5rem",
        }}>
          {CARS.map(car => (
            <CarCard key={car.id} car={car} onQuickBook={onQuickBook} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CarCard({ car, onQuickBook }) {
  return (
    <div
      style={{
        background: "#926767",
        border: "1px solid rgba(214,171,88,0.1)",
        borderRadius: 16,
        padding: "1.4rem",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.25s ease",
        overflow: "hidden",
        
      }}
      onMouseOver={e => {
        e.currentTarget.style.borderColor = "rgba(214,171,88,0.35)";
        e.currentTarget.style.transform   = "translateY(-3px)";
        e.currentTarget.style.background  = "#141310";
      }}
      onMouseOut={e => {
        e.currentTarget.style.borderColor = "rgba(214,171,88,0.1)";
        e.currentTarget.style.transform   = "none";
        e.currentTarget.style.background  = "#111";
      }}
    >
      {/* ── Badge row ── */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: car.image ? 0 : 4, minHeight: 24 }}>
        {car.badge && (
          <span style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: "0.65rem", fontWeight: 700,
            letterSpacing: "0.8px", textTransform: "uppercase",
            color: car.badgeColor,
            background: `${car.badgeColor}18`,
            border: `1px solid ${car.badgeColor}40`,
            borderRadius: 50, padding: "3px 9px",
            alignSelf: "flex-start",
          }}>{car.badge}</span>
        )}
      </div>

      <CarImage car={car} size="lg" />

      
      <h3 style={{
        fontFamily: "'Bebas Neue',cursive",
        fontSize: "1.2rem", color: "#F0EBDC",
        letterSpacing: "0.5px", marginBottom: 3,
      }}>{car.name}</h3>

      <p style={{
        fontFamily: "'DM Sans',sans-serif",
        fontSize: "0.75rem", color: "rgba(240,235,220,0.4)", marginBottom: 14,
      }}>{car.type} · {car.seats} seats</p>

      {/* ── Feature tags ── */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 18 }}>
        {car.features.map(f => (
          <span key={f} style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: "0.66rem", color: "rgba(214,171,88,0.75)",
            background: "rgba(214,171,88,0.05)",
            border: "1px solid rgba(214,171,88,0.12)",
            borderRadius: 50, padding: "3px 9px",
          }}>{f}</span>
        ))}
      </div>

      {/* ── Price + Book button ── */}
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginTop: "auto" }}>
        <div>
          <span style={{ fontFamily: "'Bebas Neue',cursive", fontSize: "1.5rem", color: "#D6AB58" }}>
            {fmt(car.price)}
          </span>
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.68rem", color: "rgba(240,235,220,0.3)", marginLeft: 3 }}>
            /day
          </span>
        </div>

        <button
          onClick={() => onQuickBook(car.id)}
          style={{
            fontFamily: "'DM Sans',sans-serif", fontWeight: 600, fontSize: "0.76rem",
            color: "#D6AB58", background: "rgba(214,171,88,0.08)",
            border: "1px solid rgba(214,171,88,0.2)",
            borderRadius: 8, padding: "6px 12px",
            cursor: "pointer", transition: "all 0.2s",
          }}
          onMouseOver={e => { e.currentTarget.style.background = "#D6AB58"; e.currentTarget.style.color = "#080808"; }}
          onMouseOut={e => { e.currentTarget.style.background = "rgba(214,171,88,0.08)"; e.currentTarget.style.color = "#D6AB58"; }}
        >Book →</button>
      </div>
    </div>
  );
}