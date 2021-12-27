import React from 'react';
import { TabButtonMenu as BlindBoxTabButtons } from 'components/TabButtonMenu';
import BlindBoxCard from './components/BlindBoxCard';
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
  BackgroundImage: 'https://dl0d5jadwbp9c.cloudfront.net/cdn/img/d51088aeabe4ffa3964f0dd33de94ebe.jpeg',
  gradient: 'linear-gradient(90deg, rgb(175, 42, 205), rgb(26, 9, 4))',
  title: 'Kingdom Box',
  stageTitle: 'Phase2 Dec-17 12:00 PM +UTC',
  status: false,
};
// END

const BlindBox: React.FC = () => {
  return (
    <>
      <BlindBoxTabButtons {...BlindBoxTabButtonsData} />
      <BlindBoxCard {...BlindBoxCardData} />
    </>
  );
};

export default BlindBox;
