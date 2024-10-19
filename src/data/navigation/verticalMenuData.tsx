// Type Imports
import type { VerticalMenuDataType } from "@/types/menuTypes";

const verticalMenuData = (): VerticalMenuDataType[] => [
  {
    label: "Overview",
    href: "/dashboard",
    icon: "ri-home-smile-line",
  },
  {
    label: "About",
    href: "/dashboard/about",
    icon: "ri-information-line",
  },
];

export default verticalMenuData;
