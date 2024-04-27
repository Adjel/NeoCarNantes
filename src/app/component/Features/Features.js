import React from "react";
import styled from "styled-components";
import FeatureGridItem from "../FeatureGridItem/FeatureGridItem";
import {
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  FONTWEIGHT,
  QUERIES,
} from "@/app/constant";

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
      <header>
        <Title>
          <em style={{ fontStyle: "normal" }}>PRESTATIONS</em>
        </Title>
        <SubTitle>Rien que pour vous !</SubTitle>
      </header>
      <FlexWrapper>
        {featuresData.map(
          ({ title, feature, subFeature, featureInfo }, index) => (
            <FeatureGridItem
              key={index}
              title={title}
              feature={feature}
              subFeature={subFeature}
              featureInfo={featureInfo}
            />
          )
        )}
      </FlexWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: ${80 / 16}rem;
  gap: ${10 / 16}rem;
  background: ${COLORS.background.transparentBlack};
`;
const Title = styled.h1`
  color: white;
  letter-spacing: 0.1em;
  font-family: din-next-w01-light, din-next-w02-light, din-next-w10-light,
    sans-serif;
  font-size: ${FONTSIZE.title.desktop};
  font-weight: ${FONTWEIGHT.tier1};
  line-height: normal;
  text-align: center;
  font-family: ${FONTFAMILY.Fjalla};

  @media ${QUERIES.tabletAndSmaller} {
    font-size: ${FONTSIZE.title.tablet};
  }
  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${FONTSIZE.title.phone};
  }
`;
const SubTitle = styled.h2`
  color: white;
  font-size: ${FONTSIZE.content.desktop};
  font-weight: ${FONTWEIGHT.tier2};

  @media ${QUERIES.tabletAndSmaller} {
    font-size: ${FONTSIZE.content.tablet};
  }
  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${FONTSIZE.content.phone};
  }
`;

const FlexWrapper = styled.article`
  display: flex;
  width: 65%;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${15 / 16}rem;
  margin: ${36 / 16}rem;

  @media ${QUERIES.tabletAndSmaller} {
    width: 85%;
  }
  @media ${QUERIES.phoneAndSmaller} {
    display: grid;
    gap: ${15 / 16}rem;
  }
`;
