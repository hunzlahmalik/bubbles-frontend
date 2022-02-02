import { EggImage, EggInfo, EggInfoContract, EggType, IEgg } from './types';

export const EGGIMAGES: EggImage[] = [
  { url: '#' },
  { url: '#' },
  { url: '#' },
  { url: '#' },
  { url: '#' },
  { url: '#' },
  { url: '#' },
  { url: '#' },
];

export const EGGS: IEgg[] = [{ id: '123', type: 1, rarity: 0.01, hashrate: 1000, maturity: 1, blockchain: 'BSC' }];

export const makeEggObj = (eggInfo: EggInfoContract): EggInfo => {
  return {
    owner: eggInfo.owner,
    id: eggInfo.tokenId,
    type: parseInt(eggInfo.eggType) as EggType,
    image: EGGIMAGES[eggInfo.eggType],
    maturity: 1, // need calculation
    rarity: 1, // need calculation
    hashrate: 1000, // need calculation
    blockchain: 'BSC',
  };
};
