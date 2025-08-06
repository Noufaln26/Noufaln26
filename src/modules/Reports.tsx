import React from 'react';
import { Tabs, Tab } from '@carbon/react';
import { PermissionWrapper } from '../components/PermissionWrapper';

export default function Reports() {
  return (
    <PermissionWrapper
      condition={{ any: ['report:view', { all: ['audit:view', 'report:approve'] }] }}
      fallback={<div>Missing permission to view reports</div>}
    >
      <Tabs>
        <Tab id="reports-overview" label="Overview">Reports overview</Tab>
        <PermissionWrapper condition="report:approve">
          <Tab id="reports-approve" label="Approvals">Approval queue</Tab>
        </PermissionWrapper>
      </Tabs>
    </PermissionWrapper>
  );
}
