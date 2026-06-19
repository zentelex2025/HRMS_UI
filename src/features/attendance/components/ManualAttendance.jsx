import React from "react";
const attendanceData = [
  {
    id: "EMP001",
    name: "John Doe",
    attendance: [1, 3, 4, 5],
  },
  {
    id: "7015",
    name: "Amit Sharma",
    attendance: [1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 15],
  },
];

const days = [
  { day: 1, week: "Sat" },
  { day: 2, week: "Sun" },
  { day: 3, week: "Mon" },
  { day: 4, week: "Tue" },
  { day: 5, week: "Wed" },
  { day: 6, week: "Thu" },
  { day: 7, week: "Fri" },
  { day: 8, week: "Sat" },
  { day: 9, week: "Sun" },
  { day: 10, week: "Mon" },
  { day: 11, week: "Tue" },
  { day: 12, week: "Wed" },
  { day: 13, week: "Thu" },
  { day: 14, week: "Fri" },
  { day: 15, week: "Sat" },
  { day: 16, week: "Sun" },
  { day: 17, week: "Mon" },
  { day: 18, week: "Tue" },
  { day: 19, week: "Wed" },
  { day: 20, week: "Thu" },
  { day: 21, week: "Fri" },
  { day: 22, week: "Sat" },
  { day: 23, week: "Sun" },
  { day: 24, week: "Mon" },
  { day: 25, week: "Tue" },
  { day: 26, week: "Wed" },
  { day: 27, week: "Thu" },
  { day: 28, week: "Fri" },
  { day: 29, week: "Sat" },
  { day: 30, week: "Sun" },
];

const ManualAttendance = () => {
  return (
    <main>
      <section className="table-container">
        <table>
          <thead>
            <tr>
              <th>Employee</th>

              {days.map((item) => (
                <th
                  key={item.day}
                  className={
                    item.week === "Sun"
                      ? "weekend"
                      : item.day === 14
                        ? "today"
                        : ""
                  }
                >
                  <div>{item.week}</div>
                  <div>{item.day}</div>
                </th>
              ))}

              <th>Totals</th>
            </tr>
          </thead>

          <tbody>
            {attendanceData.map((employee) => (
              <tr key={employee.id}>
                <td>
                  <h4>{employee.name}</h4>
                  <span>{employee.id}</span>
                </td>

                {days.map((day) => (
                  <td
                    key={day.day}
                    className={
                      employee.attendance.includes(day.day)
                        ? "present"
                        : "absent"
                    }
                  >
                    {employee.attendance.includes(day.day) ? "✓" : "--"}
                  </td>
                ))}
                <td className="totals-cell">
                  <table className="totals-table">
                    <thead>
                      <tr>
                        <th className="p">P</th>
                        <th className="half">½</th>
                        <th className="a">A</th>
                        <th className="tp">TP</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>{employee.attendance.length}</td>
                        <td>0</td>
                        <td>{days.length - employee.attendance.length}</td>
                        <td>{employee.attendance.length}.0</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default ManualAttendance;
