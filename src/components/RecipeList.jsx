import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecipeList = ({ list, page }) => (
  <div>
    {
      list.map((item, index) => (
        <div
          data-testid={ `${index}-recipe-card` }
          key={ index }
        >
          <Link
            to={
              page === 'comidas' ? `/comidas/${item.idMeal}` : `/bebidas/${item.idDrink}`
            }
          >
            <img
              data-testid={ `${index}-card-img` }
              alt={ page === 'comidas' ? item.strMeal : item.strDrink }
              src={ page === 'comidas' ? item.strMealThumb : item.strDrinkThumb }
            />
            <span data-testid={ `${index}-card-name` }>
              { page === 'comidas' ? item.strMeal : item.strDrink }
            </span>
          </Link>
        </div>
      ))
    }
  </div>
);

RecipeList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  page: PropTypes.string.isRequired,
};

export default RecipeList;
