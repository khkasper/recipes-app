import React, { useEffect } from 'react';
import { ID_DRINK, API_FOOD_ALL } from '../services/NoMagicStuff';
import FetchRecipe from '../hooks/FetchRecipe';
import FetchAPI from '../hooks/FetchAPI';
import Ingredients from '../components/Ingredients';
import RecipePhoto from '../components/mini/RecipePhoto';
import RecipeInstructions from '../components/mini/RecipeInstructions';
import RecipeRecomendations from '../components/mini/RecipeRecomendations';
import RecipeStart from '../components/mini/RecipeStart';
import RecipeShare from '../components/mini/RecipeShare';
import RecipeFavorite from '../components/mini/RecipeFavorite';

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
            <RecipeShare />
            <RecipeFavorite />
            <div data-testid="recipe-category">
              { `${data.drinks[0].strCategory} - ${data.drinks[0].strAlcoholic}` }
            </div>
            <Ingredients data={ data } progress="no" />
            <RecipeInstructions instructions={ data.drinks[0].strInstructions } />
            <RecipeRecomendations data={ all } />
            <RecipeStart path={ `/bebidas/${data.drinks[0].idDrink}/in-progress` } />
          </>
        )
      }
    </div>
  );
}
