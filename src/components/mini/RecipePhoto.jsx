import React from 'react';
import PropTypes from 'prop-types';

const RecipePhoto = ({ src, alt }) => (
  <div>
    <img
      data-testid="recipe-photo"
      src={ src }
      alt={ alt }
      className="recipe-detail-photo"
    />
  </div>
);

RecipePhoto.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default RecipePhoto;
