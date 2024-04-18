import React from "react";
import styled from "styled-components";

const FeaturesData = [
  { title: "PRESTATIONS TOUTES MARQUES", feature: "Sur Devis" },
  { title: "REPROGRAMMATION MOTEUR STAGE 1", feature: "A partir de" },
  { title: "REPROGRAMMATION MOTEUR ETHANOL", feature: "A partir de" },
  { title: "VITRES TEINTEES", feature: "A partir de" },
  { title: "VIDANGE BOITE AUTOMATIQUE", feature: "A partir de" },
  { title: "PLAQUES D'IMMATRICLUATION", feature: "Jeu de plaques + pose" },
  { title: "REMPLACEMENT TOUS VITRAGES", feature: "Remboursement" },
  { title: "JANTES & ACCESSOIRES", feature: "Les 4 jantes à partir de" },
  { title: "RENOVATIONS PHARES", feature: "Les 2 à" },
  { title: "PEINTURE ETRIERS DE FREINS", feature: "Pour les 4 : 249 euros" },
  { title: "RACHAT DE VEHICULE", feature: "Estimation sur demande" },
];

export default function Features() {
  return (
    <Wrapper>
      <Title>PRESTATIONS</Title>
      <SubTitle>Rien que pour vous !</SubTitle>
      <Grid></Grid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 80px;
  background: hsla(0, 0%, 0%, 0.62);
`;
const Title = styled.div`
  color: white;
  letter-spacing: 0.1em;
  font-family: din-next-w01-light, din-next-w02-light, din-next-w10-light,
    sans-serif;
  font-weight: bold;
  font-size: ${34 / 16}rem;
  font-weight: 180;
  line-height: normal;
  text-align: center;
`;
const SubTitle = styled.div`
  color: white;
  font-size: ${24 / 16}rem;
  font-weight: bold;
  font-weight: 200;
`;
const Grid = styled.div`
  display: grid;
`;
