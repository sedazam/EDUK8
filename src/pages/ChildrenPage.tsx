import ChildForm from '../components/ChildForm';
import SectionHeading from '../components/SectionHeading';
import { useAppContext } from '../context/AppContext';

export default function ChildrenPage() {
  const { children } = useAppContext();

  return (
    <div className="page-stack">
      <SectionHeading
        title="Children"
        description="Manage child profiles, key stage details, and home learning focus areas."
      />

      <div className="split-layout">
        <ChildForm />

        <div className="stack">
          {children.map((child) => (
            <div className="card" key={child.id}>
              <div className="stack-row stack-row--between">
                <div>
                  <h3>{child.name}</h3>
                  <p className="muted">{child.yearGroup} • {child.keyStage}</p>
                </div>
                <span className="pill">Goal: {child.weeklyGoal}/week</span>
              </div>
              <div className="chip-row">
                {child.focusSubjects.map((subject) => (
                  <span key={subject} className="chip chip--static">{subject}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
