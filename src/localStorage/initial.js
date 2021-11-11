export function setLCFavoritesRecipes() {
  if (localStorage.getItem('favoriteRecipes') === null) {
    const FavoriteRecipes = [];
    localStorage.setItem('favoriteRecipes', JSON.stringify(FavoriteRecipes));
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
