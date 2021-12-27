import React from 'react';
import { TabButtonMenu as BlindBoxTabButtons } from 'components/TabButtonMenu';
import BlindBoxImageCard from './components/BlindBoxImageCard';
// @todo Make the rudux for the data @crackaf @Arbab
const BlindBoxTabButtonsData = {
  data: [
    {
      text: 'Kinddom',
      link: '/blindbox',
      notificationShow: false,
    },
    {
      text: 'Lalal',
      link: '/blindbox/lala',
      notificationShow: false,
    },
    {
      text: 'Orignal',
      link: '/blindbox/orignal',
      notificationShow: false,
    },
  ],
};
const BlindBoxCardData = {
  imgUrl: 'https://dl0d5jadwbp9c.cloudfront.net/cdn/img/d51088aeabe4ffa3964f0dd33de94ebe.jpeg',
  gradient: 'linear-gradient(90deg, rgb(175, 42, 205), rgb(26, 9, 4))',
  title: 'Kingdom Box',
  stageTitle: 'Phase2 Dec-17 12:00 PM +UTC',
  status: false,
  width: '1100px',
  height: '200px',
  shouldHover: true,
};
// END

const BlindBox: React.FC = () => {
  return (
    <>
      <BlindBoxTabButtons {...BlindBoxTabButtonsData} />
      <BlindBoxImageCard {...BlindBoxCardData} />
    </>
  );
};

export default BlindBox;
