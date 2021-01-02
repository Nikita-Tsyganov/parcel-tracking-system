const router = require("express").Router();
const EmployeeController = require("../../controllers/EmployeeController.js");

// @route  GET api/employees
// @desc   Get All Employees
// access  Public
router.get("/", EmployeeController.all);

// @route  GET api/employees/:id
// @desc   Get A Single Employee
// access  Public
router.get("/:id",EmployeeController.find);

// @route  POST api/employees
// @desc   Create A employees
// access  Public
router.post("/", EmployeeController.create);

// @route  PATCH api/employees/:id
// @desc   Update A Employees
// access  Public
router.patch("/:id", EmployeeController.update);

// @route  DELETE api/employees/:id
// @desc   Delete A Employees
// @access  Public
router.delete("/:id", EmployeeController.delete);

module.exports = router;
