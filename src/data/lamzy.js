
import { GiModernCity } from "react-icons/gi";
import { FaCity } from "react-icons/fa6";
import { ImAirplane } from "react-icons/im";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import economyImg from "../assets/cars/sedan.png";
import suvImg     from "../assets/cars/pradosuv.png";
import luxuryImg  from "../assets/cars/luxury.png";
import vanImg     from "../assets/cars/van.png";
import compactImg from "../assets/cars/hatch.png";
import execImg    from "../assets/cars/salon.png";


export const WHATSAPP_NUMBER = "2348012345678";
export const BRAND = "LAMZY";


// ─────────────────────────────────────────────────────────────────────────────
export const CARS = [
  {
    id: "economy",
    image: economyImg,      
    name: "Economy Sedan",
    type: "Sedan",
    price: 25000,
    seats: 4,
    features: ["AC", "Fuel", "Driver"],
    badge: "Budget",
    badgeColor: "#25D366",
  },
  {
    id: "suv",
    image: suvImg,           

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
    image: luxuryImg,         

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
    image: vanImg,            

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
    image: compactImg,       

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
    image: execImg,          

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
export const LOCATIONS = [

  { id: "lagos-island", name: "Lagos Island",               icon: GiModernCity,                  region: "Lagos", cars: 24 },
  { id: "victoria",     name: "Victoria Island",            icon: GiModernCity,                  region: "Lagos", cars: 18 },
  { id: "ikeja",        name: "Ikeja",                      icon: ImAirplane,                    region: "Lagos", cars: 31 },
  { id: "lekki",        name: "Lekki",                      icon: FaCity,                        region: "Lagos", cars: 22 },
  { id: "ajah",         name: "Ajah",                       icon: FaCity,                        region: "Lagos", cars: 15 },
  { id: "yaba",         name: "Yaba",                       icon: FaCity,                        region: "Lagos", cars: 10 },
  { id: "banana",       name: "Banana Island",              icon: GiModernCity,                  region: "Lagos", cars: 8  },
  { id: "ikate",        name: "Ikate",                      icon: SiHomeassistantcommunitystore, region: "Lagos", cars: 11 },
  { id: "surulere",     name: "Surulere",                   icon: SiHomeassistantcommunitystore, region: "Lagos", cars: 12 },
  { id: "maryland",     name: "Maryland",                   icon: SiHomeassistantcommunitystore, region: "Lagos", cars: 9  },


  { id: "abuja-cbd",    name: "Abuja CBD",                  icon: FaCity,                        region: "Abuja", cars: 20 },
  { id: "wuse",         name: "Wuse",                       icon: SiHomeassistantcommunitystore, region: "Abuja", cars: 14 },
  { id: "garki",        name: "Garki",                      icon: SiHomeassistantcommunitystore, region: "Abuja", cars: 17 },
  { id: "asokoro",      name: "Asokoro",                    icon: GiModernCity,                  region: "Abuja", cars: 13 },
  { id: "mabushi",      name: "Mabushi",                    icon: SiHomeassistantcommunitystore, region: "Abuja", cars: 8  },
  { id: "jabi",         name: "Jabi",                       icon: GiModernCity,                  region: "Abuja", cars: 11 },
  { id: "gwarinpa",     name: "Gwarinpa",                   icon: SiHomeassistantcommunitystore, region: "Abuja", cars: 10 },
  { id: "kubwa",        name: "Kubwa",                      icon: SiHomeassistantcommunitystore, region: "Abuja", cars: 7  },
  { id: "lokogoma",     name: "Lokogoma",                   icon: SiHomeassistantcommunitystore, region: "Abuja", cars: 9  },
  { id: "lugbe",        name: "Lugbe",                      icon: SiHomeassistantcommunitystore, region: "Abuja", cars: 6  },
  { id: "airport",      name: "Nnamdi Azikiwe Intl Airport",icon: ImAirplane,                    region: "Abuja", cars: 12 },
  { id: "maitama",      name: "Maitama",                    icon: GiModernCity,                  region: "Abuja", cars: 14 },
];


export const STATS = [
  { value: "500+", label: "Vehicles"   },
  { value: "22",   label: "Locations"  },
  { value: "4.9★", label: "Rating"    },
  { value: "3min", label: "Avg. Reply" },
];


export const fmt = (n) => `₦${Number(n).toLocaleString("en-NG")}`;
export const today = () => new Date().toISOString().split("T")[0];

export function diffDays(a, b) {
  if (!a || !b) return 1;
  return Math.max(1, Math.ceil((new Date(b) - new Date(a)) / 86400000));
}

export function buildWhatsAppMessage(form, car, days, total) {
  const pickup  = LOCATIONS.find((l) => l.id === form.pickupLoc);
  const dropoff = LOCATIONS.find((l) => l.id === form.dropoffLoc);
  const lines = [
    `🚗 *${BRAND} Car Rental — Booking Request*`, ``,
    `👤 Name: ${form.name        || "N/A"}`,
    `📞 Phone: ${form.phone      || "N/A"}`,
    `🚙 Vehicle: ${car.name} (${car.type})`,
    `📍 Pickup: ${pickup  ? pickup.name  : "N/A"}`,
    `📍 Drop-off: ${dropoff ? dropoff.name : "Same as pickup"}`,
    `📅 Pickup Date: ${form.pickupDate   || "N/A"}`,
    `📅 Return Date: ${form.returnDate   || "N/A"}`,
    `📆 Duration: ${days} day${days > 1 ? "s" : ""}`,
    `💰 Rate: ${fmt(car.price)}/day`,
    `💳 Estimated Total: ${fmt(total)}`,
    form.notes ? `📝 Notes: ${form.notes}` : null, ``,
    `_Sent from ${BRAND} Website_`,
  ];
  return encodeURIComponent(lines.filter(Boolean).join("\n"));
}