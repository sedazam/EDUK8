import { Link } from "react-router-dom";

export default function Index() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            KS1 & KS2 Parent Learning Dashboard
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Support learning at home with one simple dashboard
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            EduK8 Happy Home helps parents organise homework, reading, spelling,
            maths practice, and home learning routines for KS1 and KS2 children.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/signup"
              className="rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90"
            >
              Get started
            </Link>

            <Link
              to="/app/dashboard"
              className="rounded-xl border px-6 py-3 font-medium transition hover:bg-muted"
            >
              View dashboard
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Track progress</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              View reading streaks, completion rates, and subject confidence in
              one place.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Stay organised</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Keep homework, spelling, maths, and routines structured and
              visible.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Support consistency</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Build stronger habits at home with a clear, parent-friendly
              dashboard.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
