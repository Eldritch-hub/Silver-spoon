function Portfolio() {
    const projects = [
      { title: "Project 1", img: "/project1.jpg", description: "Brief description here." },
      { title: "Project 2", img: "/project2.jpg", description: "Brief description here." }
    ];
  
    return (
      <section id="portfolio" style={{ padding: "4rem 2rem", textAlign: "center" }}>
        <h2>My Work</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
          marginTop: "2rem"
        }}>
          {projects.map((p, i) => (
            <div key={i} style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "8px" }}>
              <img src={p.img} alt={p.title} style={{ width: "100%", borderRadius: "8px" }} />
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <button style={{
                padding: "0.5rem 1rem",
                border: "none",
                backgroundColor: "#222",
                color: "white",
                borderRadius: "4px",
                cursor: "pointer"
              }}>View Project</button>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Portfolio;
  