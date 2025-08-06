export type Role = 'admin' | 'editor' | 'viewer';

export const rolePermissions: Record<Role, import('./permissions').Permission[]> = {
  admin: ['*'],
  editor: ['project:view', 'project:edit', 'user:view', 'user:edit', 'user:create'],
  viewer: ['project:view', 'user:view'],
};
