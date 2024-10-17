import React from "react";
import "../css/reschedule_table.css";
import axios from "axios";

function RescheduleTable() {
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
    <div className="reschedule-table-container">
      <div className="reschedule-table-header-wrapper">
        <div className="col-01">Train ID</div>
        <div className="col-02">Train Name</div>
        <div className="col-03">Start Time</div>
        <div className="col-04">Delay Time </div>
        <div className="col-05">Rescheduled Time </div>
      </div>
      <div className="details-track">
        {details.map((item, index) => (
          <RescheduleTableRow
            key={index}
            id={item.trainID}
            name={item.trainName}
            sTime={item.startTime}
            dTime={item.delayTime}
            rTime={item.rescheduleTime}
          />
        ))}
      </div>
    </div>
  );
}

export default RescheduleTable;

function RescheduleTableRow({id,name,sTime,dTime,rTime}) {
  return (
    <div className="reschedule-table-row-wrapper">
      <div className="row-col-01">{id}</div>
      <div className="row-col-02">{name}</div>
      <div className="row-col-03">{sTime}</div>
      <div className="row-col-04">{dTime} </div>
      <div className="row-col-05">{rTime}</div>
    </div>
  );
}
