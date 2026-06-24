import { Routes, Route } from "react-router-dom";
import { Header, LandingRoute } from "./features/landingPage/index";
import { EmployeeRoute } from "./features/employee/Route";
import { attendanceRoute } from "./features/attendance/Route";
import { salaryManagement } from "./features/salary-management/route";
import { InterviewRoutes } from "./features/interview/Route";
import HeaderLayout from "./shared/layouts/HeaderLayout";

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
      <Route element={<HeaderLayout />}>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
};

export default App;
