import Seminar from "../models/Seminar.js";
import SeminarBooking from "../models/SeminarBooking.js";

// Add seminar with image
export const addSeminar = async (req, res) => {
  const { title, description } = req.body;
  const cover_image = req.file ? `/uploads/${req.file.filename}` : null;

  if (!title || !cover_image) {
    return res.status(400).json({ error: "Title and cover image are required" });
  }

  try {
    const seminar = await Seminar.create({ title, description, cover_image });

    res.status(201).json({ message: "Seminar created successfully", seminar });
  } catch (err) {
    console.error("Error adding seminar:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Edit seminar with new image
export const editSeminar = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const cover_image = req.file ? `/uploads/${req.file.filename}` : req.body.cover_image;

  try {
    const seminar = await Seminar.findByIdAndUpdate(
      id,
      { title, description, cover_image },
      { new: true }
    );

    if (!seminar) {
      return res.status(404).json({ error: "Seminar not found" });
    }

    res.json({ message: "Seminar updated successfully", seminar });
  } catch (err) {
    console.error("Error editing seminar:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Delete seminar
export const deleteSeminar = async (req, res) => {
  const { id } = req.params;

  try {
    // Check if there are any bookings for this seminar
    const bookings = await SeminarBooking.find({ seminar_id: id });

    if (bookings.length > 0) {
      return res.status(400).json({
        error: "Cannot delete seminar with active bookings. Please delete the bookings first.",
      });
    }

    const seminar = await Seminar.findByIdAndDelete(id);

    if (!seminar) {
      return res.status(404).json({ error: "Seminar not found" });
    }

    res.json({ message: "Seminar deleted successfully" });
  } catch (err) {
    console.error("Error deleting seminar:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};
