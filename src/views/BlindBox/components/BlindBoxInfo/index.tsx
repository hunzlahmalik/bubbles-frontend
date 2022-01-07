import React from 'react';
import styled from 'styled-components';
import PriceCard, { PriceCardProps } from 'components/PriceCard';
import Icon from 'components/BlindBoxIcon';
import ItemRules from 'components/Rules';
import { ItemContainer, InnerDiv, Title } from '../BlindBoxStyles';

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
  color: #431216;
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
  background-color: #f7f7f783;
  height: fit-content;
  width: fit-content;
  margin-top: -5px;
  padding: 5px;
  border-radius: 5px;
  margin-left: 10px;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  margin: 0 20px;
  padding: 0;
  border-radius: 10px;
  position: 'relative';
  border: none;
  background-color: #febf32;
  color: black;
  @media screen and (max-width: 760px) {
    margin-bottom: 30px;
  }
`;

const ComponentDiv = styled.div<{ isRuleBox?: boolean }>`
  height: fit-content;
  width: ${({ isRuleBox }) => (isRuleBox ? '85%' : '98%')};
  margin-left: ${({ isRuleBox }) => (isRuleBox ? '20px' : '0')};
  margin-bottom: ${({ isRuleBox }) => (isRuleBox ? '20px' : '0')};
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
  // const imageDimension = {
  //   1: {
  //     height: '100%',
  //     width: '100%',
  //   },
  // };
  return (
    <ItemContainer>
      <InnerDiv>
        <div
          style={{
            width: '500px',
            height: '500px',
            marginBottom: '10px',
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
        <Button>Buy Now</Button>
        <ComponentDiv isRuleBox>
          <ItemRules {...BlindBoxRulesData} />
        </ComponentDiv>
      </InnerDiv>
    </ItemContainer>
  );
}

export default BlindBoxInfo;
