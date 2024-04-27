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
  textColor,
  decorativeImage,
}) {
  return (
    <Background style={{ "--margin-top": marginTop }}>
      {decorativeImage}
      <WhiteWrapper>
        <HeaderWrapper>
          <Title>{title}</Title>
          <Decoration backgroundColor="black" />
        </HeaderWrapper>
        <Content
          style={{
            "--text-align": textAlign,
            "--padding-start": paddingStart,
            "--text-color": textColor,
          }}
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
  padding: ${68 / 16}rem;
  padding-inline: ${64 / 16}rem;
  width: 100%;
  height: auto;
  background: ${COLORS.background.transparentGray};
  margin-top: var(--margin-top);

  @media ${QUERIES.tabletAndSmaller} {
    padding: ${68 / 16}rem 0;
  }
  @media ${QUERIES.phoneAndSmaller} {
    padding: ${36 / 16}rem 0;
  }
`;

const WhiteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${36 / 16}rem 0;
  gap: ${22 / 16}rem;
  width: 50%;
  background: white;

  @media ${QUERIES.tabletAndSmaller} {
    width: 60%;
  }
  @media ${QUERIES.phoneAndSmaller} {
    width: 90%;
  }
`;

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${22 / 16}rem;
`;

const Title = styled.h1`
  color: ${COLORS.primary};
  font-weight: ${FONTWEIGHT.tier25};
  text-transform: uppercase;
  font-size: ${FONTSIZE.title.desktop};

  @media ${QUERIES.tabletAndSmaller} {
    font-size: ${FONTSIZE.title.tablet};
  }
  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${FONTSIZE.title.phone};
  }
`;

const Content = styled.article`
  width: 80%;
  height: auto;
  text-align: var(--text-align);
  padding-left: var(--padding-start);
  color: var(--text-color);
`;

export default DecorativeWrapper;
