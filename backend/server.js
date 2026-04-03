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

// ─── ROOT ────────────────────────────────────────────────────────────────────
app.get("/", (req, res) => {
  res.send("Senshi E-commerce backend running...");
});

// ─── GET ALL PRODUCTS ────────────────────────────────────────────────────────
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ─── GET SINGLE PRODUCT ──────────────────────────────────────────────────────
app.get("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ─── CREATE PRODUCT ──────────────────────────────────────────────────────────
app.post("/api/products", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);          // return the product directly
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ─── UPDATE PRODUCT (admin edit / toggle sale) ───────────────────────────────
app.put("/api/products/:id", async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ─── DELETE PRODUCT ──────────────────────────────────────────────────────────
app.delete("/api/products/:id", async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ─── SEED ROUTE (dev only — adds 6 sample products) ─────────────────────────
app.get("/seed", async (req, res) => {
  try {
    await Product.deleteMany({});   // clear first so re-seeding doesn't duplicate
    const samples = [
      { name: "Premium Puffer Jacket",  category: "Jackets",        price: 3200, salePrice: 2600, onSale: true,  image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400", description: "Warm and stylish puffer jacket for cold days." },
      { name: "Winter Puffer Jacket",   category: "Winter Jackets",  price: 3200, salePrice: 2600, onSale: true,  image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400", description: "Heavy-duty winter jacket with insulation." },
      { name: "Classic Hoodie",         category: "Hoodie",          price: 3200, salePrice: 2600, onSale: true,  image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400", description: "Comfortable everyday hoodie in multiple colors." },
      { name: "Canvas Sneakers",        category: "Shoes",           price: 3200, salePrice: 2600, onSale: true,  image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400", description: "Classic canvas sneakers for all occasions." },
      { name: "Leather Handbag",        category: "Accessories",     price: 5500, salePrice: 4200, onSale: false, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400", description: "Premium leather handbag with multiple compartments." },
      { name: "Kids Raincoat",          category: "Kid's",           price: 1800, salePrice: 1400, onSale: false, image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400", description: "Waterproof raincoat in vibrant colors for kids." },
    ];
    await Product.insertMany(samples);
    res.send("✅ 6 seed products added! Visit /api/products to confirm.");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
