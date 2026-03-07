export const calculateSimilarity = (
  tagsA: string[] = [],
  tagsB: string[] = []
) => {
  const common = tagsA.filter(tag => tagsB.includes(tag));
  return common.length;
};