export const calculateTrendScore = (
  views: number,
  ageInDays: number
) => {
  return views / (ageInDays + 1);
};
