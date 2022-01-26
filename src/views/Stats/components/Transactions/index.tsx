import React from 'react';
import styled from 'styled-components';
import { Heading } from 'bubbles-uikit';
import TransactionItem from './TransactionItem';

export interface TranscationProps {
  data: {
    title: string;
    transactionItems: {
      title: string;
      content: string;
      maxWidth?: string;
      height?: string;
    }[];
  }[];
}

const Container = styled.div`
  margin-bottom: 30px;
  text-align: left;
  &:last-child {
    margin-bottom: 0px;
  }
`;

const TransactionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  max-width: 400px;
`;

function Transactions({ data }: TranscationProps) {
  return (
    <TransactionsContainer>
      {data.map((transaction) => {
        return (
          <Container>
            <Heading as="h6" scale="md" color="secondary" marginLeft="10px" marginBottom="8px">
              {transaction.title}
            </Heading>
            {transaction.transactionItems.map((item) => {
              return (
                <TransactionItem
                  title={item.title}
                  content={item.content}
                  maxWidth={item.maxWidth}
                  height={item.height}
                />
              );
            })}
          </Container>
        );
      })}
    </TransactionsContainer>
  );
}

export default Transactions;
