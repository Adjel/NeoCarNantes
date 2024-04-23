import React from "react";
import Image from "next/image";
import styled from "styled-components";
import FadeInElement from "../FadeInElement/FadeInElement";
import LikeIconButton from "../LikeIconButton";
import ShareIconButton from "../ShareIconButton";
import { QUERIES } from "@/app/constant";

export default function CustomerItem({ alt, src }) {
  return (
    <FadeInElement position={"relative"}>
      <HoverWrapper>
        <CustomerPhoto alt={alt} src={src} layout="responsive" />
        <ButtonsWrapper>
          <LikeIconButton />
          <ShareIconButton />
        </ButtonsWrapper>
      </HoverWrapper>
    </FadeInElement>
  );
}

const CustomerPhoto = styled(Image)`
  object-fit: cover;
  width: 430px;
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
  width: 100%;

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
