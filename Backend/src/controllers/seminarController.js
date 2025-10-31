import pool from "../config/db.js";

// Add seminar with image
export const addSeminar = async (req, res) => {
  const { title, description } = req.body;
  const cover_image = req.file ? `/uploads/${req.file.filename}` : null;

  if (!title || !cover_image) {
    return res.status(400).json({ error: "Title and cover image are required" });
  }

  try {
    const result = await pool.query(
      "INSERT INTO seminars (title, description, cover_image) VALUES ($1, $2, $3) RETURNING *",
      [title, description, cover_image]
    );

    res.status(201).json({ message: "Seminar created successfully", seminar: result.rows[0] });
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
    const result = await pool.query(
      "UPDATE seminars SET title=$1, description=$2, cover_image=$3 WHERE id=$4 RETURNING *",
      [title, description, cover_image, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Seminar not found" });
    }

    res.json({ message: "Seminar updated successfully", seminar: result.rows[0] });
  } catch (err) {
    console.error("Error editing seminar:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Delete seminar
export const deleteSeminar = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query("DELETE FROM seminars WHERE id=$1 RETURNING *", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Seminar not found" });
    }

    res.json({ message: "Seminar deleted successfully" });
  } catch (err) {
    console.error("Error deleting seminar:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};
