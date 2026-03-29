import { useMemo, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import type { TaskStatus } from '../types';

const statuses: { label: string; value: 'all' | TaskStatus }[] = [
  { label: 'All', value: 'all' },
  { label: 'Not started', value: 'not_started' },
  { label: 'In progress', value: 'in_progress' },
  { label: 'Completed', value: 'completed' },
  { label: 'Overdue', value: 'overdue' },
];

export default function TaskList() {
  const { tasks, children, updateTaskStatus } = useAppContext();
  const [filter, setFilter] = useState<'all' | TaskStatus>('all');

  const filteredTasks = useMemo(() => {
    return filter === 'all' ? tasks : tasks.filter((task) => task.status === filter);
  }, [filter, tasks]);

  return (
    <div className="card">
      <div className="stack-row stack-row--wrap stack-row--between">
        <div>
          <h3>Tasks</h3>
          <p className="muted">Track reading, maths, spelling, and homework tasks.</p>
        </div>
        <div className="chip-row">
          {statuses.map((item) => (
            <button
              key={item.value}
              type="button"
              className={`chip ${filter === item.value ? 'chip--active' : ''}`}
              onClick={() => setFilter(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="task-list">
        {filteredTasks.map((task) => {
          const child = children.find((item) => item.id === task.childId);
          return (
            <div className="task-item" key={task.id}>
              <div>
                <strong>{task.title}</strong>
                <div className="muted small">
                  {child?.name} • {task.subject} • {task.estimatedMinutes} mins • due {task.dueDate}
                </div>
              </div>

              <div className="stack-row stack-row--wrap">
                <span className={`badge badge--${task.status}`}>{task.status.replace('_', ' ')}</span>
                <select value={task.status} onChange={(e) => updateTaskStatus(task.id, e.target.value as TaskStatus)}>
                  <option value="not_started">Not started</option>
                  <option value="in_progress">In progress</option>
                  <option value="completed">Completed</option>
                  <option value="overdue">Overdue</option>
                </select>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
