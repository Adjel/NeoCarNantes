import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeInDiv = styled.div`
  animation: ${fadeIn} 1s ease-out forwards;
`;

import React, { useRef, useEffect, useState } from "react";

const AnimatedComponent = ({ children }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Se déclenche lorsque 50% de l'élément est visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return (
    <FadeInDiv ref={ref} style={{ opacity: isVisible ? 1 : 0 }}>
      {children}
    </FadeInDiv>
  );
};

export default AnimatedComponent;
