import React from "react";
import styled from "styled-components";
import InstagramIcon from "../InstagramIcon/InstagramIcon";
import RateStarsComponent from "../RateStarsComponent/RateStarsComponent";

export default function Footer() {
  return (
    <Wrapper>
      <MainWrapper>
        <AdaptiveHeightWrapper>
          <p>NEOCARNANTES</p>
          <p>10 IMPASSE DE BELGIQUE</p>
          <p>44300 NANTES</p>
        </AdaptiveHeightWrapper>
        <AdaptiveHeightWrapper>
          <p>44300 NANTES SUIVEZ NOUS SUR INSTAGRAM !</p>
          <p>neocarnantes</p>
          <InstagramIcon />
        </AdaptiveHeightWrapper>
        <BasicWrapper>
          <p>LAISSEZ UN AVIS SUR GOOGLE !</p>
          <RateStarsComponent />
        </BasicWrapper>
      </MainWrapper>
      <AdaptiveHeightWrapper>
        <p>© Quentin & Chacha NeoCarNantes</p>
      </AdaptiveHeightWrapper>
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
`;

const MainWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  width: 100%;
  gap: 50px;
  margin: 48px 0px;
`;

const BasicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2px;
  height: 80px;

  > p {
    font-size: ${12 / 16}rem;
    font-weight: 170;
    text-align: center;
  }
`;

const AdaptiveHeightWrapper = styled(BasicWrapper)`
  height: revert;
`;
