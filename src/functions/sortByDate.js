export const sortByDate = (a, b) => {
  let aDate = new Date(a.Released).getTime();
  let bDate = new Date(b.Released).getTime();
  return aDate - bDate;
};
