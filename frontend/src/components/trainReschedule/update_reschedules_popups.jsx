import React from "react";
import "./update_reschedules_popups.css";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import axios from "axios";

function UpdateReschedulePopup({
  setIsUpdateOpen,
  tid,
  tname,
  tstartTime,
  tdelay,
  treschedule,
}) {
  const [id, setID] = React.useState(tid);
  const [name, setName] = React.useState(tname);
  const [startTime, setStartTime] = React.useState(tstartTime);
  const [delay, setDelay] = React.useState(tdelay);
  const [reschedule, setReschedule] = React.useState(treschedule);

  const data = {
    trainID: tid,
    trainName: name ? name : tname,
    startTime: startTime ? startTime : tstartTime,
    delayTime: delay ? delay : tdelay,
    rescheduleTime: reschedule ? reschedule : treschedule,
  };

  const deleteHandler = () => {
    if (
      window.confirm("Continue this proccess?") === true
    ) {
      axios
        .delete(`http://localhost:8000/reschedule/detail/${id}`)
        .then((response) => {
          alert(response.data.message);
          setIsUpdateOpen(false);
          window.location.reload();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    } 
  };
  const updateHandler = () => {
    console.log(data);
    if (
      !data.trainID ||
      !data.trainName ||
      !data.startTime ||
      !data.delayTime ||
      !data.rescheduleTime
    ) {
      alert("All the fields required!");
      return;
    }
    axios
      .put("http://localhost:8000/reschedule/detail/update", data)
      .then((response) => {
        alert(response.data.message);
        setIsUpdateOpen(false);
        window.location.reload();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <div className="update-reschedule-popup-container">
      <div className="update-reschedule-popup-form">
        <div className="update-popup-action-bar-wrapper">
          <CloseSharpIcon
            style={{ color: "#2D99B7", cursor: "pointer" }}
            onClick={() => {
              setIsUpdateOpen(false);
            }}
          />
        </div>
        <div className="update-reschedule-title-bar-wrapper">
          <label>Train Reschedule </label>
        </div>
        <div className="update-popup-input-wrapper">
          <label className="update-popup-input-label">
            Train ID <span styles={{ fontSize: "5px" }}>(read only)</span>
          </label>
          <input type="text" value={id} className="update-popup-input-felid" />
        </div>
        <div className="update-popup-input-wrapper">
          <label className="popup-input-label">Train Name</label>
          <input
            type="text"
            className="update-popup-input-felid"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="update-popup-input-wrapper">
          <label className="update-popup-input-label">Start Time</label>
          <input
            type="text"
            className="update-popup-input-felid"
            value={startTime}
            onChange={(e) => {
              setStartTime(e.target.value);
            }}
          />
        </div>
        <div className="update-popup-input-wrapper">
          <label className="update-popup-input-label">Delay Time</label>
          <input
            type="text"
            className="update-popup-input-felid"
            value={delay}
            onChange={(e) => {
              setDelay(e.target.value);
            }}
          />
        </div>
        <div className="update-popup-input-wrapper">
          <label className="update-popup-input-label">Rescheduled Time</label>
          <input
            type="text"
            value={reschedule}
            className="update-popup-input-felid"
            onChange={(e) => {
              setReschedule(e.target.value);
            }}
          />
        </div>
        <div className="update-schedule-submit-btn-wrapper">
          <button
            onClick={deleteHandler}
            className="update-schedule-delete-btn"
          >
            Delete
          </button>
          <button
            onClick={updateHandler}
            className="update-schedule-submit-btn"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateReschedulePopup;
