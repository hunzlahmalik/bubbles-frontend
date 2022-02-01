import React from 'react';
import styled from 'styled-components';
import { darkColors } from 'bubbles-uikit';
import LegendIcon from './LegendIcon';

const LegendContainer = styled.div<{ hoverColor?: string }>`
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: fit-content;
  padding: 2px;
  margin: 2px 5px;
  color: ${darkColors.textSubtle};
  border-radius: 10px;
  background-color: ${darkColors.disabled};
  border: 1px solid ${darkColors.cardBorder};
  transition: 0.4s;
  :hover {
    color: white;
    border: 1px solid ${({ hoverColor }) => hoverColor ?? darkColors.cardBorder};
    background-color: ${({ hoverColor }) => hoverColor ?? 'white'};
  }
`;

const Content = styled.div<{ isValue?: boolean }>`
  width: max-content;
  height: fit-content;
  margin: 0 4px;
  font-weight: ${({ isValue }) => (isValue ? 'bold' : 'normal')};
`;

function ChartLegend({ hoverColor, title, value }: { hoverColor: string; title: string; value: string }) {
  return (
    <LegendContainer hoverColor={hoverColor}>
      <LegendIcon fillColor={hoverColor} />
      <Content>{title}</Content>
      <Content isValue>{value}</Content>
    </LegendContainer>
  );
}

export default ChartLegend;
