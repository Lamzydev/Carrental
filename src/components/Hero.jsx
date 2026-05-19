import { STATS } from "../data/lamzy";
import WhatsAppIcon from "./WhatsAppIcon";



export default function Hero({ onBookNow }) {
  return (
    <section id="home" style={{
      minHeight: "100vh",
      display: "flex", alignItems: "center",
      padding: "5rem 1.5rem 3rem",
      
    background: `linear-gradient(135deg, rgba(160, 37, 37, 0.8) 0%, rgba(197, 192, 184, 0.8) 100%)` ,
      position: "relative", overflow: "hidden",
    }}>
      {/* Grid texture */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.025,
        backgroundImage: "linear-gradient(rgba(214,171,88,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(214,171,88,0.6) 1px,transparent 1px)" ,
        backgroundSize: "60px 60px",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>

        {/* Responsive grid: 1 col mobile, 2 col desktop */}
        <div className="hero-grid">

          {/* ── Left ── */}
          <div>
            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(214,171,88,0.08)", border: "1px solid rgba(214,171,88,0.2)",
              borderRadius: 50, padding: "5px 14px", marginBottom: 24,
            }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#25D366", display: "inline-block" }} />
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.76rem", color: "#D6AB58", letterSpacing: "0.4px" }}>
                Available 24/7 · Book via WhatsApp
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: "'Bebas Neue',cursive",
              fontSize: "clamp(3rem,10vw,6.5rem)",
              lineHeight: 0.92, letterSpacing: "1px",
              color: "#F0EBDC", marginBottom: 20,
            }}>
              YOUR RIDE,<br />
              <span style={{ color: "#D6AB58" }}>YOUR RULES.</span>
            </h1>

            {/* Subtitle */}
            <p style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: "clamp(0.9rem,3vw,1.05rem)", lineHeight: 1.75,
              color: "rgba(240,235,220,0.5)", maxWidth: 440, marginBottom: 28,
            }}>
              Premium and economy cars available across Lagos and Abuja.
              Instant WhatsApp booking, professional drivers, fully insured.
            </p>

            {/* CTAs */}
            <div className="hero-ctas">
              <button onClick={onBookNow} style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                background: "#25D366", border: "none", borderRadius: 10,
                padding: "0.85rem 1.5rem", color: "#fff",
                fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: "0.95rem",
                cursor: "pointer", boxShadow: "0 8px 24px rgba(37,211,102,0.25)",
                transition: "opacity 0.2s",
              }}
                onMouseOver={e => e.currentTarget.style.opacity = "0.88"}
                onMouseOut={e => e.currentTarget.style.opacity = "1"}
              >
                <WhatsAppIcon size={20} /> Book on WhatsApp
              </button>

              <a href="#fleet" style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                border: "1px solid rgba(214,171,88,0.3)", borderRadius: 10,
                padding: "0.85rem 1.5rem", color: "#D6AB58",
                fontFamily: "'DM Sans',sans-serif", fontWeight: 500, fontSize: "0.95rem",
                textDecoration: "none", transition: "all 0.2s",
              }}>View Fleet →</a>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: "clamp(1rem,5vw,2.5rem)", marginTop: 40, flexWrap: "wrap" }}>
              {STATS.map(({ value, label }) => (
                <div key={label}>
                  <p style={{ fontFamily: "'Bebas Neue',cursive", fontSize: "clamp(1.5rem,5vw,2rem)", color: "#D6AB58", lineHeight: 1 }}>{value}</p>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.7rem", color: "rgba(240,235,220,0.35)", marginTop: 3, textTransform: "uppercase", letterSpacing: "0.5px" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Car card — hidden on small screens ── */}
          <div className="hero-card-wrap">
            
      
            
          </div>
        </div>
      </div>

      <style>{`
        @keyframes lamzyFloat {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-14px); }
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .hero-ctas {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .hero-card-wrap {
          position: relative;
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .hero-card-wrap {
            display: none;
          }
          .hero-ctas {
            flex-direction: column;
          }
          .hero-ctas a, .hero-ctas button {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}