import mongoose from "mongoose";

const seminarSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  cover_image: { type: String, required: true },
});

const Seminar = mongoose.model("Seminar", seminarSchema);

export default Seminar;