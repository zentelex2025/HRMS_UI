import React from "react";
import YearCard from "./YearCard";
import AddIcon from "@mui/icons-material/Add";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const HolidayManagement = ({ setEdit }) => {
  return (
    <main>
      <section className="holiday-card-container">
        <h2>Holiday Management</h2>
        <div className="icon-calendar">
          <button className="add-btn">
            <AddIcon />
          </button>
          <div>
            <button>&lt;</button>
            <span>2025</span>
            <button>&gt;</button>
          </div>
          <button className="edit-btn" onClick={() => setEdit(true)}>
            <EditOutlinedIcon />
          </button>
        </div>
        <YearCard />
      </section>
    </main>
  );
};

export default HolidayManagement;
