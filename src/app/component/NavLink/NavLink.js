"use client";
import React from "react";
import styled from "styled-components";
import { COLORS, FONTSIZE, QUERIES } from "@/app/constant";

function NavLink({ children, link, isActive }) {
  let color = isActive ? "black" : COLORS.primary;
  let display = isActive ? "revert" : "none";
  console.log({ isActive });
  console.log({ link });

  return (
    <Wrapper href={link}>
      <Decoration style={{ "--display": `${display}` }} />
      <NavLinkItem style={{ "--color": `${color}` }}>{children}</NavLinkItem>
    </Wrapper>
  );
}

const Decoration = styled.li`
  width: 120%;
  height: ${3 / 16}rem;
  background: black;
  display: var(--display);
`;

const NavLinkItem = styled.div`
  font-size: ${FONTSIZE.normal.phone};
  text-transform: uppercase;
  color: var(--color);

  @media ${QUERIES.tabletAndUp} {
    font-size: ${FONTSIZE.normal.tablet};
  }
  @media ${QUERIES.laptopAndUp} {
    font-size: ${FONTSIZE.normal.desktop};
  }
`;

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${6 / 16}rem;

  &:hover {
    ${Decoration} {
      display: revert;
    }

    ${NavLinkItem} {
      color: black;
    }
  }
`;

export default NavLink;
