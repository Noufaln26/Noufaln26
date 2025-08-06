import React from 'react';
import { Tabs, Tab } from '@carbon/react';
import { PermissionWrapper } from '../components/PermissionWrapper';

export default function SystemSettings() {
  return (
    <PermissionWrapper condition="system:manage" fallback={<div>Settings unavailable</div>}>
      <Tabs>
        <Tab id="settings-general" label="General">
          General settings
        </Tab>
        <PermissionWrapper condition="system:advanced">
          <Tab id="settings-advanced" label="Advanced">
            Advanced settings
          </Tab>
        </PermissionWrapper>
      </Tabs>
    </PermissionWrapper>
  );
}
