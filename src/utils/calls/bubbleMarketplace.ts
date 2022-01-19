// Functions Supported for the BubblesMarketplace.sol
import { ethers } from 'ethers';
import { get } from 'lodash';
import { getAddress } from 'ethers/lib/utils';

// Read Functions
export const getEggPerWeek = async (contract: ethers.Contract): Promise<{ result?: string; error?: string }> => {
  const method = 'EGG_PER_WEEK';
  try {
    const contractMethod = get(contract, method);
    const tx = await contractMethod();
    console.info(method, tx);
    return { result: tx.toString() };
  } catch (error) {
    console.error(method, error);
    return { error: error.toString() };
  }
};

export const getEggTypeLen = async (contract: ethers.Contract): Promise<{ result?: string; error?: string }> => {
  const method = 'EGG_TYPE_LENGTH';
  try {
    const contractMethod = get(contract, method);
    const tx = await contractMethod();
    console.info(method, tx);
    return { result: tx.toString() };
  } catch (error) {
    console.error(method, error);
    return { error: error.toString() };
  }
};

export const getRarityHashrate = async (
  contract: ethers.Contract,
  index: number,
): Promise<{ result?: string; error?: string }> => {
  const method = 'RARITY_HASHRATE';
  try {
    const contractMethod = get(contract, method);
    const tx = await contractMethod(index);
    console.info(method, tx);
    return { result: tx.toString() };
  } catch (error) {
    console.error(method, error);
    return { error: error.toString() };
  }
};

export const getBidBalance = async (
  contract: ethers.Contract,
  address: string,
): Promise<{ result?: string; error?: string }> => {
  const method = 'bidBalance';
  try {
    const addr = getAddress(address);
    const contractMethod = get(contract, method);
    const tx = await contractMethod(addr);
    console.info(method, tx);
    return { result: tx.toString() };
  } catch (error) {
    console.error(method, error);
    return { error: error.toString() };
  }
};

export const getBidId = async (contract: ethers.Contract): Promise<{ result?: string; error?: string }> => {
  const method = 'bidId';
  try {
    const contractMethod = get(contract, method);
    const tx = await contractMethod();
    console.info(method, tx);
    return { result: tx.toString() };
  } catch (error) {
    console.error(method, error);
    return { error: error.toString() };
  }
};

export const getBidderId = async (contract: ethers.Contract): Promise<{ result?: string; error?: string }> => {
  const method = 'bidderId';
  try {
    const contractMethod = get(contract, method);
    const tx = await contractMethod();
    console.info(method, tx);
    return { result: tx.toString() };
  } catch (error) {
    console.error(method, error);
    return { error: error.toString() };
  }
};

export const getCurrentEgg = async (contract: ethers.Contract): Promise<{ result?: string; error?: string }> => {
  const method = 'currentEgg';
  try {
    const contractMethod = get(contract, method);
    const tx = await contractMethod();
    console.info(method, tx);
    return { result: tx.toString() };
  } catch (error) {
    console.error(method, error);
    return { error: error.toString() };
  }
};

export const getCurrentSalePrice = async (
  contract: ethers.Contract,
  tokenId: number,
  ownerAddress: string,
): Promise<{ result?: string; error?: string }> => {
  const method = 'currentSalePrice';
  try {
    const addr = getAddress(ownerAddress);
    const contractMethod = get(contract, method);
    const tx = await contractMethod(tokenId, addr);
    console.info(method, tx);
    return { result: tx.toString() };
  } catch (error) {
    console.error(method, error);
    return { error: error.toString() };
  }
};

export const getCurrentTokenId = async (contract: ethers.Contract): Promise<{ result?: string; error?: string }> => {
  const method = 'currentTokenId';
  try {
    const contractMethod = get(contract, method);
    const tx = await contractMethod();
    console.info(method, tx);
    return { result: tx.toString() };
  } catch (error) {
    console.error(method, error);
    return { error: error.toString() };
  }
};

export const getEggInfo = async (
  contract: ethers.Contract,
  tokenId: number,
): Promise<{
  result?: {
    tokenId: string;
    owner: string;
    eggType: string;
  };
  error?: string;
}> => {
  const method = 'eggInfo';
  try {
    const contractMethod = get(contract, method);
    const tx = await contractMethod(tokenId);
    console.info(method, tx);
    return { result: { tokenId: tx[0].toString(), owner: tx[1].toString(), eggType: tx[2].toString() } };
  } catch (error) {
    console.error(method, error);
    return { error: error.toString() };
  }
};

export const getEggPrice = async (contract: ethers.Contract): Promise<{ result?: string; error?: string }> => {
  const method = 'eggPrice';
  try {
    const contractMethod = get(contract, method);
    const tx = await contractMethod();
    console.info(method, tx);
    return { result: tx.toString() };
  } catch (error) {
    console.error(method, error);
    return { error: error.toString() };
  }
};

export const getActiveBid = async (
  contract: ethers.Contract,
  tokenId: number,
  ownerAddress: string,
): Promise<{
  result?: {
    bidder: string;
    amount: string;
    startTime: string;
    endTime: string;
  };
  error?: string;
}> => {
  const method = 'getActiveBid';
  try {
    const addr = getAddress(ownerAddress);
    const contractMethod = get(contract, method);
    const tx = await contractMethod(tokenId, addr);
    console.info(method, tx);
    return {
      result: {
        bidder: tx[0].toString(),
        amount: tx[1].toString(),
        startTime: tx[2].toString(),
        endTime: tx[3].toString(),
      },
    };
  } catch (error) {
    console.error(method, error);
    return { error: error.toString() };
  }
};

export const getSalePrice = async (
  contract: ethers.Contract,
  tokenId: number,
  ownerAddress: string,
): Promise<{
  result?: {
    seller: string;
    amount: string;
  };
  error?: string;
}> => {
  const method = 'getSalePrice';
  try {
    const addr = getAddress(ownerAddress);
    const contractMethod = get(contract, method);
    const tx = await contractMethod(tokenId, addr);
    console.info(method, tx);
    return {
      result: {
        seller: tx[0].toString(),
        amount: tx[1].toString(),
      },
    };
  } catch (error) {
    console.error(method, error);
    return { error: error.toString() };
  }
};

// Write Functions
