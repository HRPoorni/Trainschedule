const mongoose = require("mongoose");

const rescheduleSchema = new mongoose.Schema({
  trainID: {
    type: String,
    required: true,
  },
  trainName: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  delayTime: {
    type: String,
    required: true,
  },
  rescheduleTime: {
    type: String,
    required: true,
  },
});

const Reschedule = new mongoose.model("reschedule", rescheduleSchema);

module.exports = Reschedule;
