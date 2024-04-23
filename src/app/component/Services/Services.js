import React from "react";
import styled from "styled-components";
import Image from "next/image";
import logo2 from "/public/logo2.svg";
import logo3 from "/public/logo3.svg";
import logo4 from "/public/logo4.svg";
import {
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  FONTWEIGHT,
  QUERIES,
} from "@/app/constant";

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
            alt="logo decoration"
            src={icon}
            quality={100}
            layout="responsive"
            style={{
              width: "200px",
              height: "200px",
            }}
          />
        </ResponsiveItemWrapper>
        <Item>{description}</Item>
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

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: ${COLORS.background.transparentLightBlack};

  @media ${QUERIES.tabletAndSmaller} {
    height: 60vh;
  }
  @media ${QUERIES.phoneAndSmaller} {
    height: 30vh;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
`;

const ResponsiveItemWrapper = styled.div`
  width: 200px;
  height: 200px;

  @media ${QUERIES.tabletAndSmaller} {
    width: 150px;
    height: 150px;
  }
  @media ${QUERIES.phoneAndSmaller} {
    width: 60px;
    height: 60px;
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
  font-size: ${FONTSIZE.bigItem.desktop};
  font-weight: ${FONTWEIGHT.tier2};

  @media ${QUERIES.tabletAndSmaller} {
    font-size: ${FONTSIZE.bigItem.tablet};
  }
  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${FONTSIZE.bigItem.phone};
  }
`;
