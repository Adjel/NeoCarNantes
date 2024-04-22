"use client";
import React, { useState, useEffect } from "react";
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
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.6 }
    );

    links.forEach(({ link }) => {
      let element = document.getElementById(link);
      if (element) observer.observe(element);
    });
  }, []);

  return (
    <Nav>
      {links.map(({ name, link }) => (
        <NavLink key={link} link={link} isActive={activeLink === link}>
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
