import { BarChart3, ClipboardList, House, Settings, Users } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const links = [
  { to: '/app/dashboard', label: 'Dashboard', icon: House },
  { to: '/app/children', label: 'Children', icon: Users },
  { to: '/app/tasks', label: 'Tasks', icon: ClipboardList },
  { to: '/app/reports', label: 'Reports', icon: BarChart3 },
  { to: '/app/settings', label: 'Settings', icon: Settings },
];

export default function AppSidebar() {
  return (
    <aside className="sidebar">
      <Logo />
      <nav className="sidebar__nav">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`}
          >
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
