import React from "react";
import styled from "styled-components";
import Image from "next/image";
import FadeInElement from "../FadeInElement/FadeInElement";
import photo1 from "/public/golfstyle.png";
import photo2 from "/public/lambostyle.jpeg";
import CustomerItem from "../CustomerItem/CustomerItem";

const images = [
  photo1,
  photo2,
  photo1,
  photo1,
  photo2,
  photo1,
  photo1,
  photo2,
  photo1,
];

const Customers = () => {
  return (
    <Wrapper>
      <Title>une passion à partager</Title>
      <Content>Quelques pépites passées chez nous</Content>
      <Grid>
        {images.map((image, index) => (
          <CustomerItem key={index} alt="a customer car" src={image} />
        ))}
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 80%;
  align-items: center;
  justify-items: center;
  justify-content: center;
  align-content: center;
  padding: 64px 0;
`;

const GridItem = styled(Image)`
  object-fit: cover;
  width: 400px;
  height: 300px;

  &:hover {
    filter: brightness(80%);
  }
`;

const Title = styled.div`
  color: white;
  letter-spacing: 0.1em;
  font-size: ${34 / 16}rem;
  line-height: normal;
  text-align: center;
  text-transform: uppercase;
  font-family: "Fjalla One";
`;

const Content = styled.p`
  color: white;
  font-size: ${24 / 16}rem;
  font-weight: normal;
  font-weight: 200;
`;

export default Customers;
