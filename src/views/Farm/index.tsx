import React from 'react';
import { Box, Flex, Heading, Text } from 'bubbles-uikit';
import styled from 'styled-components';
import { useTranslation } from 'contexts/Localization';
import ImageCard from 'components/ImageCard';
import GradientCard from 'components/GradientCard';
import { FarmCard } from './components/farmCard';

const StyledGamePool = styled.div<{ maxWidth?: string }>`
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 3%), 0 4px 6px -2px rgb(0 0 0 / 1%);
  background: #fff;
  border-radius: 32px;
  display: block;
  justify-content: center;
  padding: 32px;
  align-items: space-between;
  max-width: ${({ maxWidth }) => maxWidth || '1100px'};
  margin-top: 50px;
  margin-left: 200px;
  @media screen and (max-width: 760px) {
    margin-left: 5px;
    display: block;
    margin-top: 10px;
  }
  min-width: 230px;
  margin-bottom: 50px;
`;
const StyledUperCardLarge = styled.div`
  -webkit-box-flex: 1;
  flex: 1;
  min-width: 250px;
  background-image: linear-gradient(90deg, rgb(255, 239, 241), rgb(216, 241, 255));
  /* margin-top: 24px;
  margin-right: 12px;
  margin-bottom: 0px;
  margin-left: 12px; */
  box-shadow: 2px 4px 8px 0 rgb(0 0 0 / 6%), 0 -1px 2px 0 rgb(0 0 0 / 2%);
  border-radius: 24px;
  padding: 24px;
`;
const ToggleWrapper = styled.div`
  margin-left: 200px;
  @media screen and (max-width: 760px) {
    margin-left: 5px;
  }
`;

const Content = styled.div`
  position: absolute;
  margin: 0 25px;
  padding: 25px;
  -webkit-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  @media screen and (max-width: 760px) {
    margin: 0 10px;
    padding: 15px;
    /* padding: 0px; */
  }
`;
const StageTitle = styled.div`
  margin-left: 200px;
  margin-top: 20px;
  @media screen and (max-width: 760px) {
    margin-left: 5px;
  }
`;
const Status = styled.p`
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 760px) {
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 16px;
  }
  color: hsla(0, 0%, 100%, 0.8);
`;
const Wrapper = styled.div<{ height?: string; maxWidth?: string }>`
  height: ${({ height }) => height || '200px'};
  max-width: ${({ maxWidth }) => maxWidth || '1100px'};
`;
const Headering = styled.h1`
  color: ${({ color }) => color || 'white'};
  font-size: '18px';
  @media screen and (max-width: 760px) {
    font-size: 16px;
  }
`;
const BottomCard = styled.div`
  display: flex;
  align-items: space-arround;
  @media screen and (max-width: 760px) {
    display: block;
  }
`;
const Divi = styled.div`
  display: flex;
  align-items: space-arround;
  @media screen and (max-width: 760px) {
    margin-left: 0px;
    margin-right: 0px;
    display: block;
  }
`;

const Farm: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <StageTitle>
        <Heading as="h1" scale="xxl" color="secondary" mb="24px">
          {t('Farms')}
        </Heading>
      </StageTitle>
      <ToggleWrapper>
        <Wrapper>
          <GradientCard gradient="linear-gradient(90deg, rgb(175, 42, 205), rgb(26, 9, 4))">
            <ImageCard
              shouldHover
              imgUrl="https://dl0d5jadwbp9c.cloudfront.net/cdn/img/d51088aeabe4ffa3964f0dd33de94ebe.jpeg"
            >
              <Content>
                <Status>Farms - Share 2,200,000,000 $JOJO</Status>
                <Headering>Stake JOJO/BNB LP and Earn $JOJO, share 2,200,000,000 $JOJO</Headering>
              </Content>
            </ImageCard>
          </GradientCard>
        </Wrapper>
      </ToggleWrapper>
      <StyledGamePool>
        <StyledUperCardLarge>
          <Flex justifyContent="space-between">
            <Flex>
              <img
                style={{ height: '50px', width: '100px', marginTop: '10px' }}
                alt="nothing"
                src="https://jojo.fun/img/icon-token-jojo-bnb.6d0d1e97.png"
              />
              <Text fontSize="40px">JOJO/BNB</Text>
            </Flex>
            <Box>
              <Text fontSize="30px">$1,011,283</Text>
              <Text fontSize="15px">Liquidity</Text>
            </Box>
            <Box>
              <Text fontSize="30px">30.22%</Text>
              <Text fontSize="15px">APR</Text>
            </Box>
            <Box>
              <Flex>
                <img
                  style={{ height: '25px', width: '25px', marginTop: '10px' }}
                  alt="nothing"
                  src="https://jojo.fun/img/icon-jojo.dd768e0c.png"
                />
                <Text>164,486,580</Text>
                <Text> ≈ $29,069</Text>
              </Flex>

              <Text fontSize="15px">Remaining tokens in pool</Text>
            </Box>
          </Flex>
        </StyledUperCardLarge>
        <BottomCard>
          <Divi>
            <FarmCard
              title="Staked"
              amount="0"
              usd="0"
              coinUrl="https://jojo.fun/img/icon-token-jojo-bnb.6d0d1e97.png"
              widthimg="100px"
            />
          </Divi>
          <Divi>
            <FarmCard title="Harvest" amount="0" usd="0" coinUrl="https://jojo.fun/img/icon-jojo.dd768e0c.png" />
          </Divi>
        </BottomCard>
      </StyledGamePool>
    </>
  );
};

export default Farm;
