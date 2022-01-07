import styled from 'styled-components';

export const RowDiv = styled.tr`
  display: flex;
  height: fit-content;
  width: 100%;
  margin: 10px 0;
  flex-direction: row;
  justify-content: space-around;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 6%);
  -webkit-box-shadow: 0 4px 8px 0 rgb(0 0 0 / 6%);
  background-color: #fff;
  border-radius: 24px;
  padding: 24px;
`;

export const Item = styled.td<{
  fontWeight?: string;
  fontColor?: string;
  hide?: boolean;
}>`
  flex: 1 1 auto;
  width: fit-content;
  text-align: center;
  width: 25%;
  font-weight: ${({ fontWeight }) => fontWeight ?? 'normal'};
  color: ${({ fontColor }) => fontColor ?? 'black'};
  @media screen and (max-width: 880px) {
    ${({ hide }) =>
      hide &&
      `
        display: none;`}
  }
`;
