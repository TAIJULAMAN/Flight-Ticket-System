// React Imports
import { useRef, useState } from "react";
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

// Hook Imports
import { useSettings } from "@core/hooks/useSettings";
import { FaAngleDown } from "react-icons/fa6";
import { getUser } from "@/hooks/hooks";

// Styled component for badge content
const BadgeContentSpan = styled("span")({
  width: 8,
  height: 8,
  borderRadius: "50%",
  cursor: "pointer",
  backgroundColor: "var(--mui-palette-success-main)",
  boxShadow: "0 0 0 2px var(--mui-palette-background-paper)",
});

const CustomerDropdown = () => {
  const [open, setOpen] = useState(false);

  // Refs
  const anchorRef = useRef<HTMLDivElement>(null);

  // Hooks
  const router = useRouter();

  const { settings }: any = useSettings();

  const handleDropdownOpen = () => {
    !open ? setOpen(true) : setOpen(false);
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

  const handleUserLogout = async () => {
    // Redirect to login page
    router.push("/login");
  };

  return (
    <>
      <div
        onClick={handleDropdownOpen}
        ref={anchorRef}
        className="mis-2 flex bg-[#ECF0FF]  text-[16px] text-[#162F7F] transition-all border-gray-200 px-[8px] rounded-[2rem] py-[7px]  cursor-pointer items-center justify-center gap-2">
        <span className="flex items-center justify-center">
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.4988 0.329285C15.84 0.329285 20.1695 4.65886 20.1695 9.99999C20.173 12.2319 19.4011 14.3957 17.9859 16.1215L18.0052 16.1428L17.8776 16.2511C16.9707 17.3238 15.8405 18.1856 14.5661 18.7762C13.2916 19.3669 11.9035 19.6721 10.4988 19.6707C7.64598 19.6707 5.08325 18.4357 3.31351 16.4726L3.12009 16.2502L2.99244 16.1438L3.01178 16.1206C1.59672 14.395 0.824868 12.2316 0.828135 9.99999C0.828135 4.65886 5.15771 0.329285 10.4988 0.329285ZM10.4988 14.8353C8.70009 14.8353 7.07444 15.4078 5.86367 16.195C7.20056 17.1982 8.82746 17.7392 10.4988 17.7366C12.1702 17.7392 13.7971 17.1982 15.134 16.195C13.7505 15.3085 12.142 14.8367 10.4988 14.8353ZM10.4988 2.26343C9.04294 2.26338 7.61657 2.67415 6.38369 3.44852C5.1508 4.22289 4.16144 5.32942 3.52932 6.64094C2.8972 7.95245 2.64797 9.41572 2.81029 10.8625C2.97261 12.3094 3.53989 13.681 4.44691 14.8199C6.01453 13.6952 8.15369 12.9012 10.4988 12.9012C12.844 12.9012 14.9831 13.6952 16.5508 14.8199C17.4578 13.681 18.0251 12.3094 18.1874 10.8625C18.3497 9.41572 18.1005 7.95245 17.4684 6.64094C16.8362 5.32942 15.8469 4.22289 14.614 3.44852C13.3811 2.67415 11.9547 2.26338 10.4988 2.26343ZM10.4988 4.19757C11.5248 4.19757 12.5087 4.60512 13.2341 5.33056C13.9596 6.056 14.3671 7.03992 14.3671 8.06585C14.3671 9.09178 13.9596 10.0757 13.2341 10.8011C12.5087 11.5266 11.5248 11.9341 10.4988 11.9341C9.47291 11.9341 8.48899 11.5266 7.76355 10.8011C7.03811 10.0757 6.63056 9.09178 6.63056 8.06585C6.63056 7.03992 7.03811 6.056 7.76355 5.33056C8.48899 4.60512 9.47291 4.19757 10.4988 4.19757ZM10.4988 6.13171C9.98587 6.13171 9.49392 6.33548 9.1312 6.6982C8.76847 7.06093 8.5647 7.55288 8.5647 8.06585C8.5647 8.57881 8.76847 9.07077 9.1312 9.43349C9.49392 9.79621 9.98587 9.99999 10.4988 9.99999C11.0118 9.99999 11.5038 9.79621 11.8665 9.43349C12.2292 9.07077 12.433 8.57881 12.433 8.06585C12.433 7.55288 12.2292 7.06093 11.8665 6.6982C11.5038 6.33548 11.0118 6.13171 10.4988 6.13171Z"
              fill="#162F7F"
            />
          </svg>
        </span>
        <p className="flex items-center justify-center gap-2">
          <span className="flex items-center mb-[2px] justify-center">User Z</span>
          <span className="flex items-center justify-center">
            <FaAngleDown />
          </span>
        </p>
      </div>
      <Popper
        open={open}
        transition
        disablePortal
        placement="bottom-end"
        anchorEl={anchorRef.current}
        className="min-is-[240px] !mbs-4 z-[1]">
        {({ TransitionProps, placement }) => (
          <Fade
            {...TransitionProps}
            style={{
              transformOrigin: placement === "bottom-end" ? "right top" : "left top",
            }}>
            <Paper
              elevation={settings.skin === "bordered" ? 0 : 8}
              {...(settings.skin === "bordered" && { className: "border" })}>
              <ClickAwayListener onClickAway={(e) => handleDropdownClose(e as MouseEvent | TouchEvent)}>
                <MenuList>
                  <MenuItem
                    className="gap-3.5 pli-4"
                    onClick={(e) => handleDropdownClose(e)}>
                    <svg
                      width="17"
                      height="18"
                      viewBox="0 0 17 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.44723 0.891602C9.52259 0.891602 10.5539 1.31879 11.3143 2.07919C12.0747 2.83958 12.5019 3.8709 12.5019 4.94627C12.5019 6.02163 12.0747 7.05296 11.3143 7.81335C10.5539 8.57375 9.52259 9.00094 8.44723 9.00094C7.37186 9.00094 6.34054 8.57375 5.58014 7.81335C4.81975 7.05296 4.39256 6.02163 4.39256 4.94627C4.39256 3.8709 4.81975 2.83958 5.58014 2.07919C6.34054 1.31879 7.37186 0.891602 8.44723 0.891602ZM8.44723 17.1103C8.44723 17.1103 16.5566 17.1103 16.5566 15.0829C16.5566 12.6501 12.6033 10.0146 8.44723 10.0146C4.29119 10.0146 0.337891 12.6501 0.337891 15.0829C0.337891 17.1103 8.44723 17.1103 8.44723 17.1103Z"
                        fill="#1D3FAA"
                      />
                    </svg>

                    <Typography color="text.primary">Profile</Typography>
                  </MenuItem>
                  <MenuItem
                    className="gap-3.5 pli-4"
                    onClick={(e) => handleDropdownClose(e)}>
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15.4801 0.891602H9.39806C8.98043 0.891602 8.39554 1.13387 8.10057 1.42885L0.559898 8.96951C0.417713 9.11236 0.337891 9.30571 0.337891 9.50726C0.337891 9.70882 0.417713 9.90216 0.559898 10.045L7.0869 16.572C7.22975 16.7142 7.4231 16.794 7.62465 16.794C7.8262 16.794 8.01955 16.7142 8.1624 16.572L15.7031 9.03135C15.9991 8.73536 16.2403 8.15148 16.2403 7.73385V1.65185C16.2395 1.45047 16.1592 1.25756 16.0168 1.11516C15.8744 0.972757 15.6814 0.892402 15.4801 0.891602ZM11.6788 6.9736C11.4791 6.97354 11.2813 6.93413 11.0968 6.85763C10.9123 6.78113 10.7446 6.66904 10.6034 6.52775C10.4623 6.38647 10.3503 6.21875 10.2739 6.03419C10.1975 5.84963 10.1582 5.65183 10.1583 5.45209C10.1584 5.25235 10.1978 5.05458 10.2743 4.87006C10.3508 4.68555 10.4629 4.51791 10.6042 4.37672C10.7454 4.23553 10.9132 4.12355 11.0977 4.04717C11.2823 3.9708 11.4801 3.93152 11.6798 3.93159C12.0832 3.93172 12.47 4.0921 12.7552 4.37744C13.0403 4.66278 13.2005 5.04971 13.2003 5.4531C13.2002 5.8565 13.0398 6.24332 12.7545 6.52847C12.4691 6.81362 12.0822 6.97374 11.6788 6.9736Z"
                        fill="#1D3FAA"
                      />
                    </svg>

                    <Typography color="text.primary">My Profile</Typography>
                  </MenuItem>
                  <MenuItem
                    className="gap-3.5 pli-4"
                    onClick={(e) => handleDropdownClose(e)}>
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.67318 16.5127C2.18351 16.5127 1.76448 16.3385 1.41607 15.9901C1.06767 15.6417 0.893172 15.2224 0.892578 14.7321V2.26791C0.892578 1.77824 1.06708 1.35921 1.41607 1.0108C1.76507 0.662397 2.18411 0.487898 2.67318 0.487305H8.90528V2.26791H2.67318V14.7321H8.90528V16.5127H2.67318ZM12.4665 12.9515L11.2423 11.6606L13.5126 9.39031H6.23438V7.60971H13.5126L11.2423 5.33944L12.4665 4.04851L16.918 8.50001L12.4665 12.9515Z"
                        fill="#1D3FAA"
                      />
                    </svg>

                    <Typography color="text.primary">Log Out</Typography>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
};

export default CustomerDropdown;
