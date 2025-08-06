import React, { useState } from 'react';
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  Button,
  Modal,
  Select,
  SelectItem,
  TextInput,
} from '@carbon/react';
import { PermissionWrapper } from '../components/PermissionWrapper';
import { getUsers, addUser, UserRecord } from '../utils/usersDb';
import { Role } from '../features/roles';

export default function Users() {
  const [users, setUsers] = useState<UserRecord[]>(getUsers());
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState<Role>('viewer');

  const handleAdd = () => {
    if (!name) return;
    addUser(name, role);
    setUsers(getUsers());
    setOpen(false);
    setName('');
    setRole('viewer');
  };

  return (
    <PermissionWrapper condition="user:view" fallback={<div>No access to users</div>}>
      <h2>Users</h2>
      <PermissionWrapper
        condition="user:create"
        fallback={<Button disabled title="Need user:create">New User</Button>}
      >
        <Button onClick={() => setOpen(true)}>New User</Button>
      </PermissionWrapper>
      <DataTable
        rows={users.map((u) => ({ id: u.id, name: u.name, role: u.role }))}
        headers={[
          { key: 'name', header: 'Name' },
          { key: 'role', header: 'Role' },
        ]}
      >
        {({ rows, headers, getHeaderProps, getRowProps }) => (
          <Table>
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableHeader {...getHeaderProps({ header })}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow {...getRowProps({ row })}>
                  {row.cells.map((cell) => (
                    <TableCell key={cell.id}>{cell.value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </DataTable>
      <Modal
        open={open}
        modalHeading="Create User"
        primaryButtonText="Create"
        onRequestClose={() => setOpen(false)}
        onRequestSubmit={handleAdd}
      >
        <TextInput
          id="name"
          labelText="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Select
          id="role"
          labelText="Role"
          value={role}
          onChange={(e) => setRole(e.target.value as Role)}
        >
          <SelectItem value="viewer" text="viewer" />
          <SelectItem value="editor" text="editor" />
          <SelectItem value="admin" text="admin" />
        </Select>
      </Modal>
    </PermissionWrapper>
  );
}
