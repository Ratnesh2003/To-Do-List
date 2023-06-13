import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { getAllTasks, createTask, deleteTask } from "../controllers/task.js";

const router = express.Router();

router.get("/", verifyToken, getAllTasks);
router.post("/create", verifyToken, createTask);
router.delete("/delete/:taskId", verifyToken, deleteTask);

export default router;