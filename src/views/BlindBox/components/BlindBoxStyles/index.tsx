import styled, { css } from 'styled-components';
import { darkColors } from 'bubbles-uikit';

export const ItemContainer = styled.div<{ height?: string; width?: string; shouldHover?: boolean }>`
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? '100%'};
  display: flex;
  flex-direction: row;
  border-radius: 15px;
  box-shadow: 0 10px 15px -3px ${darkColors.cardShadow}, 0 4px 6px -2px ${darkColors.cardShadow};
  background: ${darkColors.background};
  border: 1px solid ${darkColors.cardBorder};
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
  color: ${darkColors.text};
  word-break: break-word;
  @media screen and (max-width: 760px) {
    margin-bottom: 20px;
  }
`;
