import React from 'react';
import styled from 'styled-components';
import { RowDiv, Item } from './RowStyles';

const Anchor = styled.a`
  text-decoration: none;
  color: black;
`;

/**
 *
 * @param str address value: string
 * @returns shortened string which shows first 6 and last 4 values of address
 */
function shortenString(addr: string) {
  return `${addr.slice(0, 6)}...${addr.slice(addr.length - 4, addr.length)}`;
}

/**
 *
 * @param addr Account or Hash address value:string
 * @param addrType Type of address (account or transaction hash):string
 * @returns URL to the specified address (account or hash)
 */
function createUrl(addr: string, addrType: string) {
  return `https://bscscan.com/${addrType}/${addr}`;
}

function BiddingRow({
  accAddress,
  hash,
  auctionPrice,
  auctionTime,
  profits,
  status,
}: {
  accAddress: string;
  hash: string;
  auctionPrice: string;
  auctionTime: string;
  profits: number;
  status: number;
}) {
  let statusString: string;
  let color = 'black';
  if (status === 1) {
    statusString = '-';
  } else {
    statusString = 'Out';
    color = '#f15f61';
  }
  const account = shortenString(accAddress);
  const transactionHash = shortenString(hash);
  const accountURL = createUrl(accAddress, 'address');
  const hashURL = createUrl(hash, 'tx');
  return (
    <RowDiv>
      <Item hide>
        <Anchor title={accAddress} href={accountURL} rel="noopener noreferrer" target="_blank">
          {account}
        </Anchor>
      </Item>
      <Item>
        <Anchor title={hash} href={hashURL} rel="noopener noreferrer" target="_blank">
          {transactionHash}
        </Anchor>
      </Item>
      <Item fontWeight="bold">{auctionPrice}</Item>
      <Item hide>{auctionTime}</Item>
      <Item fontWeight="bold">{profits}</Item>
      <Item fontColor={color} fontWeight="bold" hide>
        {statusString}
      </Item>
    </RowDiv>
  );
}

export default BiddingRow;
