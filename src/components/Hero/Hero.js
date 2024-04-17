"use client";
import React from "react";
import styled from "styled-components";

function Hero() {
  return (
    <Wrapper>
      <Brand>NEOCARNANTES</Brand>
      <BrandContent>Atelier de Réparation Automobile</BrandContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 3px solid cyan;
  color: white;
  background: transparent;
  border: 3px solid cyan;
`;

const Brand = styled.h1`
  color: inherit;
`;

const BrandContent = styled.p`
  color: inherit;
`;

export default Hero;
