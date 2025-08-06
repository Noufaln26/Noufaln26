export type Permission =
  | 'project:view'
  | 'project:edit'
  | 'project:own'
  | 'report:view'
  | 'report:approve'
  | 'audit:view'
  | 'user:view'
  | 'user:edit'
  | 'user:create'
  | 'user:*'
  | 'billing:view'
  | 'billing:update'
  | 'system:manage'
  | '*';

export type PermissionCondition =
  | Permission
  | { all?: PermissionCondition[]; any?: PermissionCondition[] };
