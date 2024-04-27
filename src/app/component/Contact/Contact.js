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
        <picture>
          <Image
            alt={"an image of an old cool car"}
            src={illustration}
            quality={100}
            layout="responsive"
            style={{
              width: `${70 / 16}rem`,
              height: `${70 / 16}rem`,
            }}
          />
        </picture>
      }
      title={"nous contacter"}
      textAlign={"center"}
      marginTop="50px"
    >
      <ContactWrapper>
        <Adress>10 Impasse de Belgique 44300 NANTES </Adress>
        <Adress>06.11.11.70.44</Adress>
        <Parag> Instagram : neocarnantes </Parag>
        <Parag> HEURES D&apos;OUVERTURE:</Parag>
        <Parag>
          <StrongWeekday>Lundi :</StrongWeekday> 9h-12h15 14h-19h
        </Parag>
        <Parag>
          <StrongWeekday>Mardi- Jeudi:</StrongWeekday> 8h - 12h15 14h- 19h
        </Parag>
        <Parag>
          <StrongWeekday>Vendredi :</StrongWeekday> 8h - 12h15 14h - 18h
        </Parag>
        <Parag>
          <StrongWeekday>Samedi :</StrongWeekday> UNIQUEMENT sur rendez-vous
          (secrétariat fermé)
        </Parag>
      </ContactWrapper>
    </DecorativeWrapper>
  );
}

const ContactWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${18 / 16}rem;
`;

const Parag = styled.p`
  font-weight: ${FONTWEIGHT.tier1};
  font-size: ${FONTSIZE.item.desktop};
  color: black;

  @media ${QUERIES.tabletAndSmaller} {
    font-size: ${FONTSIZE.item.tablet};
  }
  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${FONTSIZE.item.phone};
  }

  > * {
    font-weight: inherit;
    font-style: inherit;
  }
}
`;

const Adress = styled.address`  color: black;
font-weight: ${FONTWEIGHT.tier1};
font-size: ${FONTSIZE.item.desktop};
color: black;
font-style: normal;

@media ${QUERIES.tabletAndSmaller} {
  font-size: ${FONTSIZE.item.tablet};
}
@media ${QUERIES.phoneAndSmaller} {
  font-size: ${FONTSIZE.item.phone};
}
}`;

const StrongWeekday = styled.span`
  font-weight: ${FONTWEIGHT.normal};
`;
