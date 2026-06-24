import React from "react";

const HolidayCard = ({ props }) => {
  const { edit, setEdit } = props;
  if (!edit) return null;

  return (
    <section className="holiday-btn-card">
      <div className="holiday-modal">
        <button className="close-btn" onClick={() => setEdit(false)}>
          ✕
        </button>

        <h2>Update Holidays</h2>

        <p>
          <strong>Year:</strong> 2025
        </p>

        <div className="month-container">
          <div className="month-card">
            <div className="month-header">
              <h3>October</h3>

              <button className="add-date-btn">+ Add Date</button>
            </div>

            <p>No holidays this month.</p>
          </div>

          <div className="month-card">
            <div className="month-header">
              <h3>November</h3>

              <button className="add-date-btn">+ Add Date</button>
            </div>

            <div className="date-row">
              <input type="date" />

              <button className="remove-btn">Remove</button>
            </div>
          </div>

          <div className="month-card">
            <div className="month-header">
              <h3>December</h3>

              <button className="add-date-btn">+ Add Date</button>
            </div>

            <p>No holidays this month.</p>
          </div>
        </div>

        <button className="update-btn">Update</button>
      </div>
    </section>
  );
};

export default HolidayCard;
