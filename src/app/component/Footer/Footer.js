import React from "react";
import styled from "styled-components";
import InstagramIcon from "../InstagramIcon/InstagramIcon";
import RateStarsComponent from "../RateStarsComponent/RateStarsComponent";
import { FONTSIZE, FONTWEIGHT, QUERIES } from "@/app/constant";

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

  @media ${QUERIES.tabletAndSmaller} {
    min-height: 224px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    min-height: 146px;
  }
`;

const MainWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  width: 100%;
  gap: 50px;
  margin: 48px 0px;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 30px;
    margin: 0px 0px;
  }
  @media ${QUERIES.phoneAndSmaller} {
    gap: 10px;
    margin: 0px 0px;
  }
`;

const BasicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2px;
  height: 80px;

  > p {
    font-size: ${FONTSIZE.little.desktop};
    font-weight: ${FONTWEIGHT.tier1};
    text-align: center;

    @media ${QUERIES.tabletAndSmaller} {
      font-size: ${FONTSIZE.little.tablet};
    }
    @media ${QUERIES.phoneAndSmaller} {
      font-size: ${FONTSIZE.little.phone};
    }
  }
`;

const AdaptiveHeightWrapper = styled(BasicWrapper)`
  height: revert;
`;
