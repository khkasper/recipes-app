import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import ContextPrimary from '../context/ContextPrimary';

const RecipeListMeals = ({ list }) => (
  // const { selectedIngredient, allMeals } = useContext(ContextPrimary);

  // if (selectedIngredient) {
  //   const novaListaComidas = allMeals.filter((meals) => (
  //     meals.strIngredient1
  //       || meals.strIngredient2
  //       || meals.strIngredient3
  //       || meals.strIngredient4
  //       || meals.strIngredient5
  //       || meals.strIngredient6
  //       || meals.strIngredient7
  //   ).includes(selectedIngredient));
  //   return (
  //     <div className="recipe-list">
  //       {novaListaComidas.map((item, index) => (
  //         <div
  //           data-testid={ `${index}-recipe-card` }
  //           key={ index }
  //           className="food-card-list"
  //         >
  //           <Link to={ `/comidas/${item.idMeal}` }>
  //             <img
  //               data-testid={ `${index}-card-img` }
  //               alt={ item.strMeal }
  //               src={ item.strMealThumb }
  //               className="food-card-img"
  //             />
  //             <span
  //               data-testid={ `${index}-card-name` }
  //               className="food-card-name"
  //             >
  //               {item.strMeal}
  //             </span>
  //           </Link>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }

  // return (
  <div className="recipe-list">
    {
      list.map((item1, index) => (
        <div
          data-testid={ `${index}-recipe-card` }
          key={ index }
          className="food-card-list"
        >
          <Link
            to={ `/comidas/${item1.idMeal}` }
          >
            <img
              data-testid={ `${index}-card-img` }
              alt={ item1.strMeal }
              src={ item1.strMealThumb }
              className="food-card-img"
            />
            <span
              data-testid={ `${index}-card-name` }
              className="food-card-name"
            >
              { item1.strMeal }
            </span>
          </Link>
        </div>
      ))
    }
  </div>
  // );
);

RecipeListMeals.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RecipeListMeals;
