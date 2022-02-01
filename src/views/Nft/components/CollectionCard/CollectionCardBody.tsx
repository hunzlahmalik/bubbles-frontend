/* eslint-disable import/extensions */
import React from 'react';
import { Box, CardBody, Flex, Text, Image, darkColors } from 'bubbles-uikit';
// import { useTranslation } from 'contexts/Localization';
// import { useBNBBusdPrice } from 'hooks/useBUSDPrice';
import styled from 'styled-components';
// import PreviewImage from './PreviewImage'
// import { CostLabel, LowestPriceMetaRow, MetaRow } from './styles'
// import LocationTag from './LocationTag'
import { CollectionCardProps } from './types';
// import { useGetLowestPriceFromNft } from '../../hooks/useGetLowestPrice';
// import { pancakeBunniesAddress } from '../../constants';
// import NFTMedia from '../NFTMedia';
// import { CostLabel, MetaRow } from './styles';

export const RoundedImage = styled(Image)`
  height: max-content;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-right-radius: ${({ theme }) => theme.radii.default};
  border-top-left-radius: ${({ theme }) => theme.radii.default};
  overflow: hidden;
  & > img {
    object-fit: contain;
  }
`;

const MediaBox = styled.div`
  position: relative;
  padding-bottom: 100%;
  height: 0;
  /* border-top-radius: 16px; */
  overflow: hidden;
  // height:100%;
  // width:100%;
`;
const TextStyle = styled.div`
  font-size: 24px;
  line-height: 1.2;
  word-break: break-word;
  //padding-left: 24px;
  font-weight: 700;
  overflow: hidde;
  text-overflow: ellipisis;
  display: -webkit-box;
  margin-top: 20px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
  margin-left: 10px;
  margin-right: 10px;
  color: ${darkColors.textSubtle};
`;

const BoxLine = styled.div`
  height: 30px;
  min-width: unset;
  width: calc(100% - 26px);
  background-image: url(https://jojo.fun/img/bg-line.fea0371a.svg);
  background-repeat: repeat-x;
  background-size: auto 1px;
  margin: 0px auto;
  color: inherit;
  position: relative;
  background-position-x: 50%;
  background-position-y: center;
`;
const PricedBar = styled.div`
  padding-top: 5px;
  //padding-right: 24px;
  padding-bottom: 20px;
  //padding-left: 24px;
  color: inherit;
  -webkit-box-flex: 1;
  flex: 1;
  margin-left: 10px;
  margin-right: 10px;
`;

const CollectionCardBody: React.FC<CollectionCardProps> = ({
  collection,
  collectionImg,
  collectionVolume,
  collectionItems,
  collectionSupply,
  ...props
}) => {
  const { name } = collection;
  // const {t}=useTranslation();co

  return (
    <CardBody p="0px">
      <MediaBox>
        <RoundedImage src={collectionImg} width={400} height={400} alt={collection.name} {...props} />{' '}
      </MediaBox>
      <TextStyle>{name}</TextStyle>
      <BoxLine />
      <PricedBar>
        <Box pt="8px">
          <div style={{ textAlign: 'center', alignItems: 'center', marginTop: '1px', display: 'block' }}>
            <Flex alignItems="center" justifyContent="space-between" marginTop="1px" alignContent="center">
              <Text fontWeight="600">Volume</Text>
              <Text fontWeight="600">
                {parseFloat(collectionVolume).toLocaleString(undefined, {
                  minimumFractionDigits: 3,
                  maximumFractionDigits: 3,
                })}
              </Text>
            </Flex>
            <Flex alignItems="center" justifyContent="space-between" marginTop="1px" alignContent="center">
              <Text fontWeight="600">Items</Text>
              <Text fontWeight="600">{collectionItems}</Text>
            </Flex>
            <Flex alignItems="center" justifyContent="space-between" marginTop="1px" alignContent="center">
              <Text fontWeight="600">Supply</Text>
              <Text fontWeight="600">{collectionSupply}</Text>
            </Flex>
          </div>
        </Box>
      </PricedBar>
    </CardBody>
  );
};

export default CollectionCardBody;
