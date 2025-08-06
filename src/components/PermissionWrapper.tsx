import React from 'react';
import { PermissionCondition } from '../features/permissions';
import { usePermission } from '../hooks/usePermission';

interface Props {
  condition: PermissionCondition;
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

export const PermissionWrapper: React.FC<Props> = ({ condition, fallback = null, children }) => {
  const { hasPermission } = usePermission();
  if (!hasPermission(condition)) {
    return <>{fallback}</>;
  }
  return <>{children}</>;
};
