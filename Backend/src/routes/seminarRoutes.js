import express from "express";
import { addSeminar, editSeminar, deleteSeminar } from "../controllers/seminarController.js";
import { addSchedules, getSeminarsWithSchedules } from "../controllers/seminarScheduleController.js";
import { authenticate, requireAdmin } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

// Admin seminar CRUD
router.post("/", authenticate, requireAdmin, upload.single("cover_image"), addSeminar);
router.put("/:id", authenticate, requireAdmin, upload.single("cover_image"), editSeminar);
router.delete("/:id", authenticate, requireAdmin, deleteSeminar);

// Admin add schedules
router.post("/schedule/:id", authenticate, requireAdmin, addSchedules);

// Public get seminars with schedules
router.get("/", getSeminarsWithSchedules);

export default router;
