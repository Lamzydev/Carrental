
export default function CarImage({ car, size = "lg" }) {
  const isLg = size === "lg";

  if (car.image) {
    return (
      <div style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: isLg ? 14 : 6,
        overflow: "hidden",
      }}>
        <img
          src={car.image}
          alt={car.name}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            width: "auto",
            height: "auto",
            objectFit: "contain",
            display: "block",
            filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.55))",
            transition: "transform 0.3s ease",
          }}
          onMouseOver={e => e.currentTarget.style.transform = "scale(1.04)"}
          onMouseOut={e => e.currentTarget.style.transform = "none"}
        />
      </div>
    );
  }


  return (
    <span style={{
      display: "block",
      fontSize: isLg ? "2.8rem" : "1.7rem",
      lineHeight: 1,
      marginBottom: isLg ? 14 : 6,
    }}>
      {car.emoji}
    </span>
  );
}