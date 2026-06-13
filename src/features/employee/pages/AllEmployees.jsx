import FetchAllEmployee from "../components/FetchAllEmployee";
import "../components/fetchAllEmployee.scss";
import { api } from "@/shared/api/baseUrl.js";
import useEmployeeFetch from "../hooks/useEmployeeFetch";
import { useFormContext } from "@/shared/context/Context_Declared.jsx";

const AllEmployees = () => {
  const { setFormData, formData } = useFormContext();

  const props = { setFormData, formData };
  const { data, isLoading, error } = useEmployeeFetch();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main>
      <FetchAllEmployee employeeData={data.res} {...props} />
    </main>
  );
};

export default AllEmployees;
