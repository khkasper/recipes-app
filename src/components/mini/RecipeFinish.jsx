import React from 'react';
import { Link } from 'react-router-dom';

const RecipeFinish = () => (
  <Link to="/receitas-feitas">
    <button
      data-testid="finish-recipe-btn"
      type="button"
      disabled={ false }
    >
      Finalizar
    </button>
  </Link>
);

export default RecipeFinish;
