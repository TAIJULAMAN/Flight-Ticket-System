import { useDispatch } from "react-redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/redux-store";
import { getCookie } from "@/utils/getCookie";

export const useAppDispatch = () => useDispatch<AppDispatch>();

// Custom hook to use the RootState type
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const getUser = (): any => {
  const userCookie = getCookie("user");
  if (userCookie) {
    try {
      return JSON.parse(userCookie);
    } catch (error) {
      console.error("Error parsing user cookie:", error);
      return null;
    }
  }
  return null;
};
