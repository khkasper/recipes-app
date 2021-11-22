import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ContextPrimary from '../context/ContextPrimary';
import { fetchDrinksFilteredbYIngredient } from '../services/AllResultsAPI';

export default function ExplorarBebidasIngredientes() {
  const {
    drinksIngredients,
    setSelectedDrinkIngredient,
    setDrinksFilteredByIngredient,
  } = useContext(ContextPrimary);
  const history = useHistory();
  const handleClick = async (e) => {
    setSelectedDrinkIngredient(e);
    const filtered = await fetchDrinksFilteredbYIngredient(e);
    await setDrinksFilteredByIngredient(filtered);
    history.push('/bebidas');
  };

  return (
    <>
      <Header headerTitle="Explorar Ingredientes" showSearchBar={ false } />
      <div className="ingredients-list">
        {drinksIngredients.map((ingredient, index) => (
          <button
            type="button"
            key={ index }
            onClick={ () => handleClick(ingredient.strIngredient1) }
            data-testid={ `${index}-ingredient-card` }
            className="ingredient-card"
          >
            <img
              src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
              data-testid={ `${index}-card-img` }
              alt={ `${index}-card-name` }
              className="img-ingredient"
            />
            <p
              data-testid={ `${index}-card-name` }
              className="p-ingredient-name"
            >
              {ingredient.strIngredient1}
            </p>
          </button>
        ))}
      </div>
      <Footer />
    </>
  );
}
