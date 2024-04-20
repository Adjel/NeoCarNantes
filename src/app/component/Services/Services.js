import { Content } from "next/font/google";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import logo2 from "/public/logo2.svg";
import logo3 from "/public/logo3.svg";
import logo4 from "/public/logo4.svg";

const services = [
  { description: "réparation toutes marques", icon: logo2 },
  { description: "reprogrammations moteur", icon: logo3 },
  { description: "customisations et autres", icon: logo4 },
];

export default function Services() {
  function ServicesItem({ description, icon }) {
    return (
      <ItemWrapper>
        <Image
          alt="logo decoration"
          src={icon}
          quality={100}
          style={{
            width: "200px",
            height: "200px",
          }}
        />
        <Item>{description}</Item>
      </ItemWrapper>
    );
  }

  return (
    <Wrapper>
      {services.map(({ description, icon }) => (
        <ServicesItem description={description} icon={icon} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
`;
const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Item = styled.p`
  width: 60%;
  text-transformation: uppercase;
  text-transform: uppercase;
  letter-spacing: normal;
  line-height: 1.2em;
  text-align: center;
  font-size: ${18 / 16}rem;
  font-weight: 200;
`;
