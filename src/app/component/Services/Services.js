import React from "react";
import styled from "styled-components";
import Image from "next/image";
import logo2 from "/public/logo2.svg";
import logo3 from "/public/logo3.svg";
import logo4 from "/public/logo4.svg";
import { COLORS, FONTSIZE, FONTWEIGHT, QUERIES } from "@/app/constant";

const services = [
  { description: "réparation toutes marques", icon: logo2 },
  { description: "reprogrammations moteur", icon: logo3 },
  { description: "customisations et autres", icon: logo4 },
];

export default function Services() {
  function ServicesItem({ description, icon }) {
    return (
      <ItemWrapper>
        <ResponsiveItemWrapper>
          <Image
            alt={description}
            src={icon}
            quality={100}
            layout="responsive"
            style={{
              width: `${200 / 16}rem`,
              height: `${200 / 16}rem`,
            }}
          />
        </ResponsiveItemWrapper>
        <Item>
          <em style={{ fontStyle: "normal" }}>{description}</em>
        </Item>
      </ItemWrapper>
    );
  }

  return (
    <Wrapper>
      {services.map(({ description, icon }, index) => (
        <ServicesItem key={index} description={description} icon={icon} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30vh;
  background: ${COLORS.background.transparentLightBlack};

  @media ${QUERIES.tabletAndUp} {
    height: 70vh;
  }
  @media ${QUERIES.laptopAndUp} {
    height: 100vh;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
`;

const ResponsiveItemWrapper = styled.div`
  width: ${60 / 16}rem;
  height: ${60 / 16}rem;

  @media ${QUERIES.tabletAndUp} {
    width: ${150 / 16}rem;
    height: ${150 / 16}rem;
  }
  @media ${QUERIES.laptopAndUp} {
    width: ${200 / 16}rem;
    height: ${200 / 16}rem;
  }
`;

const Item = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  text-transformation: uppercase;
  text-transform: uppercase;
  letter-spacing: normal;
  line-height: 1.2em;
  text-align: center;
  font-size: ${FONTSIZE.bigItem.phone};
  font-weight: ${FONTWEIGHT.tier2};

  @media ${QUERIES.tabletAndUp} {
    font-size: ${FONTSIZE.bigItem.tablet};
  }
  @media ${QUERIES.laptopAndUp} {
    font-size: ${FONTSIZE.bigItem.desktop};
  }
`;
