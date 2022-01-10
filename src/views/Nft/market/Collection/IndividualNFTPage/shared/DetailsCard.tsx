import React from 'react';
import styled from 'styled-components';
import { Box, Flex, Text, SearchIcon, Link, BinanceIcon, Skeleton } from 'bubbles-uikit';
import { getBscScanLink } from 'utils';
import { formatNumber } from 'utils/formatBalance';
import uriToHttp from 'utils/uriToHttp';
import { useTranslation } from 'contexts/Localization';
import useActiveWeb3React from 'hooks/useActiveWeb3React';
// import useTheme from 'hooks/useTheme';
import { multiplyPriceByAmount } from 'utils/prices';
import useNftOwner from 'views/Nft/market/hooks/useNftOwner';
import { useBNBBusdPrice } from 'hooks/useBUSDPrice';
import { NftToken } from 'state/nftMarket/types';
import ProfileCell from 'views/Nft/components/ProfileCell';
// import BuyModal from '../../../../components/BuySellModals/BuyModal';
// import SellModal from '../../../../components/BuySellModals/SellModal';
import ExpandableCard from './ExpandableCard';

interface DetailsCardProps {
  contractAddress: string;
  ipfsJson: string;
  count?: number;
  rarity?: number;
  nft: NftToken;
  isOwnNft: boolean;
  nftIsProfilePic: boolean;
}

const LongTextContainer = styled(Text)`
  max-width: 120px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const DetailsCard: React.FC<DetailsCardProps> = ({ contractAddress, ipfsJson, count, rarity, nft }) => {
  const { t } = useTranslation();
  const { chainId } = useActiveWeb3React();
  const ipfsLink = ipfsJson ? uriToHttp(ipfsJson)[0] : null;

  // addition
  const bnbBusdPrice = useBNBBusdPrice();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { owner, isLoadingOwner } = useNftOwner(nft);

  const priceInUsd = multiplyPriceByAmount(bnbBusdPrice, parseFloat(nft.marketData?.currentAskPrice));

  // const [onPresentBuyModal] = useModal(<BuyModal nftToBuy={nft} />);
  // const [onPresentAdjustPriceModal] = useModal(
  //   <SellModal variant={nft.marketData?.isTradable ? 'edit' : 'sell'} nftToSell={nft} />,
  // );

  const content = (
    <Box p="17px">
      {owner && (
        <>
          <Flex justifyContent="space-between" alignItems="center" mb="16px">
            <Text fontSize="12px" color="textSubtle" bold textTransform="uppercase">
              {t('Price')}
            </Text>
            {nft.marketData?.isTradable ? (
              <>
                <Flex justifySelf="flex-start" alignItems="center" width="max-content">
                  <BinanceIcon width="24px" height="24px" mr="8px" />
                  <Text bold>{formatNumber(parseFloat(nft.marketData.currentAskPrice), 0, 3)}</Text>
                  {bnbBusdPrice ? (
                    <Text fontSize="12px" color="textSubtle">
                      {`(~${formatNumber(priceInUsd, 2, 2)} USD)`}
                    </Text>
                  ) : (
                    <Skeleton width="86px" height="12px" mt="4px" />
                  )}
                </Flex>
              </>
            ) : (
              <Flex alignItems="center" height="100%">
                <Text>{t('Not for sale')}</Text>
              </Flex>
            )}
          </Flex>
          <Flex justifyContent="space-between" alignItems="center" mb="16px">
            <Text fontSize="12px" color="textSubtle" bold textTransform="uppercase">
              {t('Owner')}
            </Text>
            <Flex width="max-content" alignItems="center">
              <ProfileCell accountAddress={owner.toLowerCase()} />
            </Flex>
          </Flex>
        </>
      )}

      <Flex justifyContent="space-between" alignItems="center" mb="16px">
        <Text fontSize="12px" color="textSubtle" bold textTransform="uppercase">
          {t('Contract address')}
        </Text>
        <Link external href={getBscScanLink(contractAddress, 'address', chainId)}>
          <LongTextContainer bold>{contractAddress}</LongTextContainer>
        </Link>
      </Flex>
      {ipfsLink && (
        <Flex justifyContent="space-between" alignItems="center" mb="16px">
          <Text fontSize="12px" color="textSubtle" bold textTransform="uppercase">
            IPFS JSON
          </Text>
          <Link external href={ipfsLink}>
            <LongTextContainer bold>{ipfsLink}</LongTextContainer>
          </Link>
        </Flex>
      )}
      {count && (
        <Flex justifyContent="space-between" alignItems="center" mb="16px" mr="4px">
          <Text fontSize="12px" color="textSubtle" bold textTransform="uppercase">
            {t('Supply Count')}
          </Text>
          <LongTextContainer bold>{formatNumber(count, 0, 0)}</LongTextContainer>
        </Flex>
      )}
      {rarity && (
        <Flex justifyContent="space-between" alignItems="center" mr="4px">
          <Text fontSize="12px" color="textSubtle" bold textTransform="uppercase">
            {t('Rarity')}
          </Text>
          <LongTextContainer bold>{`${formatNumber(rarity, 0, 2)}%`}</LongTextContainer>
        </Flex>
      )}
    </Box>
  );
  return <ExpandableCard title={t('Details')} icon={<SearchIcon width="24px" height="24px" />} content={content} />;
};

export default DetailsCard;
