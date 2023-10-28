import { createContext, useEffect, useState } from "react";
import { getRecipes } from "../services/GetRecipes";


interface Recipe {
  recipe_Id?: number;
  recipe_Name: string;
  description?: string;
}

export const RecipesContext = createContext<{recipeList: Recipe[]}>({
  recipeList: [],
});

export const RecipesProvider = () => {
  const [recipeList, SetRecipeList] = useState<Array<Recipe>>([]);
  
  useEffect(() => {
    const getRecipesList = async () => {
      const listOfRecipes =  await getRecipes(); 
      SetRecipeList(listOfRecipes);
    }

    getRecipesList(); 
  }, [])

  const value  = { recipeList }; 
  return (
    <RecipesContext.Provider value={value}></RecipesContext.Provider>
  )
};

