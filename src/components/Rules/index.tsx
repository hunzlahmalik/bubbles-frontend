import React from 'react';
import styled from 'styled-components';

const Container = styled.div<{ backgroundColor?: string }>`
  width: 100%;
  height: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor ?? '#f7f7f783'};
  padding: 20px;
  border-radius: 15px;
`;

const RulesHeading = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 700;
  color: #191326;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const RulesContent = styled.div`
  font-size: 13px;
  color: #191326;
`;

const LI = styled.li`
  margin-bottom: 10px;
`;

export interface RulesProps {
  title: string;
  moreinfo?: string;
  backgroundColor?: string;
  rulesContent: string[];
}

function ItemRules({ title, moreinfo, backgroundColor, rulesContent }: RulesProps) {
  return (
    <Container backgroundColor={backgroundColor}>
      <RulesHeading>
        {title}
        {moreinfo && (
          <a href={moreinfo} target="_blank" rel="noreferrer" style={{ color: 'black' }}>
            More Info
          </a>
        )}
      </RulesHeading>
      <RulesContent>
        <ol>
          {rulesContent.map((text) => {
            return <LI key={text}>{text}</LI>;
          })}
        </ol>
      </RulesContent>
    </Container>
  );
}

export default ItemRules;
