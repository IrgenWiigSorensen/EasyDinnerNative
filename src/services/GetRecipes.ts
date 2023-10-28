const API_URL = '"http://192.168.0.25:7166';


// GET request
export const getRecipes = async () => {
  try {
    const response = await fetch("API_URL/api/Recipes");
    const data = await response.json();
    return data; 

  } catch (error) {
    console.log(error);
  }
};