export interface News {
  id?: string;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  category: string;
  published: boolean;
  createdAt?: any;
  updatedAt?: any;
}