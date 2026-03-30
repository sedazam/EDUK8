import { useMemo, useState } from "react";
import { BookOpen, CheckCircle2, Flame, Star } from "lucide-react";

import SectionHeader from "../../components/app/SectionHeader";
import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import ChildSwitcher from "../../components/dashboard/ChildSwitcher";
import StatCard from "../../components/dashboard/StatCard";
import TodayTasksCard from "../../components/dashboard/TodayTasksCard";
import SubjectProgressCard from "../../components/dashboard/SubjectProgressCard";
import AchievementsCard from "../../components/dashboard/AchievementsCard";
import WeeklyChartCard from "../../components/dashboard/WeeklyChartCard";

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
    <div className="space-y-6">
      <SectionHeader
        title="Dashboard"
        description="Track progress, learning habits, and weekly momentum for your KS1 and KS2 children."
      />

      <WelcomeBanner />

      {children.length === 0 ? (
        <div className="rounded-2xl border border-dashed bg-white p-8 text-sm text-muted-foreground shadow-sm">
          No child profiles yet. Add a child in the Children page to start using
          the dashboard.
        </div>
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
              hint="Tasks completed for selected child"
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
              hint="Points earned from completed tasks"
              icon={<Star className="h-5 w-5" />}
            />
          </section>

          <section className="grid gap-6 xl:grid-cols-2">
            <TodayTasksCard tasks={todaysTasks} children={children} />
            <SubjectProgressCard items={subjectProgress} />
          </section>

          <section className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
            <WeeklyChartCard data={weeklyActivity} />
            <AchievementsCard items={achievements} />
          </section>
        </>
      )}
    </div>
  );
}
