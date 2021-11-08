import { API_FOOD_ALL, API_DRINK_ALL, TWELVE } from './NoMagicStuff';

export const fetchDrinksAPI = async () => {
  const response = await fetch(API_DRINK_ALL);
  const result = await response.json();
  return result.drinks.slice(0, TWELVE);
};

export const fetchMealsAPI = async () => {
  const response = await fetch(API_FOOD_ALL);
  const result = await response.json();
  return result.meals.slice(0, TWELVE);
};
