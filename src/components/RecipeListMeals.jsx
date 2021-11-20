import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecipeListMeals = ({ list }) => (
  <div className="recipe-list">
    {
      list.map((item1, index) => (
        <div
          data-testid={ `${index}-recipe-card` }
          key={ index }
          className="food-card-list"
        >
          <Link
            to={ `/comidas/${item1.idMeal}` }
          >
            <img
              data-testid={ `${index}-card-img` }
              alt={ item1.strMeal }
              src={ item1.strMealThumb }
              className="food-card-img"
            />
            <span
              data-testid={ `${index}-card-name` }
              className="food-card-name"
            >
              { item1.strMeal }
            </span>
          </Link>
        </div>
      ))
    }
  </div>
);

RecipeListMeals.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RecipeListMeals;
