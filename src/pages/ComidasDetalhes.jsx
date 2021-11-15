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
import RecipeCategory from '../components/mini/RecipeCategory';
import RecipeTitle from '../components/mini/RecipeTitle';

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
    <div className="recipe-detail">
      {
        (data !== null) && ((data.meals).length) && (
          <>
            <RecipeTitle title={ data.meals[0].strMeal } />
            <RecipePhoto
              src={ data.meals[0].strMealThumb }
              alt={ data.meals[0].strMeal }
            />
            <RecipeShare
              cat="comidas"
              id={ data.meals[0].idMeal }
              i="0"
            />
            <RecipeFavorite data={ data.meals[0] } i={ data.meals[0].strMeal } />
            <RecipeCategory cat={ data.meals[0].strCategory } />
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
