// NOT USING THIS FILE @crackaf

import { useCallback } from 'react';
import { useCallWithGasPrice } from './useCallWithGasPrice';
import { useBubbleMarketplaceContract } from './useContract';

export const useBuyNewEgg = () => {
  const contract = useBubbleMarketplaceContract();
  const { callWithGasPrice } = useCallWithGasPrice();
  const handleBuy = useCallback(async () => {
    const tx = await callWithGasPrice(contract, 'buyNewEgg');
    const receipt = await tx.wait();
    console.info('buyNewEgg', tx, receipt);
    return receipt.status;
  }, [contract, callWithGasPrice]);

  return { handleBuy };
};
