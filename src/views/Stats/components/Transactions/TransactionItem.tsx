import React from 'react';
import styled from 'styled-components';

const TransContainer = styled.div`
  background-color: #fcf4f4;
  padding: 10px;
  width: 100%;
  height: 100%;
  border-radius: 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TransContent = styled.div<{ fontWeight?: string }>`
  font-weight: ${({ fontWeight }) => fontWeight ?? 'normal'};
  text-align: left;
  margin-left: 20px;
  margin-bottom: 5px;
`;

const Container = styled.div<{ maxWidth?: string; height?: string }>`
  max-width: ${({ maxWidth }) => maxWidth ?? '100%'};
  height: ${({ height }) => height};
  margin-bottom: 10px;
`;

export interface TransactionItemProps {
  title: string;
  content: string;
  maxWidth?: string;
  height?: string;
}

function TransactionItem({ title, content, maxWidth, height }: TransactionItemProps) {
  return (
    <Container maxWidth={maxWidth} height={height}>
      <TransContainer>
        <TransContent>{title}</TransContent>
        <TransContent fontWeight="700">{content}</TransContent>
      </TransContainer>
    </Container>
  );
}

export default TransactionItem;
