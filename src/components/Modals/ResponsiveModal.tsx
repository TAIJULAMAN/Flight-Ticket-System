import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { IoClose } from "react-icons/io5";
export default function ResponsiveDialog({ open, setOpen, children, maxWidth }: any) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("lg"));

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        fullScreen={fullScreen}
        maxWidth={maxWidth}
        open={open}
        className="w-full"
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title">
        <DialogContent className=" bg-transparent max-w-6xl w-full z-20 p-8">
          {children}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
