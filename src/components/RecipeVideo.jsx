import React from 'react';
import PropTypes from 'prop-types';

const RecipeVideo = ({ url, alt }) => (
  <div data-testid="video">
    <iframe width="420" height="315" src={ url } title={ alt } />
  </div>
);

RecipeVideo.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default RecipeVideo;
