import React from "react";
import styled from "styled-components";
import DecorativeWrapper from "../DecorativeWrapper/DecorativeWrapper";

export default function Contact() {
  return (
    <DecorativeWrapper
      title={"nous contacter"}
      textAlign={"start"}
      paddingStart={"126px"}
      marginTop="50px"
    >
      10 Impasse de Belgique 44300 NANTES <br />
      <br /> 06.11.11.70.44 <br />
      <br /> Instagram : neocarnantes <br />
      <br />
      <br />
      <br /> HEURES D&apos;OUVERTURE: <br />
      <br /> <StrongWeekday>Lundi :</StrongWeekday> 9h-12h15 14h-19h
      <br />
      <br /> <StrongWeekday>Mardi- Jeudi:</StrongWeekday> 8h - 12h15 14h- 19h
      <br />
      <br /> <StrongWeekday>Vendredi :</StrongWeekday> 8h - 12h15 14h - 18h
      <br />
      <br />
      <StrongWeekday>Samedi :</StrongWeekday> UNIQUEMENT sur rendez-vous
      (secrétariat fermé)
      <br />
    </DecorativeWrapper>
  );
}

const StrongWeekday = styled.span`
  font-weight: 400;
`;
