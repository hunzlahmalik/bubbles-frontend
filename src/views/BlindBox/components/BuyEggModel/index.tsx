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
import { Modal, Text, Flex, Skeleton, Button, ArrowForwardIcon } from 'bubbles-uikit';
import ConnectWalletButton from 'components/ConnectWalletButton';

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
        onDismiss();
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
