import { Navigate, Route, Routes } from 'react-router-dom';
import AppShell from './components/AppShell';
import DashboardPage from './pages/DashboardPage';
import ChildrenPage from './pages/ChildrenPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ReportsPage from './pages/ReportsPage';
import SettingsPage from './pages/SettingsPage';
import SignupPage from './pages/SignupPage';
import TasksPage from './pages/TasksPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      <Route path="/app" element={<AppShell />}>
        <Route index element={<Navigate to="/app/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="children" element={<ChildrenPage />} />
        <Route path="tasks" element={<TasksPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
