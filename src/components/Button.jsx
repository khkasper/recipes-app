import React from 'react';
import PropTypes from 'prop-types';

export default function Button({
  id,
  type,
  classname,
  disabled,
  onclick,
  inner,
}) {
  return (
    <button
      type={ type === 'button' ? 'button' : 'submit' }
      id={ id }
      data-testid={ id }
      className={ classname }
      disabled={ disabled }
      onClick={ onclick }
    >
      { inner }
    </button>
  );
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  inner: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onclick: PropTypes.func.isRequired,
};
