// backend/models/menu.js
import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String },        // URL to image
  category: { type: String },
  spicy: { type: Boolean, default: false },
  available: { type: Boolean, default: true }
}, {
  timestamps: true
});

const Menu = mongoose.model("Menu", menuSchema);

export default Menu;
