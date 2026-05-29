import { useState, useEffect } from "react";
import { WHATSAPP_NUMBER, BRAND } from "../data/lamzy";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Navbar({ onBookNow }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "Fleet",     href: "#fleet"     },
    { label: "Locations", href: "#locations" },
    { label: "Pricing",   href: "#booking"   },
  ];

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 1.25rem", height: 60,
        background:  "rgba(228, 45, 45, 0.95)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid rgba(214,171,88,0.12)" : "none",
        transition: "all 0.3s ease",
      }}>
        {/* Logo */}
        <a href="#home" style={{
          fontFamily: "'Bebas Neue', cursive",
          fontSize: "1.6rem", letterSpacing: "3px",
          color: "white", lineHeight: 1, textDecoration: "none",
        }}>{BRAND}</a>

        {/* Desktop links — hidden on mobile */}
        <ul style={{
          display: "flex", gap: "2rem",
          listStyle: "none", margin: 0, padding: 0,
        }} className="desktop-nav">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a href={href} style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: "1.00rem",
                color: "white", textDecoration: "none",
                transition: "color 0.2s",
              }}
                onMouseOver={e => e.target.style.color = "#D6AB58"}
                onMouseOut={e => e.target.style.color = "rgba(240,235,220,0.55)"}
              >{label}</a>
            </li>
          ))}
        </ul>

   
        <div style={{ display: "flex", alignItems: "center", gap: 12 }} className="desktop-nav">
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: 6, color: "#e5f3eb", fontFamily: "'DM Sans',sans-serif", fontWeight: 500, fontSize: "0.83rem", textDecoration: "none" }}>
            <WhatsAppIcon size={17} /> Chat
          </a>
          <button onClick={onBookNow} style={{
            background: "#D6AB58", border: "none", borderRadius: 8,
            padding: "0.45rem 1.1rem", fontFamily: "'DM Sans',sans-serif",
            fontWeight: 700, fontSize: "0.83rem", color: "#f5f5f5", cursor: "pointer",
          }}>Book Now</button>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(v => !v)} style={{
          display: "none", flexDirection: "column", gap: 5,
          background: "none", border: "none", cursor: "pointer", padding: 6,
        }} className="mobile-menu-btn" aria-label="Toggle menu">
          <span style={{ display: "block", width: 24, height: 2, background: "#D6AB58", borderRadius: 2, transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
          <span style={{ display: "block", width: 24, height: 2, background: "#D6AB58", borderRadius: 2, transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: 24, height: 2, background: "#D6AB58", borderRadius: 2, transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
        </button>
      </nav>

   
      <div style={{
        position: "fixed", top: 60, left: 0, right: 0, zIndex: 99,
        background: "rgba(8,8,8,0.97)", backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(214,171,88,0.12)",
        maxHeight: menuOpen ? 300 : 0, overflow: "hidden",
        transition: "max-height 0.35s ease",
        display: "none",
      }} className="mobile-menu">
        <div style={{ padding: "1.25rem 1.5rem", display: "flex", flexDirection: "column", gap: 0 }}>
          {links.map(({ label, href }) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} style={{
              fontFamily: "'DM Sans',sans-serif", fontSize: "1rem",
              color: "rgba(240,235,220,0.7)", textDecoration: "none",
              padding: "0.75rem 0", borderBottom: "1px solid rgba(214,171,88,0.06)",
            }}>{label}</a>
          ))}
          <button onClick={() => { setMenuOpen(false); onBookNow(); }} style={{
            marginTop: 16, background: "#D6AB58", border: "none", borderRadius: 10,
            padding: "0.85rem", fontFamily: "'DM Sans',sans-serif",
            fontWeight: 700, fontSize: "0.95rem", color: "#080808", cursor: "pointer",
          }}>Book Now</button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .mobile-menu { display: block !important; }
        }
      `}</style>
    </>
  );
}