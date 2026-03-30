import SectionHeading from "../../components/SectionHeading";
import WeeklyChartCard from "../../components/dashboard/WeeklyChartCard";
import SubjectProgressCard from "../../components/dashboard/SubjectProgressCard";
import { subjectProgress, weeklyActivity } from "../../data/mock/dashboard";

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <SectionHeading
        title="Reports"
        description="A clear view of home learning trends, strengths, and improvement areas."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-muted-foreground">Weekly Completion</p>
          <h3 className="mt-2 text-3xl font-bold">72%</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            A strong level of consistency across home learning.
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
            Up 12% compared with the previous week.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-muted-foreground">Reading Streak</p>
          <h3 className="mt-2 text-3xl font-bold">4 days</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Daily consistency is improving nicely.
          </p>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <WeeklyChartCard data={weeklyActivity} />
        <SubjectProgressCard items={subjectProgress} />
      </div>

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold">Parent insights</h3>
        <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
          <li>
            Reading remains the strongest and most consistent subject this week.
          </li>
          <li>Maths is improving and shows good weekly momentum.</li>
          <li>
            Spelling would benefit from 2–3 shorter sessions across the week.
          </li>
          <li>
            Maintaining the reading streak should help overall learning rhythm.
          </li>
        </ul>
      </div>
    </div>
  );
}
