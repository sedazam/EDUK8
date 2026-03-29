import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import type { Subject } from '../types';

const subjects: Subject[] = ['Reading', 'Maths', 'Spelling', 'Writing', 'Science', 'Homework'];

export default function TaskForm() {
  const { addTask, children } = useAppContext();
  const [childId, setChildId] = useState(children[0]?.id ?? '');
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState<Subject>('Reading');
  const [dueDate, setDueDate] = useState(new Date().toISOString().slice(0, 10));
  const [estimatedMinutes, setEstimatedMinutes] = useState(15);
  const [rewardPoints, setRewardPoints] = useState(10);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!title.trim() || !childId) return;

    addTask({
      childId,
      title: title.trim(),
      subject,
      dueDate,
      estimatedMinutes,
      rewardPoints,
    });

    setTitle('');
    setSubject('Reading');
    setDueDate(new Date().toISOString().slice(0, 10));
    setEstimatedMinutes(15);
    setRewardPoints(10);
  }

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <h3>Add task</h3>
      <div className="form-grid">
        <label>
          <span>Child</span>
          <select value={childId} onChange={(e) => setChildId(e.target.value)}>
            {children.map((child) => (
              <option key={child.id} value={child.id}>{child.name}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Task title</span>
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Reading task or homework" />
        </label>
        <label>
          <span>Subject</span>
          <select value={subject} onChange={(e) => setSubject(e.target.value as Subject)}>
            {subjects.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Due date</span>
          <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        </label>
        <label>
          <span>Minutes</span>
          <input type="number" min="5" max="120" value={estimatedMinutes} onChange={(e) => setEstimatedMinutes(Number(e.target.value))} />
        </label>
        <label>
          <span>Reward points</span>
          <input type="number" min="1" max="50" value={rewardPoints} onChange={(e) => setRewardPoints(Number(e.target.value))} />
        </label>
      </div>

      <button className="button button--primary" type="submit">Save task</button>
    </form>
  );
}
