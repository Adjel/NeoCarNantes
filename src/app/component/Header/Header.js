"use client";
import React from "react";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Navigation />
      <Divider />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: auto;
  padding: 6px;
  padding-inline: 64px;
  background: hsl(0 1 18);
`;

const LogoWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
`;

const Divider = styled.div`
  display: flex;
  flex: 1;
`;

export default Header;
