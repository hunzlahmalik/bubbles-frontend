import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledCollectibleCard } from './styles';
import CardBody from './CardBody';
import { CollectibleCardProps } from './types';
import { nftsBaseUrl, pancakeBunniesAddress } from '../../market/constants';

const CardBox = styled.div`
  
  @media screen and (max-width:1080px){
    max-width:calc(33.3333%-30px);
  }
  @media screen and (min-width:960px){
    max-width:calc(33.3333%-30px);
  }
  width:100%;
  min-width:250px;
  flex:1;
  margin:30px 15px 0;
  border-radius:16px;
  overflow:hidden;
  flex-direction:cloumn;
  display-flex;
`;

const CollectibleLinkCard: React.FC<CollectibleCardProps> = ({ nft, nftLocation, currentAskPrice, ...props }) => {
  const urlId =
    nft.collectionAddress.toLowerCase() === pancakeBunniesAddress.toLowerCase() ? nft.attributes[0].value : nft.tokenId;
  return (
    <CardBox>
      <StyledCollectibleCard {...props}>
        <Link to={`${nftsBaseUrl}/collections/${nft.collectionAddress}/${urlId}`}>
          <CardBody nft={nft} nftLocation={nftLocation} currentAskPrice={currentAskPrice} />
        </Link>
      </StyledCollectibleCard>
    </CardBox>
  );
};

export default CollectibleLinkCard;
