export default function WelcomeBanner() {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-medium text-primary">Welcome back</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
            Let’s keep home learning simple and consistent
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
            Track reading, homework, maths, spelling, and routines for your KS1
            and KS2 children from one clear parent dashboard.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:w-[320px]">
          <button className="rounded-2xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90">
            Add new task
          </button>
          <button className="rounded-2xl border px-4 py-3 text-sm font-medium transition hover:bg-muted">
            Add child
          </button>
          <button className="rounded-2xl border px-4 py-3 text-sm font-medium transition hover:bg-muted">
            View reports
          </button>
          <button className="rounded-2xl border px-4 py-3 text-sm font-medium transition hover:bg-muted">
            Weekly plan
          </button>
        </div>
      </div>
    </div>
  );
}
