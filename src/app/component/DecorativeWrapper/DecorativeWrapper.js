import React from "react";
import styled from "styled-components";
import Decoration from "../Decoration/Decoration";
import { QUERIES, COLORS } from "@/app/constant";

function DecorativeWrapper({
  title,
  children,
  textAlign,
  paddingStart,
  marginTop = "0",
}) {
  return (
    <Background style={{ "--margin-top": marginTop }}>
      <Wrapper>
        <Title>{title}</Title>
        <Decoration backgroundColor="black" />
        <Content
          style={{ "--text-align": textAlign, "--padding-start": paddingStart }}
        >
          {children}
        </Content>
      </Wrapper>
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

const Wrapper = styled.div`
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
  color: hsl(0 100 27);
  font-weight: 250;
  text-transform: uppercase;
`;

const Content = styled.p`
  width: 80%;
  height: auto;
  text-align: var(--text-align);
  padding-left: var(--padding-start);
  font-weight: 180;
  font-size: ${15 / 16}rem;
  color: black;

  @media ${QUERIES.tabletAndSmaller} {
    font-size: ${15 / 16}rem;
  }
  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${13 / 16}rem;
  }
`;

export default DecorativeWrapper;
