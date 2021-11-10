import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ExplorarComidas() {
  return (
    <>
      <Header headerTitle="Explorar Comidas" showSearchBar={ false } />
      <button type="button" data-testid="explore-by-ingredient">Por Ingredientes</button>
      <button type="button" data-testid="explore-by-area">Por Local de Origem</button>
      <button type="button" data-testid="explore-surprise">Me Surpreenda!</button>
      <Footer />
    </>
  );
}
