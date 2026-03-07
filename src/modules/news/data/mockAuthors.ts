import { Author } from "../types/Author";

export const mockAuthors: Author[] = [
  {
    id: "1",
    name: "ATF Admin",
    bio: "Core governance team",
    avatarUrl: "https://via.placeholder.com/100",
    role: "admin",
    state: "TX",
    createdAt: new Date().toISOString()
  },
  {
    id: "2",
    name: "Youth Editor",
    bio: "Youth content lead",
    avatarUrl: "https://via.placeholder.com/100",
    role: "editor",
    state: "CA",
    createdAt: new Date().toISOString()
  },
  {
    id: "3",
    name: "Content Writer",
    bio: "Writes governance updates",
    avatarUrl: "https://via.placeholder.com/100",
    role: "writer",
    state: "NY",
    createdAt: new Date().toISOString()
  }
];