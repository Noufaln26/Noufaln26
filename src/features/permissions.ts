export type Permission =
  | 'project:view'
  | 'project:edit'
  | 'project:own'
  | 'project:create'
  | 'project:delete'
  | 'project:analytics'
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
  | 'system:advanced'
  | '*';

export type PermissionCondition =
  | Permission
  | { all?: PermissionCondition[]; any?: PermissionCondition[] };
