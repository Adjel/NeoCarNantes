"use client";
import Image from "next/image";
import Header from "@/app/component/Header/Header";
import styled from "styled-components";
import carIngGarage from "../app/images/bmwstyle.png";
import Hero from "@/app/component/Hero";

export default function Home() {
  return (
    <Wrapper>
      <Image
        alt="a beautifull car in beautifull garage "
        src={carIngGarage}
        placeholder="blur"
        quality={100}
        fill
        style={{
          objectFit: "cover",
          zIndex: "-1",
          position: "absolute",
          top: 0,
        }}
      />
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <ScrollWrapper>
        <Hero />
      </ScrollWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ScrollWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: auto;
  padding-top: 36px;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: fixed;
`;
