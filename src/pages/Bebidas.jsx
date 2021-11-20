import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ContextPrimary from '../context/ContextPrimary';
import Header from '../components/Header';
import RecipeListDrinks from '../components/RecipeListDrinks';
import Footer from '../components/Footer';
import CategoryFilter from '../components/CategoryFilter';

export default function Bebidas() {
  const location = useLocation();
  let page = location.pathname;
  let drinksOrigin;
  page = page.replace('/', '');
  const { setCurrentPage,
    drinksArray,
    drinks,
    drinksCatList,
    drinksFilteredByIngredient,
    selectedDrinkIngredient,
  } = useContext(ContextPrimary);

  const handlePage = () => setCurrentPage(page);

  if (selectedDrinkIngredient !== null) {
    drinksOrigin = drinksFilteredByIngredient;
  } else {
    drinksOrigin = drinks;
  }

  useEffect(() => {
    handlePage();
  });

  return (
    <div>
      <Header headerTitle="Bebidas" />
      <div className="categories">
        <CategoryFilter list={ drinksCatList } />
      </div>
      { drinksArray && <RecipeListDrinks list={ drinksOrigin } page="bebidas" />}
      <Footer />
    </div>
  );
}
