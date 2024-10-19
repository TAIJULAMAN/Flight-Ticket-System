import React from "react";

import AsyncSelect from "react-select/async";

interface ColourOption {
  label: string;
  value: string;
}

const colourOptoin = [{ label: "some", value: "some" }];

const filterColors = (inputValue: string) => {
  return colourOptoin.filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase()));
};

const loadOptions = (inputValue: string, callback: (options: ColourOption[]) => void) => {
  setTimeout(() => {
    callback(filterColors(inputValue));
  }, 100);
};

export const SearchSelect = () => (
  <>
    <AsyncSelect
      cacheOptions
      loadOptions={loadOptions}
      defaultOptions
      className="border-none"
    />
  </>
);
