const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    salePrice: {
      type: Number,
      default: null,
      min: 0,
    },
    onSale: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
      trim: true,
    },
    category: {
      type: String,
      default: "Wardrobe",
      trim: true,
    },
  },
  { timestamps: true }   // adds createdAt + updatedAt automatically
);

module.exports = mongoose.model("Product", productSchema);
