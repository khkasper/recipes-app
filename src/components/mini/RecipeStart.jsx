import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RecipeStart = ({ path }) => (
  <Link to={ path }>
    <button
      data-testid="start-recipe-btn"
      type="button"
      className="start-recipe-btn"
    >
      Iniciar Receita
    </button>
  </Link>
);

RecipeStart.propTypes = {
  path: PropTypes.string.isRequired,
};

export default RecipeStart;
