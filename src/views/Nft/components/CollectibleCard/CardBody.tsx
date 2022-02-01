/* eslint-disable react/jsx-no-undef */

import React from 'react';
import { Box, CardBody, Flex, Text, BinanceIcon, darkColors } from 'bubbles-uikit';
import { useTranslation } from 'contexts/Localization';
import { useBNBBusdPrice } from 'hooks/useBUSDPrice';
import styled from 'styled-components';
import PreviewImage from './PreviewImage';
import { CostLabel, LowestPriceMetaRow, MetaRow } from './styles';
// import LocationTag from './LocationTag';
import { CollectibleCardProps } from './types';
import { useGetLowestPriceFromNft } from '../../market/hooks/useGetLowestPrice';
import { pancakeBunniesAddress } from '../../market/constants';
import NFTMedia from '../NFTMedia';

const MediaBox = styled.div`
  position: relative;
  padding-bottom: 100%;
  height: 0;
  overflow: hidden;
  width: 100%;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-right-radius: ${({ theme }) => theme.radii.default};
  border-top-left-radius: ${({ theme }) => theme.radii.default};
`;
const TextStyle = styled.div`
  font-size: 24px;
  line-height: 1.2;
  word-break: break-word;
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
  color: ${darkColors.textSubtle};
  text-overflow: ellipsis;
  margin-left: 10px;
  margin-right: 10px;
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
  margin-left: 10px;
  margin-right: 10px;
  flex: 1;
`;

const CollectibleCardBody: React.FC<CollectibleCardProps> = ({ nft, currentAskPrice, isUserNft }) => {
  const { t } = useTranslation();
  const { name } = nft;
  const bnbBusdPrice = useBNBBusdPrice();
  const isPancakeBunny = nft.collectionAddress?.toLowerCase() === pancakeBunniesAddress.toLowerCase();
  const { isFetching, lowestPrice } = useGetLowestPriceFromNft(nft);

  return (
    <CardBody p="0px">
      <MediaBox>
        <NFTMedia as={PreviewImage} nft={nft} width={500} height={500} />
      </MediaBox>
      <TextStyle>
        {name}
        {/* <Text as="h4" fontWeight="600" mb="8px">
        {name}
      </Text> */}
      </TextStyle>
      <BoxLine />
      <PricedBar>
        <Box pt="8px">
          {isPancakeBunny && (
            <>
              <LowestPriceMetaRow lowestPrice={lowestPrice} isFetching={isFetching} bnbBusdPrice={bnbBusdPrice} />
              <div
                style={{
                  textAlign: 'center',
                  alignItems: 'center',
                  marginTop: '1px',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Text fontWeight="600" style={{ textAlign: 'center', fontSize: '20px' }}>
                  {lowestPrice}
                </Text>
                <Flex alignItems="center">
                  <BinanceIcon width="16px" mx="4px" />
                  <Text fontWeight="600">JOJO</Text>
                </Flex>
              </div>
            </>
          )}
          {currentAskPrice && (
            <>
              <MetaRow title={isUserNft ? t('Your price') : t('Asking price')}>
                <CostLabel cost={currentAskPrice} bnbBusdPrice={bnbBusdPrice} />
              </MetaRow>
              <div
                style={{
                  textAlign: 'center',
                  alignItems: 'center',
                  marginTop: '1px',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Text fontWeight="600" style={{ textAlign: 'center', fontSize: '20px' }}>
                  {currentAskPrice}
                </Text>
                <Flex alignItems="center">
                  <BinanceIcon width="16px" mx="4px" />
                  <Text fontWeight="600">JOJO</Text>
                </Flex>
              </div>
            </>
          )}
        </Box>
      </PricedBar>
    </CardBody>
  );
};

export default CollectibleCardBody;
