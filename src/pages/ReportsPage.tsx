import { useMemo } from 'react';
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import SectionHeading from '../components/SectionHeading';
import { useAppContext } from '../context/AppContext';

export default function ReportsPage() {
  const { tasks } = useAppContext();

  const reportData = useMemo(() => {
    const subjects = ['Reading', 'Maths', 'Spelling', 'Writing', 'Science', 'Homework'];
    return subjects.map((subject) => ({
      subject,
      completed: tasks.filter((task) => task.subject === subject && task.status === 'completed').length,
      planned: tasks.filter((task) => task.subject === subject).length,
    }));
  }, [tasks]);

  return (
    <div className="page-stack">
      <SectionHeading
        title="Reports"
        description="Simple learning insights to help parents stay informed and consistent."
      />

      <div className="card">
        <h3>Subject performance</h3>
        <p className="muted">Compare planned vs completed learning by subject.</p>
        <div className="chart-wrap">
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={reportData}>
              <XAxis dataKey="subject" tick={{ fontSize: 12 }} />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="planned" strokeWidth={2} />
              <Line type="monotone" dataKey="completed" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
