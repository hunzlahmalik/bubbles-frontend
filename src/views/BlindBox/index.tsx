import React, { useEffect, useState } from 'react';
import Page from 'components/Layout/Page';
import TabButtonMenu, { TabButtonProps } from 'components/TabButtonMenu';
import { Redirect, useParams } from 'react-router-dom';
import BlindBoxImageCard, { BlindBoxImageCardProps } from './components/BlindBoxImageCard';
import BlindBoxBuy from './components/BlindBoxBuy';

export interface BlindBoxProps {
  data: {
    button: TabButtonProps;
    list: BlindBoxImageCardProps[];
  }[];
}

// @todo Make the rudux for the data @crackaf @Arbab
const BlindBoxData: BlindBoxProps = {
  data: [
    {
      button: {
        text: 'Kingdom',
        link: '/blindbox/kingdom',
        showDot: false,
      },
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
      button: {
        text: 'Witcher',
        link: '/blindbox/witcher',
        showDot: false,
      },
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
      button: {
        text: 'Orignal',
        link: '/blindbox/orignal',
        showDot: false,
      },
      list: [
        {
          imgUrl: 'https://dl0d5jadwbp9c.cloudfront.net/cdn/img/d51088aeabe4ffa3964f0dd33de94ebe.jpeg',
          gradient: 'linear-gradient(90deg, rgb(175, 42, 205), rgb(26, 9, 4))',
          title: 'Kingdom Box',
          stageTitle: 'Phase2 Dec-17 12:00 PM +UTC',
          id: '12',
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

export interface BlindBoxUrlProps {
  box?: string;
  id?: string | number;
}

const BlindBox: React.FC = () => {
  // const { pathname } = useLocation();
  const urlPramas: BlindBoxUrlProps = useParams();

  const isBox = 'box' in urlPramas;
  const isId = 'id' in urlPramas;
  const isData = BlindBoxData.data && BlindBoxData.data.length > 0;

  const isValidBox = isBox && isData && BlindBoxData.data.findIndex((ele) => ele.button.link === urlPramas.box) >= 0;
  // const isValidId = isValidBox && isId && isData;

  const getActiveLink = () => {
    if (isValidBox) return BlindBoxData.data.findIndex((ele) => ele.button.link === urlPramas.box);
    return 0;
  };

  const menu = BlindBoxData.data.map((ele) => ele.button);

  // Getting the list data
  const [activeList, setActiveList] = useState([]);

  // Index Handler
  const [index, setIndex] = useState(getActiveLink());

  useEffect(() => {
    setActiveList((BlindBoxData.data[index] && BlindBoxData.data[index].list) || BlindBoxData.data[0].list);
  }, [index]);

  const renderContent = (): JSX.Element => {
    if (!isBox && !isId && isData) return <Redirect to={BlindBoxData.data[0].button.link} />;
    if (isId) return <BlindBoxBuy id={1} />;
    return (
      <>
        <TabButtonMenu data={menu} onClick={setIndex} activeIndex={index} />
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
