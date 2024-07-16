"use client";
import React from "react";
import Select, { StylesConfig } from "react-select";

const options = [
  {
    value: "usd",
    label: "USD",
  },
  {
    value: "eur",
    label: "EUR",
  },
  {
    value: "inr",
    label: "INR",
  },
];

const customStyles: StylesConfig = {
  option: (provided, state) => ({
    ...provided,
    transition: "background-color 0.2s",
    color: state.isSelected ? "black" : "white",
    backgroundColor: state.isSelected ? "white" : "transparent",
    ":hover": {
      backgroundColor: state.isFocused ? "#ffffff" : "transparent",
      color: state.isFocused ? "black" : "white",
    },
  }),
  control: (base, state) => ({
    ...base,
    backgroundColor: "#0e7490",
    border: "none",
    borderRadius: "0",
    boxShadow: "none",
    ":hover": {
      cursor: "pointer",
    },
  }),
  container: (provided) => ({
    ...provided,
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: "40px",
    padding: "0",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#0e7490",
    color: "white",
    borderRadius: "0",
    width: "100px",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "white",
    ":hover": {
      color: "white",
      cursor: "pointer",
    },
  }),
};

const CurrencySelector: React.FC = () => (
  <Select options={options} styles={customStyles} defaultValue={options[0]} />
);

export default CurrencySelector;
