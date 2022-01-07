import React, { useState } from 'react';
// import styled from 'styled-components';
import { Heading, Flex } from 'bubbles-uikit';
// import { useWeb3React } from '@web3-react/core';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'contexts/Localization';
// import PageHeader from 'components/PageHeader';
// import SectionsWithFoldableText from 'components/FoldableSection/SectionsWithFoldableText';
import PageSection from 'components/PageSection';
// import { PageMeta } from 'components/Layout/Page';
import { nftsBaseUrl } from 'views/Nft/market/constants';
import useTheme from 'hooks/useTheme';
import TabButtonMenu from 'components/TabButtonMenu';
import SearchBar from '../components/SearchBar';
import Newest from '../market/Home/Newest';
// import config from './config';

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

const Auction = () => {
  const { t } = useTranslation();
  // const { account } = useWeb3React();
  const { theme } = useTheme();
  const { pathname } = useLocation();
  const getActiveLink = () => {
    return NFTPageData.menu.data.findIndex((ele) => ele.link === pathname);
  };
  // Index Handler
  const [index, setIndex] = useState(getActiveLink());

  return (
    <>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background={theme.colors.background}
        index={2}
        concaveDivider
        dividerPosition="top"
      >
        <div style={{ margin: '10px', padding: '10px' }}>
          <Heading as="h1" scale="xxl" color="secondary" mb="24px">
            {t('NFT Auction')}
          </Heading>

          <Flex justifyContent="space-between" flexWrap="wrap">
            <TabButtonMenu {...NFTPageData.menu} onClick={setIndex} activeIndex={index} />
            <SearchBar />
          </Flex>
        </div>
        <Newest />
      </PageSection>
    </>
  );
};

export default Auction;
