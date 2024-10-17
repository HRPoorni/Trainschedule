import React from 'react'
import TimeRescheduleTable from "./time_reschedule_table";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import "./schedule.css";
import ReschedulePopup from './reschedule_popup';
import UpdateReschedulePopup from './update_reschedules_popups';

function Schedules() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = React.useState(false);

  const [id, setID] = React.useState("");
  const [name, setName] = React.useState("");
  const [startTime, setStartTime] = React.useState("");
  const [delay, setDelay] = React.useState("");
  const [reschedule, setReschedule] = React.useState("");

  return (
    <div className="reschedule-container">
      {isOpen && <ReschedulePopup setIsOpen={setIsOpen} />}
      {isUpdateOpen && (
        <UpdateReschedulePopup
          setIsUpdateOpen={setIsUpdateOpen}
          tid={id}
          tname={name}
          tstartTime={startTime}
          tdelay={delay}
          treschedule={reschedule}
        />
      )}
      <div className="reschedule-time-wrapper">
        <div className="reschedule-topic-wrapper">
          <label>Train Rescheduled Times</label>
          <label>
            <AddCircleOutlineSharpIcon
              onClick={() => {
                setIsOpen(true);
              }}
              style={{cursor: "pointer"}}
            />
          </label>
        </div>
        <div className="reschedule-table-wrapper">
          <TimeRescheduleTable
            setIsUpdateOpen={setIsUpdateOpen}
            setID={setID}
            setName={setName}
            setStartTime={setStartTime}
            setDelay={setDelay}
            setReschedule={setReschedule}
            
          />
        </div>
      </div>
    </div>
  );
}

export default Schedules;