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
// import Collections from './Collections';
import Newest from './Newest';
// import config from './config';

// const Gradient = styled(Box)`
//   background: ${({ theme }) => theme.colors.gradients.cardHeader};
// `;

// const StyledPageHeader = styled(PageHeader)`
//   margin-bottom: -40px;
//   padding-bottom: 40px;
// `;

// const StyledHeaderInner = styled(Flex)`
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   & div:nth-child(1) {
//     order: 1;
//   }
//   & div:nth-child(2) {
//     order: 0;
//     margin-bottom: 32px;
//     align-self: end;
//   }
//   ${({ theme }) => theme.mediaQueries.sm} {
//     flex-direction: row;
//     & div:nth-child(1) {
//       order: 0;
//     }
//     & div:nth-child(2) {
//       order: 1;
//       margin-bottom: 0;
//       align-self: auto;
//     }
//   }
// `;

const NFTPageData = {
  menu: {
    data: [
      {
        text: 'Overview',
        link: nftsBaseUrl,
        showDot: false,
      },
      {
        text: 'Collections',
        link: `${nftsBaseUrl}/collections`,
        showDot: false,
      },
    ],
  },
};

const Home = () => {
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
      {/* <PageMeta />
      <StyledPageHeader>
        <StyledHeaderInner>
          <div>
            <Heading as="h1" scale="xxl" color="secondary" mb="24px">
              {t('NFT Market')}
            </Heading>
            <Heading scale="lg" color="text">
              {t('Buy and Sell NFTs on Binance Smart Chain')}
            </Heading>
            {account && (
              <Button as={Link} to={`${nftsBaseUrl}/profile/${account.toLowerCase()}`} mt="32px">
                {t('Manage/Sell')}
              </Button>
            )}
          </div>
          <SearchBar />
        </StyledHeaderInner>
      </StyledPageHeader>
       */}

      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background={theme.colors.background}
        index={1}
        concaveDivider
        dividerPosition="top"
      >
        <div style={{ margin: '10px', padding: '10px' }}>
          <Heading as="h1" scale="xxl" color="secondary" mb="24px">
            {t('NFT Market')}
          </Heading>

          <Flex justifyContent="space-between" flexWrap="wrap">
            <TabButtonMenu {...NFTPageData.menu} onClick={setIndex} activeIndex={index} />
            <SearchBar />
          </Flex>
        </div>
        {/* <Collections /> */}
        <Newest />
      </PageSection>
      {/* <Gradient p="64px 0">
        <SectionsWithFoldableText header={t('FAQs')} config={config(t)} m="auto" />
      </Gradient> */}
    </>
  );
};

export default Home;
