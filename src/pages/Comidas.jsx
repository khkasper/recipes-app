import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ContextPrimary from '../context/ContextPrimary';
import Header from '../components/Header';
import RecipeList from '../components/RecipeList';
import Footer from '../components/Footer';

export default function Comidas() {
  const location = useLocation();
  let page = location.pathname;
  page = page.replace('/', '');
  const { setCurrentPage, isArray, meals } = useContext(ContextPrimary);
  const handlePage = () => setCurrentPage(page);

  useEffect(() => {
    handlePage();
  });

  return (
    <div>
      <Header headerTitle="Comidas" />
      { isArray && <RecipeList list={ meals } page="comidas" />}
      <Footer />
    </div>
  );
}
