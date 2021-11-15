import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

export default function Footer() {
  return (
    <div data-testid="footer" className="bottom-footer footer">
      <Link
        to="/bebidas"
      >
        <button
          type="button"
          name="bebidas"
        >
          <img
            alt="img-drink"
            src={ drinkIcon }
            data-testid="drinks-bottom-btn"
          />
        </button>
      </Link>
      <Link
        to="/explorar"
      >
        <button
          type="button"
          name="explorar"
        >
          <img
            alt="img-explore"
            src={ exploreIcon }
            data-testid="explore-bottom-btn"
          />
        </button>
      </Link>
      <Link
        to="/comidas"
      >
        <button
          type="button"
          name="bebidas"
        >
          <img
            alt="img-meals"
            src={ mealIcon }
            data-testid="food-bottom-btn"
          />
        </button>
      </Link>
    </div>
  );
}
