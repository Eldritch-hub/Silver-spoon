// backend/server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import reservationRoutes from "./routes/reservationRoutes.js";
import menuRoutes from "./routes/menuRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/reservations", reservationRoutes);
app.use("/api/menu", menuRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Server is running and MongoDB is connected!");
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("✅ Connected to MongoDB Atlas");

    // Auto-seed menu if empty
    const Menu = (await import("./models/menu.js")).default;
    const count = await Menu.countDocuments();

    if (count === 0) {
      console.log("🔄 Seeding menu items...");
      const items = [
        {
          name: "Suya Platter",
          price: 4500,
          description:
            "Skewered spicy beef suya with tomatoes, onions, and suya pepper",
          image:
            "https://th.bing.com/th/id/OIP.AxdzY99HtE1Qt6mHmVuYwQHaHa?w=152&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
          category: "grill",
          spicy: true,
          available: true,
        },
        {
          name: "Grilled Catfish (Point & Kill)",
          price: 6800,
          description:
            "Freshly grilled catfish spiced and served with pepper sauce & yam fries",
          image:
            "https://images.unsplash.com/photo-1555993539-1732fc15a2d3?auto=format&fit=crop&w=800&q=80",
          category: "fish",
          spicy: true,
          available: true,
        },
        {
          name: "Jollof Rice Special",
          price: 3200,
          description:
            "Smoky party-style jollof rice served with plantain and grilled chicken",
          image:
            "https://images.unsplash.com/photo-1572441710635-e3eab16d3b31?auto=format&fit=crop&w=800&q=80",
          category: "rice",
          spicy: false,
          available: true,
        },
      ];

      await Menu.insertMany(items);
      console.log("✅ Menu seeded successfully!");
    } else {
      console.log(`ℹ️ Menu already seeded (${count} items found)`);
    }
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
