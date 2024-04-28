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
        style={{
          width: `${350 / 16}rem`,
          height: `${350 / 16}rem`,
        }}
      />
    </ResponsiveLogoWrapper>
  );
}

const ResponsiveLogoWrapper = styled.picture`
  display: flex;
  width: ${150 / 16}rem;
  height: ${150 / 16}rem;

  @media ${QUERIES.tabletAndUp} {
    width: ${250 / 16}rem;
    height: ${250 / 16}rem;
  }

  @media ${QUERIES.laptopAndUp} {
    width: ${350 / 16}rem;
    height: ${350 / 16}rem;
  }
`;

export default HeroLogo;
