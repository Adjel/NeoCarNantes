import React from "react";
import styled from "styled-components";
import Decoration from "../Decoration/Decoration";
import { QUERIES, COLORS, FONTSIZE, FONTWEIGHT } from "@/app/constant";

// Use in BrandStory and Contact
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
  padding: ${36 / 16}rem 0;
  padding-inline: ${38 / 16}rem;
  width: 100%;
  height: auto;
  background: ${COLORS.background.transparentGray};
  margin-top: var(--margin-top);

  @media ${QUERIES.tabletAndUp} {
    padding: ${68 / 16}rem 0;
  }
  @media ${QUERIES.laptopAndUp} {
    padding: ${68 / 16}rem;
    padding-inline: ${64 / 16}rem;
  }
`;

const WhiteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${36 / 16}rem 0;
  gap: ${22 / 16}rem;
  width: 100%;
  background: white;

  @media ${QUERIES.tabletAndUp} {
    width: 60%;
  }
  @media ${QUERIES.laptopAndUp} {
    width: 50%;
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
  font-size: ${FONTSIZE.title.phone};

  @media ${QUERIES.tabletAndUp} {
    font-size: ${FONTSIZE.title.tablet};
  }
  @media ${QUERIES.laptopAndUp} {
    font-size: ${FONTSIZE.title.desktop};
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
