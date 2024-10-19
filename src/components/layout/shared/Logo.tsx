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

const Logo = ({ component = false }: { component?: boolean }) => {
  // Refs
  const logoTextRef = useRef<HTMLSpanElement>(null);

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
      className="flex items-center min-bs-[24px]"
      {...(!component && { href: "/" })}>
      <MaterializeLogo />
      <LogoText
        ref={logoTextRef}
        isHovered={isHovered}
        isCollapsed={layout === "collapsed"}
        transitionDuration={transitionDuration}>
        {themeConfig.templateName}
      </LogoText>
    </LogoWrapper>
  );
};

export default Logo;
