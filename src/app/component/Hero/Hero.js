"use client";
import React from "react";
import styled from "styled-components";
import HeroLogo from "../HeroLogo/HeroLogo";
import { FONTFAMILY, FONTSIZE, FONTWEIGHT, QUERIES } from "@/app/constant";

function Hero() {
  return (
    <Wrapper>
      <Header>
        <HeroLogo />
        <Brand>
          <strong style={{ fontWeight: `${FONTWEIGHT.normal}` }}>
            NEOCARNANTES
          </strong>
        </Brand>
      </Header>
      <BrandContent>Atelier de Réparation Automobile</BrandContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
  color: white;
  background: transparent;

  @media ${QUERIES.tabletAndUp} {
    height: 100vh;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background: transparent;
`;

const Brand = styled.h1`
  color: inherit;
  font-size: ${FONTSIZE.big.desktop};
  font-weight: ${FONTWEIGHT.normal};
  font-family: ${FONTFAMILY.Pathway}, sans-serif;
`;

const BrandContent = styled.em`
  color: inherit;
  font-weight: ${FONTWEIGHT.tier2};
  letter-spacing: 0.2em;
  font-style: normal;
`;

export default Hero;
