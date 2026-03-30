interface SectionHeaderProps {
  title: string;
  description?: string;
  badge?: string;
}

export default function SectionHeader({
  title,
  description,
  badge,
}: SectionHeaderProps) {
  return (
    <div className="mb-8">
      {badge ? (
        <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {badge}
        </span>
      ) : null}

      <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h1>

      {description ? (
        <p className="mt-3 max-w-3xl text-sm text-muted-foreground md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
