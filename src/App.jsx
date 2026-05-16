import { useRef, useState } from "react";
import Navbar      from "./components/Navbar";
import Hero        from "./components/Hero";
import Fleet       from "./components/Fleet";
import Locations   from "./components/Locations";
import BookingForm from "./components/BookingForm";
import Footer      from "./components/Footer";

export default function App() {
  const bookingRef = useRef(null);
  const [selectedCar,      setSelectedCar]      = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  function scrollToBooking() {
    bookingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleQuickBook(carId) {
    setSelectedCar(carId);
    scrollToBooking();
  }

  function handleLocationSelect(locId) {
    setSelectedLocation(locId);
    scrollToBooking();
  }

  return (
    <div style={{ background: "#080808", minHeight: "100vh", overflowX: "hidden" }}>
      <Navbar    onBookNow={scrollToBooking} />
      <Hero      onBookNow={scrollToBooking} />
      <Fleet     onQuickBook={handleQuickBook} />
      <Locations onSelect={handleLocationSelect} />
      <BookingForm
        ref={bookingRef}
        initialCar={selectedCar}
        initialLocation={selectedLocation}
      />
      <Footer />
    </div>
  );
}