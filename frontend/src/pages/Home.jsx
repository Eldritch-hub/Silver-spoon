import Hero from "../components/hero";
function Home() {
  return (
    <div>
      <Hero />

      {/* About Preview Section */}
      <section className="about-preview" style={{ padding: "2rem", textAlign: "center" }}>
        <h2>About Us</h2>
        <p>
          We are a fine dining restaurant offering top-tier meals with unforgettable flavor.
          Luxury meets comfort at Silver Spoon.
        </p>
      </section>

      {/* Specials Section */}
      <section className="specials" style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Today's Specials</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>🔥 Grilled Salmon</li>
          <li>🍗 Spicy Chicken Deluxe</li>
          <li>🍝 Italian Pasta Bowl</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
