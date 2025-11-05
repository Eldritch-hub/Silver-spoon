import express from "express";
import Reservation from "../models/reservation.js";

const router = express.Router();

// Create a new reservation
router.post("/", async (req, res) => {
  try {
    const newReservation = new Reservation(req.body);
    await newReservation.save();
    res.status(201).json({ message: "Reservation saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error saving reservation" });
  }
});

// Get all reservations
router.get("/", async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ error: "Error fetching reservations" });
  }
});

export default router;
