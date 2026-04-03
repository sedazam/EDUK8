import { Bell, Search, Sparkles } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function AppTopbar() {
  const { logout } = useAuth();

  return (
    <header className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur">
      <div className="flex h-20 items-center justify-between px-4 md:px-6 lg:px-8">
        <div className="flex w-full max-w-xl items-center gap-3 rounded-2xl border bg-background px-4 py-3 shadow-sm">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            placeholder="Search children, tasks, reports..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>

        <div className="ml-4 flex items-center gap-3">
          <button
            type="button"
            className="hidden items-center gap-2 rounded-2xl border bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:bg-muted md:flex"
          >
            <Sparkles className="h-4 w-4" />
            Upgrade ideas
          </button>

          <button
            type="button"
            aria-label="Notifications"
            className="rounded-2xl border bg-white p-3 shadow-sm transition hover:bg-muted"
          >
            <Bell className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={logout}
            className="rounded-2xl border bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:bg-muted"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
import { Bell, Search, Sparkles } from "lucide-react";

export default function AppTopbar() {
  return (
    <header className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur">
      <div className="flex h-20 items-center justify-between px-4 md:px-6 lg:px-8">
        <div className="flex w-full max-w-xl items-center gap-3 rounded-2xl border bg-background px-4 py-3 shadow-sm">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            placeholder="Search children, tasks, reports..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>

        <div className="ml-4 flex items-center gap-3">
          <button
            type="button"
            className="hidden items-center gap-2 rounded-2xl border bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:bg-muted md:flex"
          >
            <Sparkles className="h-4 w-4" />
            Upgrade ideas
          </button>

          <button
            type="button"
            aria-label="Notifications"
            className="rounded-2xl border bg-white p-3 shadow-sm transition hover:bg-muted"
          >
            <Bell className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-3 rounded-2xl border bg-white px-3 py-2 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
              SA
            </div>

            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold">Seddiq Azam</p>
              <p className="text-xs text-muted-foreground">Parent account</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
