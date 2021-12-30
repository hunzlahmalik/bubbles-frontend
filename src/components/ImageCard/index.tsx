import React from 'react';
import styled, { css } from 'styled-components';
import { CardProps, Link } from 'bubbles-uikit';

export interface ImageCardProps extends CardProps {
  imgUrl: string;
  redirectUrl?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  shouldHover?: boolean;
}

const StyledImageCard = styled.div<ImageCardProps>`
  position: relative;
  height: ${({ height }) => height ?? '100%'};
  width: ${({ width }) => width ?? '100%'};
  display: inline-block;

  &:before {
    content: ' ';
    position: absolute;
    left: 0;
    top: 0;
    height: ${({ height }) => height ?? '100%'};
    width: ${({ width }) => width ?? '100%'};
    display: inline-block;
    -webkit-transition: all 0.5s;
    transition: 0.5s;
    background-image: url(${({ imgUrl }) => imgUrl ?? '#'});
    background-size: cover;
    background-position: center center;
    border-radius: 24px;
  }

  ${({ shouldHover }) =>
    shouldHover &&
    css`
      &:hover {
        &:before {
          transform: scale(1.05);
        }
      }
    `}
`;

const ImageCard: React.FC<ImageCardProps> = ({ redirectUrl, children, ...props }) => {
  return redirectUrl ? (
    <Link href={redirectUrl}>
      <StyledImageCard {...props}>{children}</StyledImageCard>
    </Link>
  ) : (
    <StyledImageCard {...props}>{children}</StyledImageCard>
  );
};

export default ImageCard;
