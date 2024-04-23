import React, { useState } from "react";
import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { QUERIES, COLORS } from "@/app/constant";

export default function MobileMenu({ links }) {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <Wrapper>
      <Button onClick={() => setShowMobileMenu(true)}>
        <HamburgerIcon />
      </Button>
      <Menu />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Button = styled.button`
  display: none;
  width: fit-content;
  background: none;
  border: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: revert;
  }
`;

const HamburgerIcon = styled(RxHamburgerMenu)`
  width: 30px;
  height: 30px;
  color: ${COLORS.primary};
`;

const Menu = styled.dialog`
  display: none;

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 30vh;
  min-height: 100vh;
  background: white;
`;
