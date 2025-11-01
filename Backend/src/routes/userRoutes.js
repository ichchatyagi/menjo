import express from "express";
import {
  getUsers,
  getUserProfile,
  updateUserProfile,
  getUserById,
} from "../controllers/userController.js";
import { authenticate, requireAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(authenticate, requireAdmin, getUsers);
router
  .route("/profile")
  .get(authenticate, getUserProfile)
  .put(authenticate, updateUserProfile);
router.route("/:id").get(authenticate, requireAdmin, getUserById);

export default router;
