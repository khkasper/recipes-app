import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ContextPrimary from '../context/ContextPrimary';
import Header from '../components/Header';
import RecipeList from '../components/RecipeList';

export default function Bebidas() {
  const location = useLocation();
  let page = location.pathname;
  page = page.replace('/', '');
  const { setCurrentPage, isArray, drinks } = useContext(ContextPrimary);
  const handlePage = () => setCurrentPage(page);

  useEffect(() => {
    handlePage();
  });

  return (
    <div>
      <Header headerTitle="Bebidas" />
      { isArray && <RecipeList list={ drinks } page="bebidas" />}
    </div>
  );
}
