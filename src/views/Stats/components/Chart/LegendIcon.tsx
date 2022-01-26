import * as React from 'react';
import styled from 'styled-components';

const DIV = styled.div<{ fillColor: string }>`
  border-radius: 50%;
  border: 1px solid transparent;
  margin: 3px 0 3px 3px;
  height: 10px;
  width: 10px;
  background-color: ${({ fillColor }) => fillColor};
`;

function LegendIcon({ fillColor }) {
  return <DIV fillColor={fillColor} />;
}

export default LegendIcon;
