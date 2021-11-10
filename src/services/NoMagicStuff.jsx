export const MAX_SEARCH_LENGTH_FL = 1;
export const FIRST_LETTER = 'first-letter';
export const INGREDIENTS = 'ingredients';
export const NAME = 'name';
export const API_FOOD = 'https://www.themealdb.com/api/json/v1/1/';
export const API_DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/';
export const API_DRINK_ALL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
export const API_FOOD_ALL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
export const TWELVE = 12;
export const FIVE = 5;
export const SIX = 6;
export const ALT_1 = 'Sua busca deve conter somente 1 (um) caracter';
export const ALT_2 = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';
export const CAT_FOOD = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
export const CAT_DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
export const ID_DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
export const ID_FOOD = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

export function CURRENT_PAGE() {
  return window.location.pathname.split('/')[1];
}

export function drinksMeals() {
  const current = window.location.pathname.split('/')[1];
  if (current === 'comidas') {
    return 'meals';
  }
  return 'drinks';
}

export function DTI_INGR(prog) {
  if (prog === 'pr') {
    return 'ingredient-step';
  }
  return 'ingredient-name-and-measure';
}
