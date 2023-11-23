export const BASE_URL_UNSECURE = "https://ufoodapi.herokuapp.com/unsecure";
export const BASE_URL = "https://ufoodapi.herokuapp.com";

export function getUserToken() {
  const userItem = localStorage.getItem("user");
  if (userItem) {
    const user = JSON.parse(userItem);
    return user.token;
  }
  return null;
}

