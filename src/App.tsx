import { Navigate, Route, Routes } from "react-router-dom";
import AppShell from "./components/app/AppShell";
import ProtectedRoute from "./components/app/ProtectedRoute";

import Index from "./pages/Index";
import LoginPage from "./pages/marketing/LoginPage";
import SignupPage from "./pages/marketing/SignupPage";

import DashboardPage from "./pages/app/DashboardPage";
import ChildrenPage from "./pages/app/ChildrenPage";
import TasksPage from "./pages/app/TasksPage";
import ReportsPage from "./pages/app/ReportsPage";
import SettingsPage from "./pages/app/SettingsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      <Route
        path="/app"
        element={
          <ProtectedRoute>
            <AppShell />
          </ProtectedRoute>
        }
      >
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
