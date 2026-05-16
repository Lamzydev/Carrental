import { BRAND, WHATSAPP_NUMBER } from "../data/lamzy";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer() {
  const links = [
    { label: "Fleet",     href: "#fleet"     },
    { label: "Locations", href: "#locations" },
    { label: "Book Now",  href: "#booking"   },
  ];

  return (
    <footer style={{ background: "#050505", borderTop: "1px solid rgba(214,171,88,0.1)", padding: "2.5rem 1.5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="footer-top">
          <span style={{ fontFamily: "'Bebas Neue',cursive", fontSize: "1.7rem", letterSpacing: "3px", color: "#D6AB58" }}>{BRAND}</span>
          <ul style={{ display: "flex", gap: 24, listStyle: "none", margin: 0, padding: 0, flexWrap: "wrap" }}>
            {links.map(({ label, href }) => (
              <li key={href}><a href={href} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.82rem", color: "white", textDecoration: "none" }}
                onMouseOver={e => e.target.style.color="#D6AB58"} onMouseOut={e => e.target.style.color="rgba(240,235,220,0.35)"}>{label}</a></li>
            ))}
          </ul>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 7, color: "#25D366", fontFamily: "'DM Sans',sans-serif", fontWeight: 500, fontSize: "0.83rem", textDecoration: "none" }}>
            <WhatsAppIcon size={17} /> +234 911 045 8101
          </a>
        </div>
        <div style={{ height: 1, background: "rgba(214,171,88,0.08)", margin: "1.5rem 0" }} />
        <div className="footer-bottom">
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.73rem", color:"white" }}>© {new Date().getFullYear()} {BRAND} Car Rentals. Lagos & Abuja, Nigeria.</p>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.73rem", color: "white" }}>Free cancellation · Professional drivers · Fully insured</p>
        </div>
      </div>
      <style>{`
        .footer-top    { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
        .footer-bottom { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; }
        @media (max-width: 600px) {
          .footer-top    { flex-direction: column; align-items: flex-start; }
          .footer-bottom { flex-direction: column; }
        }
      `}</style>
    </footer>
  );
}