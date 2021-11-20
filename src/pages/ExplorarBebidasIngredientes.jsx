import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ContextPrimary from '../context/ContextPrimary';

export default function ExplorarBebidasIngredientes() {
  const { drinksIngredients,
    setSelectedIngredient } = useContext(ContextPrimary);
  const history = useHistory();
  const handleClick = (e) => {
    setSelectedIngredient(e);
    history.push('/bebidas');
  };

  return (
    <>
      <Header headerTitle="Explorar Ingredientes" showSearchBar={ false } />
      {drinksIngredients.map((ingredient, index) => (
        <button
          type="button"
          key={ index }
          onClick={ () => handleClick(ingredient.strIngredient1) }
          data-testid={ `${index}-ingredient-card` }
        >
          <img src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` } data-testid={ `${index}-card-img` } alt="imagem" />
          <h2
            data-testid={ `${index}-card-name` }
          >
            {ingredient.strIngredient1}
          </h2>
        </button>
      ))}
      <Footer />
    </>
  );
}
