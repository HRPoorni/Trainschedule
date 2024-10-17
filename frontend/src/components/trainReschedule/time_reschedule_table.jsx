import React from "react";
import "./time_reschedule_table.css";
import axios from "axios";

function TimeRescheduleTable({
  setIsUpdateOpen,
  setID,
  setName,
  setStartTime,
  setDelay,
  setReschedule,
}) {
  const [details, setDetails] = React.useState([]);

  const getTrainDetails = () => {
    axios
      .get("http://localhost:8000/reschedule/details")
      .then((res) => {
        setDetails(res.data.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  React.useEffect(() => {
    getTrainDetails();
  }, []);

  return (
    <div className="time-reschedule-table-container">
      <div className="time-reschedule-table-header-wrapper">
        <div className="time-col-01">Train ID</div>
        <div className="time-col-02">Train Name</div>
        <div className="time-col-03">Start Time</div>
        <div className="time-col-04">Delay Time </div>
        <div className="time-col-05">Rescheduled Time </div>
      </div>
      <div className="time-details-track">
        {details.map((item, index) => (
          <TimeRescheduleTableRow
            key={index}
            id={item.trainID}
            name={item.trainName}
            sTime={item.startTime}
            dTime={item.delayTime}
            rTime={item.rescheduleTime}
            setIsUpdateOpen={setIsUpdateOpen}
            setID={setID}
            setName={setName}
            setStartTime={setStartTime}
            setDelay={setDelay}
            setReschedule={setReschedule}
          />
        ))}
      </div>
    </div>
  );
}

export default TimeRescheduleTable;

function TimeRescheduleTableRow({
  id,
  name,
  sTime,
  dTime,
  rTime,
  setIsUpdateOpen,
  setID,
  setName,
  setStartTime,
  setDelay,
  setReschedule,
}) {
  const actionHandler = () => {
    setIsUpdateOpen(true);
    setID(id);
    setName(name);
    setStartTime(sTime);
    setDelay(dTime);
    setReschedule(rTime);
  };

  return (
    <div className="time-reschedule-table-row-wrapper" onClick={actionHandler}>
      <div className="time-row-col-01">{id}</div>
      <div className="time-row-col-02">{name}</div>
      <div className="time-row-col-03">{sTime}</div>
      <div className="time-row-col-04">{dTime}</div>
      <div className="time-row-col-05">{rTime}</div>
    </div>
  );
}
