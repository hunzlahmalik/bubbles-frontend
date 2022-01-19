import { useCallback } from 'react';
import ethers, { Contract, CallOverrides, BigNumber } from 'ethers';
import { get } from 'lodash';

/**
 * Perform a contract call
 * @param contract Used to perform the call
 * @param methodName The name of the method called
 * @param methodArgs An array of arguments to pass to the method
 * @param overrides An overrides object to pass to the method. gasPrice passed in here will take priority over the price returned by useGasPrice
 * @returns https://docs.ethers.io/v5/api/providers/types/#providers-TransactionReceipt
 */
export function useContractCall(contract: Contract) {
  const contractMethodCall = useCallback(
    async (
      methodArgs: any[] = [],
      methodName: string,
      overrides: CallOverrides = null,
    ): Promise<ethers.providers.TransactionResponse | ethers.providers.TransactionReceipt | BigNumber | string> => {
      const contractMethod = get(contract, methodName);

      try {
        const tx = await contractMethod(...methodArgs, { ...overrides });
        console.info(tx);
        return tx as ethers.BigNumber;
      } catch (error) {
        console.error(error);
        return null;
      }
    },
    [contract],
  );

  return contractMethodCall;
}

/**
 * Perform a contract call
 * @param contract Used to perform the call
 * @param methodName The name of the method called
 * @param methodArgs An array of arguments to pass to the method
 * @param overrides An overrides object to pass to the method. gasPrice passed in here will take priority over the price returned by useGasPrice
 * @returns https://docs.ethers.io/v5/api/providers/types/#providers-TransactionReceipt
 */
export function useCall() {
  const contractCall = useCallback(
    async (
      contract: Contract,
      methodName: string,
      methodArgs: any[] = [],
      overrides: CallOverrides = null,
    ): Promise<ethers.providers.TransactionResponse | ethers.providers.TransactionReceipt | BigNumber | string> => {
      const contractMethod = get(contract, methodName);

      try {
        const tx = await contractMethod(...methodArgs, { ...overrides });
        console.info(tx);
        return tx as ethers.BigNumber;
      } catch (error) {
        console.error(error);
        return null;
      }
    },
    [],
  );

  return contractCall;
}

/**
 * Perform a contract call
 * @param contract Used to perform the call
 * @param methodName The name of the method called
 * @param methodArgs An array of arguments to pass to the method
 * @param overrides An overrides object to pass to the method. gasPrice passed in here will take priority over the price returned by useGasPrice
 * @returns https://docs.ethers.io/v5/api/providers/types/#providers-TransactionReceipt
 */
export function useContractMethodCall(contract: Contract, methodName: string) {
  const contractMethodCall = useCallback(
    async (
      methodArgs: any[] = [],
      overrides: CallOverrides = null,
    ): Promise<ethers.providers.TransactionResponse | ethers.providers.TransactionReceipt | BigNumber | string> => {
      const contractMethod = get(contract, methodName);

      try {
        const tx = await contractMethod(...methodArgs, { ...overrides });
        console.info(tx);
        return tx as ethers.BigNumber;
      } catch (error) {
        console.error(error);
        return null;
      }
    },
    [contract, methodName],
  );

  return contractMethodCall;
}
