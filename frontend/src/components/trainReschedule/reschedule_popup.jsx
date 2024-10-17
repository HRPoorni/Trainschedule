import React from "react";
import "./reschedule_popup.css";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import axios from "axios";

function ReschedulePopup({ setIsOpen }) {
  const [id, setID] = React.useState("");
  const [name, setName] = React.useState("");
  const [startTime, setStartTime] = React.useState("");
  const [delay, setDelay] = React.useState("");
  const [reschedule, setReschedule] = React.useState("");

  const data = {
    trainID: id,
    trainName: name,
    startTime: startTime,
    delayTime: delay,
    rescheduleTime: reschedule,
  };

  const submitHandler = () => {
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
      .post("http://localhost:8000/reschedule/detail/add", data)
      .then((response) => {
        alert(response.data.message);
        setIsOpen(false);
            window.location.reload();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <div className="reschedule-popup-container">
      <div className="reschedule-popup-form">
        <div className="popup-action-bar-wrapper">
          <CloseSharpIcon
            style={{ color: "#2D99B7", cursor: "pointer" }}
            onClick={() => {
              setIsOpen(false);
            }}
          />
        </div>
        <div className="reschedule-title-bar-wrapper">
          <label>Train Rating</label>
        </div>
        <div className="popup-input-wrapper">
          <label className="popup-input-label">Train ID</label>
          <input
            type="text"
            className="popup-input-felid"
            onChange={(e) => {
              setID(e.target.value);
            }}
          />
        </div>
        <div className="popup-input-wrapper">
          <label className="popup-input-label">Train Name</label>
          <input
            type="text"
            className="popup-input-felid"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="popup-input-wrapper">
          <label className="popup-input-label">Start Time</label>
          <input
            type="text"
            className="popup-input-felid"
            onChange={(e) => {
              setStartTime(e.target.value);
            }}
          />
        </div>
        <div className="popup-input-wrapper">
          <label className="popup-input-label">Delay Time</label>
          <input
            type="text"
            className="popup-input-felid"
            onChange={(e) => {
              setDelay(e.target.value);
            }}
          />
        </div>
        <div className="popup-input-wrapper">
          <label className="popup-input-label">Rescheduled Time</label>
          <input
            type="text"
            className="popup-input-felid"
            onChange={(e) => {
              setReschedule(e.target.value);
            }}
          />
        </div>
        <div className="schedule-submit-btn-wrapper">
          <button onClick={submitHandler} className="schedule-submit-btn">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReschedulePopup;
