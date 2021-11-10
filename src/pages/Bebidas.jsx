import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ContextPrimary from '../context/ContextPrimary';
import Header from '../components/Header';
import RecipeList from '../components/RecipeList';
import Footer from '../components/Footer';
import CategoryFilter from '../components/CategoryFilter';

export default function Bebidas() {
  const location = useLocation();
  let page = location.pathname;
  page = page.replace('/', '');
  const { setCurrentPage,
    drinksArray,
    drinks,
    drinksCatList } = useContext(ContextPrimary);
  const handlePage = () => setCurrentPage(page);

  useEffect(() => {
    handlePage();
  });

  return (
    <div>
      <Header headerTitle="Bebidas" />
      <div className="categories">
        <CategoryFilter list={ drinksCatList } />
      </div>
      { drinksArray && <RecipeList list={ drinks } page="bebidas" />}
      <Footer />
    </div>
  );
}
