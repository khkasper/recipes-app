import React from 'react';
import PropTypes from 'prop-types';

const RecipeTitle = ({ title }) => (
  <h2 data-testid="recipe-title" className="recipe-title">
    { title }
  </h2>
);

RecipeTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default RecipeTitle;
