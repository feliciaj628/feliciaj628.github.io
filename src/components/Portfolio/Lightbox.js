import { useState } from "react";
import { Dialog } from "@mui/material";

export default function Lightbox({ className, largeClass }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Thumbnail */}
      <div
        className={`${className} cursor-pointer`}
        onClick={() => setOpen(true)}
      />

      {/* Lightbox */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="xl"
        PaperProps={{
          sx: {
            background: "transparent",
            boxShadow: "none",
            overflow: "hidden",
          },
        }}
      >
        <div
          className={`${largeClass} w-[90vw] h-[90vh] bg-center bg-contain bg-no-repeat`}
          onClick={() => setOpen(false)}
        />

      </Dialog>
    </>
  );
}
