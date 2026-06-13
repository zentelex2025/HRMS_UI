import DynamicAttendance from "../components/DynamicAttendance";
import ManualAttendance from "../components/ManualAttendance";

const Attendance = () => {
  return (
    <main>
      <ManualAttendance />
      <DynamicAttendance />
    </main>
  );
};

export default Attendance;
