import React from 'react';
import styled from 'styled-components';
import { CardProps } from 'bubbles-uikit';

export interface GradientCardProps extends CardProps {
  gradient: string;
  width?: string;
  height?: string;
  borderRadius?: string;
}

const StyledGradientCard = styled.div<GradientCardProps>`
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? '100%'};
  display: block;
  border-radius: ${({ borderRadius }) => borderRadius ?? '24px'};
  background-image: ${({ gradient }) => gradient ?? '#'};
  overflow: hidden;
  @media screen and (max-width: 760px) {
    width: 100%;
    height: 150px;
  }
`;

const GradientCard: React.FC<GradientCardProps> = ({ children, ...props }) => {
  return <StyledGradientCard {...props}>{children}</StyledGradientCard>;
};

export default GradientCard;
