const ApiErrors = require("../../utilities/Error/errors");
const {
  createRating,
  findDetailByID,
  updateByID,
  getRatingDetails,
} = require("../services/rating_service");

const addRating = (req, res, next) => {
  const data = req.body;
  if (!data.trainID || !data.trainName || !data.rating || !data.review) {
    next(ApiErrors.notFound("Tain id, name, rating and review required!"));
    return;
  }
  const response1 = findDetailByID(data.trainID);
  response1
    .then((detail) => {
      if (detail.length == 0) {
        addNewRate(data);
      } else {
        updateRate(data);
      }
    })
    .catch((err) => {
      next(err);
    });

  const addNewRate = (data) => {
    const response = createRating(data);
    response
      .then((data) => {
        if (!data) {
          next(ApiErrors.notCreated("Cannot rate at that movement."));
          return;
        }
        res.status(200).send({ message: "Rating saved successfully!" });
      })
      .catch((err) => {
        next(err);
      });
  };
  const updateRate = (data) => {
    const response = updateByID(data);
    response
      .then((data) => {
        if (!data) {
          next(ApiErrors.notCreated("Cannot rate at that movement."));
          return;
        }
        res.status(200).send({ message: "Rating saved successfully!" });
      })
      .catch((err) => {
        next(err);
      });
  };
};

const getDetails = (req, res, next) => {
  const response = getRatingDetails();
  response
    .then((data) => {
      const avg = getRating(data);
      res.status(200).send({ data: avg });
    })
    .catch((err) => {
      next(err);
    });

  const getRating = (data) => {
    let a = 0;
    let b = 0;
    let tot = 0;
    let array = [];
    let average = 0;

    while (a < data.length) {
      while (b < data[a].rating.length) {
        tot = tot + data[a].rating[b].rating;
        b++;
      }
      average = tot / data[a].rating.length;
      let tid = data[a].trainID;
      let tName = data[a].trainName;
      array[a] = { trainName: tName, trainID: tid, avg: average.toFixed(1) };
      average = 0;
      tot = 0;
      b = 0;
      a++;
    }
    return array;
  };
};

module.exports = {
  addRating: addRating,
  getDetails: getDetails,
};
