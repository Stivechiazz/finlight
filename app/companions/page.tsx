import CompanionCard from "@/components/CompanionCard";
import { getAllCompanions } from "@/lib/actions/companion.action";
import CompanionForm from "@/components/CompanionForm";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : "";
  const topic = filters.topic ? filters.topic : "";

  const companions = await getAllCompanions({ subject, topic });

  // helper function (you must define this somewhere)
  const getSubjectColor = (subject: string) => {
    const colors: Record<string, string> = {
      financial_literacy: "#0EA5E9",
      investing: "#059669",
      accounting: "#D4AF37",
      banking: "#7C3AED",
      cryptocurrency: "#EC4899",
      entrepreneurship: "#F97316",
    };

    return colors[subject] || "#eee";
  };

  return (
    <main>
      <section className="flex justify-between gap-4 max-sm:flex-col">
        <h1>Companion Library</h1>
        <div className="flex gap-4">
          <SearchInput />
          <SubjectFilter />
        </div>
      </section>
      <section className="companions-grid">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
    </main>
  );
};

export default CompanionsLibrary;
