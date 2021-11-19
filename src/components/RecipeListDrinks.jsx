import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import ContextPrimary from '../context/ContextPrimary';

const RecipeListDrinks = ({ list }) => (
  // const { selectedIngredient, allDrinks } = useContext(ContextPrimary);

  // if (selectedIngredient) {
  //   const novaListaBebidas = allDrinks.filter((drinks) => (
  //     drinks.strIngredient1
  //       || drinks.strIngredient2
  //       || drinks.strIngredient3
  //       || drinks.strIngredient4
  //       || drinks.strIngredient5
  //       || drinks.strIngredient6
  //       || drinks.strIngredient7
  //   ).includes(selectedIngredient));
  //   return (
  //     <div className="recipe-list">
  //       {novaListaBebidas.map((item, index) => (
  //         <div
  //           data-testid={ `${index}-recipe-card` }
  //           key={ index }
  //           className="food-card-list"
  //         >
  //           <Link to={ `/bebidas/${item.idDrink}` }>
  //             <img
  //               data-testid={ `${index}-card-img` }
  //               alt={ item.strDrink }
  //               src={ item.strDrinkThumb }
  //               className="food-card-img"
  //             />
  //             <span
  //               data-testid={ `${index}-card-name` }
  //               className="food-card-name"
  //             >
  //               {item.strDrink}
  //             </span>
  //           </Link>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }

  // return (
  <div className="recipe-list">
    {list.map((item, index) => (
      <div
        data-testid={ `${index}-recipe-card` }
        key={ index }
        className="food-card-list"
      >
        <Link to={ `/bebidas/${item.idDrink}` }>
          <img
            data-testid={ `${index}-card-img` }
            alt={ item.strDrink }
            src={ item.strDrinkThumb }
            className="food-card-img"
          />
          <span data-testid={ `${index}-card-name` } className="food-card-name">
            {item.strDrink}
          </span>
        </Link>
      </div>
    ))}
  </div>
  // );
);

RecipeListDrinks.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RecipeListDrinks;
