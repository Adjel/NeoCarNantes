"use client";
import React from "react";
import styled from "styled-components";
import NavLink from "../NavLink/NavLink";

const links = [
  { name: "le garage", link: "#hero" },
  { name: "services", link: "#services" },
  { name: "tarifs", link: "#features" },
  { name: "avis", link: "#customers" },
  { name: "contact", link: "#contact" },
];

function Navigation() {
  return (
    <Nav>
      {links.map(({ name, link }) => (
        <NavLink key={link} link={link}>
          {name}
        </NavLink>
      ))}
    </Nav>
  );
}

const Nav = styled.div`
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
