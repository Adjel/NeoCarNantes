import React from "react";
import Image from "next/image";
import brandLogo from "../../Images/brandLogo.jpeg";

function Logo() {
  return (
    <Image
      alt="brand logo"
      src={brandLogo}
      placeholder="blur"
      quality={100}
      style={{
        width: "auto",
        height: "auto",
      }}
    />
  );
}

export default Logo;
