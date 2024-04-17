"use client";
import React from "react";
import styled from "styled-components";
import NavLink from "../NavLink/NavLink";

const links = [
  { name: "presentation" },
  { name: "galeries photo" },
  { name: "avis" },
  { name: "contact" },
];

function Navigation() {
  return (
    <Nav>
      {links.map(({ name }) => (
        <NavLink>{name}</NavLink>
      ))}
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  flex: 3;
  justify-content: space-around;
  align-self: center;
  align-items: center;
  width: auto;
  height: auto;
  background: inherit;
`;

export default Navigation;
