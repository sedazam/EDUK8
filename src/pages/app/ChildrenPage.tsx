import SectionHeading from "../../components/SectionHeading";
import ChildSummaryCard from "../../components/children/ChildSummaryCard";
import { children } from "../../data/mock/children";

export default function ChildrenPage() {
  return (
    <div className="space-y-6">
      <SectionHeading
        title="Children"
        description="Manage learning profiles, focus areas, and weekly home study goals."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {children.map((child) => (
          <ChildSummaryCard key={child.id} child={child} />
        ))}
      </div>
    </div>
  );
}
