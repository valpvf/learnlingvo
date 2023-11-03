import { validateYupSchema } from "formik";
import Select from "react-select";
const options = [
  { value: "French", label: "French" },
  { value: "English", label: "English" },
  { value: "German", label: "German" },
  { value: "Ukrainian", label: "Ukrainian" },
  { value: "Polish", label: "Polish" },
];
export const SelectEl = () => {
  return (
    <Select
      options={options}
      onChange={(newValue) => console.log(newValue.value)}
    />
  );
};
