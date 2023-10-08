const BASE_URL = "https://ufoodapi.herokuapp.com/unsecure";

export const getAllGenres = async () => {
  const response = await fetch(`${BASE_URL}/restaurants`);
  if (response.status != 200) {
    throw new Error("An error occurred");
  }
  const result = await response.json();
  const genresElements = [...new Set(result.items.map(item => item.genres).flat())];
  return genresElements;
};
