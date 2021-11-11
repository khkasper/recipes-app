import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RecipeShare from './RecipeShare';

const RecipeDoneCard = ({ recipes }) => (
  <div>
    {
      recipes && (
        recipes.map((rec, i) => (
          <div
            key={ i }
            className="recipes-done-card"
          >
            <Link to={ `/${rec.type}s/${rec.id}` }>
              <img
                data-testid={ `${i}-horizontal-image` }
                src={ rec.image }
                alt={ rec.name }
                className="done-recipe-img"
              />
              <p data-testid={ `${i}-horizontal-top-text` }>
                { rec.area.length > 0 ? `${rec.area} - ` : ''}
                { rec.alcoholicOrNot.length > 0 ? `${rec.alcoholicOrNot} - ` : ''}
                { rec.category }
              </p>
              <Link to={ `/${rec.type}s/${rec.id}` }>
                <p data-testid={ `${i}-horizontal-name` }>
                  { rec.name }
                </p>
              </Link>
              <p data-testid={ `${i}-horizontal-done-date` }>{ rec.doneDate }</p>
              { rec.tags.map((tag) => (
                <span key={ tag } data-testid={ `${i}-${tag}-horizontal-tag` }>
                  { tag }
                </span>
              )) }
              <RecipeShare
                cat={
                  rec.alcoholicOrNot.length > 0 ? 'bebidas' : 'comidas'
                }
                id={ rec.id }
                i={ i }
              />
            </Link>
          </div>
        ))
      )
    }
  </div>
);

RecipeDoneCard.propTypes = { recipes: PropTypes.shape([]).isRequired };

export default RecipeDoneCard;
