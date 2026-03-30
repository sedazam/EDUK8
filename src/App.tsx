import { Navigate, Route, Routes } from "react-router-dom";
import AppShell from "./components/tasks/AppShell";
import DashboardPage from "./pages/app/DashboardPage";
import ChildrenPage from "./pages/app/ChildrenPage";
import HomePage from "./pages/app/HomePage";
import LoginPage from "./pages/app/LoginPage";
import ReportsPage from "./pages/app/ReportsPage";
import SettingsPage from "./pages/app/SettingsPage";
import SignupPage from "./pages/app/SignupPage";
import TasksPage from "./pages/app/TasksPage";

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
