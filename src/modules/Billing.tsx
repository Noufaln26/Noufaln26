import React from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel, Button } from '@carbon/react';
import { PermissionWrapper } from '../components/PermissionWrapper';

export default function Billing() {
  return (
    <Tabs>
      <TabList aria-label="Billing tabs">
        <Tab>Overview</Tab>
        <PermissionWrapper condition="billing:update">
          <Tab>Update</Tab>
        </PermissionWrapper>
      </TabList>
      <TabPanels>
        <TabPanel>Billing overview</TabPanel>
        <PermissionWrapper condition="billing:update">
          <TabPanel>
            <Button kind="danger">Update Billing</Button>
          </TabPanel>
        </PermissionWrapper>
      </TabPanels>
    </Tabs>
  );
}
