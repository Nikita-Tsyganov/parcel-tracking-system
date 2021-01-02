const router = require("express").Router();
const StatusController = require("../../controllers/StatusController.js");

// @route  GET api/employees
// @desc   Get All Employees
// access  Public
router.get("/", StatusController.all);

// @route  GET api/employees/:id
// @desc   Get A Single Employee
// access  Public
router.get("/:id",StatusController.find);

// @route  POST api/employees
// @desc   Create A employees
// access  Public
router.post("/", StatusController.create);

// @route  PATCH api/employees/:id
// @desc   Update A Employees
// access  Public
router.patch("/:id", StatusController.update);

// @route  DELETE api/employees/:id
// @desc   Delete A Employees
// @access  Public
router.delete("/:id", StatusController.delete);

module.exports = router;
