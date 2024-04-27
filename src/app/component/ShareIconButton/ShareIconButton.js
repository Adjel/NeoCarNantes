import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { SlActionRedo } from "react-icons/sl";
import { CgCompressRight } from "react-icons/cg";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { SlHeart } from "react-icons/sl";
import { FaHeart } from "react-icons/fa";
import { TfiClose } from "react-icons/tfi";
import { IoArrowRedoOutline } from "react-icons/io5";

function IconButtonComponent({ onClick }) {
  return <Icon />;
}

IconButtonComponent.defaultProps = {
  //Defaut properties which can be overrided
  filter: "invert(100%)",
};

// Not be overrided because the user will override Image directly
// and Image override img
const Icon = styled(IoArrowRedoOutline)`
  width: ${36 / 16}rem;
  height: ${24 / 16}rem;
  &:hover {
    filter: invert(20%);
  }
`;

export default IconButtonComponent;
