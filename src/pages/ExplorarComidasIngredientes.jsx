import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ContextPrimary from '../context/ContextPrimary';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ExplorarComidasIngredientes() {
  const { mealsIngredients,
    setSelectedIngredient } = useContext(ContextPrimary);
  const history = useHistory();
  const handleClick = (e) => {
    setSelectedIngredient(e);
    history.push('/comidas');
  };

  return (
    <>
      <Header headerTitle="Explorar Ingredientes" showSearchBar={ false } />
      {mealsIngredients.map((ingredient, index) => (
        <button
          type="button"
          key={ index }
          onClick={ () => handleClick(ingredient.strIngredient) }
          data-testid={ `${index}-ingredient-card` }
        >
          <img src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` } data-testid={ `${index}-card-img` } alt="imagem" />
          <h2
            data-testid={ `${index}-card-name` }
          >
            {ingredient.strIngredient}
          </h2>
        </button>
      ))}

      <Footer />
    </>
  );
}
