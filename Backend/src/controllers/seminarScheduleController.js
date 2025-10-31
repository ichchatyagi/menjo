import pool from "../config/db.js";

// Add one or multiple schedules
export const addSchedules = async (req, res) => {
  const seminar_id = parseInt(req.params.id); // convert to number
  const { schedules } = req.body;   // array of {date, time}

  if (!seminar_id || !Array.isArray(schedules) || schedules.length === 0) {
    return res.status(400).json({ error: "Seminar ID and schedules are required" });
  }

  try {
    // Build parameterized query to prevent SQL injection
    const params = [];
    const values = schedules.map((s, i) => {
      params.push(seminar_id, s.date, s.time);
      const paramIndex = i * 3;
      return `($${paramIndex + 1}, $${paramIndex + 2}, $${paramIndex + 3})`;
    });

    const query = `
      INSERT INTO seminar_schedules (seminar_id, seminar_date, seminar_time)
      VALUES ${values.join(", ")}
      RETURNING *;
    `;

    const result = await pool.query(query, params);

    res.status(201).json({ message: "Schedules added successfully", schedules: result.rows });
  } catch (err) {
    console.error("Error adding schedules:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};


export const getSeminarsWithSchedules = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT s.id, s.title, s.description, s.cover_image, 
             json_agg(
               json_build_object(
                 'id', sc.id,
                 'date', sc.seminar_date,
                 'time', sc.seminar_time
               )
             ) AS schedules
      FROM seminars s
      LEFT JOIN seminar_schedules sc ON s.id = sc.seminar_id
      GROUP BY s.id
      ORDER BY s.created_at DESC
    `);

    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching seminars:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};
