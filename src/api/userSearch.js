import { BASE_URL } from "./restaurantApiURL";


export const getUsers = async (username) => {
  const response = await fetch(`${BASE_URL}/users?q=${username.value}&limit=10`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status != 200) {
    throw new Error("An error occurred");
  }
  const result = await response.json();
  return result.items;
};