export default function QuickActionsCard() {
  const actions = [
    {
      title: "Plan this week",
      description:
        "Create a simple learning plan for reading, maths, and spelling.",
    },
    {
      title: "Add a new task",
      description: "Create a focused activity for one of your children.",
    },
    {
      title: "Review progress",
      description:
        "See which subjects are improving and where support is needed.",
    },
  ];

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Quick actions</h3>
        <p className="text-sm text-muted-foreground">
          Useful shortcuts to help you stay organised during the week.
        </p>
      </div>

      <div className="space-y-3">
        {actions.map((action) => (
          <button
            key={action.title}
            type="button"
            className="w-full rounded-2xl border p-4 text-left transition hover:bg-muted"
          >
            <p className="font-medium">{action.title}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {action.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
