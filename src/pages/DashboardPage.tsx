import { useMemo } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import SectionHeading from '../components/SectionHeading';
import StatCard from '../components/StatCard';
import { useAppContext } from '../context/AppContext';

export default function DashboardPage() {
  const { children, tasks } = useAppContext();

  const completed = tasks.filter((task) => task.status === 'completed').length;
  const readingCompleted = tasks.filter(
    (task) => task.subject === 'Reading' && task.status === 'completed'
  ).length;
  const completionRate = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;
  const rewardPoints = tasks
    .filter((task) => task.status === 'completed')
    .reduce((sum, task) => sum + task.rewardPoints, 0);

  const chartData = useMemo(() => {
    const subjects = ['Reading', 'Maths', 'Spelling', 'Writing', 'Science', 'Homework'] as const;
    return subjects.map((subject) => ({
      subject,
      completed: tasks.filter((task) => task.subject === subject && task.status === 'completed').length,
    }));
  }, [tasks]);

  const todayTasks = tasks.slice(0, 4);

  return (
    <div className="page-stack">
      <SectionHeading
        title="Dashboard"
        description="Track homework, reading, routines, and progress for your KS1 and KS2 children."
      />

      <div className="stats-grid">
        <StatCard label="Children" value={String(children.length)} helper="Profiles being tracked at home" />
        <StatCard label="Completion rate" value={`${completionRate}%`} helper="Based on all current tasks" />
        <StatCard label="Reading wins" value={`${readingCompleted}`} helper="Reading tasks completed" />
        <StatCard label="Reward points" value={`${rewardPoints}`} helper="Points earned from completed tasks" />
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <h3>Today’s learning</h3>
          <p className="muted">A quick view of the tasks due across your children.</p>
          <div className="task-list compact-list">
            {todayTasks.map((task) => {
              const child = children.find((item) => item.id === task.childId);
              return (
                <div className="task-item" key={task.id}>
                  <div>
                    <strong>{task.title}</strong>
                    <div className="muted small">{child?.name} • {task.subject} • {task.estimatedMinutes} mins</div>
                  </div>
                  <span className={`badge badge--${task.status}`}>{task.status.replace('_', ' ')}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="card">
          <h3>Subject progress</h3>
          <p className="muted">A simple chart showing completed learning tasks by subject.</p>
          <div className="chart-wrap">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="subject" tick={{ fontSize: 12 }} />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="completed" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
