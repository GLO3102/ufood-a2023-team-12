import { BASE_URL } from './restaurantApiURL';	

export async function createFavoritesList(name, owner) {
  const url = `${BASE_URL}/favorites`;
  const headers = {
    "Content-Type": "application/json",
  };
  const body = JSON.stringify({ name, owner });

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: body,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Favorites List Created:', data);
    return data;
  } catch (error) {
    console.error('Error creating favorites list:', error);
    throw error;
  }
}
