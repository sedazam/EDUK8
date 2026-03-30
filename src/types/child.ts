export type KeyStage = "KS1" | "KS2";

export interface Child {
  id: string;
  name: string;
  yearGroup: string;
  keyStage: KeyStage;
  avatar: string;
  focusSubjects: string[];
  weeklyGoal: number;
  completionRate: number;
  readingStreak: number;
}
