import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import type { Child, Subject } from '../types';

const subjects: Subject[] = ['Reading', 'Maths', 'Spelling', 'Writing', 'Science', 'Homework'];

export default function ChildForm() {
  const { addChild } = useAppContext();
  const [name, setName] = useState('');
  const [yearGroup, setYearGroup] = useState('Year 1');
  const [keyStage, setKeyStage] = useState<Child['keyStage']>('KS1');
  const [weeklyGoal, setWeeklyGoal] = useState(5);
  const [focusSubjects, setFocusSubjects] = useState<Subject[]>(['Reading', 'Maths']);

  function toggleSubject(subject: Subject) {
    setFocusSubjects((current) =>
      current.includes(subject) ? current.filter((item) => item !== subject) : [...current, subject]
    );
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim()) return;

    addChild({
      name: name.trim(),
      yearGroup,
      keyStage,
      weeklyGoal,
      focusSubjects,
    });

    setName('');
    setYearGroup('Year 1');
    setKeyStage('KS1');
    setWeeklyGoal(5);
    setFocusSubjects(['Reading', 'Maths']);
  }

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <h3>Add child profile</h3>
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Child name" />
        </label>
        <label>
          <span>Year group</span>
          <select value={yearGroup} onChange={(e) => setYearGroup(e.target.value)}>
            {['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6'].map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Key stage</span>
          <select value={keyStage} onChange={(e) => setKeyStage(e.target.value as Child['keyStage'])}>
            <option value="KS1">KS1</option>
            <option value="KS2">KS2</option>
          </select>
        </label>
        <label>
          <span>Weekly goal</span>
          <input
            type="number"
            min="1"
            max="14"
            value={weeklyGoal}
            onChange={(e) => setWeeklyGoal(Number(e.target.value))}
          />
        </label>
      </div>

      <div>
        <span className="form-label">Focus subjects</span>
        <div className="chip-row">
          {subjects.map((subject) => (
            <button
              key={subject}
              type="button"
              className={`chip ${focusSubjects.includes(subject) ? 'chip--active' : ''}`}
              onClick={() => toggleSubject(subject)}
            >
              {subject}
            </button>
          ))}
        </div>
      </div>

      <button className="button button--primary" type="submit">Save child</button>
    </form>
  );
}
