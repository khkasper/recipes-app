import React, { useEffect, useState } from 'react';
import Ingredients from '../components/Ingredients';
import RecipeFavorite from '../components/mini/RecipeFavorite';
import RecipeInstructions from '../components/mini/RecipeInstructions';
import RecipePhoto from '../components/mini/RecipePhoto';
import RecipeRecomendations from '../components/mini/RecipeRecomendations';
import RecipeShare from '../components/mini/RecipeShare';
import RecipeVideo from '../components/mini/RecipeVideo';
import FetchRecipe from '../hooks/FetchRecipe';
import { ID_DRINK, ID_FOOD } from '../services/NoMagicStuff';

export default function EmProgresso() {
  const [drinkDetails, setDrinkDetails] = useState(null);
  const [mealDetails, setMealDetails] = useState(null);

  const { data, request } = FetchRecipe;
  const currentPage = window.location.pathname.split('/')[1];
  const currentId = window.location.pathname.split('/')[2];
  let page;
  if (currentPage === 'comidas') { page = 'meals'; } else { page = 'drinks'; }

  useEffect(() => {
    if (data) {
      if (currentPage === 'comidas') {
        const { meals } = data;
        setMealDetails(meals[0]);
      } else {
        const { drinks } = data;
        setDrinkDetails(drinks[0]);
      }
    }
  }, [currentPage, data]);

  useEffect(() => {
    const apiRequest = async (linkId) => {
      await request(`${linkId}${currentId}`);
    };

    if (currentPage === 'comidas') {
      apiRequest(ID_FOOD);
    } else {
      apiRequest(ID_DRINK);
    }
  }, [currentPage, request, currentId]);

  return (
    <div>
      {
        (currentPage === 'comidas' ? mealDetails : drinkDetails) && (
          <>
            <RecipePhoto />
            <h2 data-testid="recipe-title">{  }</h2>
            <RecipeInstructions />
            <RecipeShare />
            <RecipeFavorite />
            <p data-testid="recipe-category">{  }</p>
            <Ingredients />
            <RecipeInstructions />
            { currentPage === 'comidas' ? <RecipeVideo /> : '' }
            <RecipeRecomendations />
            <button data-testid="finish-recipe-btn" type="button">
              Finalizar
            </button>
          </>
        )

      }
    </div>
  );
}
