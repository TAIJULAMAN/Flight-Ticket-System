"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import Link from "next/link";

export default function LoginButton() {
  return (
    <PopupState
      variant="popover"
      popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <button
            {...bindTrigger(popupState)}
            className="px-10 cursor-pointer py-1.5 text-lg font-medium bg-[#254fd4] text-white rounded-md ">
            Login
          </button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}>
            <div className="p-4">
              <Link
                href={"/auth/b2c/login"}
                className="bg-[#254fd4] text-white text-[18px]   py-1.5 px-5 ">
                Login as Admin
              </Link>
            </div>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
