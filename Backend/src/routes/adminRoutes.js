import express from "express";
import { getAllContacts } from "../controllers/adminController.js";
import { authenticate, requireAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// only admin can access
router.get("/contacts", authenticate, requireAdmin, getAllContacts);

export default router;
