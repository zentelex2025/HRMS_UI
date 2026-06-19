import React from "react";

const YearCard = () => {
  const holidayData = [
    { month: "January", holidays: [] },
    { month: "February", holidays: [] },
    { month: "March", holidays: [] },
    { month: "April", holidays: [] },
    { month: "May", holidays: [] },
    { month: "June", holidays: ["19-06-2026"] },
    { month: "July", holidays: [] },
    { month: "August", holidays: [] },
    { month: "September", holidays: [] },
    { month: "October", holidays: [] },
    { month: "November", holidays: [] },
    { month: "December", holidays: [] },
  ];
  return (
    <div className="holiday-card">
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Holiday Dates</th>
          </tr>
        </thead>

        <tbody>
          {holidayData.map((item) => (
            <tr key={item.month}>
              <td>{item.month}</td>

              <td>
                {item.holidays.length ? (
                  <ul>
                    {item.holidays.map((date) => (
                      <li key={date}>{date}</li>
                    ))}
                  </ul>
                ) : (
                  <span className="no-holiday">No holidays</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default YearCard;
