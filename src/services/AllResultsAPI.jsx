import {
  API_FOOD_ALL, API_DRINK_ALL, TWELVE, INGR_FILTER_MEALS, INGR_FILTER_DRINKS,
} from './NoMagicStuff';

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

const renameIngredient = (ing) => ing.replace(' ', '_');

export const fetchMealsFilteredbYIngredient = async (ingr) => {
  const strIngr = renameIngredient(ingr);
  const response = await fetch(`${INGR_FILTER_MEALS}${strIngr}`);
  const result = await response.json();
  return result.meals.slice(0, TWELVE);
};

export const fetchDrinksFilteredbYIngredient = async (ingr) => {
  const strIngr = renameIngredient(ingr);
  console.log(strIngr);
  console.log((`${INGR_FILTER_DRINKS}${strIngr}`));
  const response = await fetch(`${INGR_FILTER_DRINKS}${strIngr}`);
  const result = await response.json();
  console.log(result.drinks);
  return result.drinks.slice(0, TWELVE);
};
