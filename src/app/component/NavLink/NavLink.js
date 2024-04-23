"use client";
import React from "react";
import styled from "styled-components";
import { COLORS } from "@/app/constant";

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

const Decoration = styled.div`
  width: 120%;
  height: 3px;
  background: black;
  display: var(--display);
`;

const NavLinkItem = styled.div`
  font-size: ${16 / 16}rem;
  text-transform: uppercase;
  color: var(--color);
`;

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

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
