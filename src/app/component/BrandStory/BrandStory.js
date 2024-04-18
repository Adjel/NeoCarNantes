import React from "react";
import styled from "styled-components";
import Decoration from "../Decoration/Decoration";

export default function BrandStory() {
  return (
    <Background>
      <Wrapper>
        <Title>HISTOIRE</Title>
        <Decoration backgroundColor="black" />
        <Content>
          NeoCarNantes à été créé à l'été 2020 par Quentin dans son garage
          attenant à sa maison de St Philbert de Grand Lieu alors qu'il cumulait
          ce travail avec son métier dans l'aéronautique.
          <br />
          <br /> Après des journées, nuits pendant tout le confinement au
          service des ses clients il a décidé de quitté son premier travail afin
          de se consacrer à 200% dans sa passion de toujours : l'automobile.
          <br />
          <br />
          Cette passion dévorante lui a permis de grandir et de créer son
          Atelier de réparation automobile à La Beaujoire (Nantes).
          <br />
          <br />
          Aujourd'hui plus grand mais aussi accompagné ! NeoCarNantes est à ce
          jour une entreprise familiale car sa femme Charlotte (Chacha) l'a
          rejoint dans l'aventure !
        </Content>
      </Wrapper>
    </Background>
  );
}

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  padding: 68px;
  padding-inline: 64px;
  width: 100%;
  height: auto;
  background: hsla(0, 4%, 68%, 0.9);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 36px 0;
  gap: 22px;
  width: 50%;
  background: white;
`;

const Title = styled.h1`
  color: hsl(0 100 27);
  font-weight: 250;
`;

const Content = styled.p`
  width: 80%;
  height: auto;
  text-align: center;
  font-weight: 180;
  font-size: ${15 / 16}rem;
  color: black;
`;
