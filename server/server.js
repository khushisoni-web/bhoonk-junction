import "dotenv/config";

import express from "express";
import cors from "cors";

import contactRoute from "./routes/contact.js";
import orderRoute from "./routes/order.js";

const app = express();

app.use(cors());
app.use(express.json());

// Contact API
app.use("/api/contact", contactRoute);

// Order API
app.use("/api/order", orderRoute);

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

const PORT = process.env.PORT || 5000;

// Check Environment Variables
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log(
  "EMAIL_PASS:",
  process.env.EMAIL_PASS ? "Loaded ✅" : "Missing ❌"
);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});