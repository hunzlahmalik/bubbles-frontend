import styled, { css } from 'styled-components';

export const IconOuter = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in-out;
`;

export const OuterDiv = styled.div`
  display: flex;
  gap: 10px;
  height: 100%;
  width: 100%;
`;

export const AlphaView = styled.div<{
  backgroundImage: string;
  item?: boolean;
}>`
  background-image: url(${({ backgroundImage }) => backgroundImage ?? '#'});
  background-size: contain;
  background-size: 600%;
  width: 100%;
  height: 100%;
  background-position: ${({ item }) => (item ? '40% 50%' : '70% 50%')};
  filter: blur(25px);
`;

export const InnerView = styled.div<{
  backgroundImage: string;
  hoverImage?: string;
}>`
  background-image: url(${({ backgroundImage }) => backgroundImage ?? '#'});
  background-size: cover;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  ${({ hoverImage }) =>
    hoverImage &&
    css`
      ${OuterDiv}:hover & {
        background-image: url(${hoverImage});
      }
    `}

  ${({ hoverImage }) =>
    !hoverImage &&
    css`
      ${IconOuter}:hover & {
        transform: scale(1.05);
      }
    `}
    @media screen and (max-width: 760px) {
    height: 80%;
    width: 90%;
    top: 10%;
  }
`;

export const IconView = styled.div`
  border-radius: 16px;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  overflow: hidden;
`;
