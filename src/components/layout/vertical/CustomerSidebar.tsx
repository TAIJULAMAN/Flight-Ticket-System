"use client";

// React Imports
import { useEffect, useRef } from "react";

// MUI Imports
import { styled, useColorScheme, useTheme } from "@mui/material/styles";

// Type Imports
import type { Mode, SystemMode } from "@core/types";

// Component Imports
import VerticalNav, { NavHeader, NavCollapseIcons } from "@menu/vertical-menu";
import VerticalMenu from "./VerticalMenu";
import Logo from "@components/layout/shared/Logo";

// Hook Imports
import useVerticalNav from "@menu/hooks/useVerticalNav";
import { useSettings } from "@core/hooks/useSettings";

// Style Imports
import navigationCustomStyles from "@core/styles/vertical/navigationCustomStyles";
import CustomerLogo from "../shared/CustomerLogo";
import { Divider } from "@mui/material";
import CustomerSideLink from "./CustomerSideLink";

type Props = {
  mode: Mode;
  systemMode: SystemMode;
};

const CustomerSidebar = (props: Props) => {
  // Props
  const { mode, systemMode } = props;

  // Hooks
  const verticalNavOptions = useVerticalNav();
  const { updateSettings, settings }: any = useSettings();
  const { mode: muiMode, systemMode: muiSystemMode } = useColorScheme();
  const theme = useTheme();

  // Refs
  const shadowRef = useRef(null);

  // Vars
  const { isCollapsed, isHovered, collapseVerticalNav, isBreakpointReached } = verticalNavOptions;
  const isServer = typeof window === "undefined";
  const isSemiDark = settings.semiDark;
  let isDark;

  if (isServer) {
    isDark = mode === "system" ? systemMode === "dark" : mode === "dark";
  } else {
    isDark = muiMode === "system" ? muiSystemMode === "dark" : muiMode === "dark";
  }

  const scrollMenu = (container: any, isPerfectScrollbar: boolean) => {
    container = isBreakpointReached || !isPerfectScrollbar ? container.target : container;

    if (shadowRef && container.scrollTop > 0) {
      // @ts-ignore
      if (!shadowRef.current.classList.contains("scrolled")) {
        // @ts-ignore
        shadowRef.current.classList.add("scrolled");
      }
    } else {
      // @ts-ignore
      shadowRef.current.classList.remove("scrolled");
    }
  };

  useEffect(() => {
    if (settings.layout === "collapsed") {
      collapseVerticalNav(true);
    } else {
      collapseVerticalNav(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.layout]);

  return (
    // eslint-disable-next-line lines-around-comment
    // Sidebar Vertical Menu
    <VerticalNav
      className="primary-shadow mb-4 max-h-[620px] rounded-[10px] bg-white border-none overflow-hidden "
      customStyles={navigationCustomStyles(verticalNavOptions, theme)}
      collapsedWidth={71}
      backgroundColor="white"
      {...(isSemiDark &&
        !isDark && {
          "data-mui-color-scheme": "dark",
        })}>
      {/* Nav Header including Logo & nav toggle icons  */}
      <NavHeader>
        <CustomerLogo />
      </NavHeader>
      <CustomerSideLink scrollMenu={scrollMenu} />
    </VerticalNav>
  );
};

export default CustomerSidebar;
