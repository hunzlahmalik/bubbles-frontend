import React from 'react';
import styled from 'styled-components';
import LegendIcon from './LegendIcon';

const LegendContainer = styled.div<{ hoverColor?: string }>`
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: fit-content;
  padding: 2px;
  margin: 2px 5px;
  color: black;
  border-radius: 10px;
  background-color: white;
  border: 1px solid transparent;
  transition: 0.4s;
  :hover {
    color: white;
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
