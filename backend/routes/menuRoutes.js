// backend/routes/menuRoutes.js
import express from "express";
import Menu from "../models/menu.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const menu = await Menu.find({ available: true });
    res.json(menu);
  } catch (error) {
    console.error("Error fetching menu items:", error);
    res.status(500).json({ error: "Error fetching menu items" });
  }
});

export default router;
