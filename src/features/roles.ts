import { Permission } from './permissions';

export type Role = 'admin' | 'editor' | 'viewer';

export const rolePermissions: Record<Role, Permission[]> = {
  admin: ['*'],
  editor: [
    'project:view',
    'project:edit',
    'project:create',
    'project:delete',
    'user:view',
    'user:edit',
    'user:create',
    'billing:view',
    'billing:update',
  ],
  viewer: ['project:view', 'user:view', 'billing:view'],
};
