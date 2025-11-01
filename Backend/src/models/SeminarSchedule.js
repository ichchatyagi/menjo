import mongoose from "mongoose";

const seminarScheduleSchema = new mongoose.Schema({
  seminar_id: { type: mongoose.Schema.Types.ObjectId, ref: "Seminar", required: true },
  seminar_date: { type: Date, required: true },
  seminar_time: { type: String, required: true },
});

const SeminarSchedule = mongoose.model("SeminarSchedule", seminarScheduleSchema);

export default SeminarSchedule;