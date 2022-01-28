import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Pair } from '@pancakeswap/sdk';
import { Text, CardBody, CardFooter, Button } from 'bubbles-uikit';
import { Link } from 'react-router-dom';
import { useTranslation } from 'contexts/Localization';
import useActiveWeb3React from 'hooks/useActiveWeb3React';
import FullPositionCard from '../../../../components/PositionCard';
import { useTokenBalancesWithLoadingIndicator } from '../../../../state/wallet/hooks';
import { usePairs } from '../../../../hooks/usePairs';
import { toV2LiquidityToken, useTrackedTokenPairs } from '../../../../state/user/hooks';
import Dots from '../../../../components/Loader/Dots';
import { AppBody } from '../../../../components/App';

const PageCardDesign = styled.div`
  margin-top: 10px;
  margin: auto;
  margin-bottom: 10px;
  width: calc(50%-30px);
  min-width: 300px;
  padding: 0;
  font-size: 16px;
  line-height: 1.4;
  color: inherit;
  background: transparent;
  :hover {
    filter: brightness(95%);
  }
`;
const BoxHeader = styled.div`
  position: relative;
  padding-bottom: 100%;
  height: 0;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  cursor: pointer;
  overflow: hidden;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
`;
// const SubBoxHeader1=styled.div`
//   background-image:url(https://jojo.fun/img/add.e4b25d9e.svg);
//   background-color:rgb(249,244,211);
//   filter: blur(0px);
//   background-size: contain;
//   background-position-x: 40%;
//   background-position-y: 50%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   border-radius:20px;
// `
const SubBoxHeader2 = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  display: inline-flex;
  transition-property: opacity;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  transition-delay: 0s;
  opacity: 0;
`;

const BoxHeaderTitle = styled.div`
  padding-top: 14px;
  padding-right: 24px;
  padding-bottom: 3px;
  padding-left: 24px;
  background-color: #fff;
  height: 36px;
  align-items: center;
  display: flex;
  font-size: 18px;
  line-height: 1.2;
  color: inherit;
  word-break: break-word;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
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
`;

const Body = styled(CardBody)`
  // background-color: ${({ theme }) => theme.colors.dropdownDeep};
  padding-top: 5px;
  padding-right: 24px;
  padding-bottom: 20px;
  padding-left: 24px;
  min-width: 250px;
  max-width: 300px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;
`;

const PoolButton = styled.button<{ height?: string; backgroundColor?: string; color?: string }>`
  width: 100%;
  height: ${({ height }) => height ?? '100%'};
  background-color: ${({ backgroundColor }) => backgroundColor ?? '#FEBF32'};
  color: ${({ color }) => color ?? 'black'};
  border: none;
  border-radius: 12px;
  :hover {
    cursor: pointer;
  }
`;

const BodyTitle = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  font-size: 14px;
  color: inherit;
`;
export default function PoolCard(title, BackImg) {
  const { account } = useActiveWeb3React();
  const { t } = useTranslation();
  function redirectLink() {
    // eslint-disable-next-line no-restricted-globals
    location.href =
      'https://pcs.nhancv.com/?_ga=2.207808530.106752841.1643134854-286364221.1642675558#/add/BNB/0x18F7a6Fa61659AcfA4Db07E9D672C843De8B5ce5';
  }

  // fetch the user's balances of all tracked V2 LP tokens
  const trackedTokenPairs = useTrackedTokenPairs();
  const tokenPairsWithLiquidityTokens = useMemo(
    () => trackedTokenPairs.map((tokens) => ({ liquidityToken: toV2LiquidityToken(tokens), tokens })),
    [trackedTokenPairs],
  );
  const liquidityTokens = useMemo(
    () => tokenPairsWithLiquidityTokens.map((tpwlt) => tpwlt.liquidityToken),
    [tokenPairsWithLiquidityTokens],
  );
  const [v2PairsBalances, fetchingV2PairBalances] = useTokenBalancesWithLoadingIndicator(
    account ?? undefined,
    liquidityTokens,
  );

  // fetch the reserves for all V2 pools in which the user has a balance
  const liquidityTokensWithBalances = useMemo(
    () =>
      tokenPairsWithLiquidityTokens.filter(({ liquidityToken }) =>
        v2PairsBalances[liquidityToken.address]?.greaterThan('0'),
      ),
    [tokenPairsWithLiquidityTokens, v2PairsBalances],
  );

  const v2Pairs = usePairs(liquidityTokensWithBalances.map(({ tokens }) => tokens));
  const v2IsLoading =
    fetchingV2PairBalances ||
    v2Pairs?.length < liquidityTokensWithBalances.length ||
    v2Pairs?.some((V2Pair) => !V2Pair);

  const allV2PairsWithLiquidity = v2Pairs.map(([, pair]) => pair).filter((v2Pair): v2Pair is Pair => Boolean(v2Pair));

  const renderBody = () => {
    if (!account) {
      return (
        <>
          <Text color="textSubtle" textAlign="center">
            {t('Position HashRate')}
          </Text>
          <Text textAlign="center">{t('1')}</Text>
        </>
      );
    }
    if (v2IsLoading) {
      return (
        <Text color="textSubtle" textAlign="center">
          <Dots>{t('Loading')}</Dots>
        </Text>
      );
    }
    // dont understand this rn
    if (allV2PairsWithLiquidity?.length > 0) {
      return allV2PairsWithLiquidity.map((v2Pair, index) => (
        <FullPositionCard
          key={v2Pair.liquidityToken.address}
          pair={v2Pair}
          mb={index < allV2PairsWithLiquidity.length - 1 ? '16px' : 0}
        />
      ));
    }
    return (
      <>
        <Text color="textSubtle" textAlign="center">
          {t('Position HashRate')}
        </Text>
        <Text textAlign="center">{t('1')}</Text>
      </>
    );
  };

  return (
    <>
      <PageCardDesign>
        <AppBody>
          <BoxHeader>
            <img
              src={BackImg}
              style={{
                backgroundColor: 'rgb(249,244,211)',
                filter: 'blur(0px)',
                backgroundSize: 'contain',
                backgroundPositionX: '40%',
                backgroundPositionY: '50%',
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                borderRadius: '20px',
              }}
              alt="nothing"
            />

            <SubBoxHeader2 />
          </BoxHeader>
          <BoxHeaderTitle>
            {title}
            {/* 
                    <AppHeader title={t('Your Liquidity')} subtitle={t('Remove liquidity to receive tokens back')} /> */}
          </BoxHeaderTitle>
          <BoxLine />

          <Body>
            <BodyTitle>
              {renderBody()}
              {account && !v2IsLoading && (
                <Text color="textSubtle" mb="8px">
                  {t("Don't see a pool you joined?")}
                </Text>
              )}
            </BodyTitle>
            <CardFooter style={{ textAlign: 'center' }}>
              <PoolButton style={{ marginTop: '10px' }} height="50px" onClick={redirectLink}>
                {t('Add Liquidity')}
              </PoolButton>
            </CardFooter>
          </Body>
        </AppBody>
      </PageCardDesign>
    </>
  );
}
