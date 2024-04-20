import React from "react";
import logo from "/public/logo1.svg";
import Image from "next/image";

function HeroLogo() {
  return (
    <Image
      alt="logo decoration"
      src={logo}
      quality={100}
      style={{
        width: "300px",
        height: "300px",
      }}
    />
  );
}

export default HeroLogo;
