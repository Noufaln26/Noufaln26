import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SideNav, SideNavItems, SideNavLink } from '@carbon/react';
import Projects from './modules/Projects';
import Reports from './modules/Reports';
import Users from './modules/Users';
import Billing from './modules/Billing';
import AuditLogs from './modules/AuditLogs';
import SystemSettings from './modules/SystemSettings';
import Forbidden from './components/403Page';
import { usePermission } from './hooks/usePermission';

type ProtectedProps = {
  permission: string;
  children: React.ReactElement;
};

const ProtectedRoute = ({ permission, children }: ProtectedProps) => {
  const { hasPermission } = usePermission();
  if (!hasPermission(permission)) {
    return <Forbidden />;
  }
  return children;
};

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <SideNav expanded isFixedNav>
          <SideNavItems>
            <SideNavLink to="/projects">Projects</SideNavLink>
            <SideNavLink to="/reports">Reports</SideNavLink>
            <SideNavLink to="/users">Users</SideNavLink>
            <SideNavLink to="/billing">Billing</SideNavLink>
            <SideNavLink to="/audit">Audit Logs</SideNavLink>
            <SideNavLink to="/settings">System Settings</SideNavLink>
          </SideNavItems>
        </SideNav>
        <div style={{ marginLeft: '16rem', padding: '1rem', width: '100%' }}>
          <Routes>
            <Route path="/" element={<Navigate to="/projects" replace />} />
            <Route path="/projects" element={<ProtectedRoute permission="project:view"><Projects /></ProtectedRoute>} />
            <Route path="/reports" element={<ProtectedRoute permission="report:view"><Reports /></ProtectedRoute>} />
            <Route path="/users" element={<ProtectedRoute permission="user:view"><Users /></ProtectedRoute>} />
            <Route path="/billing" element={<ProtectedRoute permission="billing:view"><Billing /></ProtectedRoute>} />
            <Route path="/audit" element={<ProtectedRoute permission="audit:view"><AuditLogs /></ProtectedRoute>} />
            <Route path="/settings" element={<ProtectedRoute permission="system:manage"><SystemSettings /></ProtectedRoute>} />
            <Route path="*" element={<Forbidden />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
