// Type Imports
import Providers from "@components/Providers";

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import type { ChildrenType } from "@core/types";
import Button from "@mui/material/Button";
import ScrollToTop from "@/@core/components/scroll-to-top";

// Component Imports

type Props = ChildrenType;

const RootLayout = ({ children }: Props) => {
  return (
    <div className="relative">
      <>
        <ScrollToTop className="mui-fixed">
          <Button
            variant="contained"
            className="is-10 bs-10 rounded-full p-0 min-is-0 flex items-center justify-center">
            <i className="ri-arrow-up-line" />
          </Button>
        </ScrollToTop>
        <Header />
        <div className="min-h-[83vh]">{children}</div>
      </>
    </div>
  );
};

export default RootLayout;
