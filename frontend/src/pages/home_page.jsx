import React, { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import "../css/home_page.css";
import Landing from "../assets/landing.jpg";
import RatingTable from "../components/rating_table";
import RescheduleTable from "../components/reschedule_table";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Rating from "@mui/material/Rating";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import AddRating from "./add_rating";
function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  window.addEventListener("load", function () {
    setTimeout(() => {
      setIsOpen(true);
    }, 5000);
  });

  const containerStyle = {
    width: "500px",
    height: "400px",
  };
  const location = {
    lat: 7.7906,
    lng: 80.6337,
  };
  const center = {
    lat: 7.53197,
    lng: 79.85775,
  };
  const center2 = {
    lat: 6.83197,
    lng: 79.88775,
  };
  const center3 = {
    lat: 7.20000,
    lng: 79.95995,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyD9KmKrCyjGBZRgnXNRFQCcxOu_6luxhH4", //API Key in test project in google api
  });
  const onLoadd = (marker) => {
    console.log("marker: ", marker);
  };


  return (
    <div className="home-page-container">
      {isOpen && <AddRating setIsOpen={setIsOpen} />}
      <div className="landing-screen-wrapper">
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={location}
            zoom={7}
          >
            <Marker onLoad={onLoadd} position={center} />
            <Marker onLoad={onLoadd} position={center2} />
            <Marker onLoad={onLoadd} position={center3} />
          </GoogleMap>
        )}
        <img src={Landing} alt="Landing" className="landing" />
      </div>
      <div className="reschedule-wrapper">
        <div className="topic-wrapper">
          <label>Train Rescheduled Times</label>
          <label>
            <AccessTimeIcon />
          </label>
        </div>
        <div className="reschedule-table-wrapper">
          <RescheduleTable />
        </div>
      </div>
      <div className="rating-wrapper">
        <div className="topic-wrapper">
          <label>Train Ratings</label>
          <label>
            <Rating
              name="half-rating"
              size="small"
              defaultValue={3.0}
              precision={0.5}
              style={{ color: "#2D99B7" }}
              readOnly
            />
          </label>
          <AddCircleOutlineSharpIcon
            onClick={() => {
              setIsOpen(true);
            }}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="rating-table-wrapper">
          <RatingTable />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
