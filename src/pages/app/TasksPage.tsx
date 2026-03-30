import { useMemo, useState } from "react";

import SectionHeader from "../../components/app/SectionHeader";
import TaskListItem from "../../components/tasks/TaskListItem";
import AddTaskForm from "../../components/tasks/AddTaskForm";

import { children as initialChildren } from "../../data/mock/children";
import { tasks as initialTasks } from "../../data/mock/tasks";
import useLocalStorage from "../../hooks/useLocalStorage";

import type { Child } from "../../types/child";
import type { Task, TaskStatus } from "../../types/task";

type FilterValue = "all" | TaskStatus;

export default function TasksPage() {
  const [children] = useLocalStorage<Child[]>(
    "eduk8-children",
    initialChildren,
  );
  const [tasks, setTasks] = useLocalStorage<Task[]>(
    "eduk8-tasks",
    initialTasks,
  );

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
  }, [tasks, selectedChildId, selectedStatus]);

  function handleAddTask(newTask: Task) {
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  }

  function handleStatusChange(taskId: string, nextStatus: TaskStatus) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: nextStatus } : task,
      ),
    );
  }

  return (
    <div className="space-y-6">
      <SectionHeader
        title="Tasks"
        description="View, filter, and manage homework, reading, maths, spelling, and routines."
      />

      <AddTaskForm children={children} onAddTask={handleAddTask} />

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

            return (
              <TaskListItem
                key={task.id}
                task={task}
                child={child}
                onStatusChange={handleStatusChange}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
