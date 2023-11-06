import Select from "react-select";

export const SelectEl = ({ opt, onChange }) => {
  return (
    <Select
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
