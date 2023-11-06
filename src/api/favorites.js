const BASE_URL = "https://ufoodapi.herokuapp.com/unsecure";

export async function createFavoritesList(name, owner) {
  const url = `${BASE_URL}/favorites`; // Replace with your actual API endpoint
  const headers = {
    "Content-Type": "application/json",
  };
  const body = JSON.stringify({ name, owner });
  console.log("name", name);
  console.log("owner", owner);
  console.log("body", body);

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
