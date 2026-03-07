export const calculateTrendingScore = (
  views: number,
  createdAt: string
) => {
  const ageInDays =
    (Date.now() - new Date(createdAt).getTime()) /
    (1000 * 60 * 60 * 24);

  return views / (ageInDays + 1);
};