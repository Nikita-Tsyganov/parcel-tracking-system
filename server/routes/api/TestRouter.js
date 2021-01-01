const router = require("express").Router();
const TestController = require("../../controllers/TestController.js");

// @route  GET api/tests
// @desc   Get All Tests
// access  Public
router.get("/", TestController.all);

// @route  GET api/tests/:id
// @desc   Get A Single Test
// access  Public
router.get("/:id", TestController.find);

// @route  POST api/tests
// @desc   Create A Test
// access  Public
router.post("/", TestController.create);

// @route  PATCH api/tests/:id
// @desc   Update A Test
// access  Public
router.patch("/:id", TestController.update);

// @route  DELETE api/tests/:id
// @desc   Delete A Test
// @access  Public
router.delete("/:id", TestController.delete);

module.exports = router;
