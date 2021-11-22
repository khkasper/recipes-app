import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ContextPrimary from '../context/ContextPrimary';
import Header from '../components/Header';
import RecipeListMeals from '../components/RecipeListMeals';
import Footer from '../components/Footer';
import CategoryFilter from '../components/CategoryFilter';

export default function Comidas() {
  const location = useLocation();
  let page = location.pathname;
  let mealsOrigin;
  page = page.replace('/', '');
  const {
    setCurrentPage,
    mealsArray,
    meals,
    mealsCatList,
    mealsFilteredByIngredient,
    selectedMealIngredient,
  } = useContext(ContextPrimary);

  const handlePage = () => setCurrentPage(page);

  if (selectedMealIngredient !== null) {
    mealsOrigin = mealsFilteredByIngredient;
  } else {
    mealsOrigin = meals;
  }

  useEffect(() => {
    handlePage();
  });

  return (
    <div>
      <Header headerTitle="Comidas" />
      <div className="categories">
        <CategoryFilter list={ mealsCatList } />
      </div>
      { mealsArray && <RecipeListMeals list={ mealsOrigin } page="comidas" />}
      <Footer />
    </div>
  );
}
