import React from "react";
import logo from "/public/logo1.svg";
import Image from "next/image";
import styled from "styled-components";
import { QUERIES } from "@/app/constant";

function HeroLogo() {
  return (
    <ResponsiveLogoWrapper>
      <Image
        alt="logo decoration"
        layout="responsive"
        src={logo}
        quality={100}
      />
    </ResponsiveLogoWrapper>
  );
}

const ResponsiveLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 350px;

  @media ${QUERIES.tabletAndSmaller} {
    width: 250px;
    height: 250px;
  }
  @media ${QUERIES.phoneAndSmaller} {
    width: 150px;
    height: 150px;
  }
`;

export default HeroLogo;
