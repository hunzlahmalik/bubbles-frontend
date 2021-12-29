/* eslint-disable no-console */
import React, { useState } from 'react';
import Page from 'components/Layout/Page';
import TabButtonMenu, { TabButtonMenuProps } from 'components/TabButtonMenu';
import { useLocation } from 'react-router-dom';
import BlindBoxImageCard, { BlindBoxImageCardProps } from './components/BlindBoxImageCard';

export interface BlindBoxProps {
  menu: TabButtonMenuProps;
  data: {
    link: string;
    list: BlindBoxImageCardProps[];
  }[];
}

// @todo Make the rudux for the data @crackaf @Arbab
const BlindBoxData: BlindBoxProps = {
  menu: {
    data: [
      {
        text: 'Kingdom',
        link: '/blindbox/kingdom',
        showDot: false,
      },
      {
        text: 'Witcher',
        link: '/blindbox/witcher',
        showDot: false,
      },
      {
        text: 'Orignal',
        link: '/blindbox/orignal',
        showDot: false,
      },
    ],
    scale: 'md',
  },
  data: [
    {
      link: '/kingdom',
      list: [
        {
          imgUrl: 'https://dl0d5jadwbp9c.cloudfront.net/cdn/img/d51088aeabe4ffa3964f0dd33de94ebe.jpeg',
          gradient: 'linear-gradient(90deg, rgb(175, 42, 205), rgb(26, 9, 4))',
          title: 'Kingdom Box',
          stageTitle: 'Phase2 Dec-17 12:00 PM +UTC',
          url: '/#sfasfag',
          isSoldOut: false,
          width: '1100px',
          height: '200px',
          shouldHover: true,
        },
        {
          imgUrl: 'https://dl0d5jadwbp9c.cloudfront.net/cdn/img/d51088aeabe4ffa3964f0dd33de94ebe.jpeg',
          gradient: 'linear-gradient(90deg, rgb(175, 42, 205), rgb(26, 9, 4))',
          title: 'Kingdom Box',
          stageTitle: 'Phase2 Dec-17 12:00 PM +UTC',
          url: '/#sdf',
          isSoldOut: false,
          width: '1100px',
          height: '200px',
          shouldHover: true,
        },
        {
          imgUrl: 'https://dl0d5jadwbp9c.cloudfront.net/cdn/img/d51088aeabe4ffa3964f0dd33de94ebe.jpeg',
          gradient: 'linear-gradient(90deg, rgb(175, 42, 205), rgb(26, 9, 4))',
          title: 'Kingdom Box',
          stageTitle: 'Phase2 Dec-17 12:00 PM +UTC',
          url: '/#asaaas',
          isSoldOut: false,
          width: '1100px',
          height: '200px',
          shouldHover: true,
        },
      ],
    },
    {
      link: '/witcher',
      list: [
        {
          imgUrl: 'https://dl0d5jadwbp9c.cloudfront.net/cdn/img/d51088aeabe4ffa3964f0dd33de94ebe.jpeg',
          gradient: 'linear-gradient(90deg, rgb(175, 42, 205), rgb(26, 9, 4))',
          title: 'Kingdom Box',
          stageTitle: 'Phase2 Dec-17 12:00 PM +UTC',
          url: '/asdfasdf',
          isSoldOut: false,
          width: '1100px',
          height: '200px',
          shouldHover: true,
        },
        {
          imgUrl: 'https://dl0d5jadwbp9c.cloudfront.net/cdn/img/d51088aeabe4ffa3964f0dd33de94ebe.jpeg',
          gradient: 'linear-gradient(90deg, rgb(175, 42, 205), rgb(26, 9, 4))',
          title: 'Kingdom Box',
          stageTitle: 'Phase2 Dec-17 12:00 PM +UTC',
          url: '/#asdfasdf',
          isSoldOut: false,
          width: '1100px',
          height: '200px',
          shouldHover: true,
        },
      ],
    },
    {
      link: '/orignal',
      list: [
        {
          imgUrl: 'https://dl0d5jadwbp9c.cloudfront.net/cdn/img/d51088aeabe4ffa3964f0dd33de94ebe.jpeg',
          gradient: 'linear-gradient(90deg, rgb(175, 42, 205), rgb(26, 9, 4))',
          title: 'Kingdom Box',
          stageTitle: 'Phase2 Dec-17 12:00 PM +UTC',
          url: '/#',
          isSoldOut: false,
          width: '1100px',
          height: '200px',
          shouldHover: true,
        },
      ],
    },
  ],
};
// END

const BlindBox: React.FC = () => {
  const { pathname } = useLocation();
  // const { data: farmsLP, userDataLoaded } = useFarms();  In future get the data like this......

  // Getting the active page Link
  const getActiveLink = () => {
    return (
      (BlindBoxData.menu.data.find((element) => pathname.includes(element.link)) &&
        BlindBoxData.menu.data.find((element) => pathname.includes(element.link)).link) ||
      (BlindBoxData.menu.data[0] && BlindBoxData.menu.data[0].link) ||
      '#'
    );
  };
  // Getting the active page list data
  const getActiveList = (alink: string) => {
    return (
      (BlindBoxData.data.find((element) => alink.includes(element.link)) &&
        BlindBoxData.data.find((element) => alink.includes(element.link)).list) ||
      (BlindBoxData.data[0] && BlindBoxData.data[0].list) ||
      []
    );
  };

  // Getting the page link and comparing it with the data
  const [activeLink, setActiveLink] = useState(getActiveLink());

  // Getting the list data
  const [activeList, setActiveList] = useState(getActiveList(activeLink));

  // Handle the change here. TODO will later useEffect instead of useState becuase it's good Practice
  const handleMenuButton = () => {
    setActiveLink(getActiveLink());
    setActiveList(getActiveList(activeLink));
  };

  const renderContent = (): JSX.Element => {
    return (
      <>
        <TabButtonMenu {...BlindBoxData.menu} onClick={() => handleMenuButton()} />
        <br />
        <br />
        <br />
        {activeList.map((data) => (
          <div key={data.url}>
            <BlindBoxImageCard {...data} />
            <br />
            <br />
          </div>
        ))}
      </>
    );
  };

  return <Page>{renderContent()} </Page>;
};

export default BlindBox;
