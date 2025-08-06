import { Permission, PermissionCondition } from '../features/permissions';

const matches = (have: Permission, need: string) => {
  if (have === '*' || have === need) return true;
  if (have.endsWith('*')) {
    const prefix = have.replace('*', '');
    return need.startsWith(prefix);
  }
  return false;
};

export const evaluatePermission = (
  condition: PermissionCondition,
  set: Set<Permission>
): boolean => {
  if (typeof condition === 'string') {
    for (const perm of set) {
      if (matches(perm, condition)) return true;
    }
    return false;
  }
  if (condition.all) {
    return condition.all.every((c) => evaluatePermission(c, set));
  }
  if (condition.any) {
    return condition.any.some((c) => evaluatePermission(c, set));
  }
  return false;
};
