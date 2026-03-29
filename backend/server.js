const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://mongo:27017/ecommerce")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("E-commerce backend running with MongoDB...");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
