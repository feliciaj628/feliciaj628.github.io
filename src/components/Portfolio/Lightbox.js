import { useState } from "react";
import { Dialog, IconButton } from "@mui/material";

export default function Lightbox({ className, pages = [] }) {
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
        {/* SCROLL CONTAINER */}
        <div className="w-[90vw] h-[90vh] overflow-y-scroll space-y-10 p-4">

            <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-14 text-white text-6xl z-50"
                >
            ×
            </button>


          {pages.map((pageClass, i) => (
            <div
              key={i}
              className={`${pageClass} w-full h-[70vh] bg-center bg-contain bg-no-repeat`}
            />
          ))}
        </div>
      </Dialog>
    </>
  );
}
