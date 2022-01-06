import React from 'react';
import { Box, Flex, Heading } from 'bubbles-uikit';
import BlindBoxItem, { BlindBoxItemProps } from '../BlindBoxItem';
import BlindBoxInfo from '../BlindBoxInfo';

const BlindboxItemData: BlindBoxItemProps = {
  title: 'Ranger Girl',
  iconUrl: '	https://dl0d5jadwbp9c.cloudfront.net/cdn/img/35737edafdd527f024bdd1aaf7fe2058.png',
  imgUrl: 'https://dl0d5jadwbp9c.cloudfront.net/cdn/img/12e630fda585d8f2758ae780baab5b78.png',
  hoverImgUrl: 'https://dl0d5jadwbp9c.cloudfront.net/cdn/img/67c670aff8692b481b1f133e62392656.gif',
  stats: [
    {
      title: 'Probablity',
      value: '12.69%',
    },
    {
      title: 'Supply',
      value: '1800',
    },
    {
      title: 'HashRate',
      value: 'x150',
      color: '#f15f61',
    },
  ],
  height: '180px',
  width: '350px',
};

const BlindBoxBuy = ({ id }: { id: number }) => {
  return (
    <>
      <Heading marginLeft="15px" marginBottom="20px" scale="xl">
        BlindBox
      </Heading>
      <Box marginBottom="50px">
        <BlindBoxInfo title="info box" stock={4} creationTime={undefined} />
      </Box>
      <Heading marginLeft="15px" marginBottom="20px" scale="lg">
        Bubble Treasure
      </Heading>
      <Flex flexWrap="wrap">
        <BlindBoxItem {...BlindboxItemData} />
        <BlindBoxItem {...BlindboxItemData} />
        <BlindBoxItem {...BlindboxItemData} />
        <BlindBoxItem {...BlindboxItemData} />
        <BlindBoxItem {...BlindboxItemData} />
        <BlindBoxItem {...BlindboxItemData} />
        <BlindBoxItem {...BlindboxItemData} />
        <BlindBoxItem {...BlindboxItemData} />
      </Flex>
    </>
  );
};

export default BlindBoxBuy;
