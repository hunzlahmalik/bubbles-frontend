import React from 'react';
// import { lightColors } from 'bubbles-uikit';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f7f7f783;
  padding: 20px;
  border-radius: 15px;
  border: 1px solid black;
`;

const RulesHeading = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 700;
  color: #191326; //Light colors contrast
  justify-content: space-between;
  margin-bottom: 12px;
`;

const RulesContent = styled.div`
  font-size: 13px;
  color: #191326; //Light colors contrast
`;

const LI = styled.li`
  margin-bottom: 10px;
`;

function Rules({ rulesContent }: { rulesContent: string[] }) {
  return (
    <Container>
      <RulesHeading>
        Blind Box Rules
        <a href="##" target="_blank" style={{ color: 'black' }}>
          More Info
        </a>
      </RulesHeading>
      <RulesContent>
        <ol>
          {rulesContent.map((text) => {
            return <LI>{text}</LI>;
          })}
        </ol>
      </RulesContent>
    </Container>
  );
}

export default Rules;
