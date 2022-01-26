import React from 'react';
import PriceCard from 'components/PriceCard';
import { StyledStats, StatsWrap } from '../StatsStyles';

function TokenStats() {
  const normal = [
    {
      title: 'Game Base Pool',
      amount: '356,001,695,362',
      usd: '203',
    },
    {
      title: 'Game Base Pool',
      amount: '60000',
      usd: '203',
    },
    {
      title: 'Game Base Pool',
      amount: '60000',
      usd: '203',
    },
    {
      title: 'Game Base Pool',
      amount: '60000',
      usd: '203',
    },
    {
      title: 'Game Base Pool',
      amount: '60000',
      usd: '203',
    },
    {
      title: 'Game Base Pool',
      amount: '60000',
      usd: '203',
    },
  ];

  return (
    <StyledStats>
      <StatsWrap>
        {normal.map((item) => {
          return <PriceCard key={item.amount} {...item} />;
        })}
      </StatsWrap>
    </StyledStats>
  );
}

export default TokenStats;
