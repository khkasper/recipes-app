import React, { useEffect, useState } from 'react';
import { ID_FOOD, API_DRINK_ALL } from '../services/NoMagicStuff';
import FetchRecipe from '../hooks/FetchRecipe';
import FetchAPI from '../hooks/FetchAPI';
import Ingredients from '../components/Ingredients';
import RecipePhoto from '../components/mini/RecipePhoto';
import RecipeInstructions from '../components/mini/RecipeInstructions';
import RecipeRecomendations from '../components/mini/RecipeRecomendations';
import RecipeVideo from '../components/mini/RecipeVideo';
import RecipeStart from '../components/mini/RecipeStart';
import RecipeShare from '../components/mini/RecipeShare';
import RecipeFavorite from '../components/mini/RecipeFavorite';

export default function ComidasDetalhes() {
  const [startButton, setStartButton] = useState(true);
  const { data, request } = FetchRecipe();
  const { all, requestAPI } = FetchAPI();
  const currentId = window.location.pathname.split('/')[2];

  useEffect(() => {
    const apiRequest = async () => {
      await request(`${ID_FOOD}${currentId}`);
      await requestAPI(API_DRINK_ALL);
    };
    apiRequest();
  }, [currentId, request, requestAPI]);

  useEffect(() => {
    if (localStorage.doneRecipes) {
      const localKey = JSON.parse(localStorage.getItem('doneRecipes'));
      localKey.forEach((recipe) => {
        if (recipe.id === currentId) { setStartButton(false); }
      });
    }
  }, [currentId]);

  return (
    <div>
      {
        data && data !== null && (
          <>
            <p data-testid="recipe-title">{ data.meals[0].strMeal }</p>
            <RecipePhoto
              src={ data.meals[0].strMealThumb }
              alt={ data.meals[0].strMeal }
            />
            <RecipeShare />
            <RecipeFavorite data={ data.meals[0] } />
            <div data-testid="recipe-category">
              { data.meals[0].strCategory }
            </div>
            <Ingredients data={ data } progress="no" />
            <RecipeInstructions instructions={ data.meals[0].strInstructions } />
            <RecipeVideo
              url={ data.meals[0].strYoutube }
              alt={ data.meals[0].strMeal }
            />
            <RecipeRecomendations data={ all } />
            { startButton && <RecipeStart /> }
          </>
        )
      }
    </div>
  );
}
