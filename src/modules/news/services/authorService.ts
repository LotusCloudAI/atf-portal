import { mockAuthors } from "../data/mockAuthors";

export const getAuthors = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockAuthors), 300);
  });
};
