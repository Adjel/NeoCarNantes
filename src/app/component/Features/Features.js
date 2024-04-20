import React from "react";
import styled from "styled-components";
import FeatureGridItem from "../FeatureGridItem/FeatureGridItem";

const featuresData = [
  { title: "PRESTATIONS TOUTES MARQUES", feature: "Sur Devis" },
  {
    title: "REPROGRAMMATION MOTEUR STAGE 1",
    feature: "A partir de 399 euros",
    subFeature: "Gagnez en puissance et en consommation",
  },
  {
    title: "REPROGRAMMATION MOTEUR ETHANOL",
    feature: "A partir de 499 euros",
    subFeature:
      "Gagnez en économie à la pompe & faites un geste vert pour la planète",
  },
  {
    title: "VITRES TEINTEES",
    feature: "A partir de 139 euros",
    subFeature: "Homologuées",
    featureInfo: "Avec notre partenaire Sunaway 20 ans d'expérience",
  },
  {
    title: "VIDANGE BOITE AUTOMATIQUE",
    feature: "A partir de 299 euros",
    subFeature: "Evitez le remplacement !",
  },
  {
    title: "PLAQUES D'IMMATRICLUATION",
    feature: "Jeu de plaques + pose 49 euros",
    subFeature: "Homologuées ou Personnalisables",
  },
  {
    title: "REMPLACEMENT TOUS VITRAGES",
    feature: "Remboursement de votre franchise jusqu'à 100 euros",
  },
  {
    title: "JANTES & ACCESSOIRES",
    feature: "Les 4 jantes à partir de 399 euros",
  },
  {
    title: "RENOVATIONS PHARES",
    feature: "Les 2 à 59 euros",
    subFeature: "Rénovation des 2 phares avant",
  },
  {
    title: "PEINTURE ETRIERS DE FREINS",
    feature: "Pour les 4 : 249 euros",
    subFeature: "Peinture haute température",
    featureInfo: "24 coloris au choix",
  },
  {
    title: "RACHAT DE VEHICULE",
    feature: "Estimation sur demande",
    subFeature:
      "Avec ou sans contrôle technique Même avec un problème mécanique",
    featureInfo: "Sans condition de reprise d'un autre véhicule",
  },
];

export default function Features() {
  return (
    <Wrapper>
      <Title>PRESTATIONS</Title>
      <SubTitle>Rien que pour vous !</SubTitle>
      <FlexWrapper>
        {featuresData.map(({ title, feature, subFeature, featureInfo }) => (
          <FeatureGridItem
            title={title}
            feature={feature}
            subFeature={subFeature}
            featureInfo={featureInfo}
          />
        ))}
      </FlexWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 80px;
  gap: 10px;
  background: hsla(0, 0%, 0%, 0.7);
`;
const Title = styled.div`
  color: white;
  letter-spacing: 0.1em;
  font-family: din-next-w01-light, din-next-w02-light, din-next-w10-light,
    sans-serif;
  font-size: ${34 / 16}rem;
  font-weight: 180;
  line-height: normal;
  text-align: center;
  font-family: "Fjalla One";
`;
const SubTitle = styled.div`
  color: white;
  font-size: ${24 / 16}rem;
  font-weight: bold;
  font-weight: 200;
`;

const FlexWrapper = styled.div`
  display: flex;
  width: 65%;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin: 36px;
`;
