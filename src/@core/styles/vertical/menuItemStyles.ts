// MUI Imports
import type { Theme } from "@mui/material/styles";

// Type Imports
import type { MenuItemStyles } from "@menu/types";
import type { VerticalNavState } from "@menu/contexts/verticalNavContext";
import type { Settings } from "@/@core/contexts/SettingContextPro";

// Util Imports
import { menuClasses } from "@menu/utils/menuClasses";

const menuItemStyles = (verticalNavOptions: VerticalNavState, theme: Theme, settings: Settings): MenuItemStyles => {
  // Vars
  const { isCollapsed, collapsedWidth, isHovered, isPopoutWhenCollapsed, transitionDuration } = verticalNavOptions;

  const popoutCollapsed = isPopoutWhenCollapsed && isCollapsed;
  const popoutExpanded = isPopoutWhenCollapsed && !isCollapsed;
  const collapsedNotHovered = isCollapsed && !isHovered;

  return {
    root: ({ level }) => ({
      ...(!isPopoutWhenCollapsed || popoutExpanded || (popoutCollapsed && level === 0)
        ? {
            marginBlockStart: theme.spacing(1),
          }
        : {
            marginBlockStart: 0,
          }),
      [`&.${menuClasses.subMenuRoot}.${menuClasses.open} > .${menuClasses.button}, &.${menuClasses.subMenuRoot} > .${menuClasses.button}.${menuClasses.active}`]:
        {
          backgroundColor: "var(--mui-palette-action-selected) !important",
        },
      [`&.${menuClasses.disabled} > .${menuClasses.button}`]: {
        color: "var(--mui-palette-text-disabled)",
      },
      [`&:not(.${menuClasses.subMenuRoot}) > .${menuClasses.button}.${menuClasses.active}`]: {
        ...(popoutCollapsed && level > 0
          ? {
              backgroundColor: "var(--mui-palette-primary-lightOpacity)",
              color: "var(--mui-palette-primary-main)",
              [`& .${menuClasses.icon}`]: {
                color: "var(--mui-palette-primary-main)",
              },
            }
          : {
              color: "var(--mui-palette-primary-contrastText)",
              backgroundColor: "var(--mui-palette-primary-main)",
              boxShadow: "var(--mui-customShadows-xs)",
              [`& .${menuClasses.icon}`]: {
                color: "inherit",
              },
            }),
      },
    }),
    button: ({ level, active }) => ({
      paddingBlock: "8px",
      ...(!(isCollapsed && !isHovered) && {
        "&:has(.MuiChip-root)": {
          paddingBlock: theme.spacing(1.75),
        },
      }),
      ...((!isPopoutWhenCollapsed || popoutExpanded || (popoutCollapsed && level === 0)) && {
        borderRadius: "var(--mui-shape-customBorderRadius-lg)",
        transition: `padding-inline-start ${transitionDuration}ms ease-in-out`,
        paddingInlineStart: theme.spacing(collapsedNotHovered ? ((collapsedWidth as number) - 47) / 8 : 3),
        paddingInlineEnd: theme.spacing(collapsedNotHovered ? ((collapsedWidth as number) - 47) / 8 : 3),
      }),
      ...(!active && {
        "&:hover, &:focus-visible": {
          backgroundColor: "var(--mui-palette-action-hover)",
        },
        '&[aria-expanded="true"]': {
          backgroundColor: "var(--mui-palette-action-selected)",
        },
      }),
    }),
    icon: ({ level }) => ({
      transition: `margin-inline-end ${transitionDuration}ms ease-in-out`,
      ...(level === 0 && {
        fontSize: "1.375rem",
        marginInlineEnd: theme.spacing(2),
      }),
      ...(level > 0 && {
        fontSize: "0.5rem",
        color: "var(--mui-palette-text-disabled)",
        marginInlineEnd: theme.spacing(4),
      }),
      ...(level === 1 &&
        !popoutCollapsed && {
          marginInlineStart: theme.spacing(1.5),
        }),
      ...(level > 1 && {
        marginInlineStart: theme.spacing((popoutCollapsed ? 0 : 1.5) + 2.5 * (level - 1)),
      }),
      ...(collapsedNotHovered && {
        marginInlineEnd: 0,
      }),
      ...(popoutCollapsed &&
        level > 0 && {
          marginInlineEnd: theme.spacing(2),
        }),
      "& > i, & > svg": {
        fontSize: "inherit",
      },
    }),
    prefix: {
      marginInlineEnd: theme.spacing(2),
    },
    label: ({ level }) => ({
      ...((!isPopoutWhenCollapsed || popoutExpanded || (popoutCollapsed && level === 0)) && {
        transition: `opacity ${transitionDuration}ms ease-in-out`,
        ...(collapsedNotHovered && {
          opacity: 0,
        }),
      }),
    }),
    suffix: {
      marginInlineStart: theme.spacing(2),
    },
    subMenuExpandIcon: {
      fontSize: "1.375rem",
      marginInlineStart: theme.spacing(2),
      "& i, & svg": {
        fontSize: "inherit",
      },
    },

    subMenuContent: ({ level }) => ({
      zIndex: "calc(var(--drawer-z-index) + 1)",
      backgroundColor: popoutCollapsed ? "var(--mui-palette-background-paper)" : "transparent",
      ...(popoutCollapsed &&
        level === 0 && {
          paddingBlock: theme.spacing(2),
          borderRadius: "var(--mui-shape-borderRadius)",
          ...(settings.skin === "bordered"
            ? {
                boxShadow: "none",
                border: "1px solid var(--mui-palette-divider)",
              }
            : {
                boxShadow: "var(--mui-customShadows-lg)",
              }),
          [`& .${menuClasses.button}`]: {
            paddingInline: theme.spacing(4),
          },
        }),
    }),
  };
};

export default menuItemStyles;
