import React from 'react';
import styled from 'styled-components';
import { Heading } from 'bubbles-uikit';
import NFTChart from './NFTChart';
import ChartLegend from './ChartLegend';

const Container = styled.div`
  margin-bottom: 30px;
  margin-left: 8%;
  width: 500px;
  text-align: left;
  &:last-child {
    margin-bottom: 0px;
  }
  @media screen and (max-width: 760px) {
    margin-left: 0;
    width: 300px;
  }
`;

const LegendContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: fit-content;
  margin-top: 30px;
`;

interface ChartProps {
  totalNFT: number;
  inCirculation: number;
  staked: number;
  height?: number;
  width?: number;
  donutWidth?: number;
}

function ChartComponent({ totalNFT, inCirculation, staked, ...props }: ChartProps) {
  return (
    <>
      <Container>
        <Heading as="h6" scale="md" color="secondary">
          NFT Supply
        </Heading>
        <div
          style={{
            marginTop: '20px',
            height: 'fit-content',
          }}
        >
          <NFTChart {...{ totalNFT, inCirculation, staked, ...props }} />
          <LegendContainer>
            <ChartLegend hoverColor="#517ddb" title="Total Supply" value={totalNFT.toString()} />
            <ChartLegend hoverColor="#fec62d" title="In Circulation" value={inCirculation.toString()} />
            <ChartLegend hoverColor="#ea3943" title="Staked" value={staked.toString()} />
          </LegendContainer>
        </div>
      </Container>
    </>
  );
}

export default ChartComponent;
