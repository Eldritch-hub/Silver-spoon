import express from "express";
import Reservation from "../models/reservation.js";

const router = express.Router();

// POST reservation
router.post("/", async (req, res) => {
  try {
    const newRes = new Reservation(req.body);
    await newRes.save();
    res.status(201).json({ message: "Reservation saved successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Error saving reservation" });
  }
});

// GET all reservations
router.get("/", async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({ createdAt: -1 });
    res.json(reservations);
  } catch (err) {
    res.status(500).json({ error: "Error fetching reservations" });
  }
});

export default router;
