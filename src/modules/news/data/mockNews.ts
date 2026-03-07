import { News } from "../types/News";
import { slugify } from "../../../utils/slugify";
export const mockNews: News[] = [
  {
    id: "1",
    title: "ATF Launches State Chapter Expansion",
    summary: "ATF expands its governance structure across US states.",
    content: "Full article content goes here...",
    imageUrl: "https://via.placeholder.com/600x400",
    category: "Governance",
    author: "ATF Admin",
    createdAt: "2024-03-01",
    tags: ["ATF", "Expansion"],
    isPremium: false,
    isFeatured: true,
    state: "TX",
    status: "draft"
  },
  {
    id: "2",
    title: "Youth Leadership Summit 2024",
    summary: "Empowering next generation Telugu leaders.",
    content: "Detailed youth summit content...",
    imageUrl: "https://via.placeholder.com/600x400",
    category: "Youth",
    author: "Youth Team",
    createdAt: "2024-03-02",
    tags: ["Youth", "Leadership"],
    isPremium: false,
    isFeatured: true,
    views?: number,
    state: "CA",
    status: "draft"
  }
];
