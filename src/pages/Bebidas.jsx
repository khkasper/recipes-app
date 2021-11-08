import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import ContextPrimary from '../context/ContextPrimary';

export default function Bebidas() {
  const location = useLocation();
  let page = location.pathname;
  page = page.replace('/', '');
  const { setCurrentPage } = useContext(ContextPrimary);
  const handlePage = () => setCurrentPage(page);

  useEffect(() => {
    handlePage();
  });

  return (
    <div>
      <Header headerTitle="Bebidas" />
    </div>
  );
}
