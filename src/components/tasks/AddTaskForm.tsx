import { useState } from "react";
import { toast } from "sonner";
import type { Child } from "../../types/child";
import type { Task, TaskStatus, TaskSubject } from "../../types/task";
interface AddTaskFormProps {
  children: Child[];
  onAddTask: (task: Task) => void;
}

export default function AddTaskForm({ children, onAddTask }: AddTaskFormProps) {
  const [childId, setChildId] = useState(children[0]?.id ?? "");
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState<TaskSubject>("Reading");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!title.trim()) {
      toast.error("Please complete all task fields.");
      return;
    }

    // Example validation for estimatedMinutes and rewardPoints (if you add these as inputs)
    // if (isNaN(estimatedMinutes)) {
    //   toast.error("Estimated minutes must be a valid number.");
    //   return;
    // }
    // if (isNaN(rewardPoints)) {
    //   toast.error("Reward points must be a valid number.");
    //   return;
    // }

    const newTask: Task = {
      id: `task-${Date.now()}`,
      childId,
      title,
      subject,
      dueDate: "Today",
      status: "not_started",
      estimatedMinutes: 15,
      rewardPoints: 10,
    };

    onAddTask(newTask);
    toast.success("Task added successfully.");
    setTitle("");
  }

  return (
    <div className="rounded-xl border p-4 bg-white">
      <h3 className="font-semibold mb-3">Add Task</h3>

      <form onSubmit={handleSubmit} className="flex gap-2 flex-wrap">
        <select
          value={childId}
          onChange={(e) => setChildId(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          {children.map((child) => (
            <option key={child.id} value={child.id}>
              {child.name}
            </option>
          ))}
        </select>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          className="border px-2 py-1 rounded"
        />

        <button className="bg-black text-white px-3 py-1 rounded">Add</button>
      </form>
    </div>
  );
}
