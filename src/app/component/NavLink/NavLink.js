import React from "react";
import styled from "styled-components";

function NavLink({ children }) {
  let color = "hsl(0 100 27)";
  let display = "none";

  return (
    <Wrapper>
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

const NavLinkItem = styled.a`
  font-size: ${16 / 16}rem;
  text-transform: uppercase;
  color: var(--color);
`;

const Wrapper = styled.div`
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