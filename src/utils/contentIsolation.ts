export const filterByState = (items: any[], state: string) => {
  return items.filter(item => item.state === state);
};

export const filterByChapter = (items: any[], chapterId: string) => {
  return items.filter(item => item.chapterId === chapterId);
};