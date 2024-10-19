"use client";

// React Imports
import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";

// Next Imports
import { useRouter } from "next/navigation";

// MUI Imports
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MenuList from "@mui/material/MenuList";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import { useSettings } from "@core/hooks/useSettings";
import { FaAngleDown, FaChevronDown, FaMinus, FaPlus } from "react-icons/fa6";
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";

// Styled component for badge content
const BadgeContentSpan = styled("span")({
  width: 8,
  height: 8,
  borderRadius: "50%",
  cursor: "pointer",
  backgroundColor: "var(--mui-palette-success-main)",
  boxShadow: "0 0 0 2px var(--mui-palette-background-paper)",
});

const PassengerClass = ({ adults, setAdults }: any) => {
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [travelClass, setTravelClass] = useState("economy");
  const [open, setOpen] = useState(false);

  const anchorRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { settings }: any = useSettings();

  const handleDropdownOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleDropdownClose = (event?: MouseEvent<HTMLLIElement> | (MouseEvent | TouchEvent), url?: string) => {
    if (url) {
      router.push(url);
    }

    if (anchorRef.current && anchorRef.current.contains(event?.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  const handlePassengerChange =
    (setPassenger: React.Dispatch<React.SetStateAction<number>>) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(event.target.value.replace(/[^0-9]/g, ""));
      setPassenger(value > 0 ? value : 0);
    };

  const increasePassenger = (setPassenger: React.Dispatch<React.SetStateAction<number>>) => () => {
    setPassenger((prev) => prev + 1);
  };

  const decreasePassenger = (setPassenger: React.Dispatch<React.SetStateAction<number>>) => () => {
    setPassenger((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleUserLogout = async () => {
    router.push("/login");
  };

  const totalPassengers = adults + children + infants;

  const handleClassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTravelClass(event.target.value);
  };

  return (
    <>
      <div
        onClick={handleDropdownOpen}
        ref={anchorRef}
        className="flex h-full relative !z-50 justify-between cursor-pointer w-full items-center">
        <div>
          <p className="text-xs">Passenger/class</p>
          <p className="text-lg font-[500] text-[#1D3FAA]">
            {totalPassengers} Passenger{totalPassengers > 1 ? "s" : ""},{" "}
            {travelClass.charAt(0).toUpperCase() + travelClass.slice(1).replace(/([A-Z])/g, " $1")}
          </p>
        </div>
        <p>
          <FaChevronDown />
        </p>
      </div>
      <Popper
        open={open}
        transition
        disablePortal
        placement="bottom"
        anchorEl={anchorRef.current}
        className="min-is-[240px] h-full absolute !mbs-4 !z-50 ms-5">
        {({ TransitionProps, placement }) => (
          <Fade {...TransitionProps}>
            <Paper
              elevation={settings.skin === "bordered" ? 0 : 0}
              className="z-50 "
              {...(settings.skin === "bordered" && { className: "border" })}>
              <ClickAwayListener
                onClickAway={(e) => handleDropdownClose(e as MouseEvent | TouchEvent)}
                sx={{ zIndex: 1300 }}>
                <div className="space-y-4 p-4 shadow-sm !z-50 rounded-[12px]">
                  <div className="flex gap-10 w-full items-center justify-between">
                    <div>
                      <p className="primary-text text-[1.2rem] font-[500]">Adults</p>
                      <p>12 Years and above</p>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <span
                        className="p-1 text-xl bg-[#7995EB] rounded-md cursor-pointer flex items-center justify-center"
                        onClick={decreasePassenger(setAdults)}>
                        <FaMinus className="text-white" />
                      </span>

                      <input
                        type="text"
                        className="text-lg w-[38px] font-[500] outline-none rounded-md text-center "
                        value={adults}
                        onChange={handlePassengerChange(setAdults)}
                      />
                      <span
                        className="p-1 bg-[#254FD4] rounded-md cursor-pointer text-xl flex items-center justify-center"
                        onClick={increasePassenger(setAdults)}>
                        <FaPlus className="text-white" />
                      </span>
                    </div>
                  </div>
                  <div className="flex lg:gap-10 w-full items-center justify-between">
                    <div>
                      <p className="primary-text text-[1.2rem] font-[500]">Children</p>
                      <p>2-11 Years</p>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <span
                        className="p-1 text-xl bg-[#7995EB] rounded-md cursor-pointer flex items-center justify-center"
                        onClick={decreasePassenger(setChildren)}>
                        <FaMinus className="text-white" />
                      </span>
                      <input
                        type="text"
                        className="text-lg w-[38px] font-[500] outline-none rounded-md text-center "
                        value={children}
                        onChange={handlePassengerChange(setChildren)}
                      />

                      <span
                        className="p-1 bg-[#254FD4] rounded-md cursor-pointer text-xl flex items-center justify-center"
                        onClick={increasePassenger(setChildren)}>
                        <FaPlus className="text-white" />
                      </span>
                    </div>
                  </div>
                  <div className="flex lg:gap-10 w-full items-center justify-between">
                    <div>
                      <p className="primary-text text-[1.2rem] font-[500]">Infant</p>
                      <p>Below 2 Years</p>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <span
                        className="p-1 text-xl bg-[#7995EB] rounded-md cursor-pointer flex items-center justify-center"
                        onClick={decreasePassenger(setInfants)}>
                        <FaMinus className="text-white" />
                      </span>

                      <input
                        type="text"
                        className="text-lg w-[38px] font-[500] outline-none rounded-md text-center "
                        value={infants}
                        onChange={handlePassengerChange(setInfants)}
                      />
                      <span
                        className="p-1 bg-[#254FD4] rounded-md  cursor-pointer text-xl flex items-center justify-center"
                        onClick={increasePassenger(setInfants)}>
                        <FaPlus className="text-white" />
                      </span>
                    </div>
                  </div>
                  <div>
                    <FormControl component="fieldset">
                      <RadioGroup
                        className="flex flex-col gap-2"
                        value={travelClass}
                        onChange={handleClassChange}
                        name="travelClass">
                        <FormControlLabel
                          value="economy"
                          control={<Radio />}
                          label="Economy"
                        />
                        <FormControlLabel
                          value="premiumEconomy"
                          control={<Radio />}
                          label="Premium Economy"
                        />
                        <FormControlLabel
                          value="business"
                          control={<Radio />}
                          label="Business"
                        />
                        <FormControlLabel
                          value="firstClass"
                          control={<Radio />}
                          label="First Class"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
};

export default PassengerClass;
