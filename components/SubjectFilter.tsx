"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const subjects = ["financial_literacy", "investing","accounting","banking","cryptocurrency","entrepreneurship",];

const SubjectFilter = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSubject = searchParams.get("subject") || "";

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("subject", value);
    } else {
      params.delete("subject");
    }

    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <select
      value={currentSubject}
      onChange={(e) => handleChange(e.target.value)}
      className="border rounded-md px-3 py-2"
    >
      <option value="">All Subjects</option>
      {subjects.map((subject) => (
        <option key={subject} value={subject}>
          {subject}
        </option>
      ))}
    </select>
  );
};

export default SubjectFilter;