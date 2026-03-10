export const logRenderTime = (label: string) => {
  console.time(label);
  return () => console.timeEnd(label);
};
