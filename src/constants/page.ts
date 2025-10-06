export const Page = {
  AboutMe: "about",
  Projects: "projects",
  ContactMe: "contact",
} as const;

export type PageKey = typeof Page[keyof typeof Page]; // "about" | "projects" | "contact"