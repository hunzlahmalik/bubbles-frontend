import React from 'react';
import styled, { css } from 'styled-components';
import PriceCard, { PriceCardProps } from 'components/PriceCard';
import Icon from 'components/BlindBoxIcon';
// import BlindBoxRules from '../BlindBoxRules';

const userData: PriceCardProps = { title: 'JoJo', amount: '0', usd: '0' };

// const BlindBoxRulesData = {
//   rulesContent: [
//     'You can buy Fate/Origin BOX NFT with BNB, and get a BOX randomly after purchase',
//     'Fate/Origin NFT can be staked for mining in the Fate/Origin Pool, or traded on the NFT trading market.',
//   ],
// };

export const ItemContainer = styled.div<{ height?: string; width?: string; shouldHover?: boolean }>`
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? '100%'};
  display: flex;
  flex-direction: row;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px;
  transition: all 0.3s ease-in-out;
  padding-bottom: 10px;
  margin: 15px;
  ${({ shouldHover }) =>
    shouldHover &&
    css`
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
        transform: translate3d(0px, -1px, 0px);
      }
    `}

  @media screen and (max-width: 760px) {
    width: 90%;
    height: fit-content;
    flex-direction: column;
    padding-bottom: 20px;
  }
`;

export const InnerDiv = styled.div<{ alignment?: boolean }>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: ${({ alignment }) => (alignment ? 'left' : 'center')};
  width: 100%;
  height: 100%;
  margin-top: ${({ alignment }) => (alignment ? '25px' : '20px')};
  @media screen and (max-width: 760px) {
    /* margin-bottom: -20px; */
  }
`;

export const Title = styled.div<{ fontSize?: string }>`
  font-size: ${({ fontSize }) => fontSize ?? '28px'};
  font-weight: 600;
  margin-left: 20px;
  height: fit-content;
  line-height: 1.1;
  color: #431216;
  word-break: break-word;
  @media screen and (max-width: 760px) {
    margin-bottom: 20px;
  }
`;

export const StockInfo = styled.div`
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

export const SPAN = styled.span`
  margin-left: 3px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
`;

export const Time = styled.div`
  background-color: #f7f7f783;
  height: fit-content;
  width: fit-content;
  margin-top: -5px;
  padding: 5px;
  border-radius: 5px;
  margin-left: 10px;
`;

export const Button = styled.button`
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

export const ComponentDiv = styled.div<{ isRuleBox?: boolean }>`
  height: fit-content;
  width: ${({ isRuleBox }) => (isRuleBox ? '85%' : '98%')};
  margin-left: ${({ isRuleBox }) => (isRuleBox ? '20px' : '0')};
  margin-bottom: ${({ isRuleBox }) => (isRuleBox ? '20px' : '0')};
  @media screen and (max-width: 760px) {
    margin-top: 0;
    margin-bottom: 30px;
  }
`;
