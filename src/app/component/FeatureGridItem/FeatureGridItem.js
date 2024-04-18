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
  background: hsla(0, 4%, 70%, 0.55);
  padding: 25px 8px;
`;
const FeatureTitle = styled.p`
  flex: 1;
  text-align: center;
`;
const FeatureContent = styled.p`
  flex: 1;
  text-align: center;
  font-weight: 300;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.1em;
  font-size: ${14 / 16}rem;
`;
