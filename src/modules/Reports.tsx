import React from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@carbon/react';
import { PermissionWrapper } from '../components/PermissionWrapper';

export default function Reports() {
  return (
    <PermissionWrapper
      condition={{ any: ['report:view', { all: ['audit:view', 'report:approve'] }] }}
      fallback={<div>Missing permission to view reports</div>}
    >
      <Tabs>
        <TabList aria-label="Reports tabs">
          <Tab>Overview</Tab>
          <PermissionWrapper condition="report:approve">
            <Tab>Approvals</Tab>
          </PermissionWrapper>
        </TabList>
        <TabPanels>
          <TabPanel>Reports overview</TabPanel>
          <PermissionWrapper condition="report:approve">
            <TabPanel>Approval queue</TabPanel>
          </PermissionWrapper>
        </TabPanels>
      </Tabs>
    </PermissionWrapper>
  );
}
