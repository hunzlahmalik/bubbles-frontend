import React from 'react';
import { RowDiv, Item } from './RowStyles';

function HeaderRow({ headerTitles }: { headerTitles: string[] }) {
  return (
    <RowDiv>
      <Item hide>{headerTitles[0]}</Item>
      <Item>{headerTitles[1]}</Item>
      <Item>{headerTitles[2]}</Item>
      <Item>{headerTitles[3]}</Item>
      <Item hide>{headerTitles[4]}</Item>
      <Item hide>{headerTitles[5]}</Item>
    </RowDiv>
  );
}

export default HeaderRow;
