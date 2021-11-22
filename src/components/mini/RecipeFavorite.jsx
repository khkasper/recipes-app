import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import {
  CURRENT_ID,
  CURRENT_PAGE,
  RECIPE,
} from '../../services/NoMagicStuff';

const RecipeFavorite = ({ data, i }) => {
  const [favorite, setFavorite] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const id = CURRENT_ID();
  const currentPage = CURRENT_PAGE();
  let datatestid = 'favorite-btn';
  if (currentPage === 'receitas-favoritas') {
    datatestid = `${i}-horizontal-favorite-btn`;
  }
  const localKey = JSON.parse(localStorage.getItem('favoriteRecipes'));
  let favIcon = favorite ? blackHeartIcon : whiteHeartIcon;
  if (currentPage === 'receitas-favoritas') {
    favIcon = blackHeartIcon;
  }

  const handleClick = () => {
    const recipe = RECIPE({ data });
    if (!(JSON.parse(localStorage.getItem('favoriteRecipes')))) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([recipe]));
      setFavorite(true);
    }
    if (!(JSON.parse(localStorage.getItem('favoriteRecipes')))
      .find((rec) => rec.id === recipe.id)) {
      localStorage.setItem(
        'favoriteRecipes',
        JSON.stringify([...localKey, recipe]),
      );
      setFavorite(true);
    } else {
      console.log(typeof (JSON.parse(localStorage.getItem('favoriteRecipes'))));
      const newLocalKey = (JSON.parse(localStorage.getItem('favoriteRecipes')))
        .filter((rec) => rec.id !== recipe.id);
      localStorage.setItem('favoriteRecipes', JSON.stringify(newLocalKey));
      setFavorite(false);
    }
    setFavorites(JSON.parse(localStorage.getItem('favoriteRecipes')));
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('favoriteRecipes'))) {
      localKey.forEach((recipe) => {
        if (recipe.id === id) {
          setFavorite(true);
        }
      });
    }
  }, [favorites, localKey, id]);

  return (
    <button
      type="button"
      onClick={ () => handleClick() }
      className="favorite-button"
    >
      <img
        data-testid={ datatestid }
        src={ favIcon }
        alt="favorite"
      />
    </button>
  );
};

RecipeFavorite.propTypes = {
  data: PropTypes.shape([]).isRequired,
  i: PropTypes.string.isRequired,
};

export default RecipeFavorite;
