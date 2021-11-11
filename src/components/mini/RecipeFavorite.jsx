import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import {
  CURRENT_ID,
  RECIPE,
} from '../../services/NoMagicStuff';

// const RecipeFavorite = ({ path }) => (
const RecipeFavorite = ({ data }) => {
  const [favorite, setFavorite] = useState(false);
  const id = CURRENT_ID();

  const handleClick = () => {
    const recipe = RECIPE({ data });
    if (!localStorage.favoriteRecipes) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([recipe]));
      setFavorite(true);
    } else {
      const localKey = JSON.parse(localStorage.getItem('favoriteRecipes'));
      if (!favorite) {
        localStorage.setItem(
          'favoriteRecipes',
          JSON.stringify([...localKey, recipe]),
        );
        setFavorite(true);
      } else {
        const index = localKey.indexOf(recipe);
        localKey.splice(index, 1);
        localStorage.setItem('favoriteRecipes', JSON.stringify(localKey));
        setFavorite(false);
      }
    }
  };

  useEffect(() => {
    if (localStorage.favoriteRecipes) {
      const localKey = JSON.parse(localStorage.getItem('favoriteRecipes'));
      localKey.forEach((recipe) => {
        if (recipe.id === id) {
          setFavorite(true);
        }
      });
    }
  }, [id]);

  return (
    <button
      type="button"
      onClick={ () => handleClick() }
    >
      <img
        data-testid="favorite-btn"
        src={ favorite ? blackHeartIcon : whiteHeartIcon }
        alt="favorite"
      />
    </button>
  );
};

RecipeFavorite.propTypes = {
  data: PropTypes.string.isRequired,
};

export default RecipeFavorite;
