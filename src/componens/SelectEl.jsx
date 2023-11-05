import { validateYupSchema } from "formik";
import Select from "react-select";
import { SelectStyled } from "./SelectEl.styled";

export const SelectEl = ({ opt, onChange }) => {
  return (
    <SelectStyled
      indicatorSeparator={{}}
      options={opt}
      onChange={(newValue) => onChange(newValue.value)}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderRadius: 14,
          borderColor: "white",
          color: "white",
          fontSize: 18,
        }),
        indicatorSeparator: (baseStyles, state) => ({
          isDisabled: true,
        }),
      }}
    />
  );
};
