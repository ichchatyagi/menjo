import pool from "../config/db.js";

// Submit Contact Form
export const submitContactForm = async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !phone || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const result = await pool.query(
      "INSERT INTO contacts (name, email, phone, subject, message) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, email, phone, subject, message]
    );

    res.status(201).json({
      success: true,
      data: result.rows[0],
    });
  } catch (err) {
    console.error("Error inserting form data:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Get All Contacts
export const getAllContacts = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, name, email, phone, subject, message, created_at FROM contacts ORDER BY created_at DESC"
    );

    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching data:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};
