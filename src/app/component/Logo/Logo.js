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
          width: "100px",
          height: "100px",
        }}
      />
    </ResponsiveLogoWrapper>
  );
}

const ResponsiveLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;

  @media ${QUERIES.tabletAndSmaller} {
    width: 80px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    width: 70px;
  }
`;
export default Logo;
