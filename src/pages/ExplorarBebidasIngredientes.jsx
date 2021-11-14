import React, { useEffect, useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ContextPrimary from '../context/ContextPrimary';
import { LIST_ALL_DRINKS_INGREDIENTS, TWELVE } from '../services/NoMagicStuff';

export default function ExplorarBebidasIngredientes() {
  const { setIngredient } = useContext(ContextPrimary);
  useEffect(() => {
    async function getIngredientsList() {
      const response = await fetch(LIST_ALL_DRINKS_INGREDIENTS);
      const result = await response.json();
      setIngredient(result.drinks.slice(0, TWELVE));
    }
    getIngredientsList();
  }, [setIngredient]);

  return (
    <>
      <Header headerTitle="Explorar Ingredientes" showSearchBar={ false } />
      {/* <div data-testid="${index}-ingredient-card">gg</div>
      <img data-testid="${index}-card-img" alt="" />
      <h2 data-testid="${index}-card-name" /> */}
      <Footer />
    </>
  );
}
