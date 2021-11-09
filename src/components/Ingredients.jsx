import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Ingredients = ({ data }) => {
  const [ingredientList, setIngredientList] = useState([]);
  const currentPage = window.location.pathname.split('/')[1];
  let page;
  if (currentPage === 'comidas') { page = 'meals'; } else { page = 'drinks'; }
  console.log(page);

  useEffect(() => {
    if (data !== null) {
      const arrayIngredients = [];
      const arrayMeasures = [];
      Object.keys(data[page][0]).forEach((key) => {
        if (key.includes('strIngredient')
          && data[page][0][key] !== null
          && data[page][0][key] !== '') {
          arrayIngredients.push(data[page][0][key]);
        }
        if (key.includes('strMeasure')
          && data[page][0][key] !== null
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
            <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
              { ingredient }
            </li>
          ))
        }
      </ul>
    </div>
  );
};

Ingredients.propTypes = {
  data: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default Ingredients;
