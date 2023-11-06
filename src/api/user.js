const BASE_URL = "https://ufoodapi.herokuapp.com";

export const createNewUser = async (data) => {
  const formData = new URLSearchParams(data).toString();
  const response = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData,
  });

  if (response.status != 200) {
    throw new Error("An error occurred");
  }

  const result = await response.json();
  return result;
};
