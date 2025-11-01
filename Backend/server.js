import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import userRoutes from "./src/routes/userRoutes.js";
import contactRoutes from "./src/routes/contactRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";
import adminRoutes from "./src/routes/adminRoutes.js";
import seminarRoutes from "./src/routes/seminarRoutes.js";
import path from "path";
import seminarBookingRoutes from "./src/routes/seminarBookingRoutes.js";

dotenv.config();

connectDB();

const app = express();

const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174", "http://localhost:3000"],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

// Uncomment all routes to make them active
app.use("/api/users", userRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/seminars", seminarRoutes);
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use("/api/bookings", seminarBookingRoutes);

app.get("/", (req, res) => res.send("API is running..."));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message || "Something went wrong!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));