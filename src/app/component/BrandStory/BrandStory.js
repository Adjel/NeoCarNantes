import React from "react";
import DecorativeWrapper from "../DecorativeWrapper/DecorativeWrapper";
import styled from "styled-components";
import { FONTWEIGHT, FONTSIZE, QUERIES } from "@/app/constant";

export default function BrandStory() {
  return (
    <DecorativeWrapper title={"histoire"}>
      <Paragraphes>
        <strong>NeoCarNantes</strong> à été créé à l&apos;été 2020 par Quentin
        dans son <em>garage</em> attenant à sa maison de St Philbert de Grand
        Lieu alors qu&apos;il cumulait ce travail avec son métier dans
        l&apos;aéronautique.
      </Paragraphes>
      <Paragraphes>
        Après des journées, nuits pendant tout le confinement au service des ses
        clients il a décidé de quitté son premier travail afin de se consacrer à
        200% dans sa passion de toujours : l&apos;automobile.
      </Paragraphes>
      <Paragraphes>
        Cette passion dévorante lui a permis de grandir et de créer son Atelier
        de réparation automobile à <strong>La Beaujoire (Nantes)</strong>.
      </Paragraphes>
      <Paragraphes>
        Aujourd&apos;hui plus grand mais aussi accompagné !&nbsp;
        <strong>NeoCarNantes</strong> est à ce jour une entreprise familiale car
        sa femme Charlotte (Chacha) l&apos;a rejoint dans l&apos;aventure !
      </Paragraphes>
    </DecorativeWrapper>
  );
}

const Paragraphes = styled.p`
  color: black;
  font-weight: ${FONTWEIGHT.tier1};
  font-size: ${FONTSIZE.item.phone};
  color: black;
  text-align: center;
  padding: ${5 / 16}em;
  line-height: 1.5em;

  @media ${QUERIES.tabletAndUp} {
    font-size: ${FONTSIZE.item.tablet};
  }
  @media ${QUERIES.laptopAndUp} {
    font-size: ${FONTSIZE.item.laptopAndUp};
  }

  > * {
    font-weight: inherit;
    font-style: inherit;
  }
`;
