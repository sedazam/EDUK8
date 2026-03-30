import { useMemo, useState } from "react";
import { BookOpen, CheckCircle2, Flame, Star } from "lucide-react";

import SectionHeader from "../../components/app/SectionHeader";
import EmptyStateCard from "../../components/app/EmptyStateCard";

import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import ChildSwitcher from "../../components/dashboard/ChildSwitcher";
import StatCard from "../../components/dashboard/StatCard";
import TodayTasksCard from "../../components/dashboard/TodayTasksCard";
import SubjectProgressCard from "../../components/dashboard/SubjectProgressCard";
import AchievementsCard from "../../components/dashboard/AchievementsCard";
import WeeklyChartCard from "../../components/dashboard/WeeklyChartCard";
import QuickActionsCard from "../../components/dashboard/QuickActionsCard";

import { children as initialChildren } from "../../data/mock/children";
import { tasks as initialTasks } from "../../data/mock/tasks";
import {
  achievements,
  subjectProgress,
  weeklyActivity,
} from "../../data/mock/dashboard";

import useLocalStorage from "../../hooks/useLocalStorage";
import type { Child } from "../../types/child";
import type { Task } from "../../types/task";

export default function DashboardPage() {
  const [children] = useLocalStorage<Child[]>(
    "eduk8-children",
    initialChildren,
  );
  const [tasks] = useLocalStorage<Task[]>("eduk8-tasks", initialTasks);

  const [selectedChildId, setSelectedChildId] = useState(children[0]?.id ?? "");

  const selectedChild = children.find((child) => child.id === selectedChildId);

  const selectedTasks = useMemo(() => {
    return tasks.filter((task) => task.childId === selectedChildId);
  }, [tasks, selectedChildId]);

  const todaysTasks = selectedTasks.filter((task) => task.dueDate === "Today");
  const completedTasks = selectedTasks.filter(
    (task) => task.status === "completed",
  );

  const completionRate =
    selectedTasks.length > 0
      ? Math.round((completedTasks.length / selectedTasks.length) * 100)
      : 0;

  const rewardPoints = selectedTasks.reduce(
    (total, task) =>
      total + (task.status === "completed" ? task.rewardPoints : 0),
    0,
  );

  return (
    <div className="space-y-8">
      <SectionHeader
        badge="Parent dashboard"
        title="Dashboard"
        description="Track progress, learning habits, and home study momentum for your KS1 and KS2 children."
      />

      <WelcomeBanner />

      {children.length === 0 ? (
        <EmptyStateCard
          title="No child profiles yet"
          description="Add a child from the Children page to begin tracking tasks, reading, and home learning progress."
          actionLabel="Go to Children"
        />
      ) : (
        <>
          <ChildSwitcher
            children={children}
            selectedChildId={selectedChildId}
            onChange={setSelectedChildId}
          />

          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <StatCard
              title="Reading Streak"
              value={`${selectedChild?.readingStreak ?? 0} days`}
              hint="Daily reading momentum"
              icon={<Flame className="h-5 w-5" />}
            />
            <StatCard
              title="Completion Rate"
              value={`${completionRate}%`}
              hint="Completed tasks for selected child"
              icon={<CheckCircle2 className="h-5 w-5" />}
            />
            <StatCard
              title="Completed Tasks"
              value={`${completedTasks.length}`}
              hint="Finished learning activities"
              icon={<BookOpen className="h-5 w-5" />}
            />
            <StatCard
              title="Reward Points"
              value={`${rewardPoints}`}
              hint="Points earned from finished tasks"
              icon={<Star className="h-5 w-5" />}
            />
          </section>

          <section className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
            <TodayTasksCard tasks={todaysTasks} children={children} />
            <QuickActionsCard />
          </section>

          <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <WeeklyChartCard data={weeklyActivity} />
            <SubjectProgressCard items={subjectProgress} />
          </section>

          <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
            <AchievementsCard items={achievements} />
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Parent insight</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {selectedChild
                  ? `${selectedChild.name} is showing the best momentum in ${selectedChild.focusSubjects[0]}. Keep sessions short and consistent for stronger weekly progress.`
                  : "Add child profiles to start receiving tailored insights."}
              </p>

              <div className="mt-5 space-y-3">
                <div className="rounded-xl bg-muted/60 p-4">
                  <p className="text-sm font-medium">What’s going well</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Reading consistency and routine-building remain the
                    strongest areas.
                  </p>
                </div>

                <div className="rounded-xl bg-muted/60 p-4">
                  <p className="text-sm font-medium">Suggested focus</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Add one short spelling or maths activity to strengthen
                    weekly balance.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
