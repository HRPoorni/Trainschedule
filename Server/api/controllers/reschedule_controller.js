const ApiErrors = require("../../utilities/Error/errors");
const {
  createReschedule,
  getTrainDetail,
  deleteTrainByID,
  updateTrainByID,
} = require("../services/reschedule_service");

//Train reschedule
const addRescheduleTime = (req, res, next) => {
  const data = req.body;

  if (
    !data.trainID ||
    !data.trainName ||
    !data.startTime ||
    !data.delayTime ||
    !data.rescheduleTime
  ) {
    next(
      ApiErrors.notFound(
        "Train ID,name, start time, end time, delay time, reschedule time required!"
      )
    );
    return;
  }
  const response = createReschedule(data);
  response
    .then((data) => {
      if (!data) {
        next(ApiErrors.notCreated("Cannot reschedule at that movement."));
        return;
      }
      res.status(200).send({ message: "Train reschedule successfully!" });
    })
    .catch((err) => {
      next(err);
    });
};

const getDetails = (req, res, next) => {
  const response = getTrainDetail();
  response
    .then((data) => {
      if (!data) {
        next(
          ApiErrors.notFound(
            "Could not found train reschedules at that movement."
          )
        );
        return;
      }
      res.status(200).send({ data: data });
    })
    .catch((err) => {
      next(err);
    });
};

const deleteData = (req, res, next) => {
  const tid = req.params.id;

  if (!tid) {
    next(ApiErrors.notFound("Tain ID is required"));
    return;
  }
  const response = deleteTrainByID(tid);
  response
    .then((data) => {
      if (!data.acknowledged == true) {
        next(ApiErrors.notFound(`Train details not found.`));
        return;
      }
      if (data.deletedCount == 0) {
        res.status(200).send({ message: "Reschedule train already deleted!" });
        return;
      }
      res
        .status(200)
        .send({ message: "Reschedule train deleted successfully!" });
    })
    .catch((err) => {
      next(err);
    });
};

const updateData = (req, res, next) => {
  const data = req.body;
  if (
    !data.trainID ||
    !data.trainName ||
    !data.startTime ||
    !data.delayTime ||
    !data.rescheduleTime
  ) {
    next(
      ApiErrors.notFound(
        "Train ID,name, start time, end time, delay time and reschedules time required!"
      )
    );
    return;
  }
  const response = updateTrainByID(data);
  response
    .then((data) => {
      if (!data) {
        next(ApiErrors.notFound("Reschedule details not updated."));
        return;
      }
      res
        .status(200)
        .send({ message: "Reschedule details updated successfully." });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  addRescheduleTime: addRescheduleTime,
  getDetails: getDetails,
  deleteData: deleteData,
  updateData: updateData,
};
