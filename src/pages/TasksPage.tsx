import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import SectionHeading from '../components/SectionHeading';

export default function TasksPage() {
  return (
    <div className="page-stack">
      <SectionHeading
        title="Tasks"
        description="View and manage reading, maths, spelling, homework, and routine tasks."
      />

      <div className="split-layout">
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}
