/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ethers } from 'ethers';
import { useCall, useContractCall, useContractMethodCall } from 'hooks/useContractCall';
import { useCallWithGasPrice } from 'hooks/useCallWithGasPrice';
import { useMockTokenContract, useBubbleMarketplaceContract } from 'hooks/useContract';
import React, { useState } from 'react';
import { useSingleCallResult } from 'state/multicall/hooks';
import {
  getMockTokenContract,
  getBubbleTokenContract,
  getBubbleMarketplaceContract,
  getBubbleNFTContract,
  getBubblePoolContract,
  getCBFIFarmContract,
} from 'utils/contractHelpers';
import { getEggInfo, getEggPrice } from 'utils/calls';

const Temp: React.FC = () => {
  // const providerrpc = new ethers.providers.StaticJsonRpcProvider('https://data-seed-prebsc-1-s1.binance.org:8545');
  const { callWithGasPrice } = useCallWithGasPrice();
  const contract = useBubbleMarketplaceContract();

  // const { contractCall } = useContractCall();
  // const contract = useBubbleMarketplaceContract();
  // const contract1 = getMockTokenContract(providerrpc);
  // const contract2 = getBubbleTokenContract(providerrpc);
  // const contract3 = getBubbleNFTContract(providerrpc);
  // const contract4 = getBubbleMarketplaceContract(providerrpc);
  // const contract5 = getCBFIFarmContract(providerrpc);
  // const contract6 = getBubblePoolContract(providerrpc);
  // const [name1, setname1] = useState('none');
  // const [name2, setname2] = useState({});
  // const [name3, setname3] = useState('none');
  // const [name4, setname4] = useState('none');
  // const [name5, setname5] = useState('none');
  // const [name6, setname6] = useState('none');
  // // console.log('Provide', simpleRpcProvider);
  // const hehe = new ethers.Contract(addr, mockTokenAbi, providerrpc);
  // // console.log(hehe);
  // console.log('isSigned', !!hehe.signer);
  // console.log('isprovider', !!hehe.provider);
  // console.log('Provider', hehe.provider);

  // calling contracts
  // contract.name().then(setname1);
  // contract1.name().then(setname1);
  // contract2.name().then(setname2);
  // contract3.name().then(setname3);
  // contract4.name().then(setname4);
  // contract5.name().then(setname5);
  // contract6.name().then(setname6);

  // contract.balanceOf('0x019b78fd0027563687f4b15e5e20a55a0d33ffd4').then(setname2);

  return (
    <>
      <h1>Hello World</h1>
      {/* <h1>{geteggs}</h1> */}
      {/* <h1>{name1}</h1>
      <h1>{JSON.stringify(name2)}</h1> */}
      {/* <button
        onClick={async () => {
          const addr = '"0x0d5d6a744e087347e3303a7ca125db9e7aa27a31"';
          const amount = 11;
          // calling for the transtion
          const tx = await callWithGasPrice(contract, 'approve', [addr, amount]);
          const receipt = await tx.wait();
          console.log('some thinsgs', tx);
          console.log('some t2', receipt);
        }}
      >
        Click me
      </button> */}
      <button
        onClick={async () => {
          const par = [
            '0x584832ca31d3f6f94f4ed2610a50000000000000000000000000000000000000',
            '0x0d5d6a744e087347e3303a7ca125db9e7aa27a31',
          ];
          // marketCall(contract, 'EGG_PER_WEEK').then(console.log);
          // marketCall(contract, 'adminWallet').then(console.log);
          // marketCall(contract, 'adminPercentage').then(console.log);
          // marketCall(contract, 'RARITY_HASHRATE', [0]).then(console.log);
          // marketCall(contract, 'eggInfo', [0]);
          // const tx = await callWithGasPrice(contract, 'grantRole', par);
          // const receopt = tx.wait();
          // console.info(tx);
          // console.info(receopt);
          // // marketCall(
          // //   contract,
          // //   'grantRole',
          // //   [0x584832ca31d3f6f94f4ed2610a410000, "0x0d5d6a744e087347e3303a7ca125db9e7aa27a31"],
          // // ).then(console.log);
          // marketCall(contract, 'hasRole', par);
          console.log('Strat');

          getEggInfo(contract, 0).then(console.log);
          getEggPrice(contract).then(console.log);
          console.log('End');
        }}
      >
        Click me eggs
      </button>
      {/* <h1>{name3}</h1>
      <h1>{name4}</h1>
      <h1>{name5}</h1>
      <h1>{name6}</h1> */}
    </>
  );
};
export default Temp;
