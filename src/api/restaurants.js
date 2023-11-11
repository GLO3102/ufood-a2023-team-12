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


export const postRestaurantVisit = async (
  user_id,
  restaurant_id,
  rating,
  date,
  comment,
) => {
  try {
    const response = await fetch(
      `${BASE_URL}/users/${user_id}/restaurants/visits`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          restaurant_id: restaurant_id,
          comment: comment,
          rating: rating,
          date: date,
        }),
      },
    ).then(
      (response) =>
        function () {
          if (response.status != 200) {
            throw new Error(
              `Error sending rating for restaurant ${restaurantId}`,
            );
          }
          return response.json();
        },
    );
  } catch (e) {
    console.log(e);
  }
};

export const getVisitsByRestaurantId = async (restaurantId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/restaurants/${restaurantId}/visits`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    if (response.status != 200) {
      throw new Error(`Error fetching visits for restaurant  ${restaurantId}`);
    }
    const visits = await response.json();
    return visits.items;
  } catch (e) {
    console.log(e);
  }
};