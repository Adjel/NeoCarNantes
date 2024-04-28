import React from "react";
import styled from "styled-components";
import InstagramIcon from "../InstagramIcon/InstagramIcon";
import RateStarsComponent from "../RateStarsComponent/RateStarsComponent";
import { COLORS, FONTSIZE, FONTWEIGHT, QUERIES } from "@/app/constant";

export default function Footer() {
  return (
    <Wrapper>
      <MainWrapper>
        <AdaptiveHeightWrapper>
          <p>NEOCARNANTES</p>
          <address>10 IMPASSE DE BELGIQUE</address>
          <address>44300 NANTES</address>
        </AdaptiveHeightWrapper>
        <AdaptiveHeightWrapper>
          <p>SUIVEZ NOUS SUR INSTAGRAM !</p>
          <p>neocarnantes</p>
          <InstagramIcon />
        </AdaptiveHeightWrapper>
        <BasicWrapper>
          <p>LAISSEZ UN AVIS SUR GOOGLE !</p>
          <RateStarsComponent />
        </BasicWrapper>
      </MainWrapper>
      <AdaptiveHeightWrapper>
        <p>
          © Quentin & Chacha&nbsp;
          <strong>NeoCarNantes</strong>
        </p>
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
  min-height: ${146 / 16}rem;
  background: ${COLORS.background.darkGray};

  @media ${QUERIES.tabletAndUp} {
    min-height: ${224 / 16}rem;
  }

  @media ${QUERIES.laptopAndUp} {
    min-height: ${324 / 16}rem;
  }
`;

const MainWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  width: 100%;
  gap: ${10 / 16}rem;
  margin: 0rem 0rem;

  @media ${QUERIES.tabletAndUp} {
    gap: ${30 / 16}rem;
    margin: 0rem 0rem;
  }
  @media ${QUERIES.laptopAndUp} {
    gap: ${50 / 16}rem;
    margin: ${48 / 16}rem 0rem;
  }
`;

const BasicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: ${2 / 16}rem;
  height: ${80 / 16}rem;

  > p,
  address {
    font-size: ${FONTSIZE.little.phone};
    font-weight: ${FONTWEIGHT.tier1};
    text-align: center;
    font-style: normal;

    @media ${QUERIES.tabletAndUp} {
      font-size: ${FONTSIZE.little.tablet};
    }
    @media ${QUERIES.laptopAndUp} {
      font-size: ${FONTSIZE.little.desktop};
    }

    > strong {
      font-weight: ${FONTWEIGHT.tier1};
    }
  }
`;

const AdaptiveHeightWrapper = styled(BasicWrapper)`
  height: revert;
`;
