import pool from "../config/db.js";

export const getAllContacts = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, name, email, message, created_at FROM contacts ORDER BY created_at DESC"
    );
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching contacts:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};
