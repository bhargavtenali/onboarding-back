const Employee = require("../models/Employee");
const asyncHandler = require("../utils/asyncHandler");

exports.createEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.create(req.body);
  res.status(201).json(employee);
});

exports.getEmployees = asyncHandler(async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

exports.getEmployeeById = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  if (!employee) {
    return res.status(404).json({ message: "Employee not found" });
  }
  res.json(employee);
});

exports.updateEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!employee) {
    return res.status(404).json({ message: "Employee not found" });
  }
  res.json(employee);
});

exports.deleteEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findByIdAndDelete(req.params.id);
  if (!employee) {
    return res.status(404).json({ message: "Employee not found" });
  }
  res.json({ message: "Employee deleted successfully" });
});
