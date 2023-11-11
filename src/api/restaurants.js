import { BASE_URL } from './restaurantApiURL';


export const getRestaurants = async () => {
  try {
    const response = await fetch(`${BASE_URL}/restaurants`,{
      method: "GET",
      headers : {
          "Content-Type": "application/json",
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7"
      }

  });
    if (response.status != 200) {
      throw new Error('An error occurred');
    }

    const restaurants = await response.json();
    return restaurants.items;
  } catch (e) {
    console.log(e);
    
  }
};




export const getRestaurantById = async (restaurantId) => {
  try {
    const response = await fetch(`${BASE_URL}/restaurants/${restaurantId}`,{
      method: "GET",
      headers : {
          "Content-Type": "application/json",
      }

  });
    if (response.status != 200) {
      throw new Error(`Error fetching restaurant ${restaurantId}`);
    }

    const restaurant = await response.json();
    return restaurant;
  } catch (e) {
    console.log(e);
    
  }
};
