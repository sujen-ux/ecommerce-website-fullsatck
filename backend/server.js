const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Product = require("./models/Product");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://mongo:27017/ecommerce")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// 1. Root Route
app.get("/", (req, res) => {
  res.send("E-commerce backend running with MongoDB...");
});

// 2. GET ALL PRODUCTS (This will give you the JSON output you want)
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products from DB
    res.status(200).json(products);        // Send them as JSON
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 3. POST A PRODUCT (For your frontend form or Postman)
app.post("/api/products", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// 4. SEED ROUTE (Optional: Keep this if you just want to quickly add a test item via browser)
app.get("/seed", async (req, res) => {
  try {
    const product = new Product({
      name: "Nike Shoes",
      price: 120,
      image: "https://via.placeholder.com/150",
      description: "Comfortable running shoes"
    });
    await product.save();
    res.send("Test product added! Now go to /api/products to see it.");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});