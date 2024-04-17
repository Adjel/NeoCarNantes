"use client";
import Image from "next/image";
import Header from "./Component/Header/Header";
import styled from "styled-components";
import carIngGarage from "./Images/bmwstyle.png";

export default function Home() {
  return (
    <HomeWrapper>
      <Image
        alt="carIngGarage"
        src={carIngGarage}
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <Header />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div``;
