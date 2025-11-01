import mongoose from "mongoose";

const seminarBookingSchema = new mongoose.Schema({
  seminar_id: { type: mongoose.Schema.Types.ObjectId, ref: "Seminar", required: true },
  seminar_schedule_id: { type: mongoose.Schema.Types.ObjectId, ref: "SeminarSchedule", required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  created_at: { type: Date, default: Date.now },
});

const SeminarBooking = mongoose.model("SeminarBooking", seminarBookingSchema);

export default SeminarBooking;