import React from 'react';
// import PropTypes from 'prop-types';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';

// const RecipeFavorite = ({ path }) => (
const RecipeFavorite = () => (
  <button data-testid="favorite-btn" type="button">
    <img src={ whiteHeartIcon } alt="favorite" />
  </button>
);

// RecipeFavorite.propTypes = {
//   path: PropTypes.string.isRequired,
// };

export default RecipeFavorite;
