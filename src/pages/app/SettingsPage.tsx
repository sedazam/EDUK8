import SectionHeading from "../../components/SectionHeading";

export default function SettingsPage() {
  return (
    <div className="page-stack">
      <SectionHeading
        title="Settings"
        description="Account preferences, notifications, and future family controls."
      />

      <div className="card stack">
        <div>
          <h3>About this starter</h3>
          <p className="muted">
            This version uses localStorage so you can explore the product flow
            in VS Code without any backend setup.
          </p>
        </div>
        <div>
          <h3>Best next upgrade</h3>
          <p className="muted">
            Add Supabase auth, protect the app routes, and persist children and
            tasks in real database tables.
          </p>
        </div>
      </div>
    </div>
  );
}
