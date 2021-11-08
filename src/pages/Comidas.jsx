import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ContextPrimary from '../context/ContextPrimary';
import Header from '../components/Header';
import RecipeList from '../components/RecipeList';
import Footer from '../components/Footer';
import CategoryFilter from '../components/CategoryFilter';

export default function Comidas() {
  const location = useLocation();
  let page = location.pathname;
  page = page.replace('/', '');
  const { setCurrentPage, mealsArray, meals, mealsCatList } = useContext(ContextPrimary);
  const handlePage = () => setCurrentPage(page);
  useEffect(() => {
    handlePage();
  });

  return (
    <div>
      <Header headerTitle="Comidas" />
      <div className="categories">
        <CategoryFilter list={ mealsCatList } />
      </div>
      { mealsArray && <RecipeList list={ meals } page="comidas" />}
      <Footer />
    </div>
  );
}
