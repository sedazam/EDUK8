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

import { children } from "../../data/mock/children";
import { tasks } from "../../data/mock/tasks";
import {
  achievements,
  dashboardStats,
  subjectProgress,
  weeklyActivity,
} from "../../data/mock/dashboard";

export default function DashboardPage() {
  const [selectedChildId, setSelectedChildId] = useState(children[0]?.id ?? "");

  const selectedChild = children.find((child) => child.id === selectedChildId);

  const selectedTasks = useMemo(() => {
    return tasks.filter((task) => task.childId === selectedChildId);
  }, [selectedChildId]);

  const todaysTasks = selectedTasks.filter((task) => task.dueDate === "Today");

  return (
    <div className="space-y-6">
      <SectionHeader
        title="Dashboard"
        description="Track progress, learning habits, and weekly momentum for your KS1 and KS2 children."
      />

      <WelcomeBanner />

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
          value={`${selectedChild?.completionRate ?? dashboardStats.weeklyCompletionRate}%`}
          hint="This week’s learning progress"
          icon={<CheckCircle2 className="h-5 w-5" />}
        />
        <StatCard
          title="Completed Tasks"
          value={`${dashboardStats.completedTasksThisWeek}`}
          hint="Activities finished this week"
          icon={<BookOpen className="h-5 w-5" />}
        />
        <StatCard
          title="Reward Points"
          value={`${dashboardStats.rewardPoints}`}
          hint="Motivation points earned"
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
    </div>
  );
}
