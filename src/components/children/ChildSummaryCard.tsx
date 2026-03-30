import type { Child } from "../../types/child";

interface ChildSummaryCardProps {
  child: Child;
}

export default function ChildSummaryCard({ child }: ChildSummaryCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
          {child.avatar}
        </div>

        <div>
          <h3 className="text-lg font-semibold">{child.name}</h3>
          <p className="text-sm text-muted-foreground">
            {child.yearGroup} • {child.keyStage}
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-muted/60 p-3">
          <p className="text-xs text-muted-foreground">Completion</p>
          <p className="mt-1 text-lg font-bold">{child.completionRate}%</p>
        </div>

        <div className="rounded-xl bg-muted/60 p-3">
          <p className="text-xs text-muted-foreground">Reading streak</p>
          <p className="mt-1 text-lg font-bold">{child.readingStreak} days</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {child.focusSubjects.map((subject) => (
          <span
            key={subject}
            className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            {subject}
          </span>
        ))}
      </div>

      <p className="mt-4 text-sm text-muted-foreground">
        Weekly goal: {child.weeklyGoal} activities
      </p>
    </div>
  );
}
