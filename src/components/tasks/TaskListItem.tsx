import type { Task } from "../../types/task";
import type { Child } from "../../types/child";

interface TaskListItemProps {
  task: Task;
  child?: Child;
}

const statusStyles: Record<string, string> = {
  completed: "bg-green-100 text-green-700",
  in_progress: "bg-amber-100 text-amber-700",
  not_started: "bg-slate-100 text-slate-700",
  overdue: "bg-red-100 text-red-700",
};

export default function TaskListItem({ task, child }: TaskListItemProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
      <div>
        <h3 className="font-semibold">{task.title}</h3>
        <p className="text-sm text-muted-foreground">
          {child?.name} • {task.subject} • Due {task.dueDate} •{" "}
          {task.estimatedMinutes} mins
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm text-muted-foreground">
          {task.rewardPoints} pts
        </span>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${statusStyles[task.status]}`}
        >
          {task.status.replace("_", " ")}
        </span>

        <button className="rounded-xl border px-4 py-2 text-sm font-medium transition hover:bg-muted">
          View
        </button>
      </div>
    </div>
  );
}
