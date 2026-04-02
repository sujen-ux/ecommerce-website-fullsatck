const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String },
  // Add these for the SenShi UI:
  category: { type: String },    // e.g., "Shirts", "Jeans"
  oldPrice: { type: Number },    // To show the strikethrough price
  tag: { type: String },         // e.g., "New", "Sale", "Bestseller"
  isFeatured: { type: Boolean, default: false }
});

module.exports = mongoose.model("Product", productSchema);  