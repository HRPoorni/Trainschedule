const Rating = require("../models/train_rating");

const createRating = (data) => {
  let trainID = data.trainID;
  let trainName = data.trainName;
  let rating = data.rating;
  let review = data.review;

  const ratingData = new Rating({
    trainID: trainID,
    trainName: trainName,
    rating: [{ rating: rating }],
    review: [{ review: review }],
  });
  return ratingData.save();
};

const findDetailByID = (id) => {
  let tid = id.trim();
  return Rating.find({ trainID: tid });
};
const updateByID = (data) => {
  let trainID = data.trainID;
  let rating = data.rating;
    let review = data.review;
    
  return Rating.updateOne(
    { trainID: trainID },
    {
      $push: {
        rating: [{ rating: rating }],
        review: [{ review: review }],
      },
    }
  );
};

const getRatingDetails = () => {
  return Rating.find();
};



module.exports = {
  createRating,
  findDetailByID,
  updateByID,
  getRatingDetails,
};
