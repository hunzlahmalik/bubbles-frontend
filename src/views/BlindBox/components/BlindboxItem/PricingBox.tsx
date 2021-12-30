/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

const GameBaseBottomBoxes = styled.div`
  /* -webkit-box-flex: 1; */
  /* flex: 1; */
  min-width: 250px;
  margin-top: 24px;
  margin-right: 12px;
  margin-bottom: 0px;
  margin-left: 12px;
  box-shadow: 2px 4px 8px 0 rgb(0 0 0 / 6%), 0 -1px 2px 0 rgb(0 0 0 / 2%);
  border-radius: 24px;
  padding: 24px;
`;
const GameBaseBottomBoxesTitle = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 24px;
  color: #694f4e;
`;

const GameBaseBottomBoxesValue = styled.div`
  font-size: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 24px;
  color: #431216;
  line-height: 1.1;
  margin-top: 10px;
  margin-left: 4px;
`;
const GameBaseBottomBoxesAmnt = styled.div`
  font-size: 14px;
  color: #694f4e;
  margin-left: 4px;
  margin-top: 20px;
`;

export const PricingBox = (user: { id?: number; name: string; amnt: any; bop: any; usd: any }) => {
  const check = (data1: { id?: number; name?: string; amnt: any; bop: any; usd: any }) => {
    if (data1.bop) {
      return (
        <div style={{ display: 'flex' }}>
          <img
            style={{ height: '24px', width: '24px', marginTop: '10px' }}
            alt="nothing"
            src="https://jojo.fun/img/icon-jojo.dd768e0c.png"
          />
          <GameBaseBottomBoxesValue>{data1.amnt}</GameBaseBottomBoxesValue>
          <GameBaseBottomBoxesAmnt>{data1.usd}</GameBaseBottomBoxesAmnt>
        </div>
      );
    }

    return (
      <>
        <GameBaseBottomBoxesValue>{data1.amnt}</GameBaseBottomBoxesValue>
      </>
    );
  };
  return (
    <>
      <GameBaseBottomBoxes>
        <GameBaseBottomBoxesTitle>{user.name}</GameBaseBottomBoxesTitle>
        {check(user)}
      </GameBaseBottomBoxes>
    </>
  );
};
