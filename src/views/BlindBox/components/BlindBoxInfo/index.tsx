import React from 'react';
import styled from 'styled-components';
import PriceCard, { PriceCardProps } from 'components/PriceCard';
import Icon from 'components/BlindBoxIcon';
import ItemRules from 'components/Rules';
import { darkColors } from 'bubbles-uikit';
import { ItemContainer, InnerDiv, Title } from '../BlindBoxStyles';
import BuyEggButton from '../BuyEggButton';

const userData: PriceCardProps = { title: 'JoJo', amount: '0', usd: '0' };

const BlindBoxRulesData = {
  title: 'Blindbox Rules',
  moreinfo: '#',
  rulesContent: [
    'You can buy Fate/Origin BOX NFT with BNB, and get a BOX randomly after purchase',
    'Fate/Origin NFT can be staked for mining in the Fate/Origin Pool, or traded on the NFT trading market.',
  ],
};

const StockInfo = styled.div`
  height: fit-content;
  display: flex;
  width: 100%;
  color: ${darkColors.text};
  margin: 0 20px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  @media screen and (max-width: 760px) {
    margin-bottom: 20px;
  }
`;

const SPAN = styled.span`
  margin-left: 3px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
`;

const Time = styled.div`
  box-shadow: 0 5px 5px -3px ${darkColors.cardShadow}, 0 4px 6px -2px ${darkColors.cardShadow};
  border: 1px solid ${darkColors.cardBorder};
  background: ${darkColors.neutralColors.gray21};
  border-radius: 10px;
  height: fit-content;
  width: fit-content;
  margin-top: -5px;
  padding: 5px;
  border-radius: 5px;
  margin-left: 10px;
`;

const ComponentDiv = styled.div<{ isRuleBox?: boolean }>`
  height: fit-content;
  width: ${({ isRuleBox }) => (isRuleBox ? '85%' : '98%')};
  margin-left: ${({ isRuleBox }) => (isRuleBox ? '10px' : '0')};
  @media screen and (max-width: 760px) {
    margin-top: 0;
    margin-bottom: 30px;
  }
`;

/**
 *
 * @param title (title of BlindBox)
 * @param stock (number of boxes left in stock)
 * @param endTime (time at which current phase ends)
 * @returns Blindbox item
 */
function BlindBoxInfo({ title, stock, creationTime }: { title: string; stock: number; creationTime: Date }) {
  return (
    <ItemContainer>
      <InnerDiv>
        <div
          style={{
            width: '500px',
            height: '500px',
            // marginBottom: '10px',
          }}
        >
          <Icon backgroundImage="https://dl0d5jadwbp9c.cloudfront.net/cdn/img/4c5c4d784f4324884beb335877cb8ff1.png" />
        </div>
      </InnerDiv>
      <InnerDiv alignment>
        <Title>{title}</Title>
        <StockInfo>
          Remaining Amount:
          <SPAN>{stock}</SPAN>
        </StockInfo>
        <StockInfo>
          Ended
          <Time>00:00:00</Time>
        </StockInfo>
        <ComponentDiv>
          <PriceCard {...userData} />
        </ComponentDiv>
        <BuyEggButton />
        <ComponentDiv isRuleBox>
          <ItemRules {...BlindBoxRulesData} />
        </ComponentDiv>
      </InnerDiv>
    </ItemContainer>
  );
}

export default BlindBoxInfo;
