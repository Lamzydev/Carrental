// ─────────────────────────────────────────────────────────────────────────────
// LAMZY CONFIG — Edit everything here
// ─────────────────────────────────────────────────────────────────────────────

export const WHATSAPP_NUMBER = "2348012345678"; // ← your WhatsApp number
export const BRAND = "LAMZYEXPRESS";

// ─────────────────────────────────────────────────────────────────────────────
// HOW TO ADD YOUR OWN CAR IMAGES
// ─────────────────────────────────────────────────────────────────────────────
//
// OPTION A — Local asset (recommended):
//
//   1. Create folder:  src/assets/cars/
//   2. Drop your images in:
//        src/assets/cars/economy.png
//        src/assets/cars/suv.png
//        src/assets/cars/luxury.png
//        src/assets/cars/van.png
//        src/assets/cars/compact.png
//        src/assets/cars/executive.png
//
//   3. Uncomment the imports below
//   4. In the CARS array replace  image: null  with the imported variable
//      e.g.  image: economyImg
//
// OPTION B — External URL (no import needed):
//   image: "https://your-cdn.com/car.png"
//
// OPTION C — Keep emoji fallback:
//   Leave  image: null  — the emoji field shows instead
//
// ─────────────────────────────────────────────────────────────────────────────

// ── Step 3: Uncomment once your images are in src/assets/cars/ ───────────────
import economyImg from "../assets/cars/sedan.png";
import suvImg from "../assets/cars/pradosuv.png";
import luxuryImg from "../assets/cars/luxury.png";
import vanImg from "../assets/cars/van.png";
import compactImg from "../assets/cars/hatch.png";
import execImg from "../assets/cars/salon.png";

export const CARS = [
  {
    id: "economy",
    // ▼ EDIT THIS — set to your imported var or a URL string
    image: [economyImg], // e.g. image: economyImg  OR  image: "https://..."
    emoji: "🚗", // shown when image is null
    name: "Economy Sedan", // ← car display name
    type: "Sedan", // ← shown under name
    price: 25000, // ← price per day in NGN
    seats: 4,
    features: ["AC", "Fuel", "Driver"],
    badge: "Budget", // ← badge text (leave "" for no badge)
    badgeColor: "#25D366", // ← badge colour (hex)
  },
  {
    id: "suv",
    image: [suvImg], // e.g. image: suvImg
    emoji: "🚙",
    name: "Premium SUV",
    type: "SUV",
    price: 45000,
    seats: 7,
    features: ["AC", "Fuel", "Driver", "7-Seat"],
    badge: "Popular",
    badgeColor: "#D6AB58",
  },
  {
    id: "luxury",
    image: [luxuryImg], // e.g. image: luxuryImg
    emoji: "🏎️",
    name: "Luxury Class",
    type: "Luxury",
    price: 80000,
    seats: 4,
    features: ["AC", "Fuel", "Driver", "WiFi"],
    badge: "Luxury",
    badgeColor: "#b478ff",
  },
  {
    id: "van",
    image: [vanImg], // e.g. image: vanImg
    emoji: "🚐",
    name: "Minivan",
    type: "Van",
    price: 55000,
    seats: 12,
    features: ["AC", "Fuel", "Driver", "12-Seat"],
    badge: "",
    badgeColor: "",
  },
  {
    id: "compact",
    image: [compactImg], // e.g. image: compactImg
    emoji: "🚕",
    name: "Compact Hatch",
    type: "Hatchback",
    price: 18000,
    seats: 4,
    features: ["AC", "Fuel"],
    badge: "Cheapest",
    badgeColor: "#25D366",
  },
  {
    id: "executive",
    image: [execImg], // e.g. image: execImg
    emoji: "🚘",
    name: "Executive Saloon",
    type: "Executive",
    price: 65000,
    seats: 4,
    features: ["AC", "Fuel", "Driver", "Leather"],
    badge: "Premium",
    badgeColor: "#D6AB58",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// LOCATIONS
// ─────────────────────────────────────────────────────────────────────────────
export const LOCATIONS = [
  {
    id: "lagos-island",
    name: "Lagos Island",
    emoji: "🏙️",
    region: "Lagos",
    cars: 24,
  },
  {
    id: "victoria",
    name: "Victoria Island",
    emoji: "🌊",
    region: "Lagos",
    cars: 18,
  },
  { id: "ikeja", name: "Ikeja", emoji: "✈️", region: "Lagos", cars: 31 },
  { id: "lekki", name: "Lekki", emoji: "🏡", region: "Lagos", cars: 22 },
  { id: "ajah", name: "Ajah", emoji: "🌅", region: "Lagos", cars: 15 },
  { id: "yaba", name: "Yaba", emoji: "🎓", region: "Lagos", cars: 10 }, 
  {id:"Banabana", name:"Banana Island", emoji:"🍌", region:"Lagos", cars: 8},
  { id: 'ikate', name: 'Ikate', emoji: '🏖️', region: 'Lagos', cars: 11 },
  { id: "surulere", name: "Surulere", emoji: "🏘️", region: "Lagos", cars: 12 },
  { id: "maryland", name: "Maryland", emoji: "🏢", region: "Lagos", cars: 9 },
  {
    id: "abuja-cbd",
    name: "Abuja CBD",
    emoji: "🏛️",
    region: "Abuja",
    cars: 20,
  },
  { id: "wuse", name: "Wuse", emoji: "🛍️", region: "Abuja", cars: 14 },
  { id: "garki", name: "Garki", emoji: "🏬", region: "Abuja", cars: 17 },
  { id: "asokoro", name: "Asokoro", emoji: "🏰", region: "Abuja", cars: 13 },
  { id: "mabushi", name: "Mabushi", emoji: "🌳", region: "Abuja", cars: 8 },
  { id: "jabi", name: "Jabi", emoji: "🏞️", region: "Abuja", cars: 11 },
  { id: "gwarinpa", name: "Gwarinpa", emoji: "🏘️", region: "Abuja", cars: 10 },
  { id: "kubwa", name: "Kubwa", emoji: "🏭", region: "Abuja", cars: 7 },
  { id: "lokogoma", name: "Lokogoma", emoji: "🏗️", region: "Abuja", cars: 9 },
  { id: "lugbe", name: "Lugbe", emoji: "🌾", region: "Abuja", cars: 6 },
  {id: "Airport", name: "Nnamdi Azikiwe Intl Airport", emoji: "✈️", region: "Abuja", cars: 12},
  { id: "Maitama", name: "Maitama", emoji: "🏛️", region: "Abuja", cars: 14 },
];

// ─────────────────────────────────────────────────────────────────────────────
// STATS — shown in hero section
// ─────────────────────────────────────────────────────────────────────────────
export const STATS = [
  { value: "500+", label: "Vehicles" },
  { value: "8", label: "Locations" },
  { value: "4.9★", label: "Rating" },
  { value: "3min", label: "Avg. Reply" },
];

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS — do not edit
// ─────────────────────────────────────────────────────────────────────────────
export const fmt = (n) => `₦${Number(n).toLocaleString("en-NG")}`;
export const today = () => new Date().toISOString().split("T")[0];

export function diffDays(a, b) {
  if (!a || !b) return 1;
  return Math.max(1, Math.ceil((new Date(b) - new Date(a)) / 86400000));
}

export function buildWhatsAppMessage(form, car, days, total) {
  const pickup = LOCATIONS.find((l) => l.id === form.pickupLoc);
  const dropoff = LOCATIONS.find((l) => l.id === form.dropoffLoc);
  const lines = [
    `🚗 *${BRAND} Car Rental — Booking Request*`,
    ``,
    `👤 Name: ${form.name || "N/A"}`,
    `📞 Phone: ${form.phone || "N/A"}`,
    `🚙 Vehicle: ${car.name} (${car.type})`,
    `📍 Pickup: ${pickup ? pickup.name : "N/A"}`,
    `📍 Drop-off: ${dropoff ? dropoff.name : "Same as pickup"}`,
    `📅 Pickup Date: ${form.pickupDate || "N/A"}`,
    `📅 Return Date: ${form.returnDate || "N/A"}`,
    `📆 Duration: ${days} day${days > 1 ? "s" : ""}`,
    `💰 Rate: ${fmt(car.price)}/day`,
    `💳 Estimated Total: ${fmt(total)}`,
    form.notes ? `📝 Notes: ${form.notes}` : null,
    ``,
    `_Sent from ${BRAND} Website_`,
  ];
  return encodeURIComponent(lines.filter(Boolean).join("\n"));
}
