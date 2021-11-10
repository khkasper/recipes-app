import React from 'react';
import PropTypes from 'prop-types';

export default function Checkbox({ id, ingr, checked, checkFunction }) {
  return (
    <label
      htmlFor={ id }
    >
      <input
        type="checkbox"
        id={ id }
        name={ id }
        className="checkbox-ingredient"
        onChange={ checkFunction }
        checked={ checked }
      />
      { ingr }
    </label>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  ingr: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  checkFunction: PropTypes.func.isRequired,
};
