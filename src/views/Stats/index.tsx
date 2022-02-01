import React from 'react';
import { useTranslation } from 'contexts/Localization';
import { Box, Heading } from 'bubbles-uikit';
import TokenStats from './components/TokenStats';
import TabSystem from './components/TabSystem';
import { StyledStats } from './components/StatsStyles';

const Stats = () => {
  // const { pathname } = useLocation();
  const { t } = useTranslation();

  // const isValidId = isValidBox && isId && isData;

  return (
    <>
      <Box margin="2% 3%">
        <Heading as="h1" scale="xxl" color="secondary" mb="24px">
          {t('Stats testing welcome')}
        </Heading>
        <Heading as="h2" scale="xl" color="secondary" mb="24px">
          {t('Bubble Token')}
        </Heading>
        <TokenStats />
      </Box>
      <Box margin="5% 3%">
        <Heading as="h2" scale="xl" color="secondary" mb="24px">
          {t('Bubble Token')}
        </Heading>
        <StyledStats alignment="center">
          <Heading as="h3" scale="lg" ml="20px" color="secondary" mb="10px">
            {t('Bubbles')}
          </Heading>
          <TabSystem />
        </StyledStats>
      </Box>
    </>
  );
};

export default Stats;
