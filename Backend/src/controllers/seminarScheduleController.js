import Seminar from "../models/Seminar.js";
import SeminarSchedule from "../models/SeminarSchedule.js";

// Add one or multiple schedules
export const addSchedules = async (req, res) => {
  const { id: seminar_id } = req.params;
  const { schedules } = req.body; // array of {date, time}

  if (!seminar_id || !Array.isArray(schedules) || schedules.length === 0) {
    return res
      .status(400)
      .json({ error: "Seminar ID and schedules are required" });
  }

    try {
    const createdSchedules = await SeminarSchedule.insertMany(
            schedules.map((s) => ({
        seminar_id,
        seminar_date: s.date,
        seminar_time: s.time,
      }))
    );

    res.status(201).json({
      message: "Schedules added successfully",
      schedules: createdSchedules,
    });
  } catch (err) {
    console.error("Error adding schedules:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

export const getSeminarsWithSchedules = async (req, res) => {
  try {
    const seminars = await Seminar.aggregate([
      {
        $lookup: {
          from: "seminarschedules",
          localField: "_id",
          foreignField: "seminar_id",
          as: "schedules",
        },
      },
      {
        $project: {
          id: "$_id",
          title: 1,
          description: 1,
          cover_image: 1,
          schedules: {
            $map: {
              input: "$schedules",
              as: "schedule",
              in: {
                id: "$$schedule._id",
                date: "$$schedule.seminar_date",
                time: "$$schedule.seminar_time",
              },
            },
          },
        },
      },
    ]);

    res.json(seminars);
  } catch (err) {
    console.error("Error fetching seminars:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};
