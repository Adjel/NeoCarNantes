import React from "react";
import styled from "styled-components";
import Decoration from "../Decoration/Decoration";
import { QUERIES, COLORS, FONTSIZE, FONTWEIGHT } from "@/app/constant";

function DecorativeWrapper({
  title,
  children,
  textAlign,
  paddingStart,
  marginTop = "0",
}) {
  return (
    <Background style={{ "--margin-top": marginTop }}>
      <WhiteWrapper>
        <Title>{title}</Title>
        <Decoration backgroundColor="black" />
        <Content
          style={{ "--text-align": textAlign, "--padding-start": paddingStart }}
        >
          {children}
        </Content>
      </WhiteWrapper>
    </Background>
  );
}

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 68px;
  padding-inline: 64px;
  width: 100%;
  height: auto;
  background: ${COLORS.background.transparentGray};
  margin-top: var(--margin-top);

  @media ${QUERIES.tabletAndSmaller} {
    padding: 68px 0;
  }
  @media ${QUERIES.phoneAndSmaller} {
    padding: 36px 0;
  }
`;

const WhiteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 36px 0;
  gap: 22px;
  width: 50%;
  background: white;

  @media ${QUERIES.tabletAndSmaller} {
    width: 60%;
  }
  @media ${QUERIES.phoneAndSmaller} {
    width: 90%;
  }
`;

const Title = styled.h1`
  color: ${COLORS.primary};
  font-weight: ${FONTWEIGHT.tier25};
  text-transform: uppercase;
`;

const Content = styled.p`
  width: 80%;
  height: auto;
  text-align: var(--text-align);
  padding-left: var(--padding-start);
  font-weight: ${FONTWEIGHT.tier1};
  font-size: ${FONTSIZE.item.desktop};
  color: black;

  @media ${QUERIES.tabletAndSmaller} {
    font-size: ${FONTSIZE.item.tablet};
  }
  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${FONTSIZE.item.phone};
  }
`;

export default DecorativeWrapper;
