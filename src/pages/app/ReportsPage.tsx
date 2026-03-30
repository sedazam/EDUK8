import SectionHeader from "../../components/app/SectionHeader";
import WeeklyChartCard from "../../components/dashboard/WeeklyChartCard";
import SubjectProgressCard from "../../components/dashboard/SubjectProgressCard";
import { subjectProgress, weeklyActivity } from "../../data/mock/dashboard";

export default function ReportsPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        badge="Progress reporting"
        title="Reports"
        description="Review home learning trends, subject confidence, and useful parent insights across the week."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-muted-foreground">Weekly Completion</p>
          <h3 className="mt-2 text-3xl font-bold">72%</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            A healthy level of consistency across home learning.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-muted-foreground">Best Subject</p>
          <h3 className="mt-2 text-3xl font-bold">Reading</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Strong engagement and steady daily momentum.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-muted-foreground">Most Improved</p>
          <h3 className="mt-2 text-3xl font-bold">Maths</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Improvement is trending positively this week.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-muted-foreground">Reading Streak</p>
          <h3 className="mt-2 text-3xl font-bold">4 days</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Consistency is becoming a stronger habit.
          </p>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.9fr]">
        <WeeklyChartCard data={weeklyActivity} />
        <SubjectProgressCard items={subjectProgress} />
      </div>

      <div className="rounded-3xl border bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold">Parent insights</h3>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-muted/60 p-4">
            <p className="text-sm font-medium">What’s working well</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Reading remains the most stable habit and gives the strongest
              weekly rhythm.
            </p>
          </div>

          <div className="rounded-2xl bg-muted/60 p-4">
            <p className="text-sm font-medium">Suggested next focus</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Add two shorter spelling or maths tasks to improve subject
              balance.
            </p>
          </div>

          <div className="rounded-2xl bg-muted/60 p-4">
            <p className="text-sm font-medium">Consistency tip</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Short, regular sessions often work better than fewer long
              sessions.
            </p>
          </div>

          <div className="rounded-2xl bg-muted/60 p-4">
            <p className="text-sm font-medium">Encouragement</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Celebrate progress weekly to keep the child motivated and engaged.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
