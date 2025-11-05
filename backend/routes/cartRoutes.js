import express from "express";
import Cart from "../models/cart.js";

const router = express.Router();

// Save cart (checkout)
router.post("/", async (req, res) => {
  try {
    const { items, total } = req.body;
    const cart = new Cart({ items, total });
    await cart.save();
    res.status(201).json({ message: "Cart saved", id: cart._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error saving cart" });
  }
});

// Optional: get last saved cart
router.get("/latest", async (req, res) => {
  try {
    const last = await Cart.findOne().sort({ createdAt: -1 });
    res.json(last || { items: [], total: 0 });
  } catch (err) {
    res.status(500).json({ error: "Error fetching last cart" });
  }
});

export default router;
