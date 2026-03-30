import { useMemo, useState } from "react";

import SectionHeading from "../../components/SectionHeading";
import TaskListItem from "../../components/tasks/TaskListItem";
import { children } from "../../data/mock/children";
import { tasks } from "../../data/mock/tasks";
import type { TaskStatus } from "../../types/task";

type FilterValue = "all" | TaskStatus;

export default function TasksPage() {
  const [selectedChildId, setSelectedChildId] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<FilterValue>("all");

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const childMatches =
        selectedChildId === "all" ? true : task.childId === selectedChildId;

      const statusMatches =
        selectedStatus === "all" ? true : task.status === selectedStatus;

      return childMatches && statusMatches;
    });
  }, [selectedChildId, selectedStatus]);

  return (
    <div className="space-y-6">
      <SectionHeading
        title="Tasks"
        description="View, filter, and manage homework, reading, maths, spelling, and routines."
      />

      <div className="grid gap-4 rounded-2xl border bg-white p-4 shadow-sm md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Filter by child
          </label>
          <select
            value={selectedChildId}
            onChange={(e) => setSelectedChildId(e.target.value)}
            className="w-full rounded-xl border bg-background px-3 py-2 text-sm"
          >
            <option value="all">All children</option>
            {children.map((child) => (
              <option key={child.id} value={child.id}>
                {child.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Filter by status
          </label>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value as FilterValue)}
            className="w-full rounded-xl border bg-background px-3 py-2 text-sm"
          >
            <option value="all">All statuses</option>
            <option value="completed">Completed</option>
            <option value="in_progress">In progress</option>
            <option value="not_started">Not started</option>
            <option value="overdue">Overdue</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {filteredTasks.length === 0 ? (
          <div className="rounded-2xl border border-dashed bg-white p-8 text-sm text-muted-foreground shadow-sm">
            No tasks match your current filters.
          </div>
        ) : (
          filteredTasks.map((task) => {
            const child = children.find((item) => item.id === task.childId);

            return <TaskListItem key={task.id} task={task} child={child} />;
          })
        )}
      </div>
    </div>
  );
}
