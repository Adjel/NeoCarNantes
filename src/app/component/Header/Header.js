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
  display: none;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: auto;
  padding: ${6 / 16}rem;
  background: ${COLORS.background.darkGray};

  @media ${QUERIES.tabletAndUp} {
    display: flex;
    padding: ${6 / 16}rem ${64 / 16}rem;
  }
`;

const MobileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: ${6 / 16}rem ${18 / 16}rem;
  background: ${COLORS.background.darkGray};

  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  display: none;
  flex: 0;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;

  @media ${QUERIES.tabletAndUp} {
    display: revert;
    flex: 0;
  }

  @media ${QUERIES.laptopAndUp} {
    flex: 1;
  }
`;

// used to center the nav into the header
// we want to have the logo to the left on tablet and mobile
const Divider = styled.span`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: revert;
    flex: 1;
  }
`;

export default Header;
