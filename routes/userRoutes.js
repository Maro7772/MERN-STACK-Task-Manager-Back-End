import express from "express";
import { protect, adminOnly } from "../middlewares/authMiddleware.js";
import { getUsers, getUserById } from "../controllers/userController.js";

const router = express.Router();

router.get("/", protect, adminOnly, getUsers);
router.get("/:id", protect, getUserById);

export default router;
