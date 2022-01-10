import { Box, Button, Card, CardBody, Flex, Text, useModal } from 'bubbles-uikit';
import PriceCard from 'components/PriceCard';
import { useTranslation } from 'contexts/Localization';
import { useBNBBusdPrice } from 'hooks/useBUSDPrice';
import React from 'react';
import { NftToken } from 'state/nftMarket/types';
import { multiplyPriceByAmount } from 'utils/prices';
import NFTMedia from 'views/Nft/components/NFTMedia';
import EditProfileModal from 'views/Nft/market/Profile/components/EditProfileModal';
import BuyModal from '../../../../components/BuySellModals/BuyModal';
import SellModal from '../../../../components/BuySellModals/SellModal';
// import { nftsBaseUrl } from '../../../constants';
import { Container } from '../shared/styles';

interface MainNFTCardProps {
  nft: NftToken;
  isOwnNft: boolean;
  nftIsProfilePic: boolean;
}

const MainNFTCard: React.FC<MainNFTCardProps> = ({ nft, isOwnNft, nftIsProfilePic }) => {
  const { t } = useTranslation();
  const bnbBusdPrice = useBNBBusdPrice();

  const currentAskPriceAsNumber = nft.marketData?.currentAskPrice ? parseFloat(nft.marketData.currentAskPrice) : 0;
  const priceInUsd = multiplyPriceByAmount(bnbBusdPrice, currentAskPriceAsNumber);
  const [onPresentBuyModal] = useModal(<BuyModal nftToBuy={nft} />);
  const [onPresentSellModal] = useModal(
    <SellModal variant={nft.marketData?.isTradable ? 'edit' : 'sell'} nftToSell={nft} />,
  );
  const [onEditProfileModal] = useModal(<EditProfileModal />, false);

  const ownerButtons = (
    <Flex flexDirection={['column', 'column', 'row']}>
      <Button
        disabled={nftIsProfilePic}
        minWidth="168px"
        mr="16px"
        width={['100%', null, 'max-content']}
        mt="24px"
        onClick={onPresentSellModal}
      >
        {nft.marketData?.isTradable ? t('Adjust price') : t('List for sale')}
      </Button>
      {!nft.marketData?.isTradable && (
        <Button
          minWidth="168px"
          variant="secondary"
          width={['100%', null, 'max-content']}
          mt="24px"
          onClick={onEditProfileModal}
        >
          {nftIsProfilePic ? t('Change Profile Pic') : t('Set as Profile Pic')}
        </Button>
      )}
    </Flex>
  );

  return (
    <Card mb="20px">
      <CardBody mb="20px">
        <Container flexDirection={['column', null, 'row']} flexWrap="wrap">
          <Flex
            flex="2"
            justifyContent={['center', null, 'flex-end']}
            alignItems="center"
            maxWidth={250}
            minWidth={250}
          >
            <NFTMedia nft={nft} width={250} height={250} />
          </Flex>
          {/* <Flex flex="2"> */}
          <Box>
            {/* <CollectionLink to={`${nftsBaseUrl}/collections/${nft.collectionAddress}`}>
                {nft.collectionName}
              </CollectionLink> */}
            <Text fontSize="40px" bold mt="12px" marginLeft="12px">
              {nft.name}
            </Text>
            {/* {nft.description && <Text mt={['16px', '16px', '48px']}>{t(nft.description)}</Text>} */}
            <Box>
              <PriceCard
                title="Price"
                amount={nft.marketData.currentAskPrice}
                coinUrl="https://jojo.fun/img/icon-jojo.dd768e0c.png"
                usd={`(~${priceInUsd.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })} USD)`}
              />
              {/* <Text color="textSubtle" mt={['16px', '16px', '48px']}>
                {t('Price')}
              </Text>
              {currentAskPriceAsNumber > 0 ? (
                <Flex alignItems="center" mt="8px">
                  <BinanceIcon width={18} height={18} mr="4px" />
                  <Text fontSize="24px" bold mr="4px">
                    {nft.marketData.currentAskPrice}
                  </Text>
                  {bnbBusdPrice ? (
                    <Text color="textSubtle">{`(~${priceInUsd.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })} USD)`}</Text>
                  ) : (
                    <Skeleton width="64px" />
                  )}
                </Flex>
              ) : (
                <Text>{t('Not for sale')}</Text>
              )} */}
              {nftIsProfilePic && (
                <Text color="failure">
                  {t(
                    'This NFT is your profile picture, you must change it to some other NFT if you want to sell this one.',
                  )}
                </Text>
              )}
              {isOwnNft && ownerButtons}
              {!isOwnNft && (
                <Button
                  minWidth="168px"
                  disabled={!nft.marketData?.isTradable}
                  mr="16px"
                  width={['100%', null, 'max-content']}
                  mt="24px"
                  onClick={onPresentBuyModal}
                  marginLeft="12px"
                >
                  {t('Buy')}
                </Button>
              )}
            </Box>
          </Box>
          {/* </Flex> */}
        </Container>
      </CardBody>
    </Card>
  );
};

export default MainNFTCard;
