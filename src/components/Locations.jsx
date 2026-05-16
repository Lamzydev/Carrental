import { LOCATIONS } from "../data/lamzy";
import { SectionHeader } from "./Fleet";

export default function Locations({ onSelect }) {
  const regions = [...new Set(LOCATIONS.map(l => l.region))];
  return (
    <section id="locations" style={{ padding: "5rem 1.5rem", background: "#080808" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader label="Service Areas" title="Pick up from" dim="your city" />
        <div style={{ marginTop: "2.5rem" }}>
          {regions.map(region => (
            <div key={region} style={{ marginBottom: 36 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.68rem", color: "#D6AB58", letterSpacing: "2.5px", textTransform: "uppercase", whiteSpace: "nowrap" }}>{region}</span>
                <div style={{ flex: 1, height: 1, background: "rgba(214,171,88,0.1)" }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px,1fr))", gap: "0.75rem" }}>
                {LOCATIONS.filter(l => l.region === region).map(loc => (
                  <button key={loc.id} onClick={() => onSelect(loc.id)} style={{ width: "100%", textAlign: "left", background: "#111", border: "1px solid rgba(214,171,88,0.1)", borderRadius: 12, padding: "0.9rem 1rem", display: "flex", alignItems: "center", gap: 10, cursor: "pointer", transition: "all 0.2s" }}
                    onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(214,171,88,0.35)"; e.currentTarget.style.background = "#141310"; }}
                    onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(214,171,88,0.1)"; e.currentTarget.style.background = "#111"; }}
                  >
                    <div style={{ width: 38, height: 38, flexShrink: 0, background: "rgba(214,171,88,0.08)", border: "1px solid rgba(214,171,88,0.15)", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>{loc.emoji}</div>
                    <div>
                      <p style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "#F0EBDC" }}>{loc.name}</p>
                      <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.7rem", color: "rgba(240,235,220,0.35)", marginTop: 2, display: "flex", alignItems: "center", gap: 4 }}>
                        <span style={{ display: "inline-block", width: 5, height: 5, borderRadius: "50%", background: "#25D366", flexShrink: 0 }} />
                        {loc.cars} cars
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", fontFamily: "'DM Sans',sans-serif", fontSize: "0.76rem", color: "rgba(240,235,220,0.25)", marginTop: 8 }}>
          Can't find your area? Chat with us on WhatsApp — we cover more zones.
        </p>
      </div>
    </section>
  );
}