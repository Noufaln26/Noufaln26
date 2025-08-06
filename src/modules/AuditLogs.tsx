import React from 'react';
import { PermissionWrapper } from '../components/PermissionWrapper';

export default function AuditLogs() {
  return (
    <PermissionWrapper condition="audit:view" fallback={<div>No access to audit logs</div>}>
      <div>Audit logs table</div>
    </PermissionWrapper>
  );
}
