/* eslint-disable import/extensions */
import React from 'react';
import { Box, CardBody, Flex, Text, Image } from 'bubbles-uikit';
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
  border-radius: ${({ theme }) => theme.radii.default};
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
`;

const BoxLine = styled.div`
  height: 30px;
  min-width: unset;
  width: calc(100% - 26px);
  background-image: url(https://jojo.fun/img/bg-line.fea0371a.svg);
  background-repeat: repeat-x;
  background-size: auto 1px;
  margin: 0px auto;
  background-color: #fff;
  position: relative;
  background-position-x: 50%;
  background-position-y: center;
  &:before {
    left: -15px;
    transform: translate(50%) translateY(-50%);
    -webkit-transform: translate(50%) translateY(-50%);
    background-image: url(https://jojo.fun/img/icon-ticket-arrow-left.199f0487.svg);
    width: 30px;
    height: 30px;
    top: 50%;
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    content: ' ';
  }
  &:after {
    right: -15px;
    transform: translate(50%) translateY(-50%);
    -webkit-transform: translate(50%) translateY(-50%);
    background-image: url(https://jojo.fun/img/icon-ticket-arrow-left.199f0487.svg);
    width: 30px;
    height: 30px;
    top: 50%;
    left: unset;
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    content: ' ';
  }
`;
const PricedBar = styled.div`
  padding-top: 5px;
  //padding-right: 24px;
  padding-bottom: 20px;
  //padding-left: 24px;
  background-color: #fff;
  -webkit-box-flex: 1;
  flex: 1;
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
    <CardBody p="8px">
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
