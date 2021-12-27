import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Pair } from '@pancakeswap/sdk';
import { Text, Box, Flex, CardBody, CardFooter, Button, AddIcon } from 'bubbles-uikit';
import { Link } from 'react-router-dom';
import { useTranslation } from 'contexts/Localization';
import useActiveWeb3React from 'hooks/useActiveWeb3React';
import Card, { LightCard } from 'components/Card';
import { RowBetween, RowFixed } from 'components/Layout/Row';
import { DoubleCurrencyLogo } from 'components/Logo';
import { AppHeader, AppBody } from '../App';
import { AutoColumn } from '../Layout/Column';
import FullPositionCard from '../PositionCard';
import { useTokenBalancesWithLoadingIndicator } from '../../state/wallet/hooks';
import { usePairs } from '../../hooks/usePairs';
import { toV2LiquidityToken, useTrackedTokenPairs } from '../../state/user/hooks';
import Dots from '../Loader/Dots';

// const MainStyle = styled.div`
//   width: calc(100%-100px);
//   min-width: 932px;
//   position: relative;
//   box-sizing: border-box;
// `;
// const SubMain = styled.div`
//   padding-top: 32px;
//   padding-right: 0px;
//   padding-bottom: 32px;
//   padding-left: 0px;
// `;
// const NonHeader = styled.div`
//   margin-top: 48px;
// `;

// // margin-left:-15px;
// // margin-right:-15px;
// const CardBox = styled.div`
//   margin-top: 6px;
//   display: flex;
//   flex-wrap: wrap;
// `;
// const CardDesign = styled.div`
//   max-width: calc(50% - 30px);
//   min-width: 230px;
//   -webkit-boc-flex: 1;
//   flex-grow: 1;
//   flex-shrink: 1;
//   flex-basis: 0%;
//   margin-top: 30px;
//   margin-right: 15px;
//   margin-bottom: 10px;
//   margin-left: 15px;
//   border-radius: 16px;
//   overflow: hidden;
//   -webkit-box-orient: vertical;
//   -webkit-box-direction: normal;
//   box-shadow: unset;
//   display: flex;
// `;
// const BoxHeader = styled.div`
//   position: relative;
//   padding-bottom: 100%;
//   height: 0;
//   border-top-right-radius: 16px;
//   border-top-left-radius: 16px;
//   cursor: pointer;
//   overflow: hidden;
//   border-top-right-radius: 16px;
//   border-top-left-radius: 16px;
// `;
// const SubBoxHeader1 = styled.div`
//   background-image: url(https://jojo.fun/img/add.e4b25d9e.svg);
//   background-color: rgb(249, 244, 211);
//   filter: blur(0px);
//   background-size: contain;
//   background-position-x: 40%;
//   background-position-y: 50%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   border-radius: 20px;
// `;
// const SubBoxHeader2 = styled.div`
//   position: absolute;
//   top: 15px;
//   right: 15px;
//   display: inline-flex;
//   transition-property: opacity;
//   transition-duration: 0.2s;
//   transition-timing-function: ease;
//   transition-delay: 0s;
//   opacity: 0;
// `;

// const BoxHeaderTitle = styled.div`
//   padding-top: 14px;
//   padding-right: 24px;
//   padding-bottom: 3px;
//   padding-left: 24px;
//   background-color: #fff;
//   height: 36px;
//   align-items: center;
//   display: flex;
//   font-size: 18px;
//   line-height: 1.2;
//   color: #431216;
//   word-break: break-word;
//   font-weight: 700;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   display: -webkit-box;
//   -webkit-line-clamp: 2;
// `;

// const BoxLine = styled.div`
//   height: 30px;
//   min-width: unset;
//   width: calc(100% - 26px);
//   background-image: url(https://jojo.fun/img/bg-line.fea0371a.svg);
//   background-repeat: repeat-x;
//   background-size: auto 1px;
//   margin: 0px auto;
//   background-color: #fff;
//   position: relative;
//   background-position-x: 50%;
//   background-position-y: center;
// `;

// const PageCardDesign = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   margin-top: 0px;
//   margin-right: 15px;
//   margin-bottom: 0px;
//   margin-left: 15px;
//   padding: 0;
//   font-size: 16px;
//   line-height: 1.4;
//   color: #694f4e;
//   background: transparent;
// `;

// // background-color: ${({ theme }) => theme.colors.dropdownDeep};
// const Body = styled(CardBody)`
//   padding-top: 5px;
//   padding-right: 24px;
//   padding-bottom: 20px;
//   padding-left: 24px;
//   flex-grow: 1;
//   flex-shrink: 1;
//   flex-basis: 0%;
// `;

// const BodyTitle = styled.div`
//   display: flex;
//   -webkit-box-pack: justify;
//   justify-content: space-between;
//   font-size: 14px;
//   color: #694f4e;
// `;

// export default function BubleBoxItem() {
//   const { account } = useActiveWeb3React();
//   const { t } = useTranslation();

//   // fetch the user's balances of all tracked V2 LP tokens
//   const trackedTokenPairs = useTrackedTokenPairs();
//   const tokenPairsWithLiquidityTokens = useMemo(
//     () => trackedTokenPairs.map((tokens) => ({ liquidityToken: toV2LiquidityToken(tokens), tokens })),
//     [trackedTokenPairs],
//   );
//   const liquidityTokens = useMemo(
//     () => tokenPairsWithLiquidityTokens.map((tpwlt) => tpwlt.liquidityToken),
//     [tokenPairsWithLiquidityTokens],
//   );
//   const [v2PairsBalances, fetchingV2PairBalances] = useTokenBalancesWithLoadingIndicator(
//     account ?? undefined,
//     liquidityTokens,
//   );

//   // fetch the reserves for all V2 pools in which the user has a balance
//   const liquidityTokensWithBalances = useMemo(
//     () =>
//       tokenPairsWithLiquidityTokens.filter(({ liquidityToken }) =>
//         v2PairsBalances[liquidityToken.address]?.greaterThan('0'),
//       ),
//     [tokenPairsWithLiquidityTokens, v2PairsBalances],
//   );

//   const v2Pairs = usePairs(liquidityTokensWithBalances.map(({ tokens }) => tokens));
//   const v2IsLoading =
//     fetchingV2PairBalances ||
//     v2Pairs?.length < liquidityTokensWithBalances.length ||
//     v2Pairs?.some((V2Pair) => !V2Pair);

//   const allV2PairsWithLiquidity = v2Pairs.map(([, pair]) => pair).filter((v2Pair): v2Pair is Pair => Boolean(v2Pair));

//   const renderBody = () => {
//     if (!account) {
//       return (
//         <>
//           <Text color="textSubtle" textAlign="center">
//             {t('Position HashRate')}
//           </Text>
//           <Text textAlign="center">{t('1')}</Text>
//         </>
//       );
//     }
//     if (v2IsLoading) {
//       return (
//         <Text color="textSubtle" textAlign="center">
//           <Dots>{t('Loading')}</Dots>
//         </Text>
//       );
//     }
//     // dont understand this rn
//     if (allV2PairsWithLiquidity?.length > 0) {
//       return allV2PairsWithLiquidity.map((v2Pair, index) => (
//         <FullPositionCard
//           key={v2Pair.liquidityToken.address}
//           pair={v2Pair}
//           mb={index < allV2PairsWithLiquidity.length - 1 ? '16px' : 0}
//         />
//       ));
//     }
//     return (
//       <>
//         <Text color="textSubtle" textAlign="center">
//           {t('Position HashRate')}
//         </Text>
//         <Text textAlign="center">{t('1')}</Text>
//       </>
//     );
//   };

//   return (
//     // <CardBox>
//     //   <CardDesign>
//     // <PageCardDesign>
//     <>
//       <AppBody>
//         <BoxHeader>
//           <SubBoxHeader1 />
//           <SubBoxHeader2 />
//         </BoxHeader>
//         <BoxHeaderTitle>
//           {/* title */}
//           <AppHeader title={t('Your Liquidity')} subtitle={t('Remove liquidity to receive tokens back')} />
//         </BoxHeaderTitle>
//         <BoxLine />

//         <Body>
//           <BodyTitle>
//             {renderBody()}
//             {account && !v2IsLoading && (
//               <Text color="textSubtle" mb="8px">
//                 {t("Don't see a pool you joined?")}
//               </Text>
//             )}
//           </BodyTitle>
//           <CardFooter style={{ textAlign: 'center' }}>
//             <Button id="join-pool-button" as={Link} to="/add" width="100%" startIcon={<AddIcon color="white" />}>
//               {t('Add Liquidity')}
//             </Button>
//           </CardFooter>
//         </Body>
//       </AppBody>
//     </>
//     // </PageCardDesign>
//     //   </CardDesign>
//     // </CardBox>
//   );
// }

/// //////////////////////////////////////////////////////////////////////////////

// https://coinbox.gitbook.io/nftian-org/nftian-bubbles/introduction
export interface BubbleBoxItemProps {
  ref: number; // reference number
  image: {
    url: string;
    hoverUrl: string;
  };
  charType: number; // character type
  prob: number; // probability
  supply: number; // supply
  hashRate: number; // hash rate
}

const FixedHeightRow = styled(RowBetween)`
  height: 24px;
`;

const BubbleBoxItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Card width="50%">
      <CardBody>
        <AutoColumn gap="16px">
          <FixedHeightRow>
            <RowFixed>
              <Text color="secondary" bold>
                {t('LP tokens in your wallet')}
              </Text>
            </RowFixed>
          </FixedHeightRow>
          <FixedHeightRow>
            <RowFixed>
              <DoubleCurrencyLogo margin size={20} />
              <Text small color="textSubtle">
                Haha1
              </Text>
            </RowFixed>
            <RowFixed>
              <Text>Haha2</Text>
            </RowFixed>
          </FixedHeightRow>
          <AutoColumn gap="4px">
            <FixedHeightRow>
              <Text color="textSubtle" small>
                {t('Share of Pool')}:
              </Text>
              <Text>Haha3</Text>
            </FixedHeightRow>
            <FixedHeightRow>
              <Text color="textSubtle" small>
                {t('Pooled %asset%')}:
              </Text>
            </FixedHeightRow>
            <FixedHeightRow>
              <Text color="textSubtle" small>
                {t('Pooled %asset%')}:
              </Text>
            </FixedHeightRow>
          </AutoColumn>
        </AutoColumn>
      </CardBody>
    </Card>
  );
};

export default BubbleBoxItem;
