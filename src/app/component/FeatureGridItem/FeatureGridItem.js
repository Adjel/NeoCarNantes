import React from "react";
import Decoration from "../Decoration/Decoration";
import styled from "styled-components";

export default function FeatureGridItem({
  title,
  feature,
  subFeature,
  featureInfo,
}) {
  return (
    <Wrapper>
      <FeatureTitle>{title}</FeatureTitle>
      <Decoration />
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
  min-height: 400px;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  background: hsla(0, 4%, 70%, 0.55);
  padding: 8px;
  padding-top: 36px;
`;
const FeatureTitle = styled.p`
  text-align: center;
`;
const FeatureContent = styled.p`
  text-align: center;
`;
