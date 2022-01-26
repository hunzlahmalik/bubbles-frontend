import * as React from 'react';
import styled from 'styled-components';

export const TabTitle = styled.div`
  margin: auto 0;
  display: block;
  margin-left: 10px;
  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const TabItem = styled.button<{ activeTab: boolean }>`
  width: 100%;
  height: fit-content;
  padding: 10px;
  display: flex;
  flex-direction: row;
  border: none;
  background-color: ${({ activeTab }) => (activeTab ? '#ffffff' : '#f5f5f5')};
  :hover {
    cursor: pointer;
  }
  @media screen and (max-width: 760px) {
    flex-direction: column;
  }
`;
