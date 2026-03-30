import type { Task } from "../../types/task";
import type { Child } from "../../types/child";

interface TodayTasksCardProps {
  tasks: Task[];
  children: Child[];
}

const statusStyles: Record<string, string> = {
  completed: "bg-green-100 text-green-700",
  in_progress: "bg-amber-100 text-amber-700",
  not_started: "bg-slate-100 text-slate-700",
  overdue: "bg-red-100 text-red-700",
};

export default function TodayTasksCard({
  tasks,
  children,
}: TodayTasksCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Today’s learning</h3>
        <p className="text-sm text-muted-foreground">
          The most important tasks due today across your selected child.
        </p>
      </div>

      <div className="space-y-3">
        {tasks.length === 0 ? (
          <div className="rounded-xl border border-dashed p-6 text-sm text-muted-foreground">
            No tasks for today yet. Add a new learning activity to build the
            weekly routine.
          </div>
        ) : (
          tasks.map((task) => {
            const child = children.find((item) => item.id === task.childId);

            return (
              <div
                key={task.id}
                className="flex flex-col gap-3 rounded-xl border p-4 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="font-medium">{task.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {child?.name} • {task.subject} • {task.estimatedMinutes}{" "}
                    mins
                  </p>
                </div>

                <span
                  className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold capitalize ${statusStyles[task.status]}`}
                >
                  {task.status.replace("_", " ")}
                </span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
