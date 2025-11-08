import express from "express";
import {
  bookSeminar,
  getAllBookings,
  deleteBooking,
} from "../controllers/seminarBookingController.js";
import { authenticate, requireAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public booking
router.post("/", bookSeminar);

// Admin view all bookings
router.get("/", authenticate, requireAdmin, getAllBookings);

// Admin delete a booking
router.delete("/:id", authenticate, requireAdmin, deleteBooking);

export default router;
