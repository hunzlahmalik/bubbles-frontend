import styled from 'styled-components';

export interface StyledStatsProps {
  alignment?: string;
  padding?: string;
}

export const StyledStats = styled.div<StyledStatsProps>`
  text-align: ${({ alignment }) => alignment ?? 'left'};
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 3%), 0 4px 6px -2px rgb(0 0 0 / 1%);
  background: #fff;
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
