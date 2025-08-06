import React from 'react';
import { Tabs, Tab, Button } from '@carbon/react';
import { PermissionWrapper } from '../components/PermissionWrapper';

export default function Billing() {
  return (
    <Tabs>
      <Tab id="billing-overview" label="Overview">
        Billing overview
      </Tab>
      <PermissionWrapper condition="billing:update">
        <Tab id="billing-update" label="Update">
          <Button kind="danger">Update Billing</Button>
        </Tab>
      </PermissionWrapper>
    </Tabs>
  );
}
