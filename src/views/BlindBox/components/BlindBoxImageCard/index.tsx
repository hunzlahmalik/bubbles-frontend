import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { CardProps } from 'bubbles-uikit';
import GradientCard, { GradientCardProps } from 'components/GradientCard';
import ImageCard, { ImageCardProps } from 'components/ImageCard';

export interface BlindBoxHeadingProps extends CardProps {
  fontSize?: string;
  color?: string;
}

// Styles
const Heading = styled.h1<BlindBoxHeadingProps>`
  color: ${({ color }) => color || 'white'};
  font-size: ${({ fontSize }) => fontSize || '18px'};
  @media screen and (max-width: 760px) {
    font-size: 16px;
  }
`;

const Status = styled.p`
  font-size: 24px;
  margin-top: 20px;
  @media screen and (max-width: 760px) {
    margin-top: 10px;
    font-size: 16px;
  }
  color: hsla(0, 0%, 100%, 0.8);
`;

const StageTitle = styled.div`
  height: 30px;
  background: rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  font-size: 18px;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  color: white;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 0 12px;
  margin-bottom: 10px;
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

const Wrapper = styled.div<{ height?: string; maxWidth?: string } & CardProps>`
  height: ${({ height }) => height || '200px'};
  max-width: ${({ maxWidth }) => maxWidth || '1100px'};
`;

export interface BlindBoxImageCardProps extends BlindBoxHeadingProps, GradientCardProps, ImageCardProps {
  stageTitle: string;
  title: string;
  isSoldOut: boolean;
  boxID: string;
}

const BlindBoxImageCard: React.FC<BlindBoxImageCardProps> = ({
  title,
  stageTitle,
  isSoldOut,
  boxID,
  imgUrl,
  gradient,
  shouldHover = false,
  ...props
}) => {
  function renderComponents() {
    return (
      <GradientCard gradient={gradient}>
        <ImageCard shouldHover={shouldHover} imgUrl={imgUrl}>
          <Content>
            <StageTitle>{stageTitle}</StageTitle>
            <Heading>{title}</Heading>
            <Status>{isSoldOut ? 'In Stock' : 'Sold Out'}</Status>
          </Content>
        </ImageCard>
      </GradientCard>
    );
  }
  const { pathname } = useLocation();

  function getURL() {
    if (pathname[pathname.length - 1] === '/') return pathname + boxID;
    return `${pathname}/${boxID}`;
  }
  return (
    <>
      <Wrapper {...props}>
        <a href={getURL()}>{renderComponents()}</a>
      </Wrapper>
    </>
  );
};
export default BlindBoxImageCard;
