import { BASE_URL } from "./restaurantApiURL";

export const createNewUser = async (data) => {
  const formData = new URLSearchParams(data).toString();
  const response = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      password: data.password,
    }),
  });

  if (response.status != 201) {
    throw new Error("An error occurred");
  }

  const result = await response.json();
  return result;
};

export const login = async (email, password) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  if (response.status != 201) {
    throw new Error("An error occurred");
  }

  const result = await response.json();
  return result;
};

export const getFavoriteLists = async (ownerId) => {
  const url = `${BASE_URL}/users/${ownerId}/favorites`;
  try {
    const response = await fetch(url, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating favorites list:", error);
    throw error;
  }
};
