import styled from 'styled-components';

export interface HeadingProps {
  fontSize?: string;
  Color?: string;
}

const Heading = styled.h1<HeadingProps>`
  color: ${({ Color }) => Color || 'white'};
  font-size: ${({ fontSize }) => fontSize || '18px'};
  @media screen and (max-width: 760px) {
    font-size: 16px;
  }
`;
export default Heading;
