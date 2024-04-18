"use client";
import React from "react";
import styled from "styled-components";
import HeroLogo from "../HeroLogo/HeroLogo";
import BrandStory from "../BrandStory/BrandStory";
import Services from "../Services/Services";

const dividerBorder = "3px solid hsla(0, 0%, 100%, 0.45)";

function Hero() {
  return (
    <Wrapper>
      <LogoWrapper>
        <HeroLogo />
      </LogoWrapper>
      <Brand>NEOCARNANTES</Brand>
      <BrandContent>Atelier de Réparation Automobile</BrandContent>
      <Divider style={{ "--dividerBorder": dividerBorder }}>
        <Services />
      </Divider>
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
  gap: 50px;
  padding-top: 48px;
  color: white;
  background: transparent;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 48px;
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

const Divider = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 100px;
  margin: 50px 0;
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