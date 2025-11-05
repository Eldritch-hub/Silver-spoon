function Header() {
    return (
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#222",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000
      }}>
        <h2 style={{ margin: 0 }}>Silver Spoon</h2>
        <nav>
          <ul style={{ display: "flex", listStyle: "none", gap: "1.5rem", margin: 0 }}>
            <li><a href="#home" style={{ color: "white", textDecoration: "none" }}>Home</a></li>
            <li><a href="#about" style={{ color: "white", textDecoration: "none" }}>About</a></li>
            <li><a href="#portfolio" style={{ color: "white", textDecoration: "none" }}>Portfolio</a></li>
            <li><a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
  