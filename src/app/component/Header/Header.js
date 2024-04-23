"use client";
import React from "react";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import styled from "styled-components";
import MobileMenu from "../MobileMenu/MobileMenu";
import { COLORS, QUERIES } from "@/app/constant";

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Navigation />
        <Divider />
      </HeaderWrapper>
      <MobileWrapper>
        <Logo />
        <MobileMenu />
      </MobileWrapper>
    </>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 6px 64px;
  background: ${COLORS.background.darkGray};

  @media ${QUERIES.tabletAndSmaller} {
    padding: 6px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const MobileWrapper = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 6px 18px;
  background: ${COLORS.background.darkGray};

  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;

  @media ${QUERIES.tabletAndSmaller} {
    flex: 0;
  }
  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const Divider = styled.div`
  display: flex;
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

export default Header;
