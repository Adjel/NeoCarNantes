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
      <article>
        <BrandContent>Atelier de Réparation Automobile</BrandContent>
      </article>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: white;
  background: transparent;

  @media ${QUERIES.phoneAndSmaller} {
    height: 50vh;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: white;
  background: transparent;
`;

const Brand = styled.h1`
  color: inherit;
  line-height: 1em;
  text-align: center;
  font-size: ${FONTSIZE.big.desktop};
  font-weight: ${FONTWEIGHT.normal};
  font-family: ${FONTFAMILY.Pathway}, sans-serif;
`;

const BrandContent = styled.em`
  color: inherit;
  line-height: 3em;
  text-align: center;
  font-weight: ${FONTWEIGHT.tier2};
  letter-spacing: 0.2em;
  font-style: normal;

  @media ${QUERIES.tabletAndSmaller} {
    line-height: 2em;
  }
`;

export default Hero;
