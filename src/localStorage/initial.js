export function setLCFavoritesRecipes() {
  if (localStorage.getItem('favoriteRecipes') === null) {
    const FavoriteRecipes = [];
    localStorage.setItem('favoriteRecipes', JSON.stringify(FavoriteRecipes));
  }
}

export function setLCFavoritesRecipesFiltered() {
  if (localStorage.getItem('favoriteRecipes') === null) {
    const FilteredFavoriteRecipes = [];
    localStorage.setItem('favFilteredRecipes', JSON.stringify(FilteredFavoriteRecipes));
  }
}

export function setLCDoneRecipesFiltered() {
  if (localStorage.getItem('favoriteRecipes') === null) {
    const FilteredDoneRecipes = [];
    localStorage.setItem('doneFilteredRecipes', JSON.stringify(FilteredDoneRecipes));
  }
}

export function setLCUser(email) {
  const user = { email };
  if (localStorage.getItem('user') === null) {
    localStorage.setItem('user', JSON.stringify(user));
  }
}

export function setLCMealsToken() {
  if (localStorage.getItem('mealsToken') === null) {
    localStorage.setItem('mealsToken', '1');
  }
}

export function setLCCocktailsToken() {
  if (localStorage.getItem('cocktailsToken') === null) {
    localStorage.setItem('cocktailsToken', '1');
  }
}

export function setLCFilter() {
  if (localStorage.getItem('filter') === null) {
    localStorage.setItem('filter', 'All');
  }
}
