import React from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@carbon/react';
import { PermissionWrapper } from '../components/PermissionWrapper';

export default function SystemSettings() {
  return (
    <PermissionWrapper condition="system:manage" fallback={<div>Settings unavailable</div>}>
      <Tabs>
        <TabList aria-label="Settings tabs">
          <Tab>General</Tab>
          <PermissionWrapper condition="system:advanced">
            <Tab>Advanced</Tab>
          </PermissionWrapper>
        </TabList>
        <TabPanels>
          <TabPanel>General settings</TabPanel>
          <PermissionWrapper condition="system:advanced">
            <TabPanel>Advanced settings</TabPanel>
          </PermissionWrapper>
        </TabPanels>
      </Tabs>
    </PermissionWrapper>
  );
}
