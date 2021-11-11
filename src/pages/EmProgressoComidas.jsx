import React, { useEffect, useState } from 'react';
import Ingredients from '../components/Ingredients';
import RecipeFavorite from '../components/mini/RecipeFavorite';
import RecipeInstructions from '../components/mini/RecipeInstructions';
import RecipePhoto from '../components/mini/RecipePhoto';
import RecipeRecomendations from '../components/mini/RecipeRecomendations';
import RecipeShare from '../components/mini/RecipeShare';
import RecipeVideo from '../components/mini/RecipeVideo';
import FetchRecipe from '../hooks/FetchRecipe';
import FetchAPI from '../hooks/FetchAPI';
import { ID_FOOD, API_DRINK_ALL } from '../services/NoMagicStuff';
import RecipeFinish from '../components/mini/RecipeFinish';

export default function EmProgressoComidas() {
  const [mealDetails, setMealDetails] = useState(null);
  const { data, request } = FetchRecipe();
  const { all, requestAPI } = FetchAPI();
  const currentId = window.location.pathname.split('/')[2];

  useEffect(() => {
    if (data) {
      const { meals } = data;
      setMealDetails(meals[0]);
    }
  }, [data]);

  useEffect(() => {
    const apiRequest = async () => {
      await request(`${ID_FOOD}${currentId}`);
      await requestAPI(API_DRINK_ALL);
    };
    apiRequest();
  }, [request, currentId, requestAPI]);

  return (
    <div>
      {
        (mealDetails) && (
          <>
            <RecipePhoto
              src={ mealDetails.strMealThumb }
              alt={ mealDetails.strMealThumb }
            />
            <h2 data-testid="recipe-title">
              { mealDetails.strMeal }
            </h2>
            <RecipeShare />
            <RecipeFavorite data={ data.meals[0] } />
            <p data-testid="recipe-category">
              { mealDetails.strCategory }
            </p>
            <Ingredients data={ data } progress="pr" />
            <RecipeInstructions instructions={ mealDetails.strInstructions } />
            <RecipeVideo
              url={ mealDetails.strYoutube }
              alt={ mealDetails.strMeal }
            />
            <RecipeRecomendations data={ all } />
            <RecipeFinish data={ data.meals[0] } />
          </>
        )
      }
    </div>
  );
}
