import { Routes, Route } from "react-router-dom";
import { LandingRoute } from "./features/landingPage/index";
import { EmployeeRoute } from "./features/employee/Route";
import { attendanceRoute } from "./features/attendance/Route";

const routes = [...LandingRoute, ...EmployeeRoute, ...attendanceRoute];
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
