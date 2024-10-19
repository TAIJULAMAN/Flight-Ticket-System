"use client";
import Link from "next/link";
import Top from "./Top";
import SettingBar from "./SettingBar";
import NavBar from "./NavBar";
import React, { useEffect, useState } from "react";

import MObileSideBar from "./MobileSideBar";
import { Button } from "@mui/material";
import StickyNav from "./StickyNav";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isNavFixed, setIsNavFixed] = useState(false);
  const [state, setState] = React.useState({
    left: false,
  });
  const pathName = usePathname();

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, left: open });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 70;
      setIsNavFixed(scrollY > scrollThreshold);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`main-container z-50 bg-transparent ${pathName === "/" ? "absolute z-50 left-0 right-0 top-0" : "static"}`}>
      <MObileSideBar
        toggleDrawer={toggleDrawer}
        isOpen={state.left}
      />
      <div className={` ${pathName === "/" ? "bg-transparent text-white" : ""}`}>
        <SettingBar
          pathName={pathName}
          isNavFixed={isNavFixed}
        />
        <NavBar
          isNavFixed={isNavFixed}
          pathName={pathName}
        />
      </div>
    </div>
  );
}
