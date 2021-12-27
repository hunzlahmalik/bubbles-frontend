import React from 'react';
import styled from 'styled-components';

export interface CardDivProps {
  Height?: string;
  Width?: string;
  gradient: string; // Outer Div Gradient
}

export interface CardProps extends CardDivProps {
  BackgroundImage: string;
}

const CardDiv = styled.div<CardDivProps>`
  width: ${({ Width }) => Width};
  height: ${({ Height }) => Height};
  display: block;
  border-radius: 24px;
  background-image: ${({ gradient }) => gradient};
  overflow: hidden;
  @media screen and (max-width: 760px) {
    width: 100%;
    height: 150px;
  }
`;

const InnerCardDiv = styled.div<{ BackgroundImage: string }>`
  position: relative;
  height: 100%;
  width: 100%;
  display: inline-block;

  &:before {
    content: ' ';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    display: inline-block;
    -webkit-transition: all 0.5s;
    transition: 0.5s;
    background-image: url(${(props) => props.BackgroundImage});
    background-size: cover;
    background-position: center center;
    border-radius: 24px;
  }
  &:hover {
    &:before {
      transform: scale(1.05);
    }
  }
`;

const Content = styled.div`
  position: absolute;
  margin: 0 25px;
  padding: 25px;
  -webkit-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  @media screen and (max-width: 760px) {
    margin: 0 10px;
    padding: 15px;
    /* padding: 0px; */
  }
`;

const Card: React.FC<CardProps> = ({ children, BackgroundImage, gradient, Height, Width }) => {
  return (
    <CardDiv Width={Width} Height={Height} gradient={gradient}>
      <InnerCardDiv BackgroundImage={BackgroundImage}>
        <Content>{children}</Content>
      </InnerCardDiv>
    </CardDiv>
  );
};
export default Card;
