import React, { useState, useContext, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { CURRENT_PAGE, CURRENT_ID } from '../services/NoMagicStuff';
import ContextPrimary from '../context/ContextPrimary';

export default function Checkbox({ index, ingredient }) {
  const { setDisableBtn } = useContext(ContextPrimary);
  const [ingredientChecked, setIngredientChecked] = useState([]);
  const [inLocalStorage, setInLocalStorage] = useState([]);

  const ID = CURRENT_ID();
  const typeKey = CURRENT_PAGE() === 'bebidas' ? 'cocktails' : 'meals';

  const checkStorage = useCallback((storage) => {
    if (storage[typeKey][ID]) {
      setInLocalStorage(storage[typeKey][ID]);
    }
  }, [typeKey, ID]);

  useEffect(() => {
    const storage = {
      cocktails: {},
      meals: {},
    };

    if (localStorage.getItem('inProgressRecipes')) {
      checkStorage(JSON.parse(localStorage.getItem('inProgressRecipes')));
    }

    if (!localStorage.getItem('inProgressRecipes')) {
      localStorage.setItem('inProgressRecipes', JSON.stringify(storage));
    }
  }, [typeKey, ID, checkStorage]);

  const handleChange = (ing) => {
    const updateIngrs = ingredientChecked.map((ingrs, i) => (ing === i ? !ingrs : ingrs));
    setIngredientChecked(updateIngrs);

    const checkBox = document.querySelectorAll('.checkbox-ingredient');
    const checkBoxChecked = document.querySelectorAll('.checkbox-ingredient:checked');

    if (checkBox.length === checkBoxChecked.length) {
      setDisableBtn(false);
    }
  };

  const handleClick = () => {
    const checkIng = Array
      .from(document.querySelectorAll('input[type="checkbox"]'))
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    const prevStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const storage = {
      ...prevStorage,
      [typeKey]: {
        ...prevStorage[typeKey],
        [ID]: checkIng,
      },
    };

    localStorage.setItem('inProgressRecipes', JSON.stringify({ ...storage }));
  };

  return (
    <label
      htmlFor={ `ingredient-${index}` }
      className="checkbox-ingredient-label"
    >
      <input
        type="checkbox"
        id={ `ingredient-${index}` }
        name={ `ingredient-${index}` }
        className="checkbox-ingredient"
        onChange={ () => handleChange(index) }
        onClick={ handleClick }
        value={ ingredient }
        defaultChecked={ inLocalStorage.includes(ingredient) }
      />
    </label>
  );
}

Checkbox.propTypes = {
  index: PropTypes.number.isRequired,
  ingredient: PropTypes.string.isRequired,
};

// https://stackoverflow.com/questions/590018/getting-all-selected-checkboxes-in-an-array
