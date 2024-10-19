// MUI Imports
import Button from "@mui/material/Button";

// Type Imports
import type { ChildrenType } from "@core/types";

// Layout Imports
import LayoutWrapper from "@layouts/LayoutWrapper";
import VerticalLayout from "@layouts/VerticalLayout";
import HorizontalLayout from "@layouts/HorizontalLayout";

// Component Imports
import Providers from "@components/Providers";
import Navigation from "@components/layout/vertical/Navigation";
import Header from "@components/layout/horizontal/Header";
import Navbar from "@components/layout/vertical/Navbar";
import HorizontalFooter from "@components/layout/horizontal/Footer";
import ScrollToTop from "@core/components/scroll-to-top";

// Util Imports
import { getMode, getSystemMode } from "@core/utils/serverHelpers";

const Layout = async ({ children }: ChildrenType) => {
  // Vars
  const direction = "ltr";
  const mode = getMode();
  const systemMode = getSystemMode();

  return (
    <>
      <LayoutWrapper
        systemMode={systemMode}
        verticalLayout={
          <VerticalLayout
            navigation={
              <Navigation
                mode={mode}
                systemMode={systemMode}
              />
            }
            navbar={<Navbar />}
            footer={null}>
            {children}
          </VerticalLayout>
        }
        horizontalLayout={
          <HorizontalLayout
            header={<Header />}
            footer={null}>
            {children}
          </HorizontalLayout>
        }
      />
      <ScrollToTop className="mui-fixed">
        <Button
          variant="contained"
          className="is-10 bs-10 rounded-full p-0 min-is-0 flex items-center justify-center">
          <i className="ri-arrow-up-line" />
        </Button>
      </ScrollToTop>
    </>
  );
};

export default Layout;
