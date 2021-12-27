import React from 'react';
import Card, { CardDivProps, CardProps } from './ImgCard';
import Status from './Status';
import Heading, { HeadingProps } from './Heading';
import StageTitle from './StageTitle';

export interface BlindBoxCardProps extends CardProps, CardDivProps, HeadingProps {
  stageTitle: string;
  title: string;
  status: boolean;
}

const BlindBoxCard: React.FC<BlindBoxCardProps> = ({
  BackgroundImage,
  gradient,
  stageTitle,
  title,
  status,
  Width = '1100px',
  Height = '200px',
  fontSize = '24px',
  Color = 'white',
}) => {
  return (
    <Card BackgroundImage={BackgroundImage} Width={Width} Height={Height} gradient={gradient}>
      <StageTitle>{stageTitle}</StageTitle>
      <Heading fontSize={fontSize} Color={Color}>
        {title}
      </Heading>
      <Status>{status ? 'In Stock' : 'Sold Out'}</Status>
    </Card>
  );
};

export default BlindBoxCard;
