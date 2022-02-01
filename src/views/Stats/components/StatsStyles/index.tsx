import styled from 'styled-components';
import { darkColors } from 'bubbles-uikit';

export interface StyledStatsProps {
  alignment?: string;
  padding?: string;
}

export const StyledStats = styled.div<StyledStatsProps>`
  text-align: ${({ alignment }) => alignment ?? 'left'};
  box-shadow: 0 10px 15px -3px ${darkColors.cardShadow}, 0 4px 6px -2px ${darkColors.cardShadow};
  background: ${darkColors.background};
  border: 1px solid ${darkColors.cardBorder};
  border-radius: 32px;
  padding: ${({ padding }) => padding ?? '30px'};
  max-width: 100%;
  margin: auto;
  min-width: 230px;
  height: 100%;
`;

export const StatsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: -15px;
  margin-right: -12px;
  margin-left: -12px;
`;
