//Capitalise first letter
export const cfl: (str: string) => string = (str) => {
  if (!str) return "";
  return str[0].toUpperCase() + str.substring(1);
};
