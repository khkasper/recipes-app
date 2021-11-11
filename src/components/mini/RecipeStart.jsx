import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  CURRENT_PAGE,
  CURRENT_ID,
  LS_IN_PROGRESS_RECIPES,
} from '../../services/NoMagicStuff';

const RecipeStart = () => {
  const origin = CURRENT_PAGE();
  const id = CURRENT_ID();
  const localStItem = LS_IN_PROGRESS_RECIPES();
  const [buttonInnerText, setButtonInnerText] = useState('Iniciar Receita');

  useEffect(() => {
    if (localStorage.inProgressRecipes) {
      const localKey = JSON.parse(localStorage.getItem('inProgressRecipes'));
      if (Object.keys(localKey[localStItem]).includes(id)) {
        setButtonInnerText('Continuar Receita');
      }
    }
  }, [id, localStItem]);

  const handleClick = () => {
    if (!localStorage.getItem('inProgressRecipes')) {
      if (localStItem === 'comidas') {
        localStorage.setItem(
          'inProgressRecipes',
          JSON.stringify({ cocktails: {}, meals: { [id]: [] } }),
        );
      } else {
        localStorage.setItem(
          'inProgressRecipes',
          JSON.stringify({ cocktails: { [id]: [] }, meals: {} }),
        );
      }
    } else {
      const localKey = JSON.parse(localStorage.getItem('inProgressRecipes'));
      localStorage.setItem(
        'inProgressRecipes',
        JSON.stringify({
          ...localKey,
          [localStItem]: { ...localKey[localStItem], [id]: [] },
        }),
      );
    }
  };

  return (
    <Link to={ `/${origin}/${id}/in-progress` }>
      <button
        data-testid="start-recipe-btn"
        type="button"
        className="start-recipe-btn"
        onClick={ handleClick }
      >
        { buttonInnerText }
      </button>
    </Link>
  );
};

export default RecipeStart;
