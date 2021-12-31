import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { nftsBaseUrl } from 'views/Nft/market/constants';
import { StyledCollectionCard } from './styles';
import { CollectionCardProps } from './types';
import CollectionCardBody from './CollectionCardBody';

const CardBox = styled.div`
  
  @media screen and (max-width:1080px){
    max-width:calc(33.3333%-30px);
  }
  @media screen and (min-width:960px){
    max-width:calc(33.3333%-30px);
  }
  width:100%;
  min-width:250px;
  max-width:250px;
  flex:1;
  margin:30px 15px 0;
  border-radius:16px;
  overflow:hidden;
  flex-direction:cloumn;
  display-flex;
`;

const CollectionLinkCard: React.FC<CollectionCardProps> = ({
  collection,
  collectionImg,
  collectionVolume,
  collectionItems,
  collectionSupply,
  ...props
}) => {
  // const urlId=collection.address;
  return (
    <>
      <CardBox>
        <StyledCollectionCard {...props}>
          <Link to={`${nftsBaseUrl}/collections/${collection.address}`}>
            <CollectionCardBody
              collection={collection}
              collectionImg={collectionImg}
              collectionVolume={collectionVolume}
              collectionItems={collectionItems}
              collectionSupply={collectionSupply}
            />
          </Link>
        </StyledCollectionCard>
      </CardBox>
    </>
  );
};

export default CollectionLinkCard;
