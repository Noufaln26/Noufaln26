import React, { createContext, useContext, useEffect, useState } from 'react';
import { Permission, PermissionCondition } from '../features/permissions';
import { evaluatePermission } from '../utils/hasPermission';

type ContextType = {
  permissions: Permission[];
  loading: boolean;
  hasPermission: (condition: PermissionCondition) => boolean;
};

const PermissionContext = createContext<ContextType>({
  permissions: [],
  loading: true,
  hasPermission: () => false,
});

export const PermissionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate async fetch
    setTimeout(() => {
      setPermissions(['project:view', 'report:view', 'user:*']);
      setLoading(false);
    }, 500);
  }, []);

  const hasPermission = (condition: PermissionCondition) =>
    evaluatePermission(condition, new Set(permissions));

  return (
    <PermissionContext.Provider value={{ permissions, loading, hasPermission }}>
      {children}
    </PermissionContext.Provider>
  );
};

export const usePermissionContext = () => useContext(PermissionContext);
