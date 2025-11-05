import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  productId: { type: String },
  name: String,
  price: Number,
  image: String,
  qty: { type: Number, default: 1 }
}, { _id: false });

const cartSchema = new mongoose.Schema({
  items: [cartItemSchema],
  total: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model("Cart", cartSchema);
