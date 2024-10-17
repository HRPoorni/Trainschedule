import React from "react";
import "../css/add_rating.css";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import Rating from "@mui/material/Rating";
import axios from "axios";

function AddRating({ setIsOpen }) {
  const [rate, setRate] = React.useState(0);
  const [review, setReview] = React.useState("");
  const [trainID, setTrainID] = React.useState("");
  const [trainName, setTrainName] = React.useState("");

  const trainDetailsGetHandler = (e) => {
    let val = e.target.value;
    let detail = val.split("-");
    setTrainID(detail[0]);
    setTrainName(detail[1]);
  };

  const data = {
    trainID: trainID,
    trainName: trainName,
    rating: rate,
    review: review,
  };

  const submitHandler = () => {
    if (!trainID || !trainName || !rate || !review) {
      alert("All fields required");
    }
    axios
      .post("http://localhost:8000/rating/detail/add", data)
      .then((response) => {
        alert(response.data.message);
        setIsOpen(false);
            window.location.reload();
      })
      .catch((err) => {
        alert(err.response.data.message);
        setIsOpen(false);
      });
  };

  return (
    <div className="add-rating-container">
      <div className="add-rating-form-container">
        <div className="action-bar-wrapper">
          <CloseSharpIcon
            style={{ color: "#2D99B7", cursor: "pointer" }}
            onClick={() => {
              setIsOpen(false);
            }}
          />
        </div>
        <div className="title-bar-wrapper">
          <label>Train Rating</label>
        </div>
        <div className="input-field-wrapper">
          <label>Train Rating</label>
          <select className="input-field-01" onChange={trainDetailsGetHandler}>
            <option value="">Select Train</option>
            <option value="03037-Udarata Manike">Udarata Manike</option>
            <option value="03036-Ruhunu Kumari">Ruhunu Kumari</option>
          </select>
        </div>
        <div className="add-rating-wrapper">
          <Rating
            defaultValue={0}
            onChange={(event, newValue) => {
              setRate(newValue);
            }}
            style={{ color: "#2D99B7" }}
          />
        </div>
        <div className="input-field-wrapper">
          <label for="cars">Train Rating</label>
          <textarea
            className="input-field-02"
            rows={4}
            onChange={(e) => {
              setReview(e.target.value);
            }}
          />
        </div>
        <div className="submit-btn-wrapper">
          <button onClick={submitHandler} className="submit-btn">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddRating;
