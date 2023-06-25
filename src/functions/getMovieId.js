export const getMovieId = (favorites) => {
  let maxId = 0;

  for (let i = 0; i < favorites.length; i++) {
    const obj = favorites[i];
    if (obj.id > maxId) {
      maxId = obj.id;
    }
  }

  return maxId + 1;
};
