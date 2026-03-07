export interface Author {
  id: string;
  name: string;
  bio: string;
  avatarUrl: string;
  role: "admin" | "editor" | "writer";
  state?: string;
  createdAt: string;
}
