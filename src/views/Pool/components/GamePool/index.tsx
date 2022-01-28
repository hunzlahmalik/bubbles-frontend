import React from 'react';
import styled from 'styled-components';
import PriceCard, { PriceCardLarge, PriceCardLargeProps, PriceCardProps } from 'components/PriceCard';
import { CardProps } from 'bubbles-uikit';

const StyledGamePool = styled.div`
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 3%), 0 4px 6px -2px rgb(0 0 0 / 1%);
  background: #fff;
  border-radius: 32px;
  padding: 32px;
  max-width: 100%;
  min-width: 230px;
`;

const GamePoolWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
  margin-right: -12px;
  margin-bottom: 0px;
  margin-left: -12px;
`;

export interface GamePoolProps extends CardProps {
  large?: PriceCardLargeProps[];
  normal?: PriceCardProps[];
}

const GamePool: React.FC<GamePoolProps> = ({ large, normal }) => {
  // Get this data from redux @crackaf
  const data: GamePoolProps = {
    large: [
      {
        title: 'Game Base Pool',
        amount: '600,810,000',
        usd: '207,533',
        coinUrl: 'https://jojo.fun/img/icon-jojo.dd768e0c.png',
      },
    ],
    normal: [
      {
        title: 'Game Base Pool',
        amount: '60000',
        usd: '203',
        coinUrl: 'https://jojo.fun/img/icon-jojo.dd768e0c.png',
      },
      {
        title: 'Game Base Pool',
        amount: '60000',
        usd: '203',
        coinUrl: 'https://jojo.fun/img/icon-jojo.dd768e0c.png',
      },
      {
        title: 'Game Base Pool',
        amount: '60000',
        usd: '203',
        coinUrl: 'https://jojo.fun/img/icon-jojo.dd768e0c.png',
      },
    ],
  };

  return (
    <StyledGamePool>
      {large && large.length > 0 && (
        <GamePoolWrap>
          {data.large.map((ele) => (
            <PriceCardLarge key={ele.amount} {...ele} />
          ))}
        </GamePoolWrap>
      )}

      {normal && normal.length > 0 && (
        <GamePoolWrap>
          {data.normal.map((ele) => (
            <PriceCard key={ele.amount} {...ele} />
          ))}
        </GamePoolWrap>
      )}
    </StyledGamePool>
  );
};

export default GamePool;
