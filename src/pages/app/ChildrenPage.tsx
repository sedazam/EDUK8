import SectionHeading from "../../components/SectionHeading";
import EmptyStateCard from "../../components/app/EmptyStateCard";
import ChildSummaryCard from "../../components/children/ChildSummaryCard";
import AddChildForm from "../../components/children/AddChildForm";
import { children as initialChildren } from "../../data/mock/children";
import useLocalStorage from "../../hooks/useLocalStorage";
import type { Child } from "../../types/child";

export default function ChildrenPage() {
  const [children, setChildren] = useLocalStorage<Child[]>(
    "eduk8-children",
    initialChildren,
  );

  function handleAddChild(newChild: Child) {
    setChildren((prevChildren) => [newChild, ...prevChildren]);
  }

  return (
    <div className="space-y-8">
      <SectionHeading
        title="Children"
        description="Create and manage child profiles, learning focus areas, and weekly goals for home study."
      />

      <AddChildForm onAddChild={handleAddChild} />

      {children.length === 0 ? (
        <EmptyStateCard
          title="No child profiles yet"
          description="Add your first child profile to start organising subjects, goals, and learning tasks."
          actionLabel="Add child"
        />
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {children.map((child) => (
            <ChildSummaryCard key={child.id} child={child} />
          ))}
        </div>
      )}
    </div>
  );
}
