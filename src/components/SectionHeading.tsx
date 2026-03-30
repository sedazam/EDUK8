import React from "react";

interface SectionHeadingProps {
  title: string;
  description?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  description,
}) => (
  <div className="section-heading">
    <h2 className="text-2xl font-bold mb-1">{title}</h2>
    {description && <p className="text-muted-foreground mb-4">{description}</p>}
  </div>
);

export default SectionHeading;
