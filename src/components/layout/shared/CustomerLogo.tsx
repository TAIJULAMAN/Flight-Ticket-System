// React Imports
import { useEffect, useMemo, useRef } from "react";

// Next Imports
// import Img from 'next/image'
import Link from "next/link";

// Third-party Imports
import styled from "@emotion/styled";

// Type Imports
import type { VerticalNavContextProps } from "@menu/contexts/verticalNavContext";

// Component Imports
import MaterializeLogo from "@core/svg/Logo";

// Config Imports
import themeConfig from "@configs/themeConfig";

// Hook Imports
import useVerticalNav from "@menu/hooks/useVerticalNav";
import { useSettings } from "@core/hooks/useSettings";
import { Avatar, Divider } from "@mui/material";
import { getUser } from "@/hooks/hooks";

type LogoTextProps = {
  isHovered?: VerticalNavContextProps["isHovered"];
  isCollapsed?: VerticalNavContextProps["isCollapsed"];
  transitionDuration?: VerticalNavContextProps["transitionDuration"];
};

const LogoText = styled.span<LogoTextProps>`
  font-size: 1.25rem;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: 0.15px;
  text-transform: capitalize;
  color: var(--mui-palette-text-primary);
  transition: ${({ transitionDuration }) =>
    `margin-inline-start ${transitionDuration}ms ease-in-out, opacity ${transitionDuration}ms ease-in-out`};

  ${({ isHovered, isCollapsed }) =>
    isCollapsed && !isHovered ? "opacity: 0; margin-inline-start: 0;" : "opacity: 1; margin-inline-start: 8px;"}
`;

const CustomerLogo = ({ component = false }: { component?: boolean }) => {
  // Refs
  const logoTextRef = useRef<HTMLSpanElement>(null);
  const user = getUser();
  console.log(user);
  // Hooks
  const { isHovered, transitionDuration } = useVerticalNav();
  const { settings }: any = useSettings();

  // Vars
  const { layout } = settings;

  const LogoWrapper = useMemo(() => (component ? "div" : Link), [component]);

  useEffect(() => {
    if (layout !== "collapsed") {
      return;
    }

    if (logoTextRef && logoTextRef.current) {
      if (layout === "collapsed" && !isHovered) {
        logoTextRef.current?.classList.add("hidden");
      } else {
        logoTextRef.current.classList.remove("hidden");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHovered, layout]);

  // You may return any JSX here to display a logo in the sidebar header
  // return <Img src='/next.svg' width={100} height={25} alt='logo' /> // for example
  return (
    // eslint-disable-next-line lines-around-comment
    /* @ts-ignore */
    <LogoWrapper
      className="flex mt-2 items-center min-bs-[24px]"
      {...(!component && { href: "/b2c/profile" })}>
      <svg
        width="55"
        height="55"
        viewBox="0 0 55 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M27.5 53C41.5833 53 53 41.5833 53 27.5C53 13.4167 41.5833 2 27.5 2C13.4167 2 2 13.4167 2 27.5C2 41.5833 13.4167 53 27.5 53Z"
          stroke="#254FD4"
          stroke-width="3.47727"
        />
        <path
          d="M27.5016 27.4999C31.7265 27.4999 35.1516 24.0749 35.1516 19.8499C35.1516 15.6249 31.7265 12.1999 27.5016 12.1999C23.2766 12.1999 19.8516 15.6249 19.8516 19.8499C19.8516 24.0749 23.2766 27.4999 27.5016 27.4999Z"
          stroke="#254FD4"
          stroke-width="3.47727"
        />
        <path
          d="M42.7243 47.9C42.3163 40.5254 40.0596 35.15 27.5008 35.15C14.9421 35.15 12.6853 40.5254 12.2773 47.9"
          stroke="#254FD4"
          stroke-width="3.47727"
          stroke-linecap="round"
        />
      </svg>

      <LogoText
        ref={logoTextRef}
        isHovered={isHovered}
        isCollapsed={layout === "collapsed"}
        transitionDuration={transitionDuration}>
        <div className="ms-2">
          <p className="text-[16px] font-[400]">Hello</p>
          <p className="whitespace-nowrap font-[500] text-[24px] ">
            {user?.first_name ? user?.first_name : "N/A"} {user?.last_name ? user?.last_name : ""}
          </p>
        </div>
      </LogoText>
      <hr className="border border-gray-400" />
    </LogoWrapper>
  );
};

export default CustomerLogo;
