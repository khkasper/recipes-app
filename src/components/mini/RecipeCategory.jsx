import React from 'react';
import PropTypes from 'prop-types';

const RecipeCategory = ({ cat }) => (
  <div
    data-testid="recipe-category"
    className="recipe-category"
  >
    { cat }
  </div>
);

RecipeCategory.propTypes = {
  cat: PropTypes.string.isRequired,
};

export default RecipeCategory;
