import { Role } from '../features/roles';

export type UserRecord = { id: string; name: string; role: Role };

const STORAGE_KEY = 'pbac_users';

const load = (): UserRecord[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as UserRecord[]) : [];
  } catch {
    return [];
  }
};

const save = (users: UserRecord[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
};

export const getUsers = (): UserRecord[] => load();

export const addUser = (name: string, role: Role) => {
  const users = load();
  users.push({ id: Date.now().toString(), name, role });
  save(users);
};

export const updateUserRole = (id: string, role: Role) => {
  const users = load();
  const idx = users.findIndex((u) => u.id === id);
  if (idx >= 0) {
    users[idx].role = role;
    save(users);
  }
};
