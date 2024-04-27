import React from "react";

import { IoLogoInstagram } from "react-icons/io5";

import styled from "styled-components";

export default function InstagramIcon() {
  return (
    <Background>
      <Icon />
    </Background>
  );
}

// margin top have space with element above in parent
const Background = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${30 / 16}rem;
  height: ${30 / 16}rem;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 ${2 / 16}rem ${4 / 16}rem rgba(0, 0, 0, 0.1);
  margin-top: ${12 / 16}rem;
`;

const Icon = styled(IoLogoInstagram)`
  color: black;
  width: ${20 / 16}rem;
  height: ${20 / 16}rem;
`;
