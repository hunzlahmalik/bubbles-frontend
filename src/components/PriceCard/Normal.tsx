import React from 'react';
import styled from 'styled-components';
import { CardProps, darkColors } from 'bubbles-uikit';

const StyledPriceCard = styled.div<CardProps>`
  -webkit-box-flex: 1;
  flex: 1;
  min-width: 300px;
  max-width: 350px;
  margin-top: 24px;
  margin-right: 12px;
  margin-bottom: 0px;
  margin-left: 12px;
  box-shadow: 0 5px 5px -3px ${darkColors.cardShadow};
  background: ${darkColors.background};
  border: 1px solid ${darkColors.cardBorder};
  border-radius: 24px;
  padding: 24px;
`;

const PriceCardTitle = styled.div<CardProps>`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 24px;
  color: ${darkColors.text};
`;

const PriceCardValue = styled.div<CardProps>`
  font-size: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 24px;
  color: ${darkColors.text};
  line-height: 1.1;
  margin-top: 10px;
  margin-left: 4px;
`;

const PriceCardAmount = styled.div<CardProps>`
  font-size: 14px;
  color: ${darkColors.text};
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
