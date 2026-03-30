interface SubjectProgressItem {
  subject: string;
  progress: number;
}

interface SubjectProgressCardProps {
  items: SubjectProgressItem[];
}

export default function SubjectProgressCard({
  items,
}: SubjectProgressCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Subject progress</h3>
        <p className="text-sm text-muted-foreground">
          A clear snapshot of where confidence is building at home.
        </p>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.subject}>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-medium">{item.subject}</span>
              <span className="text-muted-foreground">{item.progress}%</span>
            </div>

            <div className="h-2.5 w-full rounded-full bg-muted">
              <div
                className="h-2.5 rounded-full bg-primary"
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
