import React from "react";
import Decoration from "../Decoration/Decoration";
import styled from "styled-components";
import { COLORS, FONTSIZE, FONTWEIGHT, QUERIES } from "@/app/constant";

export default function FeatureGridItem({
  title,
  feature,
  subFeature,
  featureInfo,
}) {
  return (
    <Wrapper>
      <FeatureTitle>{title}</FeatureTitle>
      <Decoration style={{ flex: "1" }} />
      <Article>
        {feature ? <FeatureContent>{feature}</FeatureContent> : undefined}
        {subFeature ? <FeatureContent>{subFeature}</FeatureContent> : undefined}
        {featureInfo ? (
          <FeatureContent>{featureInfo}</FeatureContent>
        ) : undefined}
      </Article>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  flex: 0;
  display: flex;
  min-width: fit-content;
  min-height: fit-content;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0.5rem;
  background: ${COLORS.background.transparentLightGray};

  @media ${QUERIES.laptopAndUp} {
    flex: 1;
    min-width: ${210 / 16}rem;
    min-height: ${350 / 16}rem;
    gap: ${26 / 16}rem;
    padding: ${25 / 16}rem ${8 / 16}rem;
  }
`;

const FeatureTitle = styled.h1`
  flex: 1;
  text-align: center;
  font-size: ${FONTSIZE.item.phone};
  font-weight: ${FONTWEIGHT.normal};

  @media ${QUERIES.tabletAndUp} {
    font-size: ${FONTSIZE.item.tablet};
    flex: 0;
  }

  @media ${QUERIES.laptopAndUp} {
    font-size: ${FONTSIZE.item.desktop};
  }
`;

const FeatureContent = styled.p`
  flex: 1;
  text-align: center;
  font-weight: ${FONTWEIGHT.tier3};
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.1em;
  font-size: ${FONTSIZE.item.phone};

  @media ${QUERIES.tabletAndUp} {
    font-size: ${FONTSIZE.item.tablet};
    line-height: 1.6;
  }

  @media ${QUERIES.laptopAndUp} {
    font-size: ${FONTSIZE.item.desktop};
    line-height: normal;
  }
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1.5rem;

  @media ${QUERIES.laptopAndUp} {
    gap: 4rem;
  }

  @media ${QUERIES.laptopAndUp} {
    gap: 2rem;
  }
`;
