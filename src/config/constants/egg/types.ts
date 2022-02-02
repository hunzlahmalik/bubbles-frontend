export type EggType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type MaturityLevel = 1 | 2 | 3 | 4;

export type EggImage = {
  url: string;
  gif?: string;
};

export interface IEgg {
  id: string;
  type: EggType;
  image?: EggImage;
  maturity: MaturityLevel;
  rarity: number; // it's the percentage [0-1]
  hashrate: number;
  blockchain: 'BSC' | 'ETH';
}

export interface EggInfo extends IEgg {
  owner: string;
}

export interface EggInfoContract {
  tokenId: string;
  owner: string;
  eggType: string;
}
