import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import userRoutes from "./src/routes/userRoutes.js";
import contactRoutes from "./src/routes/contactRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";
import adminRoutes from "./src/routes/adminRoutes.js";
import seminarRoutes from "./src/routes/seminarRoutes.js";
import seminarBookingRoutes from "./src/routes/seminarBookingRoutes.js";
import path from "path";

dotenv.config();

const app = express();

// CORS configuration
const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174", "http://localhost:3000", "https://mercyandjohn.co.in", "https://mercyandjohn.co.in/admin"],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

// Request logging middleware (for debugging)
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Root route - MUST BE ACCESSIBLE
app.get("/", (req, res) => {
  console.log("✅ Root route accessed!");
  res.json({ 
    message: "API is running...", 
    status: "success",
    timestamp: new Date(),
    routes: [
      "/api/users",
      "/api/contact",
      "/api/auth",
      "/api/admin",
      "/api/seminars",
      "/api/bookings"
    ]
  });
});

// Health check route
app.get("/health", (req, res) => {
  res.json({ status: "healthy", uptime: process.uptime() });
});

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/seminars", seminarRoutes);
app.use("/api/bookings", seminarBookingRoutes);

// Static files
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// 404 handler
app.use((req, res) => {
  console.log(`❌ 404 - Route not found: ${req.method} ${req.url}`);
  res.status(404).json({ error: `Route ${req.url} not found` });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("❌ ERROR:", err.stack);
  res.status(500).json({ error: err.message || "Something went wrong!" });
});

const PORT = process.env.PORT || 8000;

// Connect to MongoDB first, then start server
connectDB()
  .then(() => {
    app.listen(PORT, "0.0.0.0", () => {
      console.log("\n" + "=".repeat(50));
      console.log(`✅ Server running on port ${PORT}`);
      console.log(`📍 Local:            http://localhost:${PORT}`);
      console.log(`📍 Network:         http://127.0.0.1:${PORT}`);
      console.log("=".repeat(50) + "\n");
    });
  })
  .catch((err) => {
    console.error("❌ Failed to start server:", err);
    process.exit(1);
  });