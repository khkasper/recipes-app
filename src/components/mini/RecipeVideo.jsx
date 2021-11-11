import React from 'react';
import PropTypes from 'prop-types';

const RecipeVideo = ({ url, alt }) => {
  const embed = () => {
    const info = url.split('v=');
    const link = `http://www.youtube.com/embed/${info[1]}`;
    return link;
  };

  return (
    <iframe
      data-testid="video"
      width="420"
      height="180"
      src={ embed() }
      title={ alt }
      frameBorder="0"
    />
  );
};

RecipeVideo.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default RecipeVideo;
