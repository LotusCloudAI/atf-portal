export interface News {
  id: string;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  category: string;
  author: string;
  createdAt: string;
  tags: string[];
  isPremium?: boolean;
  state?: string;
  slug?: string;
  editorStatus?: "pending" | "approved" | "rejected";
  status?: "draft" | "published";
}