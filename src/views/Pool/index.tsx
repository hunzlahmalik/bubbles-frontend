import React, { useState } from 'react';
// import Page from 'components/Layout/Page';
import TabButtonMenu from 'components/TabButtonMenu';
import ImageCard, { ImageCardProps } from 'components/ImageCard';
import GradientCard from 'components/GradientCard';
import styled from 'styled-components';
import GamePool from './components/GamePool';
import PoolCard from './components/PoolCard';

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
  const imageData: ImageCardProps = {
    imgUrl: 'https://jojo.fun/img/banner.d9740456.png',
    title: 'Kingdom Box',
    width: '1100px',
    height: '200px',
    shouldHover: true,
  };

  const menu = [
    {
      text: 'Kingdom',
      showDot: false,
      subMenu: [
        {
          text: 'Witcher',
          link: '/blindbox/witcher',
          showDot: false,
        },
        {
          text: 'Witcher',
          link: '/blindbox/witcher',
          showDot: false,
        },
      ],
    },
    {
      text: 'Origon',
      showDot: false,
      subMenu: [
        {
          text: 'Witcher',
          link: '/blindbox/witcher',
          showDot: false,
        },
        {
          text: 'Witcher',
          link: '/blindbox/witcher',
          showDot: false,
        },
        {
          text: 'Witcher',
          link: '/blindbox/witcher',
          showDot: false,
        },
        {
          text: 'Witcher',
          link: '/blindbox/witcher',
          showDot: false,
        },
      ],
    },
  ];

  // Current Data to Be displayed
  // const [gamepool, setGamepool] = useState(Object);
  // ActiveIndex this will move the nested menus according to the clicked data
  const [activeIndex, setActiveIndex] = useState(0);
  // NestedIndex this will move the component according to the clicked data
  const [nestedIndex, setNestedIndex] = useState(0);

  // DataGetter According to the index
  // const getData = (idx1: number, idx2: number) => {
  //   return gamepooldata;
  // };

  // // Handler for the Indexes
  // useEffect(() => {
  //   setGamepool(getData(activeIndex, nestedIndex));
  // }, [activeIndex, nestedIndex]);

  // Making data for the first Menu
  const menu1 = menu.map((ele) => {
    return (({ showDot, text }) => ({ showDot, text }))(ele);
  });

  // Making data for the nested Menu
  const menu2 = menu.map((ele) => ele.subMenu);

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
    <>
      <TabButtonMenu data={menu1} onClick={setActiveIndex} activeIndex={activeIndex} />
      <br />
      <TabButtonMenu data={menu2[activeIndex]} onClick={setNestedIndex} activeIndex={nestedIndex} />
      <GradientCard width="1100px" height="200px" gradient="linear-gradient(90deg, rgb(175, 42, 205), rgb(26, 9, 4))">
        <ImageCard {...imageData} />
      </GradientCard>
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
    </>
  );
};

export default Pool;
