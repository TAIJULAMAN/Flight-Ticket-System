// Third-party Imports
import "react-perfect-scrollbar/dist/css/styles.css";
import { Sarabun } from "next/font/google";

// Type Imports
import type { ChildrenType } from "@core/types";

// Import the font with the necessary weights and subsets
const sarabun = Sarabun({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

// Style Imports
import "@/app/globals.css";

// Generated Icon CSS Imports
import "@assets/iconify-icons/generated-icons.css";

import ThemeProviders from "@/components/Providers";
import ReduxProvider from "@/redux-store/ReduxProvider";

export const metadata = {
  title: "Flight-Ticket System",
  description: "Flight-Ticket System",
};

const RootLayout = ({ children }: ChildrenType) => {
  const direction = "ltr";

  return (
    <html
      id="__next"
      lang="en"
      dir={direction}>
      <body className={`select-none flex is-full min-bs-full flex-auto flex-col ${sarabun.className}`}>
        <ThemeProviders direction={direction}>
          <ReduxProvider>{children}</ReduxProvider>
        </ThemeProviders>
      </body>
    </html>
  );
};

export default RootLayout;
