import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-red-500 p-4">
     <div className="logo">
        <h2>Silver Spoon</h2>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><li><Link to="/cart">Cart</Link></li></li>
      </ul>
    </nav>
  );
}

export default Navbar;