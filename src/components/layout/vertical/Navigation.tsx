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

type Props = {
  mode: Mode;
  systemMode: SystemMode;
};

const StyledBoxForShadow = styled("div")(({ theme }) => ({
  top: 60,
  left: -8,
  zIndex: 2,
  opacity: 0,
  position: "absolute",
  pointerEvents: "none",
  width: "calc(100% + 15px)",
  height: theme.mixins.toolbar.minHeight,
  transition: "opacity .15s ease-in-out",
  background: `linear-gradient(var(--mui-palette-background-default) ${
    theme.direction === "rtl" ? "95%" : "5%"
  }, rgb(var(--mui-palette-background-defaultChannel) / 0.85) 30%, rgb(var(--mui-palette-background-defaultChannel) / 0.5) 65%, rgb(var(--mui-palette-background-defaultChannel) / 0.3) 75%, transparent)`,
  "&.scrolled": {
    opacity: 1,
  },
}));

const MenuToggleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g id="remix-icons/line/system/2arrow-left-s-line">
      <path
        id="Vector"
        d="M8.47365 11.7183C8.11707 12.0749 8.11707 12.6531 8.47365 13.0097L12.071 16.607C12.4615 16.9975 12.4615 17.6305 12.071 18.021C11.6805 18.4115 11.0475 18.4115 10.657 18.021L5.83009 13.1941C5.37164 12.7356 5.37164 11.9924 5.83009 11.5339L10.657 6.707C11.0475 6.31653 11.6805 6.31653 12.071 6.707C12.4615 7.09747 12.4615 7.73053 12.071 8.121L8.47365 11.7183Z"
        fill="var(--mui-palette-text-primary)"
      />
      <path
        id="Vector_2"
        d="M14.3584 11.8336C14.0654 12.1266 14.0654 12.6014 14.3584 12.8944L18.071 16.607C18.4615 16.9975 18.4615 17.6305 18.071 18.021C17.6805 18.4115 17.0475 18.4115 16.657 18.021L11.6819 13.0459C11.3053 12.6693 11.3053 12.0587 11.6819 11.6821L16.657 6.707C17.0475 6.31653 17.6805 6.31653 18.071 6.707C18.4615 7.09747 18.4615 7.73053 18.071 8.121L14.3584 11.8336Z"
        fill="var(--mui-palette-text-disabled)"
      />
    </g>
  </svg>
);

const Navigation = (props: Props) => {
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
      customStyles={navigationCustomStyles(verticalNavOptions, theme)}
      collapsedWidth={71}
      backgroundColor="var(--mui-palette-background-default)"
      // eslint-disable-next-line lines-around-comment
      // The following condition adds the data-mui-color-scheme='dark' attribute to the VerticalNav component
      // when semiDark is enabled and the mode or systemMode is light
      {...(isSemiDark &&
        !isDark && {
          "data-mui-color-scheme": "dark",
        })}>
      {/* Nav Header including Logo & nav toggle icons  */}
      <NavHeader>
        <Logo />
        {!(isCollapsed && !isHovered) && (
          <NavCollapseIcons
            lockedIcon={MenuToggleSvg}
            unlockedIcon={MenuToggleSvg}
            closeIcon={<i className="ri-close-line text-xl" />}
            className="text-textSecondary"
            onClick={() => updateSettings({ layout: !isCollapsed ? "collapsed" : "vertical" })}
          />
        )}
      </NavHeader>
      <StyledBoxForShadow ref={shadowRef} />
      <VerticalMenu scrollMenu={scrollMenu} />
    </VerticalNav>
  );
};

export default Navigation;
