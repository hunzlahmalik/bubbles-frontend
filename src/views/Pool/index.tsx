import React, { useState, useEffect } from 'react';
import Page from 'components/Layout/Page';
import TabButtonMenu, { TabButtonMenuProps } from 'components/TabButtonMenu';
import ImageCard, { ImageCardProps } from 'components/ImageCard';
import GradientCard from 'components/GradientCard';
import GamePool from './components/GamePool';

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
  const [gamepool, setGamepool] = useState(Object);
  // ActiveIndex this will move the nested menus according to the clicked data
  const [activeIndex, setActiveIndex] = useState(0);
  // NestedIndex this will move the component according to the clicked data
  const [nestedIndex, setNestedIndex] = useState(0);

  // DataGetter According to the index
  const getData = (idx1: number, idx2: number) => {
    return gamepooldata;
  };

  // // Handler for the Indexes
  // useEffect(() => {
  //   setGamepool(getData(activeIndex, nestedIndex));
  // }, [activeIndex, nestedIndex]);

  // Making data for the first Menu
  const menu1 = menu.map((ele) => {
    return (({ showDot, text }) => ({ showDot, text }))(ele);
  });

  console.log(menu);
  console.log(menu1);

  // Making data for the nested Menu
  const menu2 = menu.map((ele) => ele.subMenu);

  console.log(menu2);

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
      <GamePool />
    </>
  );
};

export default Pool;
