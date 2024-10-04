const express = require("express");
const {
  createTask,
  getEmployeeTasks,
  updateTaskStatus,
} = require("../controllers/taskController");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.use(protect);

router.post("/", createTask);
router.get("/:employeeId", getEmployeeTasks);
router.put("/:id", updateTaskStatus);

module.exports = router;
