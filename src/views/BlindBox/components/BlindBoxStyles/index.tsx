import styled, { css } from 'styled-components';

export const ItemContainer = styled.div<{ height?: string; width?: string; shouldHover?: boolean }>`
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? '100%'};
  display: flex;
  flex-direction: row;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px;
  transition: all 0.3s ease-in-out;
  padding-bottom: 10px;
  margin: 15px;
  ${({ shouldHover }) =>
    shouldHover &&
    css`
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
        transform: translate3d(0px, -1px, 0px);
      }
    `}

  @media screen and (max-width: 760px) {
    width: 90%;
    height: fit-content;
    flex-direction: column;
    padding-bottom: 20px;
  }
`;

export const InnerDiv = styled.div<{ alignment?: boolean }>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: ${({ alignment }) => (alignment ? 'left' : 'center')};
  width: 100%;
  height: 100%;
  margin-top: ${({ alignment }) => (alignment ? '25px' : '20px')};
  @media screen and (max-width: 760px) {
    /* margin-bottom: -20px; */
  }
`;

export const Title = styled.div<{ fontSize?: string }>`
  font-size: ${({ fontSize }) => fontSize ?? '28px'};
  font-weight: 600;
  margin-left: 20px;
  height: fit-content;
  line-height: 1.1;
  color: #431216;
  word-break: break-word;
  @media screen and (max-width: 760px) {
    margin-bottom: 20px;
  }
`;
