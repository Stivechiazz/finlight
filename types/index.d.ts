

enum Subject {
financial_literacy = "financial_literacy",
investing = "investing",
accounting = "accounting",
banking = "banking",
cryptocurrency = "cryptocurrency",
entrepreneurship = "entrepreneurship",
}

type Companion = Models.DocumentList<Models.Document> & {
  $id: string;
  name: string;
  subject: Subject;
  topic: string;
  duration: number;
  bookmarked: boolean;
};

 interface CreateCompanion {
  name: string;
  subject: string;
  topic: string;
  voice: string;
  style: string;
  duration: number;
}

interface GetAllCompanions {
  limit?: number;
  page?: number;
  subject?: string | string[];
  topic?: string | string[];
}

interface BuildClient {
  key?: string;
  sessionToken?: string;
}

interface CreateUser {
  email: string;
  name: string;
  image?: string;
  accountId: string;
}

interface SearchParams {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

interface Avatar {
  userName: string;
  width: number;
  height: number;
  className?: string;
}


interface SavedMessage {
  role: "user" | "system" | "assistant";
  content: string;
}

interface CompanionComponentProps {
  companionId: string;
  subject: string;
  topic: string;
  name: string;
  userName: string;
  userImage: string;
  voice: string;
  style: string;
}

// // // helper function (you must define this somewhere)
// export const getSubjectColor = (subject: string) => {
//   const colors: Record<string, string> = {
//     financial_literacy: "#0EA5E9",
//     investing: "#059669",
//     accounting: "#D4AF37",
//     banking: "#7C3AED",
//     cryptocurrency: "#EC4899",
//     entrepreneurship: "#F97316",
//   };

//   return colors[subject] || "#eee";
// };
// 