import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  DONE_RECIPE,
} from '../../services/NoMagicStuff';

const RecipeFinish = ({ data }) => {
  const doneRec = DONE_RECIPE({ data });
  const handleClick = () => {
    let localKey = [];
    if (localStorage.getItem('doneRecipes') === null) {
      localKey.push(doneRec);
      localKey = JSON.stringify(localKey);
      localStorage.setItem('doneRecipes', (localKey));
    } else {
      const localRec = JSON.parse(localStorage.getItem('doneRecipes'));
      localKey = [...localRec];
      localKey.push((doneRec));
      localKey = JSON.stringify(localKey);
      localStorage.setItem('doneRecipes', (localKey));
    }
  };
  return (
    <Link to="/receitas-feitas">
      <button
        data-testid="finish-recipe-btn"
        type="button"
        disabled={ false }
        onClick={ handleClick }
      >
        Finalizar
      </button>
    </Link>
  );
};

RecipeFinish.propTypes = {
  data: PropTypes.string.isRequired,
};

export default RecipeFinish;
