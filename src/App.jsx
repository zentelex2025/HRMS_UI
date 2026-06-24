import { Routes, Route } from "react-router-dom";
import { LandingRoute } from "./features/landingPage/index";
import { EmployeeRoute } from "./features/employee/Route";
import { attendanceRoute } from "./features/attendance/Route";
import { salaryManagement } from "./features/salary-management/route";
import { InterviewRoutes } from "./features/interview/Route";

const routes = [
  ...LandingRoute,
  ...EmployeeRoute,
  ...attendanceRoute,
  ...salaryManagement,
  ...InterviewRoutes,
];
console.log({ routes });
const App = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default App;
