export const sortByTitle = (a, b) => {
  let titleA = a.Title.toUpperCase();
  let titleB = b.Title.toUpperCase();
  return titleA.localeCompare(titleB);
};
