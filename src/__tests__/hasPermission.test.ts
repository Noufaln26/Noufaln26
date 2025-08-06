import { evaluatePermission } from '../utils/hasPermission';
import { Permission, PermissionCondition } from '../features/permissions';

describe('hasPermission', () => {
  const set: Set<Permission> = new Set([
    'project:view',
    'project:edit',
    'project:own',
    'user:*',
  ]);

  it('checks simple permission', () => {
    expect(evaluatePermission('project:view', set)).toBe(true);
  });

  it('supports AND', () => {
    const cond: PermissionCondition = { all: ['project:edit', 'project:own'] };
    expect(evaluatePermission(cond, set)).toBe(true);
  });

  it('supports OR', () => {
    const cond: PermissionCondition = { any: ['billing:update', 'project:view'] };
    expect(evaluatePermission(cond, set)).toBe(true);
  });

  it('handles wildcard hierarchy', () => {
    expect(evaluatePermission('user:edit', set)).toBe(true);
  });

  it('fails when missing', () => {
    expect(evaluatePermission('billing:view', set)).toBe(false);
  });

  it('superuser', () => {
    const superSet: Set<Permission> = new Set(['*']);
    expect(evaluatePermission('billing:view', superSet)).toBe(true);
  });
});
