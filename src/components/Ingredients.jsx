import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Ingredients = ({ data, progress }) => {
  const [ingredientList, setIngredientList] = useState([]);
  const [ingredientChecked, setIngredientChecked] = useState([]);
  const currentPage = window.location.pathname.split('/')[1];
  let page;
  let prPage;
  if (currentPage === 'comidas') { page = 'meals'; } else { page = 'drinks'; }
  if (progress === 'pr') {
    prPage = 'ingredient-step';
  } else {
    prPage = 'ingredient-name-and-measure';
  }

  // const handleChange = (item) => {

  // };

  useEffect(() => {
    if (data !== null) {
      const arrayIngredients = [];
      const arrayMeasures = [];
      Object.keys(data[page][0]).forEach((key) => {
        if (key.includes('strIngredient')
          && data[page][0][key] !== null
          && data[page][0][key] !== ''
          && data[page][0][key] !== ' ') {
          arrayIngredients.push(data[page][0][key]);
        }
        if (key.includes('strMeasure')
          && data[page][0][key] !== null
          && data[page][0][key] !== ''
          && data[page][0][key] !== ' ') {
          arrayMeasures.push(data[page][0][key]);
        }
      });
      const list = arrayMeasures.map((ms, i) => `${ms} - ${arrayIngredients[i]}`);
      setIngredientList(list);
    }
  }, [data, currentPage, page]);

  return (
    <div>
      <ul>
        {
          ingredientList.map((ingredient, index) => (
            <li
              key={ index }
              data-testid={ `${index}-${prPage}` }
            >
              { ingredient }
              {
                (progress === 'pr') && (
                  <label htmlFor={ `ingredient-${index}` }>
                    <input
                      type="checkbox"
                      id={ `ingredient-${index}` }
                      name={ `ingredient-${index}` }
                      className="checkbox-ingredient"
                    />
                  </label>
                )
              }
            </li>
          ))
        }
      </ul>
    </div>
  );
};

Ingredients.propTypes = {
  data: PropTypes.objectOf(PropTypes.array).isRequired,
  progress: PropTypes.string.isRequired,
};

export default Ingredients;
