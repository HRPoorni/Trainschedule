const express = require("express");
const router = express.Router();
const {
  addRescheduleTime,
  getDetails,
  deleteData,
  updateData,
} = require("../controllers/reschedule_controller");

router.post("/detail/add", addRescheduleTime);
router.get("/details", getDetails);
router.delete("/detail/:id", deleteData);
router.put("/detail/update", updateData);


module.exports = router;