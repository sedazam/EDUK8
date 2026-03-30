import type { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string;
  hint: string;
  icon?: ReactNode;
}

export default function StatCard({ title, value, hint, icon }: StatCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <h3 className="mt-2 text-3xl font-bold">{value}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{hint}</p>
        </div>

        {icon ? (
          <div className="rounded-xl bg-primary/10 p-3 text-primary">
            {icon}
          </div>
        ) : null}
      </div>
    </div>
  );
}
