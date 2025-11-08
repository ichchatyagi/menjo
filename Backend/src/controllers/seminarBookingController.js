import SeminarBooking from "../models/SeminarBooking.js";
import Seminar from "../models/Seminar.js";

// Book a seminar slot
export const bookSeminar = async (req, res) => {
  const { seminar_id, schedule_id, name, email, phone } = req.body;

  if (!seminar_id || !schedule_id || !name || !email) {
    return res
      .status(400)
      .json({ error: "Seminar, schedule, name, and email are required" });
  }

  try {
    // Check if the seminar exists
    const seminar = await Seminar.findById(seminar_id);
    if (!seminar) {
      return res.status(404).json({ error: "Seminar not found" });
    }

    const booking = await SeminarBooking.create({
      seminar_id,
      seminar_schedule_id: schedule_id,
      name,
      email,
      phone,
    });

    res.status(201).json({ message: "Booking successful", booking });
  } catch (err) {
    console.error("Error booking seminar:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Get all bookings (for admin)
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await SeminarBooking.find()
      .populate("seminar_id", "title")
      .populate("seminar_schedule_id", "seminar_date seminar_time")
      .sort({ created_at: -1 });

    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Delete a booking (for admin)
export const deleteBooking = async (req, res) => {
  try {
    const booking = await SeminarBooking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    await SeminarBooking.deleteOne({ _id: req.params.id });

    res.json({ message: "Booking removed" });
  } catch (err) {
    console.error("Error deleting booking:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

