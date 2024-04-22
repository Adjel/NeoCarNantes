import React from "react";
import styled from "styled-components";
import Decoration from "../Decoration/Decoration";

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
  background: hsla(0, 4%, 68%, 0.9);
  margin-top: var(--margin-top);
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
`;

export default DecorativeWrapper;
