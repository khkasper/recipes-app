import { useContext, useState } from 'react';
import ContextPrimary from '../context/ContextPrimary';
import {
  API_FOOD,
  API_DRINK,
  TWELVE,
  ALT_2,
} from './NoMagicStuff';

let response;
let result;

export default async function HandleAPI(category) {
  const PRIMARY = useContext(ContextPrimary);
  const [isLoading, setIsLoading] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  console.log(isLoading && data && error);

  try {
    setError(null);
    setIsLoading(true);
    if (PRIMARY.currentPage === 'bebidas') {
      response = await fetch(`${API_DRINK}filter.php?c=${category}`);
      result = await response.json();
      PRIMARY.setDrinks(result.drinks.slice(0, TWELVE));
    } else {
      response = await fetch(`${API_FOOD}filter.php?c=${category}`);
      result = await response.json();
      PRIMARY.setMeals(result.meals.slice(0, TWELVE));
      setData(result);
      PRIMARY.setFetchResponse(result);
      setIsLoading(false);
    }
  } catch (erro) {
    result = null;
    global.alert(ALT_2);
    setError(erro.message);
  }
}
