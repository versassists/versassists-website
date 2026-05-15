export type Category =
  | "AI & Business"
  | "Web Development"
  | "Design"
  | "Customer Support"
  | "Marketing"
  | "Social Media"
  | "Productivity"
  | "Business Growth";

export const CATEGORIES: Category[] = [
  "AI & Business",
  "Web Development",
  "Design",
  "Customer Support",
  "Marketing",
  "Social Media",
  "Productivity",
  "Business Growth",
];

export interface GeneratedPost {
  title: string;
  slug: string;
  category: Category;
  excerpt: string;
  readTime: string;
  htmlBody: string;
  imagePrompt: string;
}
