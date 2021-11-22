import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ContextPrimary from '../../context/ContextPrimary';
import {
  DONE_RECIPE,
} from '../../services/NoMagicStuff';

const RecipeFinish = ({ data }) => {
  const doneRec = DONE_RECIPE({ data });
  const { disableBtn } = useContext(ContextPrimary);
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
    <div className="finish-div">
      <Link to="/receitas-feitas">
        <button
          data-testid="finish-recipe-btn"
          type="button"
          disabled={ disableBtn }
          onClick={ handleClick }
          className="finish-button"
        >
          Finalizar
        </button>
      </Link>
    </div>
  );
};

RecipeFinish.propTypes = {
  data: PropTypes.string.isRequired,
};

export default RecipeFinish;
