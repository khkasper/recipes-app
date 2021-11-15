import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RecipeShare from './RecipeShare';

const RecipeDoneCard = ({ recipes }) => {
  const stringToArray = (str) => {
    if ((str !== 'null') && (str !== null)) {
      const emptyString = '';
      const myString = `${str}${emptyString}`;
      let allTags = myString.split(',');
      allTags = allTags.slice(0, 2);
      return allTags;
    }
    return null;
  };

  return (
    <div>
      {
        recipes && (
          recipes.map((r, i) => (
            <div
              key={ i }
              className="recipes-done-card"
            >
              <Link to={ `/${r.type}s/${r.id}` }>
                <img
                  data-testid={ `${i}-horizontal-image` }
                  src={ r.image }
                  alt={ r.name }
                  className="done-recipe-img"
                />
              </Link>
              <Link to={ `/${r.type}s/${r.id}` }>
                <span
                  data-testid={ `${i}-horizontal-name` }
                  className="food-card-name"
                >
                  { r.name }
                </span>
              </Link>
              <p data-testid={ `${i}-horizontal-top-text` } className="recipe-area-cat">
                { r.area.length > 0 ? `${r.area}` : ''}
                { r.alcoholicOrNot.length > 0 ? ` - ${r.alcoholicOrNot} - ` : ' - '}
                { r.category }
              </p>
              <p data-testid={ `${i}-horizontal-done-date` }>{ r.doneDate }</p>
              {
                stringToArray(r.tags) === null ? ''
                  : (stringToArray(r.tags)).map((tag) => (
                    <span
                      key={ tag }
                      data-testid={ `${i}-${tag}-horizontal-tag` }
                      className="recipe-done-card-tag"
                    >
                      { tag }
                    </span>
                  ))
              }
              <RecipeShare
                cat={
                  r.alcoholicOrNot.length > 0 ? 'bebidas' : 'comidas'
                }
                id={ r.id }
                i={ i }
              />
            </div>
          ))
        )
      }
    </div>
  );
};

RecipeDoneCard.propTypes = { recipes: PropTypes.shape([]).isRequired };

export default RecipeDoneCard;
