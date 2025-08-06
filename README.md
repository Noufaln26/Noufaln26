# PBAC Carbon Sample App

This repository contains a proof-of-concept React application that demonstrates a worst-case permission-based access control (PBAC) scenario using the [IBM Carbon Design System](https://carbondesignsystem.com/).

## Features

- Multi-module dashboard with sections for Projects, Reports, Users, Billing, Audit Logs, and System Settings
- Hierarchical `resource:action` permission strings with wildcard support
- Central `PermissionProvider`, `usePermission` hook, and `PermissionWrapper` HOC for gating routes, tabs, and actions
- LocalStorage-backed user database allowing creation of users and assignment of predefined roles

## Getting started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the development server

   ```bash
   npm run dev
   ```

   The application will be available at http://localhost:5173 by default.

3. Run the test suite

   ```bash
   npm test
   ```

## Usage

- Navigate between modules using the side navigation.
- The **Users** section lets you create users and assign roles (`viewer`, `editor`, `admin`).
- Permissions are fetched asynchronously; while loading, protected areas render placeholder UIs.
- Buttons and menu actions are hidden or disabled with tooltips when permissions are missing.
 - Role to permission mappings:
   - `admin`: `*`
   - `editor`: `project:view`, `project:edit`, `project:create`, `project:delete`, `user:view`, `user:edit`, `user:create`, `billing:view`, `billing:update`
   - `viewer`: `project:view`, `user:view`, `billing:view`
- User data and role assignments are stored in `localStorage` on localhost.

## Build for production

```bash
npm run build
```

The optimized output is emitted to the `dist/` directory.

## Notes

This sample uses `@carbon/react`; ensure you have access to IBM's package registry when installing dependencies.
