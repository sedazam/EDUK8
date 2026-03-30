interface Props {
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export default function SectionHeading({ title, description, action }: Props) {
  return (
    <div className="section-heading">
      <div>
        <h1>{title}</h1>
        {description ? <p>{description}</p> : null}
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}
