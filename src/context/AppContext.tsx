import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Child, Subject, Task, TaskStatus } from '../types';
import { loadChildren, loadTasks, saveChildren, saveTasks } from '../utils/storage';

interface AddChildInput {
  name: string;
  yearGroup: string;
  keyStage: Child['keyStage'];
  weeklyGoal: number;
  focusSubjects: Subject[];
}

interface AddTaskInput {
  childId: string;
  title: string;
  subject: Subject;
  dueDate: string;
  estimatedMinutes: number;
  rewardPoints: number;
}

interface AppContextValue {
  children: Child[];
  tasks: Task[];
  addChild: (input: AddChildInput) => void;
  addTask: (input: AddTaskInput) => void;
  updateTaskStatus: (taskId: string, status: TaskStatus) => void;
  resetDemoData: () => void;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

function generateId(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [childProfiles, setChildProfiles] = useState<Child[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    setChildProfiles(loadChildren());
    setTasks(loadTasks());
  }, []);

  useEffect(() => {
    if (childProfiles.length) saveChildren(childProfiles);
  }, [childProfiles]);

  useEffect(() => {
    if (tasks.length) saveTasks(tasks);
  }, [tasks]);

  const value = useMemo<AppContextValue>(() => ({
    children: childProfiles,
    tasks,
    addChild: (input) => {
      setChildProfiles((current) => [
        ...current,
        { id: generateId('child'), ...input },
      ]);
    },
    addTask: (input) => {
      setTasks((current) => [
        ...current,
        { id: generateId('task'), ...input, status: 'not_started' },
      ]);
    },
    updateTaskStatus: (taskId, status) => {
      setTasks((current) => current.map((task) => (task.id === taskId ? { ...task, status } : task)));
    },
    resetDemoData: () => {
      localStorage.removeItem('eduk8_children');
      localStorage.removeItem('eduk8_tasks');
      setChildProfiles(loadChildren());
      setTasks(loadTasks());
      window.location.reload();
    },
  }), [childProfiles, tasks]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used inside AppProvider');
  }
  return context;
}
