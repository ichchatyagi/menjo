import pool from "../config/db.js";

// Book a seminar slot
export const bookSeminar = async (req, res) => {
  const { seminar_id, schedule_id, name, email, phone } = req.body;

  if (!seminar_id || !schedule_id || !name || !email) {
    return res.status(400).json({ error: "Seminar, schedule, name, and email are required" });
  }

  try {
    const result = await pool.query(
      `INSERT INTO seminar_bookings (seminar_id, seminar_schedule_id, name, email, phone)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [seminar_id, schedule_id, name, email, phone || null]
    );

    res.status(201).json({ message: "Booking successful", booking: result.rows[0] });
  } catch (err) {
    console.error("Error booking seminar:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Get all bookings (for admin)
export const getAllBookings = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT b.id, b.name, b.email, b.phone, b.created_at,
             s.title AS seminar_title,
             sc.seminar_date, sc.seminar_time
      FROM seminar_bookings b
      JOIN seminars s ON b.seminar_id = s.id
      JOIN seminar_schedules sc ON b.seminar_schedule_id = sc.id
      ORDER BY b.created_at DESC
    `);

    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching bookings:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};
