import Attendance from "./pages/Attendance";
import Holidays from "./pages/Holidays";

export const attendanceRoute = [
  { path: "/attendance", element: <Attendance />, roles: [""] },
  { path: "/holiday", element: <Holidays />, roles: [""] },
];
