import Header from "@/components/shared/Header";
import type { ChildrenType } from "@core/types";

// MUI Imports
import Button from "@mui/material/Button";

// Layout Imports
import LayoutWrapper from "@layouts/LayoutWrapper";
import VerticalLayout from "@layouts/VerticalLayout";
import HorizontalLayout from "@layouts/HorizontalLayout";

import ScrollToTop from "@core/components/scroll-to-top";

// Util Imports
import { getMode, getSystemMode } from "@core/utils/serverHelpers";

import CustomerSidebar from "@/components/layout/vertical/CustomerSidebar";

// Component Imports

type Props = ChildrenType;

const Layout = ({ children }: Props) => {
  const direction = "ltr";
  const mode = getMode();
  const systemMode = getSystemMode();

  return (
    <div>
      <>
        <div className="mb-5">
          <Header />
        </div>
        <div className="main-container">
          <LayoutWrapper
            systemMode={systemMode}
            verticalLayout={
              <VerticalLayout
                navigation={
                  <CustomerSidebar
                    mode={mode}
                    systemMode={systemMode}
                  />
                }
                footer={null}>
                <div className="pl-6 mb-4">{children}</div>
              </VerticalLayout>
            }
            horizontalLayout={
              <HorizontalLayout
                header={null}
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
        </div>
      </>
    </div>
  );
};

export default Layout;
