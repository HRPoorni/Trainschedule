const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true,
  },
  rateDate: {
    type: Date,
    default: Date.now,
  },
});
const reviewSchema = new mongoose.Schema({
  review: {
    type: String,
    required: true,
  },
  reviewDate: {
    type: Date,
    default: Date.now,
  },
});

const trainRatingSchema = new mongoose.Schema({
  trainID: {
    type: String,
    required: true,
  },
  trainName: {
    type: String,
    required: true,
  },
  rating: [ratingSchema],
  review: [reviewSchema],
});

const TrainRating = new mongoose.model("rating", trainRatingSchema);

module.exports = TrainRating;
