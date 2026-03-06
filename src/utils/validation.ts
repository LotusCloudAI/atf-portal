export const isEmpty = (value: string) => value.trim() === "";
export const isEmail = (value: string) =>
 /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
