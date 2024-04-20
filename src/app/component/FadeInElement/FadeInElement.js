import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import styled from "styled-components";

const StyledElement = styled.div`
  position: var(--position);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 1s linear;
`;

const FadeInElement = ({ position, children, partialVisibility = true }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibilityChange = (isVisible) => {
    setIsVisible(isVisible);
  };

  return (
    <VisibilitySensor
      onChange={handleVisibilityChange}
      partialVisibility={partialVisibility}
    >
      <StyledElement visible={isVisible} style={{ "--position": position }}>
        {children}
      </StyledElement>
    </VisibilitySensor>
  );
};

export default FadeInElement;
