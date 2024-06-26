"use client";
import Header from "@/app/component/Header/Header";
import styled from "styled-components";
import Hero from "@/app/component/Hero";
import Features from "./component/Features/Features";
import Customers from "./component/Customers/Customers";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import BrandStory from "./component/BrandStory/BrandStory";
import Services from "./component/Services/Services";

export default function Home() {
  return (
    <body>
      <Wrapper>
        <ScrollWrapper>
          <main>
            <section id="hero">
              <Hero />
            </section>
            <LargeSection id="services">
              <Services />
            </LargeSection>
            <LargeSection id="story">
              <BrandStory />
            </LargeSection>
            <section id="features">
              <Features />
            </section>
            <section id="customers">
              <Customers />
            </section>
            <LargeSection id="contact">
              <Contact />
            </LargeSection>
          </main>
          <Footer />
        </ScrollWrapper>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
      </Wrapper>
    </body>
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
  background-repeat: ;
`;

const HeaderWrapper = styled.header`
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
  padding-top: ${36 / 16}rem;
`;

const LargeSection = styled.section`
  width: 100%;
`;
