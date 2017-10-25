import React from 'react';
import {Tabs, Tab, TabPanel, TabList} from '../components';

const App = () => (
  <div className='container'>
    <Tabs selectedIndex={0}>
      <TabList>
        <Tab tabIndex={0}>Title1</Tab>
        <Tab tabIndex={1}>Title2</Tab>
        <Tab tabIndex={2}>Title3</Tab>
      </TabList>
      <TabPanel tabIndex={0}>content1</TabPanel>
      <TabPanel tabIndex={1}>content2</TabPanel>
      <TabPanel tabIndex={2}>content3</TabPanel>
    </Tabs>
  </div>
);

export default App;
