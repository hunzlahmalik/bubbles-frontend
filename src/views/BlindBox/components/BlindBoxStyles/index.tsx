import styled, { css } from 'styled-components';

export const ItemContainer = styled.div<{ shouldHover?: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px;
  transition: all 0.3s ease-in-out;
  padding-bottom: 10px;
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
    min-height: 800px;
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

// Used in blindbox item (Not for blindbox info)
export const OuterDiv = styled.div`
  display: flex;
  gap: 10px;
  height: 100%;
  width: 100%;
`;

export const Icon = styled.div<{
  backgroundImage: string;
  hoverImage?: string;
}>`
  height: 100%;
  width: 100%;
  border-radius: 15px;
  background-image: url(${({ backgroundImage }) => backgroundImage ?? '#'});
  background-position: center;
  background-size: cover;
  ${({ hoverImage }) =>
    hoverImage &&
    css`
      ${OuterDiv}:hover & {
        background-image: url(${hoverImage});
      }
    `}

  @media screen and (max-width: 760px) {
    /* margin-bottom: 28px; */
  }

  &:nth-child(odd) {
    /* margin-right: 20px; */
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
