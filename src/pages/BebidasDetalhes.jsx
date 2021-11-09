import React, { useEffect } from 'react';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import { ID_DRINK, API_FOOD_ALL } from '../services/NoMagicStuff';
import FetchRecipe from '../hooks/FetchRecipe';
import FetchAPI from '../hooks/FetchAPI';
import Ingredients from '../components/Ingredients';
import RecipePhoto from '../components/RecipePhoto';
import RecipeInstructions from '../components/RecipeInstructions';
import RecipeRecomendations from '../components/RecipeRecomendations';

export default function BebidasDetalhes() {
  const { data, request } = FetchRecipe();
  const { all, requestAPI } = FetchAPI();
  const currentId = window.location.pathname.split('/')[2];
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
        data !== null && (
          <>
            <p data-testid="recipe-title">{ data.drinks[0].strDrink }</p>
            <RecipePhoto
              src={ data.drinks[0].strDrinkThumb }
              alt={ data.drinks[0].strDrink }
            />
            <button data-testid="share-btn" type="button">
              <img src={ shareIcon } alt="share" />
            </button>
            <button data-testid="favorite-btn" type="button">
              <img src={ whiteHeartIcon } alt="favorite" />
            </button>
            <div data-testid="recipe-category">
              { `${data.drinks[0].strCategory} - ${data.drinks[0].strAlcoholic}` }
            </div>
            <Ingredients data={ data } />
            <RecipeInstructions instructions={ data.drinks[0].strInstructions } />
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
