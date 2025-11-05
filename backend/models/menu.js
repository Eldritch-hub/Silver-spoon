// backend/models/menu.js
import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String },
  category: { type: String },
  spicy: { type: Boolean, default: false },
  available: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model("Menu", menuSchema);
