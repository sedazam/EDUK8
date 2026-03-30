export default function WelcomeBanner() {
  return (
    <div className="rounded-[28px] border bg-white p-6 shadow-sm md:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Home learning made simpler
          </span>

          <h2 className="mt-4 text-2xl font-bold tracking-tight md:text-4xl">
            Build stronger learning habits at home
          </h2>

          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            Keep reading, homework, spelling, maths, and routines organised
            through one clean parent dashboard designed for KS1 and KS2
            families.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:w-[360px]">
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
