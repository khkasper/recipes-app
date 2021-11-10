import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RecipeStart = ({ path, rec }) => (
  <Link to={ path }>
    <button
      data-testid="start-recipe-btn"
      type="button"
      className="start-recipe-btn"
      onClick={ () => localStorage.setItem('inProgressRecipes', rec) }
    >
      Iniciar Receita
    </button>
  </Link>
);

RecipeStart.propTypes = {
  path: PropTypes.string.isRequired,
  rec: PropTypes.string.isRequired,
};

export default RecipeStart;
