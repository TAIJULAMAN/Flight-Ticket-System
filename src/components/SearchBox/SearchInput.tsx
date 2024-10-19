import React, { useState, useRef, useEffect } from "react";
import Select, { components, OptionProps, NoticeProps } from "react-select";

interface LocationOp {
  value: string;
  label: string;
  location: string;
}

const locationOption: LocationOp[] = [
  { value: "CXB", label: "Cox's Bazar", location: "CXB" },
  { value: "DAC", label: "Dhaka", location: "DAC" },
  { value: "CGP", label: "Chittagong", location: "CGP" },
  { value: "ZYL", label: "Sylhet", location: "ZYL" },
  { value: "JFK", label: "New York", location: "JFK" },
  { value: "SYD", label: "Sydney", location: "SYD" },
  { value: "BKK", label: "Bangkok", location: "BKK" },
];

const CustomOption: React.FC<OptionProps<LocationOp>> = (props) => (
  <components.Option {...props}>
    <div>
      <p className=" font-bold text-[1.2rem]">{props.data.label}</p>
      <p>({props?.data?.location})</p>
    </div>
  </components.Option>
);

const NoOptionsMessage: React.FC<NoticeProps<LocationOp>> = (props) => {
  const inputLength = props.selectProps.inputValue.length;
  const message =
    inputLength > 0 && inputLength < 3 ? `Please type ${3 - inputLength} more character(s)` : "No Branch available";
  return (
    <components.NoOptionsMessage {...props}>
      <div>{message}</div>
    </components.NoOptionsMessage>
  );
};

const customStyles = {
  control: (styles: any) => ({
    ...styles,
    border: "none",
    boxShadow: "none",
    width: "100%",
    padding: "9px 0px",
    margin: "0",
  }),
  input: (styles: any) => ({
    ...styles,
    border: "none",
    padding: "9px 0px",
    margin: "0",
    textAlign: "center",
  }),
  indicatorSeparator: (styles: any) => ({
    display: "none",
  }),
  valueContainer: (styles: any) => ({
    ...styles,
    padding: "0",
    margin: "0",
  }),
  dropdownIndicator: (styles: any) => ({
    ...styles,
    padding: "0",
    margin: "0",
  }),
  menu: (styles: any) => ({
    ...styles,
  }),
};

interface SearchInputProps {
  title: string;
  setLocation: any;
  location: any;
}

const DropdownIndicator = () => null;

export const TestSelect: React.FC<SearchInputProps> = ({ title, setLocation, location }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const selectRef = useRef<any>(null);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      if (selectRef.current) {
        selectRef.current.focus();
      }
    }, 0);
  };

  const handleChange = (selectedOption: any) => {
    if (selectedOption) {
      setLocation({ locationName: selectedOption.label, locationCode: selectedOption.location });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen && selectRef.current) {
      const input = selectRef.current.inputRef;
      if (input) {
        setTimeout(() => {
          input.focus();
        }, 0);
      }
    }
  }, [isOpen]);

  const filteredOptions =
    inputValue.length >= 3
      ? locationOption.filter((option) => option.label.toLowerCase().includes(inputValue.toLowerCase()))
      : inputValue.length > 0
        ? []
        : locationOption;

  return (
    <div className="w-full bg-white py-1">
      {!isOpen && (
        <div
          onClick={handleOpen}
          className="cursor-pointer py-2 w-full">
          <p className="text-xs">{title}</p>
          <div className="flex items-center gap-2">
            <p className="text-lg font-[500] text-[#1D3FAA]">{location?.locationName}</p>
            <p className="text-lg font-[500] text-[#1D3FAA]">({location?.locationCode})</p>
          </div>
        </div>
      )}
      {isOpen && (
        <Select
          ref={selectRef}
          defaultValue={null}
          options={filteredOptions}
          className="border-none m-0 p-0 "
          isSearchable={true}
          value={null}
          components={{ Option: CustomOption, DropdownIndicator, NoOptionsMessage }}
          styles={customStyles}
          inputValue={inputValue}
          onInputChange={(value) => setInputValue(value)}
          onChange={handleChange}
          menuIsOpen={true}
          placeholder=""
          onBlur={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default TestSelect;
