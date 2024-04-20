import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import { SlActionRedo } from "react-icons/sl";
import { CgCompressRight } from "react-icons/cg";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { TbHeart } from "react-icons/tb";
import { TbHeartFilled } from "react-icons/tb";
import { TfiClose } from "react-icons/tfi";

function IconButtonComponent({ onClick }) {
  const [isFilled, setIsFilled] = useState(false);

  const handleClick = () => {
    setIsFilled(!isFilled);
  };

  return (
    <Button onClick={handleClick}>
      {isFilled ? <FilledIcon /> : <Icon />}
    </Button>
  );
}

const Button = styled.button`
  background: none;
  border: none;
`;

const FilledIcon = styled(TbHeartFilled)`
  width: 24px;
  height: 24px;
  color: red;
`;

const Icon = styled(TbHeart)`
  width: 24px;
  height: 24px;

  &:hover {
    filter: invert(20%);
  }
`;

export default IconButtonComponent;
