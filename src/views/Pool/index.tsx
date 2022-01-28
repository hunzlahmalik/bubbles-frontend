import React from 'react';
import styled from 'styled-components';
import { Box } from 'bubbles-uikit';
import Page from 'components/Layout/Page';
import GamePool from './components/GamePool';
import PoolCard from './components/PoolCard';
import PoolBanner, { PoolBannerProps } from './components/PoolBanner';

const CardBox = styled.div`
  margin-top: 6px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 6px;
  padding-top: 32px;
  padding-right: 0px;
  padding-bottom: 32px;
  padding-left: 0px;
  padding: 32px;

  margin: auto;
  margin-top: 48px;
  position: relative;
  background-size: cover;
  display: block;
  position: relative;
  box-sizing: border-box;
  background-color: transparent;
`;
const CardDesign = styled.div`
  width: calc(70%-30px);
  background-color: transparent;
  display: flex;
  flex-wrap: wrap;
  -webkit-boc-flex: 1;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;
  margin-top: 30px;
  margin-right: auto;
  margin-bottom: 10px;
  margin-left: auto;
  border-radius: 16px;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  box-shadow: unset;
`;

const gamepooldata = {
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

const Pool: React.FC = () => {
  const bannerData: PoolBannerProps = {
    imgSrc: 'https://jojo.fun/img/banner.d9740456.png',
    width: '100%',
    height: '212px',
    bannerHeader: 'Bubbles Total Mining Pool (Bubble)',
    bannerAmntInBubble: '26,936,124,034',
    bannerAmntInUSD: '≈ $4,760,384',
  };

  // Current Data to Be displayed

  // DataGetter According to the index
  // const getData = (idx1: number, idx2: number) => {
  //   return gamepooldata;
  // };

  // // Handler for the Indexes
  // useEffect(() => {
  //   setGamepool(getData(activeIndex, nestedIndex));
  // }, [activeIndex, nestedIndex]);

  const data = [
    { id: 1, title: 'Add Nft', img: 'https://jojo.fun/img/add.e4b25d9e.svg' },
    { id: 2, title: 'Add Nft', img: 'https://jojo.fun/img/add.e4b25d9e.svg' },
    { id: 3, title: 'Add Nft', img: 'https://jojo.fun/img/add.e4b25d9e.svg' },
    { id: 4, title: 'Add Nft', img: 'https://jojo.fun/img/add.e4b25d9e.svg' },
    { id: 5, title: 'Add Nft', img: 'https://jojo.fun/img/add.e4b25d9e.svg' },
    { id: 6, title: 'Add Nft', img: 'https://jojo.fun/img/add.e4b25d9e.svg' },
    { id: 7, title: 'Add Nft', img: 'https://jojo.fun/img/add.e4b25d9e.svg' },
    { id: 8, title: 'Add Nft', img: 'https://jojo.fun/img/add.e4b25d9e.svg' },
  ];

  return (
    <Page>
      <br />
      <br />
      <PoolBanner {...bannerData} />
      <br />
      <br />
      <GamePool {...gamepooldata} />
      <CardBox>
        <CardDesign>
          {data.map((cardT) => (
            <>{PoolCard(cardT.title, cardT.img)}</>
          ))}
        </CardDesign>
      </CardBox>
    </Page>
  );
};

export default Pool;
