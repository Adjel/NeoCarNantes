import React from "react";
import styled from "styled-components";
import photo1 from "/public/customers/photo1.jpeg";
import photo2 from "/public/customers/photo2.jpeg";
import photo3 from "/public/customers/photo3.jpeg";
import photo4 from "/public/customers/photo4.jpeg";
import photo5 from "/public/customers/photo5.jpeg";
import photo6 from "/public/customers/photo6.jpeg";
import photo7 from "/public/customers/photo7.jpeg";
import photo8 from "/public/customers/photo8.jpeg";
import photo9 from "/public/customers/photo9.jpeg";
import CustomerItem from "../CustomerItem/CustomerItem";

const images = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
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
  margin-top: 64px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  justify-content: center;
  align-content: center;
  padding: 64px;
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
