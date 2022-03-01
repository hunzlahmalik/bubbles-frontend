import React, { useCallback, useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useTranslation } from 'contexts/Localization';
import styled from 'styled-components';
import BigNumber from 'bignumber.js';
import useTheme from 'hooks/useTheme';
import tokens from 'config/constants/tokens';
import { useCallWithGasPrice } from 'hooks/useCallWithGasPrice';
import { useBubbleMarketplaceContract, useMockTokenContract } from 'hooks/useContract';
import ApproveConfirmButtons, { ButtonArrangement } from 'components/ApproveConfirmButtons';
import useToast from 'hooks/useToast';
import useTokenBalance, { FetchStatus, useTokenContractBalance } from 'hooks/useTokenBalance';
import { BIG_ZERO, ethersToBigNumber } from 'utils/bigNumber';
import { getFullDisplayBalance } from 'utils/formatBalance';
import { getEggPrice } from 'utils/calls/bubbleMarketplace';
import { ToastDescriptionWithTx } from 'components/Toast';
import { ethers } from 'ethers';
import useApproveConfirmTransaction from 'hooks/useApproveConfirmTransaction';
import { Modal, Text, Flex, Skeleton, Button, ArrowForwardIcon, useModal } from 'bubbles-uikit';
import ConnectWalletButton from 'components/ConnectWalletButton';
import GifModal from 'components/GifModal';
import * as Egg from 'config/constants/egg';
import { EggInfoContract } from 'config/constants/egg';

const StyledModal = styled(Modal)`
  min-width: 280px;
  max-width: 320px;
`;

const BuyEggModel: React.FC<{
  onDismiss?: () => void;
}> = ({ onDismiss }) => {
  console.info('IN BUY EGG MODEL');

  const { account } = useWeb3React();
  const { t } = useTranslation();
  const { theme } = useTheme();

  const bubbleContract = useMockTokenContract();
  const marketContract = useBubbleMarketplaceContract();
  const { toastSuccess, toastError } = useToast();
  // getting egg details to show that info on the modal
  const addr = marketContract.address;
  const own = marketContract.owner;
  const ty = marketContract.type;
  const eggCon: EggInfoContract = { tokenId: addr, owner: own, eggType: ty };
  const purchaseDetails = Egg.makeEggObj(eggCon);
  //  added by Ash
  const { callWithGasPrice } = useCallWithGasPrice();
  const [totalCost, setTotalCost] = useState(BIG_ZERO);
  const [userNotEnoughCake, setUserNotEnoughCake] = useState(false);
  const { balance: userBubble, fetchStatus } = useTokenContractBalance(bubbleContract);

  const hasFetchedBalance = fetchStatus === FetchStatus.SUCCESS;
  const userBubbleDisplayBalance = getFullDisplayBalance(userBubble, 18, 3);

  const eggPrice = useCallback(async () => {
    const p = await getEggPrice(marketContract);
    if (p.result) {
      const inputAsInt = parseInt(p.result, 10);
      const inputAsBN = new BigNumber(inputAsInt);
      setTotalCost(inputAsBN);
      return inputAsBN;
    }
    toastError('Error getting the egg price.', p.error);
    return new BigNumber('Infinity');
  }, [marketContract, toastError]);

  useEffect(() => {
    eggPrice();
  }, [eggPrice, marketContract]);

  const eggDisplayPrice = getFullDisplayBalance(totalCost, 18, 3);

  const validateInput = useCallback(
    (inputNumber: BigNumber) => {
      if (inputNumber.lt(userBubble) && inputNumber.eq(totalCost)) {
        setUserNotEnoughCake(true);
      } else {
        setUserNotEnoughCake(false);
      }
    },
    [totalCost, userBubble],
  );

  const handleInputChange = (input: string) => {
    // Force input to integer
    const inputAsInt = parseInt(input, 10);
    const inputAsBN = new BigNumber(inputAsInt);
    validateInput(inputAsBN);
  };
  // making a modal to show details of the egg
  function eggModal() {
    console.log('egg k andar');
    onPresentShowEggModal();
  }
  const [onPresentShowEggModal] = useModal(
    <GifModal
      gifSrc="https://3961423229-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-Mjo_Dop_CQYHP_e6iyh%2Fuploads%2FqHv1OHNpvMwk01oWtdyC%2FPearl-Hatch.gif?alt=media&token=30503f9e-e24c-4da0-b4d3-0a786e06db5e"
      title="Pearl Bubble"
    >
      <Text color="textSubtle">Owner : {purchaseDetails.owner}</Text>
      <Text color="textSubtle">ID : {purchaseDetails.id}</Text>
      <Text color="textSubtle">Type : {purchaseDetails.type}</Text>
      <Text color="textSubtle">Maturity : {purchaseDetails.maturity}</Text>
      <Text color="textSubtle">Rarity : {purchaseDetails.rarity}</Text>
      <Text color="textSubtle">Hash rate : {purchaseDetails.hashrate}</Text>
    </GifModal>,
  );

  // added by Ash

  const { isApproving, isApproved, isConfirmed, isConfirming, handleApprove, handleConfirm } =
    useApproveConfirmTransaction({
      onRequiresApproval: async () => {
        console.log('onRequiresApproval');
        try {
          const response = await bubbleContract.allowance(account, marketContract.address);
          const currentAllowance = ethersToBigNumber(response);
          return currentAllowance.gt(0);
        } catch (error) {
          return false;
        }
      },
      onApprove: () => {
        console.log('onApprove');

        return callWithGasPrice(bubbleContract, 'approve', [marketContract.address, ethers.constants.MaxUint256]);
      },
      onApproveSuccess: async ({ receipt }) => {
        console.log('onApproveSuccess');

        toastSuccess(
          t('Contract enabled - you can now purchase Eggs'),
          <ToastDescriptionWithTx txHash={receipt.transactionHash} />,
        );
      },
      onConfirm: () => {
        console.log('onConfirm');

        return callWithGasPrice(marketContract, 'buyNewEgg');
      },
      onSuccess: async ({ receipt }) => {
        console.log('onSuccess');

        toastSuccess(t('Egg purchased!'), <ToastDescriptionWithTx txHash={receipt.transactionHash} />);
        console.log(receipt.logs);
        onDismiss();

        eggModal();
      },
    });

  console.info('IN BUY EGG MODEL2');

  const getErrorMessage = () => {
    console.info('buyEggModel->getError');

    if (userNotEnoughCake) return t('Insufficient BUBBLE balance');
    return t('Some error Occured');
  };

  const disableBuying = !isApproved || isConfirmed || userNotEnoughCake;

  return (
    <StyledModal title={t('Buy Egg')} onDismiss={onDismiss} headerBackground={theme.colors.gradients.cardHeader}>
      <Flex flexDirection="column">
        <Flex>
          <Text fontSize="16px" bold>
            {eggDisplayPrice} BUBBLES/egg
          </Text>
        </Flex>

        <Flex alignItems="center" justifyContent="flex-end" mt="4px" mb="12px">
          <Flex justifyContent="flex-end" flexDirection="column">
            {account && userNotEnoughCake && (
              <Text fontSize="12px" color="failure">
                {getErrorMessage()}
              </Text>
            )}
            {account && (
              <Flex justifyContent="flex-end">
                <Text fontSize="12px" color="textSubtle" mr="4px">
                  BUBBLE {t('Balance')}:
                </Text>
                {hasFetchedBalance ? (
                  <Text fontSize="12px" color="textSubtle">
                    {userBubbleDisplayBalance}
                  </Text>
                ) : (
                  <Skeleton width={50} height={12} />
                )}
              </Flex>
            )}
          </Flex>
        </Flex>

        {account ? (
          <>
            <ApproveConfirmButtons
              isApproveDisabled={isApproved}
              isApproving={isApproving}
              isConfirmDisabled={disableBuying}
              isConfirming={isConfirming}
              onApprove={handleApprove}
              onConfirm={handleConfirm}
              buttonArrangement={ButtonArrangement.SEQUENTIAL}
              confirmLabel={t('Buy Egg')}
              confirmId="lotteryBuyInstant"
            />
            {/* {isApproved && (
              <Button
                variant="secondary"
                mt="8px"
                endIcon={
                  <ArrowForwardIcon
                    ml="2px"
                    color={disableBuying || isConfirming ? 'disabled' : 'primary'}
                    height="24px"
                    width="24px"
                  />
                }
                disabled={disableBuying || isConfirming}
                onClick={() => {
                  console.log('clicked');
                }}
              >
                {t('View/Edit Numbers')}
              </Button>
            )} */}
          </>
        ) : (
          <ConnectWalletButton />
        )}

        <Text mt="24px" fontSize="12px" color="textSubtle">
          {t('Buy egg info here')}
        </Text>
      </Flex>
    </StyledModal>
  );
};

export default BuyEggModel;
