import React from 'react';
import {
  Tabs,
  Tab,
  DataTable,
  Button,
  OverflowMenu,
  OverflowMenuItem,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableToolbar,
  TableToolbarContent,
  TableToolbarSearch,
} from '@carbon/react';
import { PermissionWrapper } from '../components/PermissionWrapper';

const rows = [
  { id: '1', name: 'Project A', owner: 'me' },
  { id: '2', name: 'Project B', owner: 'other' },
];

const headers = [
  { key: 'name', header: 'Name' },
  { key: 'owner', header: 'Owner' },
];

export default function Projects() {
  return (
    <Tabs>
      <Tab id="projects-overview" label="Overview">
        <DataTable rows={rows} headers={headers}>
          {({ rows, headers, getHeaderProps, getRowProps, getTableProps }) => (
            <TableContainer>
              <TableToolbar>
                <TableToolbarContent>
                  <TableToolbarSearch />
                  <PermissionWrapper
                    condition="project:create"
                    fallback={<Button disabled title="Missing permission">Create</Button>}
                  >
                    <Button kind="primary">Create</Button>
                  </PermissionWrapper>
                </TableToolbarContent>
              </TableToolbar>
              <Table {...getTableProps()}>
                <TableHead>
                  <TableRow>
                    {headers.map((header) => (
                      <TableHeader key={header.key} {...getHeaderProps({ header })}>
                        {header.header}
                      </TableHeader>
                    ))}
                    <TableHeader>Actions</TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id} {...getRowProps({ row })}>
                      {row.cells.map((cell) => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                      <TableCell>
                        <OverflowMenu>
                          <PermissionWrapper
                            condition={{ all: ['project:edit', 'project:own'] }}
                          >
                            <OverflowMenuItem itemText="Edit" />
                          </PermissionWrapper>
                          <PermissionWrapper condition="project:delete">
                            <OverflowMenuItem itemText="Delete" />
                          </PermissionWrapper>
                        </OverflowMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </DataTable>
      </Tab>
      <PermissionWrapper condition="project:analytics">
        <Tab id="projects-analytics" label="Analytics">
          Analytics content
        </Tab>
      </PermissionWrapper>
    </Tabs>
  );
}
