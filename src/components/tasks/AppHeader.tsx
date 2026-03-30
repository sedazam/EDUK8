import { Bell, RotateCcw } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function AppHeader() {
  const { resetDemoData } = useAppContext();

  return (
    <header className="app-header">
      <div>
        <div className="eyebrow">Parent workspace</div>
        <h2 className="app-header__title">Manage home learning with clarity</h2>
      </div>

      <div className="app-header__actions">
        <button className="icon-button" type="button" aria-label="Notifications">
          <Bell size={18} />
        </button>
        <button className="button button--ghost" type="button" onClick={resetDemoData}>
          <RotateCcw size={16} /> Reset demo data
        </button>
      </div>
    </header>
  );
}
