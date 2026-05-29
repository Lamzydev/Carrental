import { useState, useEffect, forwardRef } from "react";
import {
  CARS, LOCATIONS,
  fmt, today, diffDays,
  buildWhatsAppMessage,
  WHATSAPP_NUMBER,
} from "../data/lamzy";
import { SectionHeader } from "./Fleet";
import CarImage from "./CarImage";
import WhatsAppIcon from "./WhatsAppIcon";

const BookingForm = forwardRef(function BookingForm(
  { initialCar = null, initialLocation = null },
  ref
) {
  const [form, setForm] = useState({
    name: "", phone: "",
    pickupLoc: initialLocation ?? "",
    dropoffLoc: "",
    pickupDate: "", returnDate: "",
    carType: initialCar ?? "suv",
    notes: "",
  });
  const [errors, setErrors] = useState({});
  const [sent,   setSent]   = useState(false);

  useEffect(() => { if (initialCar)      setForm(f => ({ ...f, carType:    initialCar })); },      [initialCar]);
  useEffect(() => { if (initialLocation) setForm(f => ({ ...f, pickupLoc:  initialLocation })); }, [initialLocation]);

  const car   = CARS.find(c => c.id === form.carType) ?? CARS[1];
  const days  = diffDays(form.pickupDate, form.returnDate);
  const total = car.price * days;
  const regions = [...new Set(LOCATIONS.map(l => l.region))];

  function handle(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    setErrors(err => ({ ...err, [e.target.name]: null }));
    setSent(false);
  }

  function validate() {
    const e = {};
    if (!form.name.trim())  e.name       = "Full name is required";
    if (!form.phone.trim()) e.phone      = "Phone number is required";
    if (!form.pickupLoc)    e.pickupLoc  = "Select a pickup location";
    if (!form.pickupDate)   e.pickupDate = "Select a pickup date";
    return e;
  }

  function handleBook() {
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage(form, car, days, total)}`, "_blank");
    setSent(true);
  }

 
  const inp = (name) => ({
    width: "100%", background: "#0d0d0d",
    border: `1px solid ${errors[name] ? "#e05252" : "rgba(214,171,88,0.2)"}`,
    borderRadius: 10, padding: "0.72rem 0.9rem",
    color: "#F0EBDC", fontFamily: "'DM Sans',sans-serif", fontSize: "0.92rem",
    outline: "none", appearance: "none", WebkitAppearance: "none",
    transition: "border-color 0.2s", boxSizing: "border-box",
  });

  const lbl = {
    display: "block",
    fontFamily: "'DM Sans',sans-serif", fontSize: "0.74rem",
    color: "rgba(240,235,220,0.45)", fontWeight: 500,
    letterSpacing: "0.3px", marginBottom: 5,
  };

  const leg = {
    fontFamily: "'DM Sans',sans-serif", fontSize: "0.68rem",
    color: "#D6AB58", letterSpacing: "2.5px",
    textTransform: "uppercase", marginBottom: 14, display: "block",
  };

  const divider = <div style={{ height: 1, background: "rgba(214,171,88,0.08)", margin: "1.5rem 0" }} />;

 
  const LocationOptions = () => regions.map(r => (
    <optgroup key={r} label={`── ${r} ──`}>
      {LOCATIONS.filter(l => l.region === r).map(l => (
        <option key={l.id} value={l.id}>{l.emoji} {l.name}</option>
      ))}
    </optgroup>
  ));

  return (
    <section id="booking" ref={ref} style={{ padding: "5rem 1.5rem", background: "#8a2626" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <SectionHeader label="Instant Booking" title="Reserve your ride" dim="via WhatsApp" />

        <div style={{
          marginTop: "2.5rem",
          background: "white",
          border: "1px solid rgba(214,171,88,0.15)",
          borderRadius: 20,
          padding: "clamp(1.25rem, 4vw, 2.5rem)",
        }}>

          /* ── Personal Info ── */
          <span style={leg}>Your Details</span>
          <div className="form-grid">
            <Field label="Full Name *" error={errors.name} lbl={lbl}>
              <input name="name" type="text" placeholder="John Doe"
                value={form.name} onChange={handle} style={inp("name")}
                onFocus={e => e.target.style.borderColor = "#D6AB58"}
                onBlur={e => e.target.style.borderColor = errors.name ? "#e05252" : "rgba(214,171,88,0.2)"}
              />
            </Field>
            <Field label="Phone Number *" error={errors.phone} lbl={lbl}>
              <input name="phone" type="tel" placeholder="+234 800 000 0000"
                value={form.phone} onChange={handle} style={inp("phone")}
                onFocus={e => e.target.style.borderColor = "#D6AB58"}
                onBlur={e => e.target.style.borderColor = errors.phone ? "#e05252" : "rgba(214,171,88,0.2)"}
              />
            </Field>
          </div>

          {divider}

        
          <span style={leg}>Pickup & Drop-off</span>
          <div className="form-grid">
            <Field label="Pickup Location *" error={errors.pickupLoc} lbl={lbl}>
              <select name="pickupLoc" value={form.pickupLoc} onChange={handle}
                style={{ ...inp("pickupLoc"), cursor: "pointer" }}
                onFocus={e => e.target.style.borderColor = "#D6AB58"}
                onBlur={e => e.target.style.borderColor = errors.pickupLoc ? "#e05252" : "rgba(19, 33, 193, 0.2)"}
              >
                <option value="" disabled>— Select location —</option>
                <LocationOptions />
              </select>
            </Field>
            <Field label="Drop-off Location" lbl={lbl}>
              <select name="dropoffLoc" value={form.dropoffLoc} onChange={handle}
                style={{ ...inp("dropoffLoc"), cursor: "pointer" }}
                onFocus={e => e.target.style.borderColor = "#D6AB58"}
                onBlur={e => e.target.style.borderColor = "rgba(214,171,88,0.2)"}
              >
                <option value="">— Same as pickup —</option>
                <LocationOptions />
              </select>
            </Field>
          </div>

          {divider}

          /* ── Dates ── */
          <span style={leg}>Trip Dates</span>
          <div className="form-grid">
            <Field label="Pickup Date *" error={errors.pickupDate} lbl={lbl}>
              <input name="pickupDate" type="date" min={today()}
                value={form.pickupDate} onChange={handle}
                style={{ ...inp("pickupDate"), colorScheme: "dark" }}
                onFocus={e => e.target.style.borderColor = "#D6AB58"}
                onBlur={e => e.target.style.borderColor = errors.pickupDate ? "#e05252" : "rgba(214,171,88,0.2)"}
              />
            </Field>
            <Field label="Return Date" lbl={lbl}>
              <input name="returnDate" type="date" min={form.pickupDate || today()}
                value={form.returnDate} onChange={handle}
                style={{ ...inp("returnDate"), colorScheme: "dark" }}
                onFocus={e => e.target.style.borderColor = "#D6AB58"}
                onBlur={e => e.target.style.borderColor = "rgba(214,171,88,0.2)"}
              />
            </Field>
          </div>

          {divider}

          
          <span style={leg}>Choose Vehicle</span>
          <div className="car-grid">
            {CARS.map(c => {
              const sel = form.carType === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => { setForm(f => ({ ...f, carType: c.id })); setSent(false); }}
                  style={{
                    display: "flex", flexDirection: "column",
                    alignItems: "center", textAlign: "center",
                    background: sel ? "rgba(214,171,88,0.07)" : "#0d0d0d",
                    border: `1px solid ${sel ? "#D6AB58" : "rgba(214,171,88,0.12)"}`,
                    borderRadius: 12, padding: "0.85rem 0.5rem",
                    cursor: "pointer", transition: "all 0.2s",
                    boxShadow: sel ? "0 0 0 1px rgba(214,171,88,0.2)" : "none",
                    overflow: "hidden",
                  }}
                >
                 
                  <CarImage car={c} size="sm" />

                  <span style={{
                    fontFamily: "'DM Sans',sans-serif", fontWeight: 600,
                    fontSize: "0.7rem",
                    color: sel ? "#D6AB58" : "#F0EBDC",
                    lineHeight: 1.3,
                  }}>{c.name}</span>

                  <span style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: "0.63rem",
                    color: sel ? "#D6AB58" : "rgba(240,235,220,0.35)",
                    marginTop: 3,
                  }}>{fmt(c.price)}/day</span>
                </button>
              );
            })}
          </div>

          {divider}

         
          <span style={leg}>
            Special Requests{" "}
            <span style={{ color: "rgba(240,235,220,0.25)", textTransform: "none", letterSpacing: 0 }}>(optional)</span>
          </span>
          <textarea
            name="notes" rows={3}
            placeholder="Airport pickup, child seat, extra driver, late-night delivery…"
            value={form.notes} onChange={handle}
            style={{ ...inp("notes"), resize: "vertical", minHeight: 76, lineHeight: 1.6 }}
            onFocus={e => e.target.style.borderColor = "#D6AB58"}
            onBlur={e => e.target.style.borderColor = "rgba(214,171,88,0.2)"}
          />

          {divider}


          <div style={{
            background: "#0d0d0d",
            border: "1px solid rgba(214,171,88,0.1)",
            borderRadius: 12, padding: "1.1rem 1.25rem",
          }}>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.66rem", color: "rgba(240,235,220,0.3)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 10 }}>
              Booking Summary
            </p>

            {[
              ["Vehicle",    `${car.name}`],
              ["Daily Rate", fmt(car.price)],
              ["Duration",   `${days} day${days > 1 ? "s" : ""}`],
            ].map(([l, v]) => (
              <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", borderBottom: "1px solid rgba(214,171,88,0.06)" }}>
                <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.8rem", color: "rgba(240,235,220,0.4)" }}>{l}</span>
                <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.8rem", color: "#F0EBDC", fontWeight: 500 }}>{v}</span>
              </div>
            ))}

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 10, paddingTop: 10, borderTop: "1px solid rgba(214,171,88,0.12)" }}>
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 600, color: "#F0EBDC" }}>Estimated Total</span>
              <span style={{ fontFamily: "'Bebas Neue',cursive", fontSize: "1.9rem", color: "#D6AB58", letterSpacing: "1px", lineHeight: 1 }}>
                {fmt(total)}
              </span>
            </div>
          </div>

      
          <button
            type="button"
            onClick={handleBook}
            style={{
              width: "100%", marginTop: 18,
              display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
              background: "#25D366", border: "none", borderRadius: 12,
              padding: "0.95rem", color: "#fff",
              fontFamily: "'Bebas Neue',cursive", fontSize: "1rem", letterSpacing: "1px",
              cursor: "pointer",
              boxShadow: "0 8px 24px rgba(37,211,102,0.2)",
              transition: "opacity 0.2s, transform 0.15s",
            }}
            onMouseOver={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseOut={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "none"; }}
          >
            <WhatsAppIcon size={21} /> SEND BOOKING ON WHATSAPP
          </button>

        
          {sent && (
            <div style={{
              marginTop: 12,
              display: "flex", alignItems: "center", gap: 10,
              background: "rgba(37,211,102,0.08)",
              border: "1px solid rgba(37,211,102,0.25)",
              borderRadius: 10, padding: "0.8rem 1rem",
              animation: "slideIn 0.35s ease",
            }}>
              <span style={{ color: "#25D366", fontSize: "1.1rem" }}>✓</span>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.83rem", color: "#25D366" }}>
                WhatsApp opened! Send the message to confirm. We reply within 3 minutes.
              </p>
            </div>
          )}

          <p style={{ textAlign: "center", fontFamily: "'DM Sans',sans-serif", fontSize: "0.7rem", color: "rgba(240,235,220,0.2)", marginTop: 12 }}>
            Free cancellation 24h before pickup · Payment at pickup · All prices in NGN
          </p>
        </div>
      </div>

      <style>{`
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .car-grid  { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.65rem; }
        @media (max-width: 600px) {
          .form-grid { grid-template-columns: 1fr; }
          .car-grid  { grid-template-columns: repeat(2, 1fr); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
});

export default BookingForm;

function Field({ label, error, lbl, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label style={lbl}>{label}</label>
      {children}
      {error && (
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.68rem", color: "#e05252", marginTop: 4 }}>
          {error}
        </p>
      )}
    </div>
  );
}