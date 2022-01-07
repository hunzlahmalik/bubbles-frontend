/* eslint-disable react/void-dom-elements-no-children */
import React, { useState, useEffect } from 'react';
// import { Heading, Flex, Button, Grid, ChevronRightIcon } from 'bubbles-uikit';
// import { useTranslation } from 'contexts/Localization';
// import { Link } from 'react-router-dom';
import { NftToken } from 'state/nftMarket/types';
import { getLatestListedNfts, getNftsFromDifferentCollectionsApi } from 'state/nftMarket/helpers';
import { pancakeBunniesAddress } from 'views/Nft/market/constants';
import styled from 'styled-components';
import { CollectibleLinkCard } from '../../components/CollectibleCard';
import GridPlaceholder from '../../components/GridPlaceholder';

/**
 * Fetch latest NFTs data from SG+API and combine them
 * @returns Array of NftToken
 */

const GridBox = styled.div`
  position: realtive;
  font-size: 16px;
  color: 694f4e;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const useNewestNfts = () => {
  const [newestNfts, setNewestNfts] = useState<NftToken[]>(null);

  useEffect(() => {
    const fetchNewestNfts = async () => {
      const nftsFromSg = await getLatestListedNfts(100);
      const nftsFromApi = await getNftsFromDifferentCollectionsApi(
        nftsFromSg.map((nft) => ({ collectionAddress: nft.collection.id, tokenId: nft.tokenId })),
      );

      const nfts = nftsFromSg.map((nftFromSg, index) => {
        const nftFromApi = nftsFromApi[index];
        return { ...nftFromApi, marketData: nftFromSg };
      });
      setNewestNfts(nfts);
    };
    fetchNewestNfts();
  }, []);

  return newestNfts;
};

const Newest: React.FC = () => {
  // const { t } = useTranslation();
  const nfts = useNewestNfts();

  return (
    <div>
      {/* <Flex justifyContent="space-between" alignItems="center" mb="26px">
        <Heading>{t('Newest Arrivals')}</Heading>
        <Button
          as={Link}
          to={`${nftsBaseUrl}/collections/`}
          variant="secondary"
          scale="sm"
          endIcon={<ChevronRightIcon color="primary" />}
        >
          {t('View All')}
        </Button>
      </Flex> */}
      {nfts ? (
        <GridBox>
          {nfts.map((nft) => {
            const isPBCollection = nft.collectionAddress.toLowerCase() === pancakeBunniesAddress.toLowerCase();
            const currentAskPrice =
              !isPBCollection && nft.marketData?.isTradable ? parseFloat(nft.marketData.currentAskPrice) : undefined;
            return (
              <CollectibleLinkCard
                style={{ maxWidth: '100%' }}
                key={nft.collectionAddress + nft.tokenId}
                nft={nft}
                currentAskPrice={currentAskPrice}
              />
            );
          })}
        </GridBox>
      ) : (
        <GridPlaceholder numItems={8} />
      )}
    </div>
  );
};

export default Newest;
