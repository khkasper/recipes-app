import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ContextPrimary from '../context/ContextPrimary';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchMealsFilteredbYIngredient } from '../services/AllResultsAPI';

export default function ExplorarComidasIngredientes() {
  const {
    mealsIngredients,
    setSelectedMealIngredient,
    setMealsFilteredByIngredient,
  } = useContext(ContextPrimary);
  const history = useHistory();
  const handleClick = async (e) => {
    setSelectedMealIngredient(e);
    const filtered = await fetchMealsFilteredbYIngredient(e);
    await setMealsFilteredByIngredient(filtered);
    history.push('/comidas');
  };

  return (
    <>
      <Header headerTitle="Explorar Ingredientes" showSearchBar={ false } />
      <div className="ingredients-list">
        {mealsIngredients.map((ingredient, index) => (
          <button
            type="button"
            key={ index }
            onClick={ () => handleClick(ingredient.strIngredient) }
            data-testid={ `${index}-ingredient-card` }
            className="ingredient-card"
          >
            <img
              src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
              data-testid={ `${index}-card-img` }
              alt={ `${index}-card-name` }
              className="img-ingredient"
            />
            <p
              data-testid={ `${index}-card-name` }
              className="p-ingredient-name"
            >
              {ingredient.strIngredient}
            </p>
          </button>
        ))}
      </div>
      <Footer />
    </>
  );
}
