const router = require("express").Router();
const ParcelHistoryController = require("../../controllers/ParcelHistoryController.js");

// @route  GET api/parcelhistory
// @desc   Get All ParcelHistorys
// access  Public
router.get("/", ParcelHistoryController.all);

// @route  GET api/parcelhistory/:id
// @desc   Get A Single ParcelHistory
// access  Public
router.get("/:id",ParcelHistoryController.find);

// @route  POST api/parcelhistory
// @desc   Create A ParcelHistory
// access  Public
router.post("/", ParcelHistoryController.create);

// @route  PATCH api/parcelhistory/:id
// @desc   Update A ParcelHistory
// access  Public
router.patch("/:id", ParcelHistoryController.update);

// @route  DELETE api/parcelhistory/:id
// @desc   Delete A ParcelHistory
// @access  Public
router.delete("/:id", ParcelHistoryController.delete);

module.exports = router;
