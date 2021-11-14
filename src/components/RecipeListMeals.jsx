import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecipeListMeals = ({ list }) => (
  <div>
    {
      list.map((item, index) => (
        <div
          data-testid={ `${index}-recipe-card` }
          key={ index }
        >
          <Link
            to={ `/comidas/${item.idMeal}` }
          >
            <img
              data-testid={ `${index}-card-img` }
              alt={ item.strMeal }
              src={ item.strMealThumb }
            />
            <span data-testid={ `${index}-card-name` }>
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
