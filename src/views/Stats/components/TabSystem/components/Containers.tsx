import styled from 'styled-components';

export const Container = styled.div<{ padding?: string; changeAlign?: boolean }>`
  display: flex;
  flex-direction: row;
  padding: ${({ padding }) => padding ?? '0px'};
  width: 100%;
  height: 450px;
  @media screen and (max-width: 760px) {
    height: fit-content;
    flex-direction: ${({ changeAlign }) => (changeAlign ? 'column' : 'row')};
  }
`;

export const TabContent = styled.div`
  width: 75%;
  height: fit-content;
  @media screen and (max-width: 760px) {
    margin-left: 8px;
    padding-left: 4px;
    width: 80%;
  }
`;
