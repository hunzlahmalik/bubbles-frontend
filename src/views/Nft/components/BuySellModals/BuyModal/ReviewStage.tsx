import React from 'react';
import { useWeb3React } from '@web3-react/core';
import ConnectWalletButton from 'components/ConnectWalletButton';
import { Flex, Button, ButtonMenu, ButtonMenuItem } from 'bubbles-uikit';
import { FetchStatus } from 'hooks/useTokenBalance';
import { useTranslation } from 'contexts/Localization';
import { NftToken } from 'state/nftMarket/types';
// import { getBscScanLinkForNft } from 'utils';
import PriceCard from 'components/PriceCard';
import { useBNBBusdPrice } from 'hooks/useBUSDPrice';
import { multiplyPriceByAmount } from 'utils/prices';
import { Divider } from '../shared/styles';
// import { BorderedBox, BnbAmountCell } from './styles';
import { PaymentCurrency } from './types';

interface ReviewStageProps {
  nftToBuy: NftToken;
  paymentCurrency: PaymentCurrency;
  setPaymentCurrency: (index: number) => void;
  nftPrice: number;
  walletBalance: number;
  walletFetchStatus: FetchStatus;
  notEnoughBnbForPurchase: boolean;
  continueToNextStage: () => void;
}

const ReviewStage: React.FC<ReviewStageProps> = ({
  nftToBuy,
  paymentCurrency,
  setPaymentCurrency,
  nftPrice,
  walletBalance,
  walletFetchStatus,
  notEnoughBnbForPurchase,
  continueToNextStage,
}) => {
  const { t } = useTranslation();
  const { account } = useWeb3React();
  const bnbBusdPrice = useBNBBusdPrice();
  const priceInUsd = multiplyPriceByAmount(bnbBusdPrice, nftPrice);
  const priceInWallet = multiplyPriceByAmount(bnbBusdPrice, walletBalance);
  return (
    <>
      <Flex px="24px" pt="24px" flexDirection="column">
        {/* <Flex>
          <RoundedImage src={nftToBuy.image.thumbnail} height={68} width={68} mr="16px" />
          <Flex flexDirection="column" justifyContent="space-evenly">
            <Text color="textSubtle" fontSize="12px">
              {nftToBuy.collectionName}
            </Text>
            <Text bold>{nftToBuy.name}</Text>
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontSize="12px" color="textSubtle" p="0px" height="16px" mr="4px">
                {t('Token ID:')}
              </Text>
              <Button
                as={Link}
                scale="xs"
                px="0px"
                pt="2px"
                external
                variant="text"
                href={getBscScanLinkForNft(nftToBuy.collectionAddress, nftToBuy.tokenId)}
              >
                {nftToBuy.tokenId}
              </Button>
            </Flex>
          </Flex>
        </Flex> */}
        {/* <BorderedBox> */}
        {/* <Text small color="textSubtle">
          {t('Pay with')}
        </Text> */}
        <ButtonMenu
          activeIndex={paymentCurrency}
          onItemClick={(index) => setPaymentCurrency(index)}
          scale="sm"
          variant="subtle"
        >
          <ButtonMenuItem>BNB</ButtonMenuItem>
          <ButtonMenuItem>WBNB</ButtonMenuItem>
        </ButtonMenu>
        <PriceCard
          title="Total payment"
          amount={nftPrice}
          coinUrl="https://jojo.fun/img/icon-jojo.dd768e0c.png"
          usd={`(~${priceInUsd.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} USD)`}
        />

        {/* <Text small color="textSubtle">
          {t('Total payment')}
        </Text>
        <BnbAmountCell bnbAmount={nftPrice} /> */}
        {/* <Text small color="textSubtle">
          {t('%symbol% in wallet', { symbol: paymentCurrency === PaymentCurrency.BNB ? 'BNB' : 'WBNB' })}
        </Text> */}
        {!account ? (
          <Flex justifySelf="center" marginTop="20px" marginLeft="80px">
            <ConnectWalletButton scale="sm" />
          </Flex>
        ) : (
          <PriceCard
            title={t('%symbol% in wallet', { symbol: paymentCurrency === PaymentCurrency.BNB ? 'BNB' : 'WBNB' })}
            amount={walletBalance}
            coinUrl="https://jojo.fun/img/icon-jojo.dd768e0c.png"
            usd={`(~${priceInWallet.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })} USD)`}
          />
        )}
        {/* </BorderedBox> */}
        {/* {walletFetchStatus === FetchStatus.SUCCESS && notEnoughBnbForPurchase && (
          <Message p="8px" variant="danger">
            <Text>
              {t('Not enough %symbol% to purchase this NFT', {
                symbol: paymentCurrency === PaymentCurrency.BNB ? 'BNB' : 'WBNB',
              })}
            </Text>
          </Message>
        )} */}
        {/* <Flex alignItems="center">
          <Text my="16px" mr="4px">
            {t('Convert between BNB and WBNB for free')}:
          </Text>
          <Button
            as={Link}
            p="0px"
            height="16px"
            external
            variant="text"
            href="/swap?inputCurrency=BNB&outputCurrency=0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
          >
            {t('Convert')}
          </Button>
        </Flex> */}
      </Flex>
      <Divider />
      <Flex px="24px" pb="24px" flexDirection="column">
        <Button
          onClick={continueToNextStage}
          disabled={walletFetchStatus !== FetchStatus.SUCCESS || notEnoughBnbForPurchase}
          mb="8px"
        >
          {walletFetchStatus === FetchStatus.SUCCESS && !notEnoughBnbForPurchase
            ? t(' Approve %symbol%', { symbol: paymentCurrency === PaymentCurrency.BNB ? 'BNB' : 'WBNB' })
            : t('Not enough %symbol%', {
                symbol: paymentCurrency === PaymentCurrency.BNB ? 'BNB' : 'WBNB',
              })}
        </Button>
        {/* <Button as={Link} external style={{ width: '100%' }} href="/swap?outputCurrency=BNB" variant="secondary">
          {t('Get %symbol1% or %symbol2%', { symbol1: 'BNB', symbol2: 'WBNB' })}
        </Button> */}
      </Flex>
    </>
  );
};

export default ReviewStage;
