import "dotenv/config";

import express from "express";
import cors from "cors";
import contactRoute from "./routes/contact.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoute);

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

const PORT = process.env.PORT || 5000;

console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded ✅" : "Missing ❌");

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});