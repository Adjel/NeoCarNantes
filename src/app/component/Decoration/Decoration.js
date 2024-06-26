import React from "react";
import styled from "styled-components";

export default function Decoration({
  backgroundColor = "white",
  width = `${46 / 16}rem`,
  height = `${3 / 16}rem`,
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

// not an hr because the semantic of hr not have any sense here we only want a decoration
const Item = styled.span`
  width: var(--width);
  height: var(--height);
  background: var(--backgroundColor);
`;
