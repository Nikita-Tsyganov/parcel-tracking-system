const router = require("express").Router();
const ParcelController = require("../../controllers/ParcelController.js");

// @route  GET api/users
// @desc   Get All Users
// access  Public
router.get("/", ParcelController.all);

// @route  GET api/users/:id
// @desc   Get A Single User
// access  Public
router.get("/:id", ParcelController.find);

// @route  POST api/users
// @desc   Create A User
// access  Public
router.post("/", ParcelController.create);

// @route  PATCH api/todos/:id
// @desc   Update A Todo
// access  Public
router.patch("/:id", ParcelController.update);

// @route  DELETE api/todos/:id
// @desc   Delete A Todo
// @access  Public
router.delete("/:id", ParcelController.delete);

module.exports = router;
