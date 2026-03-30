interface EmptyStateCardProps {
  title: string;
  description: string;
  actionLabel?: string;
}

export default function EmptyStateCard({
  title,
  description,
  actionLabel,
}: EmptyStateCardProps) {
  return (
    <div className="rounded-3xl border border-dashed bg-white p-8 text-center shadow-sm">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
        {description}
      </p>

      {actionLabel ? (
        <button
          type="button"
          className="mt-5 rounded-2xl border px-5 py-3 text-sm font-medium transition hover:bg-muted"
        >
          {actionLabel}
        </button>
      ) : null}
    </div>
  );
}
