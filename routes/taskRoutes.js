import express from "express";
import { protect, adminOnly } from "../middlewares/authMiddleware.js";
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
  updateTaskStatus,
  updateTaskCheckList,
  getDashboardData,
  getUserDashboardData
} from "../controllers/taskController.js";

const router = express.Router();

router.get("/dashboard-data", protect, getDashboardData);
router.get("/user-dashboard-data", protect, getUserDashboardData);
router.get("/", protect, getTasks);
router.get("/:id", protect, getTaskById);
router.post("/", protect, adminOnly, createTask);
router.put("/:id", protect, updateTask);
router.delete("/:id", protect, adminOnly, deleteTask);
router.put("/:id/status", protect, updateTaskStatus);
router.put("/:id/todo", protect, updateTaskCheckList);

export default router;
