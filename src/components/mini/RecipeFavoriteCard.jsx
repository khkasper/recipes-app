import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RecipeShare from './RecipeShare';
import RecipeFavorite from './RecipeFavorite';

const RecipeFavoriteCard = ({ recipes }) => (
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
                width="150px;"
              />
            </Link>
            <p data-testid={ `${i}-horizontal-top-text` }>
              { r.area.length > 0 ? `${r.area} - ` : ''}
              { r.alcoholicOrNot.length > 0 ? `${r.alcoholicOrNot} - ` : ''}
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

RecipeFavoriteCard.propTypes = { recipes: PropTypes.shape([]).isRequired };

export default RecipeFavoriteCard;
