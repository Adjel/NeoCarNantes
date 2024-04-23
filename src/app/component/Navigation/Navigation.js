"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NavLink from "../NavLink/NavLink";
import { QUERIES, BREAKPOINTS } from "@/app/constant";

const links = [
  { name: "acceuil", link: "hero" },
  { name: "services", link: "services" },
  { name: "le garage", link: "story" },
  { name: "tarifs", link: "features" },
  { name: "avis", link: "customers" },
  { name: "contact", link: "contact" },
];

function Navigation() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log({ entries });
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveLink(id);
            console.log({ id });
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.5 }
    );

    links.forEach(({ link }) => {
      let element = document.getElementById(link);
      if (element) {
        console.log({ element });
        observer.observe(element);
      }
    });

    return () => {
      links.forEach(({ link }) => {
        let element = document.getElementById(link);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <Nav>
      {links.map(({ name, link }) => (
        <NavLink key={link} link={`#${link}`} isActive={activeLink === link}>
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
