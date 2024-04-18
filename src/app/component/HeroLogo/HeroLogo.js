import React from "react";
import logo from "../../images/logo1.svg";
import Image from "next/image";
import styled from "styled-components";
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
