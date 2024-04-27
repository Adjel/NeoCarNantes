import React from "react";
import styled from "styled-components";
import Image from "next/image";
import brandLogo from "/public//brandLogo.jpeg";
import { QUERIES } from "@/app/constant";

function Logo() {
  return (
    <ResponsiveLogoWrapper>
      <Image
        alt="brand logo"
        src={brandLogo}
        placeholder="blur"
        quality={100}
        layout="responsive"
        style={{
          width: `${100 / 16}rem`,
          height: `${100 / 16}rem`,
        }}
      />
    </ResponsiveLogoWrapper>
  );
}

const ResponsiveLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${90 / 16}rem;

  @media ${QUERIES.tabletAndSmaller} {
    width: ${80 / 16}rem;
  }

  @media ${QUERIES.phoneAndSmaller} {
    width: ${70 / 16}rem;
  }
`;
export default Logo;
