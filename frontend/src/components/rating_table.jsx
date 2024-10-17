import React, { useEffect,useState } from "react";
import "../css/rating_table.css";
import Rating from "@mui/material/Rating";
import axios from "axios";

function RatingTable() {

  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/rating/details")
      .then((res) => {
        setDetails(res.data.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }, []);

  return (
    <div className="rate-table-container">
      <div className="details-track">
        {details.map((item, index) => (
          <RatingTableRow
            id={item.trainID}
            name={item.trainName}
            avg={item.avg}
            key={index}
          />
        ))}
        {/* <RatingTableRow   />
        <RatingTableRow   /> */}
      </div>
    </div>
  );
}

export default RatingTable;

function RatingTableRow({id,name,avg}) {
  return (
    <div className="rate-table-row-wrapper">
      <div className="rate-col-01">{id}</div>
      <div className="rate-col-02">{name}</div>
      <div className="rate-col-03">
        <Rating
          name="half-rating"
          size="small"
          style={{ color: "#2D99B7" }}
          defaultValue={avg}
          precision={0.5}
          readOnly
        />
      </div>
      <div className="rate-col-04">
        <label className="rating-count">
          {avg}/<span>5</span>
        </label>
      </div>
    </div>
  );
}
