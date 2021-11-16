import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecipeListMeals = ({ list }) => (
  <div className="recipe-list">
    {
      list.map((item, index) => (
        <div
          data-testid={ `${index}-recipe-card` }
          key={ index }
          className="food-card-list"
        >
          <Link
            to={ `/comidas/${item.idMeal}` }
          >
            <img
              data-testid={ `${index}-card-img` }
              alt={ item.strMeal }
              src={ item.strMealThumb }
              className="food-card-img"
            />
            <span
              data-testid={ `${index}-card-name` }
              className="food-card-name"
            >
              { item.strMeal }
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
