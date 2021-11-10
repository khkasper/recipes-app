import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextPrimary from '../../context/ContextPrimary';
import { SIX } from '../../services/NoMagicStuff';

const RecipeRecomendations = ({ data }) => {
  const PRIMARY = useContext(ContextPrimary);
  useEffect(() => {
    if (data !== null) {
      const currentPage = window.location.pathname.split('/')[1];
      if (currentPage === 'comidas') {
        PRIMARY.setRecomendation('drinks');
      } else {
        PRIMARY.setRecomendation('meals');
      }
    }
  }, [data, PRIMARY]);

  const rec = PRIMARY.recomendation;

  return (
    <div>
      {
        (PRIMARY[rec] !== null) && (PRIMARY.recomendation !== null)
          && ((PRIMARY[rec]).slice(0, SIX).map((item, index) => (
            <div
              key={ index }
              data-testid={ `${index}-recomendation-card` }
            >
              <img
                src={
                  PRIMARY.recomendation === 'drinks' ? item.strDrinkThumb
                    : item.strMealThumb
                }
                alt={
                  PRIMARY.recomendation === 'drinks' ? item.strDrink : item.strMeal
                }
              />
              <h3 data-testid={ `${index}-recomendation-tile` }>
                { PRIMARY.recomendation === 'drinks' ? item.strDrink : item.strMeal }
              </h3>
            </div>
          ))
          )
      }
    </div>
  );
};

RecipeRecomendations.propTypes = {
  data: PropTypes.string.isRequired,
};

export default RecipeRecomendations;
