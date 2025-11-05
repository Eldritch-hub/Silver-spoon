import { useState } from "react";
import axios from "axios";

function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/reservations", formData);
      alert("Reservation successful!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: ""
      });
    } catch (err) {
      console.error(err);
      alert("Error saving reservation. Try again later.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Reserve Your Table</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="form-control mb-3" required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="form-control mb-3" required />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="form-control mb-3" required />
        <input type="date" name="date" value={formData.date} onChange={handleChange} className="form-control mb-3" required />
        <input type="time" name="time" value={formData.time} onChange={handleChange} className="form-control mb-3" required />
        <input type="number" name="guests" placeholder="Number of Guests" value={formData.guests} onChange={handleChange} className="form-control mb-3" required />
        <button type="submit" className="btn btn-primary">Book Now</button>
      </form>
    </div>
  );
}

export default Reservation;
