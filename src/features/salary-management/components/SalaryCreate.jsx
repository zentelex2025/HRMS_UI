import React from "react";

const employeeData = [
  {
    sno: 1,
    empId: "EMP001",
    name: "John Doe",
    salary: "₹40,000.00",
    pTax: "-200",
    otDed: "-0",
    arrears: "+0",
    totalDays: 30,
    workingDays: 24,
    present: 5,
    absent: 19,
    cl: 1,
    sun: 5,
    ph: 1,
    payDays: 11,
    earnings: "₹14,666.67",
    netPay: "₹14,466.67",
    attendance: "17%",
  },
  {
    sno: 2,
    empId: "7015",
    name: "Amit Sharma",
    salary: "₹41,666.67",
    pTax: "-200",
    otDed: "-0",
    arrears: "+0",
    totalDays: 30,
    workingDays: 24,
    present: 24,
    absent: 0,
    cl: 1,
    sun: 5,
    ph: 1,
    payDays: 30,
    earnings: "₹41,666.67",
    netPay: "₹41,466.67",
    attendance: "100%",
  },
];

const SalaryCreate = () => {
  return (
    <main className="salary-create">
      {/* Header */}
      <section className="salary-toolbar">
        <div className="filters">
          <select>
            <option>November</option>
          </select>

          <select>
            <option>2025</option>
          </select>
        </div>

        <h2>November 2025</h2>

        <button className="history-btn">Submitted Payroll History</button>

        <button className="export-btn">Export Excel</button>
      </section>

      {/* Note */}
      <section className="salary-note">
        <strong>Note:</strong> The highlighted fields are editable. Once you
        make any changes, they will be saved automatically and a tag will appear
        in place of the employee name indicating it was edited. Before clicking
        the final submit button, please ensure that all information is correctly
        added and all corrections are accurate.
      </section>

      {/* Table */}
      <section className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>S.no</th>
              <th>EMP. ID</th>
              <th>Name</th>
              <th>Fixed Salary</th>
              <th>P.Tax</th>
              <th>Ot.Ded</th>
              <th>Arrears</th>
              <th>T. Days</th>
              <th>W. Days</th>
              <th>Present</th>
              <th>Absent</th>
              <th>CL</th>
              <th>Sun</th>
              <th>PH</th>
              <th>Pay. Days</th>
              <th>Earnings</th>
              <th>Net Pay</th>
              <th>Att%</th>
              <th>Actions</th>
              <th>
                <input type="checkbox" />
              </th>
            </tr>
          </thead>

          <tbody>
            {employeeData.map((item) => (
              <tr key={item.empId}>
                <td>{item.sno}</td>
                <td>{item.empId}</td>
                <td>{item.name}</td>
                <td>{item.salary}</td>
                <td>{item.pTax}</td>
                <td>{item.otDed}</td>
                <td>{item.arrears}</td>
                <td>{item.totalDays}</td>
                <td>{item.workingDays}</td>
                <td>{item.present}</td>
                <td>{item.absent}</td>
                <td>{item.cl}</td>
                <td>{item.sun}</td>
                <td>{item.ph}</td>
                <td>{item.payDays}</td>
                <td>{item.earnings}</td>
                <td className="net-pay">{item.netPay}</td>
                <td>{item.attendance}</td>

                <td>
                  <button className="reset-btn">Reset</button>
                </td>

                <td>
                  <input type="checkbox" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Footer */}
      <section className="salary-footer">
        <p>
          <strong>Note:</strong> Only submit after all corrections and
          deductions have been made. Clicking "Final Submit" will update
          existing records if they already exist.
        </p>

        <label className="confirm-box">
          <input type="checkbox" />I confirm the selected employees' payroll is
          accurate.
        </label>

        <button className="submit-btn">Final Submit Selected</button>
      </section>
    </main>
  );
};

export default SalaryCreate;
