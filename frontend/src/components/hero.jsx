function Hero() {
    return (
      <section
        className="hero"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "80vh",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center"
        }}
      >
        <h1>Experience Luxury Dining</h1>
        <p>At Silver Spoon, we serve meals that make memories.</p>
        <button>View Menu</button>
      </section>
    );
  }
  
  export default Hero;
  