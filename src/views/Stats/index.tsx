import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'contexts/Localization';
import { Box, Heading } from 'bubbles-uikit';
import useTheme from 'hooks/useTheme';
import TokenStats from './components/TokenStats';
import TabSystem from './components/TabSystem';
import { StyledStats } from './components/StatsStyles';

const Container = styled.div`
  margin: 5% 3%;
  max-height: fit-content;
`;

const Stats = () => {
  // const { pathname } = useLocation();
  const { t } = useTranslation();
  const { theme } = useTheme();

  // const isValidId = isValidBox && isId && isData;

  return (
    <>
      <Box margin="2% 3%">
        <Heading as="h1" scale="xxl" color="secondary" mb="24px">
          {t('Stats')}
        </Heading>
        <Heading as="h2" scale="xl" color="secondary" mb="24px">
          {t('Bubble Token')}
        </Heading>
        <TokenStats />
      </Box>
      <Container>
        <Heading as="h2" scale="xl" color="secondary" mb="24px">
          {t('Bubble Token')}
        </Heading>
        <StyledStats alignment="center">
          <Heading as="h3" scale="lg" color="secondary">
            Bubbles
          </Heading>
          <TabSystem />
        </StyledStats>
      </Container>
    </>
  );
};

export default Stats;
