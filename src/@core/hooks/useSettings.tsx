// React Imports
import { useContext } from "react";
import { SettingsContext } from "../contexts/SettingContextPro";

// Context Imports

export const useSettings = () => {
  // Hooks
  const context = useContext(SettingsContext);
  if (context) {
    return context;
  } else {
    return {};
  }
};
