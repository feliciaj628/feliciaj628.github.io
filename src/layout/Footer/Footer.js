import React from "react";
import { Container } from "@mui/system";

function Footer() {
  return (
      <div className="h-[8vh] bg-primary-500 w-full flex items-center text-white border-t border-primary-300">
      <Container>
        <p className="px-5 text-right">@ 2024 Felicia Jones | All Rights Reserved</p>
      </Container>
    </div>
  );
}

export default Footer;
