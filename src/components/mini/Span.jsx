import React from 'react';
import PropTypes from 'prop-types';

const S = ({ k, t, i }) => (
  <span
    key={ k }
    data-testid={ t }
  >
    { i }
  </span>
);

S.propTypes = {
  k: PropTypes.string.isRequired,
  t: PropTypes.string.isRequired,
  i: PropTypes.string.isRequired,
};

export default S;
