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
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 12px;
`;

const Icon = styled(IoLogoInstagram)`
  color: black;
  width: 20px;
  height: 20px;
`;
