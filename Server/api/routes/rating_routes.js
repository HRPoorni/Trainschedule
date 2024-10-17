const express = require("express");
const router = express.Router();
const {
  addRating,
  getDetails,
} = require("../controllers/rating_controller");

router.post("/detail/add", addRating);
router.get("/details", getDetails);

module.exports = router;
