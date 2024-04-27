import { COLORS, QUERIES } from "@/app/constant";
import { FaRegStar } from "react-icons/fa";
import styled from "styled-components";

export default function RateStarsComponent() {
  const starNbr = 5;
  return (
    <Wrapper>
      {Array.from({ length: starNbr }).map((_, index) => (
        <Star key={index} />
      ))}
    </Wrapper>
  );
}
const Wrapper = styled.div``;

const Star = styled(FaRegStar)`
  width: ${30 / 16}rem;
  height: ${30 / 16}rem;
  color: ${COLORS.blue};

  @media ${QUERIES.tabletAndSmaller} {
    width: ${24 / 16}rem;
    height: ${24 / 16}rem;
  }
  @media ${QUERIES.phoneAndSmaller} {
    width: ${18 / 16}rem;
    height: ${18 / 16}rem;
  }
`;
