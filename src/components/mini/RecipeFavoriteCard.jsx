import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RecipeShare from './RecipeShare';
import RecipeFavorite from './RecipeFavorite';

const RecipeFavoriteCard = ({ recipes }) => {
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
              className="favorite-card"
            >
              <Link to={ `/${r.type}s/${r.id}` }>
                <img
                  data-testid={ `${i}-horizontal-image` }
                  src={ r.image }
                  alt={ r.name }
                  className="favorite-recipe-img"
                />
                <p data-testid={ `${i}-horizontal-top-text` }>
                  { r.area.length > 0 ? `${r.area} - ` : ''}
                  { r.alcoholicOrNot.length > 0 ? `${r.alcoholicOrNot} - ` : ''}
                  { r.category }
                </p>
                <p data-testid={ `${i}-${r.category}-horizontal-tag` }>
                  { r.category }
                </p>
                <Link to={ `/${r.type}s/${r.id}` }>
                  <span
                    data-testid={ `${i}-horizontal-name` }
                    className="favorite-card-name"
                  >
                    { r.name }
                  </span>
                </Link>
                {
                  stringToArray(r.tags) === null ? ''
                    : (stringToArray(r.tags)).map((tag) => (
                      <span
                        key={ tag }
                        data-testid={ `${i}-${tag}-horizontal-tag` }
                        className="favorite-card-tag"
                      >
                        { tag }
                      </span>
                    ))
                }
              </Link>
              <RecipeFavorite data={ r } i={ i } />
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

RecipeFavoriteCard.propTypes = { recipes: PropTypes.shape([]).isRequired };

export default RecipeFavoriteCard;
