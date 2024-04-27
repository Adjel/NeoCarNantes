import React from "react";
import styled from "styled-components";
import DecorativeWrapper from "../DecorativeWrapper/DecorativeWrapper";
import { FONTSIZE, FONTWEIGHT, QUERIES } from "@/app/constant";
import illustration from "/public/old_car_logo.jpeg";
import Image from "next/image";

export default function Contact() {
  return (
    <DecorativeWrapper
      decorativeImage={
        <ImageWrapper>
          <Image
            alt={"an image of an old cool car"}
            src={illustration}
            quality={100}
            layout="responsive"
            style={{
              width: `${500 / 16}rem`,
              height: `${500 / 16}rem`,
            }}
          />
        </ImageWrapper>
      }
      title={"nous contacter"}
      textAlign={"center"}
      marginTop={`${50 / 16}rem`}
    >
      <ContactWrapper>
        <adress>10 Impasse de Belgique 44300 NANTES </adress>
        <adress>06.11.11.70.44</adress>
        <p> Instagram : neocarnantes </p>
        <p> HEURES D&apos;OUVERTURE:</p>
        <p>
          <StrongWeekday>Lundi :</StrongWeekday> 9h-12h15 14h-19h
        </p>
        <p>
          <StrongWeekday>Mardi- Jeudi:</StrongWeekday> 8h - 12h15 14h- 19h
        </p>
        <p>
          <StrongWeekday>Vendredi :</StrongWeekday> 8h - 12h15 14h - 18h
        </p>
        <p>
          <StrongWeekday>Samedi :</StrongWeekday> UNIQUEMENT sur rendez-vous
          (secrétariat fermé)
        </p>
      </ContactWrapper>
    </DecorativeWrapper>
  );
}

const StrongWeekday = styled.span`
  font-weight: ${FONTWEIGHT.normal};
`;

const ContactWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${18 / 16}rem;

  > p,
  adress {
    p > ${StrongWeekday} {
      font-weight: inherit;
      font-style: inherit;
    }

    font-weight: ${FONTWEIGHT.tier1};
    font-size: ${FONTSIZE.item.phone};
    color: black;

    @media ${QUERIES.tabletAndUp} {
      font-size: ${FONTSIZE.item.tablet};
    }
    @media ${QUERIES.laptopAndUp} {
      font-size: ${FONTSIZE.item.desktop};
    }
  }
`;

const ImageWrapper = styled.picture`
  width: ${290 / 16}rem;
  height: ${290 / 16}rem;
`;
