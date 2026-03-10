export const isString = (value: unknown): value is string => {
  return typeof value === "string";
};

export const isArray = (value: unknown): value is any[] => {
  return Array.isArray(value);
};
