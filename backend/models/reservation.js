import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  date: { type: String, required: true },
  time: { type: String, required: true },
  guests: { type: Number, required: true },
  message: { type: String }
}, { timestamps: true });

const Reservation = mongoose.model("Reservation", reservationSchema);

export default Reservation;
