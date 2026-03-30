import SectionHeader from "../../components/app/SectionHeader";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        badge="Preferences"
        title="Settings"
        description="Manage account information, notification preferences, and future family learning controls."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Account details</h3>
          <div className="mt-5 space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Full name
              </label>
              <input
                defaultValue="Seddiq Azam"
                className="w-full rounded-2xl border bg-background px-3 py-3 text-sm"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Email</label>
              <input
                defaultValue="sed@example.com"
                className="w-full rounded-2xl border bg-background px-3 py-3 text-sm"
              />
            </div>

            <button className="rounded-2xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90">
              Save changes
            </button>
          </div>
        </div>

        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Notifications</h3>
          <div className="mt-5 space-y-4">
            {[
              "Weekly learning summary",
              "Task reminder notifications",
              "Reading streak encouragement",
              "New feature updates",
            ].map((item) => (
              <label
                key={item}
                className="flex items-center justify-between rounded-2xl border p-4"
              >
                <span className="text-sm font-medium">{item}</span>
                <input type="checkbox" defaultChecked className="h-4 w-4" />
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold">Future upgrades</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          This area can later include parent reminders, shared family access,
          printable reports, and account security controls.
        </p>
      </div>
    </div>
  );
}
