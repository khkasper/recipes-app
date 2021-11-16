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
import RecipeTitle from '../components/mini/RecipeTitle';
import RecipeCategory from '../components/mini/RecipeCategory';

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
            <RecipeTitle title={ mealDetails.strMeal } />
            <RecipePhoto
              src={ mealDetails.strMealThumb }
              alt={ mealDetails.strMealThumb }
            />
            <RecipeShare cat="comidas" id={ mealDetails.idMeal } i="0" />
            <RecipeFavorite data={ data.meals[0] } i={ mealDetails.idMeal } />
            <RecipeCategory cat={ mealDetails.strCategory } />
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
