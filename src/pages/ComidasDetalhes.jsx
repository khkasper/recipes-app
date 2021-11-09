import React, { useEffect } from 'react';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import { ID_FOOD, API_DRINK_ALL } from '../services/NoMagicStuff';
import FetchRecipe from '../hooks/FetchRecipe';
import FetchAPI from '../hooks/FetchAPI';
import Ingredients from '../components/Ingredients';
import RecipePhoto from '../components/RecipePhoto';
import RecipeInstructions from '../components/RecipeInstructions';
import RecipeRecomendations from '../components/RecipeRecomendations';
import RecipeVideo from '../components/RecipeVideo';

export default function ComidasDetalhes() {
  const { data, request } = FetchRecipe();
  const { all, requestAPI } = FetchAPI();
  const currentId = window.location.pathname.split('/')[2];
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
        data !== null && (
          <>
            <p data-testid="recipe-title">{ data.meals[0].strMeal }</p>
            <RecipePhoto
              src={ data.meals[0].strMealThumb }
              alt={ data.meals[0].strMeal }
            />
            <button data-testid="share-btn" type="button">
              <img src={ shareIcon } alt="share" />
            </button>
            <button data-testid="favorite-btn" type="button">
              <img src={ whiteHeartIcon } alt="favorite" />
            </button>
            <div data-testid="recipe-category">
              { data.meals[0].strCategory }
            </div>
            <Ingredients data={ data } />
            <RecipeInstructions instructions={ data.meals[0].strInstructions } />
            <RecipeVideo
              url={ data.meals[0].strYoutube }
              alt={ data.meals[0].strMeal }
            />
            <RecipeRecomendations data={ all } />
            <button data-testid="start-recipe-btn" type="button">
              Iniciar Receita
            </button>
          </>
        )
      }
    </div>
  );
}
