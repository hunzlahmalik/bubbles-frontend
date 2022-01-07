import { ethers } from 'ethers';
import React, { useState } from 'react';
import {
  getMockTokenContract,
  getBubbleTokenContract,
  getBubbleMarketplaceContract,
  getBubbleNFTContract,
  getBubblePoolContract,
  getCBFIFarmContract,
} from 'utils/contractHelpers';

const Temp: React.FC = () => {
  const providerrpc = new ethers.providers.StaticJsonRpcProvider('https://data-seed-prebsc-1-s1.binance.org:8545');

  const contract1 = getMockTokenContract(providerrpc);
  const contract2 = getBubbleTokenContract(providerrpc);
  const contract3 = getBubbleNFTContract(providerrpc);
  const contract4 = getBubbleMarketplaceContract(providerrpc);
  const contract5 = getCBFIFarmContract(providerrpc);
  const contract6 = getBubblePoolContract(providerrpc);

  const [name1, setname1] = useState('none');
  const [name2, setname2] = useState('none');
  const [name3, setname3] = useState('none');
  const [name4, setname4] = useState('none');
  const [name5, setname5] = useState('none');
  const [name6, setname6] = useState('none');
  // // console.log('Provide', simpleRpcProvider);
  // const hehe = new ethers.Contract(addr, mockTokenAbi, providerrpc);
  // // console.log(hehe);
  // console.log('isSigned', !!hehe.signer);
  // console.log('isprovider', !!hehe.provider);
  // console.log('Provider', hehe.provider);

  // calling contracts
  contract1.name().then(setname1);
  contract2.name().then(setname2);
  contract3.name().then(setname3);
  // contract4.name().then(setname4);
  // contract5.name().then(setname5);
  // contract6.name().then(setname6);

  return (
    <>
      <h1>Hello World</h1>
      <h1>{name1}</h1>
      <h1>{name2}</h1>
      <h1>{name3}</h1>
      <h1>{name4}</h1>
      <h1>{name5}</h1>
      <h1>{name6}</h1>
    </>
  );
};

export default Temp;
