import React from 'react';
import PropTypes from 'prop-types';

// const RecipeFavorite = ({ path }) => (
const RecipeTitle = ({ page }) => (
  <h2 data-testid="recipe-title">
    { page === 'comidas' ? mealDetails.strMeal : drinkDetails.strDrink }
  </h2>
);

RecipeTitle.propTypes = {
  path: PropTypes.string.isRequired,
};

export default RecipeTitle;
