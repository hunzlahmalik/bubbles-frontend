import React from 'react';
import { Card, BinanceIcon, Box, Flex, FlexProps, Text } from 'bubbles-uikit';
import { Price } from '@pancakeswap/sdk';
// import { useTranslation } from 'contexts/Localization';
import { multiplyPriceByAmount } from 'utils/prices';
import styled from 'styled-components';

interface BNBAmountLabelProps extends FlexProps {
  amount: number;
}

export const BNBAmountLabel: React.FC<BNBAmountLabelProps> = ({ amount, ...props }) => (
  <Flex alignItems="center" {...props}>
    <BinanceIcon width="16px" mx="4px" />
    <Text fontWeight="600">
      {amount.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 4,
      })}
    </Text>
  </Flex>
);

interface CostLabelProps extends FlexProps {
  cost: number;
  bnbBusdPrice: Price;
}

export const CostLabel: React.FC<CostLabelProps> = ({ cost, bnbBusdPrice, ...props }) => {
  const priceInUsd = multiplyPriceByAmount(bnbBusdPrice, cost);

  return (
    <Flex alignItems="center" {...props}>
      {priceInUsd > 0 && (
        <Text fontWeight="400" style={{ textAlign: 'center', fontSize: '18px' }}>{`$${priceInUsd.toLocaleString(
          undefined,
          {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          },
        )}`}</Text>
      )}
      {/* <BNBAmountLabel amount={cost} /> */}
    </Flex>
  );
};

interface MetaRowProps extends FlexProps {
  title: string;
}

export const MetaRow: React.FC<MetaRowProps> = ({ title, children, ...props }) => (
  <Flex alignItems="center" justifyContent="space-between" {...props}>
    <Text fontWeight="400" style={{ textAlign: 'center', fontSize: '18px' }}>
      {title}
    </Text>
    <Box>{children}</Box>
  </Flex>
);

export const StyledCollectionCard = styled(Card)`
  border-radius: 16px;
  max-width: 400px;
  transition: opacity 200ms;

  & > div {
    border-radius: 16px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }
`;
