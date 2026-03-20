import CompanionForm from "@/components/CompanionForm";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const NewCompanion = async () => {
  const { userId } = await auth();

  // If not authenticated, redirect immediately
  if (!userId) {
    redirect('/sign-in'); // redirects before page renders
  }

  return (
    <main className="flex items-center justify-center lg:w-1/3 md:w-2/3 mx-auto p-4">
      <article className="w-full gap-4 flex flex-col">
        <h1 className="text-2xl font-bold">Companion Builder</h1>
        <CompanionForm />
      </article>
    </main>
  );
};

export default NewCompanion;