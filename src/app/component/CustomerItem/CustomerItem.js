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
  width: ${400 / 16}rem;
  height: ${300 / 16}rem;
`;

const ButtonsWrapper = styled.div`
  display: none;

  @media ${QUERIES.tabletAndUp} {
    display: revert;
    position: absolute;
    bottom: 0;
    right: auto;
    left: auto;
    display: flex;
    flex-direction: end;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 ${24 / 16}rem ${28 / 16}rem;
    opacity: 0;
  }
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
