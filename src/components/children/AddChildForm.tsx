import { toast } from "sonner";
import { useState } from "react";
import type { Child, KeyStage } from "../../types/child";

interface AddChildFormProps {
  onAddChild: (child: Child) => void;
}

export default function AddChildForm({ onAddChild }: AddChildFormProps) {
  const [name, setName] = useState("");
  const [yearGroup, setYearGroup] = useState("");
  const [keyStage, setKeyStage] = useState<KeyStage>("KS1");
  const [focusSubjects, setFocusSubjects] = useState("");
  const [weeklyGoal, setWeeklyGoal] = useState("5");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedYearGroup = yearGroup.trim();
    const trimmedSubjects = focusSubjects
      .split(",")
      .map((subject) => subject.trim())
      .filter(Boolean);

    const parsedWeeklyGoal = Number(weeklyGoal);

    if (!trimmedName || !trimmedYearGroup || trimmedSubjects.length === 0) {
      toast.error("Please fill in all child details.");
      return;
    }

    if (Number.isNaN(parsedWeeklyGoal) || parsedWeeklyGoal <= 0) {
      toast.error("Weekly goal must be a valid number.");
      return;
    }

    const newChild: Child = {
      id: `child-${Date.now()}`,
      name: trimmedName,
      yearGroup: trimmedYearGroup,
      keyStage,
      avatar: trimmedName.charAt(0).toUpperCase(),
      focusSubjects: trimmedSubjects,
      weeklyGoal: parsedWeeklyGoal,
      completionRate: 0,
      readingStreak: 0,
    };

    onAddChild(newChild);
    toast.success("Child profile added.");

    setName("");
    setYearGroup("");
    setKeyStage("KS1");
    setFocusSubjects("");
    setWeeklyGoal("5");
  }

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Add child profile</h3>
        <p className="text-sm text-muted-foreground">
          Create a profile for a KS1 or KS2 child and personalise their learning
          focus.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">Child name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border bg-background px-3 py-2 text-sm"
            placeholder="Ayaan"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Year group</label>
          <input
            value={yearGroup}
            onChange={(e) => setYearGroup(e.target.value)}
            className="w-full rounded-xl border bg-background px-3 py-2 text-sm"
            placeholder="Year 2"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Key stage</label>
          <select
            value={keyStage}
            onChange={(e) => setKeyStage(e.target.value as KeyStage)}
            className="w-full rounded-xl border bg-background px-3 py-2 text-sm"
          >
            <option value="KS1">KS1</option>
            <option value="KS2">KS2</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Weekly goal</label>
          <input
            type="number"
            min="1"
            value={weeklyGoal}
            onChange={(e) => setWeeklyGoal(e.target.value)}
            className="w-full rounded-xl border bg-background px-3 py-2 text-sm"
            placeholder="5"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium">
            Focus subjects
          </label>
          <input
            value={focusSubjects}
            onChange={(e) => setFocusSubjects(e.target.value)}
            className="w-full rounded-xl border bg-background px-3 py-2 text-sm"
            placeholder="Reading, Maths, Spelling"
          />
          <p className="mt-2 text-xs text-muted-foreground">
            Separate subjects with commas.
          </p>
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Add child
          </button>
        </div>
      </form>
    </div>
  );
}
