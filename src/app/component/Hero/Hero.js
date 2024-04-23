"use client";
import React from "react";
import styled from "styled-components";
import HeroLogo from "../HeroLogo/HeroLogo";
import { FONTSIZE, FONTWEIGHT, QUERIES } from "@/app/constant";

function Hero() {
  return (
    <Wrapper>
      <BrandWrapper>
        <HeroLogo />
        <Brand>NEOCARNANTES</Brand>
        <BrandContent>Atelier de Réparation Automobile</BrandContent>
      </BrandWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
  color: white;
  background: transparent;
`;

const BrandWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: white;
  background: transparent;

  * > {
    @media ${QUERIES.tabletAndSmaller} {
      line-height: 2em;
    }
    @media ${QUERIES.phoneAndSmaller} {
      line-height: 1.2em;
    }
  }

  @media ${QUERIES.tabletAndSmaller} {
    height: 60vh;
  }
  @media ${QUERIES.phoneAndSmaller} {
    height: 40vh;
  }
`;

const Brand = styled.h1`
  color: inherit;
  line-height: 1em;
  text-align: center;
  font-size: ${FONTSIZE.big.desktop};
  font-weight: ${FONTWEIGHT.normal};
  font-family: "Pathway Gothic One", sans-serif;
`;

const BrandContent = styled.p`
  color: inherit;
  line-height: 3em;
  text-align: center;
  font-weight: ${FONTWEIGHT.tier2};
  letter-spacing: 0.2em;

  @media ${QUERIES.tabletAndSmaller} {
    line-height: 2em;
  }
`;

export default Hero;
