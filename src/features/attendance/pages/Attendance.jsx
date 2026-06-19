import ManualAttendance from "../components/ManualAttendance";
import { curCalendarFormat } from "../utils/lib";
import "../components/manualAttendance.scss";

const { year, month, day, daysInMonth } = curCalendarFormat();
console.log(year, month, day, daysInMonth);

const Attendance = () => {
  return (
    <main>
      <ManualAttendance />
    </main>
  );
};

export default Attendance;
