import { CardProps } from 'bubbles-uikit';
import React from 'react';
import styled from 'styled-components';
import Icon from 'components/BlindBoxIcon';
import { OuterDiv } from 'components/BlindBoxIcon/BlindBoxIconStyles';
import { ItemContainer, InnerDiv, Title } from '../BlindBoxStyles';

const Stats = styled.div<CardProps>`
  text-align: left;
  margin-left: 25px;
  margin-top: 20px;
`;

const StatsInfo = styled.div<CardProps>`
  margin: 3px 0;
  color: ${({ color }) => color || '#694f4e'};
`;

const ValueSpan = styled.span<CardProps>`
  color: ${({ color }) => color || 'black'};
  font-weight: 800;
  margin-left: 5px;
`;

export interface BlindBoxItemProps extends CardProps {
  title: string;
  imgUrl: string;
  iconUrl?: string;
  hoverImgUrl?: string;
  stats: {
    title: string;
    value: string;
    color?: string;
  }[];
  width?: string;
  height?: string;
}
function BlindBoxItem({ title, imgUrl, stats, iconUrl, hoverImgUrl, width, height }: BlindBoxItemProps): JSX.Element {
  return (
    <>
      <ItemContainer shouldHover width={width} height={height}>
        <OuterDiv>
          <InnerDiv>
            <div
              style={{
                height: '140px',
                width: '140px',
              }}
            >
              <Icon backgroundImage={imgUrl} hoverImage={hoverImgUrl} item />
            </div>
          </InnerDiv>
          <InnerDiv>
            <div
              style={{
                marginLeft: '-40%',
              }}
            >
              <Title fontSize="15px">
                <img
                  src={iconUrl}
                  alt=""
                  style={{
                    verticalAlign: 'middle',
                  }}
                />
                <span
                  style={{
                    marginLeft: '5px',
                  }}
                >
                  {title}
                </span>
              </Title>
              <Stats>
                {stats.map((item) => {
                  return (
                    <StatsInfo>
                      {item.title}:<ValueSpan color={item.color}>{item.value}</ValueSpan>
                    </StatsInfo>
                  );
                })}
              </Stats>
            </div>
          </InnerDiv>
        </OuterDiv>
      </ItemContainer>
    </>
  );
}

export default BlindBoxItem;
