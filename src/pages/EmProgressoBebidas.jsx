import React, { useEffect, useState } from 'react';
import Ingredients from '../components/Ingredients';
import RecipeFavorite from '../components/mini/RecipeFavorite';
import RecipeInstructions from '../components/mini/RecipeInstructions';
import RecipePhoto from '../components/mini/RecipePhoto';
import RecipeRecomendations from '../components/mini/RecipeRecomendations';
import RecipeShare from '../components/mini/RecipeShare';
import FetchRecipe from '../hooks/FetchRecipe';
import FetchAPI from '../hooks/FetchAPI';
import { ID_DRINK, API_FOOD_ALL } from '../services/NoMagicStuff';

export default function EmProgressoComidas() {
  const [drinkDetails, setDrinkDetails] = useState(null);
  const { data, request } = FetchRecipe();
  const { all, requestAPI } = FetchAPI();
  const currentId = window.location.pathname.split('/')[2];

  useEffect(() => {
    if (data) {
      const { drinks } = data;
      setDrinkDetails(drinks[0]);
    }
  }, [data]);

  useEffect(() => {
    const apiRequest = async () => {
      await request(`${ID_DRINK}${currentId}`);
      await requestAPI(API_FOOD_ALL);
    };
    apiRequest();
  }, [request, currentId, requestAPI]);

  return (
    <div>
      {
        (drinkDetails) && (
          <>
            <RecipePhoto
              src={ drinkDetails.strDrinkThumb }
              alt={ drinkDetails.strDrink }
            />
            <h2 data-testid="recipe-title">
              { drinkDetails.strDrink }
            </h2>
            <RecipeShare />
            <RecipeFavorite />
            <p data-testid="recipe-category">
              { `${drinkDetails.strCategory} - ${drinkDetails.strAlcoholic}` }
            </p>
            <Ingredients data={ data } progress="pr" />
            <RecipeInstructions instructions={ drinkDetails.strInstructions } />
            <RecipeRecomendations data={ all } />
            <button data-testid="finish-recipe-btn" type="button">
              Finalizar
            </button>
          </>
        )
      }
    </div>
  );
}
