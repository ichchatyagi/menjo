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
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());

// app.use("/api/users", userRoutes);
// app.use("/api/contact", contactRoutes);
// app.use("/api/auth", authRoutes);
// app.use("/api/admin", adminRoutes);
// app.use("/api/seminars", seminarRoutes);
// app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
// app.use("/api/bookings", seminarBookingRoutes);

app.get("/", (req, res) => res.send("API is running..."));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
