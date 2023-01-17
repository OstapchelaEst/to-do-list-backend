import Router from "express";
import Controller from "./to-do-controller.js";
const router = new Router();

router.post("/set-task", Controller.createTask);
router.get("/all-tasks", Controller.getAllTsks);
router.put("/update-task", Controller.updateTask);
router.delete("/delete", Controller.deleteTask);

export default router;
