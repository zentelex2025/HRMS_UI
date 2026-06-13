import { useFormContext } from "../context/Context_Declared";

const useHandelForm = () => {
  const { setFormData, formData } = useFormContext();
  const formHandler = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { formHandler };
};

export default useHandelForm;
