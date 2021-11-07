import React from 'react';
import PropTypes from 'prop-types';

export default function Input(
  { id,
    labelText,
    type,
    name,
    classname,
    value,
    placeholder,
    onchange },
) {
  return (
    <label htmlFor={ id } className={ classname }>
      <input
        type={ type }
        id={ id }
        name={ name }
        data-testid={ id }
        placeholder={ placeholder }
        value={ value }
        onChange={ onchange }
      />
      { labelText }
    </label>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
};
