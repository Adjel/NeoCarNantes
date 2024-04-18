"use client";
import React from "react";
import styled from "styled-components";
import HeroLogo from "../HeroLogo/HeroLogo";
import BrandStory from "../BrandStory/BrandStory";

function Hero() {
  return (
    <Wrapper>
      <HeroLogo />
      <Brand>NEOCARNANTES</Brand>
      <BrandContent>Atelier de Réparation Automobile</BrandContent>
      <BrandStory />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 48px;
  color: white;
  background: transparent;
`;

const Brand = styled.h1`
  color: inherit;
`;

const BrandContent = styled.p`
  color: inherit;
`;

export default Hero;
