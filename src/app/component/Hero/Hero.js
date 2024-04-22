"use client";
import React from "react";
import styled from "styled-components";
import HeroLogo from "../HeroLogo/HeroLogo";
import BrandStory from "../BrandStory/BrandStory";
import Services from "../Services/Services";

function Hero() {
  return (
    <Wrapper>
      <BrandWrapper>
        <HeroLogo />
        <Brand>NEOCARNANTES</Brand>
        <BrandContent>Atelier de Réparation Automobile</BrandContent>
      </BrandWrapper>
      <Section id="services">
        <Services />
      </Section>
      <BrandStory />
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
`;

const Brand = styled.h1`
  color: inherit;
  line-height: 1em;
  text-align: center;
  font-size: ${64 / 16}rem;
  font-weight: 400;
  font-family: "Pathway Gothic One", sans-serif;
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 100px;
  background: hsla(0, 0%, 0%, 0.2);
`;

const BrandContent = styled.p`
  color: inherit;
  line-height: 3em;
  text-align: center;
  font-weight: 200;
  letter-spacing: 0.2em;
`;

export default Hero;
