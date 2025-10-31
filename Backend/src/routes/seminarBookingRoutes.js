import express from "express";
import { bookSeminar, getAllBookings } from "../controllers/seminarBookingController.js";
import { authenticate, requireAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public booking
router.post("/", bookSeminar);

// Admin view all bookings
router.get("/", authenticate, requireAdmin, getAllBookings);

export default router;
