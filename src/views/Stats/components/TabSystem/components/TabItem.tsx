import styled from 'styled-components';
import { darkColors } from 'bubbles-uikit';

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
  color: ${darkColors.text};
  border: none;
  background-color: ${({ activeTab }) => (activeTab ? darkColors.background : '#2a2d3c')}; // GRAY 12
  :hover {
    cursor: pointer;
  }
  @media screen and (max-width: 760px) {
    flex-direction: column;
  }
`;
