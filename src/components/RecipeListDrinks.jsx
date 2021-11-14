import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecipeListDrinks = ({ list }) => (
  <div>
    {
      list.map((item, index) => (
        <div
          data-testid={ `${index}-recipe-card` }
          key={ index }
        >
          <Link
            to={ `/bebidas/${item.idDrink}` }
          >
            <img
              data-testid={ `${index}-card-img` }
              alt={ item.strDrink }
              src={ item.strDrinkThumb }
            />
            <span data-testid={ `${index}-card-name` }>
              { item.strDrink }
            </span>
          </Link>
        </div>
      ))
    }
  </div>
);

RecipeListDrinks.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RecipeListDrinks;
