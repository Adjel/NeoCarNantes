import React from "react";
import Decoration from "../Decoration/Decoration";
import styled from "styled-components";
import { COLORS, FONTSIZE, QUERIES } from "@/app/constant";

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
      <FeatureContent>{feature}</FeatureContent>
      <FeatureContent>{subFeature}</FeatureContent>
      <FeatureContent>{featureInfo}</FeatureContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  min-width: 210px;
  min-height: 350px;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  padding: 25px 8px;
  background: ${COLORS.background.transparentLightGray};

  @media ${QUERIES.tabletAndSmaller} {
    flex: 0;
    min-width: fit-content;
    min-height: fit-content;
  }
  @media ${QUERIES.tabletAndSmaller} {
    padding: 8px 8px;
  }
`;
const FeatureTitle = styled.p`
  flex: 1;
  text-align: center;
  font-size: ${FONTSIZE.item.desktop};
`;
const FeatureContent = styled.p`
  flex: 1;
  text-align: center;
  font-weight: 300;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.1em;
  font-size: ${FONTSIZE.item.desktop};
`;
