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
  width: 30px;
  height: 30px;
  color: ${COLORS.blue};

  @media ${QUERIES.phoneAndSmaller} {
    width: 18px;
    height: 18px;
  }
`;
