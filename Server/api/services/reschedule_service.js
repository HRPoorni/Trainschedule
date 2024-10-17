const Reschedule = require("../models/train_reschedule");

const createReschedule = (data) => {
  let trainID = data.trainID;
  let trainName = data.trainName;
  let startTime = data.startTime;
  let delayTime = data.delayTime;
  let rescheduleTime = data.rescheduleTime;

  const reschedule = new Reschedule({
    trainID: trainID,
    trainName: trainName,
    startTime: startTime,
    delayTime: delayTime,
    rescheduleTime: rescheduleTime,
  });
  return reschedule.save();
};

const getTrainDetail = () => {
   return Reschedule.find();
}
const deleteTrainByID = (id) => {
  let tid = id;
  return Reschedule.deleteOne({ trainID: tid });
   
};
const updateTrainByID = (data) => {
  let trainID = data.trainID;
  let trainName = data.trainName;
  let startTime = data.startTime;
  let delayTime = data.delayTime;
  let rescheduleTime = data.rescheduleTime;

  return Reschedule.findOneAndUpdate(
    { trainID: trainID },
    {
      trainName: trainName,
      startTime: startTime,
      delayTime: delayTime,
      rescheduleTime: rescheduleTime,
    }
  );
};
 

module.exports = {
  createReschedule,
  getTrainDetail,
  deleteTrainByID,
  updateTrainByID,
};
