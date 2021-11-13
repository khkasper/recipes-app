export default function getDoneRecipes(
  setDoneRecipes, setDoneFoodRecipes, setDoneDrinkRecipes, setDisableFilters,
) {
  const done = JSON.parse(localStorage.getItem('doneRecipes'));
  if (done) {
    const doneFoodRecipes = done.filter((doneRecipe) => doneRecipe.type === 'comida');
    const doneDrinkRecipes = done.filter((doneRecipe) => doneRecipe.type === 'bebida');
    if (doneFoodRecipes) setDoneFoodRecipes(doneFoodRecipes);
    if (doneDrinkRecipes) setDoneDrinkRecipes(doneDrinkRecipes);
    setDoneRecipes(done);
    setDisableFilters(false);
  } else {
    setDisableFilters(false);
  }
}
