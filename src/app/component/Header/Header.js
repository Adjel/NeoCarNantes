"use client";
import React from "react";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Navigation />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: auto;
  background: hsl(0, 1, 18, 100%);
`;

export default Header;
