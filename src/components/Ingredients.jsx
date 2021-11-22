import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CheckboxInput from './CheckboxInput';
import { DTI_INGR, drinksMeals } from '../services/NoMagicStuff';

const Ingredients = ({ data, progress }) => {
  const [ingredientList, setIngredientList] = useState([]);
  const page = drinksMeals();
  const testid = DTI_INGR(progress);

  useEffect(() => {
    if (data !== null) {
      const arrayIngredients = [];
      const arrayMeasures = [];
      Object.keys(data[page][0]).forEach((key) => {
        if ((key.includes('strIngredient') && data[page][0][key])
          && data[page][0][key] !== null
          && data[page][0][key] !== ''
          && data[page][0][key] !== ' '
        ) {
          arrayIngredients.push(data[page][0][key]);
        } else if ((key.includes('strMeasure') && data[page][0][key])
          && data[page][0][key] !== null
          && data[page][0][key] !== ''
          && data[page][0][key] !== ' '
        ) {
          arrayMeasures.push(data[page][0][key]);
        }
      });

      const list = arrayMeasures.map((ms, i) => `${ms} - ${arrayIngredients[i]}`);
      setIngredientList(list);
    }
  }, [data, page]);

  return (
    <div>
      <ul
        className={ progress === 'pr' ? 'ul-progress' : 'ul-details' }
      >
        {
          ingredientList.map((ingredient, index) => (
            <li
              key={ index }
              data-testid={ `${index}-${testid}` }
              className="ingredient-li"
            >
              {
                (progress === 'pr') && (
                  <CheckboxInput index={ index } ingredient={ ingredient } />
                )
              }
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
  progress: PropTypes.string.isRequired,
};

export default Ingredients;
