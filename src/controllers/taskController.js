const Task = require("../models/Task");
const asyncHandler = require("../utils/asyncHandler");

exports.createTask = asyncHandler(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
});

exports.getEmployeeTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({ employee: req.params.employeeId });
  res.json(tasks);
});

exports.updateTaskStatus = asyncHandler(async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true, runValidators: true }
  );
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.json(task);
});
