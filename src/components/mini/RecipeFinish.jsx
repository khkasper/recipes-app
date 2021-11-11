import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import {
  DONE_RECIPE,
} from '../../services/NoMagicStuff';

const RecipeFinish = ({ data }) => {
  // const handleClick = () => {
  //   if (!localStorage.getItem('inProgressRecipes')) {
  //     if (localStItem === 'comidas') {
  //       localStorage.setItem(
  //         'inProgressRecipes',
  //         JSON.stringify({ cocktails: {}, meals: { [id]: [] } }),
  //       );
  //     } else {
  //       localStorage.setItem(
  //         'inProgressRecipes',
  //         JSON.stringify({ cocktails: { [id]: [] }, meals: {} }),
  //       );
  //     }
  //   } else {
  //     const localKey = JSON.parse(localStorage.getItem('inProgressRecipes'));
  //     localStorage.setItem(
  //       'inProgressRecipes',
  //       JSON.stringify({
  //         ...localKey,
  //         [localStItem]: { ...localKey[localStItem], [id]: [] },
  //       }),
  //     );
  //   }
  // };

  const doneRec = DONE_RECIPE({ data });
  const handleClick = () => {
    const localKey = [];
    if (localStorage.getItem('doneRecipes') !== null) {
      const localRec = (localStorage.getItem('doneRecipes').toString());
      console.log(doneRec);
      console.log(localRec);
      localKey.push(localRec);
      localKey.push(doneRec);
      localStorage.setItem('doneRecipes', ...localKey);
    } else {
      localStorage.setItem('doneRecipes', JSON.stringify(doneRec));
    }
  };
  return (
    // <Link to="/receitas-feitas">
    <button
      data-testid="finish-recipe-btn"
      type="button"
      disabled={ false }
      onClick={ handleClick }
    >
      Finalizar
    </button>
    // </Link>
  );
};

RecipeFinish.propTypes = {
  data: PropTypes.string.isRequired,
};

export default RecipeFinish;
