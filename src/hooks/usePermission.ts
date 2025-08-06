import { PermissionCondition } from '../features/permissions';
import { usePermissionContext } from '../components/PermissionProvider';

export const usePermission = () => {
  const { loading, hasPermission } = usePermissionContext();
  return { loading, hasPermission: (cond: PermissionCondition) => hasPermission(cond) };
};
