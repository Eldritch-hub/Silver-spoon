import React from "react";

function Menu() {
  const menuItems = [
    { name: "Suya Platter", price: "₦4,500", description: "Skewered spicy beef suya with tomatoes, onions, and suya pepper" },
    { name: "Grilled Catfish (Point & Kill)", price: "₦6,800", description: "Freshly grilled catfish spiced and served with pepper sauce & yam fries" },
    { name: "Efo Riro Deluxe", price: "₦3,200", description: "Spinach stew cooked with palm oil, locust beans, and tender goat meat" },
    { name: "Pounded Yam & Egusi", price: "₦4,000", description: "Hand-pounded yam served with rich melon seed soup and assorted beef" },
    { name: "Jollof Rice Special", price: "₦3,200", description: "Smoky party-style jollof rice served with plantain and grilled chicken" },
    { name: "Fried Rice & Turkey", price: "₦3,500", description: "Nigerian fried rice with veggies and crispy turkey wing" },
    { name: "Amala & Gbegiri + Ewedu", price: "₦2,900", description: "Classic Ibadan combo served with beef and assorted meats" },
    { name: "Afang Soup & Fufu", price: "₦3,500", description: "Rich vegetable soup cooked with beef, kpomo, and stockfish" },
    { name: "Goat Meat Pepper Soup", price: "₦3,500", description: "Spicy herbal pepper soup featuring tender goat meat chunks" },
    { name: "Asun pepper chops", price: "₦4,200", description: "Spicy roasted goat meat sautéed in pepper sauce" },
    { name: "Beans & Dodo with Titus Fish", price: "₦3,500", description: "Honey beans stew with fried plantain and grilled fish" },
    { name: "Ofada Rice & Ayamase", price: "₦3,000", description: "Local ofada rice served with spicy green pepper sauce & assorted beef" },
    { name: "Boli & Fish", price: "₦2,200", description: "Roasted plantain served with peppered tilapia fish" },
    { name: "Nkwobi", price: "₦3,500", description: "Soft cow foot cooked in rich palm oil sauce with utazi leaves" },
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Menu</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
        {menuItems.map((item, index) => (
          <div key={index} style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "1rem" }}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p style={{ fontWeight: "bold" }}>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
