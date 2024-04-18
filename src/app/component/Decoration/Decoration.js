import React from "react";
import styled from "styled-components";

export default function Decoration({
  backgroundColor = "white",
  width = "46px",
  height = "3px",
}) {
  return (
    <Item
      style={{
        "--backgroundColor": backgroundColor,
        "--width": width,
        "--height": height,
      }}
    />
  );
}

const Item = styled.div`
  width: var(--width);
  height: var(--height);
  background: var(--backgroundColor);
`;
