import styled from "styled-components";
import { COLORS, QUERIES } from "../constants";
import Card from './Card';

const CardsWrapper = styled.section`
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media ${QUERIES.laptopAndUp}{
    flex-direction: row;
  }
  
`;

function Cards() {
  return (
    <CardsWrapper>
      <Card
        bgc={COLORS.primary.brightOrange}
        src="images/icon-sedans.svg"
        title="sedans"
        dsc="Choose a Sedan for its affordability and excellence fuel economy. Ideal for cruising in the city or your next trip."
      />
      <Card
        bgc={COLORS.primary.darkCyan}
        src="images/icon-suvs.svg"
        title="suvs"
        dsc="Take a SUF for its spacious interior, power and versality. Perfect for your next family vacation and road off adventures."
      />
      <Card
        bgc={COLORS.primary.veryDarkCyan}
        src="images/icon-luxury.svg"
        title="luxury"
        dsc="Cruiset is the best car brands without bloaded price. Enjoy the enhanced comfort of a luxury."
      />
    </CardsWrapper>
  )
};

export default Cards;