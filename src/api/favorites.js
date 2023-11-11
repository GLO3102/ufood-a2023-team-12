import { BASE_URL } from "./restaurantApiURL";

export async function createFavoritesList(name, owner) {
  const url = `${BASE_URL}/favorites`;
  const headers = {
    "Content-Type": "application/json",
  };
  const body = JSON.stringify({ name, owner });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: body,
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
}

export async function updateFavoriteListName(listId, name, owner) {
  const url = `${BASE_URL}/favorites/${listId}`;
  const headers = {
    "Content-Type": "application/json",
  };
  const body = JSON.stringify({ name, owner });

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: headers,
      body: body,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error editing favorites list name:", error);
    throw error;
  }
}

export async function deleteFavoriteList(listId) {
  const url = `${BASE_URL}/favorites/${listId}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting favorites list:", error);
    throw error;
  }
}

export async function addRestaurantToFavoritesList(listId, restaurantId) {
  const url = `${BASE_URL}/favorites/${listId}/restaurants`;
  const headers = {
    "Content-Type": "application/json",
  };
  const body = JSON.stringify({ restaurantId });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: body,
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
}
