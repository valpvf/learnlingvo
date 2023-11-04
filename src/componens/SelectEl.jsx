import { validateYupSchema } from "formik";
import Select from "react-select";
// const options = [
//   { value: "French", label: "French" },
//   { value: "English", label: "English" },
//   { value: "German", label: "German" },
//   { value: "Ukrainian", label: "Ukrainian" },
//   { value: "Polish", label: "Polish" },
// ];
export const SelectEl = ({ opt, onChange }) => {
  return (
    <Select
      options={opt}
      onChange={(newValue) => onChange(newValue.value)}
    />
  );
};
