import React from "react";
import styled from "styled-components";
import InstagramIcon from "../InstagramIcon/InstagramIcon";
import RateStarsComponent from "../RateStarsComponent/RateStarsComponent";

export default function Footer() {
  return (
    <Wrapper>
      <MainWrapper>
        <ContentWrapper>
          <p>NEOCARNANTES</p>
          <p>10 IMPASSE DE BELGIQUE</p>
          <p>44300 NANTES</p>
        </ContentWrapper>
        <ContentWrapper>
          <p>44300 NANTES SUIVEZ NOUS SUR INSTAGRAM !</p>
          <p>neocarnantes</p>
          <InstagramIcon />
        </ContentWrapper>
        <ContentWrapper>
          <p>LAISSEZ UN AVIS SUR GOOGLE !</p>
        </ContentWrapper>
        <RateStarsComponent />
      </MainWrapper>
      <ContentWrapper>
        <p>© Quentin & Chacha NeoCarNantes</p>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  min-height: 324px;
  background: hsl(0 1 18);
  border: 3px solid yellow;
`;

const MainWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  width: 100%;
  gap: 50px;
  margin: 48px 0px;
  border: 3px solid red;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;

  > p {
    font-size: ${12 / 16}rem;
    font-weight: 170;
    text-align: center;
  }
`;
