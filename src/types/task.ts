export type TaskStatus =
  | "not_started"
  | "in_progress"
  | "completed"
  | "overdue";

export type TaskSubject =
  | "Reading"
  | "Maths"
  | "Spelling"
  | "Writing"
  | "Science"
  | "Homework";

export interface Task {
  id: string;
  childId: string;
  title: string;
  subject: TaskSubject;
  dueDate: string;
  status: TaskStatus;
  estimatedMinutes: number;
  rewardPoints: number;
}
