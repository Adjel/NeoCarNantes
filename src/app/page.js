"use client";
import Header from "@/app/component/Header/Header";
import styled from "styled-components";
import Hero from "@/app/component/Hero";
import Features from "./component/Features/Features";
import Customers from "./component/Customers/Customers";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";

export default function Home() {
  return (
    <Wrapper>
      <ScrollWrapper>
        <section id="hero">
          <Hero />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="customers">
          <Customers />
        </section>
        <section id="contact" style={{ width: "100%" }}>
          <Contact />
        </section>
        <Footer />
      </ScrollWrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 100vh;
  overflow: hidden;
  background-image: url("/bmwstyle.png");
  background-size: cover;
  background-repeat: no-repeat;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: fixed;
`;

const ScrollWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  overflow-y: auto;
  padding-top: 36px;
`;
