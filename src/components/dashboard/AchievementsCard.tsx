interface AchievementsCardProps {
  items: string[];
}

export default function AchievementsCard({ items }: AchievementsCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Recent achievements</h3>
        <p className="text-sm text-muted-foreground">
          Positive learning moments that help keep motivation high.
        </p>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-xl bg-muted/60 p-4 text-sm font-medium"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
