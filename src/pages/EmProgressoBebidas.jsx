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
import RecipeFinish from '../components/mini/RecipeFinish';
import RecipeTitle from '../components/mini/RecipeTitle';
import RecipeCategory from '../components/mini/RecipeCategory';

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
            <RecipeTitle title={ drinkDetails.strDrink } />
            <RecipePhoto
              src={ drinkDetails.strDrinkThumb }
              alt={ drinkDetails.strDrink }
            />
            <RecipeShare cat="bebidas" id={ drinkDetails.idDrink } i="0" />
            <RecipeFavorite data={ data.drinks[0] } i={ drinkDetails.idDrink } />
            <RecipeCategory
              cat={ `${drinkDetails.strCategory} - ${drinkDetails.strAlcoholic}` }
            />
            <Ingredients data={ data } progress="pr" />
            <RecipeInstructions instructions={ drinkDetails.strInstructions } />
            <RecipeRecomendations data={ all } />
            <RecipeFinish data={ data.drinks[0] } />
          </>
        )
      }
    </div>
  );
}
