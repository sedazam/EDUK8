import type { Child } from "../../types/child";

interface ChildSwitcherProps {
  children: Child[];
  selectedChildId: string;
  onChange: (childId: string) => void;
}

export default function ChildSwitcher({
  children,
  selectedChildId,
  onChange,
}: ChildSwitcherProps) {
  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm">
      <div className="mb-3">
        <h3 className="text-base font-semibold">Child overview</h3>
        <p className="text-sm text-muted-foreground">
          Switch between children to review progress and current tasks.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {children.map((child) => {
          const isActive = child.id === selectedChildId;

          return (
            <button
              key={child.id}
              type="button"
              onClick={() => onChange(child.id)}
              className={[
                "flex items-center gap-3 rounded-2xl border px-4 py-3 text-left transition",
                isActive ? "border-primary bg-primary/5" : "hover:bg-muted",
              ].join(" ")}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                {child.avatar}
              </div>

              <div>
                <p className="text-sm font-semibold">{child.name}</p>
                <p className="text-xs text-muted-foreground">
                  {child.yearGroup} • {child.keyStage}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
