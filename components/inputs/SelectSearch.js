import React, { useRef } from "react";
import Select, { StylesConfig } from "react-select";

const SelectSearch = ({
  options,
  isSearchable,
  name,
  defaultValue,
  placeholder,
  large,
  blue,
  setValue,
  errorCheck,
}) => {
  return (
    <div
      className={`${errorCheck ? "ring ring-secondary" : ""} rounded-[10px]`}
    >
      <Select
        defaultValue={defaultValue}
        isSearchable={isSearchable}
        name={name}
        options={options}
        placeholder={placeholder}
        isClearable={false}
        //   isDisabled={isDisabled}
        //   isLoading={isLoading}
        //   isRtl={isRtl}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary: blue ? "#01143B" : "#01143B",
            primary25: blue ? "#98b8fa" : "#c6d6f7",
            primary50: blue ? "#98b8fa" : "#c6d6f7",
            primary75: blue ? "#98b8fa" : "#c6d6f7",
          },
        })}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderRadius: "10px",
            fontSize: "15px",
            borderColor: state.isFocused ? "#01143B" : "#01143B",
            //   padding: '7px 7px',
            padding: large ? "7px 7px" : "3px",
          }),
        }}
        onChange={(e) => setValue(e.value)}
      />
    </div>
  );
};

export default SelectSearch;
