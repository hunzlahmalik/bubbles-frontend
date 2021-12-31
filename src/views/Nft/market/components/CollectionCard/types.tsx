import { CardProps } from 'bubbles-uikit';
import { Collection } from 'state/nftMarket/types';

export interface CollectionCardProps extends CardProps {
  collection: Collection;
  collectionImg?: any;
  collectionVolume?: any;
  collectionItems?: any;
  collectionSupply?: any;
}
