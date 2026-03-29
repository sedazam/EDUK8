import { defaultChildren, defaultTasks } from '../data/mockData';
import type { Child, Task } from '../types';

const CHILDREN_KEY = 'eduk8_children';
const TASKS_KEY = 'eduk8_tasks';

export function loadChildren(): Child[] {
  const raw = localStorage.getItem(CHILDREN_KEY);
  if (!raw) {
    localStorage.setItem(CHILDREN_KEY, JSON.stringify(defaultChildren));
    return defaultChildren;
  }
  return JSON.parse(raw) as Child[];
}

export function loadTasks(): Task[] {
  const raw = localStorage.getItem(TASKS_KEY);
  if (!raw) {
    localStorage.setItem(TASKS_KEY, JSON.stringify(defaultTasks));
    return defaultTasks;
  }
  return JSON.parse(raw) as Task[];
}

export function saveChildren(children: Child[]) {
  localStorage.setItem(CHILDREN_KEY, JSON.stringify(children));
}

export function saveTasks(tasks: Task[]) {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}
