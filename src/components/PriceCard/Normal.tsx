// Added by @ash_ch

import React from 'react';
import styled from 'styled-components';
import { CardProps } from 'bubbles-uikit';

const StyledPriceCard = styled.div<CardProps>`
  -webkit-box-flex: 1;
  flex: 1;
  min-width: 250px;
  margin-top: 24px;
  margin-right: 12px;
  margin-bottom: 0px;
  margin-left: 12px;
  box-shadow: 2px 4px 8px 0 rgb(0 0 0 / 6%), 0 -1px 2px 0 rgb(0 0 0 / 2%);
  border-radius: 24px;
  padding: 24px;
`;

const PriceCardTitle = styled.div<CardProps>`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 24px;
  color: #694f4e;
`;

const PriceCardValue = styled.div<CardProps>`
  font-size: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 24px;
  color: #431216;
  line-height: 1.1;
  margin-top: 10px;
  margin-left: 4px;
`;

const PriceCardAmount = styled.div<CardProps>`
  font-size: 14px;
  color: #694f4e;
  margin-left: 4px;
  margin-top: 20px;
`;

const PriceCardIcon = styled.div<CardProps>`
  display: flex;
  align-items: center;
`;

export interface PriceCardProps extends CardProps {
  title: string;
  amount: number | string;
  usd?: string;
  coinUrl?: string;
}

// "https://jojo.fun/img/icon-jojo.dd768e0c.png"

export const PriceCard: React.FC<PriceCardProps> = ({ title, amount, coinUrl, usd, ...props }) => {
  return (
    <>
      <StyledPriceCard {...props}>
        <PriceCardTitle {...props}>{title}</PriceCardTitle>
        <PriceCardIcon {...props}>
          {coinUrl && <img style={{ height: '24px', width: '24px', marginTop: '10px' }} alt="nothing" src={coinUrl} />}
          <PriceCardValue {...props}>{amount}</PriceCardValue>
          {usd && <PriceCardAmount {...props}>≈ ${usd}</PriceCardAmount>}
        </PriceCardIcon>
      </StyledPriceCard>
    </>
  );
};

export default PriceCard;
