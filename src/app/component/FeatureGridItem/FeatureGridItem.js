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
      <article>
        <FeatureContent>{feature}</FeatureContent>
        <FeatureContent>{subFeature}</FeatureContent>
        <FeatureContent>{featureInfo}</FeatureContent>
      </article>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  flex: 1;
  display: flex;
  min-width: ${210 / 16}rem;
  min-height: ${350 / 16}rem;
  flex-direction: column;
  align-items: center;
  gap: ${26 / 16}rem;
  padding: ${25 / 16} rem ${8 / 16}rem;
  background: ${COLORS.background.transparentLightGray};

  @media ${QUERIES.tabletAndSmaller} {
    flex: 0;
    min-width: fit-content;
    min-height: fit-content;
  }
  @media ${QUERIES.tabletAndSmaller} {
    gap: 1rem;
    padding: 0.5rem 0.5rem;
  }
`;
const FeatureTitle = styled.h1`
  flex: 1;
  text-align: center;
  font-size: ${FONTSIZE.item.desktop};
  font-weight: ${FONTWEIGHT.normal};
`;

const FeatureContent = styled.p`
  flex: 1;
  text-align: center;
  font-weight: ${FONTWEIGHT.tier3};
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.1em;
  font-size: ${FONTSIZE.item.desktop};
`;
