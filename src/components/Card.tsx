import styled from "styled-components";
import { COLORS, QUERIES } from "../constants";

type CardWrapperProps = {
  bgc: string;
};

const CardWrapper = styled.article<CardWrapperProps>`
  max-width: 400px;
  background-color: ${({ bgc }) => bgc};
  color: ${({ bgc }) => bgc};
  padding: 40px 32px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${QUERIES.tabletAndUp}{
    max-width: 300px;
  }
`;

const ImageWrapper = styled.div`
`;

const Title = styled.h2`
  font-family: 'Big Shoulders Display', cursive;
  font-size: 3rem;
  color: white;
  text-transform: uppercase;
  margin: 16px 0;
  font-weight: 700;
`;

const Description = styled.p`
  color: ${COLORS.neutral.transparentWhite};
  margin-bottom: 32px;
  font-size: 1.125rem;
`;

const Button = styled.button`
  color: currentColor;
  border: 2px solid currentColor;
  padding: 16px 28px;
  border-radius: 28px;
  margin-top: auto;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    color: white
  }

`;

type CardProps = {
  bgc: string,
  src: string,
  title: string,
  dsc: string
}

function Card({ bgc, src, title, dsc }: CardProps): JSX.Element {
  return (
    <CardWrapper bgc={bgc}>
      <ImageWrapper>
        <img src={src} alt="" />
      </ImageWrapper>
      <Title>{title}</Title>
      <Description>
        {dsc}
      </Description>
      <Button>Learn Morn</Button>
    </CardWrapper>
  )
};

export default Card;








