import React, { useEffect, useMemo, useState } from 'react';
import { Flex, Heading } from 'bubbles-uikit';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useGetCollections } from 'state/nftMarket/hooks';
import { useTranslation } from 'contexts/Localization';
// import Page from 'components/Layout/Page';
import TabButtonMenu from 'components/TabButtonMenu';
// import PageHeader from 'components/PageHeader';
import { nftsBaseUrl } from 'views/Nft/market/constants';
import PageSection from 'components/PageSection';
import SearchBar from '../../components/SearchBar';
import CollectionLinkCard from '../../components/CollectionCard/CollectionLinkCard';

export const ITEMS_PER_PAGE = 10;

// const SORT_FIELD = {
//   volumeBNB: 'totalVolumeBNB',
//   items: 'numberTokensListed',
//   supply: 'totalSupply',
// };

export const PageButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.2em;
  margin-bottom: 1.2em;
`;

export const Arrow = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  padding: 0 20px;
  :hover {
    cursor: pointer;
  }
`;
const GridBox = styled.div`
  position: realtive;
  font-size: 16px;
  color: 694f4e;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const NFTPageData = {
  menu: {
    data: [
      {
        text: 'Market',
        link: nftsBaseUrl,
        showDot: false,
      },
      {
        text: 'Auction',
        link: `${nftsBaseUrl}/auction`,
        showDot: false,
      },
    ],
  },
};
const Collectible = () => {
  const { t } = useTranslation();
  const collections = useGetCollections();
  // const { isMobile } = useMatchBreakpoints();
  const [sortField] = useState(null);
  const [sortDirection] = useState<boolean>(false);
  const [page] = useState(1);
  const [, setMaxPage] = useState(1);

  const { pathname } = useLocation();
  const getActiveLink = () => {
    return NFTPageData.menu.data.findIndex((ele) => ele.link === pathname);
  };
  // Index Handler
  const [index, setIndex] = useState(getActiveLink());

  useEffect(() => {
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }, 50);
  }, [page]);

  useEffect(() => {
    let extraPages = 1;
    const collectionValues = collections ? Object.values(collections) : [];
    if (collectionValues.length % ITEMS_PER_PAGE === 0) {
      extraPages = 0;
    }
    setMaxPage(Math.floor(collectionValues.length / ITEMS_PER_PAGE) + extraPages);
  }, [collections]);

  const sortedCollections = useMemo(() => {
    const collectionValues = collections ? Object.values(collections) : [];

    return collectionValues
      .sort((a, b) => {
        if (sortField && a && b) {
          return parseFloat(a[sortField]) > parseFloat(b[sortField])
            ? (sortDirection ? -1 : 1) * 1
            : (sortDirection ? -1 : 1) * -1;
        }
        return -1;
      })
      .slice(ITEMS_PER_PAGE * (page - 1), page * ITEMS_PER_PAGE);
  }, [page, collections, sortDirection, sortField]);

  // const handleSort = useCallback(
  //   (newField: string) => {
  //     setSortField(newField);
  //     setSortDirection(sortField !== newField ? true : !sortDirection);
  //   },
  //   [sortDirection, sortField],
  // );

  // const arrow = useCallback(
  //   (field: string) => {
  //     const directionArrow = !sortDirection ? '↑' : '↓';
  //     return sortField === field ? directionArrow : '';
  //   },
  //   [sortDirection, sortField],
  // );

  return (
    <>
      {/* <PageHeader>
        <Heading as="h1" scale="xxl" color="secondary">
          {t('Collections')}
        </Heading>
      </PageHeader> */}

      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        index={1}
        concaveDivider
        dividerPosition="top"
      >
        <div style={{ margin: '10px', padding: '10px' }}>
          <Flex justifyContent="space-between" flexWrap="wrap" mr="30px">
            <Heading as="h1" scale="xxl" color="secondary" mb="24px">
              {t('Collections')}
            </Heading>
            <TabButtonMenu {...NFTPageData.menu} onClick={setIndex} activeIndex={index} />
          </Flex>

          <Flex justifyContent="space-between" flexWrap="wrap" mr="30px">
            <TabButtonMenu {...NFTPageData.menu} onClick={setIndex} activeIndex={index} />
            <SearchBar />
          </Flex>
        </div>
        <div>
          <GridBox>
            {sortedCollections.map((collection) => {
              return (
                <>
                  <CollectionLinkCard
                    collection={collection}
                    collectionImg={collection.avatar}
                    collectionSupply={collection.totalSupply}
                    collectionItems={collection.numberTokensListed}
                    collectionVolume={collection.totalVolumeBNB}
                  />
                </>
              );
            })}
          </GridBox>
        </div>
        {/* 
        <Card>
          <Table>
            <thead>
              <tr>
                <Th textAlign="left">{t('Collection')}</Th>
                <Th textAlign="left" style={{ cursor: 'pointer' }} onClick={() => handleSort(SORT_FIELD.volumeBNB)}>
                  {t('Volume')}
                  {arrow(SORT_FIELD.volumeBNB)}
                </Th>
                {!isMobile && (
                  <>
                    <Th textAlign="left" style={{ cursor: 'pointer' }} onClick={() => handleSort(SORT_FIELD.items)}>
                      {t('Items')}
                      {arrow(SORT_FIELD.items)}
                    </Th>
                    <Th textAlign="left" style={{ cursor: 'pointer' }} onClick={() => handleSort(SORT_FIELD.supply)}>
                      {t('Supply')}
                      {arrow(SORT_FIELD.supply)}
                    </Th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {sortedCollections.map((collection) => {
                const volume = collection.totalVolumeBNB
                  ? parseFloat(collection.totalVolumeBNB).toLocaleString(undefined, {
                      minimumFractionDigits: 3,
                      maximumFractionDigits: 3,
                    })
                  : '0'
                return (
                  <tr key={collection.address}>
                    <Td>
                      <Link to={`${nftsBaseUrl}/collections/${collection.address}`}>
                        <Flex alignItems="center">
                          <ProfileAvatar src={collection.avatar} width={48} height={48} mr="16px" />
                          {collection.name}
                        </Flex>
                      </Link>
                    </Td>
                    <Td>
                      <Flex alignItems="center">
                        {volume}
                        <BnbUsdtPairTokenIcon ml="8px" />
                      </Flex>
                    </Td>
                    {!isMobile && (
                      <>
                        <Td>{collection.numberTokensListed}</Td>
                        <Td>{collection.totalSupply}</Td>
                      </>
                    )}
                  </tr>
                )
              })}
            </tbody>
          </Table>
          <PageButtons>
            <Arrow
              onClick={() => {
                setPage(page === 1 ? page : page - 1)
              }}
            >
              <ArrowBackIcon color={page === 1 ? 'textDisabled' : 'primary'} />
            </Arrow>

            <Text>{t('Page %page% of %maxPage%', { page, maxPage })}</Text>

            <Arrow
              onClick={() => {
                setPage(page === maxPage ? page : page + 1)
              }}
            >
              <ArrowForwardIcon color={page === maxPage ? 'textDisabled' : 'primary'} />
            </Arrow>
          </PageButtons>
        </Card> */}
      </PageSection>
    </>
  );
};

export default Collectible;
