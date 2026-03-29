interface Props {
  label: string;
  value: string;
  helper: string;
}

export default function StatCard({ label, value, helper }: Props) {
  return (
    <div className="card stat-card">
      <p className="stat-card__label">{label}</p>
      <h3 className="stat-card__value">{value}</h3>
      <p className="stat-card__helper">{helper}</p>
    </div>
  );
}
