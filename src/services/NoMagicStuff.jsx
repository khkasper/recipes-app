import PropTypes from 'prop-types';

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
export const FOOD_RANDOM = 'https://www.themealdb.com/api/json/v1/1/random.php';
export const DRINK_RANDOM = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
export const LIST_ALL_DRINKS_INGREDIENTS = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';

export function CURRENT_PAGE() {
  return window.location.pathname.split('/')[1];
}

export function CURRENT_ID() {
  return window.location.pathname.split('/')[2];
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

// CONSTANTES PARA LOCAL STORAGE
export function LS_IN_PROGRESS_RECIPES() {
  const current = window.location.pathname.split('/')[1];
  if (current === 'comidas') {
    return 'meals';
  }
  return 'cocktails';
}

export function RECIPE({ data }) {
  const origin = window.location.pathname.split('/')[1];
  const id = window.location.pathname.split('/')[2];
  const singular = origin === 'comidas' ? 'comida' : 'bebida';

  const recipeLS = {
    id,
    type: singular,
    area: singular === 'comida' ? data.strArea : '',
    category: data.strCategory,
    alcoholicOrNot: singular === 'bebida' ? data.strAlcoholic : '',
    name: singular === 'comida' ? data.strMeal : data.strDrink,
    image: singular === 'comida' ? data.strMealThumb : data.strDrinkThumb,
  };
  return (recipeLS);
}
RECIPE.propTypes = {
  data: PropTypes.string.isRequired,
};

export function DONE_RECIPE({ data }) {
  const origin = window.location.pathname.split('/')[1];
  const id = window.location.pathname.split('/')[2];
  const singular = origin === 'comidas' ? 'comida' : 'bebida';
  const current = new Date();
  const hoje = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  const recipeLS = {
    id,
    type: singular,
    area: singular === 'comida' ? data.strArea : '',
    category: data.strCategory,
    alcoholicOrNot: singular === 'bebida' ? data.strAlcoholic : '',
    name: singular === 'comida' ? data.strMeal : data.strDrink,
    image: singular === 'comida' ? data.strMealThumb : data.strDrinkThumb,
    doneDate: hoje,
    tags: data.strTags,
  };
  return (recipeLS);
}
DONE_RECIPE.propTypes = {
  data: PropTypes.string.isRequired,
};

// localStorage
// O uso de localStorage é necessário para que as informações não se percam caso a pessoa atualize a página. O correto é usar os valores para iniciar sua store ou seu context.

// No localStorage do navegador:

// a chave mealsToken deve conter a seguinte estrutura:
// 1
// a chave cocktailsToken deve conter a seguinte estrutura:
// 1
// a chave user deve conter a seguinte estrutura:
// {
//     email: email-da-pessoa
// }
// a chave doneRecipes deve conter a seguinte estrutura:
// [{
//     id: id-da-receita,
//     type: comida-ou-bebida,
//     area: area-da-receita-ou-texto-vazio,
//     category: categoria-da-receita-ou-texto-vazio,
//     alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
//     name: nome-da-receita,
//     image: imagem-da-receita,
//     doneDate: quando-a-receita-foi-concluida,
//     tags: array-de-tags-da-receita-ou-array-vazio
// }]
// a chave favoriteRecipes deve conter a seguinte estrutura:
// [{
//     id: id-da-receita,
//     type: comida-ou-bebida,
//     area: area-da-receita-ou-texto-vazio,
//     category: categoria-da-receita-ou-texto-vazio,
//     alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
//     name: nome-da-receita,
//     image: imagem-da-receita
// }]
// a chave inProgressRecipes deve conter a seguinte estrutura:
// {
//     cocktails: {
//         id-da-bebida: [lista-de-ingredientes-utilizados],
//         ...
//     },
//     meals: {
//         id-da-comida: [lista-de-ingredientes-utilizados],
//         ...
//     }
// }
