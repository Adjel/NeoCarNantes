import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import FadeInElement from "../FadeInElement/FadeInElement";
import shareIcon from "/public/icons/icon_share_24.svg";
import favIcon from "/public/icons/icon_favorite_24.svg";

const fill = () => {};

export default function CustomerItem({ alt, src }) {
  return (
    <Wrapper position={"relative"}>
      <HoverWrapper>
        <CustomerPhoto alt={alt} src={src} responsive />
        <ButtonsWrapper>
          <HoverIcon src={favIcon} onClick={fill} />
          <HoverIcon src={shareIcon} />
        </ButtonsWrapper>
      </HoverWrapper>
    </Wrapper>
  );
}

const Wrapper = styled(FadeInElement)`
  display: flex;
  flex-direction: column;
`;

const HoverIcon = styled(Image)`
  filter: invert(100%);

  &:hover {
    filter: invert(80%);
  }
`;

const CustomerPhoto = styled(Image)`
  object-fit: cover;
  width: 400px;
  height: 300px;
`;

const ButtonsWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: auto;
  left: auto;
  display: flex;
  flex-direction: end;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 24px 28px;
  opacity: 0;
`;

const HoverWrapper = styled.div`
  display: flex;

  &:hover {
    > ${ButtonsWrapper} {
      transition: opacity 500ms;
      opacity: 1;
    }

    > ${CustomerPhoto} {
      transition: filter 500ms;
      filter: brightness(80%) grayscale(20%);
    }
  }
`;
