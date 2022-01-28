import React from 'react';
import styled from 'styled-components';
import { CardProps } from 'bubbles-uikit';
import GradientCard from 'components/GradientCard';

export interface PoolBannerProps extends CardProps {
  imgSrc: string;
  width: string;
  height: string;
  backgroundColor?: string;
  borderRadius?: string;
  bannerHeader?: string;
  bannerAmntInBubble?: string;
  bannerAmntInUSD?: string;
}

export interface BannerTitleProps {
  fontWeight?: string;
  fontSize?: string;
  letterSpacing?: string;
}

const StyledPoolBanner = styled.div<PoolBannerProps>`
  width: 100%;
  height: ${({ height }) => height ?? '100%'};
  display: flex;
  flex-direction: row;
  border-radius: ${({ borderRadius }) => borderRadius ?? '24px'};
  @media screen and (max-width: 760px) {
    width: 100%;
    height: 50%;
  }
`;

const BannerTitle = styled.div<BannerTitleProps>`
  height: fit-content;
  width: fit-content;
  margin-left: 4%;
  margin-top: 15px;
  font-weight: ${({ fontWeight }) => fontWeight ?? 'normal'};
  font-size: ${({ fontSize }) => fontSize ?? 'normal'};
  letter-spacing: ${({ letterSpacing }) => letterSpacing ?? 'normal'};
  @media screen and (max-width: 760px) {
    margin-top: 5px;
  }
`;

const Container = styled.div<{ imgUrl?: string }>`
  background-image: url(${({ imgUrl }) => imgUrl ?? '#'});
  width: 50%;
  height: 100%;
  padding: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 960px) {
    display: ${({ imgUrl }) => (imgUrl ? 'none' : 'flex')};
    width: ${({ imgUrl }) => (imgUrl ? '50%' : '100%')};
  }
`;

const Wrapper = styled.div<{ width: string; height: string }>`
  max-width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

const PoolBanner: React.FC<PoolBannerProps> = ({ ...props }) => {
  return (
    <Wrapper width={props.width} height={props.height}>
      <GradientCard gradient="linear-gradient(180deg,#feeb73,#fcd33f)">
        <StyledPoolBanner {...props}>
          <Container>
            <BannerTitle fontWeight="500" fontSize="20px">
              {props.bannerHeader}
            </BannerTitle>
            <BannerTitle letterSpacing="2px" fontWeight="1000" fontSize="44px">
              {props.bannerAmntInBubble}
            </BannerTitle>
            <BannerTitle fontWeight="700" fontSize="18px">
              {props.bannerAmntInUSD}
            </BannerTitle>
          </Container>

          <Container imgUrl={props.imgSrc} />
        </StyledPoolBanner>
      </GradientCard>
    </Wrapper>
  );
};

export default PoolBanner;
