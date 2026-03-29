export type KeyStage = 'KS1' | 'KS2';
export type Subject = 'Reading' | 'Maths' | 'Spelling' | 'Writing' | 'Science' | 'Homework';
export type TaskStatus = 'not_started' | 'in_progress' | 'completed' | 'overdue';

export interface Child {
  id: string;
  name: string;
  yearGroup: string;
  keyStage: KeyStage;
  weeklyGoal: number;
  focusSubjects: Subject[];
}

export interface Task {
  id: string;
  childId: string;
  title: string;
  subject: Subject;
  dueDate: string;
  estimatedMinutes: number;
  rewardPoints: number;
  status: TaskStatus;
}
