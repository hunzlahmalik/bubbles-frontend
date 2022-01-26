import React, { useState } from 'react';
import Icon from 'components/BlindBoxIcon';
import { TabData } from 'views/Stats/constants'; // Dynamic data (to be called using REDUX) @Arbab
import { StyledStats } from '../StatsStyles';
import ChartComponent from '../Chart';
import Transactions from '../Transactions';
import { TabItem, TabTitle } from './components/TabItem';
import { Container, TabContent } from './components/Containers';
import { Tabs } from './components/Tabs';

function TabSystem() {
  const [currentTab, setTab] = useState(0);
  const transactionData = {
    data: TabData[currentTab].transactionData,
  };

  function setTransactionData(index) {
    transactionData.data = TabData[index].transactionData;
  }

  return (
    <>
      <StyledStats alignment="center" padding="0">
        <Container>
          <Tabs>
            {TabData.map((item, index) => {
              return (
                <TabItem key={item.id} activeTab={currentTab === index} onClick={() => setTab(index)}>
                  <div style={{ height: '50px', width: '50px', marginRight: '5px' }}>
                    <Icon backgroundImage={item.iconUrl} hoverImage={item.iconUrl} item />
                  </div>
                  <TabTitle>{item.name}</TabTitle>
                </TabItem>
              );
            })}
          </Tabs>
          <TabContent>
            {setTransactionData(currentTab)}
            <Container changeAlign padding="20px 20px 0 0">
              <ChartComponent {...TabData[currentTab].chartData} />
              <Transactions {...transactionData} />
            </Container>
          </TabContent>
        </Container>
      </StyledStats>
    </>
  );
}

export default TabSystem;
