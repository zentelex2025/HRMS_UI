import { createContext, useContext, useState } from "react";
import { FormContext } from "./Context_Declared.jsx";

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
