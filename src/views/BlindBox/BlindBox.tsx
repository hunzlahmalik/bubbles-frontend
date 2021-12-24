import React from 'react';
import { TabButtonMenu as BlindBoxTabButtons } from 'components/TabButtonMenu';

// @todo Make the rudux for the data @crackaf
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
// END

const BlindBox: React.FC = () => {
  return <BlindBoxTabButtons {...BlindBoxTabButtonsData} />;
};

export default BlindBox;
