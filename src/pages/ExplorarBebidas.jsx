import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ExplorarBebidas() {
  return (
    <>
      <Header headerTitle="Explorar Bebidas" showSearchBar={ false } />
      <button type="button" data-testid="explore-by-ingredient">Por Ingredientes</button>
      <button type="button" data-testid="explore-surprise">Me Surpreenda!</button>
      <Footer />
    </>
  );
}
